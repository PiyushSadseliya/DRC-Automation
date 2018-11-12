#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@AccountAdjustment
Feature: Account Adjustment Statement of Transaction TaxPayer Profile & Objection

  @1882mtc1 @1882mtc30 @1882mtc31
  Scenario Outline: Validate the Account Adjustment flow with valid data for General from Tax Payer Profile
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user selects Charge"<charge>" and Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button
    Then click on Account Adjustment
    Then selects the user "<tpname>" to Approve the Account Adjusted done through internal adjstment"Internal adjustment"
    Then verifies the notice generated of ccount adjustment through tax payer profile
    Then status should be changed to "Approve" through to the account adjusted done through internal adjstment"Internal adjustment"TaxPayerName"<tpname>"

    Examples: 
      | Test Case Id          | Description                                                                             | uname | pwd | tpayer | action  | user  | src                 | ApproveO | reason    | transid | tpname | comments            | charge | vatLiab | ltfee | pen    |
      | DRC_ATC_ACCAdjstmt_01 | Validate the Account Adjustment flow with valid data for General from Tax Payer Profile |       |     | NOV FS | General | Ketan | Internal adjustment | Akib     | Objection |         | NOV FS | Adjusted the amount | Credit |       0 |     0 | 500000 |

  @1882mtc2 @1882mtc42 @2539mtc3 @2539mtc5 @2539mtc7 @2539mtc8 @2539mtc9
  Scenario Outline: Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable for Reverse charge
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button
    Then click on Account Adjustment
    Then selects the user "<tpname>" to Approve the Account Adjusted done through internal adjstment"Internal adjustment"
    Then verifies the notice generated of ccount adjustment through tax payer profile

    Examples: 
      | Test Case Id          | Description                                                                             | uname | pwd | tpayer | action  | user  | src                 | ApproveO | reason    | transid       | from | to | tpname | comments            | vatLiab | ltfee  | pen    |
      | DRC_ATC_ACCAdjstmt_02 | Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile |       |     | NOV FS | reverse | Ketan | Internal adjustment | Akib     | Objection | DT18101600010 |      |    | NOV FS | Adjusted the amount |       0 | 500000 | 500000 |

  @1882mtc2 @1882mtc6 @1882mtc17 @1882mtc18 @1882mtc20 @1882mtc21 @1882mtc22 @1882mtc23 @1882mtc24 @1882mtc25 @1882mtct26 @1882mtc27 @1882mtc28 @Cancel
  Scenario Outline: Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
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
      | Test Case Id          | Description                                                                                                                                            | uname | pwd | tpayer | action  | user  | src                 | ApproveO | reason    | tpname | transid       | from       | to         | reason       | comments                     | tpname |
      | DRC_ATC_ACCAdjstmt_03 | Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action-General)  |       |     | NOV FS | General | Ketan | Internal adjustment | Akib     | Objection | NOV FS | DT18101600010 | 2018-10-16 | 2018-10-16 | Objection    | The amount would is adjusted | NOV FS |
      | DRC_ATC_ACCAdjstmt_04 | Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action -Reverse) |       |     | NOV FS | Reverse | Ketan | Internal adjustment | Akib     | Objection | NOV FS | DT18101600010 | 2018-10-16 | 2018-10-16 | System Error | The amount would is adjusted | NOV FS |

  @1882mtc32 @1882mtc33 @1882mtc34 @1882mtc35 @1882mtc37 @1882mtc38 @1882mtc39 @1882mtc40 @1882mtc41 @Reject @Previous
  Scenario Outline: Validate the Account Adjustment Total Amount with valid data for General from Tax Payer Profile
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with taxpayer"<tpayer>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user selects Charge"<charge>" and Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable
    Then clicks on Submit button
    Then click on Account Adjustment
    Then selects the user "<tpname>" to validate the "<btn>" button for account adjustmentd done through internal adjstment"Internal adjustment"

    Examples: 
      | Test Case Id          | Description                                                                                                     | uname | pwd | tpayer | action  | user  | src                 | ApproveO | reason    | tpname | transid       | from       | to         | reason       | comments                     | charge | total | vatLiab | ltfee | pen | btn      |
      | DRC_ATC_ACCAdjstmt_05 | Validate the Account Adjustment Total Amount with valid data for General from Tax Payer Profile(charge Debit)   |       |     | NOV FS | General | Ketan | Internal adjustment | Akib     | Objection | NOV FS | DT18101600010 | 2018-10-16 | 2018-10-16 | Objection    | The amount would is adjusted | Debit  | plus  |       0 |     0 |   0 | previous |
      | DRC_ATC_ACCAdjstmt_06 | Validate the Account Adjustment Total Amount with valid data for General from Tax Payer Profile (charge Credit) |       |     | NOV FS | General | Ketan | Internal adjustment | Akib     | Objection | NOV FS | DT18101600010 | 2018-10-16 | 2018-10-16 | System Error | The amount would is adjusted | Credit | minus |       0 |     0 |   0 | Reject   |

  @1882Objection @1882mtc5
  Scenario Outline: Validate the Account Adjustment with valid data through objection management
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    When user click on Case Management
    Then user performs the Account adjustment for taxpayer"<tpayer>"CaseId"<cid>"
    Then officer the performs the action "Under Review"
    Then click on submit button on Case Management
    Then officer the performs the action "Request adjustment"
    Then click on submit button on Case Management
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be CaseId"<cid>"TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the Assessment id"<transid>" for adjustment
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user selects Charge"<charge>" and Enter Amount to be adjusted VAT Liability"<vatLiab>"LateFee"<ltfee>"Penalty"<pen>"Interest should be non-editable
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button
    Then user is Case Management with Status "Adjustment In Progress" and Case id"<cid>"
    Then click on Account Adjustment
    Then selects the user "<tpname>" with case id "<cid>"Approve the Account Adjusted done through Obection and Appeal"Objection"
    Then verifies the notice generated of ccount adjustment through tax payer profile
    Then status should be changed to "Approve" through to the account adjusted done through Objection & Appeal"Objection" of CaseId"<cid>"

    Examples: 
      | Test Case Id          | Description                                                                                        | uname | pwd | tpayer | action  | user  | src       | ApproveO | reason    | tpname | transid       | reason       | comments                     | charge | total | vatLiab | ltfee | pen | cid             |
      | DRC_ATC_ACCAdjstmt_07 | Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit)   |       |     | NOV FS | General | Ketan | Objection | Akib     | Objection | NOV FS | CT18110600002 | System Error | The amount would is adjusted | Debit  | plus  |       0 |     0 |   0 | O18110600000002 |
      | DRC_ATC_ACCAdjstmt_08 | Validate the Account Adjustment with valid data for Reverse from Tax Payer Profile (charge Credit) |       |     | NOV FS | Reverse | Ketan | Objection | Akib     | Objection | NOV FS | CT18110600003 | System Error | The amount would is adjusted | Credit | minus |       0 |     0 |   0 | O18110600000003 |

  @Approve
  Scenario Outline: Validate the Account Adjustment with valid data through objection management
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    Then click on Account Adjustment
    Then selects the user "<tpname>" with case id "<cid>"Approve the Account Adjusted done through Obection and Appeal"Objection""<action>""<user>""<ApproveO>""<reason>""<comments>"
    Then verifies the notice generated of ccount adjustment through tax payer profile
    Then status should be changed to "Approve" through to the account adjusted done through Objection & Appeal"Objection" of CaseId"<cid>"

    Examples: 
      | Test Case Id          | Description                                                                                      | uname | pwd | tpayer | action  | user  | src       | ApproveO | reason    | tpname | transid       | reason       | comments                     | charge | total | vatLiab | ltfee | pen | cid             |
      | DRC_ATC_ACCAdjstmt_07 | Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit) |       |     | NOV FS | General | Ketan | Objection | Akib     | Objection | NOV FS | CT18110600002 | System Error | The amount would is adjusted | Debit  | plus  |       0 |     0 |   0 | O18110500000014 |

 @RejectAdjstmt
  Scenario Outline: Validate the Account Adjustment with valid data through objection management
    Given "<Test Case Id>""<Description>"The officer has logged in with Uname"<uname>"Password"<pwd>"
    Then click on Account Adjustment
    Then selects the user "<tpname>" with case id "<cid>"Reject the Account Adjusted done through Obection and Appeal"Objection""<action>""<user>""<ApproveO>""<reason>""<comments>"    
    Then status should be changed to "Reject" through to the account adjusted done through Objection & Appeal"Objection" of CaseId"<cid>"

    Examples: 
      | Test Case Id          | Description                                                                                      | uname | pwd | tpayer | action  | user  | src       | ApproveO | reason    | tpname | transid       | reason    | comments                     | charge | total | vatLiab | ltfee | pen | cid             |
      | DRC_ATC_ACCAdjstmt_07 | Validate the Account Adjustment with valid data for General from Tax Payer Profile(charge Debit) |       |     | NOV FS | General | Ketan | Objection | Akib     | Objection | NOV FS | CT18110600002 | Objection | The amount would is adjusted | Debit  | plus  |       0 |     0 |   0 | O18110600000001 |
