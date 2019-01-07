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
    }
  ],
  "line": 5,
  "name": "Verify view preview download navigation name and barcode",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;verify-view-preview-download-navigation-name-and-barcode",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_04_06_07_08_11_12_13"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And User click on Dashboard and click on VAT e-filling button"
    }
  ],
  "line": 8,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User see pop up appear for Notice",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User see document type \"\u003cdocument\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User see name on notice",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see barcode and ref id is same",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on download button on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on previous button and navigate to VAT e-Filing",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on pay button and navigate to Payment Method",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;verify-view-preview-download-navigation-name-and-barcode;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "email",
        "password",
        "month",
        "click",
        "document"
      ],
      "line": 24,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;verify-view-preview-download-navigation-name-and-barcode;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13",
        "Verify raise notice for objection",
        "arunkumar1@mailinator.com",
        "Arun123",
        "eJan",
        "btn_Jan_View",
        "Assessment"
      ],
      "line": 25,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;verify-view-preview-download-navigation-name-and-barcode;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13260221194,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify view preview download navigation name and barcode",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;verify-view-preview-download-navigation-name-and-barcode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_04_06_07_08_11_12_13"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Enter email \"arunkumar1@mailinator.com\" and  password \"Arun123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#And User click on Dashboard and click on VAT e-filling button"
    }
  ],
  "line": 8,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13\" \"Verify raise notice for objection\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on collapse for the month \"eJan\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on view for month \"btn_Jan_View\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User see pop up appear for Notice",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User see document type \"Assessment\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User see name on notice",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see barcode and ref id is same",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on download button on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on previous button and navigate to VAT e-Filing",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on collapse for the month \"eJan\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on view for month \"btn_Jan_View\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on pay button and navigate to Payment Method",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "arunkumar1@mailinator.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 60
    }
  ],
  "location": "DV_2390_e_filing.user_Enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 18296911430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13",
      "offset": 80
    },
    {
      "val": "Verify raise notice for objection",
      "offset": 130
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(String,String)"
});
formatter.result({
  "duration": 1864765827,
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
  "duration": 2099326284,
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
  "duration": 711814829,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_pop_up_appear_for_Notice()"
});
formatter.result({
  "duration": 1056677452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assessment",
      "offset": 24
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_document_type(String)"
});
formatter.result({
  "duration": 1068675445,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1446970918,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_reference_id_and_name_on_notice()"
});
formatter.result({
  "duration": 1159979278,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_barcode_and_ref_id_is_same()"
});
formatter.result({
  "duration": 236258814,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_download_button_on_notice_page()"
});
formatter.result({
  "duration": 66151255285,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_previous_button_and_navigate_to_VAT_e_Filing()"
});
formatter.result({
  "duration": 449329663,
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
  "duration": 2217489295,
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
  "duration": 537767285,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1320480373,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_pay_button_and_navigate_to_Payment_Method()"
});
formatter.result({
  "duration": 2686063095,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1110214945,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 28,
      "value": "#16 bug 2968"
    }
  ],
  "line": 30,
  "name": "Validate title ,period and object type",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_16_18_19"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User click on Dashboard and click on VAT e-filling button",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User see period on notice",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "# And User verify the period field on objection page"
    }
  ],
  "line": 39,
  "name": "User click on Objection Type and select \"\u003clist\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User verify selected objection type \"\u003cverify\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter data \"\u003cdata\u003e\" in title for objection page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click on submit button on notice page and see message \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User again enter data \"\u003cdata1\u003e\" in title for objection page",
  "keyword": "And "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "month",
        "click",
        "list",
        "verify",
        "message",
        "data",
        "data1"
      ],
      "line": 46,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_16_18_19",
        "Verify raise notice for objection",
        "eMar",
        "btn_Mar_View",
        "drp_Objection_Assesment",
        "Assessment",
        "Title field is required.",
        "abc",
        "objection is incorrect"
      ],
      "line": 47,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5525316195,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validate title ,period and object type",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_16_18_19"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_16_18_19\" \"Verify raise notice for objection\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User click on Dashboard and click on VAT e-filling button",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on collapse for the month \"eMar\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on view for month \"btn_Mar_View\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User see period on notice",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "# And User verify the period field on objection page"
    }
  ],
  "line": 39,
  "name": "User click on Objection Type and select \"drp_Objection_Assesment\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User verify selected objection type \"Assessment\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter data \"abc\" in title for objection page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click on submit button on notice page and see message \"Title field is required.\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User again enter data \"objection is incorrect\" in title for objection page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
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
  "duration": 1959505264,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Dashboard_and_click_on_VAT_e_filling_button()"
});
formatter.result({
  "duration": 2287960889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eMar",
      "offset": 38
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_collapse_for_the_month(String)"
});
formatter.result({
  "duration": 1617779956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Mar_View",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_for_month(String)"
});
formatter.result({
  "duration": 530253813,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1351540131,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_period_on_notice()"
});
formatter.result({
  "duration": 1117576251,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "duration": 10142215257,
  "status": "passed"
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
  "duration": 12070785364,
  "status": "passed"
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
  "duration": 1037952865,
  "status": "passed"
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
  "duration": 3375692058,
  "status": "passed"
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
  "duration": 1175708520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "objection is incorrect",
      "offset": 23
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_again_enter_data_in_title_for_objection_page(String)"
});
formatter.result({
  "duration": 1879201478,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 817348910,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Validate the Description field FileUpload",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "# And User click on description field"
    }
  ],
  "line": 57,
  "name": "User enter number \"\u003cnumber\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enter alphabets \"\u003calphabets\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enter special character \"\u003cspecial\u003e\" aned checks",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User select file format zip \"\u003czip\u003e\" and see message \"\u003czipMess\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click on browse button and upload file more than two mp \"\u003cBigFile\u003e\" and validate mess \"\u003cBigMess\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on browser and upload file \"\u003cuploadFile\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on Cancel and navigate to notice page",
  "keyword": "And "
});
formatter.examples({
  "line": 65,
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
      "line": 66,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_20_21_22",
        "Verify Description",
        "eMar",
        "btn_Mar_View",
        "25375123761547615",
        "Notice raise by you is incorrect",
        "-$%^%$^@$^%",
        "src.zip",
        "File format not found",
        "Big File.xlsx",
        "File size must be less than 2MB",
        "Officers List With Tax Center.xlsx"
      ],
      "line": 67,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5694259609,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validate the Description field FileUpload",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_20_21_22\" \"Verify Description\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User click on collapse for the month \"eMar\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on view for month \"btn_Mar_View\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "# And User click on description field"
    }
  ],
  "line": 57,
  "name": "User enter number \"25375123761547615\" and check",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enter alphabets \"Notice raise by you is incorrect\" and check",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enter special character \"-$%^%$^@$^%\" aned checks",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User select file format zip \"src.zip\" and see message \"File format not found\" on objection page",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click on browse button and upload file more than two mp \"Big File.xlsx\" and validate mess \"File size must be less than 2MB\" on objection page",
  "matchedColumns": [
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on browser and upload file \"Officers List With Tax Center.xlsx\" on objection page",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on Cancel and navigate to notice page",
  "keyword": "And "
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
  "duration": 1911082473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eMar",
      "offset": 38
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_collapse_for_the_month(String)"
});
formatter.result({
  "duration": 1543987543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Mar_View",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_for_month(String)"
});
formatter.result({
  "duration": 896485973,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1227860293,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "duration": 15306409842,
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
  "duration": 2450197342,
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
  "duration": 1738056662,
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
  "duration": 1586664693,
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
  "duration": 52604530661,
  "status": "passed"
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
  "duration": 7392287846,
  "status": "passed"
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
  "duration": 6359374923,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Cancel_and_navigate_to_notice_page()"
});
formatter.result({
  "duration": 1554835426,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 944760751,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "validate submit",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-submit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_02_14_23_24"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User see period on notice",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Objection Type and select \"\u003clist\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User enter description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 80,
      "value": "# And User click on submit button on notice page"
    }
  ],
  "line": 81,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-submit;",
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
      "line": 82,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-submit;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_02_14_23_24",
        "Verify raise notice for objection",
        "eMar",
        "btn_Mar_View",
        "drp_Objection_Assesment",
        "Notice raise by you is incorrect"
      ],
      "line": 83,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-submit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5535404764,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "validate submit",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-submit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_02_14_23_24"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_02_14_23_24\" \"Verify raise notice for objection\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "User click on collapse for the month \"eMar\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on view for month \"btn_Mar_View\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User see period on notice",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Objection Type and select \"drp_Objection_Assesment\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User enter description \"Notice raise by you is incorrect\"",
  "matchedColumns": [
    5
  ],
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
  "duration": 1694739135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eMar",
      "offset": 38
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_collapse_for_the_month(String)"
});
formatter.result({
  "duration": 2040375798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Mar_View",
      "offset": 30
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_for_month(String)"
});
formatter.result({
  "duration": 512725023,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1255786891,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_see_period_on_notice()"
});
formatter.result({
  "duration": 1285559856,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "duration": 14814196114,
  "status": "passed"
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
  "duration": 4944179656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notice raise by you is incorrect",
      "offset": 24
    }
  ],
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_enter_description(String)"
});
formatter.result({
  "duration": 2101310468,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 933021024,
  "status": "passed"
});
});