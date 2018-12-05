@DebtCaseCollectionofficer
Feature: List of Debt Cases Assigned to the Collection Officer – Reassign

  @mtc6
  Scenario Outline: Validate the Expected recovery and Percentage functionality internal portal.
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
      | Test Case ID                               | Description                                                  | officername  | uname           | password | ageing5    | month5 | caseid          | RecoverAmount | Rpercent | PerRec | RecAmount |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_01 | Validate the Expected recovery and Percentage functionality. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 |     715664.23 |       60 |     60 | 715664.23 |

  @mtc5
  Scenario Outline: Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected or Validate Action Request Payment Agreement internal portal.
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
      | Test Case ID                               | Description                                                                                                                                                                   | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount     | Rpercent | status | action       | totaldue          | Areceived       | Bamount           |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_02 | Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected. Or Validate Action Request Payment Agreement. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000009 | 2018-09-20 | 2018-09-21 | 12.799.903.790,59 |      100 | Open   | Under Review | 12.800.000.128,00 | -202.797.695,57 | 13.002.701.486,16 |

  @mtc8
  Scenario Outline: Validate Amount field  under recovery amount internal portal.
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
     Then add Comment "<comment>"
    Then attach the document"<path>"

   Then click on Submit button
    Then Status "Under Review" should be displayed
    Then Selects Action "Request Payment"
    Then add Comment "<comment>"
    Then attach the document"<path>"
    Then click on Submit button
    Then user should be on Case Management Page
    Examples: 
      | Test Case ID                               | Description                                    | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount | Rpercent | PerRec | RecAmount | path        | comment               | totaldue   | Areceived | Bamount    |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_04 | Validate Amount field  under recovery amount.. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000014 | 2018-09-14 | 2018-09-14 |      -96337.41 |      100 |     60 |  -57802.45 | Capture.PNG | Please pay the amount | -96.337,41 |      0,00 | -96.337,41 |

  @mtc8.1
  Scenario Outline: Validate actions payment requested internal portal.
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
    #Then add Comment "<comment>"
  #  Then attach the document"<path>"
    Then click on Submit button
    Then user should be on Case Management Page

    Examples: 
      | Test Case ID                               | Description                         | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount | Rpercent | PerRec | RecAmount | path        | Areceived | totaldue     |Bamount|
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_03 | Validate actions payment requested. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-20 | 2018-09-20 |     715664.23 |       60 |     60 | 715664.23 | Capture.PNG |    -201.604.921,85 | 1.192.773,72 |202.797.695,57|
