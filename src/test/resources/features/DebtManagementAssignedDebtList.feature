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
@DebtMangagement @AssignedDebt
Feature: DGI employee should be able to do following
  
  Mange view case, View info
  View – details of tax payer based on ageing
  Option to view details of specific age bracket of tax payer (statement of transaction) on Tax officer portal
  The system is able to generate the list of payments which are under dispute and not paid because of objection cases raised

  @mtc8 @ManageView @execute
  Scenario Outline: Validate whether collection officer is able to view the case for the particular tax payer.
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on assigned amount for "<ageing>"
    Then List of cases assgined to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Manage options should display wtih options"<Moption1>""<Moption2>"
    Then user selects "View" Debt collection case"Debt Collection Case" page should be displayed of Case id"<caseid>"

    Examples: 
      | Test Case ID                       | Description                                                                                | officername  | uname           | password | ageing     | caseid          | Moption1 | Moption2 |
      | DRC_ATC_DebtManagement_Assigned_01 | Validate whether collection officer is able to view the case for the particular tax payer. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | View     | Reassign |

  @mtc7 @ManageReassign @execute
  Scenario Outline: Validate whether collection officer is able to reassign the tax officer.
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on assigned amount for "<ageing>"
    Then List of cases assgined to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Manage options should display wtih options"<Moption1>""<Moption2>"
    Then User select officer"<reassign>" to Reassign

    Examples: 
      | Test Case ID                       | Description                                                              | officername  | uname           | password | ageing     | caseid          | Moption1 | Moption2 | reassign     |
      | DRC_ATC_DebtManagement_Assigned_02 | Validate whether collection officer is able to reassign the tax officer. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | View     | Reassign | Urvish Patel |

  @mtc9 @FilterBy @execute
  Scenario Outline: Validate whether user is able to filter by using filter by option.
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then user can filter by"Case Type""Case Id""Priority""City""Officer Name""Status"

    Examples: 
      | Test Case ID                       | Description                                                        | officername  | uname           | password | ageing     | caseid          |
      | DRC_ATC_DebtManagement_Assigned_03 | Validate whether user is able to filter by using filter by option. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 |

  @mtc10 @mtc11 @mtc12 @FilterBy @FilterValidation
  Scenario Outline: Validate whether user is able to filter by using filter by option.
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then user filter using "<dp1>" and from"2018-09-20" to date"2018-09-20"
    Then enter the "<type>" data "<typehere>" in type here
     Then for valid records containing Case id should be "R18092000000009" with creation date"09/14/18" "Debt Collection"
     Then for "<type>"data  Message "<msg>" should be displayed
   
    Examples: 
      | Test Case ID                       | Description                                                                                   | officername  | uname           | password | ageing     | dp1          | typehere          | type    | msg              |
      | DRC_ATC_DebtManagement_Assigned_04 | Validate whether user is able to filter by using filter by option.(Case id valid data)        | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Case Id      | R18092000000009   | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_05 | Validate whether user is able to filter by using filter by option.(Case id invalid data)      | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Case Id      | Burman            | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_05 | Validate whether user is able to filter by using filter by option.(Priority valid data)       | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Priority     | Medium            | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_06 | Validate whether user is able to filter by using filter by option.(Priority invalid data)     | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Priority     | Highest           | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_07 | Validate whether user is able to filter by using filter by option.(City valid data)           | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | City         | Aketi             | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_08 | Validate whether user is able to filter by using filter by option.(City invalid data)         | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | City         | Kinhasa           | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_09 | Validate whether user is able to filter by using filter by option.(Officer Name valid data)   | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Officer Name | Urvish Patel      | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_10 | Validate whether user is able to filter by using filter by option.(Officer Name invalid data) | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Officer Name | John              | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_11 | Validate whether user is able to filter by using filter by option.(Status valid data)         | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Status       | Open              | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_12 | Validate whether user is able to filter by using filter by option.(Status invalid data)       | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Status       | paymentAgreeement | invalid | No records found |

  @mtc12 @date 
  Scenario Outline: Validate the functionality of Date picker From and To option.
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then Select from date"<fdate>" and to date"<todate>"
    Then creation date should be between from date"<fdate>" and to date"<todate>"
    Then Records contains Case id"<Case Id>" created date"<created date>""Debt Collection"
    Examples: 
      | Test Case ID                       | Description                                                   | officername  | uname           | password | ageing     | Case Id         | fdate      | todate     | created date |
      | DRC_ATC_DebtManagement_Assigned_13 | Validate the functionality of Date picker From and To option. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | 2018-09-20 | 2018-09-20 | 09/20/18     |

  @mtc12 @futuredate @execute
  Scenario Outline: Validate the functionality of Date picker From and To option.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then For future date in To Date it should be disabled"<fdate>""<todate>"

    Examples: 
      | Test Case ID                       | Description                                                                | officername  | uname           | password | ageing     | Case Id         | fdate      | todate     |
      | DRC_ATC_DebtManagement_Assigned_14 | Validate the functionality of Date picker From and To option.(Future Date) | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | 2018-09-14 | 2018-09-25 |

  @mtc13 @Sorting @execute
  Scenario Outline: Validate whether user is able to filter data in sorting order.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then Case Type should be in ascending Order
   # Then Click on "Case Type" column it should be in descending order
   #Then Click on "City" column it should be in ascending order
    Then Click on "City" column it should be in descending order
    Then Click on "Ageing (Days)" column it should be in ascending order
    Then Click on "Ageing (Days)" column it should be in descending order
    Then Click on "Tax Officer" column it should be in ascending order
    Then Click on "Tax Officer" column it should be in descending order
    Then Click on "Status" column it should be in ascending order
    Then Click on "Status" column it should be in descending order
    Then Click on "Priority" column it should be in ascending order
    Then Click on "Priority" column it should be in descending order

    Examples: 
      | Test Case ID                       | Description                                                    | officername  | uname           | password | ageing     | Case Id         | fdate      | todate     |
      | DRC_ATC_DebtManagement_Assigned_13 | Validate whether user is able to filter data in sorting order. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | 2018-09-20 | 2018-09-20 |

  @mtc2 @execute
  Scenario Outline: Validate the pending amount in debt management when e-filing is completed and payment is not done .
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Records contains details of displayed CaseId"<caseid>"CaseType"<ctype>"

    Examples: 
      | Test Case ID                       | Description                                                                                         | officername  | uname           | password | ageing     | caseid          | fdate      | todate     | ctype           |
      | DRC_ATC_DebtManagement_Assigned_14 | Validate the pending amount in debt management when e-filing is completed and payment is not done . | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | 2018-09-20 | 2018-09-20 | Debt Collection |

  @mtc3
  Scenario Outline: Validate the assigned amount in debt management when the e-filing is completed, assessment is done for the particular period , objection is raised against the assessment and payment is not done for the particular period.
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Records contains details of displayed CaseId"<caseid>"CaseType"<ctype>"

    Examples: 
      | Test Case ID                       | Description                                                                                                                                                                                                                  | officername  | uname           | password | ageing     | Case Id         | fdate      | todate     | ctype           |
      | DRC_ATC_DebtManagement_Assigned_15 | Validate the assigned amount in debt management when the e-filing is completed, assessment is done for the particular period , objection is raised against the assessment and payment is not done for the particular period. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | 2018-09-14 | 2018-09-14 | Debt Collection |

  @mtc4
  Scenario Outline: Validate the assigned amount on debt-management when e-filing is completed, payment is not done, re-assessment is completed  and Objection is raised .
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Records contains details of displayed CaseId"<caseid>"CaseType"<ctype>"

    Examples: 
      | Test Case ID                       | Description                                                                                                                                            | officername  | uname           | password | ageing     | caseid          | fdate      | todate     | ctype           |
      | DRC_ATC_DebtManagement_Assigned_16 | Validate the assigned amount on debt-management when e-filing is completed, payment is not done, re-assessment is completed  and Objection is raised . | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | R18092000000005 | 2018-09-14 | 2018-09-14 | Debt Collection |
