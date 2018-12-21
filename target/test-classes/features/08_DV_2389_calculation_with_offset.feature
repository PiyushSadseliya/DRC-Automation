Feature: User is on Tax Calculation

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn

    Examples: 
      | TestcaseID       | Description          | email                        | password |
      | e-file_Login_001 | Login into tax payer | testarun11222@mailinator.com | Arun123  |

  @TC_02_12
  Scenario Outline: Validate proceed button functionality
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And clicks on e-filing to fill data
    And User click on browser and upload file "<uploadFile>" for tax calculation
    And User click on check box and click on submit button
    And Enter OTP and click on verify button and click on Ok button
    And User is navigate to Tax Calculation page
    And User click on proceed button on tax calculation
    And User see pop up for offset successful

    Examples: 
      | TestcaseID    | Description                                   | uploadFile                         |
      | Tax_Cal_02,12 | validate proceed functionality and see offset | Officers List With Tax Center.xlsx |
