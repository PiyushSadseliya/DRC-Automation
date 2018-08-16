Feature: VAT Registration

  Scenario Outline: Fill VAT Registration form for Natural Person with adding new place and deleting it
    Given User is on VAT Registration Dashboard for adding extra data
    When User clicks on VAT Getting Started Guide CheckBox from Dashboard
    And Clicks on Register for Vat button from Dashboard
    And Clicks on Continue button of Instructions Page redirected from dashboard
    Then Selects Taxpayer Category "<Category>" and Sub Category "<Sub Category>"
    And Click on continue button
    And check Validation message for General Detail page
    And Enters NIF number "<Nif>" and Selects NIF Registration Date "<Nif Registration Date>"
    And User enters Full Name of Applicant "<Applicant Name>" and Training Name "<Training Name>"
    And Selects Type of business "<Type of Business>" , Business Start Date "<Business Start Date>" , Company Size "<Company Size>"
    And Enters Last Years Revenue "<Revenue>" from general details
    And Enters Address of Registered place "<Addres1>" "<Address2>" of details
    And Selects Province of Registered place "<Province>" , City of Registered place "<City>"
    And Enters Zipcode "<Zipcode>" , Mobile Number of Registered place "<Mobile Number>"
    And Clicks on Add New Place button
    And Enters Address of New Registered place "<EAddres1>" "<EAddress2>"
    And Selects Province of New Registered place "<EProvince>" , City of New Registered place "<ECity>"
    And Enters Zipcode of New Registered Place  "<EZipcode>" , Mobile Number of New Registered place "<EMobile Number>"
    And Delete the record
    And Verify record is deleted or not with "<Search Element>"
    And Enters details Of Business Promoters with Name of the Person "<BName>"
    And Enter BusinessAdsress "<BAddressLine1>" "<BAddressLine2>"
    And Enter Business Province "<BProvince>" , Business City "<BCity>" , Business Zip Code "<BZipCode>"
    And Enter Business Email "<BEmail>" , Business Mobile Number "<BMobileNumber>"
    And Selects Authorized Signatory "<Authorized Signatory>"
    And Enters Job Title of Authorized Signatory "<Authorized Job Title>"
    And Enters Name of Authorized Signatory "<Authorized Name>"
    And Enters Email of Authorized Signatory "<Authorized Email>"
    And Enters Mobile Number of Authorized Signatory "<Authorized Mobile Number>"
    And Clicks on Continue Button
    And check validation message for bank details page
    And Enters Account Number "<Account Number>"
    And Enters Account Holder Name "<Holder Name>"
    And Enters Bank Name "<Bank Name>"
    And Enters Branch of Bank "<Branch Name>"
    And Clicks on Continue Button
    And check validation message for Required document page
    And Select Address Proof "<ADP>" ,Address Proof File "<ADPF>"
    And Select Bank Account Proof "<BAP>" , Bank Account Proof File "<BAPF>"
    And Select Letter of Authorization "<LOA>" , Letter of Authorization File "<LOAF>"
    And Select Proof of Last Year "<PR>" , Proof File "<PRF>"
    And Clicks on Continue Button
    And select Acknowledgemnet check box and Submit Button

    Examples: 
      | Test Case Id  | Category       | Sub Category | Nif                  | Nif Registration Date | Applicant Name    | Training Name | Type of Business | Business Start Date | Company Size | Revenue | Addres1           | Address2       | Province | City  | Zipcode | Mobile Number | EAddres1          | EAddress2      | EProvince | ECity  | EZipcode | EMobile Number | Search Element | BName | BAddressLine1 | BAddressLine2 | Authorized Signatory | Authorized Job Title    | Authorized Name | Authorized Email    | Authorized Mobile Number | Account Number       | Holder Name | Bank Name   | Branch Name | ADP         | ADPF          | BAP       | BAPF          | LOA       | LOAF          | PR        | PRF           |
      | TC_VAT_Reg_01 | Natural Person | Individual   | ABCD123456789EFGHIJK | 2018-07-15            | Alexander Johnson | 1Rivevt       | Mining           | 2018-07-15          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Valsad |   444604 |     1234567890 | Valsad         |       |               |               | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     | doc_desc1_1 | F:\\logo1.png | doc_desc3 | F:\\logo1.png | doc_desc5 | F:\\logo1.png | doc_desc4 | F:\\logo1.png |
      | TC_VAT_Reg_02 | Natural Person | Individual   | ABCD123456789EFGHIJK | 2018-07-15            | Alexander Johnson | 1Rivevt       | Mining           | 2018-07-15          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Valsad |   444604 |     1234567890 | Valsad         |       |               |               | no                   |                         |                 |                     |                          | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     | doc_desc1_1 | F:\\logo1.png | doc_desc3 | F:\\logo1.png | doc_desc5 | F:\\logo1.png | doc_desc4 | F:\\logo1.png |

  Scenario Outline: Fill VAT Registration form for Legal Entity with adding new place and deleting it
    Given User is on VAT Registration Dashboard for adding extra data
    When User clicks on VAT Getting Started Guide CheckBox from Dashboard
    And Clicks on Register for Vat button from Dashboard
    And Clicks on Continue button of Instructions Page redirected from dashboard
    Then Selects Taxpayer Category "<Category>" and Sub Category "<Sub Category>"
    And Enters NIF number "<Nif>" and Selects NIF Registration Date "<Nif Registration Date>"
    And User enters Full Name of Applicant "<Applicant Name>" and Training Name "<Training Name>"
    And Selects Type of business "<Type of Business>" , Business Start Date "<Business Start Date>" , Company Size "<Company Size>"
    And Enters Last Years Revenue "<Revenue>" from general details
    And Enters Address of Registered place "<Addres1>" "<Address2>" of details
    And Selects Province of Registered place "<Province>" , City of Registered place "<City>"
    And Enters Zipcode "<Zipcode>" , Mobile Number of Registered place "<Mobile Number>"
    And Clicks on Add New Place button
    And Enters Address of New Registered place "<EAddres1>" "<EAddress2>"
    And Selects Province of New Registered place "<EProvince>" , City of New Registered place "<ECity>"
    And Enters Zipcode of New Registered Place  "<EZipcode>" , Mobile Number of New Registered place "<EMobile Number>"
    And Delete the record
    And Verify record is deleted or not with "<Search Element>"
    And Selects Authorized Signatory "<Authorized Signatory>"
    And Enters Job Title of Authorized Signatory "<Authorized Job Title>"
    And Enters Name of Authorized Signatory "<Authorized Name>"
    And Enters Email of Authorized Signatory "<Authorized Email>"
    And Enters Mobile Number of Authorized Signatory "<Authorized Mobile Number>"
    And Clicks on Continue Button
    And Enters Account Number "<Account Number>"
    And Enters Account Holder Name "<Holder Name>"
    And Enters Bank Name "<Bank Name>"
    And Enters Branch of Bank "<Branch Name>"
    And Clicks on Continue Button
    And Select Address Proof "<ADP>" ,Address Proof File "<ADPF>"
    And Select Bank Account Proof "<BAP>" , Bank Account Proof File "<BAPF>"
    And Select Certification Of Incorporation "<COI>" , File "<COIF>"
    And Select Degree of Establishmentn "<DOE>" , File "<DOEF>"
    And Select Letter of Authorization "<LOA>" , Letter of Authorization File "<LOAF>"
    And Select Proof of Last Year "<PR>" , Proof File "<PRF>"
    And Clicks on Continue Button
    And select Acknowledgemnet check box and Submit Button

    Examples: 
      | Category     | Sub Category        | Firm | Nif                  | Nif Registration Date | Business Name  | Number of COI | Date of Incorporation | Type of Business | Business Start Date | Company Size | Revenue | Addres1           | Address2       | Province | City  | Zipcode | Mobile Number | EAddres1          | EAddress2      | EProvince | City  | EZipcode | EMobile Number | Full name     | Promoters Address1 | Promoters Address2 | Promoters Province | Promoters City | Promoters Zipcode | Promoters Email | Promoters Mobile No | EFull name    | EPromoters Address1 | EPromoters Address2 | EPromoters Province | EPromoters City | EPromoters Zipcode | EPromoters Email | EPromoters Mobile No | Authorized Signatory | Authorized Job Title    | Authorized Name | Authorized Email    | Authorized Mobile Number | Account Number       | Holder Name | Bank Name   | Branch Name |
      | Legal Entity | Government Entity   |      | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Government Entity   |      | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | no                   |                         |                 |                     |                          | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Incorporated Bodies | Yes  | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | no                   |                         |                 |                     |                          | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Incorporated Bodies | No   | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Incorporated Bodies | No   | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | no                   |                         |                 |                     |                          | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Incorporated Bodies | Yes  | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Non-Corporates      | Yes  | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Non-Corporates      | Yes  | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | no                   |                         |                 |                     |                          | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Non-Corporates      | No   | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
      | Legal Entity | Non-Corporates      | No   | ABCD123456789EFGHIJK | 30-05-2018            | 1Rivet Pvt Ltd | A349430590354 | 30-05-2018            | Mining           | 01-06-2018          | Large Scale  | 8000000 | Dharamdas Chamber | Near Axis Bank | Bas-Uele | Aketi |  444604 |    1234567890 | Dharamdas Chamber | Near Axis Bank | Bas-Uele  | Aketi |   444604 |     1234567890 | Ricky Ponting | RM Park            | Aum Bungalow       | Haut-Katanga       | Dubie          |            444604 | ricky@gmail.com |          7894856308 | Ricky Ponting | RM Park             | Aum Bungalow        | Haut-Katanga        | Dubie           |             444604 | ricky@gmail.com  |           7894856308 | yes                  | Chief Technical officer | Alexander Smith | alexander@gmail.com |               9876543250 | 78945869214566333333 | Eric Thomas | Advans Bank | Branch4     |
