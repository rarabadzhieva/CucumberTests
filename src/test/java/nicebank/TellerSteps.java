package nicebank;

import cucumber.api.java.en.When;
import cucumber.runtime.java.guice.ScenarioScoped;
import support.KnowsTheDomain;

import javax.inject.Inject;

@ScenarioScoped
public class TellerSteps {

    KnowsTheDomain helper;

    @Inject
    public TellerSteps(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @When("^I withdraw \\$(\\d+)$")
    public void withdraw(int dollars) throws Throwable {
        helper.getTeller().withdrawFrom(helper.getMyAccount(), dollars);
    }
}
