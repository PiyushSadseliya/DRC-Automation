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
Feature: Payment Receipt

  @tag2
  Scenario Outline: Validate the Payment done for multiple Months against
    Given The user has declared the VAT Liability and has done the payment for period "January" & "March"
    When User clicks on view button from pay column
    Then user must be on Payment Receipt "Payment Receipt"
    Then Payment Receipt must have the details of Receipt No, Bill Generated On
    Then Paymnet Particulars must have the details of Transaction No & Name of The Bank"<bankname>"
    Then Details of Taxpayer Name"<name>"Nitva"<Nitva>"Email-id"<emailid>"MobileNo"<mobileno>"Address"<add>"
    Then Details of Deposit records "1" Period"<period1>"vat"<vat1>"Interest"<int1>"Penalty"<pen1>"LateFee"<ltfee1>"TotalAmount"<tamount1>"
    Then Details of Deposit records "2" Period"<period2>"vat"<vat2>"Interest"<int2>"Penalty"<pen2>"LateFee"<ltfee2>"TotalAmount"<tamount2>"
    Then Total Words should be "<twords>"
    Then Mode of Payment "<mpay>" must be displayed

    Examples: 
      | Test Case ID              | Description                                                                                                        | uname                   | password    | bankname                                         | name      | Nitva             | emailid               | mobileno     | add                    | period1     | vat1   | int1 | pen1 | ltfee1 | tamount1 | period2       | vat2   | int2 | pen2 | ltfee2 | tamount2 | twords                     | mpay             |
      | DRC_ATC_PaymentReceipt_01 | Validate the functionality of View button located on the statement of transaction section of e-filing landing page | execute@sharklasers.com | abcde@12345 | Access Bank – Dba – Banque Privee Du Congo (Bpc) | Smit tran | 20180926012113710 | 12345@sharklasers.com | 340653459035 | Addadd, 34534750, Aket | March, 2018 | 800.00 |    0 |    0 |      0 |   800.00 | January, 2018 | 800.00 |    0 |    0 |      0 |   800.00 | One Thousand Seven Hundred | Over the counter |

  Scenario Outline: Validate the payment Receipt for payment done against particular Month
    Given The user has declared the VAT Liability for the Month of "April"
    When User clicks on view button from pay column
    Then user must be on Payment Receipt "Payment Receipt"
    Then the receipt should the payment details
    Then Payment Receipt must have the details of Receipt No, Bill Generated On
    Then Paymnet Particulars must have the details of Transaction No & Name of The Bank"<bankname>"
    Then Details of Taxpayer Name"<name>"Nitva"<Nitva>"Email-id"<emailid>"MobileNo"<mobileno>"Address"<add>"
    Then Details of Deposit records "1" Period"<period1>"vat"<vat1>"Interest"<int1>"Penalty"<pen1>"LateFee"<ltfee1>"TotalAmount"<tamount1>"
    Then Total Words should be "<twords>"
    Then Mode of Payment "<mpay>" must be displayed

    Examples: 
      | Test Case ID              | Description                                                                                                        | uname                   | password    | bankname                                         | name      | Nitva             | emailid               | mobileno     | add                    | period1     | vat1   | int1 | pen1 | ltfee1 | tamount1 | twords                     | mpay             |
      | DRC_ATC_PaymentReceipt_02 | Validate the functionality of View button located on the statement of transaction section of e-filing landing page | execute@sharklasers.com | abcde@12345 | Access Bank – Dba – Banque Privee Du Congo (Bpc) | Smit tran | 20180926012113710 | 12345@sharklasers.com | 340653459035 | Addadd, 34534750, Aket | March, 2018 | 800.00 |    0 |    0 |      0 |     1700 | One Thousand Seven Hundred | Over the counter |
