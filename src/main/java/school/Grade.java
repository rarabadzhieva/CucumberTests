package school;

import cucumber.api.DataTable;
import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.Model;

import java.util.List;
import java.util.Map;

public class Grade extends Model {


    public Grade() {}

    public Grade(int studentID, int subjectID, int grade) {
        setInteger("studentid", studentID);
        setInteger("subjectid", subjectID);
        setInteger("grade", grade);
    }

    public void insertGrades(String subject, DataTable studentGrades, int year) {
        Subject sub = new Subject();
        Student student = new Student();
        int subID = sub.getSubjectId(subject, year);
        for (List<String> studentGrade : studentGrades.raw()) {
            String name = studentGrade.get(0);
            String grade = studentGrade.get(1);
            new Student(name, year).saveIt();
            new Grade(student.getStudentId(name), subID, Integer.parseInt(grade)).saveIt();
        }
    }

    public double averageGrade(String subject, int year) {
        Subject sub = new Subject();
        int id = sub.getSubjectId(subject, year);
        List<Grade> gradeList = Grade.findBySQL("SELECT grade FROM grades WHERE subjectid = ?", id);
        int count = gradeList.size();
        int sum = 0;
        for (Grade grade : gradeList) {
            sum += (int) (grade.get("grade"));
        }
        return  (double) sum/count;
    }

    public void joinTables() {
        List<Map> results = Base.findAll("SELECT students.name, students.year, grades.grade FROM students INNER JOIN grades ON students.id=grades.studentid;");
        System.out.println(results);
    }
}
