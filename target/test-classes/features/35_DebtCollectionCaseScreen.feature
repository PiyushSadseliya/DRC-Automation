@DebtCaseCollectionofficer
Feature: List of Debt Cases Assigned to the Collection Officer – Reassign

  @mtc6
  Scenario Outline: Validate the Expected recovery and Percentage functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    #Then click on filter by dropdown CaseID"<caseid>"
    Then click on filter by dropdown TaxPayer"<tpayer>"
    Then Click on View in Manage Options
    Then user should be on Debt Collection Case
    Then click in Percentage Radio At Expected Recovery
    Then Enter the Percentage "<PerRec>" and displayed amount field"<RecAmount>"
    Then click on Amount radio at Expected Recovery
    Then Enter the amount to be Recovered"<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"

    #Then user verifies the Total Due HyperLink"<totaldue>"
    #Then user Verifies Received Amount"<Areceived>"
    # Then Verifies the balance amount"<Bamount>"
    Examples: 
      | Test Case ID                               | Description                                                  | officername  | uname           | password | ageing5    | month5 | caseid          | RecoverAmount | Rpercent | PerRec | RecAmount | tpayer | totaldue | Areceived | Bamount  |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_01 | Validate the Expected recovery and Percentage functionality. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 |       8000,00 |       60 |     60 |       100 |two test | 8.000,00 |      0,00 | 8.000,00 |

  ###
  ###Requires two records
  ##
  # @mtc5
  #Scenario Outline: Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected or Validate Action Request Payment Agreement internal portal.
  # Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
  # When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
  # Then click on filter by dropdown CaseID"<caseid>"
  # Then click on filter by dropdown TaxPayer"<tpayer>"
  #Then Click on View in Manage Options
  #Then user should be on Debt Collection Case
  #Then Status "Open" should be displayed
  #Then Selects Action "Under Review"
  # Then click on Submit button
  #    Then click on previous button on Debt collection Case
  #   Then click on filter by dropdown TaxPayer"<tpayer>"
  # Then click on filter by dropdown CaseID"<caseid>"
  #Then Status "Under Review" should be displayed
  #Then Selects Action "Request Payment Agreement"
  #Then click on Submit button
  #Then Status "PA in Progress" should be displayed
  #Examples:
  # | Test Case ID                               | Description                                                                                                                                                                   | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount     | Rpercent | status | action       | totaldue   | Areceived | Bamount    | tpayer |
  #| DRC_ATC_AssignedDebt_TotalArrears_PopUp_02 | Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected. Or Validate Action Request Payment Agreement. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000009 | 2018-09-20 | 2018-09-21 | 12.799.903.790,59 |      100 | Open   | Under Review | 826.307,94 |      0,00 | 826.307,94 | Approved User  |
  @mtc8.1
  Scenario Outline: Validate actions payment requested.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    # When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    #  Then click on filter by dropdown CaseID"<caseid>"
    #Then click on filter by dropdown TaxPayer"<tpayer>"
    #Then Click on View in Manage Options
    #Then user should be on Debt Collection Case
    #Then user verifies the Total Due HyperLink"<totaldue>"
    #Then user Verifies Received Amount"<Areceived>"
    #Then Verifies the balance amount"<Bamount>"
    # Then click on Amount radio at Expected Recovery
    #Then Enter the amount to be Recovered"<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"
    Then click in Percentage Radio At Expected Recovery
    Then Enter the Percentage "<PerRec>" and displayed amount field"<RecAmount>"
     Then Status "Open" should be displayed
     Then Selects Action "Under Review"
     Then click on Submit button
   Then Status "Under Review" should be displayed
    Then Selects Action "Request Payment"
    Then add Comment "<comment>"
   Then attach the document"<path>"
    Then click on Submit button
    Then user should be on Case Management Page
    Then no of notification should be 1 with "Request Payment" notification
    Then click on previous button from debt case
    Then click on filter by dropdown CaseID

    Examples: 
      | Test Case ID                               | Description                         | officername  | uname           | password | ageing5    | fdate      | todate     | RecoverAmount | Rpercent | PerRec | RecAmount | path        | Areceived | Bamount  | tpayer | PerRec | RecAmount | comment                                      |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_03 | Validate actions payment requested. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | 2018-09-20 | 2018-09-20 |     6000|       60 |     60 |           | Capture.PNG |         0 | 8.000,00 |two test |    100 |      0,00 | Please pay the pending debts at the earliest |
