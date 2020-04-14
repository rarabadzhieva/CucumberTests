package web_services.rest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;

import javax.inject.Inject;
import java.util.Map;

public class RestSteps {

    Response response;

    @Inject
    Support support;

    public RestSteps() {
    }

    @Given("^I have credentials for the service$")
    public void buildAuthRequest() {
        support.buildRequest();
    }

    @When("^I create new user$")
    public void createNewUser() {
        support.createUserCheckResponse();
    }

    @When("^I update user's status and phone$")
    public void updateUser() {
        support.updateUserCheckResponse();
    }

    @When("^I delete the user")
    public void deleteUser() {
        support.deleteUserCheckResponse();
    }

    @Then("^the user's info should be accessible$")
    public void checkCreatedUser() {
        response = Support.request.get("/" + Support.userID);
        Map<String, Object> result = response.jsonPath().getMap("result");
        Assert.assertEquals("Incorrect first name -", Support.FIRST_NAME, result.get("first_name"));
        Assert.assertEquals("Incorrect last name -", Support.LAST_NAME, result.get("last_name"));
        Assert.assertEquals("Incorrect gender -", Support.GENDER, result.get("gender"));
        Assert.assertEquals("Status code does not match! " , 200, response.getStatusCode());
    }

    @Then("^user's info should updated$")
    public void checkUpdatedUser() {
        response = Support.request.get("/" + Support.userID);
        Map<String, Object> result = response.jsonPath().getMap("result");
        Assert.assertEquals("Incorrect first name -", Support.FIRST_NAME, result.get("first_name"));
        Assert.assertEquals("Incorrect status -", Support.STATUS, result.get("status"));
        Assert.assertEquals("Incorrect phone number -", Support.PHONE, result.get("phone"));
        Assert.assertEquals("Status code does not match! " , 200, response.getStatusCode());
    }

    @Then("^the user should not exist any more$")
    public void checkDeletedUser() {
        response = Support.request.get("/" + Support.userID);
        Map<String, Object> meta = response.jsonPath().getMap("_meta");
        int code = (int) (meta.get("code"));
        Assert.assertEquals("Incorrect message -", "The requested resource does not exist.", meta.get("message"));
        Assert.assertEquals("Status code from _meta does not match! ", 404, code);
        Assert.assertEquals("Status code does not match! " , 200, response.getStatusCode());
    }
}
