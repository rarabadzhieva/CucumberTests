@soap
Feature: SOAP
  Scenario Outline: Successfully add two numbers
    When I Add <num_1> to <num_2>
    Then the result is <result>

    Examples:
    |num_1|num_2|result|
    |2    |5    |7     |
    |10   |3    |13    |

  Scenario Outline: Successfully divide two numbers
    When I Divide <num_1> by <num_2>
    Then the result is <result>

    Examples:
      |num_1|num_2|result|
      |20   |5    |4     |
      |10   |2    |5     |

  Scenario Outline: Successfully multiply two numbers
    When I Multiply <num_1> by <num_2>
    Then the result is <result>

    Examples:
      |num_1|num_2|result  |
      |20   |5    |100     |
      |10   |2    |20      |

  Scenario Outline: Successfully subtract two numbers
    When I Subtract <num_2> from <num_1>
    Then the result is <result>

    Examples:
      |num_1|num_2|result |
      |20   |5    |15     |
      |10   |2    |8      |