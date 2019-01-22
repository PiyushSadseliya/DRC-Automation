Feature: End2End TestSuite

  @SP_03
  Scenario Outline: End2End TestSuite to validate all funactionality - Tax Payer Portal
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
    And Clicks on Save Draft Button
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
      | TestCase_Id   | Description          | Category     | SubCategory       | Nif                 | Nif Registration Date | FName Business | COI             | Incorporation Date | Business Type | Start Date | Company Size | Revenue  | AddressLine1      | AddressLine2   | Province | City  | ZipCode | MobileNumber | BName      | BAddressLine1     | BAddressLine2  | BProvince | BCity | BZipCode | BEmail        | BMobileNumber | Option | Job Title         | FName | AEmail         | Mobile     | Account Number | Account Holder Name | Bank Name   | Branch  | A1Document Description | A1Status                       | A2Document Description | A2Status                       | A3Document Description | A3Status                       | A4Document Description | A4Status                       | A5Document Description | A5Status                       | A6Document Description | A6Status                       | Filter                     | Manage | DeOption | SDomestic1 | SExport1 | SAdjustment1 | SDomestic2 | SExport2 | SAdjustment2 | PDomestic1 | PImport1 | PAdjustment1 | PDomestic2 | PImport2 | PAdjustment2 | Efile                                 | Authorized Signatory |
      | TC_End2End_01 | Registartion Process | Legal Entity | Government Entity | ADFSXXXABVCDFE00100 | 2019-01-13            | 1Rivet S       | ABC09ABC09AGC09 | 2019-01-12         | Mining        | 2019-01-12 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Ituri     | Aru   |   444604 | abc@gmail.com |    7896541023 | Yes    | Business Analysit | John  | john@gmail.com | 7412508963 | 00112233440077 | John Martin         | Advans Bank | Branch4 | doc_desc1              | src\\test\\resources\\test.png | doc_desc1              | src\\test\\resources\\test.png | doc_desc1              | src\\test\\resources\\test.png | doc_desc1              | src\\test\\resources\\test.png | doc_desc1              | src\\test\\resources\\test.png | doc_desc1              | src\\test\\resources\\test.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | bindi                |

  @SP_04
  Scenario Outline: End2End TestSuite to validate all funactionality - Internal Portal
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
  Scenario Outline: Validate Functionality of E-filling - Tax Payer Portal
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

    #  And cliccks on "<Payment Option>" and verify details
    #  And Execute query for payment
    Examples: 
      | TestCase_Id | Description                  | DG   | DS1 | DS2 | DGI | DSI | FPP | Export | Exempt | Non-taxable | AssetsI | AssetsL | GoodsI | GoodsL | Raw MaterialI | Raw MaterialL | OthersI | OthersL | Vat Reversal | Supplementry Deduction | Vat deducted | Recovery | VAT3Party | Efile                                 | Authorized Signatory | Payment Option |
      | TC_Efile_01 | Enter data in E-filling form | 5000 | 200 | 100 | 200 | 100 | 100 |    150 |    120 |         120 |     120 |     200 |     10 |     10 |            10 |            10 |      20 |      20 |           50 |                     50 |           50 |       20 |       100 | \\src\\test\\resources\\Scenario.xlsx | ATEUSER3             |                |

  @SP_07.1
  Scenario Outline: Validate functionality of FX- management - Internal portal
    Given User Login with Admin's credentials
    When Click on Fx management tab and check for the base currency "<Rate>" , "<Country>"
    And Click on Historical data and check for the base currency "<Rate>" , "<Country>"
    And Click on previous button
    And Click on Update button and check for the base currency "<Rate>" , "<Country>"
    And Click on cancel button
    And update the "<Rates>" and click on save button and check "<Tost Message>"

    Examples: 
      | TestCase_Id | Description | Rate | Country             | Rates | Tost Message                          |
      | TC_FX_01    | FX-admin    |    1 | Congolese Franc(FC) |   200 | FX currency rate updated successfully |

  @SP_07.2
  Scenario Outline: Validate functionality of FX- management - Internal portal
    Given User Login with Admin's credentials
    When Click on Fx management tab
    When select "<Option>" , "<Currency>" from the drop-down
    And validate "<Tost Message>"

    Examples: 
      | TestCase_Id | Description | Option           | Currency    | Tost Message                    |
      | TC_FX_01    | FX-admin    | Add new Currency | Qatari Rial | New currency added successfully |
      | TC_FX_01    | FX-admin    | Remove Currency  | Qatari Rial | Currency removed successfully   |

  @SP_07.3
  Scenario Outline: Validate functionality of FX- management with supervisor- Internal portal
    Given User Login with Admin's credentials
    When Click on Fx management tab
    When select "<Option>" for confirmation

    # And validate "<Tost Message>"
    Examples: 
      | TestCase_Id | Description   | Option  | Tost Message                                      |
      | TC_FX_01    | FX-supervisor | Approve | New currency rates has been approved successfully |

  @SP_12
  Scenario Outline: Validate Functionality of Assessment - Internal Portal
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

    # And check for "<Tost message>"
    Examples: 
      | TestCase_Id      | Description | Assesment         | Month   | Year | Filter    | SerachElement | Action   | Tost message                        |
      | TC_Assessment_01 | assessment  | Manual Assessment | January | 2019 | Tax Payer | 1Rivet S      | Assess   | Assessment Successfully Completed   |
      | TC_Assessment_02 | assessment  | Assessed List     | January | 2019 | Tax Payer | 1Rivet S      | Reassess | Reassessment Successfully Completed |

  @SP_09.1
  Scenario Outline: Validate functionality of Objection & Appeal Module - Tax Payer Portal
    Given User login with Tax-payers credentials
    When clicks on e-filling tab
    And clicks on assessment icon view button
    And Clicks on Notice view button
    And Clicks on "<option>"
    And redirect to cases tab and fill details "<Objection Type>","<Title>" , "<Description>"
    And click on upload file "<file>"
    And clicks on submit button

    Examples: 
      | TestCase_Id     | Description        | option    | Objection Type | Title                   | Description                        | file                                  |
      | TC_Objection_01 | Objection-taxpayer | Objection | Reassessment   | Notice For Reassessment | Objection from tax-payer ATEUSER37 | \\src\\test\\resources\\Scenario.xlsx |

  @SP_09.2
  Scenario Outline: Validate functionality of Objection & Appeal Module - Internal Portal
    Given User login with admin/tax-officer credentials
    When clicks on case management tab
    And Apply filter "<Filter>" option , "<SearchElement>" and click on search ;
    And Clicks on manage icon and  "<Manage>" option
    And Clicks on  "<Priority>","<Action>" option and click on submit button

    Examples: 
      | TestCase_Id | Description        | Filter | SearchElement | Manage | Priority | Action       |
      | TC_OBj_01   | Objection-internal | NITVA  | Reassessment  | View   | High     | Under Review |

  @SP_16
  Scenario Outline: Validate functionality of EFD module - manufactorer portal
    Given User Login with Manufacturer credentials
    When Click on Vendor registartion tab
    And Click on Register Vendor Button
    And Fill the Details of Vendor "<NIF>" , "<NIFDate>" , "<VName>" , "<VMobileNumber>" ,"<VEmail>"
    And Fill the Details of contact person "<CName>" ,"<CMobileNumber>" , "<CEmail>"
    And Fill Address detals "<AddressLine1>" ,"<Province>" ,"<City>"
    And click on Register button and validate "<Tost Message>"

    Examples: 
      | TestCase_Id | Description      | NIF          | NIFDate    | VName | VMobileNumber | VEmail              | CName | CMobileNumber | CEmail             | AddressLine1 | Province | City  | Tost Message                            |
      | TC_EFDM_01  | EFD-manufactorer | 100330131011 | 2018-12-22 | jack  |     124563564 | jack@mailinator.com | Zil   |     874596924 | Zil@mailinator.com | Valsad       | Bas-Uele | Aketi | Vendor has been registered successfully |

  @SP_17
  Scenario Outline: Validate functionality of EFD module -vendor portal
    Given User Login with vendor's credentials
    When Click on EFD registartion tab
    And Click on EFD Registration Button
    And Enter NITVA number and click on search button
    And Fill the Details of Vendor "<Address>" , "<SIM1>" , "<SIM2>" , "<TypeOfDevice>" ,"<EFDModule>" ,"<EFDID>"
    And click on Test button and validate "<Test Tost Message>"
    And click on Register button and validate "<Reg Tost Message>"

    Examples: 
      | TestCase_Id | Description | Address    | SIM1      | SIM2      | TypeOfDevice            | EFDModule | EFDID | Test Tost Message                       | Reg Tost Message                            |
      | TC_EFDV_01  | EFD-Vendor  | 2019-01-07 | 123456789 | 987456321 | Electronic Tax Register | ETRC1001  | Zil   | The device has been tested successfully | The device has been successfully registered |
