package hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.java.guice.ScenarioScoped;
import nicebank.AtmServer;
import nicebank.CashSlot;
import support.KnowsTheDomain;
import support.TestAccount;
import support.TestCashSlot;

import javax.inject.Inject;

@ScenarioScoped
public class ServerHooks {

    public static final int PORT = 8887;

    private AtmServer server;
    private KnowsTheDomain helper;
//    private TestAccount account;
    private CashSlot cashSlot;


    @Inject
    public ServerHooks(KnowsTheDomain helper, TestCashSlot cashSlot) {
        this.helper = helper;
        this.cashSlot = cashSlot;
    }

    @Before("@UI")
    public void startServer() throws Exception {
        server = new AtmServer(PORT, cashSlot, helper.getMyAccount());
        server.start();
    }

    @After("@UI")
    public void stopServer() throws Exception {
        server.stop();
    }
}
