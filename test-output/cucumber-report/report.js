$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/57VATRateManagement.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#AT Task 4427  #Sprint 24"
    },
    {
      "line": 2,
      "value": "#US-4116 \u0026 US 3967 Sprint 20,21"
    }
  ],
  "line": 4,
  "name": "As a DGI officer I want to update and approve VAT rates for",
  "description": "\t            Commodity/Service Codes that are \n                   already added into the system.",
  "id": "as-a-dgi-officer-i-want-to-update-and-approve-vat-rates-for",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@VATRateManagement"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "# @tag2"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: Validate Tax officer able to update and send the same for approval."
    },
    {
      "line": 10,
      "value": "# Given \"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"The officer has logged in to internal portal"
    },
    {
      "line": 11,
      "value": "# When Clicks on the VAT Rate Management menu"
    },
    {
      "line": 12,
      "value": "#Then Should be on \"VAT Rate by Commodity\" page"
    },
    {
      "line": 13,
      "value": "#Then Clicks on Update Rates"
    },
    {
      "line": 14,
      "value": "#    Examples:"
    },
    {
      "line": 15,
      "value": "#     | Test Case ID       | Description |"
    },
    {
      "line": 16,
      "value": "#    | DRC_ATC_VATRATE_01 |             |"
    }
  ],
  "line": 18,
  "name": "Validate the VAT Rate get auto rejected when with effective date becomes old date internal portal.",
  "description": "",
  "id": "as-a-dgi-officer-i-want-to-update-and-approve-vat-rates-for;validate-the-vat-rate-get-auto-rejected-when-with-effective-date-becomes-old-date-internal-portal.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@AutoReject"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "\"\u003cTest Case ID\u003e\"\"\u003cDescription\u003e\"The officer has logged in to internal portal",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Clicks on the VAT Rate Management menu",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Should be on \"VAT Rate by Commodity\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Clicks on Update Rates",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on filterby on VAT Rate management",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Select \"Commodity/Service Code\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter \"\u003cvalidservicecode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Store it in Previous vat Records",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Select all records",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on Update Rates Button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Pop up for updating VAT Rates should be opened",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click on vat Rate dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Select VAT Rate as \"\u003cvatRate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Status should be \"Updated\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on Send for Approval button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Selects date",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on filterby on VAT Rate management",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Select \"Commodity/Service Code\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Enter \"\u003cvalidservicecode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Status should be \"Approval Pending\" with proposed rate\"\u003cvatRate\u003e\" and previous rate",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Supervisor has neither Approved or Rejected and date becomes old",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Clicks on the VAT Rate Management menu",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click on Approval List",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click on filterby on VAT Rate management",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Select \"Commodity/Service Code\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter \"\u003cvalidservicecode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "\"No Record Found\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Clicks on the VAT Rate Management menu",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Clicks on Update Rates",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Click on filterby on VAT Rate management",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Select \"Commodity/Service Code\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Enter \"\u003cvalidservicecode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Rate prior to update must be displayed of Commodity \"\u003cvalidservicecode\u003e\"Category\"\u003cCategory\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "as-a-dgi-officer-i-want-to-update-and-approve-vat-rates-for;validate-the-vat-rate-get-auto-rejected-when-with-effective-date-becomes-old-date-internal-portal.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "vatRate",
        "validservicecode",
        "Category"
      ],
      "line": 60,
      "id": "as-a-dgi-officer-i-want-to-update-and-approve-vat-rates-for;validate-the-vat-rate-get-auto-rejected-when-with-effective-date-becomes-old-date-internal-portal.;;1"
    },
    {
      "cells": [
        "DRC_ATC_VATRATE_A02",
        "Validate the VAT Rate get auto rejected when with effective date becomes old date.",
        "Exempt",
        "1010-Glass statue",
        "R Glasses, Mirrors, Flasks"
      ],
      "line": 61,
      "id": "as-a-dgi-officer-i-want-to-update-and-approve-vat-rates-for;validate-the-vat-rate-get-auto-rejected-when-with-effective-date-becomes-old-date-internal-portal.;;2"
    }
  ],
  "keyword": "Examples"
});
