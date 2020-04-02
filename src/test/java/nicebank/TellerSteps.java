package nicebank;

import cucumber.api.java.en.When;
import cucumber.runtime.java.guice.ScenarioScoped;
import support.AtmUserInterface;
import support.KnowsTheDomain;
import support.TestAccount;

import javax.inject.Inject;

@ScenarioScoped
public class TellerSteps {

    KnowsTheDomain account;
//    TestAccount account;
    Teller teller;

    @Inject
    public TellerSteps(AtmUserInterface teller, KnowsTheDomain account) {
        this.teller = teller;
        this.account = account;
    }

    @When("^I withdraw \\$(\\d+)$")
    public void withdraw(int dollars) throws Throwable {
        teller.withdrawFrom(account.getMyAccount(), dollars);
    }
}
