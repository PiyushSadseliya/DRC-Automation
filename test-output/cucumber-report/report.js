$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Manual Assessement Landing Screen",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen",
  "keyword": "Feature"
});
formatter.before({
  "duration": 38029234912,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#@TC_01 UI Part"
    }
  ],
  "line": 5,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment-internal-portal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Assessment Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on windows icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter username and password and click on login and see dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page()"
});
formatter.result({
  "duration": 685977761,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_windoews_icon()"
});
formatter.result({
  "duration": 63588755356,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@title\u003d\"Windows Authentication\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:96)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_windoews_icon(DV_2882_Manual_Assessed_LandingScreen.java:35)\r\n\tat ✽.And User click on windows icon(features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //a[@title\u003d\"Windows Authentication\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LP17\u0027, ip: \u0027172.16.2.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:96)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_windoews_icon(DV_2882_Manual_Assessed_LandingScreen.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_enter_username_and_password_and_click_on_login_and_see_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 656076042,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User see manual assessment and assessament list tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on manual assessment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "# And User click on month \"\u003cmonth\u003e\" and check"
    }
  ],
  "line": 18,
  "name": "User click on year \"\u003cYear\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on FilterBy \"\u003cFilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User type \"\u003cData\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on search button and check data \"\u003cData\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on manage setting drop down and check drop down list for Reassign and Assess",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on reassign and click on drop down and check list \"\u003cDropdownOfficer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on FilterBy \"\u003cFilterOfficer\u003e\" and type \"\u003cofficerdata\u003e\" and click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on manage setting drop down and click on Assess",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User will navigate to user manual assessement page",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment;",
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
      "line": 29,
      "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment;;1"
    },
    {
      "cells": [
        "Manual_Assessment_02",
        "validatingf all clickable compoment",
        "txt_PeriodJan",
        "txt_AssYear18",
        "txt_AsestFilterNitva",
        "20181022121408836",
        "drp_AssestChangedOfficerRitesh",
        "txt_AssestFilterAssestOfficer",
        "Laxman"
      ],
      "line": 30,
      "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515903495,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Assessment Page \"Manual_Assessment_02\" \"validatingf all clickable compoment\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User see manual assessment and assessament list tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on manual assessment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "# And User click on month \"\u003cmonth\u003e\" and check"
    }
  ],
  "line": 18,
  "name": "User click on year \"txt_AssYear18\" and check",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on FilterBy \"txt_AsestFilterNitva\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User type \"20181022121408836\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on search button and check data \"20181022121408836\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on manage setting drop down and check drop down list for Reassign and Assess",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on reassign and click on drop down and check list \"drp_AssestChangedOfficerRitesh\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on FilterBy \"txt_AssestFilterAssestOfficer\" and type \"Laxman\" and click on search button",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on manage setting drop down and click on Assess",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
      "val": "validatingf all clickable compoment",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 3322707,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 1691110588,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_see_manual_assessment_and_assessament_list_tab()"
});
formatter.result({
  "duration": 2268696740,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manual_assessment()"
});
formatter.result({
  "duration": 150783310,
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
  "duration": 1858149109,
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
