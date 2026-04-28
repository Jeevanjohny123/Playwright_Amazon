Feature: End-to-End Shopping Flow

  @smoke @cartAdd
  Scenario: Login and add product to cart from PDP
    Given I open the login page
    When I login as "Jeevan" user
    And I search for "iPhone"
    And I open the second product from search results
    And I add the product to the cart
    Then I should see the product in the cart

  @regression
  Scenario: Login with InvalidUser user
    Given I open the login page
    When I login as "InvalidUser" user
    Then I should see the inventory page