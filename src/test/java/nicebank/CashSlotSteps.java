package nicebank;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import support.KnowsTheDomain;

public class CashSlotSteps {

    KnowsTheDomain helper;

    public CashSlotSteps(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @Then("^\\$(\\d+) should be dispensed$")
    public void checkDispensedAmount(int dollars) throws Throwable {
        Assert.assertEquals("Incorrect amount dispensed", dollars, helper.getCashSlot().getContent());
    }

}
