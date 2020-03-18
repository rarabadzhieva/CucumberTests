package checkout;

import io.cucumber.java.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.Assert.*;

public class StepDefinitions {

    int bananaPrice = 0;

    @Given("^the price of a \"(.*)\" is (.*)c$")
    public void thePriceOfAIsC(String name, int price) throws Throwable {
        int bananaPrice = price;
    }

    Checkout checkout = new Checkout();

    @When("^I checkout (.*) \"(.*)\"$")
    public void iCheckout(int itemCount, String itemName) throws Throwable {
        checkout.add(itemCount, bananaPrice);
    }

    @Then("^the total price should be (.*)c$")
    public void theTotalPriceShouldBeC(int total) throws Throwable {
        assertEquals(total, checkout.total());
    }

}
