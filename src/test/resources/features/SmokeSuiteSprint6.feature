Feature: User Registration

  Scenario Outline: 
    Given User is on E-filling page
    When User hit API to enter Month's data in E-filling form 
    And User Fill E-filling data
    And User Hit API to refresh the E-filling data
    And User enter data through backend in payment module
    And Assessment page "<>" 
  
  Examples:
  
 |TestcaseID|

  