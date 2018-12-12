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
  "name": "End2End TestSuite to validate all funactionality - Tax Payer Portal",
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
  "duration": 10062401356,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "End2End TestSuite to validate all funactionality - Tax Payer Portal",
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
  "duration": 89899473,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.establish_a_connection_with_data_base_and_execute_query_to_create_user()"
});
formatter.result({
  "duration": 227803126,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 57643832,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.update_data_in_roles_table()"
});
formatter.result({
  "duration": 57031395,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.login_with_created_username_and_password()"
});
formatter.result({
  "duration": 10687876543,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 8153535143,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 4149228828,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 7221352526,
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
  "duration": 7453011891,
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
  "duration": 6467021669,
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
  "duration": 19184092046,
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
  "duration": 7674195261,
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
  "duration": 9578146498,
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
  "duration": 13451322591,
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
  "duration": 8410942157,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 34737,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 1153654459,
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
  "duration": 4715644252,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 1109836522,
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
  "duration": 11477596966,
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
  "duration": 9389773813,
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
  "duration": 9371957639,
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
  "duration": 9350788541,
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
  "duration": 9378949312,
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
  "duration": 9432853956,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 1200674284,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 12289150653,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 4156346236,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 3421556722,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 675134305,
  "status": "passed"
});
});