@NotificationPopUp
Feature: No. of Notification: Shows the notifications count. When clicked, pop-up appears, and the officer can view the notifications details

  @mtc2
  Scenario Outline: Validate the collection officer sent the notification to Tax payer  for Payment Request.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options    
    Then Previous status must be"Under Review"
    Then Selects Action "Request Payment"
    Then click on Submit button
    Then click on previous button on Debt collection Case
    Then click on filter by dropdown CaseID"<caseid>"
    Then status should be "Payment Requested"
    Then Click on View in Manage Options
    Then no of notification should be 1 with "Request Payment" notification

    Examples: 
      | Test Case ID                      | Description                                                                              | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     |
      | DRC_ATC_AssignedDebt_Notification_01 | Validate the collection officer sent the notification to Tax payer  for Payment Request. |             | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006 | 2018-09-20 | 2018-09-20 |

  @mtc3
  Scenario Outline: Validate the system sent the notification to collection officer before deadline of payment.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then Selects Action "Payment Reminder Sent"
    Then click on Submit button
    Then click on previous button on Debt collection Case
    Then click on filter by dropdown CaseID"<caseid>"
    Then status should be "Payment Reminder Sent"

    Examples: 
      | Test Case ID                      | Description                                                                                 | officername | uname           | password | ageing5    | month5 | caseid | fdate      | todate     |
      | DRC_ATC_AssignedDebt_Notification_02 | Validate the system sent the notification to collection officer before deadline of payment. |             | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006       | 2018-09-19 | 2018-09-19 |

  @mtc6
  Scenario Outline: Validate the collection officer sent the notification to Tax payer for Escalates the case to legal.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then Previous status must be"Payment Not Completed"
    Then Selects Action "Payment Not Completed"
    Then click on Submit button
    Then click on previous button on Debt collection Case
    Then click on filter by dropdown CaseID"<caseid>"
    Then status should be "Payment Not Completed"
    Then Click on View in Manage Options
    #Then Previous status must be "Payment Not Completed"
    Then Selects Action "Assign to Legal"
    Then Selects Collection Agent"<collectionofficer>"
    Then click on Submit button
    Then click on previous button on Debt collection Case
    Then click on filter by dropdown CaseID"<caseid>"
    Then status should be "Assign to Legal"
    Then Click on View in Manage Options
    Then no of notification should be 2 with "Assign to Legal" notification

    Examples: 
      | Test Case ID                      | Description                                                                                         | officername | uname           | password | ageing5    | month5 | caseid | fdate      | todate     | collectionofficer |
      | DRC_ATC_AssignedDebt_Notification_03 | Validate the System  sent the notification to tax payer for Full payment not made till the deadline |             | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006       | 2018-09-19 | 2018-09-21 | Jainik            |

  @mtc8
  Scenario Outline: Validate the collection officer sent the notification to tax officer for Request Write-Off
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by dropdown CaseID"<caseid>"
    Then Click on View in Manage Options
    Then Previous status must be"Assign to Legal"
    Then Selects Action "Request Write-Off"
    Then click on Submit button
    Then status should be "Write-off Requested"

    Examples: 
      | Test Case ID                      | Description                                                                                | officername | uname           | password | ageing5    | month5 | caseid | fdate      | todate     | collectionofficer |
      | DRC_ATC_AssignedDebt_Notification_04 | Validate the collection officer sent the notification to tax officer for Request Write-Off |             | ketan.prajapati | admin    | 0-3 Months | amount | R18092000000006       | 2018-09-19 | 2018-09-21 | Jainik            |
