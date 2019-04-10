$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/32_0DebtRecord.feature");
formatter.feature({
  "line": 1,
  "name": "Debt Record in 0-3 Months age bracket",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Valid_Registration"
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
  "name": "Establish a connection with data base and execute query to create user\"\u003cusername\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "username"
      ],
      "line": 11,
      "id": "debt-record-in-0-3-months-age-bracket;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;1"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_01",
        "Register with valid data",
        "Regression AprilD"
      ],
      "line": 12,
      "id": "debt-record-in-0-3-months-age-bracket;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 73983355243,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Valid_Registration"
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
  "name": "Establish a connection with data base and execute query to create user\"Regression AprilD\".",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 103978788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regression AprilD",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 1507922268,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 2064072353,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 1292428427,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1847734120,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User submits the form for vat approval temp logout",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;user-submits-the-form-for-vat-approval-temp-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Enter Data: \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Selects Taxpayer Category \"\u003cCategory\u003e\" , SubCategory \"\u003cSubCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enters NIF number \"\u003cNif\u003e\"  ,Full Name Of Business \"\u003cFName Business\u003e\" , Number of COI \"\u003cCOI\u003e\" , Last Year Revenue \"\u003cRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enters NIF Registration Date \"\u003cNif Registration Date\u003e\" , Date of Incorporation \"\u003cIncorporation Date\u003e\" , Type Of Business \"\u003cBusiness Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enters Business Start Date \"\u003cStart Date\u003e\" , Company Size \"\u003cCompany Size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enters Address Details \"\u003cAddressLine1\u003e\" , \"\u003cAddressLine2\u003e\" , \"\u003cProvince\u003e\" ,\"\u003cCity\u003e\" ,\"\u003cZipCode\u003e\",\"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters Business details \"\u003cBName\u003e\",\"\u003cBAddressLine1\u003e\" , \"\u003cBAddressLine2\u003e\" , \"\u003cBProvince\u003e\" ,\"\u003cBCity\u003e\" ,\"\u003cBZipCode\u003e\",\"\u003cBEmail\u003e\",\"\u003cBMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Authorization signature \"\u003cOption\u003e\" with Job Title \"\u003cJob Title\u003e\" , Full Name \"\u003cFName\u003e\" Email \"\u003cAEmail\u003e\" , Mobile Number \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enters Bank Details with Account Number \"\u003cAccount Number\u003e\" , Account Holder Name \"\u003cFName Business\u003e\" ,Bank Name \"\u003cBank Name\u003e\" ,Branch \"\u003cBranch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "select Address Proof of Registered Place of Business for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "select Bank Account Proof for \"\u003cA2Document Description\u003e\" , \"\u003cA2Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select Certificate of Incorporation for \"\u003cA3Document Description\u003e\" , \"\u003cA3Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select Law or Degree of Establishment for \"\u003cA4Document Description\u003e\" , \"\u003cA4Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"\u003cA5Document Description\u003e\" , \"\u003cA5Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "select Proof of Last Year Revenue for \"\u003cA6Document Description\u003e\" , \"\u003cA6Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;user-submits-the-form-for-vat-approval-temp-logout;",
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
      "line": 44,
      "id": "debt-record-in-0-3-months-age-bracket;user-submits-the-form-for-vat-approval-temp-logout;;1"
    },
    {
      "cells": [
        "TC_End2End_01",
        "Registartion Process",
        "RegressionAprilD@mt2015.com",
        "Test@123",
        "Legal Entity",
        "Government Entity",
        "1702211ABCDFE00100487",
        "2018-08-22",
        "Regression AprilD",
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
        "abc@mt2015.com",
        "7896541023",
        "Yes",
        "Business Analyst",
        "John",
        "john@mt2015.com",
        "7412508963",
        "00112233440017",
        "Automation User 21",
        "Advans Bank",
        "Branch4",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
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
      "line": 45,
      "id": "debt-record-in-0-3-months-age-bracket;user-submits-the-form-for-vat-approval-temp-logout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25486925315,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User submits the form for vat approval temp logout",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;user-submits-the-form-for-vat-approval-temp-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Enter Data: \"RegressionAprilD@mt2015.com\" \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enters NIF number \"1702211ABCDFE00100487\"  ,Full Name Of Business \"Regression AprilD\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"75000000\"",
  "matchedColumns": [
    6,
    8,
    9,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enters NIF Registration Date \"2018-08-22\" , Date of Incorporation \"2018-08-25\" , Type Of Business \"Mining\"",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enters Business Start Date \"2018-08-22\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "line": 26,
  "name": "Enters Business details \"Business 1\",\"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"abc@mt2015.com\",\"7896541023\"",
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
  "line": 27,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analyst\" , Full Name \"John\" Email \"john@mt2015.com\" , Mobile Number \"7412508963\"",
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
  "line": 28,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enters Bank Details with Account Number \"00112233440017\" , Account Holder Name \"Regression AprilD\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    34,
    36,
    37,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "select Bank Account Proof for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select Certificate of Incorporation for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select Law or Degree of Establishment for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "select Proof of Last Year Revenue for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    48,
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 160728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegressionAprilD@mt2015.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 48
    }
  ],
  "location": "Login.user_Enter_Data(String,String)"
});
formatter.result({
  "duration": 15031856070,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 5148275607,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 5257400543,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 6311751414,
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
  "duration": 3106463804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1702211ABCDFE00100487",
      "offset": 19
    },
    {
      "val": "Regression AprilD",
      "offset": 67
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 103
    },
    {
      "val": "75000000",
      "offset": 141
    }
  ],
  "location": "VatRegistration.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 6951959984,
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
  "duration": 13809725642,
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
  "duration": 7031385854,
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
  "duration": 9186585877,
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
      "val": "abc@mt2015.com",
      "offset": 109
    },
    {
      "val": "7896541023",
      "offset": 126
    }
  ],
  "location": "VatRegistration.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8885481841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 32
    },
    {
      "val": "Business Analyst",
      "offset": 53
    },
    {
      "val": "John",
      "offset": 84
    },
    {
      "val": "john@mt2015.com",
      "offset": 97
    },
    {
      "val": "7412508963",
      "offset": 131
    }
  ],
  "location": "VatRegistration.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 5623664411,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 37332,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 258794089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440017",
      "offset": 41
    },
    {
      "val": "Regression AprilD",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 111
    },
    {
      "val": "Branch4",
      "offset": 133
    }
  ],
  "location": "VatRegistration.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 7197726554,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 152792807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 58
    },
    {
      "val": "capture.png",
      "offset": 72
    }
  ],
  "location": "VatRegistration.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 9009907288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 31
    },
    {
      "val": "capture.png",
      "offset": 45
    }
  ],
  "location": "VatRegistration.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 6596562928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 41
    },
    {
      "val": "capture.png",
      "offset": 55
    }
  ],
  "location": "VatRegistration.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 7567580014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 43
    },
    {
      "val": "capture.png",
      "offset": 57
    }
  ],
  "location": "VatRegistration.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 6531091044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 98
    },
    {
      "val": "capture.png",
      "offset": 112
    }
  ],
  "location": "VatRegistration.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 6505964179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 39
    },
    {
      "val": "capture.png",
      "offset": 53
    }
  ],
  "location": "VatRegistration.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 6558728288,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 2333942998,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 16544460824,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 10245372158,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 7995941617,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1867874711,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Validating file download, view certificate, download certificate and approval of VAT - internal portal",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;validating-file-download,-view-certificate,-download-certificate-and-approval-of-vat---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user click on manage setting and select Review",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "it Navigate to Tax Payer Details",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user click on Approve and Continue",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;validating-file-download,-view-certificate,-download-certificate-and-approval-of-vat---internal-portal;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value"
      ],
      "line": 57,
      "id": "debt-record-in-0-3-months-age-bracket;validating-file-download,-view-certificate,-download-certificate-and-approval-of-vat---internal-portal;;1"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Creation_Cerificate_01",
        "Validating file view certificate, download certificate and approval of VAT",
        "Applicant Name",
        "Regression AprilD"
      ],
      "line": 58,
      "id": "debt-record-in-0-3-months-age-bracket;validating-file-download,-view-certificate,-download-certificate-and-approval-of-vat---internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27737946039,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Validating file download, view certificate, download certificate and approval of VAT - internal portal",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;validating-file-download,-view-certificate,-download-certificate-and-approval-of-vat---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Creation_Cerificate_01\" \"Validating file view certificate, download certificate and approval of VAT\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user selects value from filter drop down \"Applicant Name\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "enters data in type here text box \"Regression AprilD\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user click on manage setting and select Review",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "it Navigate to Tax Payer Details",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user click on Approve and Continue",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Creation_Cerificate_01",
      "offset": 28
    },
    {
      "val": "Validating file view certificate, download certificate and approval of VAT",
      "offset": 70
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 306922,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 3162496905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applicant Name",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "duration": 3354048252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regression AprilD",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "duration": 5111439248,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_click_on_manage_setting_and_select_Review()"
});
formatter.result({
  "duration": 3336533455,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.it_Navigate_to_Tax_Payer_Details()"
});
formatter.result({
  "duration": 2030635791,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h3[contains(text(),\u0027Tax Payer Details\u0027)]\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51408}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 504a5b1f00c168f21e5e41323a26dd11\n*** Element info: {Using\u003dxpath, value\u003d//h3[contains(text(),\u0027Tax Payer Details\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.appmanager.HelperBase.elementText(HelperBase.java:320)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.it_Navigate_to_Tax_Payer_Details(DV_1377_ManageVatRegistration.java:281)\r\n\tat ✽.Then it Navigate to Tax Payer Details(features/32_0DebtRecord.feature:53)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_1376_AcceptRejectAdditionalClarification.user_click_on_Approve_and_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 907206629,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 61,
  "name": "DRC Tax Portal Login temp logout",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login-temp-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "The User has obtained the NITVA",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "For efiling Records user hits API\"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User Login \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login-temp-logout;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "email",
        "password"
      ],
      "line": 69,
      "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login-temp-logout;;1"
    },
    {
      "cells": [
        "e-file_Login_001",
        "Login into tax payer",
        "RegressionAprilD@mt2015.com",
        "Test@123"
      ],
      "line": 70,
      "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login-temp-logout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12073091647,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "DRC Tax Portal Login temp logout",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login-temp-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "The User has obtained the NITVA",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "For efiling Records user hits API\"RegressionAprilD@mt2015.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User Login \"e-file_Login_001\" \"Login into tax payer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "User Enter email \"RegressionAprilD@mt2015.com\" and  password \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.match({
  "location": "Misc.the_User_has_obtained_the_NITVA()"
});
formatter.result({
  "duration": 171842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegressionAprilD@mt2015.com",
      "offset": 34
    }
  ],
  "location": "Misc.for_efiling_Records_user_hits_API(String)"
});
formatter.result({
  "duration": 48846790,
  "error_message": "com.microsoft.sqlserver.jdbc.SQLServerException: Cannot insert the value NULL into column \u0027VuUserId\u0027, table \u0027DRC-QA.Vat.VfVateFile\u0027; column does not allow nulls. INSERT fails.\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerException.makeFromDatabaseError(SQLServerException.java:232)\r\n\tat com.microsoft.sqlserver.jdbc.TDSTokenHandler.onEOF(tdsparser.java:291)\r\n\tat com.microsoft.sqlserver.jdbc.TDSParser.parse(tdsparser.java:111)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerStatement.getNextResult(SQLServerStatement.java:1667)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerStatement.doExecuteStatement(SQLServerStatement.java:903)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerStatement$StmtExecCmd.doExecute(SQLServerStatement.java:796)\r\n\tat com.microsoft.sqlserver.jdbc.TDSCommand.execute(IOBuffer.java:7535)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerConnection.executeCommand(SQLServerConnection.java:2438)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerStatement.executeCommand(SQLServerStatement.java:208)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerStatement.executeStatement(SQLServerStatement.java:183)\r\n\tat com.microsoft.sqlserver.jdbc.SQLServerStatement.executeUpdate(SQLServerStatement.java:721)\r\n\tat org.drc.vat.StepDefinitions.Misc.for_efiling_Records_user_hits_API(Misc.java:83)\r\n\tat ✽.Then For efiling Records user hits API\"RegressionAprilD@mt2015.com\"(features/32_0DebtRecord.feature:63)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-file_Login_001",
      "offset": 12
    },
    {
      "val": "Login into tax payer",
      "offset": 31
    }
  ],
  "location": "DV_2390_e_filing.user_Login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RegressionAprilD@mt2015.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 62
    }
  ],
  "location": "DV_2390_e_filing.user_Enter_email_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2390_e_filing.user_Click_on_SignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1733762550,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "E-filing in the age bracket of 0-3 Months for debt",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@TC_02_debtMan"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "User with email address\"\u003cemail\u003e\"does efiling in age bracket 0-3 month\"\u003c1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;",
  "rows": [
    {
      "cells": [
        "Description",
        "1",
        "email"
      ],
      "line": 81,
      "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;;1"
    },
    {
      "cells": [
        "E-filing in the age bracket of 0-3 Months",
        "50000",
        "RegressionAprilD@mt2015.com"
      ],
      "line": 82,
      "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6134433617,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "E-filing in the age bracket of 0-3 Months for debt",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@TC_02_debtMan"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"E-filing in the age bracket of 0-3 Months\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "User with email address\"RegressionAprilD@mt2015.com\"does efiling in age bracket 0-3 month\"50000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTestcaseID\u003e",
      "offset": 30
    },
    {
      "val": "E-filing in the age bracket of 0-3 Months",
      "offset": 45
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 341975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegressionAprilD@mt2015.com",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 80
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "50000",
      "offset": 90
    }
  ],
  "location": "DebtManagementLandingScreen.user_with_email_address_does_efiling_in_age_bracket_month(String,int,int,String)"
});
formatter.result({
  "duration": 80083989521,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027/vat-e-filing\u0027] (tried for 80 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:123)\r\n\tat org.drc.vat.StepDefinitions.DebtManagementLandingScreen.user_with_email_address_does_efiling_in_age_bracket_month(DebtManagementLandingScreen.java:102)\r\n\tat ✽.And User with email address\"RegressionAprilD@mt2015.com\"does efiling in age bracket 0-3 month\"50000\"(features/32_0DebtRecord.feature:75)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //a[@href\u003d\u0027/vat-e-filing\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:123)\r\n\tat org.drc.vat.StepDefinitions.DebtManagementLandingScreen.user_with_email_address_does_efiling_in_age_bracket_month(DebtManagementLandingScreen.java:102)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1727958956,
  "status": "passed"
});
});