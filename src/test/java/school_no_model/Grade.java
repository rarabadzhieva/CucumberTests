package school_no_model;

import cucumber.api.DataTable;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Grade {

    private DBConnection db;

    public Grade(DBConnection connection) {
        this.db = connection;
    }

    public void insertGrade(int studentID, int subjectID, int grade) {
        String query = "INSERT INTO grades(studentid, subjectid, grade) VALUES (" + studentID + ", " + subjectID + ", " + grade + ");";
        db.statement(query);
    }

    public void insertGrades(String subject, DataTable studentGrades, int year) {
        Student student = new Student(db);
        Subject sub = new Subject(db);
        int subID = sub.getSubjectId(subject, year);
        for (List<String> studentGrade : studentGrades.raw()) {
            String name = studentGrade.get(0);
            String grade = studentGrade.get(1);
            new Student(db).insertStudent(name,year);
            insertGrade(student.getStudentId(name), subID, Integer.parseInt(grade));
        }
    }

    public BigDecimal averageGrade(String subject, int year) {
        Subject sub = new Subject(db);
        int id = sub.getSubjectId(subject, year);
        String query = "SELECT ROUND(AVG(grade), 1) as avg FROM grades WHERE subjectid = " + id + ";";
        ArrayList<HashMap<String, Object>> avgGrades = db.query(query);
        return (BigDecimal) (avgGrades.get(0).get("avg"));
    }
}
