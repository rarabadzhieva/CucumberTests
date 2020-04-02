package support;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import javax.inject.Singleton;

@Singleton
public class MyWebDriver extends EventFiringWebDriver{

    public MyWebDriver() {
        super(new ChromeDriver());
    }
}
