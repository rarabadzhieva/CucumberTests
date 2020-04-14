$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("database/school.feature");
formatter.feature({
  "line": 2,
  "name": "School",
  "description": "",
  "id": "school",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DB"
    }
  ]
});
formatter.before({
  "duration": 6171700,
  "status": "passed"
});
formatter.before({
  "duration": 1464100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "New students arrive in school",
  "description": "",
  "id": "school;new-students-arrive-in-school",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the school year 2019 has just begun",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "new students arrive in school",
  "rows": [
    {
      "cells": [
        "Dimitar Petkov"
      ],
      "line": 6
    },
    {
      "cells": [
        "Irina Georgieva"
      ],
      "line": 7
    },
    {
      "cells": [
        "Georgi Iliev"
      ],
      "line": 8
    },
    {
      "cells": [
        "Nikolai Petrov"
      ],
      "line": 9
    },
    {
      "cells": [
        "Valentina Atanasova"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "all students for year 2019 are 5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2019",
      "offset": 16
    }
  ],
  "location": "SchoolStepDef.cleanDBForYear(int)"
});
formatter.result({
  "duration": 480258600,
  "status": "passed"
});
formatter.match({
  "location": "SchoolStepDef.addNewStudents(DataTable)"
});
formatter.result({
  "duration": 18043200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "students",
      "offset": 4
    },
    {
      "val": "2019",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "SchoolStepDef.checkCountOf(String,int,int)"
});
formatter.result({
  "duration": 10189400,
  "status": "passed"
});
formatter.after({
  "duration": 51800,
  "status": "passed"
});
formatter.after({
  "duration": 122900,
  "status": "passed"
});
formatter.before({
  "duration": 173200,
  "status": "passed"
});
formatter.before({
  "duration": 75700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "New subjects to study",
  "description": "",
  "id": "school;new-subjects-to-study",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the school year 2020 has just begun",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "students have new subjects to study",
  "rows": [
    {
      "cells": [
        "Cucumber"
      ],
      "line": 16
    },
    {
      "cells": [
        "REST"
      ],
      "line": 17
    },
    {
      "cells": [
        "SOUP"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "all subjects for year 2020 are 3",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 16
    }
  ],
  "location": "SchoolStepDef.cleanDBForYear(int)"
});
formatter.result({
  "duration": 6258900,
  "status": "passed"
});
formatter.match({
  "location": "SchoolStepDef.addNewSubjects(DataTable)"
});
formatter.result({
  "duration": 11392700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subjects",
      "offset": 4
    },
    {
      "val": "2020",
      "offset": 22
    },
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "SchoolStepDef.checkCountOf(String,int,int)"
});
formatter.result({
  "duration": 1377800,
  "status": "passed"
});
formatter.after({
  "duration": 49500,
  "status": "passed"
});
formatter.after({
  "duration": 96500,
  "status": "passed"
});
formatter.before({
  "duration": 212100,
  "status": "passed"
});
formatter.before({
  "duration": 69500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Average grade in math exam",
  "description": "",
  "id": "school;average-grade-in-math-exam",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "the school year 2021 has just begun",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "students take math exam with this grades:",
  "rows": [
    {
      "cells": [
        "Ivan Ivanov",
        "5"
      ],
      "line": 24
    },
    {
      "cells": [
        "Petar Atanasov",
        "3"
      ],
      "line": 25
    },
    {
      "cells": [
        "Ivelina Dimitrova",
        "6"
      ],
      "line": 26
    },
    {
      "cells": [
        "Vladimir Petrov",
        "6"
      ],
      "line": 27
    },
    {
      "cells": [
        "Penka Ivanova",
        "4"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the average grade in math for 2021 is 4.8",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 16
    }
  ],
  "location": "SchoolStepDef.cleanDBForYear(int)"
});
formatter.result({
  "duration": 12331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "math",
      "offset": 14
    }
  ],
  "location": "SchoolStepDef.insertGradesFor(String,DataTable)"
});
formatter.result({
  "duration": 44989100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "math",
      "offset": 21
    },
    {
      "val": "2021",
      "offset": 30
    },
    {
      "val": "4.8",
      "offset": 38
    }
  ],
  "location": "SchoolStepDef.averageGrade(String,int,String)"
});
formatter.result({
  "duration": 2569000,
  "status": "passed"
});
formatter.after({
  "duration": 50300,
  "status": "passed"
});
formatter.after({
  "duration": 94000,
  "status": "passed"
});
});