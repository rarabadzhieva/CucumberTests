@rest
Feature: REST
  Scenario: Service provides method for creating users
    Given I have credentials for the service
    When I create new user
    Then the user's info should be accessible

  Scenario: Service provides method for updating users' info
    Given I have credentials for the service
    When I update user's status and phone
    Then user's info should updated

  Scenario: Service provides method for deleting users
    Given I have credentials for the service
    When I delete the user
    Then the user should not exist any more
