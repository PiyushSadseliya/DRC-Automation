#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Debt Record in 0-3 Months age bracket

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn

    Examples: 
      | TestcaseID       | Description          | email              | password |
      | e-file_Login_001 | Login into tax payer | twotest@mt2015.com | Test@123 |

  @TC_02_debtMan
  Scenario Outline: E-filing in the age bracket of 0-3 Months for debt
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User with email address"<email>"does efiling in age bracket 0-3 month"<1>"
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button

    Examples: 
      | Description                               |     1 | email              |
      | E-filing in the age bracket of 0-3 Months | 50000 | twotest@mt2015.com |
