$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal_atm.feature");
formatter.feature({
  "line": 2,
  "name": "Cash withdrawal from ATM",
  "description": "",
  "id": "cash-withdrawal-from-atm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UI"
    }
  ]
});
formatter.before({
  "duration": 465533101,
  "status": "passed"
});
formatter.before({
  "duration": 821100,
  "status": "passed"
});
formatter.before({
  "duration": 207761199,
  "status": "passed"
});
formatter.before({
  "duration": 434101,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful withdrawal from an account in credit",
  "description": "",
  "id": "cash-withdrawal-from-atm;successful-withdrawal-from-an-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "my account has been credited with $100.00",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I withdraw $20",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "$20 should be dispensed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
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
  "location": "AccountSteps.creditAccountWith(Money)"
});
formatter.result({
  "duration": 127383700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "TellerSteps.withdraw(int)"
});
formatter.result({
  "duration": 5471170499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "CashSlotSteps.checkDispensedAmount(int)"
});
formatter.result({
  "duration": 2749501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80.00",
      "offset": 36
    }
  ],
  "location": "AccountSteps.checkAccountBalance(Money)"
});
formatter.result({
  "duration": 2384600,
  "status": "passed"
});
formatter.after({
  "duration": 63400,
  "status": "passed"
});
formatter.after({
  "duration": 4465601,
  "status": "passed"
});
formatter.after({
  "duration": 156701,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 332635699,
  "status": "passed"
});
});