@UI_emag
Feature: eMAG
  Scenario: Login existing account successfully
    Given I want to buy an item as logged user from eMAG
    When I login into my account
    Then I should see greeting and my name on the account dropdown

 Scenario Outline: Search for items
    Given I want to buy an item from eMAG
    When I search for <item>
    Then <results> are shown

   Examples:
   |item          |results       |
   |mouse         |330 резултата |
   |dell laptop   |2221 резултата|

 @book
 Scenario: Checkout all Harry Potter's books
   Given I want to buy books from eMAG
   When I add Harry Potter Collection to the basket
   Then modal dialog is displayed
   And the basket has 1 item