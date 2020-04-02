package nicebank;

import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.junit.Assert;
import support.KnowsTheDomain;
import transforms.MoneyConverter;

import javax.inject.Inject;

@ScenarioScoped
public class AccountSteps {

    KnowsTheDomain helper;

    @Inject
    public AccountSteps(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @Given("^my account has been credited with (\\$\\d+\\.\\d+)$")
    public void creditAccountWith(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        helper.getMyAccount().credit(amount);
    }

    @And("^the balance of my account should be (\\$\\d+\\.\\d+)$")
    public void checkAccountBalance(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        Assert.assertEquals("Incorrect account balance -", amount, helper.getMyAccount().getBalance());
    }
}
