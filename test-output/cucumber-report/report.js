$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Manual Assessement Landing Screen",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress. - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on FilterBy \"\u003cFilter\u003e\" dropdown and click on Status",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Status and click on \"\u003cFilterStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on search button and check status \"\u003ccheck\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage status \"\u003cmanageStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on drop down officer \"\u003cselectOfficer\u003e\" and click on cancel",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User again click on drop down officer \"\u003cOfficerTwo\u003e\" and click on right tick",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User check message for officer changed \"\u003cvalidationMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal;",
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
      "line": 44,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal;;1"
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
      "line": 45,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal;;2"
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
      "line": 46,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22436401845,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress. - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Assessment Page \"Manual_Assessment_03_1\" \"Validating officer changed in pending status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on drop down \"txt_PeriodApr\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on FilterBy \"txt_AssestFilterStatus\" dropdown and click on Status",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Status and click on \"txt_Pending\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on search button and check status \"Pending\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage status \"txt_AssestManageReassign\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on cancel",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User again click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on right tick",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
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
  "duration": 111624108,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 135871410,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1604318199,
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
  "duration": 1828421358,
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
  "duration": 2605629966,
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
  "duration": 60891189507,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (//*[@role\u003d\"listbox\"])[5]//div (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(DV_2882_Manual_Assessed_LandingScreen.java:237)\r\n\tat ✽.And User click on Status and click on \"txt_Pending\"(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:34)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (//*[@role\u003d\"listbox\"])[5]//div\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:101)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(DV_2882_Manual_Assessed_LandingScreen.java:237)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 671656870,
  "status": "passed"
});
formatter.before({
  "duration": 24847242911,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress. - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.---internal-portal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Assessment Page \"Manual_Assessment_03_2\" \"Validating officer changed in In Progress status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on FilterBy \"txt_AssestFilterStatus\" dropdown and click on Status",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Status and click on \"txt_InProgress\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on search button and check status \"In Progress\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage status \"txt_AssestManageReassign\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on cancel",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User again click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on right tick",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
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
  "duration": 284411,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 23343628,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51069}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: d4cee81f870f016e253481de0b4fc6e4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts.implicitlyWait(RemoteWebDriver.java:779)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:100)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:26)\r\n\tat ✽.And User click on Dashboard(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
formatter.after({
  "duration": 2078934,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51069}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: d4cee81f870f016e253481de0b4fc6e4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:98)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:139)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});