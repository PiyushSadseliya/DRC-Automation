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
@tag
Feature: 

  @tc16
  Scenario Outline: Validate the Account Adjustment flow with valid data for General from Tax Payer Profile
    Given The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with NIF"<nif>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button

    Examples: 
      | Test Case Id          | Description | uname | pwd | nif | action  | user  | src | ApproveO | reason    | transid | from | to | tpname     |
      | DRC_ATC_ACCAdjstmt_01 |             |       |     |     | general | ketan |     | Akib     | Objection |         |      |    | Power Test |

  @t26
  Scenario Outline: Validate the Account Adjustment flow with valid data for Reverse from Tax Payer Profile
    Given The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with NIF"<nif>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then clicks on Submit button

    Examples: 
      | Test Case Id          | Description | uname | pwd | nif | action | user  | src | ApproveO | reason    | transid       | from | to | tpname     |
      | DRC_ATC_ACCAdjstmt_01 |             |       |     |     |        | ketan |     | Akib     | Objection | DT18101600010 |      |    | Power Test |

  @t261718202122232425262728
  Scenario Outline: Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records
    Given The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with NIF"<nif>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then by default Source value is "Internal adjustment"
    Then Source ID must be blank
    Then Performed by,Source id,TaxPayer,NItva must be disabled
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Message should be shown "Record Already Selected"
    Then click on cross button on Statemnent of Transaction pop Up
    Then Select the reason"<reason>"
    Then Enters comment in the Account Adjustment"<comments>"
    Then Removes the records for adjustment
    Then clicks on cancel button
    Then user should be on Tax Payer Profile page of "<nif>"

    Examples: 
      | Test Case Id          | Description                                                                                                                                            | uname | pwd | nif | action  | user  | src | ApproveO | reason    | tpname     | transid       | from       | to         | reason       | comments                     | tpname     |
      | DRC_ATC_ACCAdjstmt_03 | Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action-General)  |       |     |     | General | ketan |     | Akib     | Objection | Power Test | DT18101600010 | 2018-10-16 | 2018-10-16 | Objection    | The amount would is adjusted | Power Test |
      | DRC_ATC_ACCAdjstmt_03 | Validate the actions type,reason type,cancel button,cross button in statement pop up,same records selection,Remove adjustment Records(Action -Reverse) |       |     |     | Reverse | ketan |     | Akib     | Objection | Power Test | DT18101600010 | 2018-10-16 | 2018-10-16 | System Error | The amount would is adjusted | Power Test |
@tc32333435
  Scenario Outline: Validate the Account Adjustment Total Amount with valid data for General from Tax Payer Profile
    Given The officer has logged in with Uname"<uname>"Password"<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with NIF"<nif>"
    Then user is on account adustment page
    Then selects action"<action>"
    Then validates created date Performed By"<user>"Source"<src>" and Source Id must be blank TaxPayer"<tpname>"
    Then selects the Aprroved by officer"<ApproveO>"
    Then click on Add button and selects the transaction for adjustment"<transid>"from"<from>"to"<to>"
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then the total amount for charge "<charge>" in Adjustment Record must be "<total>"
    Then clicks on Submit button
    

    Examples: 
      | Test Case Id          | Description | uname | pwd | nif | action  | user  | src | ApproveO | reason    | tpname     | transid       | from       | to         | reason       | comments                     | charge | total |
      | DRC_ATC_ACCAdjstmt_03 |             |       |     |     | General | ketan |     | Akib     | Objection | Power Test | DT18101600010 | 2018-10-16 | 2018-10-16 | Objection    | The amount would is adjusted | Debit  | plus  |
      | DRC_ATC_ACCAdjstmt_03 |             |       |     |     | Reverse | ketan |     | Akib     | Objection | Power Test | DT18101600010 | 2018-10-16 | 2018-10-16 | System Error | The amount would is adjusted | Credit | minus |
