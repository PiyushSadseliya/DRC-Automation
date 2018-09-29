@tag
Feature: User is on E-filing Page

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn
    Then User see Dashboard

    Examples: 
      | TestcaseID      | Description          | email                   | password   |
      | e-file_Login_01 | Login into tax payer | franky01@mailinator.com | franky@123 |
