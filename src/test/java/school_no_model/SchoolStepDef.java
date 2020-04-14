package school_no_model;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.junit.Assert;

import javax.inject.Inject;

@ScenarioScoped
public class SchoolStepDef {

    private DB helper;
    int year;

    @Inject
    public SchoolStepDef(DB helper) {
        this.helper = helper;
    }

    @Given("^the school year (\\d+) has just begun$")
    public void cleanDBForYear(int year) {
        this.year = year;
        helper.getStudent().deleteStudentsFrom(year);
        helper.getSubject().deleteSubjectsFrom(year);
    }

    @When("^new students arrive in school$")
    public void addNewStudents(DataTable students) {
        helper.getStudent().addStudentsFrom(students, year);
    }

    @Then("^all (\\w+) for year (\\d+) are (\\d+)$")
    public void checkCountOf(String all, int year, int expectedCount) {
        switch (all) {
            case "students":
                Assert.assertEquals("Incorrect students count -", expectedCount, helper.getStudent().getAllStudentsFrom(year));
                break;
            case "subjects":
                Assert.assertEquals("Incorrect subject count -", expectedCount, helper.getSubject().getAllSubjectsFrom(year));
                break;
            default:
                throw new PendingException("Undefined step definition: all " + all);
        }
    }

    @When("^students have new subjects to study$")
    public void addNewSubjects(DataTable subjects) {
        helper.getSubject().addSubjectsFrom(subjects, year);
    }


    @When("^students take (\\w+) exam with this grades:$")
    public void insertGradesFor(String subject, DataTable studentsGrades) {
        helper.getSubject().insertSubject(subject, year);
        helper.getGrade().insertGrades(subject, studentsGrades, year);
    }

    @Then("^the average grade in (\\w+) for (\\d+) is (.*)$")
    public void averageGrade(String subject, int year, String expectedAverage) {
        Assert.assertEquals("Incorrect average grade -", expectedAverage, String.valueOf(helper.getGrade().averageGrade(subject, year)));
    }
}
