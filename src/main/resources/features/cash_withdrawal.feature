Feature: Cash withdrawal
  Scenario: Successful withdrawal from an account in credit
    Given I have deposited $100.00 in my account
    When I withdraw $20
    Then $20 should be dispensed

  Scenario: Successful withdrawal from an account in credit
    Given I have deposited $100.00 in my account
    When I withdraw $100
    Then $100 should be dispensed

  Scenario: Successful withdrawal from an account in credit
    Given I have deposited $30.50 in my account
    When I withdraw $40
    Then $30 should be dispensed

  Scenario: Transfer funds from savings into checking account
    Given I have deposited $10 in my Checking Account
    And I have deposited $500 in my Savings Account
    When I transfer $500 from my Savings Account into my Checking Account
    Then the balance of the Checking Account should be $510
    And the balance of the Savings Account should be $0

  Scenario Outline: Withdraw fixed amount

    The "Withdraw Cash" menu contains several fixed amounts to
    speed up transactions for users.

      Given I have <Balance> in my account
      When I choose to withdraw the fixed amount of <Withdrawal>
      Then I should <Outcome>
      And the balance of my account should be <Remaining>

  Examples: Successful withdrawal
    | Balance | Withdrawal | Remaining | Outcome             |
    | $500    | $50        | $450      | receive $50 cash    |
    | $500    | $100       | $400      | receive $100 cash   |

  Examples: Attempt to withdraw too much
    | Balance | Withdrawal | Remaining | Outcome             |
    | $0      | $50        | $0        | see an error message|
    | $100    | $200       | $100      | see an error message|

