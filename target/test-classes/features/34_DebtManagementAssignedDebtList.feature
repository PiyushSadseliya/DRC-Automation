@DebtMangagement @AssignedDebt
Feature: DGI employee should be able to do following
  
  Mange view case, View info
  View – details of tax payer based on ageing
  Option to view details of specific age bracket of tax payer (statement of transaction) on Tax officer portal
  The system is able to generate the list of payments which are under dispute and not paid because of objection cases raised

  @mtc8 @ManageView @execute
  Scenario Outline: Validate whether collection officer is able to view the case for the particular tax payer
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on assigned amount for "<ageing>"
    Then List of cases assgined to the officer should be displayed
    Then click on filter by dropdown TaxPayer"<tpayer>"
    Then Manage options should display wtih options"<Moption1>""<Moption2>"
    Then user selects "View" Debt collection case"Debt Collection Case" page should be displayed of Taxpayername"<tpayer>"

    Examples: 
      | Test Case ID                       | Description                                                                                | officername  | uname           | password | ageing     | tpayer   | Moption1 | Moption2 |
      | DRC_ATC_DebtManagement_Assigned_01 | Validate whether collection officer is able to view the case for the particular tax payer. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | two test | View     | Reassign |

  @mtc7 @ManageReassign @execute
  Scenario Outline: Validate whether collection officer is able to reassign the tax office
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on assigned amount for "<ageing>"
    Then List of cases assgined to the officer should be displayed
    Then click on filter by dropdown TaxPayer"<tpayer>"
    Then Manage options should display wtih options"<Moption1>""<Moption2>"
    Then User select officer"<reassign>" to Reassign

    Examples: 
      | Test Case ID                       | Description                                                              | officername  | uname           | password | ageing     | tpayer   | Moption1 | Moption2 | reassign     |
      | DRC_ATC_DebtManagement_Assigned_02 | Validate whether collection officer is able to reassign the tax officer. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | two test | View     | Reassign | Urvish Patel |

  @mtc9 @FilterBy @execute
  Scenario Outline: Validate whether user is able to filter by using filter by option
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then user can filter by"Case Type""Case Id""Priority""City""Tax Officer""Status"

    Examples: 
      | Test Case ID                       | Description                                                        | officername  | uname           | password | ageing     |
      | DRC_ATC_DebtManagement_Assigned_03 | Validate whether user is able to filter by using filter by option. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months |

  @mtc10 @mtc11 @mtc12 @FilterBy @FilterValidation
  Scenario Outline: Validate whether user is able to filter by using filter by option
    Given "<Test Case ID>""<Description>"DGI "<officername>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then user filter using "<dp1>" and from"2018-09-20" to date"2018-09-20"
    Then enter the "<type>" data "<typehere>" in type here
    Then for "<type>"data  Message "<msg>" should be displayed

    Examples: 
      | Test Case ID                       | Description                                                                                   | officername  | uname           | password | ageing     | dp1         | typehere          | type    | msg              |
      | DRC_ATC_DebtManagement_Assigned_04 | Validate whether user is able to filter by using filter by option.(Case id invalid data)      | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Case Id     | Burman            | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_05 | Validate whether user is able to filter by using filter by option.(Priority valid data)       | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Priority    | Medium            | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_06 | Validate whether user is able to filter by using filter by option.(Priority invalid data)     | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Priority    | Highest           | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_07 | Validate whether user is able to filter by using filter by option.(City valid data)           | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | City        | Aketi             | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_08 | Validate whether user is able to filter by using filter by option.(City invalid data)         | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | City        | Kinhasa           | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_09 | Validate whether user is able to filter by using filter by option.(Officer Name valid data)   | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Tax Officer | Urvish Patel      | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_10 | Validate whether user is able to filter by using filter by option.(Officer Name invalid data) | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Tax Officer | John              | invalid | No records found |
      | DRC_ATC_DebtManagement_Assigned_11 | Validate whether user is able to filter by using filter by option.(Status valid data)         | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Status      | Open              | valid   |                  |
      | DRC_ATC_DebtManagement_Assigned_12 | Validate whether user is able to filter by using filter by option.(Status invalid data)       | Urvish Patel | ketan.prajapati | admin    | 0-3 Months | Status      | paymentAgreeement | invalid | No records found |

  @mtc13 @Sorting @execute
  Scenario Outline: Validate whether user is able to filter data in sorting order
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then Click on "City" column it should be in ascending order
    Then Click on "City" column it should be in descending order
    Then Click on "Ageing (Days)" column it should be in ascending order
    Then Click on "Ageing (Days)" column it should be in descending order
    Then Click on "Tax Officer" column it should be in ascending order
    Then Click on "Tax Officer" column it should be in descending order
    Then Click on "Status" column it should be in ascending order
    Then Click on "Status" column it should be in descending order

    Examples: 
      | Test Case ID                       | Description                                                    | officername  | uname           | password | ageing     |
      | DRC_ATC_DebtManagement_Assigned_13 | Validate whether user is able to filter data in sorting order. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months |
