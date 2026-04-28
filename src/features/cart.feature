Feature: Cart Functionality
@smoke @cartRemove
Scenario: Remove product from cart
    Given I open the login page
    When I login as "Jeevan" user
    And I search for "iPhone"
    And I open the second product from search results
    And I add the product to the cart
    And I remove the product from cart page
    Then the cart should be empty    