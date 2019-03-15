Feature: Debt Record in 0-3 Months age bracket

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn

    Examples: 
      | TestcaseID       | Description          | email                            | password |
      | e-file_Login_001 | Login into tax payer |RegressionMarchde@mt2015.com | Test@123 |

  @TC_02_debtMan
  Scenario Outline: E-filing in the age bracket of 0-3 Months for debt
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User with email address"<email>"does efiling in age bracket 0-3 month"<1>"
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button

    Examples: 
      | Description                               |     1 | email                            |  
      | E-filing in the age bracket of 0-3 Months | 50000 | RegressionMarchde@mt2015.com | 
