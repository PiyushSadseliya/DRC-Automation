$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/01_userRegistration.feature");
formatter.feature({
  "line": 2,
  "name": "User Registration for the steps involved in creating a user account for logging into DRC e-services portal that would be used by the taxpayer to perform tax activities",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UserRegistration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Valid_Registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Establish a connection with data base and execute query to create user\"\u003cusername\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "username"
      ],
      "line": 12,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;1"
    },
    {
      "comments": [
        {
          "line": 13,
          "value": "#| DRC_ATC_Valid_Registration_01 | Register with valid data | Regression One |"
        },
        {
          "line": 14,
          "value": "#| DRC_ATC_Valid_Registration_02 | Register with valid data | Regression Two |"
        },
        {
          "line": 15,
          "value": "#| DRC_ATC_Valid_Registration_03 | Register with valid data | Regression Three |"
        }
      ],
      "cells": [
        "DRC_ATC_Valid_Registration_03",
        "Register with valid data",
        "Regression Last"
      ],
      "line": 16,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22512366319,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#| DRC_ATC_Valid_Registration_01 | Register with valid data | Regression One |"
    },
    {
      "line": 14,
      "value": "#| DRC_ATC_Valid_Registration_02 | Register with valid data | Regression Two |"
    },
    {
      "line": 15,
      "value": "#| DRC_ATC_Valid_Registration_03 | Register with valid data | Regression Three |"
    }
  ],
  "line": 16,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 4,
      "name": "@Valid_Registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Establish a connection with data base and execute query to create user\"Regression Last\".",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 66056009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regression Last",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 763387192,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 371851922,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 619539659,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1668659253,
  "status": "passed"
});
});