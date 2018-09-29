$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DV_2394_Total_Liability.feature");
formatter.feature({
  "line": 1,
  "name": "User is on e filing and see Total Liability",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# @TC_01_Login"
    },
    {
      "line": 4,
      "value": "# Scenario Outline: DRC Tax Portal Login"
    },
    {
      "line": 5,
      "value": "#   Given User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 6,
      "value": "#   When User Enter Data: \"\u003cemail\u003e\" \"\u003cpassword\u003e\""
    },
    {
      "line": 7,
      "value": "#   And User Clicks on \"SignIn\""
    },
    {
      "line": 8,
      "value": "# Then User see \"Dashboard\""
    },
    {
      "line": 9,
      "value": "#   Examples:"
    },
    {
      "line": 10,
      "value": "#     | TestcaseID               | Description          | email                   | password   |"
    },
    {
      "line": 11,
      "value": "#     | Total_Liability_Login_01 | Login into tax payer | franky01@mailinator.com | franky@123 |"
    }
  ],
  "line": 13,
  "name": "Validate that if user changes the Financial year from drop down the total liability amount does not change.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User login to DRC VAT",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on Finicial year dropdown \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User check current liability \"\u003cliability\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "liability"
      ],
      "line": 21,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;;1"
    },
    {
      "cells": [
        "Total_Liability_02",
        "validate liability amount",
        "Year2018",
        "4.963,2"
      ],
      "line": 22,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3616871239,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate that if user changes the Financial year from drop down the total liability amount does not change.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User login to DRC VAT",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User is on Vat e-Filing Page \"Total_Liability_02\" \"validate liability amount\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on Finicial year dropdown \"Year2018\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User check current liability \"4.963,2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DV_2394_Landing_Screen.user_login_to_DRC_VAT()"
});
formatter.result({
  "duration": 2936488273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total_Liability_02",
      "offset": 30
    },
    {
      "val": "validate liability amount",
      "offset": 51
    }
  ],
  "location": "DV_2394_Landing_Screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 2139333,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_Landing_Screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 2101692288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Year2018",
      "offset": 38
    }
  ],
  "location": "DV_2394_Landing_Screen.user_click_on_Finicial_year_dropdown(String)"
});
formatter.result({
  "duration": 4215814196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.963,2",
      "offset": 30
    }
  ],
  "location": "DV_2394_Landing_Screen.user_check_current_liability(String)"
});
formatter.result({
  "duration": 530912612,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 703919907,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User check current liability \"\u003cliability\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Pay button on Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on radio button on particular bank",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Pay now buttton on payment of tax page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User navigate to selected bank page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "# if payment done than amount will be zero"
    }
  ],
  "line": 35,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "liability"
      ],
      "line": 36,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;;1"
    },
    {
      "cells": [
        "Total_Liability_03",
        "validate liability amount",
        "Year2018",
        "4.963,2"
      ],
      "line": 37,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2732560529,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User is on Vat e-Filing Page \"Total_Liability_03\" \"validate liability amount\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User check current liability \"4.963,2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on Pay button on Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on radio button on particular bank",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Pay now buttton on payment of tax page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User navigate to selected bank page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Total_Liability_03",
      "offset": 30
    },
    {
      "val": "validate liability amount",
      "offset": 51
    }
  ],
  "location": "DV_2394_Landing_Screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 530060,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_Landing_Screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 2120546748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.963,2",
      "offset": 30
    }
  ],
  "location": "DV_2394_Landing_Screen.user_check_current_liability(String)"
});
formatter.result({
  "duration": 541548009,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_Landing_Screen.user_click_on_Pay_button_on_Total_Liability()"
});
formatter.result({
  "duration": 120894137,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_Landing_Screen.user_click_on_radio_button_on_particular_bank()"
});
formatter.result({
  "duration": 502700598,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_Landing_Screen.user_click_on_Pay_now_buttton_on_payment_of_tax_page()"
});
