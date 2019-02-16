@AgeingOfArrears @TotalDue @Amount @DebtPending
Feature: Total Due: To show total amount due at the start of the collection case with a pop up of Ageing of Arrears to allow user to view the age bracket/s and the amount targeted in the collection case for each age-bracket

  @mtc3 @ArrearsAmount
  Scenario Outline: Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    # When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
     #Then click on filter by dropdown CaseID"<caseid>"
    # Then click on filter by dropdown TaxPayer"<tpayer>"
    #  Then Click on View in Manage Options
    Then Click on Total Due hyperlink
    Then Amount in ageing of arrears in twentyfour months and Above is amount "<month1>" thirteen to twentyfour months "<month2>" seven to twelve months"<month3>" four to six months"<month4>" zero to three months Total Debt(FC)

    Examples: 
      | Test Case ID                               | Description                                                                                                                                                     | officername  | uname           | password | ageing5    | month5 | fdate      | todate     | ageing1             | month1 | ageing2      | month2 | ageing3     | month3 | ageing4    | month4 | tpayer        |
      | DRC_ATC_AssignedDebt_TotalArrears_PopUp_01 | Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window. | Urvish Patel | ketan.prajapati | admin    | 0-3 Months |        | 2018-09-20 | 2018-09-20 | 24 Months and Above |   0,00 | 13-24 Months |   0,00 | 7-12 Months |   0,00 | 4-6 Months |   0,00 | Three Feb  |
