$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NotificationPopUp.feature");
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
  "line": 5,
  "name": "Validate the collection officer sent the notification to Tax payer  for Payment Request.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer--for-payment-request.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@mtc2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Previous status must be\"Under Review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Selects Action \"Request Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "status should be \"Payment Requested\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "no of notification should be 1 with \"Request Payment\" notification",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer--for-payment-request.;",
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
        "todate"
      ],
      "line": 20,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer--for-payment-request.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification",
        "Validate the collection officer sent the notification to Tax payer  for Payment Request.",
        "",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18092000000006",
        "2018-09-20",
        "2018-09-20"
      ],
      "line": 21,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer--for-payment-request.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16185100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate the collection officer sent the notification to Tax payer  for Payment Request.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer--for-payment-request.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    },
    {
      "line": 4,
      "name": "@mtc2"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"DRC_ATC_AssignedDebt_Notification\"\"Validate the collection officer sent the notification to Tax payer  for Payment Request.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Previous status must be\"Under Review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Selects Action \"Request Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "status should be \"Payment Requested\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "no of notification should be 1 with \"Request Payment\" notification",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification",
      "offset": 1
    },
    {
      "val": "Validate the collection officer sent the notification to Tax payer  for Payment Request.",
      "offset": 36
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 130
    },
    {
      "val": "ketan.prajapati",
      "offset": 141
    },
    {
      "val": "admin",
      "offset": 158
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 299570900,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 5671605700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "duration": 5721653500,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "duration": 21519647700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Under Review",
      "offset": 24
    }
  ],
  "location": "NotificationPopUp.previous_status_must_be(String)"
});
formatter.result({
  "duration": 39966500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Payment",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 13973158400,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 18811343500,
  "status": "passed"
});
formatter.match({
  "location": "NotificationPopUp.click_on_previous_button_on_Debt_collection_Case()"
});
formatter.result({
  "duration": 8381930000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "duration": 19968716200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Requested",
      "offset": 18
    }
  ],
  "location": "NotificationPopUp.status_should_be(String)"
});
formatter.result({
  "duration": 306629700,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS60-PC\u0027, ip: \u0027192.168.0.60\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 90f526258e670186472e3102f395c4fa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat org.drc.vat.appmanager.HelperBase.elementText(HelperBase.java:201)\r\n\tat org.drc.vat.StepDefinitions.NotificationPopUp.status_should_be(NotificationPopUp.java:25)\r\n\tat ✽.Then status should be \"Payment Requested\"(features/NotificationPopUp.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "Request Payment",
      "offset": 37
    }
  ],
  "location": "NotificationPopUp.no_of_notification_should_be_with_notification(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1118029300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Validate the system sent the notification to collection officer before deadline of payment.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@mtc3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Selects Action \"Payment Reminder Sent\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "status should be \"Payment Reminder Sent\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment.;",
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
        "todate"
      ],
      "line": 36,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification",
        "Validate the system sent the notification to collection officer before deadline of payment.",
        "",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18092000000006",
        "2018-09-19",
        "2018-09-19"
      ],
      "line": 37,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 484800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validate the system sent the notification to collection officer before deadline of payment.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-system-sent-the-notification-to-collection-officer-before-deadline-of-payment.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    },
    {
      "line": 23,
      "name": "@mtc3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"DRC_ATC_AssignedDebt_Notification\"\"Validate the system sent the notification to collection officer before deadline of payment.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Selects Action \"Payment Reminder Sent\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "status should be \"Payment Reminder Sent\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification",
      "offset": 1
    },
    {
      "val": "Validate the system sent the notification to collection officer before deadline of payment.",
      "offset": 36
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 133
    },
    {
      "val": "ketan.prajapati",
      "offset": 144
    },
    {
      "val": "admin",
      "offset": 161
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 331700,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3352030300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "duration": 4856770200,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "duration": 6536969700,
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
  "duration": 66360138700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //span[text()\u003d\u0027Payment Reminder Sent\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:78)\r\n\tat org.drc.vat.StepDefinitions.DebtCollectionCaseScreen.selects_Action(DebtCollectionCaseScreen.java:72)\r\n\tat ✽.Then Selects Action \"Payment Reminder Sent\"(features/NotificationPopUp.feature:29)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //span[text()\u003d\u0027Payment Reminder Sent\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS60-PC\u0027, ip: \u0027192.168.0.60\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:78)\r\n\tat org.drc.vat.StepDefinitions.DebtCollectionCaseScreen.selects_Action(DebtCollectionCaseScreen.java:72)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationPopUp.click_on_previous_button_on_Debt_collection_Case()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Reminder Sent",
      "offset": 18
    }
  ],
  "location": "NotificationPopUp.status_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 745362000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Validate the collection officer sent the notification to Tax payer for Escalates the case to legal.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer-for-escalates-the-case-to-legal.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@mtc6"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Previous status must be\"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Selects Action \"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "status should be \"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#Then Previous status must be \"Payment Not Completed\""
    }
  ],
  "line": 53,
  "name": "Selects Action \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Selects Collection Agent\"\u003ccollectionofficer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "status should be \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "no of notification should be 2 with \"Assign to Legal\" notification",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer-for-escalates-the-case-to-legal.;",
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
      "line": 63,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer-for-escalates-the-case-to-legal.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification",
        "Validate the System  sent the notification to tax payer for Full payment not made till the deadline",
        "",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18092000000006",
        "2018-09-19",
        "2018-09-21",
        "Jainik"
      ],
      "line": 64,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer-for-escalates-the-case-to-legal.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 276400,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Validate the collection officer sent the notification to Tax payer for Escalates the case to legal.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-payer-for-escalates-the-case-to-legal.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@mtc6"
    },
    {
      "line": 1,
      "name": "@NotificationPopUp"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "\"DRC_ATC_AssignedDebt_Notification\"\"Validate the System  sent the notification to tax payer for Full payment not made till the deadline\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Previous status must be\"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Selects Action \"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "status should be \"Payment Not Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#Then Previous status must be \"Payment Not Completed\""
    }
  ],
  "line": 53,
  "name": "Selects Action \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Selects Collection Agent\"Jainik\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "click on previous button on Debt collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "status should be \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "no of notification should be 2 with \"Assign to Legal\" notification",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification",
      "offset": 1
    },
    {
      "val": "Validate the System  sent the notification to tax payer for Full payment not made till the deadline",
      "offset": 36
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 141
    },
    {
      "val": "ketan.prajapati",
      "offset": 152
    },
    {
      "val": "admin",
      "offset": 169
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 275200,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3383083800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "duration": 5453667900,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "duration": 8989553700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Not Completed",
      "offset": 24
    }
  ],
  "location": "NotificationPopUp.previous_status_must_be(String)"
});
formatter.result({
  "duration": 34856300,
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
  "duration": 63907981400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //span[text()\u003d\u0027Payment Not Completed\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:78)\r\n\tat org.drc.vat.StepDefinitions.DebtCollectionCaseScreen.selects_Action(DebtCollectionCaseScreen.java:72)\r\n\tat ✽.Then Selects Action \"Payment Not Completed\"(features/NotificationPopUp.feature:46)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //span[text()\u003d\u0027Payment Not Completed\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS60-PC\u0027, ip: \u0027192.168.0.60\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:78)\r\n\tat org.drc.vat.StepDefinitions.DebtCollectionCaseScreen.selects_Action(DebtCollectionCaseScreen.java:72)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationPopUp.click_on_previous_button_on_Debt_collection_Case()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Not Completed",
      "offset": 18
    }
  ],
  "location": "NotificationPopUp.status_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NotificationPopUp.click_on_previous_button_on_Debt_collection_Case()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign to Legal",
      "offset": 18
    }
  ],
  "location": "NotificationPopUp.status_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 897432700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Validate the collection officer sent the notification to tax officer for Request Write-Off",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-officer-for-request-write-off",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@mtc8"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "click on filter by dropdown CaseID\"\u003ccaseid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Previous status must be\"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Selects Action \"Request Write-Off\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "status should be \"Write-off Requested\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-officer-for-request-write-off;",
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
      "line": 78,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-officer-for-request-write-off;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification",
        "Validate the collection officer sent the notification to tax officer for Request Write-Off",
        "",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18092000000006",
        "2018-09-19",
        "2018-09-21",
        "Jainik"
      ],
      "line": 79,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-officer-for-request-write-off;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 255500,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Validate the collection officer sent the notification to tax officer for Request Write-Off",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-tax-officer-for-request-write-off;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    },
    {
      "line": 66,
      "name": "@mtc8"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "\"DRC_ATC_AssignedDebt_Notification\"\"Validate the collection officer sent the notification to tax officer for Request Write-Off\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "click on filter by dropdown CaseID\"R18092000000006\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Previous status must be\"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Selects Action \"Request Write-Off\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "status should be \"Write-off Requested\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification",
      "offset": 1
    },
    {
      "val": "Validate the collection officer sent the notification to tax officer for Request Write-Off",
      "offset": 36
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 132
    },
    {
      "val": "ketan.prajapati",
      "offset": 143
    },
    {
      "val": "admin",
      "offset": 160
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 269400,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3322097800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000006",
      "offset": 35
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID(String)"
});
formatter.result({
  "duration": 5058674000,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "duration": 5154598400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign to Legal",
      "offset": 24
    }
  ],
  "location": "NotificationPopUp.previous_status_must_be(String)"
});
formatter.result({
  "duration": 30984000,
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
  "duration": 68285544600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //span[text()\u003d\u0027Request Write-Off\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:78)\r\n\tat org.drc.vat.StepDefinitions.DebtCollectionCaseScreen.selects_Action(DebtCollectionCaseScreen.java:72)\r\n\tat ✽.Then Selects Action \"Request Write-Off\"(features/NotificationPopUp.feature:73)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //span[text()\u003d\u0027Request Write-Off\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS60-PC\u0027, ip: \u0027192.168.0.60\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:78)\r\n\tat org.drc.vat.StepDefinitions.DebtCollectionCaseScreen.selects_Action(DebtCollectionCaseScreen.java:72)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Write-off Requested",
      "offset": 18
    }
  ],
  "location": "NotificationPopUp.status_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 693639300,
  "status": "passed"
});
});