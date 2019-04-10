Feature: Debt Record in 0-3 Months age bracket

  @Valid_Registration
  Scenario Outline: New User should be allowed to Register in DRC TAX Portal with valid details.
    Given User is on VAT Registration Dashboard
    When Establish a connection with data base and execute query to create user"<username>".
    And Update data in another table based on created user
    And Update data in roles table

    Examples: 
      | Test Case ID                  | Description              | username             |
      | DRC_ATC_Valid_Registration_01 | Register with valid data | Regression AprilD |

  @SP_03
  Scenario Outline: User submits the form for vat approval temp logout
    Given User is on VAT Registration Dashboard
    When User Enter Data: "<email>" "<password>"
    When User clicks on VAT Getting Started Guide CheckBox
    And Clicks on Register for Vat button
    And Clicks on Continue button of Instructions Page
    Then Selects Taxpayer Category "<Category>" , SubCategory "<SubCategory>"
    And Enters NIF number "<Nif>"  ,Full Name Of Business "<FName Business>" , Number of COI "<COI>" , Last Year Revenue "<Revenue>"
    And Enters NIF Registration Date "<Nif Registration Date>" , Date of Incorporation "<Incorporation Date>" , Type Of Business "<Business Type>"
    And Enters Business Start Date "<Start Date>" , Company Size "<Company Size>"
    And Enters Address Details "<AddressLine1>" , "<AddressLine2>" , "<Province>" ,"<City>" ,"<ZipCode>","<MobileNumber>"
    And Enters Business details "<BName>","<BAddressLine1>" , "<BAddressLine2>" , "<BProvince>" ,"<BCity>" ,"<BZipCode>","<BEmail>","<BMobileNumber>"
    And select Authorization signature "<Option>" with Job Title "<Job Title>" , Full Name "<FName>" Email "<AEmail>" , Mobile Number "<Mobile>"
    And Clicks on Save Draft Button
    And Clicks on VAT Registration Page Continue Button
    And Enters Bank Details with Account Number "<Account Number>" , Account Holder Name "<FName Business>" ,Bank Name "<Bank Name>" ,Branch "<Branch>"
    And Clicks on Bank details Continue Button
    And select Address Proof of Registered Place of Business for "<A1Document Description>" , "<A1Status>"
    And select Bank Account Proof for "<A2Document Description>" , "<A2Status>"
    And Select Certificate of Incorporation for "<A3Document Description>" , "<A3Status>"
    And select Law or Degree of Establishment for "<A4Document Description>" , "<A4Status>"
    And select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for "<A5Document Description>" , "<A5Status>"
    And select Proof of Last Year Revenue for "<A6Document Description>" , "<A6Status>"
    And Clicks on document required Continue Button
    And clicks on Acknowledgement checkbox and continue button
    And click on Ok button on alert page
    And Click on Logout on Dashboard

    Examples: 
      | TestCase_Id   | Description          | email                          | password | Category     | SubCategory       | Nif                   | Nif Registration Date | FName Business       | COI             | Incorporation Date | Business Type | Start Date | Company Size | Revenue  | AddressLine1      | AddressLine2   | Province | City  | ZipCode | MobileNumber | BName      | BAddressLine1     | BAddressLine2  | BProvince | BCity | BZipCode | BEmail         | BMobileNumber | Option | Job Title        | FName | AEmail          | Mobile     | Account Number | Account Holder Name | Bank Name   | Branch  | A1Document Description | A1Status    | A2Document Description | A2Status    | A3Document Description | A3Status    | A4Document Description | A4Status    | A5Document Description | A5Status    | A6Document Description | A6Status    | Filter                     | Manage | DeOption | SDomestic1 | SExport1 | SAdjustment1 | SDomestic2 | SExport2 | SAdjustment2 | PDomestic1 | PImport1 | PAdjustment1 | PDomestic2 | PImport2 | PAdjustment2 | Efile                                 | Authorized Signatory |
      | TC_End2End_01 | Registartion Process | RegressionAprilD@mt2015.com | Test@123 | Legal Entity | Government Entity | 1702211ABCDFE00100487 | 2018-08-22            | Regression AprilD | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mt2015.com |    7896541023 | Yes    | Business Analyst | John  | john@mt2015.com | 7412508963 | 00112233440017 | Automation User 21  | Advans Bank | Branch4 | doc_desc1              | capture.png | doc_desc1              | capture.png | doc_desc1              | capture.png | doc_desc1              | capture.png | doc_desc1              | capture.png | doc_desc1              | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | bindi                |

  Scenario Outline: Validating file download, view certificate, download certificate and approval of VAT - internal portal
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on manage setting and select Review
    Then it Navigate to Tax Payer Details
    And user click on Approve and Continue

    Examples: 
      | TestcaseID                              | Description                                                                | Filters        | Value                |
      | Valid_Manage_VAT_Creation_Cerificate_01 | Validating file view certificate, download certificate and approval of VAT | Applicant Name | Regression AprilD |

  @TC_01_Login
  Scenario Outline: DRC Tax Portal Login temp logout
    Given The User has obtained the NITVA
    Then For efiling Records user hits API"<email>"
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn

    Examples: 
      | TestcaseID       | Description          | email                          | password |
      | e-file_Login_001 | Login into tax payer | RegressionAprilD@mt2015.com | Test@123 |

  @TC_02_debtMan
  Scenario Outline: E-filing in the age bracket of 0-3 Months for debt
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User with email address"<email>"does efiling in age bracket 0-3 month"<1>"
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button

    Examples: 
      | Description                               |     1 | email                          |
      | E-filing in the age bracket of 0-3 Months | 50000 | RegressionAprilD@mt2015.com |
