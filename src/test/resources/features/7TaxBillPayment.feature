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
#DV-2395
@tag
Feature: Tax Bill Payment   | NetBanking and Over the counter

  @tc18_13__17_4_5
  Scenario Outline: Vaildate the Tax Bill Payment for particular month done by Over the counter
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>" and has declared for the month of"<period>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then clicks on pay button of period"<period>"
    Then click on proceed button on Tax Calculation page"Tax Calculation"
    Then chooses "over the counter" Payment Method
    Then Verifies the Detaisl of TaxPayer NITVA "<nitva>" emailid"<emailid>"mobile no "<mobile>"name"<name>"Address"<add>"duedate"<duedate>"
    Then Verifies the liability details Period"<peri>"VAT"<vatamount>"Interest"<interest>"Penalty"<penalty>"LateFee"<ltfee>"TotalAmount"<total>"total Amount Words"<tamountwords>"
    Then Verifies Beneficiary Bank Details BeneficiaryName"<benfname>"account number"<acno>"Bank name"<bname>"Branch Code"<bcode>"
    Then Verifies Paid Bill Information "<nitva>" TaxPayerName"<name>"Amount"<amount>"
    Then Verifies Details of Beneficiary BeneficiaryName"<benfname>"account number"<acno>"Bank name"<bname>"Branch Code"<bcode>"Amount"<amount>"

    Examples: 
      | Test Case ID              | Description                                                                 | uname                | password | date1       | period  | nitva             | emailid              | mobile          | name     | add  | peri     | vatamount | interest | penalty | ltfee | total  | tamountwords                        | benfname | acno           | bname               | bcode       | amount | duedate    |
      | DRC_ATC_TaxBillPayment_01 | Vaildate the Tax Bill Payment for particular month done by Over the counter | refac@mailinator.com | Test@123 | 26-Sep-2018 | January | 20181127030648745 | refac@mailinator.com | 435345345435435 | Test Ref | Test | Jan-2018 |    800,00 |     0,00 |    0,00 |  0,00 | 800,00 | Eight Hundred Franc Congolais Only. | DGI      | 18042600001632 | Central Bank Of Drc | RBISOGSTPMT | 800,00 | 20-02-2018 |

  @netbank
  Scenario Outline: Vaildate the Tax Bill Payment for particular month done by Netbanking
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>" and has declared for the month of"<period>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then clicks on pay button of period"<period>"
    Then click on proceed button on Tax Calculation page"Tax Calculation"
    Then chooses "net banking" Payment Method
    Then Bank list should be displayed
    Then click on Cancel button on Payment of Tax
    Then user is on VAT e-Filing page"VAT e-Filing"

    Examples: 
      | Test Case ID              | Description                                                           | uname                | password | period  |
      | DRC_ATC_TaxBillPayment_02 | Vaildate the Tax Bill Payment for particular month done by Netbanking | refac@mailinator.com | Test@123 | January |

  @tc20_21
  Scenario Outline: Vaildate the Print and Cancel Button functionality on Tax Bill Payment Page
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>" and has declared for the month of"<period>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then clicks on pay button of period"<period>"
    Then click on proceed button on Tax Calculation page"Tax Calculation"
    Then chooses "over the counter" Payment Method
    Then user is on Tax Payment Bill page "Tax Payment Bill"
    Then does print of the tax Payment Bill
    Then user is on Tax Payment Bill page "Tax Payment Bill"
    Then user clicks on Cancel button on  Tax Payment Bill page
    Then user is on VAT e-Filing page"VAT e-Filing"

    Examples: 
      | Test Case ID              | Description                                                                 | uname                | password | date1       | period  |
      | DRC_ATC_TaxBillPayment_03 | Vaildate the Print and Cancel Button functionality on Tax Bill Payment Page | refac@mailinator.com | Test@123 | 26-Sep-2018 | January |

  @c19_13__17_5
  Scenario Outline: Vaildate the Tax Bill Payment when user pays from Total Liability Pay button
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>" and has declared for the month of"<period>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then user clicks on pay button on Total Liability column
    Then chooses "net banking" Payment Method
    Then Bank list should be displayed
    Then chooses "over the counter" Payment Method
    Then user is on Tax Payment Bill page "Tax Payment Bill"
    Then Verifies the Details of TaxPayer NITVA "<nitva>" emailid"<emailid>"mobile no "<mobile>"name"<name>"Address"<add>"
    Then Verifies the liability details records"2" Period"<period1>"VAT"<vatamount1>"Interest"<interest1>"Penalty"<penalty1>"LateFee"<ltfee1>"TotalAmount"<total1>"
    #  Then Verifies the liability details records"2" Period"<period2>"VAT"<vatamount2>"Interest"<interest2>"Penalty"<penalty2>"LateFee"<ltfee2>"TotalAmount"<total2>"
    Then Verifies the liability details records"3" Period"<period3>"VAT"<vatamount3>"Interest"<interest3>"Penalty"<penalty3>"LateFee"<ltfee3>"TotalAmount"<total3>"
    Then Verifies the liability details records"4" Period"<period4>"VAT"<vatamount4>"Interest"<interest4>"Penalty"<penalty4>"LateFee"<ltfee4>"TotalAmount"<total4>"
    Then Verifies the liability details records"5" Period"<period5>"VAT"<vatamount5>"Interest"<interest5>"Penalty"<penalty5>"LateFee"<ltfee5>"TotalAmount"<total5>"
    Then Verifies the liability details records"6" Period"<period6>"VAT"<vatamount6>"Interest"<interest6>"Penalty"<penalty6>"LateFee"<ltfee6>"TotalAmount"<total6>"
    #Then Verifies the liability details records"7" Period"<period7>"VAT"<vatamount7>"Interest"<interest7>"Penalty"<penalty7>"LateFee"<ltfee7>"TotalAmount"<total7>"
    Then Verifies Beneficiary Bank Details BeneficiaryName"<benfname>"account number"<acno>"Bank name"<bname>"Branch Code"<bcode>"
    Then Verifies Paid Bill Information "<nitva>" TaxPayerName"<name>"Amount"<amount>"
    Then Verifies Details of Beneficiary BeneficiaryName"<benfname>"account number"<acno>"Bank name"<bname>"Branch Code"<bcode>"Amount"<amount>"

    Examples: 
      | Test Case ID              | Description                                                                  | uname                | password | date1       | period  | nitva             | emailid              | mobile          | name     | add  | period1  | vatamount1 | interest1 | penalty1 | ltfee1 | total1 | period2  | vatamount2 | interest2 | penalty2 | ltfee2 | total2 | period3  | vatamount3 | interest3 | penalty3 | ltfee3 | total3 | period4  | vatamount4 | interest4 | penalty4 | ltfee4 | total4 | period5  | vatamount5 | interest5 | penalty5 | ltfee5 | total5 | period6  | vatamount6 | interest6 | penalty6 | ltfee6 | total6 | period7  | vatamount7 | interest7 | penalty7 | ltfee7 | total7 | benfname | acno           | bname               | bcode       | amount   |
      | DRC_ATC_TaxBillPayment_04 | Vaildate the Tax Bill Payment when user pays from Total Liability Pay button | refac@mailinator.com | Test@123 | 26-Sep-2018 | Jan-Sep | 20181127030648745 | refac@mailinator.com | 435345345435435 | Test Ref | Test | Jan-2018 |       0,00 |      0,00 |     0,00 |   0,00 | 800,00 | Feb-2018 |        320 |         0 |        0 |      0 |    320 | Mar-2018 |     800,00 |      0,00 |     0,00 |   0,00 | 800,00 | Apr-2018 |     800,00 |      0,00 |        0 |      0 |    800 | May-2018 |     800,00 |      0,00 |     0,00 |   0,00 | 800,00 | May-2018 |     800,00 |      0,00 |     0,00 |   0,00 | 800,00 | May-2018 |        800 |         0 |        0 |      0 |    800 | DGI      | 18042600001632 | Central Bank Of Drc | RBISOGSTPMT | 4.000,00 |
