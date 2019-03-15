Feature: User is on e file landing screen and click on Preview button

  @TC_02_03_04_05_06_07_VAT_e-Filing_Preview
  Scenario Outline: User verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed on preview
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On preview
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment on preview
    And User entered value "<26>" for Tax Calculation on preview
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button
    And User is navigate to Tax Calculation page
    And User click on previous button and navigate to Vat e-filing page
    And User click on Preview
    And User validate Operations Performed Section
    And User validate Tax Deductible On
    And User validate Adjustment

    #And User click on download button and user validate file should get downloaded
    Examples: 
      | TestcaseID                       | Description                                                                                                      |      1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |  17 |  18 |  19 |  20 |     26 |
      | e-file_Preview_02_03_04_05_06_07 | user verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality | 100000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 | 500 | 500 | 500 | 100000 |