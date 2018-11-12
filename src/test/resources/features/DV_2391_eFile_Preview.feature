Feature: User is on e file landing screen and click on Preview button

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn
    Then User see Dashboard

    Examples: 
      | TestcaseID       | Description          | email                     | password   |
      | e-file_Login_001 | Login into tax payer | franky03@mailinator.com | franky@123 |

 

  @TC_03_04_05
  Scenario Outline: Validate the amount displayed in the fields under Operations Performed Section ,Tax Deductible , Adjustment
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User click on collpase icon for filing "<month>"
           
      And User click on file button "<file>" and navigate to vat e-filing page
       And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed on preview
       And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On preview
       And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment on preview
       And User entered value "<26>" for Tax Calculation on preview
       And User click on check box and click on submit button
       And User see OTP and enter OTP
       And User click Verify button
       And User click on ok button
       And User is navigate to Tax Calculation page
       And User click on previous button and navigate to Vat e-filing page
       And User click on collpase icon for filing "<month>"
	     And User click on file button "<preview>" and navigate to vat e-filing page
	     And User validate Operations Performed Section	     
	     And User validate Tax Deductible On
	     And User validate Adjustment
	
    Examples: 
      | TestcaseID            | Description                                                        | month | file  |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |  17 |  18 |  19 |  20 |    26 | preview   |
      | e-file_Login_03_04_05 | validate Operations Performed Section ,Tax Deductible , Adjustment | eOct  | eOctC | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 | 500 | 500 | 500 | 10000 | eOctPre   |
       
  # filing done
  @TC_02_06_07
  Scenario Outline: Validate whether user is able to preview the e-filing
    
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"    
    And User click on Tab
    And User click on collpase icon for filing "<month>"
    And User click on file button "<file>" and navigate to vat e-filing page
    And User click on previous button
    And User will navigate to e-filing landing screen
    And User click on collpase icon for filing "<month>"
    And User click on file button "<file>" and navigate to vat e-filing page   
    And User click on download button and user validate file should get downloaded

    Examples: 
      | TestcaseID      | Description           | month | file    |
      | e-file_Login_04 | validate period field | eOct  | eOctPre |
      
      
