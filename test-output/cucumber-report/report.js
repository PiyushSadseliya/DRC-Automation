$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/30_TaxPayer_Portal_objection_appeal.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Tax Payer portal Objection and Appeal",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# 8 will cover in end to end"
    },
    {
      "line": 4,
      "value": "#@DV_2253_TaxPayer_Portal_objection_appeal_TC_04_06_07_08_11_12_13"
    },
    {
      "line": 5,
      "value": "#Scenario Outline: Verify view preview download navigation name and barcode"
    },
    {
      "line": 6,
      "value": "#Given User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\""
    },
    {
      "line": 7,
      "value": "#And User click on Dashboard and click on VAT e-filling button"
    },
    {
      "line": 8,
      "value": "#And User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 9,
      "value": "#And User click on collapse for the month \"\u003cmonth\u003e\""
    },
    {
      "line": 10,
      "value": "#And User click on view for month \"\u003cclick\u003e\""
    },
    {
      "line": 11,
      "value": "#And User see pop up appear for Notice"
    },
    {
      "line": 12,
      "value": "#And User see document type \"\u003cdocument\u003e\""
    },
    {
      "line": 13,
      "value": "#And User click on view on notice popup"
    },
    {
      "line": 14,
      "value": "#And User see name on notice"
    },
    {
      "line": 15,
      "value": "#And User see barcode and ref id is same"
    },
    {
      "line": 16,
      "value": "#And User click on download button on notice page"
    },
    {
      "line": 17,
      "value": "#And User click on previous button and navigate to VAT e-Filing"
    },
    {
      "line": 18,
      "value": "#And User click on collapse for the month \"\u003cmonth\u003e\""
    },
    {
      "line": 19,
      "value": "#And User click on view for month \"\u003cclick\u003e\""
    },
    {
      "line": 20,
      "value": "#And User click on view on notice popup"
    },
    {
      "line": 21,
      "value": "#And User click on pay button and navigate to Payment Method"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#Examples:"
    },
    {
      "line": 24,
      "value": "#| TestcaseID                                      | Description                       | email                     | password | month | click        | document   |"
    },
    {
      "line": 25,
      "value": "#| Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13 | Verify raise notice for objection | arunkumar1@mailinator.com | Arun123  | eMar  | btn_Jan_View | Assessment |"
    },
    {
      "line": 26,
      "value": "#16 bug 2968"
    }
  ],
  "line": 28,
  "name": "Validate title ,period and object type",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_16_18_19"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Given User click on Dashboard and click on VAT e-filling button"
    }
  ],
  "line": 32,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see period on notice",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verify the period field on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Objection Type and select \"\u003clist\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User verify selected objection type \"\u003cverify\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter data \"\u003cdata\u003e\" in title for objection page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user return back to original frame from description",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on submit button on notice page and see message \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 45,
      "value": "#And User again enter data \"\u003cdata1\u003e\" in title for objection page"
    }
  ],
  "line": 46,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "email",
        "password",
        "month",
        "click",
        "list",
        "description",
        "verify",
        "message",
        "data",
        "data1"
      ],
      "line": 47,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_16_18_19",
        "Verify raise notice for objection",
        "RegressionAprilOneEleven@mt2015.com",
        "Test@123",
        "eJan",
        "btn_Jan_View",
        "drp_Objection_Assesment",
        "Notice raised",
        "Assessment",
        "Title field is required.",
        "abc",
        "objection is incorrect"
      ],
      "line": 48,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32822860647,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate title ,period and object type",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_16_18_19"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User Enter email \"RegressionAprilOneEleven@mt2015.com\" and  password \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_16_18_19\" \"Verify raise notice for objection\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Given User click on Dashboard and click on VAT e-filling button"
    }
  ],
  "line": 32,
  "name": "User click on collapse for the month \"eJan\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on view for month \"btn_Jan_View\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see period on notice",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verify the period field on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Objection Type and select \"drp_Objection_Assesment\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User verify selected objection type \"Assessment\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter data \"abc\" in title for objection page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter description \"Notice raised\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user return back to original frame from description",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on submit button on notice page and see message \"Title field is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "RegressionAprilOneEleven@mt2015.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 70
    }
  ],
  "location": "DV_2390_e_filing.user_Enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 31622442696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Objection_Appeal_Tax_Payer_16_18_19",
      "offset": 80
    },
    {
      "val": "Verify raise notice for objection",
      "offset": 118
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(String,String)"
});
formatter.result({
  "duration": 2119675966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eJan",
      "offset": 38
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_collapse_for_the_month(String)"
});
formatter.result({
  "duration": 5337635583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Jan_View",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_for_month(String)"
});
formatter.result({
  "duration": 643644930,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1157412461,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_period_on_notice()"
});
formatter.result({
  "duration": 5100127186,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "duration": 11228700232,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_verify_the_period_field_on_objection_page()"
});
formatter.result({
  "duration": 5001159869,
  "error_message": "java.lang.IllegalArgumentException: Cannot find elements when the XPath is null.\r\n\tat org.openqa.selenium.By.xpath(By.java:113)\r\n\tat org.drc.vat.appmanager.HelperBase.elementText(HelperBase.java:318)\r\n\tat org.drc.vat.StepDefinitions.DV_2253_TaxPayer_Portal_objection_appeal.user_verify_the_period_field_on_objection_page(DV_2253_TaxPayer_Portal_objection_appeal.java:390)\r\n\tat ✽.And User verify the period field on objection page(features/30_TaxPayer_Portal_objection_appeal.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Objection_Assesment",
      "offset": 41
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Objection_Type_and_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Assessment",
      "offset": 37
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_verify_selected_objection_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 17
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_data_in_title_for_objection_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Notice raised",
      "offset": 24
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_description(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_return_back_to_original_frame_from_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Title field is required.",
      "offset": 60
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_submit_button_on_notice_page_and_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4819294122,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Validate the Description field FileUpload",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user click on VAT menu",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 58,
      "value": "# And User click on description field"
    }
  ],
  "line": 59,
  "name": "User enter number \"\u003cnumber\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User enter alphabets \"\u003calphabets\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User enter special character \"\u003cspecial\u003e\" aned checks",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User select file format zip \"\u003czip\u003e\" and see message \"\u003czipMess\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on browse button and upload file more than two mp \"\u003cBigFile\u003e\" and validate mess \"\u003cBigMess\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on browser and upload file \"\u003cuploadFile\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click on Cancel and navigate to notice page",
  "keyword": "And "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "month",
        "click",
        "number",
        "alphabets",
        "special",
        "zip",
        "zipMess",
        "BigFile",
        "BigMess",
        "uploadFile"
      ],
      "line": 68,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_20_21_22",
        "Verify Description",
        "eJan",
        "btn_Jan_View",
        "25375123761547615",
        "Notice raise by you is incorrect",
        "-$%^%$^@$^%",
        "src.zip",
        "File format not found",
        "Big File.xlsx",
        "File size must be less than 2MB",
        "Officers List With Tax Center.xlsx"
      ],
      "line": 69,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5510484845,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Validate the Description field FileUpload",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user click on VAT menu",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_20_21_22\" \"Verify Description\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User click on collapse for the month \"eJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on view for month \"btn_Jan_View\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 58,
      "value": "# And User click on description field"
    }
  ],
  "line": 59,
  "name": "User enter number \"25375123761547615\" and check",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User enter alphabets \"Notice raise by you is incorrect\" and check",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User enter special character \"-$%^%$^@$^%\" aned checks",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User select file format zip \"src.zip\" and see message \"File format not found\" on objection page",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on browse button and upload file more than two mp \"Big File.xlsx\" and validate mess \"File size must be less than 2MB\" on objection page",
  "matchedColumns": [
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on browser and upload file \"Officers List With Tax Center.xlsx\" on objection page",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click on Cancel and navigate to notice page",
  "keyword": "And "
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_VAT_menu()"
});
formatter.result({
  "duration": 1054836155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Objection_Appeal_Tax_Payer_20_21_22",
      "offset": 80
    },
    {
      "val": "Verify Description",
      "offset": 118
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(String,String)"
});
formatter.result({
  "duration": 2164357996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eJan",
      "offset": 38
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_collapse_for_the_month(String)"
});
formatter.result({
  "duration": 546378943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Jan_View",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_for_month(String)"
});
formatter.result({
  "duration": 663841184,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1152999829,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "duration": 13307231056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25375123761547615",
      "offset": 19
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_number_and_check(String)"
});
formatter.result({
  "duration": 2475264155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notice raise by you is incorrect",
      "offset": 22
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_alphabets_and_check(String)"
});
formatter.result({
  "duration": 1289100908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-$%^%$^@$^%",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_special_character_aned_checks(String)"
});
formatter.result({
  "duration": 1299494417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src.zip",
      "offset": 29
    },
    {
      "val": "File format not found",
      "offset": 55
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_select_file_format_zip_and_see_message_on_objection_page(String,String)"
});
formatter.result({
  "duration": 1764536906,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.StepDefinitions.DV_2253_TaxPayer_Portal_objection_appeal.user_select_file_format_zip_and_see_message_on_objection_page(DV_2253_TaxPayer_Portal_objection_appeal.java:274)\r\n\tat ✽.And User select file format zip \"src.zip\" and see message \"File format not found\" on objection page(features/30_TaxPayer_Portal_objection_appeal.feature:62)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Big File.xlsx",
      "offset": 62
    },
    {
      "val": "File size must be less than 2MB",
      "offset": 96
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_browse_button_and_upload_file_more_than_two_mp_and_validate_mess_on_objection_page(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Officers List With Tax Center.xlsx",
      "offset": 39
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_browser_and_upload_file_on_objection_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Cancel_and_navigate_to_notice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 692334349,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "validate raise notice,object and submit",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-raise-notice,object-and-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_02_14_23_24"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 73,
      "value": "#Given user click on VAT menu"
    }
  ],
  "line": 74,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 78,
      "value": "#  And User see period on notice"
    }
  ],
  "line": 79,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User click on Objection Type and select \"\u003clist\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User enter description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "user return back to original frame from description",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on submit button on notice page",
  "keyword": "And "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-raise-notice,object-and-submit;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "month",
        "click",
        "list",
        "description"
      ],
      "line": 86,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-raise-notice,object-and-submit;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_02_14_23_24",
        "Verify raise notice for objection",
        "eJan",
        "btn_Jan_View",
        "drp_Objection_Assesment",
        "Notice raised"
      ],
      "line": 87,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-raise-notice,object-and-submit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5509178781,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "validate raise notice,object and submit",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-raise-notice,object-and-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_02_14_23_24"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 73,
      "value": "#Given user click on VAT menu"
    }
  ],
  "line": 74,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_02_14_23_24\" \"Verify raise notice for objection\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User click on collapse for the month \"eJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on view for month \"btn_Jan_View\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 78,
      "value": "#  And User see period on notice"
    }
  ],
  "line": 79,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User click on Objection Type and select \"drp_Objection_Assesment\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User enter description \"Notice raised\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "user return back to original frame from description",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on submit button on notice page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Objection_Appeal_Tax_Payer_02_14_23_24",
      "offset": 80
    },
    {
      "val": "Verify raise notice for objection",
      "offset": 121
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(String,String)"
});
formatter.result({
  "duration": 81481188037,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027/vat-e-filing\u0027] (tried for 80 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:122)\r\n\tat org.drc.vat.StepDefinitions.DV_2253_TaxPayer_Portal_objection_appeal.user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(DV_2253_TaxPayer_Portal_objection_appeal.java:43)\r\n\tat ✽.And User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_02_14_23_24\" \"Verify raise notice for objection\"(features/30_TaxPayer_Portal_objection_appeal.feature:74)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/vat-e-filing\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:346)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:122)\r\n\tat org.drc.vat.StepDefinitions.DV_2253_TaxPayer_Portal_objection_appeal.user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(DV_2253_TaxPayer_Portal_objection_appeal.java:43)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "eJan",
      "offset": 38
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_collapse_for_the_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Jan_View",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_for_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Objection_Assesment",
      "offset": 41
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Objection_Type_and_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Notice raised",
      "offset": 24
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_description(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_return_back_to_original_frame_from_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_submit_button_on_notice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1915351,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.uri("features/31_Internal_Portal_objection_appeal.feature");
formatter.feature({
  "line": 1,
  "name": "User is on internal Portal for objection and appeal",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the Filter by Functionality based on filter option Priority Tax Officer - internal portal",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_03_Priority"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User type status \"\u003cPir\u003e\" and verify \"\u003cVerifyPir\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer---internal-portal;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "Pir",
        "VerifyPir"
      ],
      "line": 12,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer---internal-portal;;1"
    },
    {
      "cells": [
        "Priority_1",
        "Verify date filteration functionalityt",
        "drp_Priority_click_filter",
        "High",
        "High"
      ],
      "line": 13,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer---internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4421182,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callinternalportal(ApplicationManager.java:103)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:124)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the Filter by Functionality based on filter option Priority Tax Officer - internal portal",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_03_Priority"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Internal Portal \"Priority_1\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on filter by on case management and click on \"drp_Priority_click_filter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User type status \"High\" and verify \"High\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Priority_1",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 41
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Priority_click_filter",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 18
    },
    {
      "val": "High",
      "offset": 36
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_type_status_and_verify(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3498416,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "# | Priority_2 | Verify date filteration functionalityt | drp_Priority_Click | Medium | Medium    |"
    },
    {
      "line": 16,
      "value": "# | Priority_3 | Verify date filteration functionalityt | drp_Priority_Click | Low    | Low       |"
    }
  ],
  "line": 18,
  "name": "Verify the Filter by Functionality based on filter option Case Type Status Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03_CaseType"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And User click on Dashboard and click on pin button"
    }
  ],
  "line": 21,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User user click on case type \"\u003cCaseType\u003e\" and click on search button search result \"\u003cQaResult\u003e\" on case management",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "CaseType",
        "QaResult"
      ],
      "line": 26,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;1"
    },
    {
      "cells": [
        "CaseType_3_1",
        "Verify date filteration functionalityt",
        "drp_CaseType",
        "drp_ObjectionAndAppeal",
        "Objection and appeal"
      ],
      "line": 27,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;2"
    },
    {
      "cells": [
        "CaseType_3_2",
        "Verify date filteration functionalityt",
        "drp_CaseType",
        "drp_Debt",
        "Debt Collection"
      ],
      "line": 28,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;3"
    },
    {
      "cells": [
        "CaseType_3_3",
        "Verify date filteration functionalityt",
        "drp_CaseType",
        "drp_PA1",
        "Payment Agreement"
      ],
      "line": 29,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;4"
    },
    {
      "cells": [
        "CaseType_3_4",
        "Verify date filteration functionalityt",
        "drp_CaseType",
        "drp_Audit",
        "Audit"
      ],
      "line": 30,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3242504,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the Filter by Functionality based on filter option Case Type Status Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03_CaseType"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Internal Portal \"CaseType_3_1\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And User click on Dashboard and click on pin button"
    }
  ],
  "line": 21,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User user click on case type \"drp_ObjectionAndAppeal\" and click on search button search result \"Objection and appeal\" on case management",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CaseType_3_1",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 43
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_ObjectionAndAppeal",
      "offset": 30
    },
    {
      "val": "Objection and appeal",
      "offset": 96
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2583345,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4039308,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify the Filter by Functionality based on filter option Case Type Status Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03_CaseType"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Internal Portal \"CaseType_3_2\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And User click on Dashboard and click on pin button"
    }
  ],
  "line": 21,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User user click on case type \"drp_Debt\" and click on search button search result \"Debt Collection\" on case management",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CaseType_3_2",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 43
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Debt",
      "offset": 30
    },
    {
      "val": "Debt Collection",
      "offset": 82
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2576790,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2426606,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the Filter by Functionality based on filter option Case Type Status Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03_CaseType"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Internal Portal \"CaseType_3_3\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And User click on Dashboard and click on pin button"
    }
  ],
  "line": 21,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User user click on case type \"drp_PA1\" and click on search button search result \"Payment Agreement\" on case management",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CaseType_3_3",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 43
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_PA1",
      "offset": 30
    },
    {
      "val": "Payment Agreement",
      "offset": 81
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2318313,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2732104,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the Filter by Functionality based on filter option Case Type Status Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-case-type-status-priority-tax-officer;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03_CaseType"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Internal Portal \"CaseType_3_4\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#And User click on Dashboard and click on pin button"
    }
  ],
  "line": 21,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User user click on case type \"drp_Audit\" and click on search button search result \"Audit\" on case management",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CaseType_3_4",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 43
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Audit",
      "offset": 30
    },
    {
      "val": "Audit",
      "offset": 83
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2919621,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Verify the Filter by Functionality based on filter option Status",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_03_Status"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User type status \"\u003cstatus\u003e\" and verify \"\u003cVerifyStatus\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "status",
        "VerifyStatus"
      ],
      "line": 41,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status;;1"
    },
    {
      "cells": [
        "Case_Status_1",
        "Verify date filteration functionalityt",
        "drp_Status_Click",
        "Open",
        "Open"
      ],
      "line": 42,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status;;2"
    },
    {
      "comments": [
        {
          "line": 43,
          "value": "# | Case_Status_2 | Verify date filteration functionalityt | drp_Status_Click | Reject             | Reject             |"
        }
      ],
      "cells": [
        "Case_Status_3",
        "Verify date filteration functionalityt",
        "drp_Status_Click",
        "Under Review",
        "Under Review"
      ],
      "line": 44,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3450254,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify the Filter by Functionality based on filter option Status",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_03_Status"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Internal Portal \"Case_Status_1\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on filter by on case management and click on \"drp_Status_Click\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User type status \"Open\" and verify \"Open\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Status_1",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 44
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Status_Click",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Open",
      "offset": 18
    },
    {
      "val": "Open",
      "offset": 36
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_type_status_and_verify(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2880579,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2721275,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "# | Case_Status_2 | Verify date filteration functionalityt | drp_Status_Click | Reject             | Reject             |"
    }
  ],
  "line": 44,
  "name": "Verify the Filter by Functionality based on filter option Status",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-status;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_03_Status"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Internal Portal \"Case_Status_3\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on filter by on case management and click on \"drp_Status_Click\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User type status \"Under Review\" and verify \"Under Review\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Status_3",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 44
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Status_Click",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Under Review",
      "offset": 18
    },
    {
      "val": "Under Review",
      "offset": 44
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_type_status_and_verify(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2343107,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 46,
      "value": "#    | Case_Status_4 | Verify date filteration functionalityt | drp_Status_Click | Request adjustment | Request adjustment |"
    },
    {
      "line": 47,
      "value": "#| Case_Status_5 | Verify date filteration functionalityt | drp_Status_Click | ApproveReport      | ApproveReport      |"
    }
  ],
  "line": 49,
  "name": "Verify the Filter by Functionality based on filter option Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@TC_03_Taxofficer"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User type status \"\u003cPir\u003e\" and verify \"\u003cVerifyPir\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "Pir",
        "VerifyPir"
      ],
      "line": 57,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer;;1"
    },
    {
      "cells": [
        "Case_Taxofficer_1",
        "Verify date filteration functionalityt",
        "drp_Officer_Click",
        "Laxman",
        "Laxman"
      ],
      "line": 58,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3966923,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify the Filter by Functionality based on filter option Priority Tax Officer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;verify-the-filter-by-functionality-based-on-filter-option-priority-tax-officer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@TC_03_Taxofficer"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User is on Internal Portal \"Case_Taxofficer_1\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on filter by on case management and click on \"drp_Officer_Click\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User type status \"Laxman\" and verify \"Laxman\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Taxofficer_1",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 48
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Officer_Click",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Laxman",
      "offset": 18
    },
    {
      "val": "Laxman",
      "offset": 38
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_type_status_and_verify(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2701896,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 60,
      "value": "#   | Case_Taxofficer_2 | Verify date filteration functionalityt | drp_Officer_Click | Ketan  | Ketan     |"
    },
    {
      "line": 61,
      "value": "#@TC_05"
    },
    {
      "line": 62,
      "value": "#Scenario Outline: Validate the Pagination on the FX management page with historic data"
    },
    {
      "line": 63,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 64,
      "value": "#And User click on Dashboard and click on pin button"
    },
    {
      "line": 65,
      "value": "#And User click on case management"
    },
    {
      "line": 66,
      "value": "#And User click on page \"\u003cClickPage\u003e\" and check page\"\u003cCheckPage\u003e\" \"\u003coption\u003e\""
    },
    {
      "line": 67,
      "value": "#"
    },
    {
      "line": 68,
      "value": "#Examples:"
    },
    {
      "line": 69,
      "value": "#| TestcaseID          | Description               | Period        | ClickPage   | CheckPage       | option         |"
    },
    {
      "line": 70,
      "value": "#| Case_Management_9_1 | validating last and right | txt_PeriodJan | lbl_AssLast | lbl_AssestRight | last and right |"
    },
    {
      "line": 71,
      "value": "#    | Case_Management_9_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |"
    },
    {
      "line": 72,
      "value": "#    | Case_Management_9_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |"
    },
    {
      "line": 73,
      "value": "#    | Case_Management_9_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |"
    },
    {
      "line": 74,
      "value": "#    | Case_Management_9_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |"
    },
    {
      "line": 75,
      "value": "#    | Case_Management_9_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |"
    }
  ],
  "line": 77,
  "name": "Validate the Reassign option functionality under view column",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-reassign-option-functionality-under-view-column",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@TC_09"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User type status \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "user click on Reassign",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "select another Tax Officier fron the list \"\u003cChangeOfficer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "click on right tick for reassign",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Tax Officier Changed and toast message display",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-reassign-option-functionality-under-view-column;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "status",
        "ChangeOfficer"
      ],
      "line": 89,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-reassign-option-functionality-under-view-column;;1"
    },
    {
      "cells": [
        "Case_Management_09",
        "Verify date filteration functionalityt",
        "drp_Status_Click",
        "Open",
        "drp_SelectTaxOfficerOne"
      ],
      "line": 90,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-reassign-option-functionality-under-view-column;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2447409,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 90,
  "name": "Validate the Reassign option functionality under view column",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-reassign-option-functionality-under-view-column;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@TC_09"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "User is on Internal Portal \"Case_Management_09\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User click on filter by on case management and click on \"drp_Status_Click\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User type status \"Open\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "user click on Reassign",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "select another Tax Officier fron the list \"drp_SelectTaxOfficerOne\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "click on right tick for reassign",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Tax Officier Changed and toast message display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Management_09",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 49
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Status_Click",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Open",
      "offset": 18
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_type_status(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_click_on_Reassign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_SelectTaxOfficerOne",
      "offset": 43
    }
  ],
  "location": "DV_1377_ManageVatRegistration.select_another_Tax_Officier_fron_the_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.click_on_right_tick_for_reassign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.tax_Officier_Changed_and_toast_message_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2741509,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 93,
  "name": "Validate the functionality of Transaction Details button",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-functionality-of-transaction-details-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@TC_19"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User user click on case type \"\u003cCaseType\u003e\" and click on search button search result \"\u003cQaResult\u003e\" on case management",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click on manage drop down and click on view when status is open",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 102,
      "value": "#And User click on manage drop down and click on view"
    }
  ],
  "line": 104,
  "name": "User click on Transaction Detail button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User navigate to Statement of transaction page",
  "keyword": "And "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-functionality-of-transaction-details-button;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "ChangeOfficer",
        "CaseType",
        "QaResult",
        "filter"
      ],
      "line": 108,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-functionality-of-transaction-details-button;;1"
    },
    {
      "cells": [
        "Case_Management_19",
        "Verify date filteration functionalityt",
        "drp_SelectTaxOfficerOne",
        "drp_ObjectionAndAppeal",
        "Objection and appeal",
        "drp_CaseType"
      ],
      "line": 109,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-functionality-of-transaction-details-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3030194,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 109,
  "name": "Validate the functionality of Transaction Details button",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-functionality-of-transaction-details-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@TC_19"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "User is on Internal Portal \"Case_Management_19\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User user click on case type \"drp_ObjectionAndAppeal\" and click on search button search result \"Objection and appeal\" on case management",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click on manage drop down and click on view when status is open",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 102,
      "value": "#And User click on manage drop down and click on view"
    }
  ],
  "line": 104,
  "name": "User click on Transaction Detail button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User navigate to Statement of transaction page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Management_19",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 49
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_ObjectionAndAppeal",
      "offset": 30
    },
    {
      "val": "Objection and appeal",
      "offset": 96
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_manage_drop_down_and_click_on_view_when_status_is_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Transaction_Detail_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_navigate_to_Statement_of_transaction_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2442849,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 112,
  "name": "Validate the previous and cancel button functionality",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-previous-and-cancel-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 111,
      "name": "@TC_21_17_18"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "User user click on case type \"\u003cCaseType\u003e\" and click on search button search result \"\u003cQaResult\u003e\" on case management",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User click on manage drop down and click on view when status is open",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 120,
      "value": "#And User click on manage drop down and click on view"
    }
  ],
  "line": 122,
  "name": "User click on previous button on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User navigate to Case Management list page",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User user click on case type \"\u003cCaseType\u003e\" and click on search button search result \"\u003cQaResult\u003e\" on case management",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User click on manage drop down and click on view when status is open",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User enter in iframe",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on cancel button on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User navigate to Case Management list page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 133,
      "value": "#And User click on manage drop down and click on view"
    },
    {
      "line": 134,
      "value": "#And User click on comment section and type comment \"\u003ccomment\u003e\" and see mess\"\u003cmess\u003e\""
    }
  ],
  "line": 135,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-previous-and-cancel-button-functionality;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "comment",
        "mess",
        "filter",
        "CaseType",
        "QaResult"
      ],
      "line": 136,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-previous-and-cancel-button-functionality;;1"
    },
    {
      "cells": [
        "Case_Management_21_17_18",
        "Verify date filteration functionalityt",
        "need document",
        "Objection updated successfully",
        "drp_CaseType",
        "drp_ObjectionAndAppeal",
        "Objection and appeal"
      ],
      "line": 137,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-previous-and-cancel-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3367040,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 137,
  "name": "Validate the previous and cancel button functionality",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-previous-and-cancel-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 111,
      "name": "@TC_21_17_18"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "User is on Internal Portal \"Case_Management_21_17_18\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "User user click on case type \"drp_ObjectionAndAppeal\" and click on search button search result \"Objection and appeal\" on case management",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User click on manage drop down and click on view when status is open",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 120,
      "value": "#And User click on manage drop down and click on view"
    }
  ],
  "line": 122,
  "name": "User click on previous button on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User navigate to Case Management list page",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User click on filter by on case management and click on \"drp_CaseType\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User user click on case type \"drp_ObjectionAndAppeal\" and click on search button search result \"Objection and appeal\" on case management",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User click on manage drop down and click on view when status is open",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User enter in iframe",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on cancel button on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User navigate to Case Management list page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Management_21_17_18",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 55
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_ObjectionAndAppeal",
      "offset": 30
    },
    {
      "val": "Objection and appeal",
      "offset": 96
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_manage_drop_down_and_click_on_view_when_status_is_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_previous_button_on_objection_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_navigate_to_Case_Management_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseType",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_ObjectionAndAppeal",
      "offset": 30
    },
    {
      "val": "Objection and appeal",
      "offset": 96
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_manage_drop_down_and_click_on_view_when_status_is_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_enter_in_iframe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_cancel_button_on_objection_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_navigate_to_Case_Management_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3980032,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 140,
  "name": "Validate the priority is set correctly for the individual tax payer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-priority-is-set-correctly-for-the-individual-tax-payer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@TC_08"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User type case id",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 146,
      "value": "#And User Type id \"\u003cid\u003e\""
    }
  ],
  "line": 147,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User click on priority",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User select priority \"\u003cpriority\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User see validation message for changing priority \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 155,
      "value": "# And User enter in add new button frame"
    }
  ],
  "line": 156,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-priority-is-set-correctly-for-the-individual-tax-payer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "id",
        "priority",
        "mess"
      ],
      "line": 157,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-priority-is-set-correctly-for-the-individual-tax-payer;;1"
    },
    {
      "cells": [
        "Case_Management_08",
        "Verify date filteration functionalityt",
        "drp_CaseID",
        "O19030100000002",
        "drp_P_High",
        "Objection updated successfully"
      ],
      "line": 158,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-priority-is-set-correctly-for-the-individual-tax-payer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4374729,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 158,
  "name": "Validate the priority is set correctly for the individual tax payer",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-the-priority-is-set-correctly-for-the-individual-tax-payer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 139,
      "name": "@TC_08"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "User is on Internal Portal \"Case_Management_08\" \"Verify date filteration functionalityt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User click on filter by on case management and click on \"drp_CaseID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User type case id",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 146,
      "value": "#And User Type id \"\u003cid\u003e\""
    }
  ],
  "line": 147,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User click on priority",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User select priority \"drp_P_High\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User see validation message for changing priority \"Objection updated successfully\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Case_Management_08",
      "offset": 28
    },
    {
      "val": "Verify date filteration functionalityt",
      "offset": 49
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseID",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_type_case_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_manage_drop_down_and_click_on_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_priority()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_P_High",
      "offset": 22
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_select_priority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Objection updated successfully",
      "offset": 51
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_see_validation_message_for_changing_priority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3103433,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 160,
      "value": "#@TC_11"
    },
    {
      "line": 161,
      "value": "#Scenario Outline: Validate Reject status"
    },
    {
      "line": 162,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 163,
      "value": "#And User click on Dashboard and click on pin button"
    },
    {
      "line": 164,
      "value": "#And User click on case management"
    },
    {
      "line": 165,
      "value": "#And User click on filter by on case management and click on \"\u003cfilter\u003e\""
    },
    {
      "line": 166,
      "value": "#And User Type id \"\u003cid\u003e\""
    },
    {
      "line": 167,
      "value": "#And User click on search button"
    },
    {
      "line": 168,
      "value": "#And User click on manage drop down and click on view"
    },
    {
      "line": 169,
      "value": "#And User click on select action"
    },
    {
      "line": 170,
      "value": "#And User select reject"
    },
    {
      "line": 171,
      "value": "#And User click on submit button"
    },
    {
      "line": 172,
      "value": "#And User see validation message for changing priority \"\u003cmess\u003e\""
    },
    {
      "line": 173,
      "value": "#"
    },
    {
      "line": 174,
      "value": "#Examples:"
    },
    {
      "line": 175,
      "value": "#| TestcaseID                          | Description                   | filter     | id              | mess                           |"
    },
    {
      "line": 176,
      "value": "#| Objection_Appeal_internal_portal_15 | Verify Reassign functionality | drp_CaseID | O19030100000002 | Objection updated successfully |"
    }
  ],
  "line": 178,
  "name": "Validate Reject status",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-reject-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 177,
      "name": "@TC_11"
    }
  ]
});
formatter.step({
  "line": 179,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 180,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User click on filter by on case management and click on \"\u003cfilter\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User type case id",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "#And User Type id \"\u003cid\u003e\""
    }
  ],
  "line": 185,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User enter in iframe",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User click on select action",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User select under review",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "User again click on select action",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User select reject",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User see validation message for changing priority \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 197,
  "name": "",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-reject-status;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "filter",
        "id",
        "mess"
      ],
      "line": 198,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-reject-status;;1"
    },
    {
      "cells": [
        "Objection_Appeal_internal_portal_11",
        "Verify Reassign functionality",
        "drp_CaseID",
        "O19022700000003",
        "Objection updated successfully"
      ],
      "line": 199,
      "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-reject-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3780546,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:283)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callurl(ApplicationManager.java:289)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:224)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 199,
  "name": "Validate Reject status",
  "description": "",
  "id": "user-is-on-internal-portal-for-objection-and-appeal;validate-reject-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 177,
      "name": "@TC_11"
    }
  ]
});
formatter.step({
  "line": 179,
  "name": "User is on Internal Portal \"Objection_Appeal_internal_portal_11\" \"Verify Reassign functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 180,
  "name": "User click on Dashboard and click on pin button",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User click on case management",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User click on filter by on case management and click on \"drp_CaseID\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User type case id",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "#And User Type id \"\u003cid\u003e\""
    }
  ],
  "line": 185,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click on manage drop down and click on view",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User enter in iframe",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User click on select action",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User select under review",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "User again click on select action",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User select reject",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User see validation message for changing priority \"Objection updated successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Objection_Appeal_internal_portal_11",
      "offset": 28
    },
    {
      "val": "Verify Reassign functionality",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_case_management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_CaseID",
      "offset": 57
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_filter_by_on_case_management_and_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_type_case_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_manage_drop_down_and_click_on_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_enter_in_iframe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_select_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_select_under_review()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_again_click_on_select_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_select_reject()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2254_Internal_Portal_objection_appeal.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Objection updated successfully",
      "offset": 51
    }
  ],
  "location": "DV_2254_Internal_Portal_objection_appeal.user_see_validation_message_for_changing_priority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3575075,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52035}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 92f1b448f2273e6cdae9df2b959f5b87\r\n\tat sun.reflect.GeneratedConstructorAccessor20.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat org.drc.vat.appmanager.ApplicationManager.takeScreenshotAsFile(ApplicationManager.java:95)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.endScenario(TestRunner.java:234)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:580)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:716)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:988)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});