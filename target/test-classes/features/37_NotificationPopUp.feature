@NotificationPopUp
Feature: No. of Notification: Shows the notifications count. When clicked, pop-up appears, and the officer can view the notifications details

  #@mtc2
  #Scenario Outline: Validate the collection officer sent the notification to Tax payer  for Payment Request internal portal.
  # Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
  #When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
  #  Then click on filter by dropdown CaseID"<caseid>"
  #  Then Click on View in Manage Options
  #Then Previous status must be"Under Review"
  #Then Selects Action "Request Payment"
  #Then click on Submit button
  #  Then click on previous button on Debt collection Case
  #  Then click on filter by dropdown CaseID"<caseid>"
  #Then Click on View in Manage Options
  #Then no of notification should be 1 with "Request Payment" notification
  #Examples:
  # | Test Case ID                         | Description                                                                              | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     |
  #  3 | DRC_ATC_AssignedDebt_Notification_01 | Validate the collection officer sent the notification to Tax payer  for Payment Request. | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-20 | 2018-09-20 |

  #  @mtc3
 # Scenario Outline: internal portal Validate the system sent the notification to collection officer before deadline of payment  .
   # Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
   # When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
 #   Then click on filter by dropdown TaxPayer"<tpayer>"
 #   Then Click on View in Manage Options
  #  Then user should be on Debt Collection Case
   # Then Status "Request Payment" should be displayed
   # Then Selects Action "Payment Reminder Sent"
    #Then click on Submit button
      #Then click on previous button on Debt collection Case
      #Then click on filter by dropdown CaseID"<caseid>"
   #    Examples:
    #  | Test Case ID                         | Description                                                                                 | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | tpayer        |
    #  | DRC_ATC_AssignedDebt_Notification_02 | Validate the system sent the notification to collection officer before deadline of payment. | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-19 | 2018-09-19 | Approved User |

  @mtc6
  Scenario Outline: Validate the collection officer sent the notification to taxpayer for Escalates the case to legal.
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
    Then Status "Payment Reminder Sent" should be displayed
        Then click on previous button from debt case
    Then click on filter by dropdown CaseID
    #Then Selects Action "Payment Not Completed"
   # Then click on Submit button
    Then Status "Payment Not Completed" should be displayed
    Then Selects Action "Assign to Legal"
    Then Selects Collection Agent"<collectionofficer>"
    Then click on Submit button
    Then click on previous button from debt case
    Then click on filter by dropdown CaseID
    Then Status "Assign to Legal" should be displayed
    Then no of notification should be 3 with "Assign to Legal" notification

    Examples: 
      | Test Case ID                         | Description                                                                                         | officername | uname           | password | ageing5    | month5 | caseid          | collectionofficer |
      | DRC_ATC_AssignedDebt_Notification_03 | Validate the System  sent the notification to tax payer for Full payment not made till the deadline | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 |  Jainik            |

  #@mtc8
 # Scenario Outline: Validate the collection officer sent the notification to taxofficer for Request Write-Off.
 #   Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>"should be logged in to the internal portal
  #  Then Selects Action "Request Write-Off"
    #Then click on Submit button
    #Then Status "Request Write-Off" should be displayed
#
    #Examples: 
      #| Test Case ID                         | Description                                                                                | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | collectionofficer |
      #| DRC_ATC_AssignedDebt_Notification_04 | Validate the collection officer sent the notification to tax officer for Request Write-Off | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-19 | 2018-09-21 | Jainik            |

      
      
      ### mtc 8 has been removed from srs request write off has been removed