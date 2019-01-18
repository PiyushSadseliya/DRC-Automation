<<<<<<< HEAD
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
  "name": "selects the user \"\u003ctpayer\u003e\" to validate the \"\u003cbtn\u003e\" button for account adjustmentd done through internal adjstment\"Internal adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "selects the user \"\u003ctpayer\u003e\" to Approve the Account Adjusted done through internal adjstment\"Internal adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "status should be changed to \"Approve\" through to the account adjusted done through internal adjstment\"Internal adjustment\"TaxPayerName\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
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
        "pen",
        "btn"
      ],
      "line": 44,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal;;1"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_01",
        "Validate the Account Adjustment flow with valid data for General from Tax Payer Profile and previous buton",
        "ketan",
        "ketan.prajapati",
        "January Eight",
        "General",
        "Ketan",
        "Internal adjustment",
        "Akib",
        "System Error",
        "Adjusted the amount",
        "Credit",
        "5000",
        "5000",
        "5000",
        "previous"
      ],
      "line": 45,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-general-from-tax-payer-profile-internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29226482554,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
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
  "name": "\"DRC_ATC_ACCAdjstmt_01\"\"Validate the Account Adjustment flow with valid data for General from Tax Payer Profile and previous buton\"The officer has logged in with Uname\"ketan\"Password\"ketan.prajapati\"",
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
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"January Eight\"",
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
  "name": "validates created date Performed By\"Ketan\" Source\"Internal adjustment\" and TaxPayer\"January Eight\"",
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
  "name": "user selects Charge\"Credit\" and Enter Amount to be adjusted VAT Liability\"5000\"LateFee\"5000\"Penalty\"5000\"Interest should be non-editable",
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
  "name": "selects the user \"January Eight\" to validate the \"previous\" button for account adjustmentd done through internal adjstment\"Internal adjustment\"",
  "matchedColumns": [
    4,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "selects the user \"January Eight\" to Approve the Account Adjusted done through internal adjstment\"Internal adjustment\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "status should be changed to \"Approve\" through to the account adjusted done through internal adjstment\"Internal adjustment\"TaxPayerName\"January Eight\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_ACCAdjstmt_01",
      "offset": 1
    },
    {
      "val": "Validate the Account Adjustment flow with valid data for General from Tax Payer Profile and previous buton",
      "offset": 24
    },
    {
      "val": "ketan",
      "offset": 168
    },
    {
      "val": "ketan.prajapati",
      "offset": 183
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.the_officer_has_logged_in_with_Uname_Password(String,String,String,String)"
});
formatter.result({
  "duration": 167072099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 73
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String)"
});
formatter.result({
  "duration": 21172717563,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
});
formatter.result({
  "duration": 5051559812,
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
  "duration": 5398191286,
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
      "val": "January Eight",
      "offset": 84
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "duration": 142117212,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.source_ID_must_be_blank()"
});
formatter.result({
  "duration": 36413954,
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
  "duration": 6343298056,
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
  "duration": 6655224320,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row()"
});
formatter.result({
  "duration": 2073493052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit",
      "offset": 20
    },
    {
      "val": "5000",
      "offset": 74
    },
    {
      "val": "5000",
      "offset": 87
    },
    {
      "val": "5000",
      "offset": 100
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(String,String,String,String)"
});
formatter.result({
  "duration": 3822335175,
  "status": "passed"
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
  "duration": 7473734202,
  "status": "passed"
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
  "duration": 407052754,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Submit_button()"
});
formatter.result({
  "duration": 30132271419,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_Account_Adjustment()"
});
formatter.result({
  "duration": 28282477233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 18
    },
    {
      "val": "previous",
      "offset": 50
    },
    {
      "val": "Internal adjustment",
      "offset": 123
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_user_to_validate_the_button_for_account_adjustmentd_done_through_internal_adjstment(String,String,String)"
});
formatter.result({
  "duration": 17600064919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
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
  "duration": 29924139330,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.verifies_the_notice_generated()"
});
formatter.result({
  "duration": 10055374561,
  "status": "passed"
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
      "val": "January Eight",
      "offset": 135
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.status_should_be_changed_to_through_to_the_account_adjusted_done_through_internal_adjstment_TaxPayerName(String,String,String)"
});
formatter.result({
  "duration": 10887246325,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 730487955,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Validate the Account Adjustment flow with valid data for Reverse from TaxPayerProfile and then Rejects",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-reverse-from-taxpayerprofile-and-then-rejects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@1882mtc2"
    },
    {
      "line": 47,
      "name": "@1882mtc42"
    },
    {
      "line": 47,
      "name": "@2539mtc3"
    },
    {
      "line": 47,
      "name": "@2539mtc5"
    },
    {
      "line": 47,
      "name": "@2539mtc7"
    },
    {
      "line": 47,
      "name": "@2539mtc8"
    },
    {
      "line": 47,
      "name": "@2539mtc9"
    },
    {
      "line": 47,
      "name": "@1882mtc32"
    },
    {
      "line": 47,
      "name": "@1882mtc33"
    },
    {
      "line": 47,
      "name": "@1882mtc34"
    },
    {
      "line": 47,
      "name": "@1882mtc35"
    },
    {
      "line": 47,
      "name": "@1882mtc37"
    },
    {
      "line": 47,
      "name": "@1882mtc38"
    },
    {
      "line": 47,
      "name": "@1882mtc39"
    },
    {
      "line": 47,
      "name": "@1882mtc40"
    },
    {
      "line": 47,
      "name": "@1882mtc41"
    },
    {
      "line": 47,
      "name": "@Reject"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"\u003cTest Case Id\u003e\"\"\u003cDescription\u003e\"The officer has logged in with Uname\"\u003cuname\u003e\"Password\"\u003cpwd\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "selects action\"\u003caction\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "validates created date Performed By\"\u003cuser\u003e\" Source\"\u003csrc\u003e\" and TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "selects the Aprroved by officer\"\u003cApproveO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "click on Add button and selects the transaction for adjustment\"\u003ctransid\u003e\"from\"\u003cfrom\u003e\"to\"\u003cto\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user Enter Amount to be adjusted VAT Liability\"\u003cvatLiab\u003e\"LateFee\"\u003cltfee\u003e\"Penalty\"\u003cpen\u003e\"Interest should be non-editable for Reverse charge",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Select the reason\"\u003creason\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Enters comment in the Account Adjustment\"\u003ccomments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "selects the user \"\u003ctpayer\u003e\" to validate the \"\u003cbtn\u003e\" button for account adjustmentd done through internal adjstment\"Internal adjustment\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-reverse-from-taxpayerprofile-and-then-rejects;",
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
        "transid",
        "comments",
        "vatLiab",
        "ltfee",
        "pen",
        "btn"
      ],
      "line": 66,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-reverse-from-taxpayerprofile-and-then-rejects;;1"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_02",
        "Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile",
        "ketan",
        "ketan.prajapati",
        "January Eight",
        "Reverse",
        "Ketan",
        "Internal adjustment",
        "Akib",
        "System Error",
        "CT18112900019",
        "Adjusted the amount",
        "0",
        "0",
        "500000",
        "Reject"
      ],
      "line": 67,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-reverse-from-taxpayerprofile-and-then-rejects;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5520725207,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validate the Account Adjustment flow with valid data for Reverse from TaxPayerProfile and then Rejects",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-flow-with-valid-data-for-reverse-from-taxpayerprofile-and-then-rejects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@1882mtc34"
    },
    {
      "line": 47,
      "name": "@1882mtc35"
    },
    {
      "line": 47,
      "name": "@1882mtc2"
    },
    {
      "line": 47,
      "name": "@Reject"
    },
    {
      "line": 19,
      "name": "@3012"
    },
    {
      "line": 47,
      "name": "@1882mtc37"
    },
    {
      "line": 47,
      "name": "@1882mtc41"
    },
    {
      "line": 47,
      "name": "@1882mtc42"
    },
    {
      "line": 47,
      "name": "@1882mtc32"
    },
    {
      "line": 47,
      "name": "@1882mtc33"
    },
    {
      "line": 47,
      "name": "@1882mtc40"
    },
    {
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 47,
      "name": "@2539mtc9"
    },
    {
      "line": 47,
      "name": "@2539mtc7"
    },
    {
      "line": 47,
      "name": "@2539mtc8"
    },
    {
      "line": 47,
      "name": "@2539mtc5"
    },
    {
      "line": 47,
      "name": "@1882mtc38"
    },
    {
      "line": 47,
      "name": "@1882mtc39"
    },
    {
      "line": 47,
      "name": "@2539mtc3"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "\"DRC_ATC_ACCAdjstmt_02\"\"Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile\"The officer has logged in with Uname\"ketan\"Password\"ketan.prajapati\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"January Eight\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "selects action\"Reverse\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "validates created date Performed By\"Ketan\" Source\"Internal adjustment\" and TaxPayer\"January Eight\"",
  "matchedColumns": [
    4,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "selects the Aprroved by officer\"Akib\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "click on Add button and selects the transaction for adjustment\"CT18112900019\"from\"\u003cfrom\u003e\"to\"\u003cto\u003e\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user Enter Amount to be adjusted VAT Liability\"0\"LateFee\"0\"Penalty\"500000\"Interest should be non-editable for Reverse charge",
  "matchedColumns": [
    12,
    13,
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Select the reason\"System Error\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Enters comment in the Account Adjustment\"Adjusted the amount\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "selects the user \"January Eight\" to validate the \"Reject\" button for account adjustmentd done through internal adjstment\"Internal adjustment\"",
  "matchedColumns": [
    4,
    15
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_ACCAdjstmt_02",
      "offset": 1
    },
    {
      "val": "Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile",
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
  "duration": 473922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 73
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String)"
});
formatter.result({
  "duration": 21611871091,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
});
formatter.result({
  "duration": 5060655535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reverse",
      "offset": 15
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_action(String)"
});
formatter.result({
  "duration": 5367860241,
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
      "val": "January Eight",
      "offset": 84
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "duration": 224646139,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.source_ID_must_be_blank()"
});
formatter.result({
  "duration": 33034370,
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
  "duration": 6397619615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CT18112900019",
      "offset": 63
    },
    {
      "val": "\u003cfrom\u003e",
      "offset": 82
    },
    {
      "val": "\u003cto\u003e",
      "offset": 92
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to(String,String,String)"
});
formatter.result({
  "duration": 6813467438,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row()"
});
formatter.result({
  "duration": 2067838184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 57
    },
    {
      "val": "500000",
      "offset": 67
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable_for_Reverse_charge(String,String,String)"
});
formatter.result({
  "duration": 967496549,
  "status": "passed"
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
  "duration": 7541949699,
  "status": "passed"
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
  "duration": 300108407,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Submit_button()"
});
formatter.result({
  "duration": 30141071333,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_Account_Adjustment()"
});
formatter.result({
  "duration": 28313028568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 18
    },
    {
      "val": "Reject",
      "offset": 50
    },
    {
      "val": "Internal adjustment",
      "offset": 121
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_user_to_validate_the_button_for_account_adjustmentd_done_through_internal_adjstment(String,String,String)"
});
formatter.result({
  "duration": 20760067791,
  "error_message": "java.lang.AssertionError: expected [Internal adjustment] but found [Account Adjustment]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat org.drc.vat.StepDefinitions.AccountAdjustmentStmtofTransac.selects_the_user_to_validate_the_button_for_account_adjustmentd_done_through_internal_adjstment(AccountAdjustmentStmtofTransac.java:644)\r\n\tat ✽.Then selects the user \"January Eight\" to validate the \"Reject\" button for account adjustmentd done through internal adjstment\"Internal adjustment\"(features/42_AccountAdjustmentStmtofTransac.feature:63)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 781599208,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@1882mtc2"
    },
    {
      "line": 69,
      "name": "@1882mtc6"
    },
    {
      "line": 69,
      "name": "@1882mtc17"
    },
    {
      "line": 69,
      "name": "@1882mtc18"
    },
    {
      "line": 69,
      "name": "@1882mtc20"
    },
    {
      "line": 69,
      "name": "@1882mtc21"
    },
    {
      "line": 69,
      "name": "@1882mtc22"
    },
    {
      "line": 69,
      "name": "@1882mtc23"
    },
    {
      "line": 69,
      "name": "@1882mtc24"
    },
    {
      "line": 69,
      "name": "@1882mtc25"
    },
    {
      "line": 69,
      "name": "@1882mtct26"
    },
    {
      "line": 69,
      "name": "@1882mtc27"
    },
    {
      "line": 69,
      "name": "@1882mtc28"
    },
    {
      "line": 69,
      "name": "@Cancel"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "\"\u003cTest Case Id\u003e\"\"\u003cDescription\u003e\"The officer has logged in with Uname\"\u003cuname\u003e\"Password\"\u003cpwd\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"\u003ctpayer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "selects action\"\u003caction\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "validates created date Performed By\"\u003cuser\u003e\" Source\"\u003csrc\u003e\" and TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Performed by,Source id,TaxPayer,NItva must be disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "selects the Aprroved by officer\"\u003cApproveO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "click on Add button and selects the transaction for adjustment\"\u003ctransid\u003e\"from\"\u003cfrom\u003e\"to\"\u003cto\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "click on Add button and selects the transaction for adjustment\"\u003ctransid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Message should be shown \"Record Already Selected\"",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "click on cross button on Statemnent of Transaction pop Up",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Select the reason\"\u003creason\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Enters comment in the Account Adjustment\"\u003ccomments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Removes the records for adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "clicks on cancel button",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user should be on Tax Payer Profile page of \"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records;",
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
        "tpname",
        "transid",
        "from",
        "to",
        "reason",
        "comments"
      ],
      "line": 91,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records;;1"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_03",
        "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action-General)",
        "ketan",
        "ketan.prajapati",
        "January Eight",
        "General",
        "Ketan",
        "Internal adjustment",
        "Akib",
        "System Error",
        "Test Ref",
        "DT18101600010",
        "2018-10-16",
        "2018-10-16",
        "Objection",
        "The amount would is adjusted"
      ],
      "line": 92,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records;;2"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_04",
        "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action -Reverse)",
        "ketan",
        "ketan.prajapati",
        "January Eight",
        "Reverse",
        "Ketan",
        "Internal adjustment",
        "Akib",
        "System Error",
        "Test Ref",
        "DT18101600010",
        "2018-10-16",
        "2018-10-16",
        "System Error",
        "The amount would is adjusted"
      ],
      "line": 93,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5519296600,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@1882mtc23"
    },
    {
      "line": 69,
      "name": "@1882mtc24"
    },
    {
      "line": 69,
      "name": "@1882mtc2"
    },
    {
      "line": 69,
      "name": "@1882mtc25"
    },
    {
      "line": 19,
      "name": "@3012"
    },
    {
      "line": 69,
      "name": "@1882mtct26"
    },
    {
      "line": 69,
      "name": "@1882mtc20"
    },
    {
      "line": 69,
      "name": "@1882mtc21"
    },
    {
      "line": 69,
      "name": "@1882mtc22"
    },
    {
      "line": 69,
      "name": "@1882mtc6"
    },
    {
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 69,
      "name": "@Cancel"
    },
    {
      "line": 69,
      "name": "@1882mtc27"
    },
    {
      "line": 69,
      "name": "@1882mtc17"
    },
    {
      "line": 69,
      "name": "@1882mtc28"
    },
    {
      "line": 69,
      "name": "@1882mtc18"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "\"DRC_ATC_ACCAdjstmt_03\"\"Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action-General)\"The officer has logged in with Uname\"ketan\"Password\"ketan.prajapati\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"January Eight\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "selects action\"General\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "validates created date Performed By\"Ketan\" Source\"Internal adjustment\" and TaxPayer\"January Eight\"",
  "matchedColumns": [
    4,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Performed by,Source id,TaxPayer,NItva must be disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "selects the Aprroved by officer\"Akib\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "click on Add button and selects the transaction for adjustment\"DT18101600010\"from\"2018-10-16\"to\"2018-10-16\"",
  "matchedColumns": [
    11,
    12,
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "click on Add button and selects the transaction for adjustment\"DT18101600010\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Message should be shown \"Record Already Selected\"",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "click on cross button on Statemnent of Transaction pop Up",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Select the reason\"System Error\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Enters comment in the Account Adjustment\"The amount would is adjusted\"",
  "matchedColumns": [
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Removes the records for adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "clicks on cancel button",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user should be on Tax Payer Profile page of \"January Eight\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_ACCAdjstmt_03",
      "offset": 1
    },
    {
      "val": "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action-General)",
      "offset": 24
    },
    {
      "val": "ketan",
      "offset": 211
    },
    {
      "val": "ketan.prajapati",
      "offset": 226
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.the_officer_has_logged_in_with_Uname_Password(String,String,String,String)"
});
formatter.result({
  "duration": 325163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 73
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String)"
});
formatter.result({
  "duration": 21664703911,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
});
formatter.result({
  "duration": 5053829112,
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
  "duration": 5421100584,
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
      "val": "January Eight",
      "offset": 84
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "duration": 189743723,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.source_ID_must_be_blank()"
});
formatter.result({
  "duration": 33567284,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.performed_by_Source_id_TaxPayer_NItva_must_be_disabled()"
});
formatter.result({
  "duration": 114897014,
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
  "duration": 6417191505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DT18101600010",
      "offset": 63
    },
    {
      "val": "2018-10-16",
      "offset": 82
    },
    {
      "val": "2018-10-16",
      "offset": 96
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to(String,String,String)"
});
formatter.result({
  "duration": 6753931021,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row()"
});
formatter.result({
  "duration": 2069145389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DT18101600010",
      "offset": 63
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_transaction_for_adjustment(String)"
});
formatter.result({
  "duration": 4440652241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Record Already Selected",
      "offset": 25
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.message_should_be_shown(String)"
});
formatter.result({
  "duration": 2051382840,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_cross_button_on_Statemnent_of_Transaction_pop_Up()"
});
formatter.result({
  "duration": 2234254543,
  "status": "passed"
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
  "duration": 7516385809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The amount would is adjusted",
      "offset": 41
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.enters_comment_in_the_Account_Adjustment(String)"
});
formatter.result({
  "duration": 435351603,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.removes_the_records_for_adjustment()"
});
formatter.result({
  "duration": 4423940699,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.clicks_on_cancel_button()"
});
formatter.result({
  "duration": 2210063402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 45
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_should_be_on_Tax_Payer_Profile_page_of(String)"
});
formatter.result({
  "duration": 8054583171,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 681658826,
  "status": "passed"
});
formatter.before({
  "duration": 5515304307,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-actions-type,reason-type,cancel-button,cross-button-in-statement-pop-up,same-records-selection,remove-adjustment-records;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 69,
      "name": "@1882mtc23"
    },
    {
      "line": 69,
      "name": "@1882mtc24"
    },
    {
      "line": 69,
      "name": "@1882mtc2"
    },
    {
      "line": 69,
      "name": "@1882mtc25"
    },
    {
      "line": 19,
      "name": "@3012"
    },
    {
      "line": 69,
      "name": "@1882mtct26"
    },
    {
      "line": 69,
      "name": "@1882mtc20"
    },
    {
      "line": 69,
      "name": "@1882mtc21"
    },
    {
      "line": 69,
      "name": "@1882mtc22"
    },
    {
      "line": 69,
      "name": "@1882mtc6"
    },
    {
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 69,
      "name": "@Cancel"
    },
    {
      "line": 69,
      "name": "@1882mtc27"
    },
    {
      "line": 69,
      "name": "@1882mtc17"
    },
    {
      "line": 69,
      "name": "@1882mtc28"
    },
    {
      "line": 69,
      "name": "@1882mtc18"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "\"DRC_ATC_ACCAdjstmt_04\"\"Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action -Reverse)\"The officer has logged in with Uname\"ketan\"Password\"ketan.prajapati\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"January Eight\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "selects action\"Reverse\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "validates created date Performed By\"Ketan\" Source\"Internal adjustment\" and TaxPayer\"January Eight\"",
  "matchedColumns": [
    4,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Source ID must be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Performed by,Source id,TaxPayer,NItva must be disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "selects the Aprroved by officer\"Akib\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "click on Add button and selects the transaction for adjustment\"DT18101600010\"from\"2018-10-16\"to\"2018-10-16\"",
  "matchedColumns": [
    11,
    12,
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "click on Add button and selects the transaction for adjustment\"DT18101600010\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Message should be shown \"Record Already Selected\"",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "click on cross button on Statemnent of Transaction pop Up",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Select the reason\"System Error\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Enters comment in the Account Adjustment\"The amount would is adjusted\"",
  "matchedColumns": [
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "Removes the records for adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "clicks on cancel button",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user should be on Tax Payer Profile page of \"January Eight\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_ACCAdjstmt_04",
      "offset": 1
    },
    {
      "val": "Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action -Reverse)",
      "offset": 24
    },
    {
      "val": "ketan",
      "offset": 212
    },
    {
      "val": "ketan.prajapati",
      "offset": 227
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.the_officer_has_logged_in_with_Uname_Password(String,String,String,String)"
});
formatter.result({
  "duration": 291535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 73
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String)"
});
formatter.result({
  "duration": 22387730221,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
});
formatter.result({
  "duration": 5052092441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reverse",
      "offset": 15
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_action(String)"
});
formatter.result({
  "duration": 5383386834,
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
      "val": "January Eight",
      "offset": 84
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "duration": 180160969,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.source_ID_must_be_blank()"
});
formatter.result({
  "duration": 29377784,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.performed_by_Source_id_TaxPayer_NItva_must_be_disabled()"
});
formatter.result({
  "duration": 136879270,
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
  "duration": 6411150489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DT18101600010",
      "offset": 63
    },
    {
      "val": "2018-10-16",
      "offset": 82
    },
    {
      "val": "2018-10-16",
      "offset": 96
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to(String,String,String)"
});
formatter.result({
  "duration": 6701922080,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row()"
});
formatter.result({
  "duration": 2075378483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DT18101600010",
      "offset": 63
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_transaction_for_adjustment(String)"
});
formatter.result({
  "duration": 4419394690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Record Already Selected",
      "offset": 25
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.message_should_be_shown(String)"
});
formatter.result({
  "duration": 2053222389,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_cross_button_on_Statemnent_of_Transaction_pop_Up()"
});
formatter.result({
  "duration": 2225953060,
  "status": "passed"
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
  "duration": 7564436656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The amount would is adjusted",
      "offset": 41
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.enters_comment_in_the_Account_Adjustment(String)"
});
formatter.result({
  "duration": 398608782,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.removes_the_records_for_adjustment()"
});
formatter.result({
  "duration": 4392467168,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.clicks_on_cancel_button()"
});
formatter.result({
  "duration": 2208760186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January Eight",
      "offset": 45
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_should_be_on_Tax_Payer_Profile_page_of(String)"
});
formatter.result({
  "duration": 8054910043,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 759648300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 96,
  "name": "Validate the Account Adjustment with valid data through objection management",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-objection-management",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@1882Objection"
    },
    {
      "line": 95,
      "name": "@1882mtc5"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "\"\u003cTest Case Id\u003e\"\"\u003cDescription\u003e\"The officer has logged in with Uname\"\u003cuname\u003e\"Password\"\u003cpwd\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "user click on Case Management",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user performs the Account adjustment for taxpayer\"\u003ctpayer\u003e\"CaseId\"\u003ccid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "officer the performs the action \"Under Review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "click on submit button on Case Management",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "officer the performs the action \"Request adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "click on submit button on Case Management",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "officer the performs the action \"Perform Adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "click on submit button on Case Management",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "selects action\"\u003caction\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "validates created date Performed By\"\u003cuser\u003e\" Source\"\u003csrc\u003e\" and TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Source Id must be CaseId\"\u003ccid\u003e\" from Objection",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "selects the Aprroved by officer\"\u003cApproveO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "click on Add button and selects the Assessment id\"\u003ctransid\u003e\" for adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "user selects Charge\"\u003ccharge\u003e\" and Enter Amount to be adjusted VAT Liability\"\u003cvatLiab\u003e\"LateFee\"\u003cltfee\u003e\"Penalty\"\u003cpen\u003e\"Interest should be non-editable",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "Select the reason\"\u003creason\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Enters comment in the Account Adjustment\"\u003ccomments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "user is Case Management with Status \"Adjustment In Progress\" and Case id\"\u003ccid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "selects the user \"\u003ctpname\u003e\" with case id \"\u003ccid\u003e\"Approve the Account Adjusted done through Obection and Appeal\"Objection\"",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "status should be changed to \"Approve\" through to the account adjusted done through Objection \u0026 Appeal\"Objection\" of CaseId\"\u003ccid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 122,
  "name": "",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-objection-management;",
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
        "transid",
        "comments",
        "charge",
        "total",
        "ltfee",
        "pen",
        "cid"
      ],
      "line": 123,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-objection-management;;1"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_07",
        "Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit)",
        "ketan.prajapati",
        "admin",
        "ak holi",
        "General",
        "Ketan",
        "Objection",
        "Akib",
        "Objection",
        "CT18110600002",
        "The amount would is adjusted",
        "Debit",
        "plus",
        "5000",
        "5000",
        "O19011500000001"
      ],
      "line": 124,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-objection-management;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5525373239,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "Validate the Account Adjustment with valid data through objection management",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-objection-management;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@1882Objection"
    },
    {
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 19,
      "name": "@3012"
    },
    {
      "line": 95,
      "name": "@1882mtc5"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "\"DRC_ATC_ACCAdjstmt_07\"\"Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit)\"The officer has logged in with Uname\"ketan.prajapati\"Password\"admin\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "user click on Case Management",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user performs the Account adjustment for taxpayer\"ak holi\"CaseId\"O19011500000001\"",
  "matchedColumns": [
    16,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "officer the performs the action \"Under Review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "click on submit button on Case Management",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "officer the performs the action \"Request adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "click on submit button on Case Management",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "officer the performs the action \"Perform Adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "click on submit button on Case Management",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "selects action\"General\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "validates created date Performed By\"Ketan\" Source\"Objection\" and TaxPayer\"ak holi\"",
  "matchedColumns": [
    4,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Source Id must be CaseId\"O19011500000001\" from Objection",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "selects the Aprroved by officer\"Akib\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "click on Add button and selects the Assessment id\"CT18110600002\" for adjustment",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Three row must be displayed with Old Records,Adustment row and total row",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "user selects Charge\"Debit\" and Enter Amount to be adjusted VAT Liability\"\u003cvatLiab\u003e\"LateFee\"5000\"Penalty\"5000\"Interest should be non-editable",
  "matchedColumns": [
    12,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "Select the reason\"Objection\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Enters comment in the Account Adjustment\"The amount would is adjusted\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "user is Case Management with Status \"Adjustment In Progress\" and Case id\"O19011500000001\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "selects the user \"\u003ctpname\u003e\" with case id \"O19011500000001\"Approve the Account Adjusted done through Obection and Appeal\"Objection\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "status should be changed to \"Approve\" through to the account adjusted done through Objection \u0026 Appeal\"Objection\" of CaseId\"O19011500000001\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_ACCAdjstmt_07",
      "offset": 1
    },
    {
      "val": "Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit)",
      "offset": 24
    },
    {
      "val": "ketan.prajapati",
      "offset": 158
    },
    {
      "val": "admin",
      "offset": 183
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.the_officer_has_logged_in_with_Uname_Password(String,String,String,String)"
});
formatter.result({
  "duration": 329438,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_click_on_Case_Management()"
});
formatter.result({
  "duration": 8372545321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ak holi",
      "offset": 50
    },
    {
      "val": "O19011500000001",
      "offset": 65
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_performs_the_Account_adjustment_for_taxpayer_CaseId(String,String)"
});
formatter.result({
  "duration": 29837343389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Under Review",
      "offset": 33
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.officer_the_performs_the_action(String)"
});
formatter.result({
  "duration": 10950322484,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@formcontrolname\u003d\u0027issueReferenceId\u0027]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57284}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: d2fa4cae75359b9a3f585eb947bf2c72\n*** Element info: {Using\u003dxpath, value\u003d//input[@formcontrolname\u003d\u0027issueReferenceId\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.appmanager.HelperBase.getvalue(HelperBase.java:645)\r\n\tat org.drc.vat.StepDefinitions.AccountAdjustmentStmtofTransac.officer_the_performs_the_action(AccountAdjustmentStmtofTransac.java:724)\r\n\tat ✽.Then officer the performs the action \"Under Review\"(features/42_AccountAdjustmentStmtofTransac.feature:100)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_submit_button_on_Case_Management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request adjustment",
      "offset": 33
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.officer_the_performs_the_action(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_submit_button_on_Case_Management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Perform Adjustment",
      "offset": 33
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.officer_the_performs_the_action(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_submit_button_on_Case_Management()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ketan",
      "offset": 36
    },
    {
      "val": "Objection",
      "offset": 50
    },
    {
      "val": "ak holi",
      "offset": 74
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "O19011500000001",
      "offset": 25
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.source_Id_must_be_CaseId_from_Objection(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CT18110600002",
      "offset": 50
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button_and_selects_the_Assessment_id_for_adjustment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Debit",
      "offset": 20
    },
    {
      "val": "\u003cvatLiab\u003e",
      "offset": 73
    },
    {
      "val": "5000",
      "offset": 91
    },
    {
      "val": "5000",
      "offset": 104
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Objection",
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
      "val": "The amount would is adjusted",
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
  "arguments": [
    {
      "val": "Adjustment In Progress",
      "offset": 37
    },
    {
      "val": "O19011500000001",
      "offset": 73
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_is_Case_Management_with_Status_and_Case_id(String,String)"
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
      "val": "\u003ctpname\u003e",
      "offset": 18
    },
    {
      "val": "O19011500000001",
      "offset": 42
    },
    {
      "val": "Objection",
      "offset": 120
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_user_with_case_id_Approve_the_Account_Adjusted_done_through_Obection_and_Appeal(String,String,String)"
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
      "val": "Objection",
      "offset": 102
    },
    {
      "val": "O19011500000001",
      "offset": 123
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.status_should_be_changed_to_through_to_the_account_adjusted_done_through_Objection_Appeal_of_CaseId(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 705186246,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 126,
  "name": "Validate the Account Adjustment with valid data through debt",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-debt",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/03_01uploadDocuments.feature");
formatter.feature({
  "line": 2,
  "name": "Upload Documents after all process are completed till the Banks details",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Individual 4 docs poa*,a/c*,loa*,lyr"
    }
  ],
  "line": 6,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document",
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
<<<<<<< HEAD
      "line": 125,
      "name": "@2825DebtManagemnet"
=======
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 127,
  "name": "\"\u003cTest Case Id\u003e\"\"\u003cDescription\u003e\"The officer has logged in with Uname\"\u003cuname\u003e\"Password\"\u003cpwd\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "user click on Case Management",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "user performs the Account adjustment for taxpayer\"\u003ctpayer\u003e\"with \"request adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "user should be on Debt Collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "Status \"Request adjustment\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Selects Action \"Adjustment Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "Selects Action \"Request adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "selects action\"\u003caction\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "validates created date Performed By\"\u003cuser\u003e\" Source\"\u003csrc\u003e\" and TaxPayer\"\u003ctpayer\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Source Id must be CaseId from Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "selects the Aprroved by officer\"\u003cApproveO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "selects the transaction for DEBT Adjustment from records of \"internal adjustment\" \"Assessment\" \"ReAssessment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "Select the reason\"\u003creason\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Enters comment in the Account Adjustment\"\u003ccomments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "selects user of TaxPayer \"\u003ctpayer\u003e\" with Case Id to Approve the Account Adjustment Performed by\"\u003cuser\u003e\" action\"\u003caction\u003e\" Approve Officer\"\u003cApproveO\u003e\" Source\"\u003csrc\u003e\" reason\"\u003creason\u003e\"Comments\"\u003ccomments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "verifies the notice generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 149,
  "name": "",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-debt;",
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
        "transid",
        "reason",
        "comments",
        "charge",
        "total",
        "vatLiab",
        "ltfee",
        "pen"
      ],
      "line": 150,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-debt;;1"
    },
    {
      "cells": [
        "DRC_ATC_ACCAdjstmt_09",
        "Validate the Account Adjustment with valid data for Reverse from Tax Payer Profile (charge Credit)",
        "ketan.prajapati",
        "admin",
        "Regression One",
        "Reverse",
        "Ketan",
        "Debt source",
        "Akib",
        "CT18110600003",
        "System Error",
        "The amount would is adjusted",
        "Credit",
        "minus",
        "0",
        "0",
        "0"
      ],
      "line": 151,
      "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-debt;;2"
=======
  "line": 7,
  "name": "The users has logged in \"\u003cuname\u003e\"\"\u003cpwd\u003e\" and proceeds for VAT Registration \"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"\u003cPOA\u003e\"\"\u003cPOA path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"\u003cA/C Proof\u003e\" \"\u003ca/c path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "LOAuth\"\u003cLOAuth\u003e\" \"\u003cLOAuthpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"\u003cRevenue\u003e\"\"\u003cRevpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "POA",
        "POA path",
        "A/C Proof",
        "a/c path",
        "COI",
        "COIpath",
        "LAWdegree",
        "LAWpath",
        "LOAuth",
        "LOAuthpath",
        "Revenue",
        "Revpath",
        "uname",
        "pwd"
      ],
      "line": 23,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;;1"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Required_doc_01",
        "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1_1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "regressionnine@mailinator.com",
        "Test@123"
      ],
      "line": 24,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;;2"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
    }
  ],
  "keyword": "Examples"
});
formatter.before({
<<<<<<< HEAD
  "duration": 5523022720,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "Validate the Account Adjustment with valid data through debt",
  "description": "",
  "id": "account-adjustment-statement-of-transaction-taxpayer-profile-\u0026-objection;validate-the-account-adjustment-with-valid-data-through-debt;;2",
=======
  "duration": 8862273509,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document;;2",
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
<<<<<<< HEAD
      "line": 19,
      "name": "@AccountAdjustment"
    },
    {
      "line": 19,
      "name": "@3012"
    },
    {
      "line": 125,
      "name": "@2825DebtManagemnet"
=======
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 127,
  "name": "\"DRC_ATC_ACCAdjstmt_09\"\"Validate the Account Adjustment with valid data for Reverse from Tax Payer Profile (charge Credit)\"The officer has logged in with Uname\"ketan.prajapati\"Password\"admin\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
=======
  "line": 7,
  "name": "The users has logged in \"regressionnine@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)\"",
  "matchedColumns": [
    0,
    1,
    14,
    15
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
  ],
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 128,
  "name": "user click on Case Management",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "user performs the Account adjustment for taxpayer\"Regression One\"with \"request adjustment\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "user should be on Debt Collection Case",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "Status \"Request adjustment\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Selects Action \"Adjustment Completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "Selects Action \"Request adjustment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "click on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "user is on account adustment page",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "selects action\"Reverse\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "validates created date Performed By\"Ketan\" Source\"Debt source\" and TaxPayer\"Regression One\"",
  "matchedColumns": [
    4,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Source Id must be CaseId from Debt Management",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "selects the Aprroved by officer\"Akib\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "selects the transaction for DEBT Adjustment from records of \"internal adjustment\" \"Assessment\" \"ReAssessment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "Select the reason\"System Error\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Enters comment in the Account Adjustment\"The amount would is adjusted\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "click on Account Adjustment",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "selects user of TaxPayer \"Regression One\" with Case Id to Approve the Account Adjustment Performed by\"Ketan\" action\"Reverse\" Approve Officer\"Akib\" Source\"Debt source\" reason\"System Error\"Comments\"The amount would is adjusted\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "verifies the notice generated",
=======
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"Capture.png\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "COI \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "LawDegree \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "LOAuth\"doc_desc1_1\" \"Capture.png\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"doc_desc1\"\"Capture.png\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "DRC_ATC_ACCAdjstmt_09",
      "offset": 1
    },
    {
      "val": "Validate the Account Adjustment with valid data for Reverse from Tax Payer Profile (charge Credit)",
      "offset": 24
    },
    {
      "val": "ketan.prajapati",
      "offset": 160
    },
    {
      "val": "admin",
      "offset": 185
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.the_officer_has_logged_in_with_Uname_Password(String,String,String,String)"
});
formatter.result({
  "duration": 352521,
  "status": "passed"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_click_on_Case_Management()"
});
formatter.result({
  "duration": 61259540578,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027/case-management\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.AccountAdjustmentStmtofTransac.user_click_on_Case_Management(AccountAdjustmentStmtofTransac.java:688)\r\n\tat ✽.When user click on Case Management(features/42_AccountAdjustmentStmtofTransac.feature:128)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //a[@href\u003d\u0027/case-management\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.AccountAdjustmentStmtofTransac.user_click_on_Case_Management(AccountAdjustmentStmtofTransac.java:688)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
=======
      "val": "regressionnine@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 56
    },
    {
      "val": "DRC_ATC_Valid_Required_doc_01",
      "offset": 101
    },
    {
      "val": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)",
      "offset": 133
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 76887533358,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@for\u003d\u0027exampleCheck1\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(UploadDocuments.java:62)\r\n\tat ✽.Given The users has logged in \"regressionnine@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)\"(features/03_01uploadDocuments.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@for\u003d\u0027exampleCheck1\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(UploadDocuments.java:62)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Regression One",
      "offset": 50
    },
    {
      "val": "request adjustment",
      "offset": 71
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.user_performs_the_Account_adjustment_for_taxpayer_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.user_should_be_on_Debt_Collection_Case()"
=======
      "val": "Natural Person",
      "offset": 18
    },
    {
      "val": "Individual",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Request adjustment",
      "offset": 8
    }
  ],
  "location": "DebtCollectionCaseScreen.status_should_be_displayed(String)"
=======
      "val": "4843758943798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 39
    },
    {
      "val": "Newman",
      "offset": 52
    },
    {
      "val": "Mining",
      "offset": 61
    },
    {
      "val": "2018-02-12",
      "offset": 70
    },
    {
      "val": "Small Scale",
      "offset": 83
    },
    {
      "val": "8965741235698",
      "offset": 97
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Adjustment Completed",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
=======
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Ituri",
      "offset": 75
    },
    {
      "val": "Bunia",
      "offset": 83
    },
    {
      "val": "4563212",
      "offset": 91
    },
    {
      "val": "9865327452",
      "offset": 101
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
<<<<<<< HEAD
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
=======
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Request adjustment",
      "offset": 16
    }
  ],
  "location": "DebtCollectionCaseScreen.selects_Action(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DebtCollectionCaseScreen.click_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.user_is_on_account_adustment_page()"
=======
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "1rivet",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 43
    },
    {
      "val": "Branch4",
      "offset": 57
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Reverse",
      "offset": 15
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_action(String)"
=======
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "Capture.png",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Ketan",
      "offset": 36
    },
    {
      "val": "Debt source",
      "offset": 50
    },
    {
      "val": "Regression One",
      "offset": 76
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.validates_created_date_Performed_By_Source_and_TaxPayer(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.source_Id_must_be_CaseId_from_Debt_Management()"
=======
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "Akib",
      "offset": 32
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_Aprroved_by_officer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountAdjustmentStmtofTransac.click_on_Add_button()"
=======
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.coi(String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "internal adjustment",
      "offset": 61
    },
    {
      "val": "Assessment",
      "offset": 83
    },
    {
      "val": "ReAssessment",
      "offset": 96
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_the_transaction_for_DEBT_Adjustment_from_records_of(String,String,String)"
=======
      "val": "doc_desc1",
      "offset": 11
    },
    {
      "val": "Capture.png",
      "offset": 23
    }
  ],
  "location": "UploadDocuments.lawdegree(String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "System Error",
      "offset": 18
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.select_the_reason(String)"
=======
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "Capture.png",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "The amount would is adjusted",
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
=======
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "Capture.png",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
<<<<<<< HEAD
  "arguments": [
    {
      "val": "Regression One",
      "offset": 26
    },
    {
      "val": "Ketan",
      "offset": 102
    },
    {
      "val": "Reverse",
      "offset": 116
    },
    {
      "val": "Akib",
      "offset": 141
    },
    {
      "val": "Debt source",
      "offset": 154
    },
    {
      "val": "System Error",
      "offset": 174
    },
    {
      "val": "The amount would is adjusted",
      "offset": 196
    }
  ],
  "location": "AccountAdjustmentStmtofTransac.selects_user_of_TaxPayer_with_Case_Id_to_Approve_the_Account_Adjustment_Performed_by_action_Approve_Officer_Source_reason_Comments(String,String,String,String,String,String,String)"
=======
  "location": "UploadDocuments.views_the_files()"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
formatter.match({
<<<<<<< HEAD
  "location": "AccountAdjustmentStmtofTransac.verifies_the_notice_generated()"
=======
  "location": "UploadDocuments.clicks_on_Continue()"
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
});
formatter.result({
  "status": "skipped"
});
<<<<<<< HEAD
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1047089038,
=======
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 826171156,
>>>>>>> 2c14621b1dc01aa6fe4f68d223af639d634fd720
  "status": "passed"
});
});