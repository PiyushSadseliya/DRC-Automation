$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/42_AccountAdjustmentStmtofTransac.feature");
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
  "name": "Account Adjustment Statement of Transaction TaxPayer Profile \u0026 Objection",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 19,
      "name": "@3012"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Validate the Account Adjustment flow with valid data for General from Tax Payer Profile internal portal",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@1882mtc1"
    },
    {
      "line": 22,
      "name": "@1882mtc30"
    },
    {
      "line": 22,
      "name": "@1882mtc31"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "\"\u003cTest Case Id\u003e\"\"\u003cDescription\u003e\"The officer has logged in with Uname\"\u003cuname\u003e\"Password\"\u003cpwd\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "selects action\"\u003caction\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "validates created date Performed By\"\u003cuser\u003e\" Source\"\u003csrc\u003e\" and TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "selects the Aprroved by officer\"\u003cApproveO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click on Add button and selects the transaction for adjustment\"\u003ctransid\u003e\"from\"\u003cfrom\u003e\"to\"\u003cto\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user selects Charge\"\u003ccharge\u003e\" and Enter Amount to be adjusted VAT Liability\"\u003cvatLiab\u003e\"LateFee\"\u003cltfee\u003e\"Penalty\"\u003cpen\u003e\"Interest should be non-editable",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select the reason\"\u003creason\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Enters comment in the Account Adjustment\"\u003ccomments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "selects the user \"\u003ctpayer\u003e\" to Approve the Account Adjusted done through internal adjstment\"Internal adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "status should be changed to \"Approve\" through to the account adjusted done through internal adjstment\"Internal adjustment\"TaxPayerName\"\u003ctpname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal;",
  "rows": [
    {
      "cells": [
        "Test Case Id",
        "Description",
        "uname",
        "pwd",
        "tpayer",
        "action",
        "user",
        "src",
        "ApproveO",
        "reason",
        "comments",
        "charge",
        "vatLiab",
        "ltfee",
        "pen"
      ],
      "line": 43,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal;;1"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_01",
        "Validate the Account Adjustment flow with valid data for General from Tax Payer Profile",
        "ketan",
        "ketan.prajapati",
        "Approved User",
        "General",
        "Ketan",
        "Internal adjustment",
        "Akib",
        "System Error",
        "Adjusted the amount",
        "Credit",
        "500",
        "0",
        "50000"
      ],
      "line": 44,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24845239612,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate the Account Adjustment flow with valid data for General from Tax Payer Profile internal portal",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 19,
      "name": "@3012"
    },
    {
      "line": 22,
      "name": "@1882mtc1"
    },
    {
      "line": 22,
      "name": "@1882mtc30"
    },
    {
      "line": 22,
      "name": "@1882mtc31"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "\"DRC_ATC_ACCAdjstmt_01\"\"Validate the Account Adjustment flow with valid data for General from Tax Payer Profile\"The officer has logged in with Uname\"ketan\"Password\"ketan.prajapati\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"Approved User\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "selects action\"General\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "validates created date Performed By\"Ketan\" Source\"Internal adjustment\" and TaxPayer\"Approved User\"",
  "matchedColumns": [
    4,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "selects the Aprroved by officer\"Akib\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click on Add button and selects the transaction for adjustment\"\u003ctransid\u003e\"from\"\u003cfrom\u003e\"to\"\u003cto\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user selects Charge\"Credit\" and Enter Amount to be adjusted VAT Liability\"500\"LateFee\"0\"Penalty\"50000\"Interest should be non-editable",
  "matchedColumns": [
    11,
    12,
    13,
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select the reason\"System Error\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Enters comment in the Account Adjustment\"Adjusted the amount\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "selects the user \"Approved User\" to Approve the Account Adjusted done through internal adjstment\"Internal adjustment\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "status should be changed to \"Approve\" through to the account adjusted done through internal adjstment\"Internal adjustment\"TaxPayerName\"\u003ctpname\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_ACCAdjstmt_01",
      "offset": 1
    },
    {
      "val": "Validate the Account Adjustment flow with valid data for General from Tax Payer Profile",
      "offset": 24
    },
    {
      "val": "ketan",
      "offset": 149
    },
    {
      "val": "ketan.prajapati",
      "offset": 164
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.the_officer_has_logged_in_with_Uname_Password(String,String,String,String)"
});
formatter.result({
  "duration": 147749906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved User",
      "offset": 73
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String)"
});
formatter.result({
  "duration": 17268527408,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
});
formatter.result({
  "duration": 5071490107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 15
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_action(String)"
});
formatter.result({
  "duration": 5400722592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ketan",
      "offset": 36
    },
    {
      "val": "Internal adjustment",
      "offset": 50
    },
    {
      "val": "Approved User",
      "offset": 84
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "duration": 169174909,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.source_ID_must_be_blank()"
});
formatter.result({
  "duration": 38118216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Akib",
      "offset": 32
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_Aprroved_by_officer(String)"
});
formatter.result({
  "duration": 6393241895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ctransid\u003e",
      "offset": 63
    },
    {
      "val": "\u003cfrom\u003e",
      "offset": 78
    },
    {
      "val": "\u003cto\u003e",
      "offset": 88
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to(String,String,String)"
});
formatter.result({
  "duration": 6813563915,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row()"
});
formatter.result({
  "duration": 2073899033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 74
    },
    {
      "val": "0",
      "offset": 86
    },
    {
      "val": "50000",
      "offset": 96
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(String,String,String,String)"
});
formatter.result({
  "duration": 3824002124,
  "error_message": "java.lang.AssertionError: expected [-307.68] but found [2.24]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat org.drc.vat.StepDefinitions.AccountAdjustmentStmtofTransac.user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(AccountAdjustmentStmtofTransac.java:361)\r\n\tat ✽.Then user selects Charge\"Credit\" and Enter Amount to be adjusted VAT Liability\"500\"LateFee\"0\"Penalty\"50000\"Interest should be non-editable(features/42_AccountAdjustmentStmtofTransac.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Error",
      "offset": 18
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.select_the_reason(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Adjusted the amount",
      "offset": 41
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.enters_comment_in_the_Account_Adjustment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_Account_Adjustment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved User",
      "offset": 18
    },
    {
      "val": "Internal adjustment",
      "offset": 97
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_user_to_Approve_the_Account_Adjusted_done_through_internal_adjstment(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.verifies_the_notice_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approve",
      "offset": 29
    },
    {
      "val": "Internal adjustment",
      "offset": 102
    },
    {
      "val": "\u003ctpname\u003e",
      "offset": 135
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.status_should_be_changed_to_through_to_the_account_adjusted_done_through_internal_adjstment_TaxPayerName(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 784652231,
  "status": "passed"
});
});