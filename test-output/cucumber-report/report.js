$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/End2EndTest.feature");
formatter.feature({
  "line": 1,
  "name": "End2End TestSuite",
  "description": "",
  "id": "end2end-testsuite",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "End2End TestSuite to validate all funactionality - tax payer portal",
  "description": "",
  "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality---tax-payer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Establish a connection with data base and execute query to create user.",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "login with created username and password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Selects Taxpayer Category \"\u003cCategory\u003e\" , SubCategory \"\u003cSubCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Enters NIF number \"\u003cNif\u003e\"  ,Full Name Of Business \"\u003cFName Business\u003e\" , Number of COI \"\u003cCOI\u003e\" , Last Year Revenue \"\u003cRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enters NIF Registration Date \"\u003cNif Registration Date\u003e\" , Date of Incorporation \"\u003cIncorporation Date\u003e\" , Type Of Business \"\u003cBusiness Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters Business Start Date \"\u003cStart Date\u003e\" , Company Size \"\u003cCompany Size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enters Address Details \"\u003cAddressLine1\u003e\" , \"\u003cAddressLine2\u003e\" , \"\u003cProvince\u003e\" ,\"\u003cCity\u003e\" ,\"\u003cZipCode\u003e\",\"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters Business details \"\u003cBName\u003e\",\"\u003cBAddressLine1\u003e\" , \"\u003cBAddressLine2\u003e\" , \"\u003cBProvince\u003e\" ,\"\u003cBCity\u003e\" ,\"\u003cBZipCode\u003e\",\"\u003cBEmail\u003e\",\"\u003cBMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "select Authorization signature \"\u003cOption\u003e\" with Job Title \"\u003cJob Title\u003e\" , Full Name \"\u003cFName\u003e\" Email \"\u003cAEmail\u003e\" , Mobile Number \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enters Bank Details with Account Number \"\u003cAccount Number\u003e\" , Account Holder Name \"\u003cAccount Holder Name\u003e\" ,Bank Name \"\u003cBank Name\u003e\" ,Branch \"\u003cBranch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "select Address Proof of Registered Place of Business for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select Bank Account Proof for \"\u003cA2Document Description\u003e\" , \"\u003cA2Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Select Certificate of Incorporation for \"\u003cA3Document Description\u003e\" , \"\u003cA3Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "select Law or Degree of Establishment for \"\u003cA4Document Description\u003e\" , \"\u003cA4Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"\u003cA5Document Description\u003e\" , \"\u003cA5Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "select Proof of Last Year Revenue for \"\u003cA6Document Description\u003e\" , \"\u003cA6Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality---tax-payer-portal;",
  "rows": [
    {
      "cells": [
        "TestCase_Id",
        "Description",
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
      "line": 46,
      "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality---tax-payer-portal;;1"
    },
    {
      "cells": [
        "TC_End2End_01",
        "Registartion Process",
        "Legal Entity",
        "Government Entity",
        "ADFSXXXABVCDFE00100",
        "2018-08-22",
        "Falcon Von",
        "ABC09ABC09AGC09",
        "2018-08-25",
        "Mining",
        "2018-08-25",
        "Large Scale",
        "75000000",
        "Irrigation Colony",
        "Above Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "9898787845",
        "Kone Len",
        "Dharamdas Chamber",
        "Near HDFC Bank",
        "Haut-Lomami",
        "Kabongo",
        "444604",
        "business01@mailinator.com",
        "7896541023",
        "Yes",
        "Business Analyst",
        "Kobvon Ji",
        "von01@mailinator.com",
        "7412508963",
        "00112233440077",
        "Falcon Von",
        "Advans Bank",
        "Branch4",
        "doc_desc23",
        "src\\test\\resources\\test.png",
        "doc_desc25",
        "src\\test\\resources\\test.png",
        "doc_desc22",
        "src\\test\\resources\\test.png",
        "doc_desc21",
        "src\\test\\resources\\test.png",
        "doc_desc27",
        "src\\test\\resources\\test.png",
        "doc_desc26",
        "src\\test\\resources\\test.png",
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
        "signature"
      ],
      "line": 47,
      "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality---tax-payer-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9083230537,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "End2End TestSuite to validate all funactionality - tax payer portal",
  "description": "",
  "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality---tax-payer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Establish a connection with data base and execute query to create user.",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "login with created username and password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Enters NIF number \"ADFSXXXABVCDFE00100\"  ,Full Name Of Business \"Falcon Von\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"75000000\"",
  "matchedColumns": [
    4,
    6,
    7,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enters NIF Registration Date \"2018-08-22\" , Date of Incorporation \"2018-08-25\" , Type Of Business \"Mining\"",
  "matchedColumns": [
    5,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters Business Start Date \"2018-08-25\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enters Address Details \"Irrigation Colony\" , \"Above Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"9898787845\"",
  "matchedColumns": [
    16,
    17,
    18,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters Business details \"Kone Len\",\"Dharamdas Chamber\" , \"Near HDFC Bank\" , \"Haut-Lomami\" ,\"Kabongo\" ,\"444604\",\"business01@mailinator.com\",\"7896541023\"",
  "matchedColumns": [
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analyst\" , Full Name \"Kobvon Ji\" Email \"von01@mailinator.com\" , Mobile Number \"7412508963\"",
  "matchedColumns": [
    27,
    28,
    29,
    30,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enters Bank Details with Account Number \"00112233440077\" , Account Holder Name \"Falcon Von\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    32,
    33,
    34,
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc23\" , \"src\\test\\resources\\test.png\"",
  "matchedColumns": [
    36,
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "select Bank Account Proof for \"doc_desc25\" , \"src\\test\\resources\\test.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Select Certificate of Incorporation for \"doc_desc22\" , \"src\\test\\resources\\test.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "select Law or Degree of Establishment for \"doc_desc21\" , \"src\\test\\resources\\test.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc27\" , \"src\\test\\resources\\test.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "select Proof of Last Year Revenue for \"doc_desc26\" , \"src\\test\\resources\\test.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "End2EndTest.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 161882150,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.establish_a_connection_with_data_base_and_execute_query_to_create_user()"
});
formatter.result({
  "duration": 371303247,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 54999945,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.update_data_in_roles_table()"
});
formatter.result({
  "duration": 49509541,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.login_with_created_username_and_password()"
});
formatter.result({
  "duration": 9820503323,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 10129454747,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 4184784698,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 7305348925,
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
  "location": "End2EndTest.selects_Taxpayer_Category_SubCategory(String,String)"
});
formatter.result({
  "duration": 7635765445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADFSXXXABVCDFE00100",
      "offset": 19
    },
    {
      "val": "Falcon Von",
      "offset": 65
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 94
    },
    {
      "val": "75000000",
      "offset": 132
    }
  ],
  "location": "End2EndTest.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 6481439444,
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
  "location": "End2EndTest.enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String,String,String)"
});
formatter.result({
  "duration": 19762654153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-25",
      "offset": 28
    },
    {
      "val": "Large Scale",
      "offset": 56
    }
  ],
  "location": "End2EndTest.enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String,String)"
});
formatter.result({
  "duration": 7896310242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Irrigation Colony",
      "offset": 24
    },
    {
      "val": "Above Axis Bank",
      "offset": 46
    },
    {
      "val": "Bas-Uele",
      "offset": 66
    },
    {
      "val": "Aketi",
      "offset": 78
    },
    {
      "val": "444604",
      "offset": 87
    },
    {
      "val": "9898787845",
      "offset": 96
    }
  ],
  "location": "End2EndTest.enters_Address_Details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 9695301647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kone Len",
      "offset": 25
    },
    {
      "val": "Dharamdas Chamber",
      "offset": 36
    },
    {
      "val": "Near HDFC Bank",
      "offset": 58
    },
    {
      "val": "Haut-Lomami",
      "offset": 77
    },
    {
      "val": "Kabongo",
      "offset": 92
    },
    {
      "val": "444604",
      "offset": 103
    },
    {
      "val": "business01@mailinator.com",
      "offset": 112
    },
    {
      "val": "7896541023",
      "offset": 140
    }
  ],
  "location": "End2EndTest.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13483258629,
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
      "val": "Kobvon Ji",
      "offset": 84
    },
    {
      "val": "von01@mailinator.com",
      "offset": 102
    },
    {
      "val": "7412508963",
      "offset": 141
    }
  ],
  "location": "End2EndTest.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 8418498595,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 41534,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 1195373199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440077",
      "offset": 41
    },
    {
      "val": "Falcon Von",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 104
    },
    {
      "val": "Branch4",
      "offset": 126
    }
  ],
  "location": "End2EndTest.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 4878620954,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 1154458155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc23",
      "offset": 58
    },
    {
      "val": "src\\test\\resources\\test.png",
      "offset": 73
    }
  ],
  "location": "End2EndTest.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 9619524558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc25",
      "offset": 31
    },
    {
      "val": "src\\test\\resources\\test.png",
      "offset": 46
    }
  ],
  "location": "End2EndTest.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 9545854369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc22",
      "offset": 41
    },
    {
      "val": "src\\test\\resources\\test.png",
      "offset": 56
    }
  ],
  "location": "End2EndTest.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 9518634562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc21",
      "offset": 43
    },
    {
      "val": "src\\test\\resources\\test.png",
      "offset": 58
    }
  ],
  "location": "End2EndTest.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 9533545609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc27",
      "offset": 98
    },
    {
      "val": "src\\test\\resources\\test.png",
      "offset": 113
    }
  ],
  "location": "End2EndTest.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 9510829587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc26",
      "offset": 39
    },
    {
      "val": "src\\test\\resources\\test.png",
      "offset": 54
    }
  ],
  "location": "End2EndTest.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 9529857021,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 1235874415,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 12418057203,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 13082080426,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 31231231681,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan _ngcontent-c1\u003d\"\" class\u003d\"fa fa-power-off\"\u003e\u003c/span\u003e is not clickable at point (1876, 35). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LP101\u0027, ip: \u0027172.16.3.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NIRMAL~1.PAT\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: f640688593bcb5c787825af1c13cfea6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:66)\r\n\tat org.drc.vat.appmanager.HelperBase.logout(HelperBase.java:148)\r\n\tat org.drc.vat.StepDefinitions.End2EndTest.click_on_Logout_on_Dashboard(End2EndTest.java:506)\r\n\tat ✽.And Click on Logout on Dashboard(src/test/resources/features/End2EndTest.feature:43)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 707510726,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "End2End TestSuite to validate all funactionality- internal portal",
  "description": "",
  "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality--internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@SP_04"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User login in Internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "click on Manage Vat Registartion",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "select \"\u003cFilter\u003e\" option and \"\u003cFName Business\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "clicks on manage button and select \"\u003cManage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Redirect to confirmation page and click on \"\u003cDeOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Clicks on Close Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "clicks on logout in internal portal",
  "keyword": "And "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality--internal-portal;",
  "rows": [
    {
      "cells": [
        "TestCase_Id",
        "Description",
        "Filter",
        "FName Business",
        "Manage",
        "DeOption"
      ],
      "line": 60,
      "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality--internal-portal;;1"
    },
    {
      "cells": [
        "TC_Internal_01",
        "Manage VAT Registartion",
        "NIF",
        "ADFSXXXABVCDFE00100",
        "Review",
        "Approve"
      ],
      "line": 61,
      "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality--internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8044537556,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "End2End TestSuite to validate all funactionality- internal portal",
  "description": "",
  "id": "end2end-testsuite;end2end-testsuite-to-validate-all-funactionality--internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@SP_04"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User login in Internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "click on Manage Vat Registartion",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "select \"NIF\" option and \"ADFSXXXABVCDFE00100\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "clicks on manage button and select \"Review\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Redirect to confirmation page and click on \"Approve\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Clicks on Close Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "clicks on logout in internal portal",
  "keyword": "And "
});
formatter.match({
  "location": "End2EndTest.user_login_in_Internal_portal()"
});
formatter.result({
  "duration": 49685062031,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Manage_Vat_Registartion()"
});
formatter.result({
  "duration": 4838714050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NIF",
      "offset": 8
    },
    {
      "val": "ADFSXXXABVCDFE00100",
      "offset": 25
    }
  ],
  "location": "End2EndTest.select_option_and(String,String)"
});
formatter.result({
  "duration": 7922062770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Review",
      "offset": 36
    }
  ],
  "location": "End2EndTest.clicks_on_manage_button_and_select(String)"
});
formatter.result({
  "duration": 9261413610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approve",
      "offset": 44
    }
  ],
  "location": "End2EndTest.redirect_to_confirmation_page_and_click_on(String)"
});
formatter.result({
  "duration": 4679940901,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Close_Button()"
});
formatter.result({
  "duration": 9280012113,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_logout_in_internal_portal()"
});
formatter.result({
  "duration": 14880218121,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 719785126,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Validate Functionality of E-filling - tax payer portal",
  "description": "",
  "id": "end2end-testsuite;validate-functionality-of-e-filling---tax-payer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@SP_11"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "User is on Tax Payer Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "Connect database and execute query and run successfully",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "clicks on Vat E-filling option on left panel",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Enter data in Operation Performed \"\u003cDG\u003e\",\"\u003cDS1\u003e\",\"\u003cDS2\u003e\" , \"\u003cDGI\u003e\",\"\u003cDSI\u003e\", \"\u003cFPP\u003e\" ,\"\u003cExport\u003e\", \"\u003cExempt\u003e\",\"\u003cNon-taxable\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Enter data in Deduction \"\u003cAssetsI\u003e\" ,\"\u003cAssetsL\u003e\", \"\u003cGoodsI\u003e\" ,\"\u003cGoodsL\u003e\",\"\u003cRaw MaterialI\u003e\",\"\u003cRaw MaterialL\u003e\" ,\"\u003cOthersI\u003e\" ,\"\u003cOthersL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Enter data in Adjustment \"\u003cVat Reversal\u003e\" , \"\u003cSupplementry Deduction\u003e\" , \"\u003cVat deducted\u003e\" ,\"\u003cRecovery\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "calculate tax calculations and enter \"\u003cVAT3Party\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Upload Efile schedule \"\u003cEfile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Check for Confirmation and choose authorized signatory \"\u003cAuthorized Signatory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "clicks on submit button on E-filling page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "calculate Tax payable amount",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Click on Proceed Button and click on Ok button on offset successful",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 80,
      "value": "#And cliccks on \"\u003cPayment Option\u003e\" and verify details"
    },
    {
      "line": 81,
      "value": "#And Execute query for payment"
    }
  ],
  "line": 82,
  "name": "",
  "description": "",
  "id": "end2end-testsuite;validate-functionality-of-e-filling---tax-payer-portal;",
  "rows": [
    {
      "cells": [
        "TestCase_Id",
        "Description",
        "DG",
        "DS1",
        "DS2",
        "DGI",
        "DSI",
        "FPP",
        "Export",
        "Exempt",
        "Non-taxable",
        "AssetsI",
        "AssetsL",
        "GoodsI",
        "GoodsL",
        "Raw MaterialI",
        "Raw MaterialL",
        "OthersI",
        "OthersL",
        "Vat Reversal",
        "Supplementry Deduction",
        "Vat deducted",
        "Recovery",
        "VAT3Party",
        "Efile",
        "Authorized Signatory",
        "Payment Option"
      ],
      "line": 83,
      "id": "end2end-testsuite;validate-functionality-of-e-filling---tax-payer-portal;;1"
    },
    {
      "cells": [
        "TC_Efile_01",
        "Enter data in E-filling form",
        "150000",
        "2000",
        "1000",
        "2000",
        "1000",
        "1000",
        "1500",
        "1300",
        "1300",
        "1300",
        "2000",
        "1000",
        "1000",
        "1000",
        "1000",
        "2000",
        "2000",
        "500",
        "500",
        "500",
        "2000",
        "100",
        "\\src\\test\\resources\\Scenario.xlsx",
        "signature",
        ""
      ],
      "line": 84,
      "id": "end2end-testsuite;validate-functionality-of-e-filling---tax-payer-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4008892030,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Validate Functionality of E-filling - tax payer portal",
  "description": "",
  "id": "end2end-testsuite;validate-functionality-of-e-filling---tax-payer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@SP_11"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "User is on Tax Payer Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "Connect database and execute query and run successfully",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "clicks on Vat E-filling option on left panel",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Enter data in Operation Performed \"150000\",\"2000\",\"1000\" , \"2000\",\"1000\", \"1000\" ,\"1500\", \"1300\",\"1300\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Enter data in Deduction \"1300\" ,\"2000\", \"1000\" ,\"1000\",\"1000\",\"1000\" ,\"2000\" ,\"2000\"",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Enter data in Adjustment \"500\" , \"500\" , \"500\" ,\"2000\"",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "calculate tax calculations and enter \"100\"",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Upload Efile schedule \"\\src\\test\\resources\\Scenario.xlsx\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Check for Confirmation and choose authorized signatory \"signature\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "clicks on submit button on E-filling page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "calculate Tax payable amount",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Click on Proceed Button and click on Ok button on offset successful",
  "keyword": "And "
});
formatter.match({
  "location": "End2EndTest.user_is_on_Tax_Payer_Portal()"
});
formatter.result({
  "duration": 10061727304,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[contains(@placeholder,\u0027Enter Email\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LP101\u0027, ip: \u0027172.16.3.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NIRMAL~1.PAT\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: d2f0892f85a5e3300cfbe91770fdf76b\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@placeholder,\u0027Enter Email\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.appmanager.HelperBase.type(HelperBase.java:90)\r\n\tat org.drc.vat.StepDefinitions.End2EndTest.user_is_on_Tax_Payer_Portal(End2EndTest.java:588)\r\n\tat ✽.Given User is on Tax Payer Portal(src/test/resources/features/End2EndTest.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "End2EndTest.connect_database_and_execute_query_and_run_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Vat_E_filling_option_on_left_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "150000",
      "offset": 35
    },
    {
      "val": "2000",
      "offset": 44
    },
    {
      "val": "1000",
      "offset": 51
    },
    {
      "val": "2000",
      "offset": 60
    },
    {
      "val": "1000",
      "offset": 67
    },
    {
      "val": "1000",
      "offset": 75
    },
    {
      "val": "1500",
      "offset": 83
    },
    {
      "val": "1300",
      "offset": 91
    },
    {
      "val": "1300",
      "offset": 98
    }
  ],
  "location": "End2EndTest.enter_data_in_Operation_Performed(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1300",
      "offset": 25
    },
    {
      "val": "2000",
      "offset": 33
    },
    {
      "val": "1000",
      "offset": 41
    },
    {
      "val": "1000",
      "offset": 49
    },
    {
      "val": "1000",
      "offset": 56
    },
    {
      "val": "1000",
      "offset": 63
    },
    {
      "val": "2000",
      "offset": 71
    },
    {
      "val": "2000",
      "offset": 79
    }
  ],
  "location": "End2EndTest.enter_data_in_Deduction(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 34
    },
    {
      "val": "500",
      "offset": 42
    },
    {
      "val": "2000",
      "offset": 49
    }
  ],
  "location": "End2EndTest.enter_data_in_Adjustment(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 38
    }
  ],
  "location": "End2EndTest.calculate_tax_calculations_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\\src\\test\\resources\\Scenario.xlsx",
      "offset": 23
    }
  ],
  "location": "End2EndTest.upload_Efile_schedule(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signature",
      "offset": 56
    }
  ],
  "location": "End2EndTest.check_for_Confirmation_and_choose_authorized_signatory(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.clicks_on_submit_button_on_E_filling_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.calculate_Tax_payable_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.click_on_Proceed_Button_and_click_on_Ok_button_on_offset_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 747391577,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 87,
  "name": "FX management module TestSuite to validate all funcationality - fx taxofficer",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-taxofficer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@SP_7.1"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "click on FX Management tab",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "verify the Base currency on the FX management is Congolese France and its value is one",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "click on update button and pop up appear",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "verify the pop up and see base currency is 1",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "enter currency for \"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "click on save button on pop up on officer",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "click on Historical FX Rates button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "click on Previous button and again navigate to FX management dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "click on logout button fx taxofficer",
  "keyword": "And "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-taxofficer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "data",
        "message"
      ],
      "line": 99,
      "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-taxofficer;;1"
    },
    {
      "cells": [
        "FX_Management_Officer_001",
        "0.047",
        "FX currency rate updated successfully"
      ],
      "line": 100,
      "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-taxofficer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68620079224,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(@alt,\u0027Windows Authentication\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LP101\u0027, ip: \u0027172.16.3.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NIRMAL~1.PAT\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: f640688593bcb5c787825af1c13cfea6\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(@alt,\u0027Windows Authentication\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callinternalportal_TaxOfficer(ApplicationManager.java:202)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:75)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\r\n\tat org.testng.TestRunner.run(TestRunner.java:610)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 100,
  "name": "FX management module TestSuite to validate all funcationality - fx taxofficer",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-taxofficer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@SP_7.1"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "click on FX Management tab",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "verify the Base currency on the FX management is Congolese France and its value is one",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "click on update button and pop up appear",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "verify the pop up and see base currency is 1",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "enter currency for \"0.047\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "click on save button on pop up on officer",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "click on Historical FX Rates button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "click on Previous button and again navigate to FX management dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "click on logout button fx taxofficer",
  "keyword": "And "
});
formatter.match({
  "location": "End2EndTest.click_on_FX_Management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.verify_the_Base_currency_on_the_FX_management_is_Congolese_France_and_its_value_is_one()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.click_on_update_button_and_pop_up_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "End2EndTest.verify_the_pop_up_and_see_base_currency_is(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0.047",
      "offset": 20
    }
  ],
  "location": "End2EndTest.enter_currency_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.click_on_save_button_on_pop_up_on_officer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.click_on_Historical_FX_Rates_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.click_on_Previous_button_and_again_navigate_to_FX_management_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "End2EndTest.click_on_logout_button_fx_taxofficer()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 742239863,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "FX management module TestSuite to validate all funcationality - fx-supervisor",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-supervisor",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@SP_7.2"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "click on FX tab supervisor",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "verify the base_currency of Congolese France and its value is one",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "click on approve button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "click on historical_fx_rates button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "click on prev button and return navigate to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "click on logout button in fx-supervisor",
  "keyword": "And "
});
formatter.examples({
  "line": 111,
  "name": "",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-supervisor;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "approvedata",
        "message"
      ],
      "line": 112,
      "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-supervisor;;1"
    },
    {
      "cells": [
        "FX_Management_Officer_001",
        "14.42",
        "FX currency rate updated successfully"
      ],
      "line": 113,
      "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-supervisor;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8005135100,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "FX management module TestSuite to validate all funcationality - fx-supervisor",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-supervisor;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@SP_7.2"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "click on FX tab supervisor",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "verify the base_currency of Congolese France and its value is one",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "click on approve button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "click on historical_fx_rates button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "click on prev button and return navigate to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "click on logout button in fx-supervisor",
  "keyword": "And "
});
formatter.match({
  "location": "End2EndTest.click_on_FX_tab_supervisor()"
});
formatter.result({
  "duration": 30701091851,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.verify_the_base_currency_of_Congolese_France_and_its_value_is_one()"
});
formatter.result({
  "duration": 110304598,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_approve_button()"
});
formatter.result({
  "duration": 2053682566,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_historical_fx_rates_button()"
});
formatter.result({
  "duration": 2177997303,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_prev_button_and_return_navigate_to_dashboard()"
});
formatter.result({
  "duration": 4094205304,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_logout_button_in_fx_supervisor()"
});
formatter.result({
  "duration": 11586792824,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 663575412,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 116,
  "name": "FX management module TestSuite to validate all funcationality - fx-admin",
  "description": "",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-admin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 115,
      "name": "@SP_7.3"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "admin is on FX Management \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "admin click on FX tab",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "verify the admin base_currency of Congolese France and its value is one",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "click on currency and select \"\u003cSelectOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "click on List of currencies and select currency",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "click on Save button and see message \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "click on admin Update button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "enter admin currency for \"\u003cdata\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "admin click on save button on pop up",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 126,
      "value": "#And click on admin approve button"
    }
  ],
  "line": 127,
  "name": "click on admin historical_fx_rates button",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "click on admin prev button and return navigate to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "click on admin logout button in fx-supervisor",
  "keyword": "And "
});
formatter.examples({
  "line": 131,
  "name": "",
  "description": "Examples:",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-admin;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "name",
        "SelectOption",
        "mess",
        "data"
      ],
      "line": 134,
      "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-admin;;1"
    },
    {
      "cells": [
        "FX_Management_Admin_001",
        "Verify admin fx all  functionality",
        "ketan",
        "txt_AddNewCurrency",
        "New currency added successfully",
        "0.056"
      ],
      "line": 135,
      "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-admin;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8004760540,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "FX management module TestSuite to validate all funcationality - fx-admin",
  "description": "Examples:",
  "id": "end2end-testsuite;fx-management-module-testsuite-to-validate-all-funcationality---fx-admin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 115,
      "name": "@SP_7.3"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "admin is on FX Management \"FX_Management_Admin_001\" \"Verify admin fx all  functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "admin click on FX tab",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "verify the admin base_currency of Congolese France and its value is one",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "click on currency and select \"txt_AddNewCurrency\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "click on List of currencies and select currency",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "click on Save button and see message \"New currency added successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "click on admin Update button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "enter admin currency for \"0.056\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "admin click on save button on pop up",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 126,
      "value": "#And click on admin approve button"
    }
  ],
  "line": 127,
  "name": "click on admin historical_fx_rates button",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "click on admin prev button and return navigate to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "click on admin logout button in fx-supervisor",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FX_Management_Admin_001",
      "offset": 27
    },
    {
      "val": "Verify admin fx all  functionality",
      "offset": 53
    }
  ],
  "location": "End2EndTest.admin_is_on_FX_Management(String,String)"
});
formatter.result({
  "duration": 467445,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.admin_click_on_FX_tab()"
});
formatter.result({
  "duration": 29496889677,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.verify_the_admin_base_currency_of_Congolese_France_and_its_value_is_one()"
});
formatter.result({
  "duration": 129543856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AddNewCurrency",
      "offset": 30
    }
  ],
  "location": "End2EndTest.click_on_currency_and_select(String)"
});
formatter.result({
  "duration": 2214609058,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_List_of_currencies_and_select_currency()"
});
formatter.result({
  "duration": 2387652123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New currency added successfully",
      "offset": 38
    }
  ],
  "location": "End2EndTest.click_on_Save_button_and_see_message(String)"
});
formatter.result({
  "duration": 2140030788,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_admin_Update_button()"
});
formatter.result({
  "duration": 2170296541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.056",
      "offset": 26
    }
  ],
  "location": "End2EndTest.enter_admin_currency_for(String)"
});
formatter.result({
  "duration": 2076966092,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.admin_click_on_save_button_on_pop_up()"
});
formatter.result({
  "duration": 1169523633,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_admin_historical_fx_rates_button()"
});
formatter.result({
  "duration": 2109719348,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_admin_prev_button_and_return_navigate_to_dashboard()"
});
formatter.result({
  "duration": 4177992017,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_admin_logout_button_in_fx_supervisor()"
});
formatter.result({
  "duration": 14473812310,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 595832489,
  "status": "passed"
});
});