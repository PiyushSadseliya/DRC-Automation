$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/32_0DebtRecord.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Debt Record in 0-3 Months age bracket",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "DRC Tax Portal Login",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Login \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "email",
        "password"
      ],
      "line": 28,
      "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login;;1"
    },
    {
      "cells": [
        "e-file_Login_001",
        "Login into tax payer",
        "ThreeFeb@mt2015.com",
        "Test@123"
      ],
      "line": 29,
      "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10038774403,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "DRC Tax Portal Login",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;drc-tax-portal-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Login \"e-file_Login_001\" \"Login into tax payer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Enter email \"ThreeFeb@mt2015.com\" and  password \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Click on SignIn",
  "keyword": "And "
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
  "duration": 144197974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ThreeFeb@mt2015.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 54
    }
  ],
  "location": "DV_2390_e_filing.user_Enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 15715955128,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_Click_on_SignIn()"
});
formatter.result({
  "duration": 56996,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 799428387,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "E-filing in the age bracket of 0-3 Months for debt",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@TC_02_debtMan"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User with email address\"\u003cemail\u003e\"does efiling in age bracket 0-3 month\"\u003c1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
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
      "line": 40,
      "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;;1"
    },
    {
      "cells": [
        "E-filing in the age bracket of 0-3 Months",
        "50000",
        "ThreeFeb@mt2015.com"
      ],
      "line": 41,
      "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518977115,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "E-filing in the age bracket of 0-3 Months for debt",
  "description": "",
  "id": "debt-record-in-0-3-months-age-bracket;e-filing-in-the-age-bracket-of-0-3-months-for-debt;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@TC_02_debtMan"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"E-filing in the age bracket of 0-3 Months\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User with email address\"ThreeFeb@mt2015.com\"does efiling in age bracket 0-3 month\"50000\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 406951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ThreeFeb@mt2015.com",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 74
    },
    {
      "val": "50000",
      "offset": 82
    }
  ],
  "location": "DebtManagementLandingScreen.user_with_email_address_does_efiling_in_age_bracket_month(String,int,int,String)"
});
formatter.result({
  "duration": 14309124838,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5741553758,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9211689545,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "duration": 45162652436,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 730129187,
  "status": "passed"
});
formatter.uri("features/32_DebtManagementLandingScreen.feature");
formatter.feature({
  "line": 2,
  "name": "Debt Management - Landing screen to show the grouped (according to duration of the debt and priority of collection) list of tax payer that are in debt",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate whether the DGI Supervisor/Admin is able to save the date and data internal portal",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-whether-the-dgi-supervisor/admin-is-able-to-save-the-date-and-data-internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Mtc02"
    },
    {
      "line": 4,
      "name": "@Save"
    },
    {
      "line": 4,
      "name": "@Button"
    },
    {
      "line": 4,
      "name": "@Previous"
    },
    {
      "line": 4,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Select date \"\u003cdate\u003e\" from Upto date",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on zero to three months Pending amount Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Previuos button on Debt Management pending amount list",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Save button on Debt Management Landing Screen an click on logout and again login to see last Saved Data",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-whether-the-dgi-supervisor/admin-is-able-to-save-the-date-and-data-internal-portal;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password",
        "date"
      ],
      "line": 14,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-whether-the-dgi-supervisor/admin-is-able-to-save-the-date-and-data-internal-portal;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_01",
        "Validate whether the DGI Supervisor/Admin is able to save the date and data",
        "Admin",
        "ketan.prajapati",
        "admin",
        "2018-09-6"
      ],
      "line": 15,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-whether-the-dgi-supervisor/admin-is-able-to-save-the-date-and-data-internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27779541900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate whether the DGI Supervisor/Admin is able to save the date and data internal portal",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-whether-the-dgi-supervisor/admin-is-able-to-save-the-date-and-data-internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Save"
    },
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 4,
      "name": "@Mtc02"
    },
    {
      "line": 4,
      "name": "@Button"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 4,
      "name": "@comp"
    },
    {
      "line": 4,
      "name": "@Previous"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Select date \"2018-09-6\" from Upto date",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on zero to three months Pending amount Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Previuos button on Debt Management pending amount list",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Save button on Debt Management Landing Screen an click on logout and again login to see last Saved Data",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5864543222,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2260065214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-09-6",
      "offset": 13
    }
  ],
  "location": "DebtManagementLandingScreen.select_date_from_Upto_date(String)"
});
formatter.result({
  "duration": 14156098747,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.click_on_zero_to_three_months_Pending_amount_Link()"
});
formatter.result({
  "duration": 7468312484,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.click_on_Previuos_button_on_Debt_Management_pending_amount_list()"
});
formatter.result({
  "duration": 3269562179,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.click_on_Save_button_on_Debt_Management_Landing_Screen_an_click_on_logout_and_again_login_to_see_last_Saved_Data()"
});
formatter.result({
  "duration": 9490839597,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 711834315,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate the Upto date  filter on Debt Management dashboard",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-upto-date--filter-on-debt-management-dashboard",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Mtc03"
    },
    {
      "line": 17,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "select Todays date todays date should be displayed and select previous date \"\u003cprevdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "select future date it should be disabled",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-upto-date--filter-on-debt-management-dashboard;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password",
        "prevdate"
      ],
      "line": 25,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-upto-date--filter-on-debt-management-dashboard;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_02",
        "Validate the Upto date  filter on Debt Management dashboard",
        "Admin",
        "ketan.prajapati",
        "admin",
        "2018-09-6"
      ],
      "line": 26,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-upto-date--filter-on-debt-management-dashboard;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515750570,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate the Upto date  filter on Debt Management dashboard",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-upto-date--filter-on-debt-management-dashboard;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 17,
      "name": "@Mtc03"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 17,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "select Todays date todays date should be displayed and select previous date \"2018-09-6\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "select future date it should be disabled",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5854615083,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2133113386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-09-6",
      "offset": 77
    }
  ],
  "location": "DebtManagementLandingScreen.select_Todays_date_todays_date_should_be_displayed_and_select_previous_date(String)"
});
formatter.result({
  "duration": 231525305,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.select_future_date_it_should_be_disabled()"
});
formatter.result({
  "duration": 61258831821,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 716672138,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Validate the Age Brackets column",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-age-brackets-column",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@Mtc05"
    },
    {
      "line": 28,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Age Brackets column shoul display as \"24 Months and Above\"\"13-24 Months\"\"7-12 Months\"\"4-6 Months\"\"0-3 Months\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-age-brackets-column;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password"
      ],
      "line": 35,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-age-brackets-column;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_03",
        "Validate the Age Brackets column",
        "Admin",
        "ketan.prajapati",
        "admin"
      ],
      "line": 36,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-age-brackets-column;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518382646,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validate the Age Brackets column",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-age-brackets-column;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 28,
      "name": "@Mtc05"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 28,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Age Brackets column shoul display as \"24 Months and Above\"\"13-24 Months\"\"7-12 Months\"\"4-6 Months\"\"0-3 Months\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5858332649,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2234263109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24 Months and Above",
      "offset": 38
    },
    {
      "val": "13-24 Months",
      "offset": 59
    },
    {
      "val": "7-12 Months",
      "offset": 73
    },
    {
      "val": "4-6 Months",
      "offset": 86
    },
    {
      "val": "0-3 Months",
      "offset": 98
    }
  ],
  "location": "DebtManagementLandingScreen.age_Brackets_column_shoul_display_as(String,String,String,String,String)"
});
formatter.result({
  "duration": 164986708,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 726735643,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 38,
      "value": "#@Mtc06"
    },
    {
      "line": 39,
      "value": "#Scenario Outline: Validate the debt amount in Total(FC) column for all the age brackets"
    },
    {
      "line": 40,
      "value": "# Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 41,
      "value": "#When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 42,
      "value": "#Examples:"
    },
    {
      "line": 43,
      "value": "#| Test Case ID             | Description                                                           | officer | uname           | password |"
    },
    {
      "line": 44,
      "value": "#| DRC_ATC_DebtManagemnt_04 | Validate the debt amount in Total(FC) column for all the age brackets | Admin   | ketan.prajapati | admin    |"
    }
  ],
  "line": 46,
  "name": "Validate the Pending (FC) column amount for particular age bracket when there is no pending amount",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-pending-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@Mtc07"
    },
    {
      "line": 45,
      "name": "@NoPending"
    },
    {
      "line": 45,
      "name": "@Disabled"
    },
    {
      "line": 45,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "if there is no pending amount displayed amount should be  0 with disabled hyperlink",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-pending-amount;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password"
      ],
      "line": 52,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-pending-amount;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_05",
        "Validate the Pending (FC) column amount for particular age bracket when there is no pending amount",
        "Admin",
        "ketan.prajapati",
        "admin"
      ],
      "line": 53,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-pending-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5517896471,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Validate the Pending (FC) column amount for particular age bracket when there is no pending amount",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-pending-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@Disabled"
    },
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 45,
      "name": "@NoPending"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 45,
      "name": "@Mtc07"
    },
    {
      "line": 45,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "if there is no pending amount displayed amount should be  0 with disabled hyperlink",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5845096175,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2136967173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 58
    }
  ],
  "location": "DebtManagementLandingScreen.if_there_is_no_pending_amount_displayed_amount_should_be_with_disabled_hyperlink(int)"
});
formatter.result({
  "duration": 162722256,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 746035640,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 55,
      "value": "#### all the Pending Amount cant be assigned for which may affect the records"
    },
    {
      "line": 56,
      "value": "#  @Mtc08"
    },
    {
      "line": 57,
      "value": "#  Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when all pending debt amount is assigned to collection officer internal portal"
    },
    {
      "line": 58,
      "value": "#   Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 59,
      "value": "# When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 60,
      "value": "# Then Assign all the pending amount to collection officer then pending amount should be zero"
    },
    {
      "line": 61,
      "value": "#Examples:"
    },
    {
      "line": 62,
      "value": "#| Test Case ID             | Description                                                                                                                       | officer | uname           | password |"
    },
    {
      "line": 63,
      "value": "#| DRC_ATC_DebtManagemnt_06 | Validate the Pending (FC) column amount for particular age bracket when all pending debt amount is assigned to collection officer | Admin   | ketan.prajapati | admin    |"
    },
    {
      "line": 65,
      "value": "#@Mtc09"
    },
    {
      "line": 66,
      "value": "# Scenario Outline: Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers internal portal"
    },
    {
      "line": 67,
      "value": "#   Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 68,
      "value": "#  When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 69,
      "value": "#  Then Assign all the pending amount to collection officer for age bracket\"\u003cageing\u003e\" then pending amount should be zero"
    },
    {
      "line": 70,
      "value": "# Examples:"
    },
    {
      "line": 71,
      "value": "# | Test Case ID             | Description                                                                                                                   | officer | uname           | password | ageing              |"
    },
    {
      "line": 72,
      "value": "# | DRC_ATC_DebtManagemnt_07 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    | 24 Months and Above |"
    },
    {
      "line": 74,
      "value": "# @Mtc10"
    },
    {
      "line": 75,
      "value": "# Scenario Outline: Validate the Pending (FC) column amount for   particular age bracket when pending debt amount is partially assigned to collection officers internal portal"
    },
    {
      "line": 76,
      "value": "#  Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 77,
      "value": "#  When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 78,
      "value": "#  Then Assign the pending amount to the collection officer then partial amount assigned should be reflected in pending column\"\u003cageing\u003e\"\"\u003cpendingamount\u003e\""
    },
    {
      "line": 79,
      "value": "#  Examples:"
    },
    {
      "line": 80,
      "value": "#    | Test Case ID             | Description                                                                                                                   | officer | uname           | password | ageing     | apendingamount | bassignedamount   | afterassigne      |"
    },
    {
      "line": 81,
      "value": "#    | DRC_ATC_DebtManagemnt_08 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    | 0-3 Months |        6142217 | 376317983878646.9 | 376317983883746.9 |"
    },
    {
      "line": 83,
      "value": "# @Mtc11"
    },
    {
      "line": 84,
      "value": "#Scenario Outline: Validate the Assigned (FC) column amount for particular age bracket when pending debt amount is partially assigned to collection officers internal portal"
    },
    {
      "line": 85,
      "value": "# Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 86,
      "value": "#When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 87,
      "value": "#Then Assign the pending amount to the collection officer then partial amount assigned should be reflected in assignned column\"\u003cageing\u003e\"\"\u003caassigne\u003e\""
    },
    {
      "line": 88,
      "value": "#  Examples:"
    },
    {
      "line": 89,
      "value": "#   | Test Case ID             | Description                                                                                                                   | officer | uname           | password | ageing     | bpendingamount | bassignedamount   | aassigne      |apending|"
    },
    {
      "line": 90,
      "value": "#  | DRC_ATC_DebtManagemnt_09 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    | 0-3 Months |        6142217 | 376317983878646.9 | 376317983884096.9 |6137155|"
    },
    {
      "line": 92,
      "value": "#  @Mtc12 @comp"
    },
    {
      "line": 93,
      "value": "# Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount internal portal"
    },
    {
      "line": 94,
      "value": "#  Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 95,
      "value": "# When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 96,
      "value": "#Then if there is no assign amount then total amount should be same as pending amount"
    },
    {
      "line": 97,
      "value": "#Examples:"
    },
    {
      "line": 98,
      "value": "# | Test Case ID             | Description                                                                                                                   | officer | uname           | password |"
    },
    {
      "line": 99,
      "value": "#| DRC_ATC_DebtManagemnt_10 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    |"
    }
  ],
  "line": 101,
  "name": "Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-assigned-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 100,
      "name": "@Mtc13"
    },
    {
      "line": 100,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "if there is no assign amount then total amount should be same as pending amount",
  "keyword": "Then "
});
formatter.examples({
  "line": 106,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-assigned-amount;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password"
      ],
      "line": 107,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-assigned-amount;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_11",
        "Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount",
        "Admin",
        "ketan.prajapati",
        "admin"
      ],
      "line": 108,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-assigned-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516502632,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-column-amount-for-particular-age-bracket-when-there-is-no-assigned-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 100,
      "name": "@Mtc13"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 100,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "if there is no assign amount then total amount should be same as pending amount",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5844865626,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2229705992,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.if_there_is_no_assign_amount_then_total_amount_should_be_same_as_pending_amount()"
});
formatter.result({
  "duration": 176944476,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 717651045,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 110,
      "value": "#@Mtc14 @mtc15 @mtc16"
    },
    {
      "line": 111,
      "value": "# Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when objection is raised by the tax payer internal portal"
    },
    {
      "line": 112,
      "value": "#  Given DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 113,
      "value": "# When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 114,
      "value": "#Then Verify the amount displayed in pending (FC),assigned (FC) column of particular age bracket after user has raised objection and it has been assigned ofr debt collection\"\u003cageing\u003e\"\"\u003cbpendingamount\u003e\"\"\u003cbassignedamount\u003e\"\"\u003cafterassigne\u003e\""
    },
    {
      "line": 115,
      "value": "#Examples:"
    },
    {
      "line": 116,
      "value": "# | Test Case ID             | Description                                                                                                  | officer | uname           | password | ageing     | bpendingamount | bassignedamount   | afterassigne      |"
    },
    {
      "line": 117,
      "value": "#| DRC_ATC_DebtManagemnt_18 | Validate the Pending (FC) column amount for particular age bracket when objection is raised by the tax payer | Admin   | ketan.prajapati | admin    | 0-3 Months |        6142217 | 376317983878646.9 | 376317983883746.9 |"
    }
  ],
  "line": 119,
  "name": "Validate the Pending (FC) amount hyper link for all age brackets",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 118,
      "name": "@Mtc17"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "click on the hyper link amount under pending (FC) column for \"\u003cpending\u003e\" age bracket",
  "keyword": "Then "
});
formatter.examples({
  "line": 124,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password",
        "pending"
      ],
      "line": 125,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_12",
        "Validate the Pending (FC) amount hyper link for all age brackets",
        "Admin",
        "ketan.prajapati",
        "admin",
        "24 Months and Above"
      ],
      "line": 126,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;2"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_13",
        "Validate the Pending (FC) amount hyper link for all age brackets",
        "Admin",
        "ketan.prajapati",
        "admin",
        "13-24 Months"
      ],
      "line": 127,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;3"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_14",
        "Validate the Pending (FC) amount hyper link for all age brackets",
        "Admin",
        "ketan.prajapati",
        "admin",
        "7-12 Months"
      ],
      "line": 128,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;4"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_15",
        "Validate the Pending (FC) amount hyper link for all age brackets",
        "Admin",
        "ketan.prajapati",
        "admin",
        "4-6 Months"
      ],
      "line": 129,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;5"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_16",
        "Validate the Pending (FC) amount hyper link for all age brackets",
        "Admin",
        "ketan.prajapati",
        "admin",
        "0-3 Months"
      ],
      "line": 130,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516795021,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Validate the Pending (FC) amount hyper link for all age brackets",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 118,
      "name": "@Mtc17"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "click on the hyper link amount under pending (FC) column for \"24 Months and Above\" age bracket",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5847208734,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2127694488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24 Months and Above",
      "offset": 62
    }
  ],
  "location": "DebtManagementLandingScreen.click_on_the_hyper_link_amount_under_pending_FC_column_for_age_bracket(String)"
});
formatter.result({
  "duration": 110379662,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 735661222,
  "status": "passed"
});
formatter.before({
  "duration": 5510329962,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Validate the Pending (FC) amount hyper link for all age brackets",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 118,
      "name": "@Mtc17"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "click on the hyper link amount under pending (FC) column for \"13-24 Months\" age bracket",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5845775568,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2130229671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13-24 Months",
      "offset": 62
    }
  ],
  "location": "DebtManagementLandingScreen.click_on_the_hyper_link_amount_under_pending_FC_column_for_age_bracket(String)"
});
formatter.result({
  "duration": 145151233,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 738078709,
  "status": "passed"
});
formatter.before({
  "duration": 5516869972,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Validate the Pending (FC) amount hyper link for all age brackets",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 118,
      "name": "@Mtc17"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "click on the hyper link amount under pending (FC) column for \"7-12 Months\" age bracket",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5850073354,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2133200874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7-12 Months",
      "offset": 62
    }
  ],
  "location": "DebtManagementLandingScreen.click_on_the_hyper_link_amount_under_pending_FC_column_for_age_bracket(String)"
});
formatter.result({
  "duration": 15381262724,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 741491062,
  "status": "passed"
});
formatter.before({
  "duration": 5518825506,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Validate the Pending (FC) amount hyper link for all age brackets",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 118,
      "name": "@Mtc17"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "click on the hyper link amount under pending (FC) column for \"4-6 Months\" age bracket",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5857186459,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2156050016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4-6 Months",
      "offset": 62
    }
  ],
  "location": "DebtManagementLandingScreen.click_on_the_hyper_link_amount_under_pending_FC_column_for_age_bracket(String)"
});
formatter.result({
  "duration": 8496798818,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 784255472,
  "status": "passed"
});
formatter.before({
  "duration": 5514545388,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Validate the Pending (FC) amount hyper link for all age brackets",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-pending-(fc)-amount-hyper-link-for-all-age-brackets;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 118,
      "name": "@Mtc17"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "click on the hyper link amount under pending (FC) column for \"0-3 Months\" age bracket",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5848070798,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2153880746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 62
    }
  ],
  "location": "DebtManagementLandingScreen.click_on_the_hyper_link_amount_under_pending_FC_column_for_age_bracket(String)"
});
formatter.result({
  "duration": 17010645150,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 755423173,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 133,
  "name": "Validate the amount in Total Debt (FC) for Total (FC),Pending (FC),and Assigned (FC) columns",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-amount-in-total-debt-(fc)-for-total-(fc),pending-(fc),and-assigned-(fc)-columns",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 132,
      "name": "@Mtc18"
    },
    {
      "line": 132,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "Total Debt (FC) amount of Total (FC) column should be the sum of all amounts",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "Total Debt (FC) amount of Pending (FC) column should be the sum of all amounts",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Total Debt (FC) amount of Assigned (FC) column should be the sum of all amounts",
  "keyword": "Then "
});
formatter.examples({
  "line": 140,
  "name": "",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-amount-in-total-debt-(fc)-for-total-(fc),pending-(fc),and-assigned-(fc)-columns;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officer",
        "uname",
        "password"
      ],
      "line": 141,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-amount-in-total-debt-(fc)-for-total-(fc),pending-(fc),and-assigned-(fc)-columns;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagemnt_17",
        "Validate the amount in Total Debt (FC) for Total (FC),Pending (FC),and Assigned (FC) columns",
        "Admin",
        "ketan.prajapati",
        "admin"
      ],
      "line": 142,
      "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-amount-in-total-debt-(fc)-for-total-(fc),pending-(fc),and-assigned-(fc)-columns;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516750850,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Validate the amount in Total Debt (FC) for Total (FC),Pending (FC),and Assigned (FC) columns",
  "description": "",
  "id": "debt-management---landing-screen-to-show-the-grouped-(according-to-duration-of-the-debt-and-priority-of-collection)-list-of-tax-payer-that-are-in-debt;validate-the-amount-in-total-debt-(fc)-for-total-(fc),pending-(fc),and-assigned-(fc)-columns;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtManagement"
    },
    {
      "line": 1,
      "name": "@DV-1685_2251"
    },
    {
      "line": 132,
      "name": "@Mtc18"
    },
    {
      "line": 132,
      "name": "@comp"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "DGI \"Admin\"\"ketan.prajapati\"\"admin\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "Total Debt (FC) amount of Total (FC) column should be the sum of all amounts",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "Total Debt (FC) amount of Pending (FC) column should be the sum of all amounts",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Total Debt (FC) amount of Assigned (FC) column should be the sum of all amounts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 5
    },
    {
      "val": "ketan.prajapati",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "\u003clocation\u003e",
      "offset": 36
    }
  ],
  "location": "DebtManagementLandingScreen.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String)"
});
formatter.result({
  "duration": 5842647626,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2172275361,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.total_Debt_FC_amount_of_Total_FC_column_should_be_the_sum_of_all_amounts()"
});
formatter.result({
  "duration": 228136606,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.total_Debt_FC_amount_of_Pending_FC_column_should_be_the_sum_of_all_amounts()"
});
formatter.result({
  "duration": 194104558,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.total_Debt_FC_amount_of_Assigned_FC_column_should_be_the_sum_of_all_amounts()"
});
formatter.result({
  "duration": 289899504,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 723061679,
  "status": "passed"
});
formatter.uri("features/33_DebtManagementUnassignedDebt.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "The Supervisor can assign the collection officer the pending amount from the TaxPayer",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Validate the close (X) icon functionality on officer selection Pop-up",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-close-(x)-icon-functionality-on-officer-selection-pop-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@mtc_19"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "selects unassigned debt and selects the officer and closes the popup window",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-close-(x)-icon-functionality-on-officer-selection-pop-up;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 31,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-close-(x)-icon-functionality-on-officer-selection-pop-up;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_18",
        "Validate the close (X) icon functionality on officer selection Pop-up",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 32,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-close-(x)-icon-functionality-on-officer-selection-pop-up;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518855998,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate the close (X) icon functionality on officer selection Pop-up",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-close-(x)-icon-functionality-on-officer-selection-pop-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 22,
      "name": "@mtc_19"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_18\"\"Validate the close (X) icon functionality on officer selection Pop-up\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "selects unassigned debt and selects the officer and closes the popup window",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_18",
      "offset": 1
    },
    {
      "val": "Validate the close (X) icon functionality on officer selection Pop-up",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 114
    },
    {
      "val": "ketan.prajapati",
      "offset": 121
    },
    {
      "val": "admin",
      "offset": 138
    },
    {
      "val": "Aketi",
      "offset": 145
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 335992,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2282792669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2203232759,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7032640204,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.selects_unassigned_debt_and_selects_the_officer_and_closes_the_popup_window()"
});
formatter.result({
  "duration": 2138872265,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 752300360,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Validate the date picker functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-date-picker-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@mtc_03"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Date selection should be disabled and should be same as debt management",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-date-picker-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 43,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-date-picker-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_03",
        "Validate the close (X) icon functionality on officer selection Pop-up",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 44,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-date-picker-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516126743,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate the date picker functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-date-picker-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@mtc_03"
    },
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_03\"\"Validate the close (X) icon functionality on officer selection Pop-up\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Date selection should be disabled and should be same as debt management",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_03",
      "offset": 1
    },
    {
      "val": "Validate the close (X) icon functionality on officer selection Pop-up",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 114
    },
    {
      "val": "ketan.prajapati",
      "offset": 121
    },
    {
      "val": "admin",
      "offset": 138
    },
    {
      "val": "Aketi",
      "offset": 145
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 236249,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2178226888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2178786303,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7026743965,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.date_selection_should_be_disabled_and_should_be_same_as_debt_management()"
});
formatter.result({
  "duration": 99321862,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 748046461,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Validate the sorting functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-sorting-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@mtc_04"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "clicks on \"NITVA\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "\"NITVA\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "clicks on \"NITVA\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "\"NITVA\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "clicks on \"Taxpayer\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "\"TaxPayer\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "clicks on \"Taxpayer\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "\"TaxPayer\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "clicks on \"City\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "\"City\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "clicks on \"City\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "\"City\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "clicks on \"\u003cageing\u003e\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "\"\u003cageing\u003e\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "clicks on \"\u003cageing\u003e\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "\"\u003cageing\u003e\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "clicks on \"Others\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "\"Others\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "clicks on \"Others\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "\"Others\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "clicks on \"Total\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "\"Total\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "clicks on \"Total\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "\"Total\" should be in descending order",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-sorting-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 78,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-sorting-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_04",
        "Validate the sorting functionality",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 79,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-sorting-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5520340460,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Validate the sorting functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-sorting-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 46,
      "name": "@mtc_04"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_04\"\"Validate the sorting functionality\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "clicks on \"NITVA\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "\"NITVA\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "clicks on \"NITVA\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "\"NITVA\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "clicks on \"Taxpayer\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "\"TaxPayer\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "clicks on \"Taxpayer\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "\"TaxPayer\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "clicks on \"City\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "\"City\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "clicks on \"City\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "\"City\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "clicks on \"0-3 Months\" column on Debt Management",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "\"0-3 Months\" should be in ascending order",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "clicks on \"0-3 Months\" column on Debt Management",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "\"0-3 Months\" should be in descending order",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "clicks on \"Others\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "\"Others\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "clicks on \"Others\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "\"Others\" should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "clicks on \"Total\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "\"Total\" should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "clicks on \"Total\" column on Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "\"Total\" should be in descending order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_04",
      "offset": 1
    },
    {
      "val": "Validate the sorting functionality",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 79
    },
    {
      "val": "ketan.prajapati",
      "offset": 86
    },
    {
      "val": "admin",
      "offset": 103
    },
    {
      "val": "Aketi",
      "offset": 110
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 258762,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2179164187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2194006525,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7027842848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NITVA",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5168908606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NITVA",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 4137115647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NITVA",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5117839873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NITVA",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 105882674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5197028454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaxPayer",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 4127233959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5097731387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaxPayer",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 104264843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5164339803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 4015595825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5101845646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 13173493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5155783274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 4127923327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5118769763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 106825674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Others",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5166725372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Others",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 4128756039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Others",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5113229179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Others",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 114966703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5175381360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 4124405532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total",
      "offset": 11
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicks_on_column_on_Debt_Management(String)"
});
formatter.result({
  "duration": 5111481965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total",
      "offset": 1
    }
  ],
  "location": "DebtManagementUnassignedDebt.should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 103537573,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 757901361,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 82,
  "name": "Validate the Filter drop down functionality on Debt screen",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-filter-drop-down-functionality-on-debt-screen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 81,
      "name": "@mtc_05"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Search by TaxPayer Name \"\u003cname\u003e\" and Records should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-filter-drop-down-functionality-on-debt-screen;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "name",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 91,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-filter-drop-down-functionality-on-debt-screen;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_05",
        "Validate the Filter drop down functionality on Debt screen",
        "0-3 Months",
        "Three Feb",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 92,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-filter-drop-down-functionality-on-debt-screen;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518033546,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Validate the Filter drop down functionality on Debt screen",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-filter-drop-down-functionality-on-debt-screen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 81,
      "name": "@mtc_05"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_05\"\"Validate the Filter drop down functionality on Debt screen\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    4,
    5,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Search by TaxPayer Name \"Three Feb\" and Records should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_05",
      "offset": 1
    },
    {
      "val": "Validate the Filter drop down functionality on Debt screen",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 103
    },
    {
      "val": "ketan.prajapati",
      "offset": 110
    },
    {
      "val": "admin",
      "offset": 127
    },
    {
      "val": "Aketi",
      "offset": 134
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 255627,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2256599856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2240100074,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7029275444,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.clicks_on_Filter_dropdown_button()"
});
formatter.result({
  "duration": 150364661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three Feb",
      "offset": 25
    }
  ],
  "location": "DebtManagementUnassignedDebt.search_by_TaxPayer_Name_and_Records_should_be_displayed(String)"
});
formatter.result({
  "duration": 6016978264,
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 734395056,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "Validate view icon functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-view-icon-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@mtc_14"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user Clicks on View button on Debt Managemnt and is on Taxpayer profile",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-view-icon-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 103,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-view-icon-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_14",
        "Validate view icon functionality",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 104,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-view-icon-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516529705,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Validate view icon functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-view-icon-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@mtc_14"
    },
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_14\"\"Validate view icon functionality\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user Clicks on View button on Debt Managemnt and is on Taxpayer profile",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_14",
      "offset": 1
    },
    {
      "val": "Validate view icon functionality",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 77
    },
    {
      "val": "ketan.prajapati",
      "offset": 84
    },
    {
      "val": "admin",
      "offset": 101
    },
    {
      "val": "Aketi",
      "offset": 108
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 259902,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2161155720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2198039279,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7026341858,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_Clicks_on_View_button_on_Debt_Managemnt_and_is_on_Taxpayer_profile()"
});
formatter.result({
  "duration": 2181877769,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 747256495,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "Validate previous button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-previous-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@mtc_12"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "user clicks on Previous Button on Debt Unassigned and is on Debt Management List",
  "keyword": "Then "
});
formatter.examples({
  "line": 114,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-previous-button-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 115,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-previous-button-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_12",
        "Validate previous button functionality.",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 116,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-previous-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516366127,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Validate previous button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-previous-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@mtc_12"
    },
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_12\"\"Validate previous button functionality.\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "user clicks on Previous Button on Debt Unassigned and is on Debt Management List",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_12",
      "offset": 1
    },
    {
      "val": "Validate previous button functionality.",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 84
    },
    {
      "val": "ketan.prajapati",
      "offset": 91
    },
    {
      "val": "admin",
      "offset": 108
    },
    {
      "val": "Aketi",
      "offset": 115
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 310059,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2275867365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2203646264,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7028778723,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_clicks_on_Previous_Button_on_Debt_Unassigned_and_is_on_Debt_Management_List()"
});
formatter.result({
  "duration": 2240242564,
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 719985888,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 118,
      "value": "# @mtc_15 @TotalAgeBracket"
    },
    {
      "line": 119,
      "value": "#Scenario Outline: Verify the total (FC) tile on list of Pending Debt Taxpayer internal portal"
    },
    {
      "line": 120,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 121,
      "value": "#When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 122,
      "value": "#When Clicked on pending amount for \"\u003cageing\u003e\""
    },
    {
      "line": 123,
      "value": "#Then user is on Pending debts"
    },
    {
      "line": 124,
      "value": "#Then Total amount for that particular\"\u003cageing\u003e\" period  should  be displayed in  ageing bracket (FC) tile"
    },
    {
      "line": 125,
      "value": "#Examples:"
    },
    {
      "line": 126,
      "value": "# | Test Case ID                         | Description                                                  | ageing     |"
    },
    {
      "line": 127,
      "value": "#| DRC_ATC_DebtManagement_Unassigned_15 | Verify the total (FC) tile on list of Pending Debt Taxpayer. | 0-3 Months |"
    },
    {
      "line": 128,
      "value": "# @mtc_16 @TotalOther"
    },
    {
      "line": 129,
      "value": "#Scenario Outline: Verify the Others (FC) tile on list of Pending Debt Taxpayer page"
    },
    {
      "line": 130,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 131,
      "value": "# When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 132,
      "value": "# When Clicked on pending amount for \"\u003cageing\u003e\""
    },
    {
      "line": 133,
      "value": "#Then user is on Pending debts"
    },
    {
      "line": 134,
      "value": "#Then Total amount of remaining age bracket should  be displayed in Others (FC) tile"
    },
    {
      "line": 135,
      "value": "#Examples:"
    },
    {
      "line": 136,
      "value": "# | Test Case ID                         | Description                                                      | ageing     |"
    },
    {
      "line": 137,
      "value": "#| DRC_ATC_DebtManagement_Unassigned_16 | Verify the Other (FC) tile on list of Pending Debt Taxpayer page | 0-3 Months |"
    },
    {
      "line": 138,
      "value": "# @mtc_17 @Total"
    },
    {
      "line": 139,
      "value": "#Scenario Outline: Verify the total (FC) tile on list of Pending Debt Taxpayer internal portal"
    },
    {
      "line": 140,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 141,
      "value": "#When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 142,
      "value": "#When Clicked on pending amount for \"\u003cageing\u003e\""
    },
    {
      "line": 143,
      "value": "#Then user is on Pending debts"
    },
    {
      "line": 144,
      "value": "#Then Total amount should  be displayed including respective \"\u003cageing\u003e\"ageing bracket (FC)+ Other (FC)"
    },
    {
      "line": 145,
      "value": "#Examples:"
    },
    {
      "line": 146,
      "value": "# | Test Case ID                         | Description                                                  | ageing     |"
    },
    {
      "line": 147,
      "value": "#| DRC_ATC_DebtManagement_Unassigned_17 | Verify the total (FC) tile on list of Pending Debt Taxpayer. | 0-3 Months |"
    }
  ],
  "line": 149,
  "name": "Validate the Search button functionality with only value in From field",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-from-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 148,
      "name": "@mtc_07"
    }
  ]
});
formatter.step({
  "line": 150,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Selects \"\u003cdrpdown\u003e\" from debt age",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Enter value \"\u003cfrom\u003e\"in the from value range",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "click on search button Records should be displayed in \"\u003cdrpdown\u003e\" as per From \"\u003cfrom\u003e\" value",
  "keyword": "Then "
});
formatter.examples({
  "line": 159,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-from-field;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "drpdown",
        "from",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 160,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-from-field;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_07",
        "Validate the Search button functionality with only value in From field",
        "0-3 Months",
        "0-3 Months",
        "0",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 161,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-from-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5517155807,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "Validate the Search button functionality with only value in From field",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-from-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 148,
      "name": "@mtc_07"
    }
  ]
});
formatter.step({
  "line": 150,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_07\"\"Validate the Search button functionality with only value in From field\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    5,
    6,
    7,
    8
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "Selects \"0-3 Months\" from debt age",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Enter value \"0\"in the from value range",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "click on search button Records should be displayed in \"0-3 Months\" as per From \"0\" value",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_07",
      "offset": 1
    },
    {
      "val": "Validate the Search button functionality with only value in From field",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 115
    },
    {
      "val": "ketan.prajapati",
      "offset": 122
    },
    {
      "val": "admin",
      "offset": 139
    },
    {
      "val": "Aketi",
      "offset": 146
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 257907,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2169663803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2205230469,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7025565572,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.clicks_on_Filter_dropdown_button()"
});
formatter.result({
  "duration": 150554743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 9
    }
  ],
  "location": "DebtManagementUnassignedDebt.selects_from_debt_age(String)"
});
formatter.result({
  "duration": 5408686652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 13
    }
  ],
  "location": "DebtManagementUnassignedDebt.enter_value_in_the_from_value_range(String)"
});
formatter.result({
  "duration": 180768056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 55
    },
    {
      "val": "0",
      "offset": 80
    }
  ],
  "location": "DebtManagementUnassignedDebt.click_on_search_button_Records_should_be_displayed_in_as_per_From_value(String,String)"
});
formatter.result({
  "duration": 2233176196,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 759746322,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 164,
  "name": "Validate the Search button functionality with only value in to field",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-to-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 163,
      "name": "@mtc_08"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "Selects \"\u003cdrpdown\u003e\" from debt age",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Enter value \"\u003cto\u003e\"in the to value range",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "click on search button Records should be displayed in \"\u003cdrpdown\u003e\" as per To\"\u003cto\u003e\" value",
  "keyword": "Then "
});
formatter.examples({
  "line": 174,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-to-field;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "drpdown",
        "to",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 175,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-to-field;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_08",
        "Validate the Search button functionality with only value in to field",
        "0-3 Months",
        "0-3 Months",
        "50000",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 176,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-to-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513835218,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "Validate the Search button functionality with only value in to field",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality-with-only-value-in-to-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 163,
      "name": "@mtc_08"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_08\"\"Validate the Search button functionality with only value in to field\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    5,
    6,
    7,
    8
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "Selects \"0-3 Months\" from debt age",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Enter value \"50000\"in the to value range",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "click on search button Records should be displayed in \"0-3 Months\" as per To\"50000\" value",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_08",
      "offset": 1
    },
    {
      "val": "Validate the Search button functionality with only value in to field",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 113
    },
    {
      "val": "ketan.prajapati",
      "offset": 120
    },
    {
      "val": "admin",
      "offset": 137
    },
    {
      "val": "Aketi",
      "offset": 144
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 259617,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2181691962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2203568180,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7027260919,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.clicks_on_Filter_dropdown_button()"
});
formatter.result({
  "duration": 231341778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 9
    }
  ],
  "location": "DebtManagementUnassignedDebt.selects_from_debt_age(String)"
});
formatter.result({
  "duration": 5322053533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 13
    }
  ],
  "location": "DebtManagementUnassignedDebt.enter_value_in_the_to_value_range(String)"
});
formatter.result({
  "duration": 225663263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 55
    },
    {
      "val": "50000",
      "offset": 77
    }
  ],
  "location": "DebtManagementUnassignedDebt.click_on_search_button_Records_should_be_displayed_in_as_per_To_value(String,String)"
});
formatter.result({
  "duration": 8468293675,
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 799601940,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 179,
  "name": "Validate the Search button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 178,
      "name": "@mtc_09"
    }
  ]
});
formatter.step({
  "line": 180,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "if keeps blank in From and To value range, Search button should be disabled",
  "keyword": "Then "
});
formatter.examples({
  "line": 187,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "dropdown",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 188,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_09",
        "Validate the Search button functionality",
        "0-3 Months",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 189,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5514810989,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "Validate the Search button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-search-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 178,
      "name": "@mtc_09"
    }
  ]
});
formatter.step({
  "line": 180,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_09\"\"Validate the Search button functionality\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    4,
    5,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "Clicks on Filter dropdown button",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "if keeps blank in From and To value range, Search button should be disabled",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_09",
      "offset": 1
    },
    {
      "val": "Validate the Search button functionality",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 85
    },
    {
      "val": "ketan.prajapati",
      "offset": 92
    },
    {
      "val": "admin",
      "offset": 109
    },
    {
      "val": "Aketi",
      "offset": 116
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 213450,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2234593972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2238647815,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7030059994,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.clicks_on_Filter_dropdown_button()"
});
formatter.result({
  "duration": 143565318,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.if_keeps_blank_in_From_and_To_value_range_Search_button_should_be_disabled()"
});
formatter.result({
  "duration": 41415029,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 731577456,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 192,
  "name": "Validate the Reset button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-reset-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 191,
      "name": "@mtc_06"
    }
  ]
});
formatter.step({
  "line": 193,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 194,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "user enters uses first records in the to filter the records click again on filter option to reset the previously filtered records",
  "keyword": "Then "
});
formatter.examples({
  "line": 199,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-reset-button-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 200,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-reset-button-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_06",
        "Validate the Reset button functionality",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 201,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-reset-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515926402,
  "status": "passed"
});
formatter.scenario({
  "line": 201,
  "name": "Validate the Reset button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-reset-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 191,
      "name": "@mtc_06"
    }
  ]
});
formatter.step({
  "line": 193,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_06\"\"Validate the Reset button functionality\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 194,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "user enters uses first records in the to filter the records click again on filter option to reset the previously filtered records",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_06",
      "offset": 1
    },
    {
      "val": "Validate the Reset button functionality",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 84
    },
    {
      "val": "ketan.prajapati",
      "offset": 91
    },
    {
      "val": "admin",
      "offset": 108
    },
    {
      "val": "Aketi",
      "offset": 115
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 247933,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2246074683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2190001413,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7028253505,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_enters_uses_first_records_in_the_to_filter_the_records_click_again_on_filter_option_to_reset_the_previously_filtered_records()"
});
formatter.result({
  "duration": 16369376487,
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 754909354,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 204,
  "name": "Verify the tax payer details columns (NITVA, Tax payer Name, City)",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;verify-the-tax-payer-details-columns-(nitva,-tax-payer-name,-city)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 203,
      "name": "@mtc_13"
    },
    {
      "line": 203,
      "name": "@columnverify"
    }
  ]
});
formatter.step({
  "line": 205,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "Column should be \"NITVA\" \"Taxpayer\" \"City\" \"\u003cageing\u003e\" \"Others\" \"Total\" \"View\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 211,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;verify-the-tax-payer-details-columns-(nitva,-tax-payer-name,-city);",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 212,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;verify-the-tax-payer-details-columns-(nitva,-tax-payer-name,-city);;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_13",
        "Verify the tax payer details columns (NITVA, Tax payer Name, City)",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 213,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;verify-the-tax-payer-details-columns-(nitva,-tax-payer-name,-city);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515739170,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "Verify the tax payer details columns (NITVA, Tax payer Name, City)",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;verify-the-tax-payer-details-columns-(nitva,-tax-payer-name,-city);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 203,
      "name": "@columnverify"
    },
    {
      "line": 203,
      "name": "@mtc_13"
    },
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    }
  ]
});
formatter.step({
  "line": 205,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_13\"\"Verify the tax payer details columns (NITVA, Tax payer Name, City)\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "Column should be \"NITVA\" \"Taxpayer\" \"City\" \"0-3 Months\" \"Others\" \"Total\" \"View\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_13",
      "offset": 1
    },
    {
      "val": "Verify the tax payer details columns (NITVA, Tax payer Name, City)",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 111
    },
    {
      "val": "ketan.prajapati",
      "offset": 118
    },
    {
      "val": "admin",
      "offset": 135
    },
    {
      "val": "Aketi",
      "offset": 142
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 221999,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2180358824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2200028156,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7027582661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NITVA",
      "offset": 18
    },
    {
      "val": "Taxpayer",
      "offset": 26
    },
    {
      "val": "City",
      "offset": 37
    },
    {
      "val": "0-3 Months",
      "offset": 44
    },
    {
      "val": "Others",
      "offset": 57
    },
    {
      "val": "Total",
      "offset": 66
    },
    {
      "val": "View",
      "offset": 74
    }
  ],
  "location": "DebtManagementUnassignedDebt.column_should_be(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 350391107,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 768569309,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 215,
      "value": "#@mtc_11"
    },
    {
      "line": 216,
      "value": "#Scenario Outline: Validate the pagination functionality"
    },
    {
      "line": 217,
      "value": "#Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 218,
      "value": "#When clicked on Debt Management Module must be on Debt Management Module"
    },
    {
      "line": 219,
      "value": "#When Clicked on pending amount for \"\u003cageing\u003e\""
    },
    {
      "line": 220,
      "value": "#Then user is on Pending debts"
    },
    {
      "line": 221,
      "value": "#Then Click on Last button on debt pending it should be on last page"
    },
    {
      "line": 222,
      "value": "#Then click on First button it should be on First page of pending debt"
    },
    {
      "line": 223,
      "value": "#Then click on next button it should be second page of pendign debt"
    },
    {
      "line": 224,
      "value": "#Then Click on previous button it should be First page of pending Debt"
    },
    {
      "line": 225,
      "value": "#"
    },
    {
      "line": 226,
      "value": "#Examples:"
    },
    {
      "line": 227,
      "value": "#| Test Case ID                         | Description                           | ageing     | officer | uname           | password | location |"
    },
    {
      "line": 228,
      "value": "#| DRC_ATC_DebtManagement_Unassigned_11 | Validate the pagination functionality | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |"
    }
  ],
  "line": 230,
  "name": "Validate Assign officer button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-assign-officer-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 229,
      "name": "@mtc_10"
    },
    {
      "line": 229,
      "name": "@mtc18"
    }
  ]
});
formatter.step({
  "line": 231,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 232,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "user selects all the records for assigning all the records should be selected",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "click on assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "click on save button ,It should be disabled",
  "keyword": "Then "
});
formatter.examples({
  "line": 239,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-assign-officer-button-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 240,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-assign-officer-button-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_10",
        "Validate Assign officer button functionality",
        "0-3 Months",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 241,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-assign-officer-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513847471,
  "status": "passed"
});
formatter.scenario({
  "line": 241,
  "name": "Validate Assign officer button functionality",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-assign-officer-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 229,
      "name": "@mtc_10"
    },
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    },
    {
      "line": 229,
      "name": "@mtc18"
    }
  ]
});
formatter.step({
  "line": 231,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_10\"\"Validate Assign officer button functionality\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 232,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "user selects all the records for assigning all the records should be selected",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "click on assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "click on save button ,It should be disabled",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_10",
      "offset": 1
    },
    {
      "val": "Validate Assign officer button functionality",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 89
    },
    {
      "val": "ketan.prajapati",
      "offset": 96
    },
    {
      "val": "admin",
      "offset": 113
    },
    {
      "val": "Aketi",
      "offset": 120
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 235109,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2168864434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2274902708,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7029168861,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_selects_all_the_records_for_assigning_all_the_records_should_be_selected()"
});
formatter.result({
  "duration": 2066381572,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.click_on_assign_button()"
});
formatter.result({
  "duration": 2247260200,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.click_on_save_button_It_should_be_disabled()"
});
formatter.result({
  "duration": 2212706639,
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 835235291,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 244,
  "name": "Validate the assign officer button functionality with valid data",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-assign-officer-button-functionality-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 243,
      "name": "@mtc_02"
    }
  ]
});
formatter.step({
  "line": 245,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"\"\u003clocation\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 246,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "Clicked on pending amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "Search by TaxPayer Name \"\u003cname\u003e\" and assigns to officer and is on Case Management",
  "keyword": "Then "
});
formatter.examples({
  "line": 251,
  "name": "",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-assign-officer-button-functionality-with-valid-data;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "ageing",
        "name",
        "officer",
        "uname",
        "password",
        "location"
      ],
      "line": 252,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-assign-officer-button-functionality-with-valid-data;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Unassigned_02",
        "Validate the assign officer button functionality with valid data",
        "0-3 Months",
        "Three Feb",
        "admin",
        "ketan.prajapati",
        "admin",
        "Aketi"
      ],
      "line": 253,
      "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-assign-officer-button-functionality-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5517673046,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "Validate the assign officer button functionality with valid data",
  "description": "",
  "id": "the-supervisor-can-assign-the-collection-officer-the-pending-amount-from-the-taxpayer;validate-the-assign-officer-button-functionality-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 243,
      "name": "@mtc_02"
    },
    {
      "line": 19,
      "name": "@DebtManagementUnAssignedDebt"
    }
  ]
});
formatter.step({
  "line": 245,
  "name": "\"DRC_ATC_DebtManagement_Unassigned_02\"\"Validate the assign officer button functionality with valid data\"DGI \"admin\"\"ketan.prajapati\"\"admin\"\"Aketi\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    4,
    5,
    6,
    7
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 246,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "Clicked on pending amount for \"0-3 Months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "user is on Pending debts",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "Search by TaxPayer Name \"Three Feb\" and assigns to officer and is on Case Management",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Unassigned_02",
      "offset": 1
    },
    {
      "val": "Validate the assign officer button functionality with valid data",
      "offset": 39
    },
    {
      "val": "admin",
      "offset": 109
    },
    {
      "val": "ketan.prajapati",
      "offset": 116
    },
    {
      "val": "admin",
      "offset": 133
    },
    {
      "val": "Aketi",
      "offset": 140
    }
  ],
  "location": "DebtManagementUnassignedDebt.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 299799,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2265131308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 31
    }
  ],
  "location": "DebtManagementUnassignedDebt.clicked_on_pending_amount_for(String)"
});
formatter.result({
  "duration": 2196942390,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementUnassignedDebt.user_is_on_Pending_debts()"
});
formatter.result({
  "duration": 7027163171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three Feb",
      "offset": 25
    }
  ],
  "location": "DebtManagementUnassignedDebt.search_by_TaxPayer_Name_and_assigns_to_officer_and_is_on_Case_Management(String)"
});
formatter.result({
  "duration": 25914093011,
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 722451821,
  "status": "passed"
});
formatter.uri("features/34_DebtManagementAssignedDebtList.feature");
formatter.feature({
  "line": 2,
  "name": "DGI employee should be able to do following",
  "description": "\nMange view case, View info\nView – details of tax payer based on ageing\nOption to view details of specific age bracket of tax payer (statement of transaction) on Tax officer portal\nThe system is able to generate the list of payments which are under dispute and not paid because of objection cases raised",
  "id": "dgi-employee-should-be-able-to-do-following",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Validate whether collection officer is able to view the case for the particular tax payer",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-view-the-case-for-the-particular-tax-payer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@mtc8"
    },
    {
      "line": 9,
      "name": "@ManageView"
    },
    {
      "line": 9,
      "name": "@execute"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficername\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clicked on assigned amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "List of cases assgined to the officer should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Manage options should display wtih options\"\u003cMoption1\u003e\"\"\u003cMoption2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user selects \"View\" Debt collection case\"Debt Collection Case\" page should be displayed of Taxpayername\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-view-the-case-for-the-particular-tax-payer;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing",
        "tpayer",
        "Moption1",
        "Moption2"
      ],
      "line": 20,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-view-the-case-for-the-particular-tax-payer;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_01",
        "Validate whether collection officer is able to view the case for the particular tax payer.",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Three Feb",
        "View",
        "Reassign"
      ],
      "line": 21,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-view-the-case-for-the-particular-tax-payer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515756839,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate whether collection officer is able to view the case for the particular tax payer",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-view-the-case-for-the-particular-tax-payer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@ManageView"
    },
    {
      "line": 9,
      "name": "@execute"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 9,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"DRC_ATC_DebtManagement_Assigned_01\"\"Validate whether collection officer is able to view the case for the particular tax payer.\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clicked on assigned amount for \"0-3 Months\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "List of cases assgined to the officer should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on filter by dropdown TaxPayer\"Three Feb\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Manage options should display wtih options\"View\"\"Reassign\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user selects \"View\" Debt collection case\"Debt Collection Case\" page should be displayed of Taxpayername\"Three Feb\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_01",
      "offset": 1
    },
    {
      "val": "Validate whether collection officer is able to view the case for the particular tax payer.",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 133
    },
    {
      "val": "ketan.prajapati",
      "offset": 147
    },
    {
      "val": "admin",
      "offset": 164
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5856417582,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2164199594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 32
    }
  ],
  "location": "DebtManagementAssignedDebtList.clicked_on_assigned_amount_for(String)"
});
formatter.result({
  "duration": 208700957,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.list_of_cases_assgined_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3068604703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three Feb",
      "offset": 37
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_TaxPayer(String)"
});
formatter.result({
  "duration": 7048705677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View",
      "offset": 43
    },
    {
      "val": "Reassign",
      "offset": 49
    }
  ],
  "location": "DebtManagementAssignedDebtList.manage_options_should_display_wtih_options(String,String)"
});
formatter.result({
  "duration": 3269345309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View",
      "offset": 14
    },
    {
      "val": "Debt Collection Case",
      "offset": 41
    },
    {
      "val": "Three Feb",
      "offset": 104
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_selects_Debt_collection_case_page_should_be_displayed_of_Taxpayername(String,String,String)"
});
formatter.result({
  "duration": 5569396093,
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 779963671,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Validate whether collection officer is able to reassign the tax office",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-reassign-the-tax-office",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@mtc7"
    },
    {
      "line": 23,
      "name": "@ManageReassign"
    },
    {
      "line": 23,
      "name": "@execute"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficername\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Clicked on assigned amount for \"\u003cageing\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "List of cases assgined to the officer should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Manage options should display wtih options\"\u003cMoption1\u003e\"\"\u003cMoption2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User select officer\"\u003creassign\u003e\" to Reassign",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-reassign-the-tax-office;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing",
        "tpayer",
        "Moption1",
        "Moption2",
        "reassign"
      ],
      "line": 34,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-reassign-the-tax-office;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_02",
        "Validate whether collection officer is able to reassign the tax officer.",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Three Feb",
        "View",
        "Reassign",
        "Urvish Patel"
      ],
      "line": 35,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-reassign-the-tax-office;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5546655815,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate whether collection officer is able to reassign the tax office",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-collection-officer-is-able-to-reassign-the-tax-office;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@execute"
    },
    {
      "line": 23,
      "name": "@mtc7"
    },
    {
      "line": 23,
      "name": "@ManageReassign"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "\"DRC_ATC_DebtManagement_Assigned_02\"\"Validate whether collection officer is able to reassign the tax officer.\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "clicked on Debt Management Module must be on Debt Management Module",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Clicked on assigned amount for \"0-3 Months\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "List of cases assgined to the officer should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on filter by dropdown TaxPayer\"Three Feb\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Manage options should display wtih options\"View\"\"Reassign\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User select officer\"Urvish Patel\" to Reassign",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_02",
      "offset": 1
    },
    {
      "val": "Validate whether collection officer is able to reassign the tax officer.",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 115
    },
    {
      "val": "ketan.prajapati",
      "offset": 129
    },
    {
      "val": "admin",
      "offset": 146
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5862375948,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementLandingScreen.clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module()"
});
formatter.result({
  "duration": 2317392967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0-3 Months",
      "offset": 32
    }
  ],
  "location": "DebtManagementAssignedDebtList.clicked_on_assigned_amount_for(String)"
});
formatter.result({
  "duration": 204563046,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.list_of_cases_assgined_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3067585329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three Feb",
      "offset": 37
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_TaxPayer(String)"
});
formatter.result({
  "duration": 7010973162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View",
      "offset": 43
    },
    {
      "val": "Reassign",
      "offset": 49
    }
  ],
  "location": "DebtManagementAssignedDebtList.manage_options_should_display_wtih_options(String,String)"
});
formatter.result({
  "duration": 3257925299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Urvish Patel",
      "offset": 20
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_select_officer_to_Reassign(String)"
});
formatter.result({
  "duration": 11565986305,
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 792897496,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@mtc9"
    },
    {
      "line": 37,
      "name": "@FilterBy"
    },
    {
      "line": 37,
      "name": "@execute"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficername\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user can filter by\"Case Type\"\"Case Id\"\"Priority\"\"City\"\"Tax Officer\"\"Status\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing"
      ],
      "line": 44,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_03",
        "Validate whether user is able to filter by using filter by option.",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months"
      ],
      "line": 45,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515635722,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@execute"
    },
    {
      "line": 37,
      "name": "@mtc9"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 37,
      "name": "@FilterBy"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "\"DRC_ATC_DebtManagement_Assigned_03\"\"Validate whether user is able to filter by using filter by option.\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user can filter by\"Case Type\"\"Case Id\"\"Priority\"\"City\"\"Tax Officer\"\"Status\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_03",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 109
    },
    {
      "val": "ketan.prajapati",
      "offset": 123
    },
    {
      "val": "admin",
      "offset": 140
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5846256329,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3468179683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Case Type",
      "offset": 19
    },
    {
      "val": "Case Id",
      "offset": 30
    },
    {
      "val": "Priority",
      "offset": 39
    },
    {
      "val": "City",
      "offset": 49
    },
    {
      "val": "Tax Officer",
      "offset": 55
    },
    {
      "val": "Status",
      "offset": 68
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_can_filter_by(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4486934798,
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 799768653,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficername\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"\u003cdp1\u003e\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"\u003ctype\u003e\" data \"\u003ctypehere\u003e\" in type here",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"\u003ctype\u003e\"data  Message \"\u003cmsg\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing",
        "dp1",
        "typehere",
        "type",
        "msg"
      ],
      "line": 56,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_04",
        "Validate whether user is able to filter by using filter by option.(Case id invalid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Case Id",
        "Burman",
        "invalid",
        "No records found"
      ],
      "line": 57,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;2"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_05",
        "Validate whether user is able to filter by using filter by option.(Priority valid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Priority",
        "Medium",
        "valid",
        ""
      ],
      "line": 58,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;3"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_06",
        "Validate whether user is able to filter by using filter by option.(Priority invalid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Priority",
        "Highest",
        "invalid",
        "No records found"
      ],
      "line": 59,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;4"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_07",
        "Validate whether user is able to filter by using filter by option.(City valid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "City",
        "Aketi",
        "valid",
        ""
      ],
      "line": 60,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;5"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_08",
        "Validate whether user is able to filter by using filter by option.(City invalid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "City",
        "Kinhasa",
        "invalid",
        "No records found"
      ],
      "line": 61,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;6"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_09",
        "Validate whether user is able to filter by using filter by option.(Officer Name valid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Tax Officer",
        "Urvish Patel",
        "valid",
        ""
      ],
      "line": 62,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;7"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_10",
        "Validate whether user is able to filter by using filter by option.(Officer Name invalid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Tax Officer",
        "John",
        "invalid",
        "No records found"
      ],
      "line": 63,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;8"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_11",
        "Validate whether user is able to filter by using filter by option.(Status valid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Status",
        "Open",
        "valid",
        ""
      ],
      "line": 64,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;9"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_12",
        "Validate whether user is able to filter by using filter by option.(Status invalid data)",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "Status",
        "paymentAgreeement",
        "invalid",
        "No records found"
      ],
      "line": 65,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5516497503,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_04\"\"Validate whether user is able to filter by using filter by option.(Case id invalid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Case Id\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"invalid\" data \"Burman\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"invalid\"data  Message \"No records found\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_04",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Case id invalid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 131
    },
    {
      "val": "ketan.prajapati",
      "offset": 145
    },
    {
      "val": "admin",
      "offset": 162
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5819946675,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3453642560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Case Id",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 37
    },
    {
      "val": "2018-09-20",
      "offset": 57
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2403563848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    },
    {
      "val": "Burman",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 416201864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 5
    },
    {
      "val": "No records found",
      "offset": 28
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 419537842,
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 790475734,
  "status": "passed"
});
formatter.before({
  "duration": 5515473853,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_05\"\"Validate whether user is able to filter by using filter by option.(Priority valid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Priority\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"valid\" data \"Medium\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"valid\"data  Message \"\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_05",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Priority valid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 130
    },
    {
      "val": "ketan.prajapati",
      "offset": 144
    },
    {
      "val": "admin",
      "offset": 161
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5839808938,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3330078860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 38
    },
    {
      "val": "2018-09-20",
      "offset": 58
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2379051278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 11
    },
    {
      "val": "Medium",
      "offset": 24
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 413876141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 5
    },
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 119406,
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 862493930,
  "status": "passed"
});
formatter.before({
  "duration": 5519002478,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_06\"\"Validate whether user is able to filter by using filter by option.(Priority invalid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Priority\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"invalid\" data \"Highest\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"invalid\"data  Message \"No records found\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_06",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Priority invalid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 132
    },
    {
      "val": "ketan.prajapati",
      "offset": 146
    },
    {
      "val": "admin",
      "offset": 163
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5850527327,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3366044783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 38
    },
    {
      "val": "2018-09-20",
      "offset": 58
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2359676616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    },
    {
      "val": "Highest",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 430532662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 5
    },
    {
      "val": "No records found",
      "offset": 28
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 416275389,
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 740547492,
  "status": "passed"
});
formatter.before({
  "duration": 5515386080,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_07\"\"Validate whether user is able to filter by using filter by option.(City valid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"City\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"valid\" data \"Aketi\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"valid\"data  Message \"\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_07",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(City valid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 126
    },
    {
      "val": "ketan.prajapati",
      "offset": 140
    },
    {
      "val": "admin",
      "offset": 157
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5837527387,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3347158577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 34
    },
    {
      "val": "2018-09-20",
      "offset": 54
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2392349878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 11
    },
    {
      "val": "Aketi",
      "offset": 24
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 417306162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 5
    },
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 218010,
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 883871148,
  "status": "passed"
});
formatter.before({
  "duration": 5515200558,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_08\"\"Validate whether user is able to filter by using filter by option.(City invalid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"City\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"invalid\" data \"Kinhasa\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"invalid\"data  Message \"No records found\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_08",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(City invalid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 128
    },
    {
      "val": "ketan.prajapati",
      "offset": 142
    },
    {
      "val": "admin",
      "offset": 159
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5847849654,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3363145679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 34
    },
    {
      "val": "2018-09-20",
      "offset": 54
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2382783093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    },
    {
      "val": "Kinhasa",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 334863677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 5
    },
    {
      "val": "No records found",
      "offset": 28
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 413541574,
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 731086435,
  "status": "passed"
});
formatter.before({
  "duration": 5516729762,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_09\"\"Validate whether user is able to filter by using filter by option.(Officer Name valid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Tax Officer\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"valid\" data \"Urvish Patel\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"valid\"data  Message \"\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_09",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Officer Name valid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 134
    },
    {
      "val": "ketan.prajapati",
      "offset": 148
    },
    {
      "val": "admin",
      "offset": 165
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5839172293,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3361152244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 41
    },
    {
      "val": "2018-09-20",
      "offset": 61
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2399516274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 11
    },
    {
      "val": "Urvish Patel",
      "offset": 24
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 456523709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 5
    },
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 106012,
  "status": "passed"
});
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 840166303,
  "status": "passed"
});
formatter.before({
  "duration": 5520237582,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_10\"\"Validate whether user is able to filter by using filter by option.(Officer Name invalid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Tax Officer\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"invalid\" data \"John\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"invalid\"data  Message \"No records found\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_10",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Officer Name invalid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 136
    },
    {
      "val": "ketan.prajapati",
      "offset": 150
    },
    {
      "val": "admin",
      "offset": 167
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5868123713,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3373868629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 41
    },
    {
      "val": "2018-09-20",
      "offset": 61
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2381264149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    },
    {
      "val": "John",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 474878428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 5
    },
    {
      "val": "No records found",
      "offset": 28
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 423254553,
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 719163720,
  "status": "passed"
});
formatter.before({
  "duration": 5513883094,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_11\"\"Validate whether user is able to filter by using filter by option.(Status valid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Status\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"valid\" data \"Open\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"valid\"data  Message \"\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_11",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Status valid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 128
    },
    {
      "val": "ketan.prajapati",
      "offset": 142
    },
    {
      "val": "admin",
      "offset": 159
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5841455553,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3368804816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 36
    },
    {
      "val": "2018-09-20",
      "offset": 56
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2449043549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 11
    },
    {
      "val": "Open",
      "offset": 24
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 351629345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 5
    },
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 92904,
  "status": "passed"
});
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 856753004,
  "status": "passed"
});
formatter.before({
  "duration": 5513879104,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Validate whether user is able to filter by using filter by option",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-by-using-filter-by-option;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@mtc11"
    },
    {
      "line": 47,
      "name": "@mtc12"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 47,
      "name": "@FilterBy"
    },
    {
      "line": 47,
      "name": "@mtc10"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    },
    {
      "line": 47,
      "name": "@FilterValidation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_DebtManagement_Assigned_12\"\"Validate whether user is able to filter by using filter by option.(Status invalid data)\"DGI \"Urvish Patel\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user filter using \"Status\" and from\"2018-09-20\" to date\"2018-09-20\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "enter the \"invalid\" data \"paymentAgreeement\" in type here",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "for \"invalid\"data  Message \"No records found\" should be displayed",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_12",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter by using filter by option.(Status invalid data)",
      "offset": 37
    },
    {
      "val": "Urvish Patel",
      "offset": 130
    },
    {
      "val": "ketan.prajapati",
      "offset": 144
    },
    {
      "val": "admin",
      "offset": 161
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5851691186,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3442865749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 19
    },
    {
      "val": "2018-09-20",
      "offset": 36
    },
    {
      "val": "2018-09-20",
      "offset": 56
    }
  ],
  "location": "DebtManagementAssignedDebtList.user_filter_using_and_from_to_date(String,String,String)"
});
formatter.result({
  "duration": 2394327070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    },
    {
      "val": "paymentAgreeement",
      "offset": 26
    }
  ],
  "location": "DebtManagementAssignedDebtList.enter_the_data_in_type_here(String,String)"
});
formatter.result({
  "duration": 413990987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 5
    },
    {
      "val": "No records found",
      "offset": 28
    }
  ],
  "location": "DebtManagementAssignedDebtList.for_data_Message_should_be_displayed(String,String)"
});
formatter.result({
  "duration": 447617509,
  "status": "passed"
});
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 760968032,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Validate whether user is able to filter data in sorting order",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-data-in-sorting-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@mtc13"
    },
    {
      "line": 67,
      "name": "@Sorting"
    },
    {
      "line": 67,
      "name": "@execute"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Click on \"City\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on \"City\" column it should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Click on \"Ageing (Days)\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click on \"Ageing (Days)\" column it should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Click on \"Tax Officer\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on \"Tax Officer\" column it should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Click on \"Status\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Click on \"Status\" column it should be in descending order",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-data-in-sorting-order;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing"
      ],
      "line": 81,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-data-in-sorting-order;;1"
    },
    {
      "cells": [
        "DRC_ATC_DebtManagement_Assigned_13",
        "Validate whether user is able to filter data in sorting order.",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months"
      ],
      "line": 82,
      "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-data-in-sorting-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512064351,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Validate whether user is able to filter data in sorting order",
  "description": "",
  "id": "dgi-employee-should-be-able-to-do-following;validate-whether-user-is-able-to-filter-data-in-sorting-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@execute"
    },
    {
      "line": 67,
      "name": "@mtc13"
    },
    {
      "line": 67,
      "name": "@Sorting"
    },
    {
      "line": 1,
      "name": "@DebtMangagement"
    },
    {
      "line": 1,
      "name": "@AssignedDebt"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "\"DRC_ATC_DebtManagement_Assigned_13\"\"Validate whether user is able to filter data in sorting order.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Click on \"City\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on \"City\" column it should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Click on \"Ageing (Days)\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Click on \"Ageing (Days)\" column it should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Click on \"Tax Officer\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on \"Tax Officer\" column it should be in descending order",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Click on \"Status\" column it should be in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Click on \"Status\" column it should be in descending order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_DebtManagement_Assigned_13",
      "offset": 1
    },
    {
      "val": "Validate whether user is able to filter data in sorting order.",
      "offset": 37
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 105
    },
    {
      "val": "ketan.prajapati",
      "offset": 116
    },
    {
      "val": "admin",
      "offset": 133
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5839182267,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3328793314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 2367201517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 3378681944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ageing (Days)",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 2339719454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ageing (Days)",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 3313545165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 2301038525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 3337714049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_ascending_order(String)"
});
formatter.result({
  "duration": 2295055366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 10
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_column_it_should_be_in_descending_order(String)"
});
formatter.result({
  "duration": 3316733523,
  "status": "passed"
});
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 820613814,
  "status": "passed"
});
formatter.uri("features/35_DebtCollectionCaseScreen.feature");
formatter.feature({
  "line": 2,
  "name": "List of Debt Cases Assigned to the Collection Officer – Reassign",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DebtCaseCollectionofficer"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate the Expected recovery and Percentage functionality",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-the-expected-recovery-and-percentage-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@mtc6"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    }
  ],
  "line": 9,
  "name": "click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user should be on Debt Collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click in Percentage Radio At Expected Recovery",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter the Percentage \"\u003cPerRec\u003e\" and displayed amount field\"\u003cRecAmount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on Amount radio at Expected Recovery",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter the amount to be Recovered\"\u003cRecoverAmount\u003e\" and the percentage field should dispaly \"\u003cRpercent\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 17,
      "value": "#Then user verifies the Total Due HyperLink\"\u003ctotaldue\u003e\""
    },
    {
      "line": 18,
      "value": "#Then user Verifies Received Amount\"\u003cAreceived\u003e\""
    },
    {
      "line": 19,
      "value": "# Then Verifies the balance amount\"\u003cBamount\u003e\""
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-the-expected-recovery-and-percentage-functionality;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "month5",
        "caseid",
        "RecoverAmount",
        "Rpercent",
        "PerRec",
        "RecAmount",
        "tpayer",
        "totaldue",
        "Areceived",
        "Bamount"
      ],
      "line": 21,
      "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-the-expected-recovery-and-percentage-functionality;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_TotalArrears_PopUp_01",
        "Validate the Expected recovery and Percentage functionality.",
        "Jainik Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18112900000003",
        "8000,00",
        "60",
        "60",
        "100",
        "Three Feb",
        "8.000,00",
        "0,00",
        "8.000,00"
      ],
      "line": 22,
      "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-the-expected-recovery-and-percentage-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5520909850,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate the Expected recovery and Percentage functionality",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-the-expected-recovery-and-percentage-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtCaseCollectionofficer"
    },
    {
      "line": 4,
      "name": "@mtc6"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"DRC_ATC_AssignedDebt_TotalArrears_PopUp_01\"\"Validate the Expected recovery and Percentage functionality.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    }
  ],
  "line": 9,
  "name": "click on filter by dropdown TaxPayer\"Three Feb\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on View in Manage Options",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user should be on Debt Collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click in Percentage Radio At Expected Recovery",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter the Percentage \"60\" and displayed amount field\"100\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on Amount radio at Expected Recovery",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Enter the amount to be Recovered\"8000,00\" and the percentage field should dispaly \"60\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_TotalArrears_PopUp_01",
      "offset": 1
    },
    {
      "val": "Validate the Expected recovery and Percentage functionality.",
      "offset": 45
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 111
    },
    {
      "val": "ketan.prajapati",
      "offset": 122
    },
    {
      "val": "admin",
      "offset": 139
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5861893476,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()"
});
formatter.result({
  "duration": 3535051992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three Feb",
      "offset": 37
    }
  ],
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_TaxPayer(String)"
});
formatter.result({
  "duration": 7051126299,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_View_in_Manage_Options()"
});
formatter.result({
  "duration": 3331801850,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.user_should_be_on_Debt_Collection_Case()"
});
formatter.result({
  "duration": 6056805098,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_in_Percentage_Radio_At_Expected_Recovery()"
});
formatter.result({
  "duration": 4175021716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 53
    }
  ],
  "location": "DebtCollectionCaseScreen.enter_the_Percentage_and_display_the_amount_field(String,String)"
});
formatter.result({
  "duration": 4271440769,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Amount_radio_at_Expected_Recovery()"
});
formatter.result({
  "duration": 190089472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8000,00",
      "offset": 33
    },
    {
      "val": "60",
      "offset": 83
    }
  ],
  "location": "DebtCollectionCaseScreen.enter_the_amount_to_be_Recovered_and_the_percentage_field_should_dispaly(String,String)"
});
formatter.result({
  "duration": 2348686640,
  "status": "passed"
});
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 761700146,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "###"
    },
    {
      "line": 25,
      "value": "###Requires two records"
    },
    {
      "line": 26,
      "value": "##"
    },
    {
      "line": 27,
      "value": "# @mtc5"
    },
    {
      "line": 28,
      "value": "#Scenario Outline: Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected or Validate Action Request Payment Agreement internal portal."
    },
    {
      "line": 29,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 30,
      "value": "# When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 31,
      "value": "# Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 32,
      "value": "# Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 33,
      "value": "#Then Click on View in Manage Options"
    },
    {
      "line": 34,
      "value": "#Then user should be on Debt Collection Case"
    },
    {
      "line": 35,
      "value": "#Then Status \"Open\" should be displayed"
    },
    {
      "line": 36,
      "value": "#Then Selects Action \"Under Review\""
    },
    {
      "line": 37,
      "value": "# Then click on Submit button"
    },
    {
      "line": 38,
      "value": "#    Then click on previous button on Debt collection Case"
    },
    {
      "line": 39,
      "value": "#   Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 40,
      "value": "# Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 41,
      "value": "#Then Status \"Under Review\" should be displayed"
    },
    {
      "line": 42,
      "value": "#Then Selects Action \"Request Payment Agreement\""
    },
    {
      "line": 43,
      "value": "#Then click on Submit button"
    },
    {
      "line": 44,
      "value": "#Then Status \"PA in Progress\" should be displayed"
    },
    {
      "line": 45,
      "value": "#Examples:"
    },
    {
      "line": 46,
      "value": "# | Test Case ID                               | Description                                                                                                                                                                   | officername  | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | RecoverAmount     | Rpercent | status | action       | totaldue   | Areceived | Bamount    | tpayer |"
    },
    {
      "line": 47,
      "value": "#| DRC_ATC_AssignedDebt_TotalArrears_PopUp_02 | Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected. Or Validate Action Request Payment Agreement. | Jainik Patel | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000009 | 2018-09-20 | 2018-09-21 | 12.799.903.790,59 |      100 | Open   | Under Review | 826.307,94 |      0,00 | 826.307,94 | Approved User  |"
    }
  ],
  "line": 49,
  "name": "Validate actions payment requested.",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-actions-payment-requested.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@mtc8.1"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "# When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 52,
      "value": "#  Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 53,
      "value": "#Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 54,
      "value": "#Then Click on View in Manage Options"
    },
    {
      "line": 55,
      "value": "#Then user should be on Debt Collection Case"
    },
    {
      "line": 56,
      "value": "#Then user verifies the Total Due HyperLink\"\u003ctotaldue\u003e\""
    },
    {
      "line": 57,
      "value": "#Then user Verifies Received Amount\"\u003cAreceived\u003e\""
    },
    {
      "line": 58,
      "value": "#Then Verifies the balance amount\"\u003cBamount\u003e\""
    },
    {
      "line": 59,
      "value": "# Then click on Amount radio at Expected Recovery"
    },
    {
      "line": 60,
      "value": "#Then Enter the amount to be Recovered\"\u003cRecoverAmount\u003e\" and the percentage field should dispaly \"\u003cRpercent\u003e\""
    }
  ],
  "line": 61,
  "name": "click in Percentage Radio At Expected Recovery",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Enter the Percentage \"\u003cPerRec\u003e\" and displayed amount field\"\u003cRecAmount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Status \"Open\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Selects Action \"Under Review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Status \"Under Review\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Selects Action \"Request Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "add Comment \"\u003ccomment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "attach the document\"\u003cpath\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "user should be on Case Management Page",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "no of notification should be 1 with \"Request Payment\" notification",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "click on previous button from debt case",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "click on filter by dropdown CaseID",
  "keyword": "Then "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-actions-payment-requested.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "fdate",
        "todate",
        "RecoverAmount",
        "Rpercent",
        "PerRec",
        "RecAmount",
        "path",
        "Areceived",
        "Bamount",
        "tpayer",
        "PerRec",
        "RecAmount",
        "comment"
      ],
      "line": 77,
      "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-actions-payment-requested.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_TotalArrears_PopUp_03",
        "Validate actions payment requested.",
        "Jainik Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "2018-09-20",
        "2018-09-20",
        "6000",
        "60",
        "60",
        "",
        "Capture.PNG",
        "0",
        "8.000,00",
        "Three Feb",
        "100",
        "0,00",
        "Please pay the pending debts at the earliest"
      ],
      "line": 78,
      "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-actions-payment-requested.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5517664212,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Validate actions payment requested.",
  "description": "",
  "id": "list-of-debt-cases-assigned-to-the-collection-officer-–-reassign;validate-actions-payment-requested.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@mtc8.1"
    },
    {
      "line": 1,
      "name": "@DebtCaseCollectionofficer"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "\"DRC_ATC_AssignedDebt_TotalArrears_PopUp_03\"\"Validate actions payment requested.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "# When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 52,
      "value": "#  Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 53,
      "value": "#Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 54,
      "value": "#Then Click on View in Manage Options"
    },
    {
      "line": 55,
      "value": "#Then user should be on Debt Collection Case"
    },
    {
      "line": 56,
      "value": "#Then user verifies the Total Due HyperLink\"\u003ctotaldue\u003e\""
    },
    {
      "line": 57,
      "value": "#Then user Verifies Received Amount\"\u003cAreceived\u003e\""
    },
    {
      "line": 58,
      "value": "#Then Verifies the balance amount\"\u003cBamount\u003e\""
    },
    {
      "line": 59,
      "value": "# Then click on Amount radio at Expected Recovery"
    },
    {
      "line": 60,
      "value": "#Then Enter the amount to be Recovered\"\u003cRecoverAmount\u003e\" and the percentage field should dispaly \"\u003cRpercent\u003e\""
    }
  ],
  "line": 61,
  "name": "click in Percentage Radio At Expected Recovery",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Enter the Percentage \"60\" and displayed amount field\"\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Status \"Open\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Selects Action \"Under Review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Status \"Under Review\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Selects Action \"Request Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "add Comment \"Please pay the pending debts at the earliest\"",
  "matchedColumns": [
    18
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "attach the document\"Capture.PNG\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "user should be on Case Management Page",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "no of notification should be 1 with \"Request Payment\" notification",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "click on previous button from debt case",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "click on filter by dropdown CaseID",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_TotalArrears_PopUp_03",
      "offset": 1
    },
    {
      "val": "Validate actions payment requested.",
      "offset": 45
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 86
    },
    {
      "val": "ketan.prajapati",
      "offset": 97
    },
    {
      "val": "admin",
      "offset": 114
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5720549009,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_in_Percentage_Radio_At_Expected_Recovery()"
});
formatter.result({
  "duration": 4208601784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 22
    },
    {
      "val": "",
      "offset": 53
    }
  ],
  "location": "DebtCollectionCaseScreen.enter_the_Percentage_and_display_the_amount_field(String,String)"
});
formatter.result({
  "duration": 4287146596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 2116153645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Under Review",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2407936014,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 20242463984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Under Review",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 2064053285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Payment",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2365754103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please pay the pending debts at the earliest",
      "offset": 13
    }
  ],
  "location": "DebtCollectionCaseScreen.add_Comment(String)"
});
formatter.result({
  "duration": 496810787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Capture.PNG",
      "offset": 20
    }
  ],
  "location": "DebtCollectionCaseScreen.attach_the_document(String)"
});
formatter.result({
  "duration": 11439254766,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 20126186372,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.user_should_be_on_Case_Management_Page()"
});
formatter.result({
  "duration": 4055732148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "Request Payment",
      "offset": 37
    }
  ],
  "location": "NotificationPopUp.no_of_notification_should_be_with_notification(int,String)"
});
formatter.result({
  "duration": 313611277634,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.click_on_previous_button_from_debt_case()"
});
formatter.result({
  "duration": 5336912399,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID()"
});
formatter.result({
  "duration": 9595425327,
  "status": "passed"
});
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 1064225128,
  "status": "passed"
});
formatter.uri("features/36_popupofAgeingofArrears.feature");
formatter.feature({
  "line": 2,
  "name": "Total Due: To show total amount due at the start of the collection case with a pop up of Ageing of Arrears to allow user to view the age bracket/s and the amount targeted in the collection case for each age-bracket",
  "description": "",
  "id": "total-due:-to-show-total-amount-due-at-the-start-of-the-collection-case-with-a-pop-up-of-ageing-of-arrears-to-allow-user-to-view-the-age-bracket/s-and-the-amount-targeted-in-the-collection-case-for-each-age-bracket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AgeingOfArrears"
    },
    {
      "line": 1,
      "name": "@TotalDue"
    },
    {
      "line": 1,
      "name": "@Amount"
    },
    {
      "line": 1,
      "name": "@DebtPending"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window.",
  "description": "",
  "id": "total-due:-to-show-total-amount-due-at-the-start-of-the-collection-case-with-a-pop-up-of-ageing-of-arrears-to-allow-user-to-view-the-age-bracket/s-and-the-amount-targeted-in-the-collection-case-for-each-age-bracket;validate-whether-the-tax-officer-is-able-to-view-the-case-created-for-one-particular-taxpayer-whose-debt-needs-to-be-collected-on-ageing-arrears-pop-up-window.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@mtc3"
    },
    {
      "line": 4,
      "name": "@ArrearsAmount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 8,
      "value": "#Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 9,
      "value": "# Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 10,
      "value": "#  Then Click on View in Manage Options"
    }
  ],
  "line": 11,
  "name": "Click on Total Due hyperlink",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Amount in ageing of arrears in twentyfour months and Above is amount \"\u003cmonth1\u003e\" thirteen to twentyfour months \"\u003cmonth2\u003e\" seven to twelve months\"\u003cmonth3\u003e\" four to six months\"\u003cmonth4\u003e\" zero to three months Total Debt(FC)",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "total-due:-to-show-total-amount-due-at-the-start-of-the-collection-case-with-a-pop-up-of-ageing-of-arrears-to-allow-user-to-view-the-age-bracket/s-and-the-amount-targeted-in-the-collection-case-for-each-age-bracket;validate-whether-the-tax-officer-is-able-to-view-the-case-created-for-one-particular-taxpayer-whose-debt-needs-to-be-collected-on-ageing-arrears-pop-up-window.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "month5",
        "fdate",
        "todate",
        "ageing1",
        "month1",
        "ageing2",
        "month2",
        "ageing3",
        "month3",
        "ageing4",
        "month4",
        "tpayer"
      ],
      "line": 15,
      "id": "total-due:-to-show-total-amount-due-at-the-start-of-the-collection-case-with-a-pop-up-of-ageing-of-arrears-to-allow-user-to-view-the-age-bracket/s-and-the-amount-targeted-in-the-collection-case-for-each-age-bracket;validate-whether-the-tax-officer-is-able-to-view-the-case-created-for-one-particular-taxpayer-whose-debt-needs-to-be-collected-on-ageing-arrears-pop-up-window.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_TotalArrears_PopUp_01",
        "Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window.",
        "Urvish Patel",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "",
        "2018-09-20",
        "2018-09-20",
        "24 Months and Above",
        "0,00",
        "13-24 Months",
        "0,00",
        "7-12 Months",
        "0,00",
        "4-6 Months",
        "0,00",
        "Three Feb"
      ],
      "line": 16,
      "id": "total-due:-to-show-total-amount-due-at-the-start-of-the-collection-case-with-a-pop-up-of-ageing-of-arrears-to-allow-user-to-view-the-age-bracket/s-and-the-amount-targeted-in-the-collection-case-for-each-age-bracket;validate-whether-the-tax-officer-is-able-to-view-the-case-created-for-one-particular-taxpayer-whose-debt-needs-to-be-collected-on-ageing-arrears-pop-up-window.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5519013877,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window.",
  "description": "",
  "id": "total-due:-to-show-total-amount-due-at-the-start-of-the-collection-case-with-a-pop-up-of-ageing-of-arrears-to-allow-user-to-view-the-age-bracket/s-and-the-amount-targeted-in-the-collection-case-for-each-age-bracket;validate-whether-the-tax-officer-is-able-to-view-the-case-created-for-one-particular-taxpayer-whose-debt-needs-to-be-collected-on-ageing-arrears-pop-up-window.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DebtPending"
    },
    {
      "line": 4,
      "name": "@ArrearsAmount"
    },
    {
      "line": 1,
      "name": "@AgeingOfArrears"
    },
    {
      "line": 1,
      "name": "@Amount"
    },
    {
      "line": 1,
      "name": "@TotalDue"
    },
    {
      "line": 4,
      "name": "@mtc3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"DRC_ATC_AssignedDebt_TotalArrears_PopUp_01\"\"Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window.\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 8,
      "value": "#Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 9,
      "value": "# Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 10,
      "value": "#  Then Click on View in Manage Options"
    }
  ],
  "line": 11,
  "name": "Click on Total Due hyperlink",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Amount in ageing of arrears in twentyfour months and Above is amount \"0,00\" thirteen to twentyfour months \"0,00\" seven to twelve months\"0,00\" four to six months\"0,00\" zero to three months Total Debt(FC)",
  "matchedColumns": [
    16,
    10,
    12,
    14
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_TotalArrears_PopUp_01",
      "offset": 1
    },
    {
      "val": "Validate whether the tax officer is able to view the case created for one particular taxpayer whose debt needs to be collected on Ageing Arrears Pop-up window.",
      "offset": 45
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 210
    },
    {
      "val": "ketan.prajapati",
      "offset": 221
    },
    {
      "val": "admin",
      "offset": 238
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5853451224,
  "status": "passed"
});
formatter.match({
  "location": "PopUpOfAgeingofArrears.click_on_Total_Due_hyperlink()"
});
formatter.result({
  "duration": 3260817847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0,00",
      "offset": 70
    },
    {
      "val": "0,00",
      "offset": 107
    },
    {
      "val": "0,00",
      "offset": 136
    },
    {
      "val": "0,00",
      "offset": 161
    }
  ],
  "location": "PopUpOfAgeingofArrears.amount_in_ageing_of_arrears_in_twentyfour_months_and_Above_is_amount_thirteen_to_twentyfour_months_seven_to_twelve_months_four_to_six_months_zero_to_three_months_Total_Debt_FC(String,String,String,String)"
});
formatter.result({
  "duration": 330027278,
  "status": "passed"
});
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 705380939,
  "status": "passed"
});
formatter.uri("features/37_NotificationPopUp.feature");
formatter.feature({
  "line": 2,
  "name": "No. of Notification: Shows the notifications count. When clicked, pop-up appears, and the officer can view the notifications details",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NotificationPopUp"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#@mtc2"
    },
    {
      "line": 5,
      "value": "#Scenario Outline: Validate the collection officer sent the notification to Tax payer  for Payment Request internal portal."
    },
    {
      "line": 6,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 7,
      "value": "#When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 8,
      "value": "#  Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 9,
      "value": "#  Then Click on View in Manage Options"
    },
    {
      "line": 10,
      "value": "#Then Previous status must be\"Under Review\""
    },
    {
      "line": 11,
      "value": "#Then Selects Action \"Request Payment\""
    },
    {
      "line": 12,
      "value": "#Then click on Submit button"
    },
    {
      "line": 13,
      "value": "#  Then click on previous button on Debt collection Case"
    },
    {
      "line": 14,
      "value": "#  Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 15,
      "value": "#Then Click on View in Manage Options"
    },
    {
      "line": 16,
      "value": "#Then no of notification should be 1 with \"Request Payment\" notification"
    },
    {
      "line": 17,
      "value": "#Examples:"
    },
    {
      "line": 18,
      "value": "# | Test Case ID                         | Description                                                                              | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     |"
    },
    {
      "line": 19,
      "value": "#  3 | DRC_ATC_AssignedDebt_Notification_01 | Validate the collection officer sent the notification to Tax payer  for Payment Request. | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-20 | 2018-09-20 |"
    },
    {
      "line": 21,
      "value": "#  @mtc3"
    },
    {
      "line": 22,
      "value": "# Scenario Outline: internal portal Validate the system sent the notification to collection officer before deadline of payment  ."
    },
    {
      "line": 23,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal"
    },
    {
      "line": 24,
      "value": "# When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed"
    },
    {
      "line": 25,
      "value": "#   Then click on filter by dropdown TaxPayer\"\u003ctpayer\u003e\""
    },
    {
      "line": 26,
      "value": "#   Then Click on View in Manage Options"
    },
    {
      "line": 27,
      "value": "#  Then user should be on Debt Collection Case"
    },
    {
      "line": 28,
      "value": "# Then Status \"Request Payment\" should be displayed"
    },
    {
      "line": 29,
      "value": "# Then Selects Action \"Payment Reminder Sent\""
    },
    {
      "line": 30,
      "value": "#Then click on Submit button"
    },
    {
      "line": 31,
      "value": "#Then click on previous button on Debt collection Case"
    },
    {
      "line": 32,
      "value": "#Then click on filter by dropdown CaseID\"\u003ccaseid\u003e\""
    },
    {
      "line": 33,
      "value": "#    Examples:"
    },
    {
      "line": 34,
      "value": "#  | Test Case ID                         | Description                                                                                 | officername | uname           | password | ageing5    | month5 | caseid          | fdate      | todate     | tpayer        |"
    },
    {
      "line": 35,
      "value": "#  | DRC_ATC_AssignedDebt_Notification_02 | Validate the system sent the notification to collection officer before deadline of payment. | Ketan       | ketan.prajapati | admin    | 0-3 Months | amount | R18112900000003 | 2018-09-19 | 2018-09-19 | Approved User |"
    }
  ],
  "line": 38,
  "name": "Validate the collection officer sent the notification to taxpayer for Escalates the case to legal.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@mtc6"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"DGI \"\u003cofficer\u003e\"\"\u003cuname\u003e\"\"\u003cpassword\u003e\"should be logged in to the internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Status \"Payment Reminder Sent\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on previous button from debt case",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "click on filter by dropdown CaseID",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#Then Selects Action \"Payment Not Completed\""
    },
    {
      "line": 44,
      "value": "# Then click on Submit button"
    }
  ],
  "line": 45,
  "name": "Status \"Payment Not Completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Selects Action \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Selects Collection Agent\"\u003ccollectionofficer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Status \"Assign to Legal\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "no of notification should be 3 with \"Assign to Legal\" notification",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "officername",
        "uname",
        "password",
        "ageing5",
        "month5",
        "caseid",
        "collectionofficer"
      ],
      "line": 53,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;;1"
    },
    {
      "cells": [
        "DRC_ATC_AssignedDebt_Notification_03",
        "Validate the System  sent the notification to tax payer for Full payment not made till the deadline",
        "Ketan",
        "ketan.prajapati",
        "admin",
        "0-3 Months",
        "amount",
        "R18112900000003",
        "Jainik"
      ],
      "line": 54,
      "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5514089990,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validate the collection officer sent the notification to taxpayer for Escalates the case to legal.",
  "description": "",
  "id": "no.-of-notification:-shows-the-notifications-count.-when-clicked,-pop-up-appears,-and-the-officer-can-view-the-notifications-details;validate-the-collection-officer-sent-the-notification-to-taxpayer-for-escalates-the-case-to-legal.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@mtc6"
    },
    {
      "line": 1,
      "name": "@NotificationPopUp"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "\"DRC_ATC_AssignedDebt_Notification_03\"\"Validate the System  sent the notification to tax payer for Full payment not made till the deadline\"DGI \"\u003cofficer\u003e\"\"ketan.prajapati\"\"admin\"should be logged in to the internal portal",
  "matchedColumns": [
    0,
    1,
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Status \"Payment Reminder Sent\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on previous button from debt case",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "click on filter by dropdown CaseID",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "#Then Selects Action \"Payment Not Completed\""
    },
    {
      "line": 44,
      "value": "# Then click on Submit button"
    }
  ],
  "line": 45,
  "name": "Status \"Payment Not Completed\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Selects Action \"Assign to Legal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Selects Collection Agent\"Jainik\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Status \"Assign to Legal\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "no of notification should be 3 with \"Assign to Legal\" notification",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_AssignedDebt_Notification_03",
      "offset": 1
    },
    {
      "val": "Validate the System  sent the notification to tax payer for Full payment not made till the deadline",
      "offset": 39
    },
    {
      "val": "\u003cofficer\u003e",
      "offset": 144
    },
    {
      "val": "ketan.prajapati",
      "offset": 155
    },
    {
      "val": "admin",
      "offset": 172
    }
  ],
  "location": "DebtManagementAssignedDebtList.dgi_should_be_logged_in_to_the_internal_portal(String,String,String,String,String)"
});
formatter.result({
  "duration": 5838770755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Reminder Sent",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 322198452216,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.click_on_previous_button_from_debt_case()"
});
formatter.result({
  "duration": 5261978001,
  "status": "passed"
});
formatter.match({
  "location": "DebtManagementAssignedDebtList.click_on_filter_by_dropdown_CaseID()"
});
formatter.result({
  "duration": 9511139305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment Not Completed",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 2070111108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign to Legal",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "duration": 2366482513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jainik",
      "offset": 25
    }
  ],
  "location": "NotificationPopUp.selects_Collection_Agent(String)"
});
formatter.result({
  "duration": 6394199400,
  "status": "passed"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "duration": 20246669152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign to Legal",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
});
formatter.result({
  "duration": 2092573815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    },
    {
      "val": "Assign to Legal",
      "offset": 37
    }
  ],
  "location": "NotificationPopUp.no_of_notification_should_be_with_notification(int,String)"
});
formatter.result({
  "duration": 13643208524,
  "status": "passed"
});
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 1043246882,
  "status": "passed"
});
});