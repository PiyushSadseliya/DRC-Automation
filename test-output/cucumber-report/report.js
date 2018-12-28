$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/03_VATRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "VAT Registration",
  "description": "",
  "id": "vat-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User submits the form for vat approval",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter Data: \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And User Click on SignIn for new user"
    }
  ],
  "line": 8,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Taxpayer Category \"\u003cCategory\u003e\" , SubCategory \"\u003cSubCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enters NIF number \"\u003cNif\u003e\"  ,Full Name Of Business \"\u003cFName Business\u003e\" , Number of COI \"\u003cCOI\u003e\" , Last Year Revenue \"\u003cRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enters NIF Registration Date \"\u003cNif Registration Date\u003e\" , Date of Incorporation \"\u003cIncorporation Date\u003e\" , Type Of Business \"\u003cBusiness Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enters Business Start Date \"\u003cStart Date\u003e\" , Company Size \"\u003cCompany Size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters Address Details \"\u003cAddressLine1\u003e\" , \"\u003cAddressLine2\u003e\" , \"\u003cProvince\u003e\" ,\"\u003cCity\u003e\" ,\"\u003cZipCode\u003e\",\"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business details \"\u003cBName\u003e\",\"\u003cBAddressLine1\u003e\" , \"\u003cBAddressLine2\u003e\" , \"\u003cBProvince\u003e\" ,\"\u003cBCity\u003e\" ,\"\u003cBZipCode\u003e\",\"\u003cBEmail\u003e\",\"\u003cBMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Authorization signature \"\u003cOption\u003e\" with Job Title \"\u003cJob Title\u003e\" , Full Name \"\u003cFName\u003e\" Email \"\u003cAEmail\u003e\" , Mobile Number \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enters Bank Details with Account Number \"\u003cAccount Number\u003e\" , Account Holder Name \"\u003cAccount Holder Name\u003e\" ,Bank Name \"\u003cBank Name\u003e\" ,Branch \"\u003cBranch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Address Proof of Registered Place of Business for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Bank Account Proof for \"\u003cA2Document Description\u003e\" , \"\u003cA2Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Certificate of Incorporation for \"\u003cA3Document Description\u003e\" , \"\u003cA3Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Law or Degree of Establishment for \"\u003cA4Document Description\u003e\" , \"\u003cA4Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"\u003cA5Document Description\u003e\" , \"\u003cA5Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Proof of Last Year Revenue for \"\u003cA6Document Description\u003e\" , \"\u003cA6Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval;",
  "rows": [
    {
      "cells": [
        "TestCase_Id",
        "Description",
        "email",
        "password",
        "Category",
        "SubCategory",
        "Nif",
        "Nif Registration Date",
        "FName Business",
        "COI",
        "Incorporation Date",
        "Business Type",
        "Start Date",
        "Company Size",
        "Revenue",
        "AddressLine1",
        "AddressLine2",
        "Province",
        "City",
        "ZipCode",
        "MobileNumber",
        "BName",
        "BAddressLine1",
        "BAddressLine2",
        "BProvince",
        "BCity",
        "BZipCode",
        "BEmail",
        "BMobileNumber",
        "Option",
        "Job Title",
        "FName",
        "AEmail",
        "Mobile",
        "Account Number",
        "Account Holder Name",
        "Bank Name",
        "Branch",
        "A1Document Description",
        "A1Status",
        "A2Document Description",
        "A2Status",
        "A3Document Description",
        "A3Status",
        "A4Document Description",
        "A4Status",
        "A5Document Description",
        "A5Status",
        "A6Document Description",
        "A6Status",
        "Filter",
        "Manage",
        "DeOption",
        "SDomestic1",
        "SExport1",
        "SAdjustment1",
        "SDomestic2",
        "SExport2",
        "SAdjustment2",
        "PDomestic1",
        "PImport1",
        "PAdjustment1",
        "PDomestic2",
        "PImport2",
        "PAdjustment2",
        "Efile",
        "Authorized Signatory"
      ],
      "line": 34,
      "id": "vat-registration;user-submits-the-form-for-vat-approval;;1"
    },
    {
      "comments": [
        {
          "line": 35,
          "value": "#| TC_End2End_01 | Registartion Process | approvedduser@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100581 | 2018-08-22            | Approvedd User | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440017 | Approvedd User      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\\\src\\\\test\\\\resources\\\\Scenario.xlsx | bindi                |"
        },
        {
          "line": 36,
          "value": "#| TC_End2End_02 | Registartion Process | onholdedduser@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100582 | 2018-08-22            | OnHoldedd User | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440027 | OnHoldedd User      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\\\src\\\\test\\\\resources\\\\Scenario.xlsx | bindi                |"
        },
        {
          "line": 37,
          "value": "#| TC_End2End_03 | Registartion Process | rejectedduser@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100583 | 2018-08-22            | Rejectedd User | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440037 | Rejectedd User      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\\\src\\\\test\\\\resources\\\\Scenario.xlsx | bindi                |"
        }
      ],
      "cells": [
        "TC_End2End_03",
        "Registartion Process",
        "arunkumar@mailinator.com",
        "Test@123",
        "Legal Entity",
        "Government Entity",
        "121210ABCDFE00100583",
        "2018-08-22",
        "Arun Patil22",
        "ABC09ABC09AGC09",
        "2018-08-25",
        "Mining",
        "2018-08-22",
        "Large Scale",
        "75000000",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "1234567890",
        "Business 1",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "abc@mailinator.com",
        "7896541023",
        "Yes",
        "Business Analysit",
        "John",
        "john@mailinator.com",
        "7412508963",
        "00112233440037",
        "Arun Patil22",
        "Advans Bank",
        "Branch4",
        "doc_desc23",
        "capture.png",
        "doc_desc25",
        "capture.png",
        "doc_desc22",
        "capture.png",
        "doc_desc21",
        "capture.png",
        "doc_desc27",
        "capture.png",
        "doc_desc26",
        "capture.png",
        "Name of Business/Applicant",
        "Review",
        "Approve",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "\\src\\test\\resources\\Scenario.xlsx",
        "bindi"
      ],
      "line": 38,
      "id": "vat-registration;user-submits-the-form-for-vat-approval;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10292616832,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "#| TC_End2End_01 | Registartion Process | approvedduser@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100581 | 2018-08-22            | Approvedd User | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440017 | Approvedd User      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\\\src\\\\test\\\\resources\\\\Scenario.xlsx | bindi                |"
    },
    {
      "line": 36,
      "value": "#| TC_End2End_02 | Registartion Process | onholdedduser@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100582 | 2018-08-22            | OnHoldedd User | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440027 | OnHoldedd User      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\\\src\\\\test\\\\resources\\\\Scenario.xlsx | bindi                |"
    },
    {
      "line": 37,
      "value": "#| TC_End2End_03 | Registartion Process | rejectedduser@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100583 | 2018-08-22            | Rejectedd User | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440037 | Rejectedd User      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\\\src\\\\test\\\\resources\\\\Scenario.xlsx | bindi                |"
    }
  ],
  "line": 38,
  "name": "User submits the form for vat approval",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter Data: \"arunkumar@mailinator.com\" \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And User Click on SignIn for new user"
    }
  ],
  "line": 8,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enters NIF number \"121210ABCDFE00100583\"  ,Full Name Of Business \"Arun Patil22\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"75000000\"",
  "matchedColumns": [
    6,
    8,
    9,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enters NIF Registration Date \"2018-08-22\" , Date of Incorporation \"2018-08-25\" , Type Of Business \"Mining\"",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enters Business Start Date \"2018-08-22\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters Address Details \"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"1234567890\"",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business details \"Business 1\",\"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"abc@mailinator.com\",\"7896541023\"",
  "matchedColumns": [
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analysit\" , Full Name \"John\" Email \"john@mailinator.com\" , Mobile Number \"7412508963\"",
  "matchedColumns": [
    32,
    33,
    29,
    30,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enters Bank Details with Account Number \"00112233440037\" , Account Holder Name \"Arun Patil22\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    34,
    35,
    36,
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc23\" , \"capture.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Bank Account Proof for \"doc_desc25\" , \"capture.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Certificate of Incorporation for \"doc_desc22\" , \"capture.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Law or Degree of Establishment for \"doc_desc21\" , \"capture.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc27\" , \"capture.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Proof of Last Year Revenue for \"doc_desc26\" , \"capture.png\"",
  "matchedColumns": [
    48,
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 1125683279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arunkumar@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 45
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 15861125575,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 5187575870,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 5365316905,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 6332486295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 27
    },
    {
      "val": "Government Entity",
      "offset": 56
    }
  ],
  "location": "VatRegistration.selects_Taxpayer_Category_SubCategory(String,String)"
});
formatter.result({
  "duration": 2795913674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121210ABCDFE00100583",
      "offset": 19
    },
    {
      "val": "Arun Patil22",
      "offset": 66
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 97
    },
    {
      "val": "75000000",
      "offset": 135
    }
  ],
  "location": "VatRegistration.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 8179314035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 30
    },
    {
      "val": "2018-08-25",
      "offset": 67
    },
    {
      "val": "Mining",
      "offset": 99
    }
  ],
  "location": "VatRegistration.enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String,String,String)"
});
formatter.result({
  "duration": 14057413355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 28
    },
    {
      "val": "Large Scale",
      "offset": 56
    }
  ],
  "location": "VatRegistration.enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String,String)"
});
formatter.result({
  "duration": 5165604470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharamdas Chamber",
      "offset": 24
    },
    {
      "val": "Near Axis Bank",
      "offset": 46
    },
    {
      "val": "Bas-Uele",
      "offset": 65
    },
    {
      "val": "Aketi",
      "offset": 77
    },
    {
      "val": "444604",
      "offset": 86
    },
    {
      "val": "1234567890",
      "offset": 95
    }
  ],
  "location": "VatRegistration.enters_Address_Details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8920660555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business 1",
      "offset": 25
    },
    {
      "val": "Dharamdas Chamber",
      "offset": 38
    },
    {
      "val": "Near Axis Bank",
      "offset": 60
    },
    {
      "val": "Bas-Uele",
      "offset": 79
    },
    {
      "val": "Aketi",
      "offset": 91
    },
    {
      "val": "444604",
      "offset": 100
    },
    {
      "val": "abc@mailinator.com",
      "offset": 109
    },
    {
      "val": "7896541023",
      "offset": 130
    }
  ],
  "location": "VatRegistration.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8785564198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 32
    },
    {
      "val": "Business Analysit",
      "offset": 53
    },
    {
      "val": "John",
      "offset": 85
    },
    {
      "val": "john@mailinator.com",
      "offset": 98
    },
    {
      "val": "7412508963",
      "offset": 136
    }
  ],
  "location": "VatRegistration.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 5437364897,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 60790,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 179355191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440037",
      "offset": 41
    },
    {
      "val": "Arun Patil22",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 106
    },
    {
      "val": "Branch4",
      "offset": 128
    }
  ],
  "location": "VatRegistration.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 4167559582,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 181536472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc23",
      "offset": 58
    },
    {
      "val": "capture.png",
      "offset": 73
    }
  ],
  "location": "VatRegistration.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 8980554612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc25",
      "offset": 31
    },
    {
      "val": "capture.png",
      "offset": 46
    }
  ],
  "location": "VatRegistration.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 6475916605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc22",
      "offset": 41
    },
    {
      "val": "capture.png",
      "offset": 56
    }
  ],
  "location": "VatRegistration.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 6509109314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc21",
      "offset": 43
    },
    {
      "val": "capture.png",
      "offset": 58
    }
  ],
  "location": "VatRegistration.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 6923379133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc27",
      "offset": 98
    },
    {
      "val": "capture.png",
      "offset": 113
    }
  ],
  "location": "VatRegistration.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 6599135416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc26",
      "offset": 39
    },
    {
      "val": "capture.png",
      "offset": 54
    }
  ],
  "location": "VatRegistration.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 6576693552,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 2338668796,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 16575882131,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 13472314111,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 6403648861,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1357275576,
  "status": "passed"
});
});