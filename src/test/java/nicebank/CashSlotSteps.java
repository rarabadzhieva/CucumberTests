package nicebank;

import cucumber.api.java.en.Then;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.junit.Assert;
import support.TestCashSlot;

import javax.inject.Inject;

@ScenarioScoped
public class CashSlotSteps {

    CashSlot cashSlot;

    @Inject
    public CashSlotSteps(TestCashSlot cashSlot) {
        this.cashSlot = cashSlot;
    }

    @Then("^\\$(\\d+) should be dispensed$")
    public void checkDispensedAmount(int dollars) throws Throwable {
        Assert.assertEquals("Incorrect amount dispensed", dollars, cashSlot.getContent());
    }

}
