@AccountAdjustment @3012
Feature: Account Adjustment Statement of Transaction TaxPayer Profile & Objection

  @1882mtc1 @1882mtc30 @1882mtc31
  Scenario Outline: Validate the Account Adjustment flow with valid data for General from Tax Payer Profile internal portal and Previous button
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>" Source"<src>" and TaxPayer"<tpayer>"
    Then Source ID must be blank
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user selects Charge"<charge>" and Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button
    Then click on Account Adjustment
    Then selects the user "<tpayer>" to validate the "<btn>" button for account adjustmentd done through internal adjstment"Internal adjustment"
    Then selects the user "<tpayer>" to Approve the Account Adjusted done through internal adjstment"Internal adjustment"
    Then verifies the notice generated
    Then status should be changed to "Approve" through to the account adjusted done through internal adjstment"Internal adjustment"TaxPayerName"<tpayer>"

    Examples: 
      | Test Case Id          | Description                                                                                                | uname | pwd             | tpayer             | action  | user  | src                 | ApproveO | reason       | comments            | charge | vatLiab | ltfee | pen  | btn      |
      | DRC_ATC_ACCAdjstmt_01 | Validate the Account Adjustment flow with valid data for General from Tax Payer Profile and previous buton | ketan | ketan.prajapati | Regression DecMon | General | Ketan | Internal adjustment | Akib     | System Error | Adjusted the amount | Credit |    5000 |  5000 | 5000 | previous |

  @1882mtc2 @1882mtc42 @2539mtc3 @2539mtc5 @2539mtc7 @2539mtc8 @2539mtc9 @1882mtc32 @1882mtc33 @1882mtc34 @1882mtc35 @1882mtc37 @1882mtc38 @1882mtc39 @1882mtc40 @1882mtc41 @Reject
  Scenario Outline: Validate the Account Adjustment flow with valid data for Reverse from TaxPayerProfile and then Rejects
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>" Source"<src>" and TaxPayer"<tpayer>"
    Then Source ID must be blank
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable for Reverse charge
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
   Then clicks on Submit button
    Then click on Account Adjustment
    Then selects the user "<tpayer>" to validate the "<btn>" button for account adjustmentd done through internal adjstment"Internal adjustment"

    Examples: 
      | Test Case Id          | Description                                                                             | uname | pwd             | tpayer             | action  | user  | src                 | ApproveO | reason       | transid       | comments            | vatLiab | ltfee | pen    | btn    |
      | DRC_ATC_ACCAdjstmt_02 | Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile | ketan | ketan.prajapati |Regression DecMon | Reverse | Ketan | Internal adjustment | Akib     | System Error | CT18112900019 | Adjusted the amount |       0 |     0 | 500000 | Reject |

  @1882mtc2 @1882mtc6 @1882mtc17 @1882mtc18 @1882mtc20 @1882mtc21 @1882mtc22 @1882mtc23 @1882mtc24 @1882mtc25 @1882mtct26 @1882mtc27 @1882mtc28 @Cancel
  Scenario Outline: Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>" Source"<src>" and TaxPayer"<tpayer>"
    Then Source ID must be blank
    Then Performed by,Source id,TaxPayer,NItva must be disabled
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then click on Add button and selects the transaction for adjustment"<transid>"
    Then Message should be shown "Record Already Selected"
    Then click on cross button on Statemnent of Transaction pop Up
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then Removes the records for adjustment
    Then clicks on cancel button
    Then user should be on Tax Payer Profile page of "<tpayer>"

    Examples: 
      | Test Case Id          | Description                                                                                                                                            | uname | pwd             | tpayer             | action  | user  | src                 | ApproveO | reason       | tpname             | transid       | from       | to         | reason       | comments                     |
      | DRC_ATC_ACCAdjstmt_03 | Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action-General)  | ketan | ketan.prajapati | Regression DecMon| General | Ketan | Internal adjustment | Akib     | System Error | Regression DecMon| DT18101600010 | 2018-10-16 | 2018-10-16 | Objection    | The amount would is adjusted |
      | DRC_ATC_ACCAdjstmt_04 | Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action -Reverse) | ketan | ketan.prajapati | Regression DecMon | Reverse | Ketan | Internal adjustment | Akib     | System Error | Regression DecMon| DT18101600010 | 2018-10-16 | 2018-10-16 | System Error | The amount would is adjusted |

  @1882Objection @1882mtc5
  Scenario Outline: Validate the Account Adjustment with valid data through objection management internal portal
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When user click on Case Management
    Then user performs the Account adjustment for taxpayer"<tpayer>"CaseId"<cid>"
    Then officer the performs the action "Under Review"
    Then click on submit button on Case Management
    Then officer the performs the action "Request adjustment"
     Then click on submit button on Case Management
     Then officer the performs the action "Perform Adjustment"
    Then click on submit button on Case Management
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>" Source"<src>" and TaxPayer"<tpayer>"
    Then Source Id must be CaseId"<cid>" from Objection
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the Assessment id"<transid>" for adjustment
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user selects Charge"<charge>" and Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button
    Then user is Case Management with Status "Adjustment In Progress" and Case id"<cid>"
    Then click on Account Adjustment
    Then selects the user "<tpayer>" with case id "<cid>"Approve the Account Adjusted done through Obection and Appeal"Objection"
    Then verifies the notice generated
    Then status should be changed to "Approve" through to the account adjusted done through Objection & Appeal"Objection" of CaseId"<cid>"

    Examples: 
      | Test Case Id          | Description                                                                                      | uname           | pwd   | tpayer             | action  | user  | src       | ApproveO | reason    | transid       | comments                     | charge | total | ltfee | pen  | cid             |
      | DRC_ATC_ACCAdjstmt_05 | Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit) | ketan.prajapati | admin | Automation User 22 | General | Ketan | Objection | Akib     | Objection | CT18110600002 | The amount would is adjusted | Debit  | plus  |  5000 | 5000 | O19030700000001 |

  @2825DebtManagemnet
  Scenario Outline: Validate the Account Adjustment with valid data through debt internal portal
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When user click on Case Management
    Then user performs the Account adjustment for taxpayer"<tpayer>"with "request adjustment"
    Then user should be on Debt Collection Case
    Then Status "Request adjustment" should be displayed
    Then Selects Action "Adjustment Completed"
    Then click on Submit button
    Then Selects Action "Request adjustment"
    Then click on Submit button
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>" Source"<src>" and TaxPayer"<tpayer>"
    Then Source Id must be CaseId from Debt Management
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button
    Then selects the transaction for DEBT Adjustment from records of "internal adjustment" "Assessment" "ReAssessment"
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button
    Then click on Account Adjustment
    Then selects user of TaxPayer "<tpayer>" with Case Id to Approve the Account Adjustment Performed by"<user>" action"<action>" Approve Officer"<ApproveO>" Source"<src>" reason"<reason>"Comments"<comments>"
    Then verifies the notice generated

    Examples: 
      | Test Case Id          | Description                                                                                        | uname           | pwd   | tpayer             | action  | user  | src         | ApproveO | transid       | reason       | comments                     | charge | total | vatLiab | ltfee | pen |
      | DRC_ATC_ACCAdjstmt_06 | Validate the Account Adjustment with valid data for Reverse from Tax Payer Profile (charge Credit) | ketan.prajapati | admin | Automation User 22 | Reverse | Ketan | Debt source | Akib     | CT18110600003 | System Error | The amount would is adjusted | Credit | minus |       0 |     0 |   0 |
