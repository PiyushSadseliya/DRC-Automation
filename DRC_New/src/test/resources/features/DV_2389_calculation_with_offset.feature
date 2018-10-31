Feature: User is on Tax Calculation

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn
    Then User see Dashboard

    Examples: 
      | TestcaseID       | Description          | email                   | password   |
      | e-file_Login_001 | Login into tax payer | franky01@mailinator.com | franky@123 |

  @TC_02_03_12
  Scenario Outline: Validate proceed button functionality, validate period field
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on file button "<file>" and navigate to e-declaration page
    
    And User see period field on filing
    
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment
    And User entered value "<26>" for Tax Calculation
    And User click on browser and upload file "<uploadFile>" for tax calculation
    And User click on check box and click on submit button
    And User see OTP and enter OTP
    And User click Verify button
    And User click on ok button
    And User is navigate to Tax Calculation page
 
    And User validate period field on tax calculation

    # 02 & 12
    And User click on proceed button on tax calculation
    And User see pop up for offset successful
    And User click on ok button
    And User will navigate to e-filing landing screen

    Examples: 
      | TestcaseID       | Description                               | month | file  | 1 | 2 | 2.1 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | 17 | 18 | 19 | 20 | 26 | value | uploadFile                                                            |
      | Tax_Cal_02,03,12 | validate proceed and period functionality | eFeb  | eFebC | 0 | 0 |   0 | 0 | 0 | 0 | 0 | 0 | 0 |  0 |    0 |  0 |    0 |  0 |    0 |  0 |    0 |  0 |  0 |  0 |  0 |  0 |     0 | C:\\Users\\frankey.mehta\\Desktop\\Officers List With Tax Center.xlsx |

  @TC_11
  Scenario Outline: Validate the previous button functionality.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User clicjk on "<pay>" button and navigate to tax calculation page
    And User click on previous button on tax calculation and navigate to e-filing landing screen

    Examples: 
      | TestcaseID      | Description                     | month | pay   |
      | e-file_Login_05 | validate previous functionality | eDec  | eDecP |

  @TC_04_05_07_08_09_10
  Scenario Outline: Validate Tax calculation values are displayed
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on file button "<file>" and navigate to vat e-filing page
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed  on calculation
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On calculation
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment on calculation
    And User entered value "<26>" for Tax Calculation on calculation
    And User click on check box and click on submit button
    And User see OTP and enter OTP
    And User click Verify button
    And User click on ok button
    And User is navigate to Tax Calculation page
    And User verify Tax calculation

    Examples: 
      | TestcaseID                | Description                                   | month | file  |  1 |  2 | 2.1 |  3 |  4 |  5 |  6 |  7 |  8 | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | 17 | 18 | 19 | 20 | 26 |
      | Tax_Cal_04_05_07_08_09_10 | validate Tax calculation values are displayed | eMar  | eMarC | 10 | 10 |  10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 |   10 | 10 |   10 | 10 |   10 | 10 |   10 | 10 | 10 | 10 | 10 | 10 |
