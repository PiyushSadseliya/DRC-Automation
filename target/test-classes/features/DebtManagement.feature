#@DebtManagementPart-1
#Feature: Validate the functionality of Debt Management Module
#
  #@Debt01
  #Scenario Outline: Validate the assign officer button functionality with valid data
    #Given "<Test Case ID>""<Description>" DGI should be logged in to the internal portal
    #When clicked on Debt Management Module must be on Debt Management Module
    #When Clicked on pending amount for "<ageing>"
    #Then user is on Pending debts
    #Then Search by TaxPayer Name "<taxpayername>" and assigns to officer and is on Case Management
#
    #Examples: 
      #| Test Case ID             | Description                                                      | ageing     | taxpayername |
      #| DRC_ATC_DebtManagement01 | Validate the assign officer button functionality with valid data | 0-3 Months | yamini patel |
#
#
  #@Debt02
  #Scenario Outline: Validate actions payment requested
    #When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    #Then click on filter by dropdown CaseID "<caseid>"
    #Then Click on View in Manage Options
    #Then user should be on Debt Collection Case
    #Then user verifies the Total Due HyperLink "<totaldue>"
    #Then user Verifies Received Amount "<Areceived>"
    #Then Verifies the balance amount "<Bamount>"
    #Then click on Amount radio at Expected Recovery
    #Then Enter the amount to be Recovered "<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"
    #Then click in Percentage Radio At Expected Recovery
    #Then Enter the Percentage "<PerRec>" and displayed amount field "<RecAmount>"
    #Then Status "Open" should be displayed
    #Then Selects Action "Under Review"
    #Then click on Submit button
    #Then Status "Under Review" should be displayed
    #Then Selects Action "Request Payment"
    #Then add Comment "<comment>"
    #Then attach the document"<path>"
    #Then click on Submit button
    #Then user should be on Case Management Page
    #Then no of notification should be 1 with "Request Payment" notification
    #Then click on previous button from debt case
    #Then click on filter by dropdown CaseID
    #Then Status "Payment Reminder Sent" should be displayed
    #Then Selects Action "Close"
    #Then click on Submit button
#
    #Examples: 
      #| Test Case ID                               | Description                        | caseid          | officername  | ageing5    | fdate      | todate     | totaldue | RecoverAmount | Rpercent | PerRec | RecAmount | path        | Areceived | Bamount  | tpayer       | PerRec | RecAmount | comment                                      |
      #| DRC_ATC_AssignedDebt_TotalArrears_PopUp_03 | Validate actions payment requested | R19021400000034 | Jainik Patel | 0-3 Months | 2018-09-20 | 2018-09-20 | 3.640,00 |          3640 |      100 |    100 |           | Capture.pdf |      0,00 | 3.640,00 | yamini patel |    100 |      0,00 | Please pay the pending debts at the earliest |
