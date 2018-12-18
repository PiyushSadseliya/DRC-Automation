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
