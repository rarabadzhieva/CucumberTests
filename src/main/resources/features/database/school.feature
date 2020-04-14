@DB
Feature: School
  Scenario: New students arrive in school
    Given the school year 2019 has just begun
    When new students arrive in school
    |Dimitar Petkov      |
    |Irina Georgieva     |
    |Georgi Iliev        |
    |Nikolai Petrov      |
    |Valentina Atanasova |
    Then all students for year 2019 are 5

  Scenario: New subjects to study
    Given the school year 2020 has just begun
    When students have new subjects to study
    |Cucumber|
    |REST    |
    |SOUP    |
    Then all subjects for year 2020 are 3

  Scenario: Average grade in math exam
    Given the school year 2021 has just begun
    When students take math exam with this grades:
    |Ivan Ivanov      |5    |
    |Petar Atanasov   |3    |
    |Ivelina Dimitrova|6    |
    |Vladimir Petrov  |6    |
    |Penka Ivanova    |4    |
    Then the average grade in math for 2021 is 4.8