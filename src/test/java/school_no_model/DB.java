package school_no_model;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class DB {

    private DBConnection dbConnection;
    private Student student;
    private Subject subject;
    private Grade grade;

    @Inject
    public DB() {
        if (dbConnection == null) {
            dbConnection = new DBConnection();
        }
    }

    public Student getStudent() {
        if (student == null) {
            student = new Student(dbConnection);
        }
        return student;
    }

    public Subject getSubject() {
        if (subject == null) {
            subject = new Subject(dbConnection);
        }
        return subject;
    }

    public Grade getGrade() {
        if (grade == null) {
            grade = new Grade(dbConnection);
        }
        return grade;
    }
}
