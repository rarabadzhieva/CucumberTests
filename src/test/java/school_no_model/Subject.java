package school_no_model;

import cucumber.api.DataTable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Subject {

    private DBConnection db;

    public Subject(DBConnection connection) {
        this.db = connection;
    }

    public void insertSubject(String name, int year) {
        String query = "INSERT INTO subjects(name, year) VALUES ('" + name + "'," + year + ");";
        db.statement(query);
    }

    public void deleteSubjectsFrom(int year) {
        String query = "DELETE FROM subjects WHERE year='" + year + "';";
        db.statement(query);
    }

    public void addSubjectsFrom(DataTable subjects, int year) {
        for (List<String> subjectList : subjects.raw()) {
            String name = subjectList.get(0);
            insertSubject(name, year);
        }
    }

    public long getAllSubjectsFrom(int year) {
        String query = "SELECT COUNT(name) as cnt FROM subjects WHERE year=" + year;
        ArrayList<HashMap<String, Object>> allSubjects = db.query(query);
        return  (long) (allSubjects.get(0).get("cnt"));
    }

    public int getSubjectId(String name, int year) {
        String query = "SELECT id FROM subjects WHERE name='" + name + "' AND year=" + year + ";";
        ArrayList<HashMap<String, Object>> id = db.query(query);
        return (int) (id.get(0).get("id"));
    }
}
