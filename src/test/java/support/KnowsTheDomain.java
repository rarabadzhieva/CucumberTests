package support;

import cucumber.runtime.java.guice.ScenarioScoped;
import nicebank.*;

import javax.inject.Inject;

@ScenarioScoped
public class KnowsTheDomain {

    private Account myAccount;

    @Inject
    public KnowsTheDomain() {
    }

    public Account getMyAccount() {
        if (myAccount == null) {
            myAccount = new Account(1234);
            myAccount.saveIt();
        }
        return myAccount;
    }
}
