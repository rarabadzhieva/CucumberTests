package nicebank;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BankStepDef {

    @Given("^I have deposited \\$(\\d+) in my (\\w+) Account$")
    public void iHaveDeposited$10InMyCheckingAccount(int amount, String accountType) throws Throwable {
        System.out.println("amount: " + amount);
        System.out.println("account type: " + accountType);
    }

//    @Given("I have deposited ${int} in my {string} Account")
//    public void iHaveDeposited$InMyCheckingAccount(int amount, String accountType) throws Throwable {
//        System.out.println("amount: " + amount);
//        System.out.println("account type: " + accountType);
//    }

    @When("^I transfer \\$(\\d+) from my (\\w+) Account into my (\\w+) Account$")
    public void iTransfer$FromMyAccountIntoMyAccount(int amount, String fromAccountType, String toAccountType) throws Throwable {
        System.out.println("amount: " + amount);
        System.out.println("FROM account type: " + fromAccountType);
        System.out.println("TO account type: " + toAccountType);
    }

    @Then("^the balance of the (\\w+) Account should be \\$(\\d+)$")
    public void theBalanceOfTheAccountShouldBe(String accountType, int amount) throws Throwable {
        System.out.println("amount: " + amount);
        System.out.println("account type: " + accountType);
    }

    @Given("^I have \\$(\\d+) in my account$")
    public void iHaveBalanceInMyAccount(int amount) throws Throwable {
        System.out.println("balance amount: " + amount);
    }

    @When("^I choose to withdraw the fixed amount of \\$(\\d+)$")
    public void iChooseToWithdrawTheFixedAmountOfWithdrawal(int amount) throws Throwable {
        System.out.println("fixed amount: " + amount);
    }

    @Then("^I should (.*)$")
    public void iShouldOutcome(String outcome) throws Throwable {
        System.out.println("outcome: " + outcome);
    }

    @And("^the balance of my account should be \\$(\\d+)$")
    public void theBalanceOfMyAccountShouldBeRemaining(int amount) throws Throwable {
        System.out.println("remaining amount: " + amount);
    }
}
