package web_services.soap;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

public class SoapSteps {

    static String response;
    static String operation;

    @When("^I (\\w+) (\\d+) (\\w+) (\\d+)$")
    public void calcTwoNumbers(String op, int num1, String preposition, int num2) {
        operation = op;
        String requestEnv;
        if (preposition.equals("from")) {
            requestEnv = String.format(Support.soapEnv, operation, num2, num1, operation);
        } else {
            requestEnv = String.format(Support.soapEnv, operation, num1, num2, operation);
        }
        response = Support.sendRequest(requestEnv, operation);
    }


    @Then("^the result is (\\d+)$")
    public void checkResult(int result) throws IOException, SAXException, ParserConfigurationException {
        Assert.assertEquals("Result is not correct -", result, Support.findResult(response, operation));
    }
}
