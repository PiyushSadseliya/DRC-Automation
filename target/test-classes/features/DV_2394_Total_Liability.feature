Feature: User is on e filing and see Total Liability

   @TC_01_Login
   Scenario Outline: DRC Tax Portal Login
     Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
     When User Enter Data: "<email>" "<password>"
     And User Clicks on "SignIn"
   Then User see "Dashboard"
     Examples:
       | TestcaseID               | Description          | email                   | password   |
       | Total_Liability_Login_01 | Login into tax payer | franky01@mailinator.com | franky@123 |
  @TC_02
  Scenario Outline: Validate that if user changes the Financial year from drop down the total liability amount does not change.
  #  Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on Finicial year dropdown "<Filters>"
    And User check current liability "<liability>"

    Examples: 
      | TestcaseID         | Description               | Filters  | liability |
      | Total_Liability_02 | validate liability amount | Year2018 | 4.963,2   |

  @TC_03
  Scenario Outline: Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User check current liability "<liability>"
    And User click on Pay button on Total Liability
    And User click on radio button on particular bank
    And User click on Pay now buttton on payment of tax page
    And User navigate to selected bank page

    # if payment done than amount will be zero
    Examples: 
      | TestcaseID         | Description               | Filters  | liability |
      | Total_Liability_03 | validate liability amount | Year2018 | 4.963,2   |

  @TC_04
  Scenario Outline: Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    #  And User check current liability "<liability>"
    And User click on Pay button on Total Liability
    And User click on over the counter on payment method
    And User see Tax Payment bill

    #And User click on print button on over the counter page
    #And User see pdf is open with print button
    # And User click on radio button on particular bank
    # And User click on Pay now buttton on payment of tax page
    # And User navigate to selected bank page
    # if payment done than amount will be zero
    Examples: 
      | TestcaseID         | Description               | Filters  | liability |
      | Total_Liability_04 | validate liability amount | Year2018 | 4.963,2   |
