Feature: User Registration

  Scenario Outline: New User should be allowed to Register in DRC TAX Portal with valid details.
    Given User is on Welcome to DRC Tax Portal page
    When User Clicks on Register
    Then User should be Navigated to Register With Us page
    And User Enters Data "<Name>" "<Email>" "<Password>" "<Confirm Password>" "<Mobile Number>" in the respective fields
    And Accepts Terms and condition
    And Clicks On Register Button
    Then User should be navigated to ThankYou for Registering Page after successful Registration.

    Examples: 
      | Test Case ID                  | Name | Email             | Password  | Confirm Password | Mobile Number |
       |DRC_ATC_Valid_Registration_01 | Abis | abhis@o3enzyme.com | abq@12345 | abq@12345 | 8989898989898 | 

 
