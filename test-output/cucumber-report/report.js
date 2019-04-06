$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/End2EndTest.feature");
formatter.feature({
  "line": 1,
  "name": "End2End Functional Smoke TestSuite",
  "description": "",
  "id": "end2end-functional-smoke-testsuite",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate functionality of VAT Registration Dashboard - tax payer portal",
  "description": "",
  "id": "end2end-functional-smoke-testsuite;validate-functionality-of-vat-registration-dashboard---tax-payer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03_Vat_Registartion"
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
  "name": "Establish a connection with data base and execute query to create user.",
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
formatter.step({
  "line": 9,
  "name": "login with created username and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Selects Taxpayer Category \"\u003cCategory\u003e\" , SubCategory \"\u003cSubCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enters NIF number \"\u003cNif\u003e\"  ,Full Name Of Business \"\u003cFName Business\u003e\" , Number of COI \"\u003cCOI\u003e\" , Last Year Revenue \"\u003cRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters NIF Registration Date \"\u003cNif Registration Date\u003e\" , Date of Incorporation \"\u003cIncorporation Date\u003e\" , Type Of Business \"\u003cBusiness Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business Start Date \"\u003cStart Date\u003e\" , Company Size \"\u003cCompany Size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enters Address Details \"\u003cAddressLine1\u003e\" , \"\u003cAddressLine2\u003e\" , \"\u003cProvince\u003e\" ,\"\u003cCity\u003e\" ,\"\u003cZipCode\u003e\",\"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enters Business details \"\u003cBName\u003e\",\"\u003cBAddressLine1\u003e\" , \"\u003cBAddressLine2\u003e\" , \"\u003cBProvince\u003e\" ,\"\u003cBCity\u003e\" ,\"\u003cBZipCode\u003e\",\"\u003cBEmail\u003e\",\"\u003cBMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And User click on add place button"
    },
    {
      "line": 20,
      "value": "#And Enters Address Details2 \"\u003c2BAddressLine1\u003e\",\"\u003c2BAddressLine2\u003e\",\"\u003cBProvince2\u003e\",\"\u003cBCity2\u003e\",\"\u003cBZipCode\u003e\",\"\u003cBMobileNumber2\u003e\""
    },
    {
      "line": 21,
      "value": "#And User click on add place button"
    },
    {
      "line": 22,
      "value": "#And Enters Address Details3 \"\u003c3BAddressLine1\u003e\",\"\u003c3BAddressLine2\u003e\",\"\u003cBProvince3\u003e\",\"\u003cBCity3\u003e\",\"\u003cBZipCode\u003e\",\"\u003cBMobileNumber3\u003e\""
    },
    {
      "line": 23,
      "value": "#And User click on add place button"
    },
    {
      "line": 24,
      "value": "# And Enters Address Details4 \"\u003c4BAddressLine1\u003e\",\"\u003c3BAddressLine2\u003e\",\"\u003cBProvince4\u003e\",\"\u003cBCity4\u003e\",\"\u003cBZipCode\u003e\",\"\u003cBMobileNumber4\u003e\""
    }
  ],
  "line": 25,
  "name": "select Authorization signature \"\u003cOption\u003e\" with Job Title \"\u003cJob Title\u003e\" , Full Name \"\u003cFName\u003e\" Email \"\u003cAEmail\u003e\" , Mobile Number \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters Bank Details with Account Number \"\u003cAccount Number\u003e\" , Account Holder Name \"\u003cAccount Holder Name\u003e\" ,Bank Name \"\u003cBank Name\u003e\" ,Branch \"\u003cBranch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#And select  Business address one for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\""
    },
    {
      "line": 31,
      "value": "#And select  Business address two for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\""
    },
    {
      "line": 32,
      "value": "#And select  Business address three for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\""
    }
  ],
  "line": 33,
  "name": "select Address Proof of Registered Place of Business for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "select Bank Account Proof for \"\u003cA2Document Description\u003e\" , \"\u003cA2Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select Certificate of Incorporation for \"\u003cA3Document Description\u003e\" , \"\u003cA3Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "select Law or Degree of Establishment for \"\u003cA4Document Description\u003e\" , \"\u003cA4Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"\u003cA5Document Description\u003e\" , \"\u003cA5Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "select Proof of Last Year Revenue for \"\u003cA6Document Description\u003e\" , \"\u003cA6Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "successfull \"\u003cToastMessage\u003e\"  display on given page",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "end2end-functional-smoke-testsuite;validate-functionality-of-vat-registration-dashboard---tax-payer-portal;",
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
        "BName2",
        "2BAddressLine1",
        "2BAddressLine2",
        "BProvince2",
        "BCity2",
        "BEmail2",
        "BMobileNumber2",
        "BName3",
        "3BAddressLine1",
        "3BAddressLine2",
        "BProvince3",
        "BCity3",
        "BEmail3",
        "BMobileNumber3",
        "BName4",
        "4BAddressLine1",
        "4BAddressLine2",
        "BProvince4",
        "BCity4",
        "BEmail4",
        "BMobileNumber4",
        "ToastMessage"
      ],
      "line": 45,
      "id": "end2end-functional-smoke-testsuite;validate-functionality-of-vat-registration-dashboard---tax-payer-portal;;1"
    },
    {
      "cells": [
        "TC_End2End_01",
        "Registartion Process",
        "Legal Entity",
        "Government Entity",
        "ADFSNKPABV00100",
        "2018-01-11",
        "1Rivet DRC",
        "ABC09ABC09AGC09",
        "2018-01-11",
        "Manufacturing",
        "2018-01-12",
        "Large Scale",
        "900000000",
        "Halar road",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "1234567890",
        "DRCBusiness",
        "Dharamdas Chamber line1",
        "Near Axis Bank line2",
        "Ituri",
        "Aru",
        "444604",
        "frnd@gmail.com",
        "7896541023",
        "Yes",
        "Business Analysit",
        "Gogga",
        "john@gmail.com",
        "7412508963",
        "00112233440077",
        "John Martin",
        "Advans Bank",
        "Branch4",
        "doc_desc1",
        "test.png",
        "doc_desc1",
        "test.png",
        "doc_desc1",
        "test.png",
        "doc_desc1",
        "test.png",
        "doc_desc1",
        "test.png",
        "doc_desc1",
        "test.png",
        "1Rivet DRC1",
        "Halar road line1",
        "Near Axis Bank line1",
        "Haut-Uele",
        "Niangara",
        "frnd1@gmail.com",
        "1234567891",
        "1Rivet DRC2",
        "Halar road line2",
        "Near Axis Bank line2",
        "Haut-Katanga",
        "Dubie",
        "frnd2@gmail.com",
        "1234567892",
        "1Rivet DRC3",
        "Halar road line3",
        "Near Axis Bank line3",
        "Equateur",
        "zongo",
        "frnd3@gmail.com",
        "1234567893",
        ""
      ],
      "line": 46,
      "id": "end2end-functional-smoke-testsuite;validate-functionality-of-vat-registration-dashboard---tax-payer-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11429473229,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate functionality of VAT Registration Dashboard - tax payer portal",
  "description": "",
  "id": "end2end-functional-smoke-testsuite;validate-functionality-of-vat-registration-dashboard---tax-payer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03_Vat_Registartion"
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
  "name": "Establish a connection with data base and execute query to create user.",
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
formatter.step({
  "line": 9,
  "name": "login with created username and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enters NIF number \"ADFSNKPABV00100\"  ,Full Name Of Business \"1Rivet DRC\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"900000000\"",
  "matchedColumns": [
    4,
    6,
    7,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters NIF Registration Date \"2018-01-11\" , Date of Incorporation \"2018-01-11\" , Type Of Business \"Manufacturing\"",
  "matchedColumns": [
    5,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business Start Date \"2018-01-12\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enters Address Details \"Halar road\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"1234567890\"",
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
  "line": 18,
  "name": "Enters Business details \"DRCBusiness\",\"Dharamdas Chamber line1\" , \"Near Axis Bank line2\" , \"Ituri\" ,\"Aru\" ,\"444604\",\"frnd@gmail.com\",\"7896541023\"",
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
  "comments": [
    {
      "line": 19,
      "value": "#And User click on add place button"
    },
    {
      "line": 20,
      "value": "#And Enters Address Details2 \"\u003c2BAddressLine1\u003e\",\"\u003c2BAddressLine2\u003e\",\"\u003cBProvince2\u003e\",\"\u003cBCity2\u003e\",\"\u003cBZipCode\u003e\",\"\u003cBMobileNumber2\u003e\""
    },
    {
      "line": 21,
      "value": "#And User click on add place button"
    },
    {
      "line": 22,
      "value": "#And Enters Address Details3 \"\u003c3BAddressLine1\u003e\",\"\u003c3BAddressLine2\u003e\",\"\u003cBProvince3\u003e\",\"\u003cBCity3\u003e\",\"\u003cBZipCode\u003e\",\"\u003cBMobileNumber3\u003e\""
    },
    {
      "line": 23,
      "value": "#And User click on add place button"
    },
    {
      "line": 24,
      "value": "# And Enters Address Details4 \"\u003c4BAddressLine1\u003e\",\"\u003c3BAddressLine2\u003e\",\"\u003cBProvince4\u003e\",\"\u003cBCity4\u003e\",\"\u003cBZipCode\u003e\",\"\u003cBMobileNumber4\u003e\""
    }
  ],
  "line": 25,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analysit\" , Full Name \"Gogga\" Email \"john@gmail.com\" , Mobile Number \"7412508963\"",
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
  "line": 26,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters Bank Details with Account Number \"00112233440077\" , Account Holder Name \"John Martin\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    32,
    33,
    34,
    35
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#And select  Business address one for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\""
    },
    {
      "line": 31,
      "value": "#And select  Business address two for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\""
    },
    {
      "line": 32,
      "value": "#And select  Business address three for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\""
    }
  ],
  "line": 33,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc1\" , \"test.png\"",
  "matchedColumns": [
    36,
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "select Bank Account Proof for \"doc_desc1\" , \"test.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select Certificate of Incorporation for \"doc_desc1\" , \"test.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "select Law or Degree of Establishment for \"doc_desc1\" , \"test.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc1\" , \"test.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "select Proof of Last Year Revenue for \"doc_desc1\" , \"test.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "successfull \"\"  display on given page",
  "matchedColumns": [
    69
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "End2EndTest.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 129956461,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.establish_a_connection_with_data_base_and_execute_query_to_create_user()"
});
formatter.result({
  "duration": 287628526,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 53119740,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.update_data_in_roles_table()"
});
formatter.result({
  "duration": 54533607,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.login_with_created_username_and_password()"
});
formatter.result({
  "duration": 6235209014,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 13416029970,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 4212285291,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 7268624923,
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
  "duration": 7640676748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADFSNKPABV00100",
      "offset": 19
    },
    {
      "val": "1Rivet DRC",
      "offset": 61
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 90
    },
    {
      "val": "900000000",
      "offset": 128
    }
  ],
  "location": "End2EndTest.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 6829547401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-01-11",
      "offset": 30
    },
    {
      "val": "2018-01-11",
      "offset": 67
    },
    {
      "val": "Manufacturing",
      "offset": 99
    }
  ],
  "location": "End2EndTest.enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String,String,String)"
});
formatter.result({
  "duration": 19746394374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-01-12",
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
  "duration": 8060795646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Halar road",
      "offset": 24
    },
    {
      "val": "Near Axis Bank",
      "offset": 39
    },
    {
      "val": "Bas-Uele",
      "offset": 58
    },
    {
      "val": "Aketi",
      "offset": 70
    },
    {
      "val": "444604",
      "offset": 79
    },
    {
      "val": "1234567890",
      "offset": 88
    }
  ],
  "location": "End2EndTest.enters_Address_Details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10961479881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRCBusiness",
      "offset": 25
    },
    {
      "val": "Dharamdas Chamber line1",
      "offset": 39
    },
    {
      "val": "Near Axis Bank line2",
      "offset": 67
    },
    {
      "val": "Ituri",
      "offset": 92
    },
    {
      "val": "Aru",
      "offset": 101
    },
    {
      "val": "444604",
      "offset": 108
    },
    {
      "val": "frnd@gmail.com",
      "offset": 117
    },
    {
      "val": "7896541023",
      "offset": 134
    }
  ],
  "location": "End2EndTest.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15036907065,
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
      "val": "Gogga",
      "offset": 85
    },
    {
      "val": "john@gmail.com",
      "offset": 99
    },
    {
      "val": "7412508963",
      "offset": 132
    }
  ],
  "location": "End2EndTest.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 8570873044,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 1160144237,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 1207616820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440077",
      "offset": 41
    },
    {
      "val": "John Martin",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 105
    },
    {
      "val": "Branch4",
      "offset": 127
    }
  ],
  "location": "End2EndTest.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 5153771987,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 1193573974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 58
    },
    {
      "val": "test.png",
      "offset": 72
    }
  ],
  "location": "End2EndTest.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 17934394944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 31
    },
    {
      "val": "test.png",
      "offset": 45
    }
  ],
  "location": "End2EndTest.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 16516176497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 41
    },
    {
      "val": "test.png",
      "offset": 55
    }
  ],
  "location": "End2EndTest.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 16529238143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 43
    },
    {
      "val": "test.png",
      "offset": 57
    }
  ],
  "location": "End2EndTest.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 16499375828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 98
    },
    {
      "val": "test.png",
      "offset": 112
    }
  ],
  "location": "End2EndTest.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 16527928410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 39
    },
    {
      "val": "test.png",
      "offset": 53
    }
  ],
  "location": "End2EndTest.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 16551492368,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 4294098901,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 18500390972,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 4240205739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "End2EndTest.successfull_display_on_given_page(String)"
});
formatter.result({
  "duration": 43805916,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 6706532674,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Validate  functionality of Manage Vat Registartion - Internal Portal",
  "description": "",
  "id": "end2end-functional-smoke-testsuite;validate--functionality-of-manage-vat-registartion---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@SP_04_Manage_Vat_Registration"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User login in Internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "click on Manage Vat Registartion",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "select \"\u003cFilter\u003e\" option and \"\u003cFName Business\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "clicks on manage button and select \"\u003cManage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Redirect to confirmation page and click on \"\u003cDeOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "#Then successfull \"\u003cToastMessage\u003e\"  display on given page"
    }
  ],
  "line": 56,
  "name": "Clicks on Close Button",
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "end2end-functional-smoke-testsuite;validate--functionality-of-manage-vat-registartion---internal-portal;",
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
      "line": 59,
      "id": "end2end-functional-smoke-testsuite;validate--functionality-of-manage-vat-registartion---internal-portal;;1"
    },
    {
      "cells": [
        "TC_Internal_01",
        "Manage VAT Registartion",
        "NIF",
        "ADFSNKPABV00100",
        "Review",
        "Approve"
      ],
      "line": 60,
      "id": "end2end-functional-smoke-testsuite;validate--functionality-of-manage-vat-registartion---internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18409949449,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Validate  functionality of Manage Vat Registartion - Internal Portal",
  "description": "",
  "id": "end2end-functional-smoke-testsuite;validate--functionality-of-manage-vat-registartion---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@SP_04_Manage_Vat_Registration"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User login in Internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "click on Manage Vat Registartion",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "select \"NIF\" option and \"ADFSNKPABV00100\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "clicks on manage button and select \"Review\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Redirect to confirmation page and click on \"Approve\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "#Then successfull \"\u003cToastMessage\u003e\"  display on given page"
    }
  ],
  "line": 56,
  "name": "Clicks on Close Button",
  "keyword": "And "
});
formatter.match({
  "location": "End2EndTest.user_login_in_Internal_portal()"
});
formatter.result({
  "duration": 4110962567,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.click_on_Manage_Vat_Registartion()"
});
formatter.result({
  "duration": 4116445456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NIF",
      "offset": 8
    },
    {
      "val": "ADFSNKPABV00100",
      "offset": 25
    }
  ],
  "location": "End2EndTest.select_option_and(String,String)"
});
formatter.result({
  "duration": 7881471179,
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
  "duration": 13230934658,
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
  "duration": 19129500118,
  "status": "passed"
});
formatter.match({
  "location": "End2EndTest.clicks_on_Close_Button()"
});
formatter.result({
  "duration": 1112113342,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 6713713475,
  "status": "passed"
});
});