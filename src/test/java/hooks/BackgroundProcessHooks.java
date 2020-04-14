package hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.java.guice.ScenarioScoped;

import nicebank.TransactionProcessor;

@ScenarioScoped
public class BackgroundProcessHooks {
    private Thread transactionProcessorThread;

    @Before("@UI")
    public void startBackgroundThread() {
        transactionProcessorThread = new Thread() {
            public void run() {
                TransactionProcessor processor = new TransactionProcessor();
                processor.process();
            }
        };

        transactionProcessorThread.start();
    }

    @After("@UI")
    public void stopBackgroundThread() {
        transactionProcessorThread.interrupt();
    }
}
