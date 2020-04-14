package school_no_model;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

public class DBConnection {

    Connection connection = null;

    public DBConnection() {
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost/school", "root", "qwerty123");
            System.out.println("Open connection...");
        } catch (SQLException e) {
            System.out.println("Connecting failed: " + e.getMessage());
        }
    }

    public Boolean statement(String query) {
        Boolean isPassed = null;
        try (Statement stmt = connection.createStatement()) {
            isPassed = stmt.execute(query);
        } catch (SQLException e) {
            System.out.println("Statement failed: " + e.getMessage());
        }
        return isPassed;
    }

    public ArrayList<HashMap<String, Object>> query(String query) {
        ArrayList<HashMap<String, Object>> result = new ArrayList<>();
        try (Statement stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery(query);
            HashMap<String, Object> row = new HashMap<>();
            ResultSetMetaData metaData = rs.getMetaData();
            while (rs.next()) {
                for (int i = 1; i <= metaData.getColumnCount(); i++) {
                    String colName = metaData.getColumnName(i);
                    Object value = rs.getObject(i);
                    row.put(colName, value);
                }
                result.add(row);
            }
            rs.close();
        } catch (SQLException e) {
            System.out.println("SQL result error: " + e.getMessage());
        }
        return result;
    }
}
