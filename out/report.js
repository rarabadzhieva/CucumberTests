$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("web_services/soap.feature");
formatter.feature({
  "line": 2,
  "name": "SOAP",
  "description": "",
  "id": "soap",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successfully add two numbers",
  "description": "",
  "id": "soap;successfully-add-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I Add \u003cnum_1\u003e to \u003cnum_2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the result is \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "soap;successfully-add-two-numbers;",
  "rows": [
    {
      "cells": [
        "num_1",
        "num_2",
        "result"
      ],
      "line": 8,
      "id": "soap;successfully-add-two-numbers;;1"
    },
    {
      "cells": [
        "2",
        "5",
        "7"
      ],
      "line": 9,
      "id": "soap;successfully-add-two-numbers;;2"
    },
    {
      "cells": [
        "10",
        "3",
        "13"
      ],
      "line": 10,
      "id": "soap;successfully-add-two-numbers;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5642700,
  "status": "passed"
});
formatter.before({
  "duration": 1214500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Successfully add two numbers",
  "description": "",
  "id": "soap;successfully-add-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I Add 2 to 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the result is 7",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 2
    },
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "to",
      "offset": 8
    },
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 2281780300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 2671800,
  "status": "passed"
});
formatter.after({
  "duration": 135200,
  "status": "passed"
});
formatter.after({
  "duration": 35300,
  "status": "passed"
});
formatter.before({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 158300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfully add two numbers",
  "description": "",
  "id": "soap;successfully-add-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I Add 10 to 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the result is 13",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 2
    },
    {
      "val": "10",
      "offset": 6
    },
    {
      "val": "to",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 535309200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1407000,
  "status": "passed"
});
formatter.after({
  "duration": 68800,
  "status": "passed"
});
formatter.after({
  "duration": 33300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Successfully divide two numbers",
  "description": "",
  "id": "soap;successfully-divide-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I Divide \u003cnum_1\u003e by \u003cnum_2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result is \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "soap;successfully-divide-two-numbers;",
  "rows": [
    {
      "cells": [
        "num_1",
        "num_2",
        "result"
      ],
      "line": 17,
      "id": "soap;successfully-divide-two-numbers;;1"
    },
    {
      "cells": [
        "20",
        "5",
        "4"
      ],
      "line": 18,
      "id": "soap;successfully-divide-two-numbers;;2"
    },
    {
      "cells": [
        "10",
        "2",
        "5"
      ],
      "line": 19,
      "id": "soap;successfully-divide-two-numbers;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62100,
  "status": "passed"
});
formatter.before({
  "duration": 178300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successfully divide two numbers",
  "description": "",
  "id": "soap;successfully-divide-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Divide 20 by 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result is 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Divide",
      "offset": 2
    },
    {
      "val": "20",
      "offset": 9
    },
    {
      "val": "by",
      "offset": 12
    },
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 507160100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1669500,
  "status": "passed"
});
formatter.after({
  "duration": 75600,
  "status": "passed"
});
formatter.after({
  "duration": 36300,
  "status": "passed"
});
formatter.before({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 133400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successfully divide two numbers",
  "description": "",
  "id": "soap;successfully-divide-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Divide 10 by 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result is 5",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Divide",
      "offset": 2
    },
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "by",
      "offset": 12
    },
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 659631400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1427400,
  "status": "passed"
});
formatter.after({
  "duration": 54600,
  "status": "passed"
});
formatter.after({
  "duration": 26000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Successfully multiply two numbers",
  "description": "",
  "id": "soap;successfully-multiply-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I Multiply \u003cnum_1\u003e by \u003cnum_2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the result is \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "soap;successfully-multiply-two-numbers;",
  "rows": [
    {
      "cells": [
        "num_1",
        "num_2",
        "result"
      ],
      "line": 26,
      "id": "soap;successfully-multiply-two-numbers;;1"
    },
    {
      "cells": [
        "20",
        "5",
        "100"
      ],
      "line": 27,
      "id": "soap;successfully-multiply-two-numbers;;2"
    },
    {
      "cells": [
        "10",
        "2",
        "20"
      ],
      "line": 28,
      "id": "soap;successfully-multiply-two-numbers;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 54400,
  "status": "passed"
});
formatter.before({
  "duration": 160400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successfully multiply two numbers",
  "description": "",
  "id": "soap;successfully-multiply-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I Multiply 20 by 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the result is 100",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Multiply",
      "offset": 2
    },
    {
      "val": "20",
      "offset": 11
    },
    {
      "val": "by",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 804965500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1896700,
  "status": "passed"
});
formatter.after({
  "duration": 95500,
  "status": "passed"
});
formatter.after({
  "duration": 46300,
  "status": "passed"
});
formatter.before({
  "duration": 57400,
  "status": "passed"
});
formatter.before({
  "duration": 182500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successfully multiply two numbers",
  "description": "",
  "id": "soap;successfully-multiply-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I Multiply 10 by 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the result is 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Multiply",
      "offset": 2
    },
    {
      "val": "10",
      "offset": 11
    },
    {
      "val": "by",
      "offset": 14
    },
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 648018200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1366800,
  "status": "passed"
});
formatter.after({
  "duration": 59600,
  "status": "passed"
});
formatter.after({
  "duration": 30300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Successfully subtract two numbers",
  "description": "",
  "id": "soap;successfully-subtract-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I Subtract \u003cnum_2\u003e from \u003cnum_1\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the result is \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "soap;successfully-subtract-two-numbers;",
  "rows": [
    {
      "cells": [
        "num_1",
        "num_2",
        "result"
      ],
      "line": 35,
      "id": "soap;successfully-subtract-two-numbers;;1"
    },
    {
      "cells": [
        "20",
        "5",
        "15"
      ],
      "line": 36,
      "id": "soap;successfully-subtract-two-numbers;;2"
    },
    {
      "cells": [
        "10",
        "2",
        "8"
      ],
      "line": 37,
      "id": "soap;successfully-subtract-two-numbers;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46600,
  "status": "passed"
});
formatter.before({
  "duration": 162700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Successfully subtract two numbers",
  "description": "",
  "id": "soap;successfully-subtract-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I Subtract 5 from 20",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the result is 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Subtract",
      "offset": 2
    },
    {
      "val": "5",
      "offset": 11
    },
    {
      "val": "from",
      "offset": 13
    },
    {
      "val": "20",
      "offset": 18
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 677275500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1841800,
  "status": "passed"
});
formatter.after({
  "duration": 59800,
  "status": "passed"
});
formatter.after({
  "duration": 31100,
  "status": "passed"
});
formatter.before({
  "duration": 38500,
  "status": "passed"
});
formatter.before({
  "duration": 128300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Successfully subtract two numbers",
  "description": "",
  "id": "soap;successfully-subtract-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@soap"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I Subtract 2 from 10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the result is 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Subtract",
      "offset": 2
    },
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "from",
      "offset": 13
    },
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "SoapSteps.calcTwoNumbers(String,int,String,int)"
});
formatter.result({
  "duration": 494015300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 14
    }
  ],
  "location": "SoapSteps.checkResult(int)"
});
formatter.result({
  "duration": 1852600,
  "status": "passed"
});
formatter.after({
  "duration": 297900,
  "status": "passed"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
});