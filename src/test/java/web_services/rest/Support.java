package web_services.rest;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
import org.junit.Assert;

import javax.inject.Singleton;
import java.util.Map;
import java.util.Random;

@Singleton
public class Support {

    Response response;
    String oath = "CquD8CKkO1lzu2iRRWWJbff6ODXJwQ0iI2vV";
    String baseURI = "https://gorest.co.in/public-api/users";

    static String userID;
    static final String FIRST_NAME = "John";
    static final String LAST_NAME = "Doe";
    static final String GENDER = "male";
    static final String STATUS = "active";
    static final String PHONE = "+123 456 789";
    static RequestSpecification request;

    public void buildRequest() {
        RestAssured.baseURI = baseURI;
        request = RestAssured.given().auth().oauth2(oath);
    }

    public void createUserCheckResponse() {
        Random random = new Random();
        String email = "test" + random.nextInt(1000) + "@example.net";
        JSONObject newUser = new JSONObject();
        newUser.put("first_name", FIRST_NAME);
        newUser.put("last_name", LAST_NAME);
        newUser.put("gender", GENDER);
        newUser.put("email", email);
        response = request.contentType("application/json").body(newUser.toString()).post();

        int code = (int) (checkResponse("_meta", "code"));
        userID = (String) (checkResponse("result", "id"));
        Assert.assertEquals("Status code from _meta does not match! ", 201, code);
        Assert.assertEquals("Status code does not match! " , 302, response.getStatusCode());
    }

    public void updateUserCheckResponse() {
        JSONObject updateUser = new JSONObject();
        updateUser.put("status", STATUS);
        updateUser.put("phone", PHONE);
        response = request.contentType("application/json").body(updateUser.toString()).put("/" + userID);

        String actualStatus = (String) (checkResponse("result", "status"));
        String actualPhone = (String) (checkResponse("result", "phone"));
        int code = (int) (checkResponse("_meta", "code"));
        Assert.assertEquals("Status not updated! " , STATUS, actualStatus);
        Assert.assertEquals("Phone not updated! " , PHONE, actualPhone);
        Assert.assertEquals("Status code from _meta does not match! ", 200, code);
        Assert.assertEquals("Status code does not match! " , 200, response.getStatusCode());
    }

    public void deleteUserCheckResponse() {
        response = request.delete("/" + userID);
        int code = (int) (checkResponse("_meta", "code"));
        Assert.assertEquals("Status code from _meta does not match! ", 204, code);
        Assert.assertEquals("Status code does not match! " , 200, response.getStatusCode());
    }

    private Object checkResponse(String path, String key) {
        Map<String, Object> result = response.jsonPath().getMap(path);
        return result.get(key);
    }
}
