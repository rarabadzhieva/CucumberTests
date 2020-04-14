package support;

import cucumber.runtime.java.guice.ScenarioScoped;
import emag.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import javax.inject.Inject;

@ScenarioScoped
public class EmagHelper {

    WebDriver driver;
    BasePage page;

    @Inject
    public EmagHelper() {}

    public WebDriver getDriver() {
        if (driver == null) {
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.setHeadless(true);
            driver = new ChromeDriver(chromeOptions);
        }
        return driver;
    }

    public void closeDriver() {
        if (driver != null) {
            driver.close();
        }
    }

    public BasePage getPage() {
        if (page == null) {
            page = new BasePage(driver);
        }
        return page;
    }
}
