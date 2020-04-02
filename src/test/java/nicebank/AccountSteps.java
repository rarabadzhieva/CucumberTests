package nicebank;

import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.junit.Assert;
import support.KnowsTheDomain;
import support.TestAccount;
import transforms.MoneyConverter;

import javax.inject.Inject;

@ScenarioScoped
public class AccountSteps {

    KnowsTheDomain account;
//    TestAccount account;

    @Inject
    public AccountSteps(KnowsTheDomain account) {
        this.account = account;
    }

    @Given("^my account has been credited with (\\$\\d+\\.\\d+)$")
    public void creditAccountWith(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        account.getMyAccount().credit(amount);
    }

    @And("^the balance of my account should be (\\$\\d+\\.\\d+)$")
    public void checkAccountBalance(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        int timeoutMilliSecs = 3000;
        int pollIntervalMilliSecs = 100;

        while (!account.getMyAccount().getBalance().equals(amount) && timeoutMilliSecs > 0) {
            Thread.sleep(pollIntervalMilliSecs);
            timeoutMilliSecs -= pollIntervalMilliSecs;
        }
        Assert.assertEquals("Incorrect account balance -", amount, account.getMyAccount().getBalance());
    }
}
