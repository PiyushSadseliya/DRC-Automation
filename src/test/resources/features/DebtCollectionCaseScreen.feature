@DebtCaseCollectionofficer
Feature: List of Debt Cases Assigned to the Collection Officer – Reassign

  @mtc6
  Scenario Outline: Validate the Expected recovery and Percentage functionality.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then user should be on Debt Collection Case
    Then click in Percentage Radio At Expected Recovery
    Then Enter the Percentage "<PerRec>" and displayed amount field"<RecAmount>"
    Then click on Amount radio at Expected Recovery
    Then Enter the amount to be Recovered"<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"

    Examples: 
      | Test Case ID                               | Description                                                  | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount | Rpercent | PerRec | RecAmount |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_01 | Validate the Expected recovery and Percentage functionality. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006 | 2018-09-20 | 2018-09-20 |      48000384 |       60 |     60 |  48000384 |

  @mtc5
  Scenario Outline: Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected or Validate Action Request Payment Agreement..
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then user should be on Debt Collection Case
    Then user verifies the Total Due HyperLink"<totaldue>"
    Then user Verifies Received Amount"<Areceived>"
    Then Verifies the balance amount"<Bamount>"
    Then click on Amount radio at Expected Recovery
    Then Enter the amount to be Recovered"<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"
    Then Status "Open" should be displayed
    Then Selects Action "Under Review"
    Then click on Submit button
    Then click on previous button on Debt collection Case
    Then click on filter by dropdown CaseID"<caseid>"
    Then Status "Under Review" should be displayed
    Then Selects Action "Request Payment Agreement"
    Then click on Submit button
    Then Status "PA in Progress" should be displayed

    Examples: 
      | Test Case ID                               | Description                                                                                                                                                                   | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount | Rpercent | status | action       | totaldue | Areceived | Bamount  |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_02 | Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected. Or Validate Action Request Payment Agreement. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006 | 2018-09-20 | 2018-09-21 |      80000640 |      100 | Open   | Under Review | 80000640 |         0 | 80000640 |

  @mtc8
  Scenario Outline: Validate actions payment requested.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then user should be on Debt Collection Case
    Then user verifies the Total Due HyperLink"<totaldue>"
    Then user Verifies Received Amount"<Areceived>"
    Then Verifies the balance amount"<Bamount>"
    Then click on Amount radio at Expected Recovery
    Then Enter the amount to be Recovered"<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"
    Then Status "Open" should be displayed
    Then Selects Action "Under Review"
    Then click on Submit button
    Then Status "Under Review" should be displayed
    Then Selects Action "Request Payment"
    Then add Comment "<comment>"
    Then attach the document"<path>"
    Then click on Submit button
    Then user should be on Case Management Page

    Examples: 
      | Test Case ID                               | Description                         | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount | Rpercent | PerRec | RecAmount | path        |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_03 | Validate actions payment requested. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006 | 2018-09-20 | 2018-09-20 |      48000384 |       60 |     60 |  48000384 | F:\\pic.png |

  @mtc8
  Scenario Outline: Validate Amount field  under recovery amount.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then user should be on Debt Collection Case
    Then user verifies the Total Due HyperLink"<totaldue>"
    Then user Verifies Received Amount"<Areceived>"
    Then Verifies the balance amount"<Bamount>"
    Then click on Amount radio at Expected Recovery
    Then Enter the amount to be Recovered"<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"
    Then Status "Open" should be displayed
    Then Selects Action "Under Review"
    Then click on Submit button
    Then Status "Under Review" should be displayed
    Then Selects Action "Request Payment"
    Then add Comment "<comment>"
    Then attach the document"<path>"
    Then click on Submit button
    Then user should be on Case Management Page

    Examples: 
      | Test Case ID                               | Description                                    | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount | Rpercent | PerRec | RecAmount | path            | comment               |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_04 | Validate Amount field  under recovery amount.. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006 | 2018-09-14 | 2018-09-14 |      48000384 |      100 |     60 |  48000384 | F:\\capture.jpg | Please pay the amount |
