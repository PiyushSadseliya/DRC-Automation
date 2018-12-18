$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/45_FX_Management_TaxOfficer.feature");
formatter.feature({
  "line": 1,
  "name": "User is on FX Management Page Tax Officer",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the Base currency on all the pages of FX management module -fx taxofficer",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on FX Management \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on FX Management tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Base currency on the FX management is Congolese France and its value is one",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on update button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see pop up and see base currency is 1",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on cancel button on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Historical FX Rates button and verify the base currency",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description"
      ],
      "line": 14,
      "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;;1"
    },
    {
      "cells": [
        "FX_Management_Officer_03",
        "Verify Base Currency"
      ],
      "line": 15,
      "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30524830095,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate the Base currency on all the pages of FX management module -fx taxofficer",
  "description": "",
  "id": "user-is-on-fx-management-page-tax-officer;validate-the-base-currency-on-all-the-pages-of-fx-management-module--fx-taxofficer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on FX Management \"FX_Management_Officer_03\" \"Verify Base Currency\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on FX Management tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the Base currency on the FX management is Congolese France and its value is one",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on update button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see pop up and see base currency is 1",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on cancel button on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Historical FX Rates button and verify the base currency",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FX_Management_Officer_03",
      "offset": 26
    },
    {
      "val": "Verify Base Currency",
      "offset": 53
    }
  ],
  "location": "DV_2063_FX_Management_TaxOfficer.user_is_on_FX_Management(String,String)"
});
formatter.result({
  "duration": 69476331,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_FX_Management_tab()"
});
formatter.result({
  "duration": 2189739664,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_verify_the_Base_currency_on_the_FX_management_is_Congolese_France_and_its_value_is()"
});
formatter.result({
  "duration": 64827154,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_update_button()"
});
formatter.result({
  "duration": 1165106492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "DV_2063_FX_Management_TaxOfficer.user_see_pop_up_and_see_base_currency_is(int)"
});
formatter.result({
  "duration": 654601,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_cancel_button_on_pop_up()"
});
formatter.result({
  "duration": 668308536,
  "status": "passed"
});
formatter.match({
  "location": "DV_2063_FX_Management_TaxOfficer.user_click_on_Historical_FX_Rates_button_and_verify_the_base_currency()"
});
formatter.result({
  "duration": 2168802408,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 673570707,
  "status": "passed"
});
});