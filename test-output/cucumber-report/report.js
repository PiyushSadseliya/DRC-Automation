$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Payment_Agreement_LandingScreen_Tax_officer.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Payment Agreement Landing Screen (Tax-officer)",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 361,
      "value": "# @TC_47 @Submit_button coved in 02 scenario"
    }
  ],
  "line": 365,
  "name": "Validate the Under review status.",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-under-review-status.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 364,
      "name": "@TC_49_Under_review"
    }
  ]
});
formatter.step({
  "line": 366,
  "name": "User is on Payment Agreement Landing Screen \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "User click on Case Management",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 369,
      "value": "#And User type new id"
    }
  ],
  "line": 370,
  "name": "User Type id \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "User click on action and select under review",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "User click on submit button and see message for under review",
  "keyword": "And "
});
formatter.examples({
  "line": 375,
  "name": "",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-under-review-status.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "id"
      ],
      "line": 376,
      "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-under-review-status.;;1"
    },
    {
      "cells": [
        "Payment_Agrement_Tax_Officer_58",
        "Verify cancel/close status",
        "drp_CaseID_Click",
        "R18092400000002"
      ],
      "line": 377,
      "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-under-review-status.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9857393094,
  "status": "passed"
});
formatter.scenario({
  "line": 377,
  "name": "Validate the Under review status.",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-under-review-status.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 364,
      "name": "@TC_49_Under_review"
    }
  ]
});
formatter.step({
  "line": 366,
  "name": "User is on Payment Agreement Landing Screen \"Payment_Agrement_Tax_Officer_58\" \"Verify cancel/close status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "User click on Case Management",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "User click on filter by on case management and click on \"drp_CaseID_Click\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 369,
      "value": "#And User type new id"
    }
  ],
  "line": 370,
  "name": "User Type id \"R18092400000002\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "User click on action and select under review",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "User click on submit button and see message for under review",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Payment_Agrement_Tax_Officer_58",
      "offset": 45
    },
    {
      "val": "Verify cancel/close status",
      "offset": 79
    }
  ],
  "location": "Payment_Agreement_LandingScreen_Tax_officer.user_is_on_Payment_Agreement_Landing_Screen(String,String)"
});
formatter.result({
  "duration": 88557041,
  "status": "passed"
});
formatter.match({
  "location": "Internal_Portal_Objection_Appeal.user_click_on_Case_Management()"
});
formatter.result({
  "duration": 2751237946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseID_Click",
      "offset": 57
    }
  ],
  "location": "Internal_Portal_Objection_Appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "duration": 1887589367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092400000002",
      "offset": 14
    }
  ],
  "location": "Internal_Portal_Objection_Appeal.user_Type_id(String)"
});
formatter.result({
  "duration": 2317721695,
  "status": "passed"
});
formatter.match({
  "location": "Tax_Payer_Portal_Objection_Appeal.user_click_on_search_button()"
});
formatter.result({
  "duration": 1131530721,
  "status": "passed"
});
formatter.match({
  "location": "Tax_Payer_Portal_Objection_Appeal.user_click_on_manage_drop_down_and_click_on_view()"
});
formatter.result({
  "duration": 1322854144,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Agreement_LandingScreen_Tax_officer.user_click_on_action_and_select_under_review()"
});
formatter.result({
  "duration": 1750261667,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Agreement_LandingScreen_Tax_officer.user_click_on_submit_button_and_see_message_for_under_review()"
});
formatter.result({
  "duration": 992426568,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 910044650,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 382,
  "name": "Validate the Cancel/Closed status.",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-cancel/closed-status.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 381,
      "name": "@TC_55_Cancel_button"
    }
  ]
});
formatter.step({
  "line": 383,
  "name": "User is on Payment Agreement Landing Screen \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 384,
  "name": "User click on Case Management",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 386,
      "value": "#And User type new id"
    }
  ],
  "line": 387,
  "name": "User Type id \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "User click on action and select cancel",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "User click on submit button and see message for cancel status",
  "keyword": "And "
});
formatter.examples({
  "line": 392,
  "name": "",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-cancel/closed-status.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "id"
      ],
      "line": 393,
      "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-cancel/closed-status.;;1"
    },
    {
      "cells": [
        "Payment_Agrement_Tax_Officer_58",
        "Verify cancel/close status",
        "drp_CaseID_Click",
        "R18092000000017"
      ],
      "line": 394,
      "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-cancel/closed-status.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3620486310,
  "status": "passed"
});
formatter.scenario({
  "line": 394,
  "name": "Validate the Cancel/Closed status.",
  "description": "",
  "id": "user-is-on-payment-agreement-landing-screen-(tax-officer);validate-the-cancel/closed-status.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 381,
      "name": "@TC_55_Cancel_button"
    }
  ]
});
formatter.step({
  "line": 383,
  "name": "User is on Payment Agreement Landing Screen \"Payment_Agrement_Tax_Officer_58\" \"Verify cancel/close status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 384,
  "name": "User click on Case Management",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "User click on filter by on case management and click on \"drp_CaseID_Click\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 386,
      "value": "#And User type new id"
    }
  ],
  "line": 387,
  "name": "User Type id \"R18092000000017\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "User click on action and select cancel",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "User click on submit button and see message for cancel status",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Payment_Agrement_Tax_Officer_58",
      "offset": 45
    },
    {
      "val": "Verify cancel/close status",
      "offset": 79
    }
  ],
  "location": "Payment_Agreement_LandingScreen_Tax_officer.user_is_on_Payment_Agreement_Landing_Screen(String,String)"
});
formatter.result({
  "duration": 271854,
  "status": "passed"
});
formatter.match({
  "location": "Internal_Portal_Objection_Appeal.user_click_on_Case_Management()"
});
formatter.result({
  "duration": 2861470044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseID_Click",
      "offset": 57
    }
  ],
  "location": "Internal_Portal_Objection_Appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "duration": 1826653399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R18092000000017",
      "offset": 14
    }
  ],
  "location": "Internal_Portal_Objection_Appeal.user_Type_id(String)"
});
formatter.result({
  "duration": 2335568005,
  "status": "passed"
});
formatter.match({
  "location": "Tax_Payer_Portal_Objection_Appeal.user_click_on_search_button()"
});
formatter.result({
  "duration": 1120209470,
  "status": "passed"
});
formatter.match({
  "location": "Tax_Payer_Portal_Objection_Appeal.user_click_on_manage_drop_down_and_click_on_view()"
});
formatter.result({
  "duration": 1385692234,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Agreement_LandingScreen_Tax_officer.user_click_on_action_and_select_cancel()"
});
formatter.result({
  "duration": 1685261001,
  "status": "passed"
});
formatter.match({
  "location": "Payment_Agreement_LandingScreen_Tax_officer.user_click_on_submit_button_and_see_message_for_cancel_status()"
});
formatter.result({
  "duration": 5763077258,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Case update successfully\u0027)]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS84-PC\u0027, ip: \u0027192.168.0.84\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: e5911318389d0aae5cfca7b66dab02c0\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Case update successfully\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.Payment_Agreement_LandingScreen_Tax_officer.user_click_on_submit_button_and_see_message_for_cancel_status(Payment_Agreement_LandingScreen_Tax_officer.java:908)\r\n\tat ✽.And User click on submit button and see message for cancel status(features/Payment_Agreement_LandingScreen_Tax_officer.feature:391)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 762070488,
  "status": "passed"
});
});