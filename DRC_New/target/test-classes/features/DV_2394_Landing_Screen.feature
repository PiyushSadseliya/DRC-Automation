Feature: User is on e-filing landing screen

  #   @TC_01_Login
  #   Scenario Outline: DRC Tax Portal Login
  #     Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
  #     When User Enter Data: "<email>" "<password>"
  #     And User Clicks on "SignIn"
  #     Then User see "Dashboard"
  #     And User logout
  #      Examples:
  #        | TestcaseID        | Description          | email                     | password   |
  #        | Landing_Screen_01 | Login into tax payer | franky9304@mailinator.com | franky@123 |
  @TC_02
  Scenario Outline: Validate the Download templates button functionality
    Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on Download Template
    Then User verify download file

    Examples: 
      | TestcaseID        | Description       |
      | Landing_Screen_02 | download template |

  #@TC_03 help
  #Validate the Helpdesk (?) icon functionality.
  
  @TC_04
  Scenario Outline: Validate the Financial Year dropdown functionality.
    #Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on Finicial year dropdown "<Filters>"
    And User see all month record from that year "<jan>" to "<dec>"
    And User see important dates "<date1>" "<date2>" "<date3>" "<date4>" "<date5>" "<date6>"

    #And User Logout
    Examples: 
      | TestcaseID        | Description                 | Filters  | jan     | dec     | date1    | date2    | date3    | date4    | date5    | date6    |
      | Landing_Screen_04 | Finicial year functionality | Year2018 | TextJan | TextDec | txtDate1 | txtDate2 | txtDate3 | txtDate4 | txtDate5 | txtDate6 |

  @TC_05
  Scenario Outline: Validate the Status functionality whether the e-filing , payment and assessment are pending for that particular month
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User see File button is enabled for e-filing "<file>"
    And User see Pay button is disable for payment "<pay>"
    And User see View button is disable for assessment "<ass>"

    #And User Logout
    Examples: 
      | TestcaseID        | Description                   | month | file  | pay   | ass   |
      | Landing_Screen_05 | validate status functionality | eJan  | eJanC | eJanP | eJanA |

  @TC_06
  Scenario Outline: Validate the File button Functionality whether user can e-declare for the particular month
    #   Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on file button "<file>" and navigate to e-declaration page
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>"
    And User click on check box and click on submit button
    And User see OTP and enter OTP
    And User click Verify button
    And User click on ok button
    And User is navigate to Tax Calculation page
    And User click on Proceed button and navigate to PAyment of tax page
    And User click on cancel button on Payment of tax page and navaigate to e-filing page
    And User again click on collase icon for month "<monthAgain>"
    And User see Preview button is display
    And User see Payment status Pay "<Pay>" button gets enable and assessment view "<view>" is disable

    #And User Logout
    Examples: 
      | TestcaseID        | Description                         | month | file  |     1 |    2 |  2.1 | 3 | 4 | 5 | 6 | 7 | 8 | monthAgain | Pay     | view  |
      | Landing_Screen_06 | validate file button functionbality | eJan  | eJanC | 10000 | 7000 | 5000 | 0 | 0 | 0 | 0 | 0 | 0 | eJan       | eJanPre | eJanA |

  @TC_07
  Scenario Outline: Validate the Preview button functionality.
    #  Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on Preview button and navigate to e-declaration filled data page "<PreviewMonth>"
    And User click on Previous button and user navigate back to e-declaraton Vate-Filing Page

    #And User Logout
    Examples: 
      | TestcaseID        | Description                           | month | PreviewMonth |
      | Landing_Screen_07 | validate preview button functionality | eJan  | eJanPre      |

  @TC_08
  Scenario Outline: Validate the PAY button functionality whether user can successfully pay the amount for that particular month
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on Pay button "<pay>"
    And User click on proceed button and navigate to Payment of tax page
    And User click on radio button on net banking and click on select bank and see bank name "<bankName>"
    And User see cancel "<cancel>" and pay now "<pay1>" is enable
    And User click on cancel buttton and navigate to e-filing landing page
    And User click on collpase icon for filing "<month>"
    And User click on Pay button "<pay>"
    And User click on proceed button and navigate to Payment of tax page
    And User click on radio button on particular bank
    And User click on Pay now buttton on payment of tax page
    And User navigate to selected bank page

    # here it will fail as no message is showing
    #   And User see message "<mess>"
    # payment is done from backend
    #And User Logout
    Examples:   
      | TestcaseID        | Description                       | month | pay   | bankName             | cancel            | pay1              | mess |
      | Landing_Screen_08 | validate pay button functionality | eJan  | eJanP | txt_BankName_Central | btn_PaymentCancel | btn_PaymentPayNow |      |

  # if payment is done
  #  @TC_09
  #  Scenario Outline: Validate the View button functionality for Payment
  #    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
  #    And User click on Tab
  #    And User click on collpase icon for filing "<month>"
  #    And User click on view "<view>"
  #    And User navigate to vat e-filing payment receipt
  #And User Logout
  #    Examples:
  #      | TestcaseID         | month |view            |
  #      | Landing_Screen_09 |eJan   |eJanPaymentView |
  @TC_10
  Scenario Outline: Validate the PAY button functionality whether user can successfully pay the amount for that particular month
    #  Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on Pay button "<pay>"
    And User click on proceed button and navigate to Payment of tax page
    #And User click on over the counter and click on print button
    And User click on over the counter
    And User see Tax Payment bill

    Examples: 
      | TestcaseID        | month | pay   |
      | Landing_Screen_10 | eJan  | eJanP |
