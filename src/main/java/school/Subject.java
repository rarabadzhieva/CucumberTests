package school;

import cucumber.api.DataTable;
import org.javalite.activejdbc.Model;

import java.util.List;

public class Subject extends Model {

    public Subject() {}

    public Subject(String name, int year) {
        setString("name", name);
        setInteger("year", year);
    }

    public void deleteSubjectsFrom(int year) {
        Subject.delete("year = ?", year);
    }

    public void addSubjectFrom(String subjects, int year) {
        new Subject(subjects, year).saveIt();
    }

    public void addSubjectsFrom(DataTable subjects, int year) {
        for (List<String> subjectList : subjects.raw()) {
            String name = subjectList.get(0);
            new Subject(name, year).saveIt();
        }
    }

    public int getAllSubjectsFrom(int year) {
        List<Subject> allSubjects = Subject.where("year = ?", year);
        return allSubjects.size();
    }

    public int getSubjectId(String name, int year) {
        List<Subject> a = Subject.findBySQL("SELECT id FROM subjects WHERE name = ? AND year = ?", name, year);
        return (int) (a.get(0).get("id"));
    }
}
