package hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.runtime.java.guice.ScenarioScoped;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriverException;
import support.KnowsTheDomain;

import javax.inject.Inject;

@ScenarioScoped
public class WebDriverHooks {

    private KnowsTheDomain helper;

    @Inject
    public WebDriverHooks(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @After("@UI")
    public void finish(Scenario scenario) {
        try {
            byte[] screenshot =
                    helper.getWebDriver().getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
            System.err.println(somePlatformsDontSupportScreenshots.getMessage());
        }
        finally {
            helper.getWebDriver().close();
        }
    }
}
