$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/22_PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#DV_2877"
    }
  ],
  "line": 3,
  "name": "Manual Assessment- Payment summary for Liability Calculation and Payment due and Raise notice",
  "description": "",
  "id": "manual-assessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LiablityCalculation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done internal portal",
  "description": "",
  "id": "manual-assessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@RaiseNotice"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the assessemnt officer does the assessment for that particular month with \"yes\" Updation for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "manual-assessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-internal-portal;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "uname",
        "password",
        "period",
        "year",
        "penamt",
        "efiledamount",
        "NITVA",
        "tpayer"
      ],
      "line": 55,
      "id": "manual-assessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-internal-portal;;1"
    },
    {
      "cells": [
        "DRC_ATC_Assessment_04",
        "Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done",
        "laxman.prajapati",
        "admin",
        "November",
        "2018",
        "500000",
        "0,00",
        "",
        "Approved User"
      ],
      "line": 56,
      "id": "manual-assessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 55604175389,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done internal portal",
  "description": "",
  "id": "manual-assessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@RaiseNotice"
    },
    {
      "line": 2,
      "name": "@LiablityCalculation"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the assessemnt officer does the assessment for that particular month with \"yes\" Updation for period\"November\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_user_has_done_the_filing_for_the_particular_month()"
});
formatter.result({
  "duration": 5103863479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 75
    },
    {
      "val": "November",
      "offset": 100
    },
    {
      "val": "2018",
      "offset": 114
    },
    {
      "val": "Approved User",
      "offset": 126
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_assessemnt_officer_does_the_assessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String,String,String,String)"
});
formatter.result({
  "duration": 15548751667,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due()"
});
formatter.result({
  "duration": 29178532071,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.user_clicks_on_Raise_notice_button_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table()"
});
formatter.result({
  "duration": 30335640328,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 798566217,
  "status": "passed"
});
});