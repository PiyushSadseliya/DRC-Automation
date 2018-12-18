$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/45_FX_Management_TaxOfficer.feature");
formatter.feature({
  "line": 1,
  "name": "User is on FX Management Page Tax Officer",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the Base currency on all the pages of FX management module -fx taxofficer",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on FX Management \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#   And User see FX Management"
    }
  ],
  "line": 7,
  "name": "User click on FX Management tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify the Base currency on the FX management is Congolese France and its value is one",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on update button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User see pop up and see base currency is 1",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on cancel button on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on Historical FX Rates button and verify the base currency",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description"
      ],
      "line": 15,
      "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;;1"
    },
    {
      "cells": [
        "FX_Management_Officer_03",
        "Verify Base Currency"
      ],
      "line": 16,
      "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22182245808,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate the Base currency on all the pages of FX management module -fx taxofficer",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on FX Management \"FX_Management_Officer_03\" \"Verify Base Currency\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#   And User see FX Management"
    }
  ],
  "line": 7,
  "name": "User click on FX Management tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify the Base currency on the FX management is Congolese France and its value is one",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on update button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User see pop up and see base currency is 1",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on cancel button on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on Historical FX Rates button and verify the base currency",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FX_Management_Officer_03",
      "offset": 26
    },
    {
      "val": "Verify Base Currency",
      "offset": 53
    }
  ],
  "location": "DV_2063_FX_Management_TaxOfficer.user_is_on_FX_Management(String,String)"
});
formatter.result({
  "duration": 71373733,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_FX_Management_tab()"
});
formatter.result({
  "duration": 4002396974,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_verify_the_Base_currency_on_the_FX_management_is_Congolese_France_and_its_value_is()"
});
formatter.result({
  "duration": 1895318563,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_update_button()"
});
formatter.result({
  "duration": 1129802782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "DV_2063_FX_Management_TaxOfficer.user_see_pop_up_and_see_base_currency_is(int)"
});
formatter.result({
  "duration": 1576799,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_cancel_button_on_pop_up()"
});
formatter.result({
  "duration": 620275018,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_Historical_FX_Rates_button_and_verify_the_base_currency()"
});
formatter.result({
  "duration": 2120432327,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 661132719,
  "status": "passed"
});
formatter.uri("features/46_FX_Management_Supervisor.feature");
formatter.feature({
  "line": 1,
  "name": "User is on FX Management Page DGI Supervisor",
  "description": "",
  "id": "user-is-on-fx-management-page-dgi-supervisor",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#@TC_09"
    },
    {
      "line": 4,
      "value": "#  Scenario Outline: Validate the Base currency on all the pages of FX management module -supervisor"
    },
    {
      "line": 5,
      "value": "#    Given User is on FX Management \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 6,
      "value": "#    And User click on Dashboard"
    },
    {
      "line": 7,
      "value": "#    And User click on FX Management tab"
    },
    {
      "line": 8,
      "value": "#    And User verify the Base currency on the FX management is Congolese France and its value is one for supervisor"
    },
    {
      "line": 9,
      "value": "#    And User click on Historical FX Rates button and verify the base currency"
    },
    {
      "line": 11,
      "value": "#    Examples:"
    },
    {
      "line": 12,
      "value": "#      | TestcaseID                   | Description          |"
    },
    {
      "line": 13,
      "value": "#      | FX_Management_Supervisior_09 | Verify Base Currency |"
    },
    {
      "line": 16,
      "value": "# on hold profile picture"
    }
  ],
  "line": 18,
  "name": "Validate the Name and profile picture displayed  on all the screens -supervisor",
  "description": "",
  "id": "user-is-on-fx-management-page-dgi-supervisor;validate-the-name-and-profile-picture-displayed--on-all-the-screens--supervisor",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_05_name_and_profile"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on FX Management \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User see FX Management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on FX Management tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verify the DGI officer name and profile picture \"\u003cname\u003e\" for DGI Supervisior",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Click on Historical FX Rates button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verify the DGI officer name and profile picture \"\u003cname\u003e\" for DGI Supervisior",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "user-is-on-fx-management-page-dgi-supervisor;validate-the-name-and-profile-picture-displayed--on-all-the-screens--supervisor;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "name"
      ],
      "line": 28,
      "id": "user-is-on-fx-management-page-dgi-supervisor;validate-the-name-and-profile-picture-displayed--on-all-the-screens--supervisor;;1"
    },
    {
      "cells": [
        "FX_Management_Supervisior_05",
        "Verify Name and profile",
        "pooja"
      ],
      "line": 29,
      "id": "user-is-on-fx-management-page-dgi-supervisor;validate-the-name-and-profile-picture-displayed--on-all-the-screens--supervisor;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29917271776,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate the Name and profile picture displayed  on all the screens -supervisor",
  "description": "",
  "id": "user-is-on-fx-management-page-dgi-supervisor;validate-the-name-and-profile-picture-displayed--on-all-the-screens--supervisor;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_05_name_and_profile"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on FX Management \"FX_Management_Supervisior_05\" \"Verify Name and profile\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User see FX Management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on FX Management tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verify the DGI officer name and profile picture \"pooja\" for DGI Supervisior",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Click on Historical FX Rates button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verify the DGI officer name and profile picture \"pooja\" for DGI Supervisior",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FX_Management_Supervisior_05",
      "offset": 26
    },
    {
      "val": "Verify Name and profile",
      "offset": 57
    }
  ],
  "location": "DV_2063_FX_Management_TaxOfficer.user_is_on_FX_Management(String,String)"
});
formatter.result({
  "duration": 192077,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 13169534,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54372}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 72ff2658adf65045542b7dbeae64c69e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:779)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:95)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:26)\r\n\tat ✽.And User click on Dashboard(features/46_FX_Management_Supervisor.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_see_FX_Management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_FX_Management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pooja",
      "offset": 54
    }
  ],
  "location": "DV_2063_FX_Management_Supervisior.user_verify_the_DGI_officer_name_and_profile_picture_for_DGI_Supervisior(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_Click_on_Historical_FX_Rates_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pooja",
      "offset": 54
    }
  ],
  "location": "DV_2063_FX_Management_Supervisior.user_verify_the_DGI_officer_name_and_profile_picture_for_DGI_Supervisior(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 599987517,
  "status": "passed"
});
});