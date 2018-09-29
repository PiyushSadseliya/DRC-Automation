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
@tag
Feature: Payment Receipt

  @tag2
  Scenario Outline: 
    Given The user has declared the VAT Liability as Zero for the month of "<period>""<year>"
    When User User clicks on view button
    Then user must be able to see the genereated receipt
    Then the receipt should hav the details of 

    Examples: 
      | Test Case ID              | Description                                                                                                        | uname                   | password    |
      | DRC_ATC_PaymentReceipt_01 | Validate the functionality of View button located on the statement of transaction section of e-filing landing page | execute@sharklasers.com | abcde@12345 |
