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
Feature: Payment Agreement Installment Status 

  @TC_01_UI
  Scenario Outline: Validate the UI of installement page
    Given User is on Payment Agreement Installment Status "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on eye button on installement page
    And User see ui for installement details

    Examples: 
      | TestcaseID                       | Description                          | filter            | id              |
      | Payment_Agreement_Installement_01 | Validate the UI of installement page | drp_CaseID_Click | R18092000000018 |

  @TC_02_Combine
  Scenario Outline: Validating agreement id, status,EMI start and END date ,Installement amount
    Given User is on Payment Agreement Installment Status "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on eye button on installement page
    And User see installement pop up appear 
    And User see date 
    And User see agreement id "<aid>"
    And User see status column "<status>"
    And User validate date field "<date>"
    And User see installment Amount "<amount>"
    And User see emi start date "<start>" and end date "<endDate>"
    And User see close button  

    Examples: 
      | TestcaseID                        | Description                                                                 | filter           | id              |aid          | status  | date        | amount   | start       | endDate     |
      | Payment_Agreement_Installement_02 | Validating agreement id, status,EMI start and END date ,Installement amount | drp_CaseID_Click | R18092000000018 |PA18092000005| Pending | 27-Sep-2018 | 18619.95 | 27-Sep-2018 | 25-Oct-2018 |
