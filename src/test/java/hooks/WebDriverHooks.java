package hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import support.EmagHelper;
import support.KnowsTheDomain;
import support.MyWebDriver;

import javax.inject.Inject;

@ScenarioScoped
public class WebDriverHooks {

    private final EventFiringWebDriver webDriver;
    EmagHelper helper;

    @Inject
    public WebDriverHooks(MyWebDriver webDriver, EmagHelper helper) {
        this.webDriver = webDriver;
        this.helper = helper;
    }

    @Before("@UI_emag")
    public void setUp() {
        helper.getDriver();
    }

    @After("@UI_emag")
    public void tearDown() {
        helper.closeDriver();
    }

    @After("@UI")
    public void finish(Scenario scenario) {
        try {
            byte[] screenshot =
                    webDriver.getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
            System.err.println(somePlatformsDontSupportScreenshots.getMessage());
        }
        finally {
            webDriver.close();
        }
    }
}
