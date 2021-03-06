package bank;

import io.cucumber.java.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BankStepDef {

    @Given("^I have deposited \\$(\\d+) in my account$")
    public void iHave$InMyAccount(int amount) throws Throwable {
        new Account(amount);
    }

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

    @When("^I request \\$(\\d+)$")
    public void iRequest$(int amount) throws Throwable{
        throw new PendingException();
    }

    @When("^I transfer \\$(\\d+) from my (\\w+) Account into my (\\w+) Account$")
    public void iTransfer$FromMyAccountIntoMyAccount(int amount, String fromAccountType, String toAccountType) throws Throwable {
        System.out.println("amount: " + amount);
        System.out.println("FROM account type: " + fromAccountType);
        System.out.println("TO account type: " + toAccountType);
    }

    @Then("^\\$(\\d+) should be dispensed$")
    public void shouldBeDispensed(int amount) throws Throwable {
        throw new PendingException();
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


    class Account {
        public Account(int openingBalance) {

        }
    }
}
