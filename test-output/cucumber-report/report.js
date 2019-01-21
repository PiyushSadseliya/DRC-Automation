$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DV_3893_TaxOfficer_Help_Desk_Internal.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Tax Officer internal Portal Help Desk",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the Help Desk sub menu functionality and date format and valid and invalid search functionality  - internal portal",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-help-desk-sub-menu-functionality-and-date-format-and-valid-and-invalid-search-functionality----internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_04_05_06_07_08_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User click on Helpdesk menu on internal portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User type \"\u003cdate\u003e\" on internal",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify date format on internal",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User search for Invalid data \"\u003cinvalid\u003e\" and verify mess \" No records found.\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User search for valid data \"\u003cvalidData\u003e\" and verify",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Next status and click on under review",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Submit button internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-help-desk-sub-menu-functionality-and-date-format-and-valid-and-invalid-search-functionality----internal-portal;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "date",
        "invalid",
        "validData",
        "mess"
      ],
      "line": 23,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-help-desk-sub-menu-functionality-and-date-format-and-valid-and-invalid-search-functionality----internal-portal;;1"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_TC_01_04_05_06_07_08",
        "Verify date format valida and in valid functionality",
        "open",
        "as55d5wad",
        "Open",
        "Issue Ticket updated successfully"
      ],
      "line": 24,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-help-desk-sub-menu-functionality-and-date-format-and-valid-and-invalid-search-functionality----internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22906254257,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate the Help Desk sub menu functionality and date format and valid and invalid search functionality  - internal portal",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-help-desk-sub-menu-functionality-and-date-format-and-valid-and-invalid-search-functionality----internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_04_05_06_07_08_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_TC_01_04_05_06_07_08\" \"Verify date format valida and in valid functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User type \"open\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify date format on internal",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User search for Invalid data \"as55d5wad\" and verify mess \" No records found.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User search for valid data \"Open\" and verify",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Next status and click on under review",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Submit button internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify mess \"Issue Ticket updated successfully\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_TC_01_04_05_06_07_08",
      "offset": 48
    },
    {
      "val": "Verify date format valida and in valid functionality",
      "offset": 91
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2216904425,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 1710715827,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 42892431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "open",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 3691377171,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_date_format_on_internal()"
});
formatter.result({
  "duration": 2095521446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "as55d5wad",
      "offset": 30
    },
    {
      "val": " No records found.",
      "offset": 58
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_search_for_Invalid_data_and_verify_mess(String,String)"
});
formatter.result({
  "duration": 2276479224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_search_for_valid_data_and_verify(String)"
});
formatter.result({
  "duration": 1232989193,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2222487442,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Next_status_and_click_on_under_review()"
});
formatter.result({
  "duration": 2568255822,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Submit_button_internal_portal()"
});
formatter.result({
  "duration": 936855842,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 3786798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Issue Ticket updated successfully",
      "offset": 18
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_mess(String)"
});
formatter.result({
  "duration": 5201715914,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 42394289,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1311955655,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 8657083,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 1031262735,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 706403814,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify EFD Related ticket, General Query, System Related ticket, Payment Related Issue Type",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_09_10_11_12_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Helpdesk menu on internal portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User type \"\u003cData1\u003e\" on internal",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify the issue type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 36,
      "value": "#    And User click on Dashboard"
    }
  ],
  "line": 39,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Data1"
      ],
      "line": 40,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;1"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_09_10_11_12_01",
        "Verify EFD Related issue",
        "EFD Related issue"
      ],
      "line": 41,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;2"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_09_10_11_12_02",
        "Verify General Query",
        "General Query"
      ],
      "line": 42,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;3"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_09_10_11_12_03",
        "Verify System Related issue",
        "System Related issue"
      ],
      "line": 43,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;4"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_09_10_11_12_04",
        "Verify Payment Related",
        "Payment Related"
      ],
      "line": 44,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516208734,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify EFD Related ticket, General Query, System Related ticket, Payment Related Issue Type",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_09_10_11_12_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_09_10_11_12_01\" \"Verify EFD Related issue\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User type \"EFD Related issue\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify the issue type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_09_10_11_12_01",
      "offset": 48
    },
    {
      "val": "Verify EFD Related issue",
      "offset": 85
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2125472994,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 1034089154,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 41792984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EFD Related issue",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 1495996619,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2233090645,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_the_issue_type()"
});
formatter.result({
  "duration": 21732192,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1256889218,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 13816053,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 625217368,
  "status": "passed"
});
formatter.before({
  "duration": 5523426675,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify EFD Related ticket, General Query, System Related ticket, Payment Related Issue Type",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_09_10_11_12_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_09_10_11_12_02\" \"Verify General Query\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User type \"General Query\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify the issue type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_09_10_11_12_02",
      "offset": 48
    },
    {
      "val": "Verify General Query",
      "offset": 85
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2132755909,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 1032760583,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 30570521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General Query",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 1100473236,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2282560101,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_the_issue_type()"
});
formatter.result({
  "duration": 29142208,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1273887059,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 11935479,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 628991056,
  "status": "passed"
});
formatter.before({
  "duration": 5519345780,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify EFD Related ticket, General Query, System Related ticket, Payment Related Issue Type",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_09_10_11_12_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_09_10_11_12_03\" \"Verify System Related issue\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User type \"System Related issue\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify the issue type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_09_10_11_12_03",
      "offset": 48
    },
    {
      "val": "Verify System Related issue",
      "offset": 85
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2135370874,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 1041011002,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 40559310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Related issue",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 1954967664,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2305870219,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_the_issue_type()"
});
formatter.result({
  "duration": 18139180,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1320509576,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 8423971,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 634460367,
  "status": "passed"
});
formatter.before({
  "duration": 5521504209,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify EFD Related ticket, General Query, System Related ticket, Payment Related Issue Type",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-efd-related-ticket,-general-query,-system-related-ticket,-payment-related-issue-type;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_09_10_11_12_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_09_10_11_12_04\" \"Verify Payment Related\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User type \"Payment Related\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify the issue type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_09_10_11_12_04",
      "offset": 48
    },
    {
      "val": "Verify Payment Related",
      "offset": 85
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2132585207,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 1033937830,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 46956228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Related",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 2035830658,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2334397444,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_the_issue_type()"
});
formatter.result({
  "duration": 16406510,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1347063038,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 9619457,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 656042090,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 46,
      "value": "# 15 covered in tax payer"
    }
  ],
  "line": 48,
  "name": "Verify Under Review , Request information, close",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-under-review-,-request-information,-close",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@TC_13_14_16_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User click on Helpdesk menu on internal portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User type \"\u003cData\u003e\" on internal",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User see ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on Next status and click on under review",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User type ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User see status changed to \"\u003cUR\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on Next status and click on Request Information",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User type comment for Request Information \"\u003ccomment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User type ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User see status changed to \"\u003cRI\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User click on Next status and click on close status",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User type ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User see status changed to \"\u003cCl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-under-review-,-request-information,-close;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Data",
        "UR",
        "RI",
        "Cl",
        "comment"
      ],
      "line": 78,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-under-review-,-request-information,-close;;1"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_TC_13_14_16",
        "Verify EFD Related issue",
        "Open",
        "Under Review",
        "Request Information",
        "Close",
        "Need more information"
      ],
      "line": 79,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-under-review-,-request-information,-close;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5526501026,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Verify Under Review , Request information, close",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-under-review-,-request-information,-close;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@TC_13_14_16_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_TC_13_14_16\" \"Verify EFD Related issue\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User type \"Open\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User see ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on Next status and click on under review",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User type ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User see status changed to \"Under Review\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on Next status and click on Request Information",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User type comment for Request Information \"Need more information\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User type ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User see status changed to \"Request Information\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User click on Next status and click on close status",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User type ticket id",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User see status changed to \"Close\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_TC_13_14_16",
      "offset": 48
    },
    {
      "val": "Verify EFD Related issue",
      "offset": 82
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2300212823,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 39741422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 643343438,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_ticket_id()"
});
formatter.result({
  "duration": 1044668989,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2300511480,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Next_status_and_click_on_under_review()"
});
formatter.result({
  "duration": 2469162453,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "duration": 5148237378,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1279200487,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_ticket_id()"
});
formatter.result({
  "duration": 1885673094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Under Review",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_see_status_changed_to(String)"
});
formatter.result({
  "duration": 1050798026,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2282197893,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Next_status_and_click_on_Request_Information()"
});
formatter.result({
  "duration": 1361202827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Need more information",
      "offset": 43
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_comment_for_Request_Information(String)"
});
formatter.result({
  "duration": 11919641987,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "duration": 5151026465,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1323436307,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_ticket_id()"
});
formatter.result({
  "duration": 80393636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Information",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_see_status_changed_to(String)"
});
formatter.result({
  "duration": 1067068886,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2556473377,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Next_status_and_click_on_close_status()"
});
formatter.result({
  "duration": 1450033827,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "duration": 2462628461,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1275621439,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_ticket_id()"
});
formatter.result({
  "duration": 65483834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Close",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_see_status_changed_to(String)"
});
formatter.result({
  "duration": 1063677639,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_frame_is_default_in_internal()"
});
formatter.result({
  "duration": 22974414,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 362319088,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 670603363,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 81,
      "value": "# For this the paymemnt of should be done for another user using another tax payer name (i.e through ETL)"
    }
  ],
  "line": 83,
  "name": "Validate the status Request Adjustment when issue type is Payment related and Adjustment In Progress to Close",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-status-request-adjustment-when-issue-type-is-payment-related-and-adjustment-in-progress-to-close",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@TC_17_19_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "User click on Helpdesk menu on internal portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 86,
      "value": "# before make a payment for tax payer one (for anothe via ETL)"
    },
    {
      "line": 87,
      "value": "# than create issue ticket of tax payer two(generate issue id) and type in data"
    }
  ],
  "line": 88,
  "name": "User type \"\u003cData\u003e\" on internal",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User get request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User click on Next status and click on under review",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User click on Next status and click on Request Adjustement",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User click on Submit button internal portal and navigate to Account Adjustement",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User click on Approved by and select officier \"\u003cofficier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User type data in \"\u003cnitva\u003e\" account adjustement and clik on search button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User select radio button and click on select",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User click on Add button and select radio and click on select",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User select Reason dropdown and click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User type request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User see status changed to \"\u003cAIP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User click on Account Adjustment and select case id and type \"\u003cData\u003e\" and clik on search",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User click on eye and navigate to account adjustement page and click on approve button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User wait for Account Adjustment page",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on Helpdesk",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User type request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User see status changed to \"\u003cCL\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-status-request-adjustment-when-issue-type-is-payment-related-and-adjustment-in-progress-to-close;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Data",
        "officier",
        "nitva",
        "AIP",
        "CL"
      ],
      "line": 113,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-status-request-adjustment-when-issue-type-is-payment-related-and-adjustment-in-progress-to-close;;1"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_TC_17_19",
        "Verify EFD Related issue",
        "H19011800000038",
        "drp_off1",
        "20190118050708529",
        "Adjustment In Progress",
        "Close"
      ],
      "line": 114,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-status-request-adjustment-when-issue-type-is-payment-related-and-adjustment-in-progress-to-close;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5506028155,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Validate the status Request Adjustment when issue type is Payment related and Adjustment In Progress to Close",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-status-request-adjustment-when-issue-type-is-payment-related-and-adjustment-in-progress-to-close;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@TC_17_19_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_TC_17_19\" \"Verify EFD Related issue\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 86,
      "value": "# before make a payment for tax payer one (for anothe via ETL)"
    },
    {
      "line": 87,
      "value": "# than create issue ticket of tax payer two(generate issue id) and type in data"
    }
  ],
  "line": 88,
  "name": "User type \"H19011800000038\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User get request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User click on Next status and click on under review",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User click on Next status and click on Request Adjustement",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User click on Submit button internal portal and navigate to Account Adjustement",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User click on Approved by and select officier \"drp_off1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User type data in \"20190118050708529\" account adjustement and clik on search button",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User select radio button and click on select",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User click on Add button and select radio and click on select",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "User select Reason dropdown and click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User type request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User see status changed to \"Adjustment In Progress\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User see frame is default in internal",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User click on Account Adjustment and select case id and type \"H19011800000038\" and clik on search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User click on eye and navigate to account adjustement page and click on approve button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User wait for Account Adjustment page",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on Helpdesk",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User type request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User see status changed to \"Close\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_TC_17_19",
      "offset": 48
    },
    {
      "val": "Verify EFD Related issue",
      "offset": 79
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 4166237204,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 67921542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H19011800000038",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 399395389,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_get_request_adj_id()"
});
formatter.result({
  "duration": 38804126,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2154039830,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Next_status_and_click_on_under_review()"
});
formatter.result({
  "duration": 2504117657,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "duration": 5071839999,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Next_status_and_click_on_Request_Adjustement()"
});
formatter.result({
  "duration": 1369831412,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_and_navigate_to_Account_Adjustement()"
});
formatter.result({
  "duration": 5911321178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_off1",
      "offset": 47
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Approved_by_and_select_officier(String)"
});
formatter.result({
  "duration": 9149813595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20190118050708529",
      "offset": 19
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_data_in_account_adjustement_and_clik_on_search_button(String)"
});
formatter.result({
  "duration": 2353441147,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_select_radio_button_and_click_on_select()"
});
formatter.result({
  "duration": 3813273681,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Add_button_and_select_radio_and_click_on_select()"
});
formatter.result({
  "duration": 11096309127,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_select_Reason_dropdown_and_click_on_Submit_button()"
});
formatter.result({
  "duration": 6358319413,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 858421434,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"iframe\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\FRANKE~1.MEH\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54848}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 63a76e1cc2e29e8766332b9c94c94d38\n*** Element info: {Using\u003did, value\u003diframe}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame(DV_3893_TaxPayer_Help_Desk.java:761)\r\n\tat ✽.And User enter in add new button frame(features/DV_3893_TaxOfficer_Help_Desk_Internal.feature:100)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_request_adj_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Adjustment In Progress",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_see_status_changed_to(String)"
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
      "val": "H19011800000038",
      "offset": 62
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Account_Adjustment_and_select_case_id_and_type_and_clik_on_search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_eye_and_navigate_to_account_adjustement_page_and_click_on_approve_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_wait_for_Account_Adjustment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Helpdesk()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_request_adj_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Close",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_see_status_changed_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 2595858005,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 117,
  "name": "Validate the Next status change from Request Adjustment  to Perform Adjustment",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-next-status-change-from-request-adjustment--to-perform-adjustment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@TC_18_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "User click on Helpdesk menu on internal portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 119,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User type \"\u003cData\u003e\" on internal",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User get request adj id",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 122,
      "value": "#   And User click on edit buton internal portal"
    },
    {
      "line": 123,
      "value": "#   And User click on Next status and click on under review"
    },
    {
      "line": 124,
      "value": "#    And User click on Submit button internal portal"
    },
    {
      "line": 125,
      "value": "#    And User click on Helpdesk"
    },
    {
      "line": 126,
      "value": "#    And User enter in add new button frame"
    },
    {
      "line": 127,
      "value": "#    And User type \"\u003cData\u003e\" on internal"
    }
  ],
  "line": 128,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User click on Next status and click on Perform Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User type request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User see status changed to \"\u003cPA\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 135,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-next-status-change-from-request-adjustment--to-perform-adjustment;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Data",
        "PA"
      ],
      "line": 136,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-next-status-change-from-request-adjustment--to-perform-adjustment;;1"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_18",
        "Verify Perform Adjustment Status",
        "Request Adjustment",
        "Perform Adjustment"
      ],
      "line": 137,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-next-status-change-from-request-adjustment--to-perform-adjustment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5521752140,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "Validate the Next status change from Request Adjustment  to Perform Adjustment",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;validate-the-next-status-change-from-request-adjustment--to-perform-adjustment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 116,
      "name": "@TC_18_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_18\" \"Verify Perform Adjustment Status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 119,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User type \"Request Adjustment\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User get request adj id",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 122,
      "value": "#   And User click on edit buton internal portal"
    },
    {
      "line": 123,
      "value": "#   And User click on Next status and click on under review"
    },
    {
      "line": 124,
      "value": "#    And User click on Submit button internal portal"
    },
    {
      "line": 125,
      "value": "#    And User click on Helpdesk"
    },
    {
      "line": 126,
      "value": "#    And User enter in add new button frame"
    },
    {
      "line": 127,
      "value": "#    And User type \"\u003cData\u003e\" on internal"
    }
  ],
  "line": 128,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User click on Next status and click on Perform Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User type request adj id",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User see status changed to \"Perform Adjustment\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_18",
      "offset": 48
    },
    {
      "val": "Verify Perform Adjustment Status",
      "offset": 73
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2181815566,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 56762345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Adjustment",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 471463372,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_get_request_adj_id()"
});
formatter.result({
  "duration": 39028975,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "duration": 2239825262,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Next_status_and_click_on_Perform_Adjustment()"
});
formatter.result({
  "duration": 2608036856,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "duration": 1391742286,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "duration": 1475130193,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_request_adj_id()"
});
formatter.result({
  "duration": 1494218351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Perform Adjustment",
      "offset": 28
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_see_status_changed_to(String)"
});
formatter.result({
  "duration": 1064536280,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 649201176,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 141,
  "name": "Verify Priority field , Communication, download file and re-assign ticket -fx taxofficer",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-priority-field-,-communication,-download-file-and-re-assign-ticket--fx-taxofficer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 140,
      "name": "@TC_22_23_24_21_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 142,
  "name": "User click on Helpdesk menu on internal portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User type \"\u003cData\u003e\" on internal",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User see ticket id for officier",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click on Priority and select \"\u003cprio\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User verify mess \"\u003cVerifyMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User type comment \"\u003ccomm\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User click on chat \"\u003cpublic\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User click on browse button and select file on internal \"\u003cfile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User see file \"\u003cfile\u003e\" is uploaded and click on download button and verify",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User click on Re-Asign to and select another officer \"\u003cofficier\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User type ticket id and see mess and verify mess \" No records found.\"",
  "keyword": "And "
});
formatter.examples({
  "line": 161,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-priority-field-,-communication,-download-file-and-re-assign-ticket--fx-taxofficer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Data",
        "prio",
        "comm",
        "public",
        "file",
        "officier",
        "mess",
        "VerifyMess"
      ],
      "line": 162,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-priority-field-,-communication,-download-file-and-re-assign-ticket--fx-taxofficer;;1"
    },
    {
      "cells": [
        "TaxOfficer_Helpdesk_TC_22_23_24_21",
        "Verify EFD Related issue",
        "open",
        "drp_Low",
        "Priority Changed",
        "rad_public",
        "BankFile.xlsx",
        "drp_op_DJ",
        "No records found.",
        "Issue Ticket updated successfully"
      ],
      "line": 163,
      "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-priority-field-,-communication,-download-file-and-re-assign-ticket--fx-taxofficer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34257898612,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "Verify Priority field , Communication, download file and re-assign ticket -fx taxofficer",
  "description": "",
  "id": "user-is-on-tax-officer-internal-portal-help-desk;verify-priority-field-,-communication,-download-file-and-re-assign-ticket--fx-taxofficer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 140,
      "name": "@TC_22_23_24_21_TaxOfficer_3893"
    }
  ]
});
formatter.step({
  "line": 142,
  "name": "User click on Helpdesk menu on internal portal \"TaxOfficer_Helpdesk_TC_22_23_24_21\" \"Verify EFD Related issue\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "User navigate to helpdesk page",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User enter in add new button frame",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User type \"open\" on internal",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User see ticket id for officier",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User click on edit buton internal portal",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click on Priority and select \"drp_Low\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User verify mess \"Issue Ticket updated successfully\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User type comment \"Priority Changed\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User click on chat \"rad_public\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User click on browse button and select file on internal \"BankFile.xlsx\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User see file \"BankFile.xlsx\" is uploaded and click on download button and verify",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User click on Re-Asign to and select another officer \"drp_op_DJ\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User click on Submit button internal portal officer",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User click on cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User type ticket id and see mess and verify mess \" No records found.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TaxOfficer_Helpdesk_TC_22_23_24_21",
      "offset": 48
    },
    {
      "val": "Verify EFD Related issue",
      "offset": 85
    }
  ],
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_Helpdesk_menu_on_internal_portal(String,String)"
});
formatter.result({
  "duration": 2130050891,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_navigate_to_helpdesk_page()"
});
formatter.result({
  "duration": 3240263845,
  "status": "passed"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_enter_in_add_new_button_frame()"
});
formatter.result({
  "duration": 994698541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "open",
      "offset": 11
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(String)"
});
formatter.result({
  "duration": 60473467912,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //input[@placeholder\u003d\"Search Issue\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.waitFor(HelperBase.java:95)\r\n\tat org.drc.vat.StepDefinitions.DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(DV_3893_TaxOfficer_Help_Desk.java:33)\r\n\tat ✽.And User type \"open\" on internal(features/DV_3893_TaxOfficer_Help_Desk_Internal.feature:145)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //input[@placeholder\u003d\"Search Issue\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-23\u0027, ip: \u0027172.16.3.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.waitFor(HelperBase.java:95)\r\n\tat org.drc.vat.StepDefinitions.DV_3893_TaxOfficer_Help_Desk.user_type_on_internal(DV_3893_TaxOfficer_Help_Desk.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_ticket_id_for_officier()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_edit_buton_internal_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Low",
      "offset": 35
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Priority_and_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Issue Ticket updated successfully",
      "offset": 18
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_verify_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority Changed",
      "offset": 19
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_comment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rad_public",
      "offset": 20
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_chat(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BankFile.xlsx",
      "offset": 57
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_browse_button_and_select_file_on_internal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BankFile.xlsx",
      "offset": 15
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_see_file_is_uploaded_and_click_on_download_button_and_verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_op_DJ",
      "offset": 54
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Re_Asign_to_and_select_another_officer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxOfficer_Help_Desk.user_click_on_Submit_button_internal_portal_officer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_3893_TaxPayer_Help_Desk.user_click_on_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " No records found.",
      "offset": 50
    }
  ],
  "location": "DV_3893_TaxOfficer_Help_Desk.user_type_ticket_id_and_see_mess_and_verify_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 698569749,
  "status": "passed"
});
});