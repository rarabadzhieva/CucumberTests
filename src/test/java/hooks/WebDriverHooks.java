package hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import support.KnowsTheDomain;
import support.MyWebDriver;

import javax.inject.Inject;

@ScenarioScoped
public class WebDriverHooks {

    private final EventFiringWebDriver webDriver;

    @Inject
    public WebDriverHooks(MyWebDriver webDriver) {
        this.webDriver = webDriver;
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
