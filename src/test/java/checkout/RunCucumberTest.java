package checkout;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = false,
        features = {"src/main/resources/features"},
        plugin = {"pretty", "json:target/cucumber.json"},
        glue = {"checkout"},
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        dryRun = false
        )
public class RunCucumberTest {
}
