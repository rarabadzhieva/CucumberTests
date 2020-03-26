import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = false,
        features = {"src/main/resources/features"},
        plugin = {"pretty", "json:target/cucumber.json"},
        glue = {"checkout", "nicebank", "transforms", "hooks"},
        snippets = SnippetType.CAMELCASE,
        tags = {"~@wip"},
        dryRun = false
        )
public class RunCucumberTest {
}
