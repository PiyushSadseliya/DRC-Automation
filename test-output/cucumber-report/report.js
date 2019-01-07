$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/37_NotificationPopUp.feature");
formatter.feature({
  "line": 2,
  "name": "No. of Notification: Shows the notifications count. When clicked, pop-up appears, and the officer can view the notifications details",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#@mtc2"
    },
    {
      "line": 5,
      "value": "#Scenario Outline: Validate the collection officer sent the notification to Tax payer  for Payment Request internal portal."
    },
    {
      "line": 6,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 7,
      "value": "#When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 8,
      "value": "#  Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 9,
      "value": "#  Then Click on View in Manage Options"
    },
    {
      "line": 10,
      "value": "#Then Previous status must be\"Under Review\""
    },
    {
      "line": 11,
      "value": "#Then Selects Action \"Request Payment\""
    },
    {
      "line": 12,
      "value": "#Then click on Submit button"
    },
    {
      "line": 13,
      "value": "#  Then click on previous button on Debt collection Case"
    },
    {
      "line": 14,
      "value": "#  Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 15,
      "value": "#Then Click on View in Manage Options"
    },
    {
      "line": 16,
      "value": "#Then no of notification should be 1 with \"Request Payment\" notification"
    },
    {
      "line": 17,
      "value": "#Examples:"
    },
    {
      "line": 18,
      "value": "# | Test Case ID                         | Description                                                                              | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     |"
    },
    {
      "line": 19,
      "value": "#  3 | DRC_ATC_AssignedDebt_Notification_01 | Validate the collection officer sent the notification to Tax payer  for Payment Request. | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-20 | 2018-09-20 |"
    },
    {
      "line": 20,
      "value": "#  @mtc3"
    }
  ],
  "line": 21,
  "name": "internal portal Validate the system sent the notification to collection officer before deadline of payment  .",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;internal-portal-validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment--.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should be on Debt Collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Status \"Request Payment\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Selects Action \"Payment Reminder Sent\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 30,
      "value": "#Then click on previous button on Debt collection Case"
    },
    {
      "line": 31,
      "value": "#Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    }
  ],
  "line": 32,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;internal-portal-validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment--.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "month5",
        "caseid",
        "fdate",
        "todate",
        "tpayer"
      ],
      "line": 33,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;internal-portal-validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment--.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification_02",
        "Validate the system sent the notification to collection officer before deadline of payment.",
        "Ketan",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18112900000003",
        "2018-09-19",
        "2018-09-19",
        "Approved User"
      ],
      "line": 34,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;internal-portal-validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment--.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34828755550,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "internal portal Validate the system sent the notification to collection officer before deadline of payment  .",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;internal-portal-validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment--.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "\"DRC_ATC_AssignedDebt_Notification_02\"\"Validate the system sent the notification to collection officer before deadline of payment.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on filter by dropdown TaxPayer\"Approved User\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user should be on Debt Collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Status \"Request Payment\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Selects Action \"Payment Reminder Sent\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification_02",
      "offset": 1
    },
    {
      "val": "Validate the system sent the notification to collection officer before deadline of payment.",
      "offset": 39
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 136
    },
    {
      "val": "ketan.prajapati",
      "offset": 147
    },
    {
      "val": "admin",
      "offset": 164
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5971607685,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3497458687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved User",
      "offset": 37
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_TaxPayer(String)"
});
formatter.result({
  "duration": 7056815692,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "duration": 3297426940,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.user_should_be_on_Debt_Collection_Case()"
});
formatter.result({
  "duration": 6059205822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Payment",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 51842498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Reminder Sent",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2328223349,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 15143869231,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 811010389,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Validate the collection officer sent the notification to taxpayer for Escalates the case to legal.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@mtc6"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Status \"Payment Reminder Sent\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Selects Action \"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Status \"Payment Not Completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Selects Action \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Selects Collection Agent\"\u003ccollectionofficer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Status \"Assign to Legal\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "no of notification should be 3 with \"Assign to Legal\" notification",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "month5",
        "caseid",
        "fdate",
        "todate",
        "collectionofficer"
      ],
      "line": 50,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification_03",
        "Validate the System  sent the notification to tax payer for Full payment not made till the deadline",
        "Ketan",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18112900000003",
        "2018-09-19",
        "2018-09-21",
        "Jainik"
      ],
      "line": 51,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5508988425,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Validate the collection officer sent the notification to taxpayer for Escalates the case to legal.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@mtc6"
    },
    {
      "line": 1,
      "name": "@NotificationPopUp"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "\"DRC_ATC_AssignedDebt_Notification_03\"\"Validate the System  sent the notification to tax payer for Full payment not made till the deadline\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Status \"Payment Reminder Sent\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Selects Action \"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Status \"Payment Not Completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Selects Action \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Selects Collection Agent\"Jainik\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Status \"Assign to Legal\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "no of notification should be 3 with \"Assign to Legal\" notification",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification_03",
      "offset": 1
    },
    {
      "val": "Validate the System  sent the notification to tax payer for Full payment not made till the deadline",
      "offset": 39
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 144
    },
    {
      "val": "ketan.prajapati",
      "offset": 155
    },
    {
      "val": "admin",
      "offset": 172
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5868271221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Reminder Sent",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 32451861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Not Completed",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2298572847,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 15143372794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Not Completed",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 33649918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign to Legal",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2331005044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jainik",
      "offset": 25
    }
  ],
  "location": "NotificationPopUp.selects_Collection_Agent(String)"
});
formatter.result({
  "duration": 6373704515,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 15118884142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign to Legal",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 31883894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    },
    {
      "val": "Assign to Legal",
      "offset": 37
    }
  ],
  "location": "NotificationPopUp.no_of_notification_should_be_with_notification(int,String)"
});
formatter.result({
  "duration": 13550854328,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 746400198,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Validate the collection officer sent the notification to taxofficer for Request Write-Off.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxofficer-for-request-write-off.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@mtc8"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Selects Action \"Request Write-Off\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Status \"Request Write-Off\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxofficer-for-request-write-off.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "month5",
        "caseid",
        "fdate",
        "todate",
        "collectionofficer"
      ],
      "line": 61,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxofficer-for-request-write-off.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification_04",
        "Validate the collection officer sent the notification to tax officer for Request Write-Off",
        "Ketan",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18112900000003",
        "2018-09-19",
        "2018-09-21",
        "Jainik"
      ],
      "line": 62,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxofficer-for-request-write-off.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5507940267,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Validate the collection officer sent the notification to taxofficer for Request Write-Off.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxofficer-for-request-write-off.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    },
    {
      "line": 53,
      "name": "@mtc8"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "\"DRC_ATC_AssignedDebt_Notification_04\"\"Validate the collection officer sent the notification to tax officer for Request Write-Off\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Selects Action \"Request Write-Off\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Status \"Request Write-Off\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification_04",
      "offset": 1
    },
    {
      "val": "Validate the collection officer sent the notification to tax officer for Request Write-Off",
      "offset": 39
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 135
    },
    {
      "val": "ketan.prajapati",
      "offset": 146
    },
    {
      "val": "admin",
      "offset": 163
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5855642598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Write-Off",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2320638881,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 15120521069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Write-Off",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 57314122,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 761530949,
  "status": "passed"
});
});