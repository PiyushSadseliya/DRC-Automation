Feature: End2End TestSuite

  @SP_03.1
  Scenario Outline: Insert taxpayers in database - tax-payer-portal
    Given Establish a connection and enter "<user>" in registration table
    When Update data in aspnetusers table
    And Disply successfull insertion message.

    Examples: 
      | TestCase_Id   | Description         | user |
      | TC_End2End_01 | to insert tax-payer |   10 |

  @SP_03
  Scenario Outline: End2End TestSuite to validate all funactionality - tax-payer-portal
    Given User is on VAT Registration Dashboard
    When Establish a connection with data base and execute query to create user.
    And Update data in another table based on created user
    And Update data in roles table
    And login with created username and password
    And User clicks on VAT Getting Started Guide CheckBox
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
    And Enters Bank Details with Account Number "<Account Number>" , Account Holder Name "<Account Holder Name>" ,Bank Name "<Bank Name>" ,Branch "<Branch>"
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
      | TestCase_Id   | Description          | Category     | SubCategory       | Nif                 | Nif Registration Date | FName Business | COI             | Incorporation Date | Business Type | Start Date | Company Size | Revenue  | AddressLine1      | AddressLine2    | Province | City  | ZipCode | MobileNumber | BName    | BAddressLine1     | BAddressLine2  | BProvince   | BCity   | BZipCode | BEmail                    | BMobileNumber | Option | Job Title        | FName     | AEmail               | Mobile     | Account Number | Account Holder Name | Bank Name   | Branch  | A1Document Description | A1Status                       | A2Document Description | A2Status                       | A3Document Description | A3Status                       | A4Document Description | A4Status                       | A5Document Description | A5Status                       | A6Document Description | A6Status                       | Filter                     | Manage | DeOption | SDomestic1 | SExport1 | SAdjustment1 | SDomestic2 | SExport2 | SAdjustment2 | PDomestic1 | PImport1 | PAdjustment1 | PDomestic2 | PImport2 | PAdjustment2 | Efile                                 | Authorized Signatory |
      | TC_End2End_01 | Registartion Process | Legal Entity | Government Entity | ADFSXXXABVCDFE00100 | 2018-08-22            | Falcon Von     | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-25 | Large Scale  | 75000000 | Irrigation Colony | Above Axis Bank | Bas-Uele | Aketi |  444604 |   9898787845 | Kone Len | Dharamdas Chamber | Near HDFC Bank | Haut-Lomami | Kabongo |   444604 | business01@mailinator.com |    7896541023 | Yes    | Business Analyst | Kobvon Ji | von01@mailinator.com | 7412508963 | 00112233440077 | Falcon Von          | Advans Bank | Branch4 | doc_desc23             | src\\test\\resources\\test.png | doc_desc25             | src\\test\\resources\\test.png | doc_desc22             | src\\test\\resources\\test.png | doc_desc21             | src\\test\\resources\\test.png | doc_desc27             | src\\test\\resources\\test.png | doc_desc26             | src\\test\\resources\\test.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | signature            |

  @SP_04
  Scenario Outline: End2End TestSuite to validate all funactionality- internal-portal
    Given User login in Internal portal
    When click on Manage Vat Registartion
    And select "<Filter>" option and "<FName Business>"
    And clicks on manage button and select "<Manage>"
    And Redirect to confirmation page and click on "<DeOption>"
    And Clicks on Close Button
    And clicks on logout in internal portal

    Examples: 
      | TestCase_Id    | Description             | Filter | FName Business      | Manage | DeOption |
      | TC_Internal_01 | Manage VAT Registartion | NIF    | ADFSXXXABVCDFE00100 | Review | Approve  |

  @SP_11
  Scenario Outline: Validate Functionality of E-filling - tax-payer-portal
    Given User is on Tax Payer Portal
    When Connect database and execute query and run successfully
    Then clicks on Vat E-filling option on left panel
    And clicks on e-filing to fill data
    And Enter data in Operation Performed "<DG>","<DS1>","<DS2>" , "<DGI>","<DSI>", "<FPP>" ,"<Export>", "<Exempt>","<Non-taxable>"
    And Enter data in Deduction "<AssetsI>" ,"<AssetsL>", "<GoodsI>" ,"<GoodsL>","<Raw MaterialI>","<Raw MaterialL>" ,"<OthersI>" ,"<OthersL>"
    And Enter data in Adjustment "<Vat Reversal>" , "<Supplementry Deduction>" , "<Vat deducted>" ,"<Recovery>"
    And calculate tax calculations and enter "<VAT3Party>"
    And Upload Efile schedule "<Efile>"
    And Check for Confirmation and choose authorized signatory "<Authorized Signatory>"
    And clicks on submit button on E-filling page
    And Enter OTP and click on verify button and click on Ok button
    And calculate Tax payable amount
    And Click on Proceed Button and click on Ok button on offset successful

    #And cliccks on "<Payment Option>" and verify details
    #And Execute query for payment
    Examples: 
      | TestCase_Id | Description                  | DG     | DS1  | DS2  | DGI  | DSI  | FPP  | Export | Exempt | Non-taxable | AssetsI | AssetsL | GoodsI | GoodsL | Raw MaterialI | Raw MaterialL | OthersI | OthersL | Vat Reversal | Supplementry Deduction | Vat deducted | Recovery | VAT3Party | Efile                                 | Authorized Signatory | Payment Option |
      | TC_Efile_01 | Enter data in E-filling form | 150000 | 2000 | 1000 | 2000 | 1000 | 1000 |   1500 |   1300 |        1300 |    1300 |    2000 |   1000 |   1000 |          1000 |          1000 |    2000 |    2000 |          500 |                    500 |          500 |     2000 |       100 | \\src\\test\\resources\\Scenario.xlsx | signature            |                |

 @SP_7.1
  Scenario Outline: FX management module TestSuite to validate all funcationality - fx-taxofficer
    When click on FX Management tab
    Then verify the Base currency on the FX management is Congolese France and its value is one
    And click on update button and pop up appear
    And verify the pop up and see base currency is 1
    And enter currency for "<data>"
    And click on save button on pop up on officer
    And click on Historical FX Rates button
    And click on Previous button and again navigate to FX management dashboard
    And click on logout button fx taxofficer

    Examples: 
      | TestcaseID                | data  | message                               |
      | FX_Management_Officer_001 | 0.047 | FX currency rate updated successfully |

  @SP_7.2
  Scenario Outline: FX management module TestSuite to validate all funcationality - fx-supervisor
    When click on FX tab supervisor
    Then verify the base_currency of Congolese France and its value is one
    And click on approve button
    And click on historical_fx_rates button
    And click on prev button and return navigate to dashboard
    And click on logout button in fx-supervisor

    Examples: 
      | TestcaseID                | approvedata | message                               |
      | FX_Management_Officer_001 |       14.42 | FX currency rate updated successfully |

  @SP_7.3
  Scenario Outline: FX management module TestSuite to validate all funcationality - fx-admin
    Given admin is on FX Management "<TestcaseID>" "<Description>"
    When admin click on FX tab
    Then verify the admin base_currency of Congolese France and its value is one
    And click on currency and select "<SelectOption>"
    And click on List of currencies and select currency
    And click on Save button and see message "<mess>"
    And click on admin Update button
    And enter admin currency for "<data>"
    And admin click on save button on pop up
    #And click on admin approve button
    And click on admin historical_fx_rates button
    And click on admin prev button and return navigate to dashboard
    And click on admin logout button in fx-supervisor

    Examples: 
      Examples:

      | TestcaseID              | Description                        | name  | SelectOption       | mess                            | data |
      | FX_Management_Admin_001 | Verify admin fx all  functionality | ketan | txt_AddNewCurrency | New currency added successfully | 0.056 |

  @SP_12
  Scenario Outline: Validate Functionality of Assessment - internal-portal
    Given User login with tax-offcer's credentials
    When click on "<Assesment>" option
    And Tax-officer search for the records using "<Month>" , "<Year>" ,"<Filter>"
    And serach for the records "<SerachElement>" and click on search button
    And click on the "<Action>" option
    And Verify the details of e-filing operation performed
    And Verify the detailds of Tax-deductible
    And Verify the details of Adjustmnet
    And Verify the details of Assessment Summary
    And verify the details of Payment summary

    Examples: 
      | TestCase_Id      | Description | Assessment        | Month   | Year | Filter    | SerachElement | Action |
      | TC_Assessment_01 | assessment  | Manual Assessment | January | 2018 | Tax Payer | signature     | Assess |
