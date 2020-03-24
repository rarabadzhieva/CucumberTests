$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/cash_withdrawal_atm.feature");
formatter.feature({
  "line": 1,
  "name": "Cash withdrawal from ATM",
  "description": "",
  "id": "cash-withdrawal-from-atm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 295851800,
  "status": "passed"
});
formatter.before({
  "duration": 117900,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Successful withdrawal from an account in credit",
  "description": "",
  "id": "cash-withdrawal-from-atm;successful-withdrawal-from-an-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "my account has been credited with $100.00",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I withdraw $20",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "$20 should be dispensed",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "the balance of my account should be $80.00",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "$100.00",
      "offset": 34
    }
  ],
  "location": "AccountSteps.myAccountHasBeenCreditedWith$(Money)"
});
formatter.result({
  "duration": 115566700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "TellerSteps.iWithdraw$(int)"
});
formatter.result({
  "duration": 4042658900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "CashSlotSteps.shouldBeDispensed(int)"
});
formatter.result({
  "duration": 1185100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80.00",
      "offset": 36
    }
  ],
  "location": "AccountSteps.theBalanceOfMyAccountShouldBe$(Money)"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.after({
  "duration": 73100,
  "status": "passed"
});
formatter.after({
  "duration": 6735800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3458388700,
  "status": "passed"
});
});