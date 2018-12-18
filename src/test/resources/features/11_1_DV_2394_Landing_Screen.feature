Feature: User is on e-filing landing screen

#  Background: 
 #   And User Enter email " approveduser@mailinator.com " and  password "Test@123"
  #  And User Click on SignIn


  @TC_01_Login_e-filing_landing_screen
  Scenario Outline: DRC Tax Portal Login
     Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn

    Examples: 
      | TestcaseID         | Description          | email                       | password |
      | Landing_Screen_001 | Login into tax payer | approveduser@mailinator.com | Test@123 |

  @TC_02
  Scenario Outline: Validate the Download templates button functionality
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on Download Template
    Then User verify download file

    Examples: 
      | TestcaseID        | Description       |
      | Landing_Screen_02 | download template |

  #@TC_03 help
  #Validate the Helpdesk (?) icon functionality.
  @TC_04_e-filing_landing_screen
  Scenario Outline: Validate the Financial Year dropdown functionality.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And user see Total Liability
    And User click on Finicial year dropdown "<Filters>"
    And User see all month record from that year "<jan>" to "<dec>"
    And User see Total Liability is not changed

    #  And User see important dates "<date1>" "<date2>" "<date3>" "<date4>" "<date5>" "<date6>"
    Examples: 
      | TestcaseID        | Description                 | Filters      | jan     | dec     |
      | Landing_Screen_04 | Finicial year functionality | drp_Year2018 | TextJan | TextDec |

  @TC_05_e-filing_landing_screen
  Scenario Outline: Validate the Status functionality whether the e-filing , payment and assessment are pending for that particular month
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on Finicial year dropdown "<Filters>"
    And clicks on e-filing to check

    Examples: 
      | TestcaseID        | Description                   | Filters      |
      | Landing_Screen_05 | validate status functionality | drp_Year2018 |

  @TC_06_07_e-filing_landing_screen
  Scenario Outline: Validate the File button Functionality whether user can e-declare for the particular month and Preview button functionality
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And clicks on e-filing on landing screen
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed on preview
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On preview
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment on preview
    And User entered value "<26>" for Tax Calculation on preview
    And User click on check box and click on submit button
    And Enter OTP and click on verify button and click on Ok button
    And User is navigate to Tax Calculation page
    And User click on Proceed button and navigate to PAyment of tax page
    And User click on cancel button on Payment of tax page and navaigate to e-filing page
    And User click on Preview on landing screen
    And User validate Operations Performed Section
    And User validate Tax Deductible On
    And User validate Adjustment
    And User click on Previous button and user navigate back to e-declaraton Vate-Filing Page

    Examples: 
      | TestcaseID           | Description                            |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |  17 |  18 |  19 |  20 |    26 |
      | Landing_Screen_06_07 | file with preview button functionality | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 | 500 | 500 | 500 | 10000 |

  @TC_08_e-filing_landing_screen
  Scenario Outline: Validate the PAY button functionality whether user can successfully pay the amount for that particular month
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And clicks on e-filing on landing screen
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed on preview
    And User click on check box and click on submit button
    And Enter OTP and click on verify button and click on Ok button
    And User is navigate to Tax Calculation page
    And User click on previous button and navigate to Vat e-filing page
    And User see Preview button is display and pay button gets enable and user click on pay button
    And User click on proceed button and navigate to Payment of tax page
    And cliccks on "<Payment Option>" and verify details
    And Execute query for payment

    Examples: 
      | TestcaseID        | Description                       | bankName             |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 | Payment Option   |
      | Landing_Screen_08 | validate pay button functionality | txt_BankName_Central | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | Over the Counter |

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
  @TC_10_e-filing_landing_screen
  Scenario Outline: Validate the PAY button functionality whether user can successfully pay the amount for that particular month
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on Pay button "<pay>"
    And User click on proceed button and navigate to Payment of tax page
    And cliccks on "<Payment Option>" and verify details
    And Execute query for payment
    And User logout

    Examples: 
      | TestcaseID        | month | pay   | Payment Option   |
      | Landing_Screen_10 | eJan  | eJanP | Over the Counter |
