package nicebank;

import cucumber.api.java.en.Then;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.junit.Assert;
import support.KnowsTheDomain;

import javax.inject.Inject;

@ScenarioScoped
public class CashSlotSteps {

    KnowsTheDomain helper;

    @Inject
    public CashSlotSteps(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @Then("^\\$(\\d+) should be dispensed$")
    public void checkDispensedAmount(int dollars) throws Throwable {
        Assert.assertEquals("Incorrect amount dispensed", dollars, helper.getCashSlot().getContent());
    }

}
