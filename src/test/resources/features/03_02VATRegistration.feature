Feature: VAT Registration

  @SP_03
  Scenario Outline: User submits the form for vat approval
    Given User is on VAT Registration Dashboard
    When User Enter Data: "<email>" "<password>"
    # And User Click on SignIn for new user
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

      | TestCase_Id   | Description          | email                        | password | Category     | SubCategory       | Nif                  | Nif Registration Date | FName Business | COI             | Incorporation Date | Business Type | Start Date | Company Size | Revenue  | AddressLine1      | AddressLine2   | Province | City  | ZipCode | MobileNumber | BName      | BAddressLine1     | BAddressLine2  | BProvince | BCity | BZipCode | BEmail             | BMobileNumber | Option | Job Title         | FName | AEmail              | Mobile     | Account Number | Account Holder Name | Bank Name   | Branch  | A1Document Description | A1Status    | A2Document Description | A2Status    | A3Document Description | A3Status    | A4Document Description | A4Status    | A5Document Description | A5Status    | A6Document Description | A6Status    | Filter                     | Manage | DeOption | SDomestic1 | SExport1 | SAdjustment1 | SDomestic2 | SExport2 | SAdjustment2 | PDomestic1 | PImport1 | PAdjustment1 | PDomestic2 | PImport2 | PAdjustment2 | Efile                                 | Authorized Signatory |
      | TC_End2End_01 | Registartion Process | approveduserr@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100587 | 2018-08-22            | Approved Userr | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440017 | Approved Userr      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | bindi                |
      | TC_End2End_02 | Registartion Process | onholdeduserr@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100588 | 2018-08-22            | OnHolded Userr | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440027 | OnHolded Userr      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | bindi                |
      | TC_End2End_03 | Registartion Process | rejecteduserr@mailinator.com | Test@123 | Legal Entity | Government Entity | 121210ABCDFE00100589 | 2018-08-22            | Rejected Userr | ABC09ABC09AGC09 | 2018-08-25         | Mining        | 2018-08-22 | Large Scale  | 75000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | Business 1 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 | abc@mailinator.com |    7896541023 | Yes    | Business Analysit | John  | john@mailinator.com | 7412508963 | 00112233440037 | Rejected Userr      | Advans Bank | Branch4 | doc_desc23             | capture.png | doc_desc25             | capture.png | doc_desc22             | capture.png | doc_desc21             | capture.png | doc_desc27             | capture.png | doc_desc26             | capture.png | Name of Business/Applicant | Review | Approve  |        100 |      100 |          100 |         10 |       10 |           10 |        100 |      100 |          100 |         10 |       10 |           10 | \\src\\test\\resources\\Scenario.xlsx | bindi                |