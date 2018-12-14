$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/03_uploadDocuments.feature");
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
      "line": 170,
      "value": "#  | DRC_ATC_Required_doc_38 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.jpg  | doc_desc16 | capture.jpg  | doc_desc13 | capture.jpg  | doc_desc18 | capture.jpg  | doc_desc19 | capture.jpg  | doc_desc17 | capture.jpg  | approveduser@mailinator.com  | Test@123 |"
    },
    {
      "line": 171,
      "value": "#  | DRC_ATC_Required_doc_39 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.jpeg | doc_desc16 | capture.jpeg | doc_desc13 | capture.jpeg | doc_desc18 | capture.jpeg | doc_desc19 | capture.jpeg | doc_desc17 | capture.jpeg | approveduser@mailinator.com  | Test@123 |"
    },
    {
      "line": 172,
      "value": "#  | DRC_ATC_Required_doc_40 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.pdf  | doc_desc16 | capture.pdf  | doc_desc13 | capture.pdf  | doc_desc18 | capture.pdf  | doc_desc19 | capture.pdf  | doc_desc17 | capture.pdf  | approveduser@mailinator.com  | Test@123 |"
    },
    {
      "line": 173,
      "value": "#  | DRC_ATC_Required_doc_41 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.docx | doc_desc16 | capture.docx | doc_desc13 | capture.doc  | doc_desc18 | capture.docx | doc_desc19 | capture.docx | doc_desc17 | capture.docx | approveduser@mailinator.com  | Test@123 |"
    },
    {
      "line": 174,
      "value": "#  | DRC_ATC_Required_doc_42 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.gif  | doc_desc16 | capture.gif  | doc_desc13 | capture.gif  | doc_desc18 | capture.gif  | doc_desc19 | capture.gif  | doc_desc17 | capture.gif  | approveduser@mailinator.com  | Test@123 |"
    },
    {
      "line": 175,
      "value": "# | DRC_ATC_Required_doc_43 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.xlsx | doc_desc16 | capture.xlsx | doc_desc13 | capture.xlsx | doc_desc18 | capture.xlsx | doc_desc19 | capture.xlsx | doc_desc17 | capture.xlsx | approveduser@mailinator.com  | Test@123 |"
    }
  ],
  "line": 177,
  "name": "Check the Delete Functionality",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;check-the-delete-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 176,
      "name": "@Delete_mtc13_mtc11"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "The users has logged in \"\u003cuname\u003e\"\"\u003cpwd\u003e\" and proceeds for VAT Registration \"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 179,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "The user is on the upload the page with Proofs of Add \"\u003cPOA\u003e\"\"\u003cPOA path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Removes the document",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "Logouts",
  "keyword": "Then "
});
formatter.examples({
  "line": 188,
  "name": "",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;check-the-delete-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "POA",
        "POA path",
        "uname",
        "pwd"
      ],
      "line": 189,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;check-the-delete-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_Required_doc_44",
        "Check the Delete Functionality",
        "doc_desc1_1",
        "Capture.png",
        "RejecteudUser@mailinator.com",
        "Test@123"
      ],
      "line": 190,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;check-the-delete-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9236614564,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "Check the Delete Functionality",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;check-the-delete-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UploadDocuments"
    },
    {
      "line": 176,
      "name": "@Delete_mtc13_mtc11"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "The users has logged in \"RejecteudUser@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Required_doc_44\" \"Check the Delete Functionality\"",
  "matchedColumns": [
    0,
    1,
    4,
    5
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 179,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1_1\"\"Capture.png\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "Removes the document",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "Logouts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "RejecteudUser@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 55
    },
    {
      "val": "DRC_ATC_Required_doc_44",
      "offset": 100
    },
    {
      "val": "Check the Delete Functionality",
      "offset": 126
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24058935845,
  "status": "passed"
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
  "duration": 6763761039,
  "status": "passed"
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
  "duration": 30911266653,
  "status": "passed"
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
  "duration": 14452606270,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2432415726,
  "status": "passed"
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
  "duration": 25849908193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 55
    },
    {
      "val": "Capture.png",
      "offset": 68
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 10937355711,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.removes_the_document()"
});
formatter.result({
  "duration": 8206537497,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.logouts()"
});
formatter.result({
  "duration": 7622714782,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 795141320,
  "status": "passed"
});
});