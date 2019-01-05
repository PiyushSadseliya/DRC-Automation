$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/29_PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.feature");
formatter.feature({
  "line": 2,
  "name": "Manual ReAssessment- Payment summary for Liability Calculation and Payment due and Raise notice",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ManualReAssessment"
    },
    {
      "line": 1,
      "name": "@RaiseNotice"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate the download functionality of e-filing schedule Button when e-file schedule file is not uploaded by from internal portal from reassessment",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-download-functionality-of-e-filing-schedule-button-when-e-file-schedule-file-is-not-uploaded-by-from-internal-portal-from-reassessment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc3419"
    },
    {
      "line": 4,
      "name": "@555"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click download button on Payment Summary page from ReAssessment message should be displayed as \"No e-filing schedule has been uploaded\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-download-functionality-of-e-filing-schedule-button-when-e-file-schedule-file-is-not-uploaded-by-from-internal-portal-from-reassessment;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "uname",
        "password",
        "period",
        "year",
        "msg",
        "penamt",
        "efiledamount",
        "NITVA",
        "nif",
        "nvat",
        "tpayer"
      ],
      "line": 12,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-download-functionality-of-e-filing-schedule-button-when-e-file-schedule-file-is-not-uploaded-by-from-internal-portal-from-reassessment;;1"
    },
    {
      "cells": [
        "DRC_ATC_ReAssessment_01",
        "Validate the download functionality of  e-filing schedule Button when e-file schedule file is not uploaded by tax payer from tax payer portal",
        "laxman.prajapati",
        "admin",
        "December",
        "2018",
        "Saved Successfully",
        "500000",
        "800",
        "20181127030648745",
        "TestRefac",
        "nvat",
        "Approved User"
      ],
      "line": 13,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-download-functionality-of-e-filing-schedule-button-when-e-file-schedule-file-is-not-uploaded-by-from-internal-portal-from-reassessment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23970457724,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate the download functionality of e-filing schedule Button when e-file schedule file is not uploaded by from internal portal from reassessment",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-download-functionality-of-e-filing-schedule-button-when-e-file-schedule-file-is-not-uploaded-by-from-internal-portal-from-reassessment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc3419"
    },
    {
      "line": 4,
      "name": "@555"
    },
    {
      "line": 1,
      "name": "@ManualReAssessment"
    },
    {
      "line": 1,
      "name": "@RaiseNotice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click download button on Payment Summary page from ReAssessment message should be displayed as \"No e-filing schedule has been uploaded\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_user_has_done_the_filing_for_the_particular_month()"
});
formatter.result({
  "duration": 5113499166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 77
    },
    {
      "val": "December",
      "offset": 101
    },
    {
      "val": "2018",
      "offset": 115
    },
    {
      "val": "Approved User",
      "offset": 127
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String,String,String,String)"
});
formatter.result({
  "duration": 18180449405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 112
    },
    {
      "val": "2018",
      "offset": 126
    },
    {
      "val": "Approved User",
      "offset": 138
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_tpayer(String,String,String)"
});
formatter.result({
  "duration": 13095933388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No e-filing schedule has been uploaded",
      "offset": 101
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.user_click_download_button_on_Payment_Summary_page_from_ReAssessment_message_should_be_displayed_as(String)"
});
formatter.result({
  "duration": 6242039487,
  "error_message": "java.lang.AssertionError: expected [No e-filing schedule has been uploaded] but found [File not found]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat org.drc.vat.StepDefinitions.PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.user_click_download_button_on_Payment_Summary_page_from_ReAssessment_message_should_be_displayed_as(PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.java:90)\r\n\tat ✽.Then User click download button on Payment Summary page from ReAssessment message should be displayed as \"No e-filing schedule has been uploaded\"(features/29_PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 787395353,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Validate the Save,Previous button,Total Tiles,Additionality Liability column for No updation in manual assessment when efiling and pymt not done from reassessment",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-save,previous-button,total-tiles,additionality-liability-column-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from-reassessment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@345678212324"
    },
    {
      "line": 15,
      "name": "@555"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on Prev button and it should be on ReAssessement Summary Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the penalty amount\"\u003cpenamt\u003e\" in ReAssessment Liability",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on Save button on Payment Summary page and message is displayed\"\u003cmsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on Previous Button on Payment Summary page and user is on Manual ReAssessment Landing Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Total Additional Liability tile should be displayed on ReAssessment as Total Assessed(FC) minus Total ReAssessed(FC)\"\u003cefiledamount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Calculates the Additional Liability column for ReAssessment",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Calculates the Net Payable column of Paymnent Due table for ReAssessment",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-save,previous-button,total-tiles,additionality-liability-column-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from-reassessment;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "uname",
        "password",
        "period",
        "year",
        "msg",
        "penamt",
        "efiledamount",
        "NITVA",
        "nif",
        "msg",
        "tpayer"
      ],
      "line": 31,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-save,previous-button,total-tiles,additionality-liability-column-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from-reassessment;;1"
    },
    {
      "cells": [
        "DRC_ATC_ReAssessment_03",
        "Validate the Save,Previous button,prev button,next button Total Tiles,Additionality Liability column",
        "laxman.prajapati",
        "admin",
        "December",
        "2018",
        "Saved Successfully",
        "500000",
        "800,00",
        "20181127030648745",
        "TestRefac",
        "Saved Successfully",
        "Approved User"
      ],
      "line": 32,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-save,previous-button,total-tiles,additionality-liability-column-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from-reassessment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518437384,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate the Save,Previous button,Total Tiles,Additionality Liability column for No updation in manual assessment when efiling and pymt not done from reassessment",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-save,previous-button,total-tiles,additionality-liability-column-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from-reassessment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@345678212324"
    },
    {
      "line": 15,
      "name": "@555"
    },
    {
      "line": 1,
      "name": "@ManualReAssessment"
    },
    {
      "line": 1,
      "name": "@RaiseNotice"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on Prev button and it should be on ReAssessement Summary Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter the penalty amount\"500000\" in ReAssessment Liability",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on Save button on Payment Summary page and message is displayed\"Saved Successfully\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on Previous Button on Payment Summary page and user is on Manual ReAssessment Landing Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Total Additional Liability tile should be displayed on ReAssessment as Total Assessed(FC) minus Total ReAssessed(FC)\"800,00\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Calculates the Additional Liability column for ReAssessment",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Calculates the Net Payable column of Paymnent Due table for ReAssessment",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_user_has_done_the_filing_for_the_particular_month()"
});
formatter.result({
  "duration": 4999618699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 77
    },
    {
      "val": "December",
      "offset": 101
    },
    {
      "val": "2018",
      "offset": 115
    },
    {
      "val": "Approved User",
      "offset": 127
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String,String,String,String)"
});
formatter.result({
  "duration": 18116682659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 112
    },
    {
      "val": "2018",
      "offset": 126
    },
    {
      "val": "Approved User",
      "offset": 138
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_tpayer(String,String,String)"
});
formatter.result({
  "duration": 13099149369,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.user_clicks_on_Prev_button_and_it_should_be_on_ReAssessement_Summary_Tab()"
});
formatter.result({
  "duration": 4217770449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 25
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.enter_the_penalty_amount_in_ReAssessment_Liability(String)"
});
formatter.result({
  "duration": 3586778603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saved Successfully",
      "offset": 70
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.click_on_Save_button_on_Payment_Summary_page_and_message_is_displayed(String)"
});
formatter.result({
  "duration": 2227934485,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.click_on_Previous_Button_on_Payment_Summary_page_and_user_is_on_Manual_ReAssessment_Landing_Screen()"
});
formatter.result({
  "duration": 4266000178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 77
    },
    {
      "val": "December",
      "offset": 101
    },
    {
      "val": "2018",
      "offset": 115
    },
    {
      "val": "Approved User",
      "offset": 127
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String,String,String,String)"
});
formatter.result({
  "duration": 18051207182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 112
    },
    {
      "val": "2018",
      "offset": 126
    },
    {
      "val": "Approved User",
      "offset": 138
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_tpayer(String,String,String)"
});
formatter.result({
  "duration": 13104099441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800,00",
      "offset": 117
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.total_Additional_Liability_tile_should_be_displayed_on_ReAssessment_as_Total_Assessed_FC_minus_Total_ReAssessed_FC(String)"
});
formatter.result({
  "duration": 476260879,
  "error_message": "java.lang.AssertionError: expected [] but found [850,00]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat org.drc.vat.StepDefinitions.PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.total_Additional_Liability_tile_should_be_displayed_on_ReAssessment_as_Total_Assessed_FC_minus_Total_ReAssessed_FC(PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.java:269)\r\n\tat ✽.Then Total Additional Liability tile should be displayed on ReAssessment as Total Assessed(FC) minus Total ReAssessed(FC)\"800,00\"(features/29_PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.calculates_the_Additional_Liability_column_for_ReAssessment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.calculates_the_Net_Payable_column_of_Paymnent_Due_table_for_ReAssessment()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 803102502,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done from  reassessment",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-prev-button,next-button-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from--reassessment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@tc342022"
    },
    {
      "line": 34,
      "name": "@555"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Prev button and it should be on ReAssessement Summary Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user click on Next button on ReAsssessmnet Summary Tab and it should be on Payment Summary tab",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-prev-button,next-button-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from--reassessment;",
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
        "nif",
        "tpayer"
      ],
      "line": 43,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-prev-button,next-button-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from--reassessment;;1"
    },
    {
      "cells": [
        "DRC_ATC_ReAssessment_04",
        "Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done",
        "laxman.prajapati",
        "admin",
        "December",
        "2018",
        "500000",
        "800,00",
        "20181127030648745",
        "TestRefac",
        "Approved User"
      ],
      "line": 44,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-prev-button,next-button-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from--reassessment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5518347331,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done from  reassessment",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-prev-button,next-button-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done-from--reassessment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@tc342022"
    },
    {
      "line": 34,
      "name": "@555"
    },
    {
      "line": 1,
      "name": "@ManualReAssessment"
    },
    {
      "line": 1,
      "name": "@RaiseNotice"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks on Prev button and it should be on ReAssessement Summary Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user click on Next button on ReAsssessmnet Summary Tab and it should be on Payment Summary tab",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_user_has_done_the_filing_for_the_particular_month()"
});
formatter.result({
  "duration": 5000583066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 77
    },
    {
      "val": "December",
      "offset": 101
    },
    {
      "val": "2018",
      "offset": 115
    },
    {
      "val": "Approved User",
      "offset": 127
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String,String,String,String)"
});
formatter.result({
  "duration": 18114443014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 112
    },
    {
      "val": "2018",
      "offset": 126
    },
    {
      "val": "Approved User",
      "offset": 138
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_tpayer(String,String,String)"
});
formatter.result({
  "duration": 13088072261,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.user_clicks_on_Prev_button_and_it_should_be_on_ReAssessement_Summary_Tab()"
});
formatter.result({
  "duration": 4230645485,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.user_click_on_Next_button_on_ReAsssessmnet_Summary_Tab_and_it_should_be_on_Payment_Summary_tab()"
});
formatter.result({
  "duration": 5242233557,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 710459473,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@ReAssessmentRaiseNotice"
    },
    {
      "line": 46,
      "name": "@234525"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"\u003cperiod\u003e\"year\"\u003cyear\u003e\"tpayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user click Raise Notice button on Payment Summary page from ReAssessment module and Notice is generated as per the Liability Calculation Table and Payment Due Table",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "uname",
        "password",
        "period",
        "year",
        "msg",
        "penamt",
        "efiledamount",
        "NITVA",
        "nif",
        "nvat",
        "tpayer"
      ],
      "line": 54,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done;;1"
    },
    {
      "cells": [
        "DRC_ATC_ReAssessment_02",
        "Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done",
        "ritesh.prajapati",
        "admin",
        "December",
        "2018",
        "Saved Successfully",
        "500000",
        "800,00",
        "20181127030648745",
        "TestRefac",
        "nvat",
        "Approved User"
      ],
      "line": 55,
      "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5520773636,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done",
  "description": "",
  "id": "manual-reassessment--payment-summary-for-liability-calculation-and-payment-due-and-raise-notice;validate-the-tax-assessment-officer-is-able-to-raise-notice-for-a-particular-period-for-no-updation-in-manual-assessment-when-efiling-and-pymt-not-done;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@ReAssessmentRaiseNotice"
    },
    {
      "line": 1,
      "name": "@ManualReAssessment"
    },
    {
      "line": 1,
      "name": "@RaiseNotice"
    },
    {
      "line": 46,
      "name": "@234525"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "The user has done the filing for the particular month",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the assessemnt officer does the Reassessment for that particular month with \"no\" Updation for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"December\"year\"2018\"tpayer\"Approved User\"",
  "matchedColumns": [
    4,
    5,
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user click Raise Notice button on Payment Summary page from ReAssessment module and Notice is generated as per the Liability Calculation Table and Payment Due Table",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.the_user_has_done_the_filing_for_the_particular_month()"
});
formatter.result({
  "duration": 5001144188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 77
    },
    {
      "val": "December",
      "offset": 101
    },
    {
      "val": "2018",
      "offset": 115
    },
    {
      "val": "Approved User",
      "offset": 127
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String,String,String,String)"
});
formatter.result({
  "duration": 18055454499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "December",
      "offset": 112
    },
    {
      "val": "2018",
      "offset": 126
    },
    {
      "val": "Approved User",
      "offset": 138
    }
  ],
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_tpayer(String,String,String)"
});
formatter.result({
  "duration": 13097123458,
  "status": "passed"
});
formatter.match({
  "location": "PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.user_click_Raise_Notice_button_on_Payment_Summary_page_from_ReAssessment_module_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table()"
});
formatter.result({
  "duration": 22585286741,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 748441667,
  "status": "passed"
});
});