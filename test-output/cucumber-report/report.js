$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Manual Assessement Landing Screen",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User see manual assessment and assessament list tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on manual assessment",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And User click on month \"\u003cmonth\u003e\" and check"
    }
  ],
  "line": 12,
  "name": "User click on year \"\u003cYear\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And User click on FilterBy \"\u003cFilter\u003e\""
    }
  ],
  "line": 14,
  "name": "User type \"\u003cData\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on search button and check data \"\u003cData\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on manage setting drop down and check drop down list for Reassign and Assess",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on reassign and click on drop down and check list \"\u003cDropdownOfficer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And User click on FilterBy \"\u003cFilterOfficer\u003e\" and type \"\u003cofficerdata\u003e\" and click on search button"
    }
  ],
  "line": 19,
  "name": "User click on manage setting drop down and click on Assess",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User will navigate to user manual assessement page",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Year",
        "Filter",
        "Data",
        "DropdownOfficer",
        "FilterOfficer",
        "officerdata"
      ],
      "line": 23,
      "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;;1"
    },
    {
      "cells": [
        "Manual_Assessment_02",
        "validating all clickable compoment",
        "txt_PeriodJan",
        "txt_AssYear18",
        "txt_AsestFilterNitva",
        "20181212113956105",
        "drp_AssestChangedOfficerRitesh",
        "txt_AssestFilterAssestOfficer",
        "Laxman"
      ],
      "line": 24,
      "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21201497631,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Assessment Page \"Manual_Assessment_02\" \"validating all clickable compoment\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User see manual assessment and assessament list tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on manual assessment",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And User click on month \"\u003cmonth\u003e\" and check"
    }
  ],
  "line": 12,
  "name": "User click on year \"txt_AssYear18\" and check",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#And User click on FilterBy \"\u003cFilter\u003e\""
    }
  ],
  "line": 14,
  "name": "User type \"20181212113956105\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on search button and check data \"20181212113956105\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on manage setting drop down and check drop down list for Reassign and Assess",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on reassign and click on drop down and check list \"drp_AssestChangedOfficerRitesh\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#And User click on FilterBy \"\u003cFilterOfficer\u003e\" and type \"\u003cofficerdata\u003e\" and click on search button"
    }
  ],
  "line": 19,
  "name": "User click on manage setting drop down and click on Assess",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User will navigate to user manual assessement page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_02",
      "offset": 28
    },
    {
      "val": "validating all clickable compoment",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 95250254,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1651187557,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_see_manual_assessment_and_assessament_list_tab()"
});
formatter.result({
  "duration": 2064566948,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manual_assessment()"
});
formatter.result({
  "duration": 80344336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1708722891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssYear18",
      "offset": 20
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_year_and_check(String)"
});
formatter.result({
  "duration": 1271344987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181212113956105",
      "offset": 11
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_type(String)"
});
formatter.result({
  "duration": 1264359823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181212113956105",
      "offset": 44
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_search_button_and_check_data(String)"
});
formatter.result({
  "duration": 1017064647,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting_drop_down_and_check_drop_down_list_for_Reassign_and_Assess()"
});
formatter.result({
  "duration": 2158724015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 62
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_reassign_and_click_on_drop_down_and_check_list(String)"
});
formatter.result({
  "duration": 1502514242,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan class\u003d\"ng-value-label ng-star-inserted\"\u003e...\u003c/span\u003e is not clickable at point (1210, 347). Other element would receive the click: \u003cinput role\u003d\"combobox\" type\u003d\"text\" autocomplete\u003d\"a284eb2c4022\" id\u003d\"\" aria-expanded\u003d\"false\"\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56433}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e8a59bb6d5d1a62e65f14e196cc4bdc6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_reassign_and_click_on_drop_down_and_check_list(DV_2882_Manual_Assessed_LandingScreen.java:172)\r\n\tat ✽.And User click on reassign and click on drop down and check list \"drp_AssestChangedOfficerRitesh\"(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting_drop_down_and_click_on_Assess()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_will_navigate_to_user_manual_assessement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 664794534,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on FilterBy \"\u003cFilter\u003e\" dropdown and click on Status",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Status and click on \"\u003cFilterStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on search button and check status \"\u003ccheck\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on manage status \"\u003cmanageStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on drop down officer \"\u003cselectOfficer\u003e\" and click on cancel",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User again click on drop down officer \"\u003cOfficerTwo\u003e\" and click on right tick",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User check message for officer changed \"\u003cvalidationMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Filter",
        "FilterStatus",
        "check",
        "manageStatus",
        "selectOfficer",
        "OfficerTwo",
        "validationMessage"
      ],
      "line": 42,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;1"
    },
    {
      "cells": [
        "Manual_Assessment_03_1",
        "Validating officer changed in pending status",
        "txt_PeriodApr",
        "txt_AssestFilterStatus",
        "txt_Pending",
        "Pending",
        "txt_AssestManageReassign",
        "drp_AssestChangedOfficerRitesh",
        "drp_AssestChangedOfficerRitesh",
        "Assessment officer reassigned successfully"
      ],
      "line": 43,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;2"
    },
    {
      "cells": [
        "Manual_Assessment_03_2",
        "Validating officer changed in In Progress status",
        "txt_PeriodJan",
        "txt_AssestFilterStatus",
        "txt_InProgress",
        "In Progress",
        "txt_AssestManageReassign",
        "drp_AssestChangedOfficerRitesh",
        "drp_AssestChangedOfficerRitesh",
        "Assessment officer reassigned successfully"
      ],
      "line": 44,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513725100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Assessment Page \"Manual_Assessment_03_1\" \"Validating officer changed in pending status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on drop down \"txt_PeriodApr\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on FilterBy \"txt_AssestFilterStatus\" dropdown and click on Status",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Status and click on \"txt_Pending\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on search button and check status \"Pending\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on manage status \"txt_AssestManageReassign\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on cancel",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User again click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on right tick",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User check message for officer changed \"Assessment officer reassigned successfully\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_03_1",
      "offset": 28
    },
    {
      "val": "Validating officer changed in pending status",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 247648,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1644881504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodApr",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1754503337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestFilterStatus",
      "offset": 24
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_FilterBy_dropdown_and_click_on_Status(String)"
});
formatter.result({
  "duration": 2429886045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Pending",
      "offset": 35
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(String)"
});
formatter.result({
  "duration": 61677225108,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (//*[@role\u003d\"listbox\"])[5]//div (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(DV_2882_Manual_Assessed_LandingScreen.java:237)\r\n\tat ✽.And User click on Status and click on \"txt_Pending\"(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:32)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (//*[@role\u003d\"listbox\"])[5]//div\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(DV_2882_Manual_Assessed_LandingScreen.java:237)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 46
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_search_button_and_check_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestManageReassign",
      "offset": 29
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 33
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down_officer_and_click_on_cancel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 39
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_again_click_on_drop_down_officer_and_click_on_right_tick(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Assessment officer reassigned successfully",
      "offset": 40
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_check_message_for_officer_changed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 637358297,
  "status": "passed"
});
formatter.before({
  "duration": 5513896659,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Assessment Page \"Manual_Assessment_03_2\" \"Validating officer changed in In Progress status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on FilterBy \"txt_AssestFilterStatus\" dropdown and click on Status",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Status and click on \"txt_InProgress\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on search button and check status \"In Progress\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on manage status \"txt_AssestManageReassign\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on cancel",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User again click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on right tick",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User check message for officer changed \"Assessment officer reassigned successfully\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_03_2",
      "offset": 28
    },
    {
      "val": "Validating officer changed in In Progress status",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 192932,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1603329031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1747050805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestFilterStatus",
      "offset": 24
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_FilterBy_dropdown_and_click_on_Status(String)"
});
formatter.result({
  "duration": 2390790392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_InProgress",
      "offset": 35
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(String)"
});
formatter.result({
  "duration": 60788226819,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (//*[@role\u003d\"listbox\"])[5]//div (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(DV_2882_Manual_Assessed_LandingScreen.java:237)\r\n\tat ✽.And User click on Status and click on \"txt_InProgress\"(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:32)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (//*[@role\u003d\"listbox\"])[5]//div\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(DV_2882_Manual_Assessed_LandingScreen.java:237)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Progress",
      "offset": 46
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_search_button_and_check_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestManageReassign",
      "offset": 29
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 33
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down_officer_and_click_on_cancel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 39
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_again_click_on_drop_down_officer_and_click_on_right_tick(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Assessment officer reassigned successfully",
      "offset": 40
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_check_message_for_officer_changed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 650972682,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Validate whether User can select future month and year from the period drop down list.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-select-future-month-and-year-from-the-period-drop-down-list.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User click on drop down Period and select \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User click on year and select \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User see message no record found",
  "keyword": "And "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-select-future-month-and-year-from-the-period-drop-down-list.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "year"
      ],
      "line": 55,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-select-future-month-and-year-from-the-period-drop-down-list.;;1"
    },
    {
      "cells": [
        "Manual_Assessment_05",
        "validate when user select month which are not file in filing",
        "txt_PeriodApr",
        "txt_AssYear17"
      ],
      "line": 56,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-select-future-month-and-year-from-the-period-drop-down-list.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518333809,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Validate whether User can select future month and year from the period drop down list.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-select-future-month-and-year-from-the-period-drop-down-list.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Assessment Page \"Manual_Assessment_05\" \"validate when user select month which are not file in filing\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User click on drop down Period and select \"txt_PeriodApr\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User click on year and select \"txt_AssYear17\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User see message no record found",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_05",
      "offset": 28
    },
    {
      "val": "validate when user select month which are not file in filing",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 209746,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 6611069963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodApr",
      "offset": 43
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down_Period_and_select(String)"
});
formatter.result({
  "duration": 11779089481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssYear17",
      "offset": 31
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_year_and_select(String)"
});
formatter.result({
  "duration": 11716995026,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_see_message_no_record_found()"
});
formatter.result({
  "duration": 1859278788,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027No records found\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56433}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e8a59bb6d5d1a62e65f14e196cc4bdc6\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027No records found\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_see_message_no_record_found(DV_2882_Manual_Assessed_LandingScreen.java:383)\r\n\tat ✽.And User see message no record found(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:52)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 693846610,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Validate whether User is able to filter data using filter by and type here option.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-data-using-filter-by-and-type-here-option.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@TC_06"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#And User click on year and select \"\u003cyear\u003e\""
    }
  ],
  "line": 64,
  "name": "User click on FilterBy \"\u003cFilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User enter data for NITVA \"\u003cdata\u003e\" and click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User check NITVA number \"\u003cNITVA\u003e\" no",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#And User refresh page"
    },
    {
      "line": 68,
      "value": "#And User again click on filter \"\u003cAgainFilter\u003e\""
    }
  ],
  "line": 69,
  "name": "User again enter invalid data \"\u003cniftvaData\u003e\" and check message no record found",
  "keyword": "And "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-data-using-filter-by-and-type-here-option.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "year",
        "Filter",
        "data",
        "NITVA",
        "AgainFilter",
        "niftvaData",
        "again",
        "type",
        "BType",
        "businessType"
      ],
      "line": 72,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-data-using-filter-by-and-type-here-option.;;1"
    },
    {
      "cells": [
        "Manual_Assessment_06",
        "Validating user is able filter by nitva no and business type",
        "txt_PeriodJan",
        "txt_AssYear17",
        "txt_AsestFilterNitva",
        "20181211071940797",
        "20181211071940797",
        "txt_AsestFilterNitva",
        "0000526000",
        "drp_FilterBy",
        "txt_AssestFilterBusinessType",
        "txt_BusinessTypeTrading",
        "Trading"
      ],
      "line": 73,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-data-using-filter-by-and-type-here-option.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512763290,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Validate whether User is able to filter data using filter by and type here option.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-data-using-filter-by-and-type-here-option.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@TC_06"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "User is on Assessment Page \"Manual_Assessment_06\" \"Validating user is able filter by nitva no and business type\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#And User click on year and select \"\u003cyear\u003e\""
    }
  ],
  "line": 64,
  "name": "User click on FilterBy \"txt_AsestFilterNitva\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User enter data for NITVA \"20181211071940797\" and click on search button",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User check NITVA number \"20181211071940797\" no",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#And User refresh page"
    },
    {
      "line": 68,
      "value": "#And User again click on filter \"\u003cAgainFilter\u003e\""
    }
  ],
  "line": 69,
  "name": "User again enter invalid data \"0000526000\" and check message no record found",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_06",
      "offset": 28
    },
    {
      "val": "Validating user is able filter by nitva no and business type",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 235109,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1599059164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1711818351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AsestFilterNitva",
      "offset": 24
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_FilterBy(String)"
});
formatter.result({
  "duration": 1696568462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181211071940797",
      "offset": 27
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_enter_data_for_NITVA_and_click_on_search_button(String)"
});
formatter.result({
  "duration": 1342864609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181211071940797",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_check_NITVA_number_no(String)"
});
formatter.result({
  "duration": 414020312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0000526000",
      "offset": 31
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_again_enter_invalid_data_and_check_message_no_record_found(String)"
});
formatter.result({
  "duration": 2565482449,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027No records found\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56433}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e8a59bb6d5d1a62e65f14e196cc4bdc6\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027No records found\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_again_enter_invalid_data_and_check_message_no_record_found(DV_2882_Manual_Assessed_LandingScreen.java:434)\r\n\tat ✽.And User again enter invalid data \"0000526000\" and check message no record found(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:69)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 598067147,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Validate whether User is able to filter by Name of Applicant",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-name-of-applicant",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_07_Name_of_Applicant_TAX_Payer"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User selects value from Assessment filter drop down \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User enters data for Assessment in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "#And User check for valid data for TAX Payer \"\u003cValue\u003e\""
    },
    {
      "line": 83,
      "value": "#And User again enter data in type here \"\u003cdata\u003e\" for invalid data"
    }
  ],
  "line": 84,
  "name": "User see message no record found",
  "keyword": "And "
});
formatter.examples({
  "line": 86,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-name-of-applicant;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Filters",
        "Value",
        "data"
      ],
      "line": 87,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-name-of-applicant;;1"
    },
    {
      "cells": [
        "Manual_Assessment_07",
        "validate tyax payer  PeriodJan",
        "txt_PeriodJan",
        "txt_AssestFilterTaxPayer",
        "Automations",
        "Abx"
      ],
      "line": 88,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-name-of-applicant;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513239778,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Validate whether User is able to filter by Name of Applicant",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-name-of-applicant;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_07_Name_of_Applicant_TAX_Payer"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User is on Assessment Page \"Manual_Assessment_07\" \"validate tyax payer  PeriodJan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User selects value from Assessment filter drop down \"txt_AssestFilterTaxPayer\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User enters data for Assessment in type here text box \"Automations\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "#And User check for valid data for TAX Payer \"\u003cValue\u003e\""
    },
    {
      "line": 83,
      "value": "#And User again enter data in type here \"\u003cdata\u003e\" for invalid data"
    }
  ],
  "line": 84,
  "name": "User see message no record found",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_07",
      "offset": 28
    },
    {
      "val": "validate tyax payer  PeriodJan",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 263038,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1566435423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1669296089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestFilterTaxPayer",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_selects_value_from_Assessment_filter_drop_down(String)"
});
formatter.result({
  "duration": 1186588293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automations",
      "offset": 55
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_enters_data_for_Assessment_in_type_here_text_box(String)"
});
formatter.result({
  "duration": 1185815995,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_see_message_no_record_found()"
});
formatter.result({
  "duration": 1850859317,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027No records found\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56433}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e8a59bb6d5d1a62e65f14e196cc4bdc6\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027No records found\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_see_message_no_record_found(DV_2882_Manual_Assessed_LandingScreen.java:383)\r\n\tat ✽.And User see message no record found(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:84)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 587566176,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 91,
  "name": "Validate whether User is able to filter by NITVA",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-nitva",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_07_NITVA"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User selects value from Assessment filter drop down \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User enters data for Assessment in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 97,
      "value": "#And User check for valid data for NITVA \"\u003cValue\u003e\""
    },
    {
      "line": 98,
      "value": "#And User again enter data in type here \"\u003cdata\u003e\" for invalid data"
    }
  ],
  "line": 99,
  "name": "User see message no record found",
  "keyword": "And "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-nitva;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Filters",
        "Value",
        "data"
      ],
      "line": 102,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-nitva;;1"
    },
    {
      "cells": [
        "Manual_Assessment_07_1",
        "validate filter ny nitva",
        "txt_PeriodJan",
        "txt_AsestFilterNitva",
        "20181016011333143",
        "000000000"
      ],
      "line": 103,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-nitva;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511383698,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Validate whether User is able to filter by NITVA",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-nitva;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_07_NITVA"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "User is on Assessment Page \"Manual_Assessment_07_1\" \"validate filter ny nitva\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User selects value from Assessment filter drop down \"txt_AsestFilterNitva\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User enters data for Assessment in type here text box \"20181016011333143\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 97,
      "value": "#And User check for valid data for NITVA \"\u003cValue\u003e\""
    },
    {
      "line": 98,
      "value": "#And User again enter data in type here \"\u003cdata\u003e\" for invalid data"
    }
  ],
  "line": 99,
  "name": "User see message no record found",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_07_1",
      "offset": 28
    },
    {
      "val": "validate filter ny nitva",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 216300,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1613035191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1695471856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AsestFilterNitva",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_selects_value_from_Assessment_filter_drop_down(String)"
});
formatter.result({
  "duration": 1219846117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181016011333143",
      "offset": 55
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_enters_data_for_Assessment_in_type_here_text_box(String)"
});
formatter.result({
  "duration": 1271148350,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_see_message_no_record_found()"
});
formatter.result({
  "duration": 1875498752,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027No records found\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56433}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: e8a59bb6d5d1a62e65f14e196cc4bdc6\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027No records found\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_see_message_no_record_found(DV_2882_Manual_Assessed_LandingScreen.java:383)\r\n\tat ✽.And User see message no record found(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:99)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 599643945,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 105,
      "value": "#@TC_07_Assessment_Officer"
    },
    {
      "line": 106,
      "value": "# Scenario Outline: Validate whether User is able to filter by Assessment Officer"
    },
    {
      "line": 107,
      "value": "#  Given User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 108,
      "value": "# And User click on Assessment Tab"
    },
    {
      "line": 109,
      "value": "#  And User click on drop down \"\u003cPeriod\u003e\""
    },
    {
      "line": 110,
      "value": "#  And User selects value from Assessment filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 111,
      "value": "#  And User enters data for Assessment in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 112,
      "value": "#  #And User check for valid data for Assessment Officer \"\u003cvalidOfficer\u003e\""
    },
    {
      "line": 113,
      "value": "#  #And User again enter data in type here \"\u003cdata\u003e\" for invalid data"
    },
    {
      "line": 114,
      "value": "#  And User see message no record found"
    },
    {
      "line": 115,
      "value": "#   Examples:"
    },
    {
      "line": 116,
      "value": "#     | TestcaseID             | Description                 | Period         | Filters                       | Value  | validOfficer | data   |"
    },
    {
      "line": 117,
      "value": "#     | Manual_Assessment_07_2 | validate assessment officer | txt_PeriodJan | txt_AssestFilterAssestOfficer | Laxman | Laxman       | franky |"
    },
    {
      "line": 118,
      "value": "#  @TC_07_Business_Type"
    },
    {
      "line": 119,
      "value": "#  Scenario Outline: Validate whether User is able to filter by Business Type"
    },
    {
      "line": 120,
      "value": "#    Given User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 121,
      "value": "#    And User click on Assessment Tab"
    },
    {
      "line": 122,
      "value": "#    And User click on drop down \"\u003cPeriod\u003e\""
    },
    {
      "line": 123,
      "value": "#    And User selects value from Assessment filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 124,
      "value": "#    And User click on business type and click on \"\u003cFilterStatus\u003e\""
    },
    {
      "line": 125,
      "value": "#    And User click on search button and check Business Type \"\u003ccheck\u003e\""
    },
    {
      "line": 126,
      "value": "# And User click on year \"\u003cyear\u003e\""
    },
    {
      "line": 127,
      "value": "# And User click on \"\u003cFilterStatus\u003e\""
    },
    {
      "line": 128,
      "value": "# And User see message no record found"
    },
    {
      "line": 129,
      "value": "#    Examples:"
    },
    {
      "line": 130,
      "value": "#      | TestcaseID             | Description                           | Period         | Filters                       | FilterStatus                  | check          | year      |"
    },
    {
      "line": 131,
      "value": "#      | Manual_Assessment_07_3 | validate business type manufacturing  | txt_PeriodJan | txt_AssestFilterBusinessType  | txt_BusinessTypeManufacturing | Manufacturing  | AssYear18 |"
    },
    {
      "line": 132,
      "value": "#      | Manual_Assessment_07_4 | validate business type mining         | txt_PeriodJan | txt_AssestFilterBusinessType2 | txt_BusinessTypeMining        | Mining         | AssYear18 |"
    },
    {
      "line": 133,
      "value": "#      | Manual_Assessment_07_5 | validate business type service sector | txt_PeriodJan | txt_AssestFilterBusinessType2 | txt_BusinessTypeServiceSector | Service Sector | AssYear18 |"
    },
    {
      "line": 134,
      "value": "#      | Manual_Assessment_07_6 | validate business type trading        | txt_PeriodJan | txt_AssestFilterBusinessType2 | txt_BusinessTypeTrading       | Trading        | AssYear18 |"
    },
    {
      "line": 135,
      "value": "#  @TC_07_company_Size"
    },
    {
      "line": 136,
      "value": "#  Scenario Outline: Validate whether User is able to filter by Company Size"
    },
    {
      "line": 137,
      "value": "#Given User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 138,
      "value": "#And User click on Assessment Tab"
    },
    {
      "line": 139,
      "value": "#And User click on drop down \"\u003cPeriod\u003e\""
    },
    {
      "line": 140,
      "value": "#And User selects value from Assessment filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 141,
      "value": "#And User click on company size and click on \"\u003cFilterStatus\u003e\""
    },
    {
      "line": 142,
      "value": "#And User click on search button and check Company Size \"\u003ccheck\u003e\""
    },
    {
      "line": 143,
      "value": "#"
    },
    {
      "line": 144,
      "value": "#And User click on year \"\u003cyear\u003e\""
    },
    {
      "line": 145,
      "value": "#And User click on \"\u003cFilterStatus\u003e\""
    },
    {
      "line": 146,
      "value": "#And User see message no record found"
    },
    {
      "line": 147,
      "value": "#    Examples:"
    },
    {
      "line": 148,
      "value": "#      | TestcaseID              | Description                  | Period         | Filters                      | FilterStatus          | check        | year      |"
    },
    {
      "line": 149,
      "value": "#      | Manual_Assessment_07_7  | validate company size large  | txt_PeriodJan | txt_AssestFilterCompanySize  | txt_CompanySizeLarge  | Large Scale  | AssYear18 |"
    },
    {
      "line": 150,
      "value": "#      | Manual_Assessment_07_8  | validate company size medium | txt_PeriodJan | txt_AssestFilterCompanySize1 | txt_CompanySizeMedium | Medium Scale | AssYear18 |"
    },
    {
      "line": 151,
      "value": "#      | Manual_Assessment_07_9  | validate company size micro  | txt_PeriodJan | txt_AssestFilterCompanySize1 | txt_CompanySizeMicro  | Micro Scale  | AssYear18 |"
    },
    {
      "line": 152,
      "value": "#      | Manual_Assessment_07_10 | validate company size small  | txt_PeriodJan | txt_AssestFilterCompanySize1 | txt_CompanySizeSmall  | Small Scale  | AssYear18 |"
    }
  ],
  "line": 154,
  "name": "Validate whether User is able to filter by Status",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@TC_07_Status"
    }
  ]
});
formatter.step({
  "line": 155,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 156,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User selects value from Assessment filter drop down \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User click Status In Progress \"\u003cStatus1\u003e\" and check \"\u003cInProgress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User click Status Pending \"\u003cStatus2\u003e\" and check \"\u003cPending\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 162,
      "value": "# And User click on year \"\u003cyear\u003e\""
    },
    {
      "line": 163,
      "value": "# And User click Status In Progress \"\u003cStatus1\u003e\" and check for no record found"
    },
    {
      "line": 164,
      "value": "# And User click Status Pending \"\u003cStatus2\u003e\"  and check for no record found"
    },
    {
      "line": 165,
      "value": "#And   User see message no record found"
    }
  ],
  "line": 166,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-status;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Filters",
        "Status1",
        "Status2",
        "Pending",
        "InProgress"
      ],
      "line": 167,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-status;;1"
    },
    {
      "cells": [
        "Manual_Assessment_07_11",
        "validate status",
        "txt_PeriodJan",
        "drp_Status",
        "txt_InProgress",
        "txt_Pending",
        "Pending",
        "In Progress"
      ],
      "line": 168,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5514248895,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "Validate whether User is able to filter by Status",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-filter-by-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 153,
      "name": "@TC_07_Status"
    }
  ]
});
formatter.step({
  "line": 155,
  "name": "User is on Assessment Page \"Manual_Assessment_07_11\" \"validate status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 156,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User selects value from Assessment filter drop down \"drp_Status\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User click Status In Progress \"txt_InProgress\" and check \"In Progress\"",
  "matchedColumns": [
    4,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User click Status Pending \"txt_Pending\" and check \"Pending\"",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_07_11",
      "offset": 28
    },
    {
      "val": "validate status",
      "offset": 54
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 200341,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1580401190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1658696800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Status",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_selects_value_from_Assessment_filter_drop_down(String)"
});
formatter.result({
  "duration": 1174487156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_InProgress",
      "offset": 31
    },
    {
      "val": "In Progress",
      "offset": 58
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_Status_In_Progress_and_check(String,String)"
});
formatter.result({
  "duration": 2816837746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Pending",
      "offset": 27
    },
    {
      "val": "Pending",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_Status_Pending_and_check(String,String)"
});
formatter.result({
  "duration": 2805947776,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 599675293,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 170,
      "value": "#  @TC_08"
    },
    {
      "line": 171,
      "value": "#  Scenario Outline: Validate whether admin is able to filter data using different combination of filter by option and entering different option in type here text box."
    },
    {
      "line": 172,
      "value": "#    Given User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 173,
      "value": "#    And User click on Assessment Tab"
    },
    {
      "line": 174,
      "value": "#    And User click on drop down \"\u003cPeriod\u003e\""
    },
    {
      "line": 175,
      "value": "#    And User click on year \"\u003cyear\u003e\""
    },
    {
      "line": 176,
      "value": "#    And User click on FilterBy \"\u003cFilter\u003e\""
    },
    {
      "line": 177,
      "value": "#    And User enter data \"\u003cdata\u003e\""
    },
    {
      "line": 178,
      "value": "#    And User see message no record found"
    },
    {
      "line": 179,
      "value": "#    Examples:"
    },
    {
      "line": 180,
      "value": "#      | TestcaseID           | Description                    | Period        | year          | Filter               | data         |"
    },
    {
      "line": 181,
      "value": "#      | Manual_Assessment_08 | validate different combination | txt_PeriodJan | txt_AssYear18 | txt_AsestFilterNitva | Medium Scale |"
    }
  ],
  "line": 183,
  "name": "Validate whether User is able to navigate to particular page and filter the data according",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-navigate-to-particular-page-and-filter-the-data-according",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 182,
      "name": "@TC_10"
    }
  ]
});
formatter.step({
  "line": 184,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 185,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click on Assessed List",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User click on Last \"\u003cLast\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 190,
      "value": "#And User select \"\u003cmonth\u003e\""
    }
  ],
  "line": 191,
  "name": "User click on FilterBy \"\u003cFilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User enter data for NITVA \"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User check NITVA number \"\u003cnitvaNO\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 195,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-navigate-to-particular-page-and-filter-the-data-according;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Last",
        "Filter",
        "data",
        "nitvaNO"
      ],
      "line": 196,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-navigate-to-particular-page-and-filter-the-data-according;;1"
    },
    {
      "cells": [
        "Manual_Assessment_10",
        "validate navigation and filter functionality",
        "txt_PeriodJan",
        "lbl_AssLast",
        "txt_AsestFilterNitva",
        "20181211062210697",
        "20181211062210697"
      ],
      "line": 197,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-navigate-to-particular-page-and-filter-the-data-according;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511549557,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "Validate whether User is able to navigate to particular page and filter the data according",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-is-able-to-navigate-to-particular-page-and-filter-the-data-according;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 182,
      "name": "@TC_10"
    }
  ]
});
formatter.step({
  "line": 184,
  "name": "User is on Assessment Page \"Manual_Assessment_10\" \"validate navigation and filter functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 185,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click on Assessed List",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User click on Last \"lbl_AssLast\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 190,
      "value": "#And User select \"\u003cmonth\u003e\""
    }
  ],
  "line": 191,
  "name": "User click on FilterBy \"txt_AsestFilterNitva\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User enter data for NITVA \"20181211062210697\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User check NITVA number \"20181211062210697\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_10",
      "offset": 28
    },
    {
      "val": "validate navigation and filter functionality",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 250213,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1578331091,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Assessed_List.user_click_on_Assessed_List()"
});
formatter.result({
  "duration": 1114507543,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1598476094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 1696961165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_AssLast",
      "offset": 20
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Last(String)"
});
formatter.result({
  "duration": 527968437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AsestFilterNitva",
      "offset": 24
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_FilterBy(String)"
});
formatter.result({
  "duration": 1692898480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181211062210697",
      "offset": 27
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_enter_data_for_NITVA(String)"
});
formatter.result({
  "duration": 700535964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181211062210697",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_check_NITVA_number(String)"
});
formatter.result({
  "duration": 1149801838,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 587025852,
  "status": "passed"
});
});