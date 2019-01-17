$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/03_01uploadDocuments.feature");
formatter.feature({
  "line": 2,
  "name": "Upload Documents after all process are completed till the Banks details",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Individual 4 docs poa*,a/c*,loa*,lyr"
    }
  ],
  "line": 6,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"\u003cuname\u003e\"\"\u003cpwd\u003e\" and proceeds for VAT Registration \"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"\u003cPOA\u003e\"\"\u003cPOA path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"\u003cA/C Proof\u003e\" \"\u003ca/c path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "LOAuth\"\u003cLOAuth\u003e\" \"\u003cLOAuthpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"\u003cRevenue\u003e\"\"\u003cRevpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "POA",
        "POA path",
        "A/C Proof",
        "a/c path",
        "COI",
        "COIpath",
        "LAWdegree",
        "LAWpath",
        "LOAuth",
        "LOAuthpath",
        "Revenue",
        "Revpath",
        "uname",
        "pwd"
      ],
      "line": 23,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;;1"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Required_doc_01",
        "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1_1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "regressionnine@mailinator.com",
        "Test@123"
      ],
      "line": 24,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8862273509,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"regressionnine@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)\"",
  "matchedColumns": [
    0,
    1,
    14,
    15
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"Capture.png\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "COI \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "LawDegree \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "LOAuth\"doc_desc1_1\" \"Capture.png\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"doc_desc1\"\"Capture.png\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionnine@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 56
    },
    {
      "val": "DRC_ATC_Valid_Required_doc_01",
      "offset": 101
    },
    {
      "val": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)",
      "offset": 133
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 76887533358,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@for\u003d\u0027exampleCheck1\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(UploadDocuments.java:62)\r\n\tat ✽.Given The users has logged in \"regressionnine@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)\"(features/03_01uploadDocuments.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@for\u003d\u0027exampleCheck1\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(UploadDocuments.java:62)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Natural Person",
      "offset": 18
    },
    {
      "val": "Individual",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4843758943798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 39
    },
    {
      "val": "Newman",
      "offset": 52
    },
    {
      "val": "Mining",
      "offset": 61
    },
    {
      "val": "2018-02-12",
      "offset": 70
    },
    {
      "val": "Small Scale",
      "offset": 83
    },
    {
      "val": "8965741235698",
      "offset": 97
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Ituri",
      "offset": 75
    },
    {
      "val": "Bunia",
      "offset": 83
    },
    {
      "val": "4563212",
      "offset": 91
    },
    {
      "val": "9865327452",
      "offset": 101
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "1rivet",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 43
    },
    {
      "val": "Branch4",
      "offset": 57
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "Capture.png",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.coi(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 11
    },
    {
      "val": "Capture.png",
      "offset": 23
    }
  ],
  "location": "UploadDocuments.lawdegree(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "Capture.png",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "Capture.png",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 826171156,
  "status": "passed"
});
});