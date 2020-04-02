package checkout;

import cucumber.api.java.en.*;
import cucumber.runtime.java.guice.ScenarioScoped;

import java.util.HashMap;

import static org.junit.Assert.*;

@ScenarioScoped
public class StepDefinitions {

    HashMap<String, Integer> itemPrice = new HashMap<>();
    Checkout checkout = new Checkout();

    @Given("^the price of a (.*) is (.*) c$")
    public void thePriceOfIs(String name, int price) throws Throwable {
         itemPrice.put(name, price);
    }

    @When("^I checkout (.*) (.*)$")
    public void iCheckout(int itemCount, String itemName) throws Throwable {
        checkout.add(itemCount, itemPrice.get(itemName));
    }

    @Then("^the total price should be (.*)c$")
    public void checkTotalPrice(int total) throws Throwable {
        assertEquals(total, checkout.total());
    }
}
