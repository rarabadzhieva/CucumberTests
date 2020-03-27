package nicebank;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;

public class BankStepDef {

    @Given("^I have deposited \\$(\\d+) in my (\\w+) Account$")
    public void depositedIntoAccount(int amount, String accountType) throws Throwable {
        System.out.println("amount: " + amount);
        System.out.println("account type: " + accountType);
    }

    @When("^I transfer \\$(\\d+) from my (\\w+) Account into my (\\w+) Account$")
    public void transferFromAccountToAccount(int amount, String fromAccountType, String toAccountType) throws Throwable {
        System.out.println("amount: " + amount);
        System.out.println("FROM account type: " + fromAccountType);
        System.out.println("TO account type: " + toAccountType);
    }

    @Then("^the balance of (.*) Account should be (.*)$")
    public void checkAccountBalance(String accountType, String amount) throws Throwable {
        switch (accountType) {
            case "my":
                System.out.println("remaining amount: " + amount);
                break;
            case "the Checking":
            case "the Savings":
                System.out.println("amount: " + amount);
                System.out.println("account type: " + accountType);
                break;
            default:
                throw new PendingException("Undefined step definition: the balance of " + accountType + " Account should be " + amount);
        }
    }

    @Given("^I have \\$(\\d+) in my account$")
    public void depositMyAccount(int amount) throws Throwable {
        System.out.println("balance amount: " + amount);
    }

    @When("^I choose to withdraw the fixed amount of \\$(\\d+)$")
    public void withdrawFixedAmount(int amount) throws Throwable {
        System.out.println("fixed amount: " + amount);
    }

    @Then("^I should (.*)$")
    public void checkOutcome(String outcome) throws Throwable {
        System.out.println("outcome: " + outcome);
    }
}
