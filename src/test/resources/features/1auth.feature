Feature: Login Module

  Scenario Outline: DRC Tax Portal with Valid Data
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                           | Username         | Password |
      | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati | admin    |
