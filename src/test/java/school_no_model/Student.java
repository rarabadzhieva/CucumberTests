package school_no_model;

import cucumber.api.DataTable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Student {

    private DBConnection db;

    public Student(DBConnection connection) {
        this.db = connection;
    }

    public void insertStudent(String name, int year) {
        String query = "INSERT INTO students(name, year) VALUES ('" + name + "','" + year + "');";
        db.statement(query);
    }

    public void deleteStudentsFrom(int year) {
        String query = "DELETE FROM students WHERE year='" + year + "';";
        db.statement(query);
    }

    public void addStudentsFrom(DataTable students, int year) {
        for (List<String> studentList : students.raw()) {
            String name = studentList.get(0);
            insertStudent(name, year);
        }
    }

    public long getAllStudentsFrom(int year) {
        String query = "SELECT Count(name) as cnt FROM students WHERE year='" + year + "';";
        ArrayList<HashMap<String, Object>> allStudents = db.query(query);
        return  (long) (allStudents.get(0).get("cnt"));
    }

    public int getStudentId(String name) {
        String query = "SELECT id FROM students WHERE name='" + name + "';";
        ArrayList<HashMap<String, Object>> id = db.query(query);
        return (int) (id.get(0).get("id"));
    }
}
