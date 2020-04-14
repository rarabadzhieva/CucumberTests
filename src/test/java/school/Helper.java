package school;

import org.javalite.activejdbc.Base;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@Singleton
public class Helper {

    private String url;
    private String name;
    private String password;

    private Student student;
    private Subject subject;
    private Grade grade;

    @Inject
    public Helper() {
        if (!Base.hasConnection()) {
            readProp();
            Base.open("com.mysql.cj.jdbc.Driver", url, name, password);
        }
    }

    private void readProp() {
        Properties properties = new Properties();
        try {
            String path = "database.properties";
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream(path);
            properties.load(inputStream);
            url = properties.getProperty("dburl");
            name = properties.getProperty("username");
            password =  properties.getProperty("password");
        } catch (IOException e) {
            System.out.println("PROPERTIES NOT FOUND!");
        }
    }

    public Student getStudent() {
        if (student == null) {
            student = new Student();
        }
        return student;
    }

    public Subject getSubject() {
        if (subject == null) {
            subject = new Subject();
        }
        return subject;
    }

    public Grade getGrade() {
        if (grade == null) {
            grade = new Grade();
        }
        return grade;
    }
}
