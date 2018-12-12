Feature: End2End TestSuite

  @SP_03
  Scenario Outline: End2End TestSuite to validate all funactionality - Tax Payer Portal
    Given User is on VAT Registration Dashboard
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
      | TestCase_Id   | Description          | Category     | SubCategory       | Nif                  | Nif Registration Date | FName Business | COI             | Incorporation Date | Business Type | Start Date | Company Size | Revenue  | AddressLine1      | AddressLine2   | Province | City  | ZipCode | MobileNumber | BName      | BAddressLine1     | BAddressLine2  | BProvince | BCity | BZipCode | BEmail        | BMobileNumber | Option | Job Title         | FName | AEmail         | Mobile     | Account Number | Account Holder Name | Bank Name   | Branch  | A1Document Description | A1Status                       | A2Document Description | A2Status                       | A3Document Description | A3Status                       | A4Document Description | A4Status                       | A5Document Description | A5Status                       | A6Document Description | A6Status                       | Filter                     | Manage | DeOption | SDomestic1 | SExport1 | SAdjustment1 | SDomestic2 | SExport2 | SAdjustment2 | PDomestic1 | PImport1 | PAdjustment1 | PDomestic2 | PImport2 | PAdjustment2 | Efile                                 | Authorized Signatory |
      | TC_End2End_01 | Registartion Process | Legal Entity | Government Entity | AGHGIDG85452FGLOKJMN | 2018-08-22            | 1Rivet S       | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Ituri     | Aru   |   444604 | abc@gmail.com |    7896541023 | Yes    | Business Analysit | John  | john@gmail.com | 7412508963 | 00112233440077 | John Martin         | Advans Bank | Branch4 | doc_desc23             | src\\test\\resources\\test.png | doc_desc25             | src\\test\\resources\\test.png | doc_desc22             | src\\test\\resources\\test.png | doc_desc21             | src\\test\\resources\\test.png | doc_desc27             | src\\test\\resources\\test.png | doc_desc26             | src\\test\\resources\\test.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | bindi                |

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
      | TestCase_Id    | Description             | Filter                     | FName Business | Manage | DeOption |
      | TC_Internal_01 | Manage VAT Registartion | Name of Business/Applicant | 1Rivet S       | Review | Approve  |

  @SP_05
  Scenario Outline: Validate Functionality of E-filling - Tax Payer Portal
    Given User is on Tax Payer Portal
    When Connect database and execute query and run successfully
    Then clicks on Vat E-filling option on left panel
    And click on efiling to fill data
    And Enter sales data in E-filling "<SDomestic1>" ,"<SExport1>" , "<SAdjustment1>" ,"<SDomestic2>" ,"<SExport2>" , "<SAdjustment2>"
    And Enter Purchase data in E-filling "<PDomestic1>" ,"<PImport1>" , "<PAdjustment1>" ,"<PDomestic2>" ,"<PImport2>" , "<PAdjustment2>"
    And Enter Adjustment data in E-filing "<Invoice1>" ,"<Credit1>" ,"<Debit1>" ,"<Invoice2>" ,"<Credit2>" ,"<Debit2>"
    And Upload Efile schedule file "<Efile>"
    And Check for Confirmation and choose authorized signatory "<Authorized Signatory>"
    And clicks on submit button on E-filling page

    Examples: 
      | TestCase_Id | SDomestic1 | SExport1 | SAdjustment1 | SDomestic2 | SExport2 | SAdjustment2 | PDomestic1 | PImport1 | PAdjustment1 | PDomestic2 | PImport2 | PAdjustment2 | Invoice1 | Credit1 | Debit1 | Invoice2 | Credit2 | Debit2 | Efile                                 | Authorized Signatory |
      | TC_Efile_01 |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 |      100 |     100 |      0 |       10 |      10 |      0 | \\src\\test\\resources\\Scenario.xlsx | bindi                |

  @SP_06
  Scenario Outline: Validate Functionality of Assessment -Interal Portal
    Given Tax-officer is on given Page "<Page>"
    When Tax-officer Select "<Period>" , "<Year>" , "<Filter>"from drop-down
    And Tax-officer Search for  Record from "<Search Element>"
    And Clicks on Search Button
    And Clicks For the status from "<Status>"
    And Clicks on drp_select button
    And Clicks on  given "<Option>"
    And Clicks on sales_domestic icon , redirect to sales page and click on previous button
    And Clicks on sales_export icon , redirect to sales page and click on previous button
    And Clicks on sales_adjustment icon , redirect to sales page and click on previous button
    And Clicks on purchase_domestic icon , redirect to sales page and click on previous button
    And Clicks on purchase_export icon , redirect to sales page and click on previous button
    And Clicks on purchase_adjustment icon , redirect to sales page and click on previous button

    Examples: 
      | Test Case Id | Description | Page              | Period  | Year | Filter    | Search Element | Status  | Option |
      | TC_Smoke_001 | Assessment  | Manual Assessment | January | 2018 | Tax Payer | bindi          | Pending | Assess |
