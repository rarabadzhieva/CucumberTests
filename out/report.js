$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "line": 2,
  "name": "Cash withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5062400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Transfer funds from savings into checking account",
  "description": "",
  "id": "cash-withdrawal;transfer-funds-from-savings-into-checking-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have deposited $10 in my Checking Account",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have deposited $500 in my Savings Account",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I transfer $500 from my Savings Account into my Checking Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the balance of the Checking Account should be $510",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the balance of the Savings Account should be $0",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    },
    {
      "val": "Checking",
      "offset": 27
    }
  ],
  "location": "BankStepDef.depositedIntoAccount(int,String)"
});
formatter.result({
  "duration": 127854900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 18
    },
    {
      "val": "Savings",
      "offset": 28
    }
  ],
  "location": "BankStepDef.depositedIntoAccount(int,String)"
});
formatter.result({
  "duration": 182300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    },
    {
      "val": "Savings",
      "offset": 24
    },
    {
      "val": "Checking",
      "offset": 48
    }
  ],
  "location": "BankStepDef.transferFromAccountToAccount(int,String,String)"
});
formatter.result({
  "duration": 214300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the Checking",
      "offset": 15
    },
    {
      "val": "$510",
      "offset": 46
    }
  ],
  "location": "BankStepDef.checkAccountBalance(String,String)"
});
formatter.result({
  "duration": 148100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the Savings",
      "offset": 15
    },
    {
      "val": "$0",
      "offset": 45
    }
  ],
  "location": "BankStepDef.checkAccountBalance(String,String)"
});
formatter.result({
  "duration": 128400,
  "status": "passed"
});
formatter.after({
  "duration": 136000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Withdraw fixed amount",
  "description": "\r\nThe \"Withdraw Cash\" menu contains several fixed amounts to\r\nspeed up transactions for users.",
  "id": "cash-withdrawal;withdraw-fixed-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I have \u003cBalance\u003e in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I choose to withdraw the fixed amount of \u003cWithdrawal\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should \u003cOutcome\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the balance of my Account should be \u003cRemaining\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "Successful withdrawal",
  "description": "",
  "id": "cash-withdrawal;withdraw-fixed-amount;successful-withdrawal",
  "rows": [
    {
      "cells": [
        "Balance",
        "Withdrawal",
        "Remaining",
        "Outcome"
      ],
      "line": 21,
      "id": "cash-withdrawal;withdraw-fixed-amount;successful-withdrawal;1"
    },
    {
      "cells": [
        "$500",
        "$50",
        "$450",
        "receive $50 cash"
      ],
      "line": 22,
      "id": "cash-withdrawal;withdraw-fixed-amount;successful-withdrawal;2"
    },
    {
      "cells": [
        "$500",
        "$100",
        "$400",
        "receive $100 cash"
      ],
      "line": 23,
      "id": "cash-withdrawal;withdraw-fixed-amount;successful-withdrawal;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Withdraw fixed amount",
  "description": "\r\nThe \"Withdraw Cash\" menu contains several fixed amounts to\r\nspeed up transactions for users.",
  "id": "cash-withdrawal;withdraw-fixed-amount;successful-withdrawal;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I have $500 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I choose to withdraw the fixed amount of $50",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should receive $50 cash",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the balance of my Account should be $450",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 8
    }
  ],
  "location": "BankStepDef.depositMyAccount(int)"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "BankStepDef.withdrawFixedAmount(int)"
});
formatter.result({
  "duration": 156500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "receive $50 cash",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my",
      "offset": 15
    },
    {
      "val": "$450",
      "offset": 36
    }
  ],
  "location": "BankStepDef.checkAccountBalance(String,String)"
});
formatter.result({
  "duration": 91500,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.before({
  "duration": 35500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Withdraw fixed amount",
  "description": "\r\nThe \"Withdraw Cash\" menu contains several fixed amounts to\r\nspeed up transactions for users.",
  "id": "cash-withdrawal;withdraw-fixed-amount;successful-withdrawal;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I have $500 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I choose to withdraw the fixed amount of $100",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should receive $100 cash",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the balance of my Account should be $400",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 8
    }
  ],
  "location": "BankStepDef.depositMyAccount(int)"
});
formatter.result({
  "duration": 168500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 42
    }
  ],
  "location": "BankStepDef.withdrawFixedAmount(int)"
});
formatter.result({
  "duration": 138200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "receive $100 cash",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "duration": 142300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my",
      "offset": 15
    },
    {
      "val": "$400",
      "offset": 36
    }
  ],
  "location": "BankStepDef.checkAccountBalance(String,String)"
});
formatter.result({
  "duration": 141300,
  "status": "passed"
});
formatter.after({
  "duration": 104500,
  "status": "passed"
});
formatter.examples({
  "line": 25,
  "name": "Attempt to withdraw too much",
  "description": "",
  "id": "cash-withdrawal;withdraw-fixed-amount;attempt-to-withdraw-too-much",
  "rows": [
    {
      "cells": [
        "Balance",
        "Withdrawal",
        "Remaining",
        "Outcome"
      ],
      "line": 26,
      "id": "cash-withdrawal;withdraw-fixed-amount;attempt-to-withdraw-too-much;1"
    },
    {
      "cells": [
        "$0",
        "$50",
        "$0",
        "see an error message"
      ],
      "line": 27,
      "id": "cash-withdrawal;withdraw-fixed-amount;attempt-to-withdraw-too-much;2"
    },
    {
      "cells": [
        "$100",
        "$200",
        "$100",
        "see an error message"
      ],
      "line": 28,
      "id": "cash-withdrawal;withdraw-fixed-amount;attempt-to-withdraw-too-much;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Withdraw fixed amount",
  "description": "\r\nThe \"Withdraw Cash\" menu contains several fixed amounts to\r\nspeed up transactions for users.",
  "id": "cash-withdrawal;withdraw-fixed-amount;attempt-to-withdraw-too-much;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I have $0 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I choose to withdraw the fixed amount of $50",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see an error message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the balance of my Account should be $0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 8
    }
  ],
  "location": "BankStepDef.depositMyAccount(int)"
});
formatter.result({
  "duration": 182200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 42
    }
  ],
  "location": "BankStepDef.withdrawFixedAmount(int)"
});
formatter.result({
  "duration": 179700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "see an error message",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "duration": 685600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my",
      "offset": 15
    },
    {
      "val": "$0",
      "offset": 36
    }
  ],
  "location": "BankStepDef.checkAccountBalance(String,String)"
});
formatter.result({
  "duration": 182300,
  "status": "passed"
});
formatter.after({
  "duration": 84800,
  "status": "passed"
});
formatter.before({
  "duration": 119300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Withdraw fixed amount",
  "description": "\r\nThe \"Withdraw Cash\" menu contains several fixed amounts to\r\nspeed up transactions for users.",
  "id": "cash-withdrawal;withdraw-fixed-amount;attempt-to-withdraw-too-much;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I have $100 in my account",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I choose to withdraw the fixed amount of $200",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see an error message",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the balance of my Account should be $100",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 8
    }
  ],
  "location": "BankStepDef.depositMyAccount(int)"
});
formatter.result({
  "duration": 170900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "BankStepDef.withdrawFixedAmount(int)"
});
formatter.result({
  "duration": 155800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "see an error message",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "duration": 124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my",
      "offset": 15
    },
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "BankStepDef.checkAccountBalance(String,String)"
});
formatter.result({
  "duration": 124300,
  "status": "passed"
});
formatter.after({
  "duration": 74300,
  "status": "passed"
});
formatter.uri("cash_withdrawal_atm.feature");
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
  "duration": 283148200,
  "status": "passed"
});
formatter.before({
  "duration": 251800,
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
  "duration": 2379000,
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
  "duration": 5575231500,
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
  "duration": 2149700,
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
  "duration": 159500,
  "status": "passed"
});
formatter.after({
  "duration": 5445200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 361353000,
  "status": "passed"
});
formatter.after({
  "duration": 87000,
  "status": "passed"
});
formatter.uri("change_pin.feature");
formatter.feature({
  "line": 2,
  "name": "Change PIN",
  "description": "\r\nIn order to be able to change it to something they can easily\r\nremember, customers with new bank cards need to be able to\r\nchange their PIN using the ATM.",
  "id": "change-pin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ignore"
    }
  ]
});
formatter.before({
  "duration": 65600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Insert a newly issued card and sign in",
  "description": "\r\nWhenever the bank issues new cards to customers, they are\r\nsupplied with a Personal Identification Number (PIN) that\r\nis randomly generated by the system.",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "I have been issued a new card",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I insert the card, entering the correct PIN",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose \"Change PIN\" from the menu",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Change PIN successfully",
  "description": "",
  "id": "change-pin;change-pin-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I change the PIN to 9876",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the system should remember my PIN is now 9876",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 80900,
  "status": "passed"
});
formatter.before({
  "duration": 47400,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Insert a newly issued card and sign in",
  "description": "\r\nWhenever the bank issues new cards to customers, they are\r\nsupplied with a Personal Identification Number (PIN) that\r\nis randomly generated by the system.",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "I have been issued a new card",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I insert the card, entering the correct PIN",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I choose \"Change PIN\" from the menu",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "Try to change PIN to the same as before",
  "description": "",
  "id": "change-pin;try-to-change-pin-to-the-same-as-before",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I try to change the PIN to the original PIN number",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see a warning message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the system should not have changed my PIN",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "see a warning message",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 900600,
  "status": "passed"
});
formatter.uri("checkout.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40 c",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout \u003ccount\u003e \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be \u003ctotal\u003ec",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "checkout;checkout-a-banana;",
  "rows": [
    {
      "cells": [
        "count",
        "total"
      ],
      "line": 9,
      "id": "checkout;checkout-a-banana;;1"
    },
    {
      "cells": [
        "1",
        "40"
      ],
      "line": 10,
      "id": "checkout;checkout-a-banana;;2"
    },
    {
      "cells": [
        "2",
        "80"
      ],
      "line": 11,
      "id": "checkout;checkout-a-banana;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 141900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40 c",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout 1 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be 40c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"banana\"",
      "offset": 15
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.thePriceOfIs(String,int)"
});
formatter.result({
  "duration": 661400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "\"banana\"",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.iCheckout(int,String)"
});
formatter.result({
  "duration": 183400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.checkTotalPrice(int)"
});
formatter.result({
  "duration": 107400,
  "status": "passed"
});
formatter.after({
  "duration": 57700,
  "status": "passed"
});
formatter.before({
  "duration": 35900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40 c",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout 2 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be 80c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"banana\"",
      "offset": 15
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.thePriceOfIs(String,int)"
});
formatter.result({
  "duration": 136300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "\"banana\"",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.iCheckout(int,String)"
});
formatter.result({
  "duration": 102700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.checkTotalPrice(int)"
});
formatter.result({
  "duration": 71100,
  "status": "passed"
});
formatter.after({
  "duration": 56700,
  "status": "passed"
});
formatter.before({
  "duration": 37400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Two bananas scanned separately",
  "description": "",
  "id": "checkout;two-bananas-scanned-separately",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the price of a \"banana\" is 40 c",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I checkout 1 \"banana\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the total price should be 80c",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"banana\"",
      "offset": 15
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.thePriceOfIs(String,int)"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "\"banana\"",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.iCheckout(int,String)"
});
formatter.result({
  "duration": 148200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "\"banana\"",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.iCheckout(int,String)"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.checkTotalPrice(int)"
});
formatter.result({
  "duration": 127800,
  "status": "passed"
});
formatter.after({
  "duration": 120000,
  "status": "passed"
});
formatter.before({
  "duration": 165800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "A banana and an apple",
  "description": "",
  "id": "checkout;a-banana-and-an-apple",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the price of a \"banana\" is 40 c",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the price of a \"apple\" is 25 c",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I checkout 1 \"apple\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the total price should be 65c",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"banana\"",
      "offset": 15
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.thePriceOfIs(String,int)"
});
formatter.result({
  "duration": 171400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"apple\"",
      "offset": 15
    },
    {
      "val": "25",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.thePriceOfIs(String,int)"
});
formatter.result({
  "duration": 164800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "\"banana\"",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.iCheckout(int,String)"
});
formatter.result({
  "duration": 126500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "\"apple\"",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.iCheckout(int,String)"
});
formatter.result({
  "duration": 76900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.checkTotalPrice(int)"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.after({
  "duration": 59400,
  "status": "passed"
});
formatter.uri("credit_card.feature");
formatter.feature({
  "line": 2,
  "name": "Feedback when entering invalid credit card details",
  "description": "In user testing we\u0027ve seen a lot of people who made mistakes\r\nentering their credit card. We need to be as helpful as possible\r\nhere to avoid losing users at this crucial stage of the\r\ntransaction.",
  "id": "feedback-when-entering-invalid-credit-card-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ignore"
    }
  ]
});
formatter.before({
  "duration": 47600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I have chosen some items to buy",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am about to enter my credit card details",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "Credit card number too short",
  "description": "",
  "id": "feedback-when-entering-invalid-credit-card-details;credit-card-number-too-short",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I enter a card number that\u0027s only 15 digits long",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "all the other details are correct",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the form should be redisplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see a message advising me of the correct number of digits",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "see a message advising me of the correct number of digits",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 71400,
  "status": "passed"
});
formatter.before({
  "duration": 42300,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I have chosen some items to buy",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am about to enter my credit card details",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Expiry date must not be in the past",
  "description": "",
  "id": "feedback-when-entering-invalid-credit-card-details;expiry-date-must-not-be-in-the-past",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I enter a card expiry date that\u0027s in the past",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "all the other details are correct",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the form should be redisplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should see a message telling me the expiry date must be wrong",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "see a message telling me the expiry date must be wrong",
      "offset": 9
    }
  ],
  "location": "BankStepDef.checkOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 58500,
  "status": "passed"
});
formatter.uri("tic_tac_toe.feature");
formatter.feature({
  "line": 2,
  "name": "Tic tac toe",
  "description": "\r\nData Tables example",
  "id": "tic-tac-toe",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 64800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "tic-tac-toe;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "a board like this:",
  "rows": [
    {
      "cells": [
        "",
        "1",
        "2",
        "3"
      ],
      "line": 8
    },
    {
      "cells": [
        "1",
        "",
        "",
        ""
      ],
      "line": 9
    },
    {
      "cells": [
        "2",
        "",
        "",
        ""
      ],
      "line": 10
    },
    {
      "cells": [
        "3",
        "",
        "",
        ""
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "player x plays in row 2, column 1",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the board should look like this:",
  "rows": [
    {
      "cells": [
        "",
        "1",
        "2",
        "3"
      ],
      "line": 14
    },
    {
      "cells": [
        "1",
        "",
        "",
        ""
      ],
      "line": 15
    },
    {
      "cells": [
        "2",
        "x",
        "",
        ""
      ],
      "line": 16
    },
    {
      "cells": [
        "3",
        "",
        "",
        ""
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 167700,
  "status": "passed"
});
});