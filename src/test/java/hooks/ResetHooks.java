package hooks;

import cucumber.api.java.Before;

import cucumber.runtime.java.guice.ScenarioScoped;
import nicebank.TransactionQueue;

@ScenarioScoped
public class ResetHooks {

    @Before
    public void reset() {
        TransactionQueue.clear();
    }
}
