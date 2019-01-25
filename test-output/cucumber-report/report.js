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
      "value": "#| Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13 | Verify raise notice for objection | arunkumar1@mailinator.com | Arun123  | eJan  | btn_Jan_View | Assessment |"
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
      "name": "@Testing"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "email",
        "password"
      ],
      "line": 32,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;1"
    },
    {
      "cells": [
        "Objection_Appeal_Tax_Payer_16_18_19",
        "Verify raise notice for objection",
        "regressionlast@mailinator.com",
        "Test@123"
      ],
      "line": 33,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11320468020,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate title ,period and object type",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-title-,period-and-object-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Testing"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User Enter email \"regressionlast@mailinator.com\" and  password \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionlast@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 64
    }
  ],
  "location": "DV_2390_e_filing.user_Enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 15035576428,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 543198843,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "Validate the Description field FileUpload",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User click on collapse for the month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on view for month \"\u003cclick\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 66,
      "value": "# And User click on description field"
    }
  ],
  "line": 67,
  "name": "User enter number \"\u003cnumber\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User enter alphabets \"\u003calphabets\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User enter special character \"\u003cspecial\u003e\" aned checks",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User select file format zip \"\u003czip\u003e\" and see message \"\u003czipMess\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User click on browse button and upload file more than two mp \"\u003cBigFile\u003e\" and validate mess \"\u003cBigMess\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User click on browser and upload file \"\u003cuploadFile\u003e\" on objection page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on Cancel and navigate to notice page",
  "keyword": "And "
});
formatter.examples({
  "line": 75,
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
      "line": 76,
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
      "line": 77,
      "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512908925,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Validate the Description field FileUpload",
  "description": "",
  "id": "user-is-on-tax-payer-portal-objection-and-appeal;validate-the-description-field-fileupload;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"Objection_Appeal_Tax_Payer_20_21_22\" \"Verify Description\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User click on collapse for the month \"eJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on view for month \"btn_Jan_View\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on view on notice popup",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click on Object on notice page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 66,
      "value": "# And User click on description field"
    }
  ],
  "line": 67,
  "name": "User enter number \"25375123761547615\" and check",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User enter alphabets \"Notice raise by you is incorrect\" and check",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User enter special character \"-$%^%$^@$^%\" aned checks",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User select file format zip \"src.zip\" and see message \"File format not found\" on objection page",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User click on browse button and upload file more than two mp \"Big File.xlsx\" and validate mess \"File size must be less than 2MB\" on objection page",
  "matchedColumns": [
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User click on browser and upload file \"Officers List With Tax Center.xlsx\" on objection page",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
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
  "duration": 1673932833,
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
  "duration": 1437513947,
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
  "duration": 735433589,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_view_on_notice_popup()"
});
formatter.result({
  "duration": 1201345774,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Object_on_notice_page()"
});
formatter.result({
  "duration": 10143668403,
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
  "duration": 2320580538,
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
  "duration": 1311281098,
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
  "duration": 3305183921,
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
  "duration": 11695590119,
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
  "duration": 7199753515,
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
  "duration": 6266961029,
  "status": "passed"
});
formatter.match({
  "location": "DV_2253_TaxPayer_Portal_objection_appeal.user_click_on_Cancel_and_navigate_to_notice_page()"
});
formatter.result({
  "duration": 1253468930,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 600824108,
  "status": "passed"
});
});