package hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.java.guice.ScenarioScoped;
import nicebank.AtmServer;
import support.KnowsTheDomain;

import javax.inject.Inject;

@ScenarioScoped
public class ServerHooks {

    public static final int PORT = 8887;

    private AtmServer server;
    private KnowsTheDomain helper;

    @Inject
    public ServerHooks(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @Before("@UI")
    public void startServer() throws Exception {
        server = new AtmServer(PORT, helper.getCashSlot(), helper.getMyAccount());
        server.start();
    }

    @After("@UI")
    public void stopServer() throws Exception {
        server.stop();
    }
}
