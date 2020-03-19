package checkout;

import io.cucumber.java.en.*;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.HashMap;

import static org.junit.Assert.*;

public class StepDefinitions {

    HashMap<String, Integer> itemPrice = new HashMap<>();
    Checkout checkout = new Checkout();

    @Given("^the price of a (.*) is (.*) c$")
    public void thePriceOfAIsC(String name, int price) throws Throwable {
         itemPrice.put(name, price);
    }

    @When("^I checkout (.*) (.*)$")
    public void iCheckout(int itemCount, String itemName) throws Throwable {
        checkout.add(itemCount, itemPrice.get(itemName));
    }

    @Then("^the total price should be (.*)c$")
    public void theTotalPriceShouldBeC(int total) throws Throwable {
        assertEquals(total, checkout.total());
    }
}
