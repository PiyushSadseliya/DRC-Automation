Feature: User is on Tax Calculation

  #@TC_01_Login
  #Scenario Outline: DRC Tax Portal Login
  #Given User Login "<TestcaseID>" "<Description>"
  #And User Enter email "<email>" and  password "<password>"
  #And User Click on SignIn
  #
  #Examples:
  #| TestcaseID       | Description          | email                           | password |
  #| e-file_Login_001 | Login into tax payer | Automationtwentyfour@mt2015.com | Test@123 |
  #@TC_01_Login
  #Scenario Outline: DRC Tax Portal Login
  #Given User Login "<TestcaseID>" "<Description>"
  #And User Enter email "<email>" and  password "<password>"
  #And User Click on SignIn
  #
  #Examples:
  #| TestcaseID       | Description          | email                         | password |
  #| e-file_Login_001 | Login into tax payer | AutomationfIftyone@mt2015.com | Test@123 |
  @TC_02_12
  Scenario Outline: Validate proceed button functionality temp logout 
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn
    And User click on Tab
    And clicks on e-filing to fill data
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button
    And User is navigate to Tax Calculation page
    And User click on proceed button on tax calculation
    And User see pop up for offset successful

    Examples: 
      | TestcaseID    | Description                                   | email                            | password |
      | Tax_Cal_02,12 | validate proceed functionality and see offset | RegressionAprilTOne@mt2015.com | Test@123 |

  # @TC_03
  # Scenario Outline: Validate the Period field.
  #  Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
  #  And User click on Dashboard
  #  And User click on Tab
  #  And User click on collpase icon for filing "<month>"
  #  And User click on file button "<file>" and navigate to e-declaration page
  #    And User verify period "<period>" for Tax Calculation
  #    Examples:
  ##     | TestcaseID | Description               | month | file  | period         |
  #   | Tax_Cal_03 | Validate the Period field | eDec    | eDecC  | December, 2019 |
  @TC_04_05_07_08_09_10_11
  Scenario Outline: Validate Tax calculation values are displayed
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed  on calculation
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On calculation
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment on calculation
    And User entered value "<26>" for Tax Calculation on calculation
    And User click on browser and upload file "<uploadFile>" for tax calculation
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button
    And User is navigate to Tax Calculation page
    #And User verify Tax calculation
    And User click on previous button on tax calculation and navigate to e-filing landing screen

    Examples: 
      | TestcaseID                   | Description                                   |   1 |   2 | 2.1 |   3 |   4 |   5 |   6 |   7 |   8 | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | 17 | 18 | 19 | 20 | 26 | uploadFile         |
      | Tax_Cal_04_05_07_08_09_10_11 | validate Tax calculation values are displayed | 500 | 500 | 500 | 500 | 500 | 500 | 500 | 500 | 500 | 10 |   10 | 10 |   10 | 10 |   10 | 10 |   10 | 10 | 10 | 10 | 10 | 10 | DRC Test Data.xlsx |
