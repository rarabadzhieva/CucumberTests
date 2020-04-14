package school;

import cucumber.api.DataTable;
import org.javalite.activejdbc.Model;

import java.util.List;

public class Student extends Model {

    public Student() {}

    public Student(String name, int year) {
        setString("name", name);
        setInteger("year", year);
    }

    public void deleteStudentsFrom(int year) {
        Student.delete("year = ?", year);
    }

    public void addStudentsFrom(DataTable students, int year) {
       for (List<String> studentList : students.raw()) {
            String name = studentList.get(0);
            new Student(name, year).saveIt();
        }
    }

    public long getAllStudentsFrom(int year) {
        return Student.count("year = ?", year);
    }

    public int getStudentId(String name) {
        List<Student> el = Student.findBySQL("SELECT id FROM students WHERE name = ?", name);
        return (int) (el.get(0).get("id"));
    }
}
