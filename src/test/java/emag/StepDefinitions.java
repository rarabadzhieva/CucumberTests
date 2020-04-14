package emag;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.java.guice.ScenarioScoped;
import support.EmagHelper;

import javax.inject.Inject;

@ScenarioScoped
public class StepDefinitions {

    EmagHelper helper;
    private static final String URL = "https://www.emag.bg";

    @Inject
    public StepDefinitions(EmagHelper helper) {
        this.helper = helper;
    }

    @Given("^I want to buy (.*) from eMAG$")
    public void goToEmag(String item) throws Throwable {
        helper.getDriver().get(URL);
        switch (item) {
            case "an item":
                break;
            case "books":
                helper.getPage().navigateToBookCategory();
                break;
            case "an item as logged user":
                helper.getPage().clickLoginAccount();
                break;
            default:
                throw new PendingException("Undefined step definition: I want to buy \"" + item + "\" from eMAG");
        }
    }

    @When("^I login into my account$")
    public void loginAccount() throws Throwable {
        helper.getPage().enterEmailAddressAndSubmit();
        helper.getPage().enterPasswordAndSubmit();
    }

    @Then("^I should see greeting and my name on the account dropdown$")
    public void verifySignIn() throws Throwable {
        helper.getPage().signInVerification();
    }

    @When("^I search for ([^\"]*)$")
    public void searchFor(String item) throws Throwable {
        helper.getPage().searchFor(item);
    }

    @Then("^([^\"]*) are shown$")
    public void checkResults(String results) throws Throwable {
        helper.getPage().verifySearchResults(results);
    }

    @When("^I add Harry Potter Collection to the basket$")
    public void addBookToBasket() throws Throwable {
        helper.getPage().addHarryPotterCollection();
    }

    @Then("^modal dialog is displayed$")
    public void checkModalDialog() {
        helper.getPage().checkModalDialogAndClose();
    }

    @And("^the basket has (\\d+) (?:item|items)$")
    public void checkBasket(int count) {
        helper.getPage().verifyBasketContent(count);
    }
}
