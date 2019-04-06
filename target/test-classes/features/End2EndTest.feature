Feature: End2End Functional Smoke TestSuite

  @SP_03_Vat_Registartion
  Scenario Outline: Validate functionality of VAT Registration Dashboard - tax payer portal
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
    #And User click on add place button
    #And Enters Address Details2 "<2BAddressLine1>","<2BAddressLine2>","<BProvince2>","<BCity2>","<BZipCode>","<BMobileNumber2>"
    #And User click on add place button
    #And Enters Address Details3 "<3BAddressLine1>","<3BAddressLine2>","<BProvince3>","<BCity3>","<BZipCode>","<BMobileNumber3>"
    #And User click on add place button
   # And Enters Address Details4 "<4BAddressLine1>","<3BAddressLine2>","<BProvince4>","<BCity4>","<BZipCode>","<BMobileNumber4>"
    And select Authorization signature "<Option>" with Job Title "<Job Title>" , Full Name "<FName>" Email "<AEmail>" , Mobile Number "<Mobile>"
    And Clicks on Save Draft Button
    And Clicks on VAT Registration Page Continue Button
    And Enters Bank Details with Account Number "<Account Number>" , Account Holder Name "<Account Holder Name>" ,Bank Name "<Bank Name>" ,Branch "<Branch>"
    And Clicks on Bank details Continue Button
    #And select  Business address one for "<A1Document Description>" , "<A1Status>"
    #And select  Business address two for "<A1Document Description>" , "<A1Status>"
    #And select  Business address three for "<A1Document Description>" , "<A1Status>"
    And select Address Proof of Registered Place of Business for "<A1Document Description>" , "<A1Status>"
    And select Bank Account Proof for "<A2Document Description>" , "<A2Status>"
    And Select Certificate of Incorporation for "<A3Document Description>" , "<A3Status>"
    And select Law or Degree of Establishment for "<A4Document Description>" , "<A4Status>"
    And select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for "<A5Document Description>" , "<A5Status>"
    And select Proof of Last Year Revenue for "<A6Document Description>" , "<A6Status>"
    And Clicks on document required Continue Button
    And clicks on Acknowledgement checkbox and continue button
    And click on Ok button on alert page
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id   | Description          | Category     | SubCategory       | Nif             | Nif Registration Date | FName Business | COI             | Incorporation Date | Business Type | Start Date | Company Size | Revenue   | AddressLine1 | AddressLine2   | Province | City  | ZipCode | MobileNumber | BName       | BAddressLine1           | BAddressLine2        | BProvince | BCity | BZipCode | BEmail         | BMobileNumber | Option | Job Title         | FName | AEmail         | Mobile     | Account Number | Account Holder Name | Bank Name   | Branch  | A1Document Description | A1Status | A2Document Description | A2Status | A3Document Description | A3Status | A4Document Description | A4Status | A5Document Description | A5Status | A6Document Description | A6Status | BName2      | 2BAddressLine1   | 2BAddressLine2       | BProvince2 | BCity2   | BEmail2         | BMobileNumber2 | BName3      | 3BAddressLine1   | 3BAddressLine2       | BProvince3   | BCity3 | BEmail3         | BMobileNumber3 | BName4      | 4BAddressLine1   | 4BAddressLine2       | BProvince4 | BCity4 | BEmail4         | BMobileNumber4 | ToastMessage |
      | TC_End2End_01 | Registartion Process | Legal Entity | Government Entity | ADFSNKPABV00100 | 2018-01-11            | 1Rivet DRC     | ABC09ABC09AGC09 | 2018-01-11         | Manufacturing | 2018-01-12 | Large Scale  | 900000000 | Halar road   | Near Axis Bank | Bas-Uele | Aketi |  444604 |   1234567890 | DRCBusiness | Dharamdas Chamber line1 | Near Axis Bank line2 | Ituri     | Aru   |   444604 | frnd@gmail.com |    7896541023 | Yes    | Business Analysit | Gogga | john@gmail.com | 7412508963 | 00112233440077 | John Martin         | Advans Bank | Branch4 | doc_desc1              | test.png | doc_desc1              | test.png | doc_desc1              | test.png | doc_desc1              | test.png | doc_desc1              | test.png | doc_desc1              | test.png | 1Rivet DRC1 | Halar road line1 | Near Axis Bank line1 | Haut-Uele  | Niangara | frnd1@gmail.com |     1234567891 | 1Rivet DRC2 | Halar road line2 | Near Axis Bank line2 | Haut-Katanga | Dubie  | frnd2@gmail.com |     1234567892 | 1Rivet DRC3 | Halar road line3 | Near Axis Bank line3 | Equateur   | zongo  | frnd3@gmail.com |     1234567893 |              |

  @SP_04_Manage_Vat_Registration
  Scenario Outline: Validate  functionality of Manage Vat Registartion - Internal Portal
    Given User login in Internal portal
    When click on Manage Vat Registartion
    And select "<Filter>" option and "<FName Business>"
    And clicks on manage button and select "<Manage>"
    And Redirect to confirmation page and click on "<DeOption>"
    #Then successfull "<ToastMessage>"  display on given page
    And Clicks on Close Button

    Examples: 
      | TestCase_Id    | Description             | Filter | FName Business  | Manage | DeOption |
      | TC_Internal_01 | Manage VAT Registartion | NIF    | ADFSNKPABV00100 | Review | Approve  |

  @SP_11_E-Filling
  Scenario Outline: Validate functionality of E-filling - Tax Payer Portal
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
    #Then successfull "<ToastMessage>"  display on given page
    #And calculate Tax payable amount
    And Click on Proceed Button and click on Ok button on offset successful

    Examples: 
      | TestCase_Id | Description                  | DG    | DS1  | DS2  | DGI  | DSI  | FPP  | Export | Exempt | Non-taxable | AssetsI | AssetsL | GoodsI | GoodsL | Raw MaterialI | Raw MaterialL | OthersI | OthersL | Vat Reversal | Supplementry Deduction | Vat deducted | Recovery | VAT3Party | Efile         | Authorized Signatory |
      | TC_Efile_01 | Enter data in E-filling form | 50000 | 2000 | 1000 | 2000 | 1000 | 1000 |    150 |   1200 |        1200 |    1200 |     200 |   1000 |    100 |           100 |           100 |     200 |     200 |          500 |                    500 |          500 |      200 |      1000 | Scenario.xlsx | signature            |
      | TC_Efile_02 | Enter data in E-filling form | 60000 | 3000 | 1000 | 2000 | 1000 | 1000 |    150 |    120 |         120 |     120 |     200 |    100 |    100 |           100 |           100 |     200 |      20 |           50 |                     50 |           50 |       20 |       100 | Scenario.xlsx | signature            |
      | TC_Efile_03 | Enter data in E-filling form | 50000 | 2000 |  100 |  200 |  100 |  100 |    150 |    120 |         120 |     120 |     200 |    100 |    100 |           100 |           100 |     200 |      20 |           50 |                     50 |           50 |       20 |       100 | Scenario.xlsx | signature            |
      | TC_Efile_04 | Enter data in E-filling form | 50000 | 2000 |  100 |  200 |  100 |  100 |    150 |    120 |         120 |     120 |     200 |    100 |    100 |           100 |           100 |      20 |      20 |           50 |                     50 |           50 |       20 |       100 | Scenario.xlsx | signature            |
      | TC_Efile_05 | Enter data in E-filling form | 50000 | 2000 | 1000 |  200 |  100 |  100 |    150 |    120 |         120 |     120 |     200 |    100 |    100 |           100 |          1000 |      20 |      20 |           50 |                     50 |           50 |       20 |       100 | Scenario.xlsx | signature            |

  @SP_07.1_FX_Management_Admin
  Scenario Outline: Validate functionality of FX management admin role - Internal portal
    Given User Login with Admin's credentials
    When Click on Fx management tab and check for the base currency "<Rate>" , "<Country>"
    And Click on Historical data and check for the base currency "<Rate>" , "<Country>"
    And Click on previous button
    And Click on Update button and check for the base currency "<Rate>" , "<Country>"
    And update the "<Rates>" and click on save button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id | Description | Rate | Country             | Rates | ToastMessage                          |
      | TC_FX_01    | FX-admin    |    1 | Congolese Franc(FC) |    70 | FX currency rate updated successfully |

  @SP_07.2_FX_Management_Admin_Currency
  Scenario Outline: Validate functionality of FX management admin role - Internal portal
    Given User Login with Admin's credentials
    When Click on Fx management tab
    When select "<Option>" , "<Currency>" from the drop-down
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id | Description               | Option           | Currency    | ToastMessage                    |
      | TC_FX_01    | FX-admin Add new Currency | Add new Currency | Qatari Rial | New currency added successfully |
      | TC_FX_02    | FX-admin Remove Currency  | Remove Currency  | Qatari Rial | Currency removed successfully   |

  @SP_07.3_FX_Management_Supervisor
  Scenario Outline: Validate functionality of FX- management with supervisor role - Internal portal
    Given User Login with Admin's credentials
    When Click on Fx management tab
    When select "<Option>" for confirmation
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id | Description   | Option  | ToastMessage                                      |
      | TC_FX_01    | FX-supervisor | Approve | New currency rates has been approved successfully |

  @SP_12_Assessment_Reassessment
  Scenario Outline: Validate functionality of Assessment - Internal Portal
    Given User login with tax-offcer's credentials
    When click on "<Assesment>" option
    And Tax-officer search for the records using "<Month>" , "<Year>" ,"<Filter>"
    And serach for the records "<SearchElement>" and click on search button
    And click on the "<Action>" option
    And Verify the details of e-filing operation performed
    And Verify the details of Tax-deductible
    And Verify the details of Adjustmnet
    And Verify the details of Assessment Summary
    And verify the details of Payment summary
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id      | Description | Assesment         | Month    | Year | Filter | SearchElement | Action | ToastMessage                      |
      | TC_Assessment_01 | assessment  | Manual Assessment | January  | 2018 | NITVA  | 1Rivet Smoke  | Assess | Assessment Successfully Completed |
      | TC_Assessment_02 | assessment  | Manual Assessment | February | 2018 | NITVA  | 1Rivet Smoke  | Assess | Assessment Successfully Completed |
      | TC_Assessment_03 | assessment  | Manual Assessment | March    | 2018 | NITVA  | 1Rivet Smoke  | Assess | Assessment Successfully Completed |
      | TC_Assessment_04 | assessment  | Manual Assessment | April    | 2018 | NITVA  | 1Rivet Smoke  | Assess | Assessment Successfully Completed |

  @SP_09.1_Objection&Appeal_Taxpayer
  Scenario Outline: Validate functionality of Objection & Appeal Module - Tax Payer Portal
    Given User login with Tax-payers credentials
    When clicks on e-filling tab
    And clicks on assessment icon view button
    And Clicks on Notice view button
    And Clicks on "<option>"
    And redirect to cases tab and fill details "<Objection Type>","<Title>" , "<Description>"
    And clicks on submit button

    Examples: 
      | TestCase_Id     | Description        | option    | Objection Type | Title                   | Description              | ToastMessage |
      | TC_Objection_01 | Objection-taxpayer | Objection | Reassessment   | Notice For Reassessment | Objection from tax-payer |              |

  @SP_09.2_Objection&Appeal_admin
  Scenario Outline: Validate functionality of Objection & Appeal Module - Internal Portal
    Given User login with admin/tax-officer credentials
    When clicks on case management tab
    And Apply filter "<Filter>" option and click on search
    And Clicks on manage icon and  "<Manage>" option
    And Clicks on  "<Priority>","<Action>" option and click on submit button

    Examples: 
      | TestCase_Id | Description        | Filter | Manage | Priority | Action       |
      | TC_OBj_01   | Objection-internal | NITVA  | View   | High     | Under Review |

  @SP_10.1_DebtMangement
  Scenario Outline: Validate functionality of assign officer Debt Management
    Given "<Test Case ID>""<Description>" DGI should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Select Up to date
    Then click on zero to three months Pending amount Link
    Then user is on Pending debts
    Then Search by "<Filter>" nitva number and assigns to officer and is on Case Management

    Examples: 
      | Test Case ID             | Description                                                      | ageing     | Filter |
      | DRC_ATC_DebtManagement01 | Validate the assign officer button functionality with valid data | 0-3 Months | NITVA  |

  @SP_10.2_DebtMangement
  Scenario Outline: Validate functionality of Debt Management payment requested
    When clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed
    Then click on filter by "<Filter>" Nitvanumber
    Then click on sort icon of taxofficer
    Then Click on View in Manage Options
    Then user should be on Debt Collection Case
    Then click on Amount radio at Expected Recovery
    Then Enter the amount to be Recovered "<RecoverAmount>" and the percentage field should dispaly "<Rpercent>"
    Then click in Percentage Radio At Expected Recovery
    Then Enter the Percentage "<PerRec>" and displayed amount field "<RecAmount>"
    Then Status "Open" should be displayed
    Then Selects Action "Under Review"
    Then click on Submit button
    Then Status "Under Review" should be displayed
    Then Selects Action "Request Payment"
    Then add Comment "<comment>"
    Then attach the document"<path>"
    Then click on Submit button
    Then user should be on Case Management Page
    Then no of notification should be 1 with "Request Payment" notification
    Then click on previous button from debt case
    Then click on filter by dropdown CaseID "<caseid>"
    Then Status "Payment Reminder Sent" should be displayed
    Then Selects Action "Close"
    Then click on Submit button

    Examples: 
      | Test Case ID            | Description                        | Filter | officername  | fdate      | todate     | RecoverAmount | Rpercent | PerRec | path        | RecAmount | comment                                      |
      | DRC_ATC_AssignedDebt_01 | Validate actions payment requested | NITVA  | Jainik Patel | 2018-09-20 | 2018-09-20 |           500 |      100 |    100 | Capture.pdf |       100 | Please pay the pending debts at the earliest |

  @SP_10.3_Payment_Agreement
  Scenario Outline: Validate functionality of Payment_Agreement Internal Portal
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type "<Nitva>" and click on search button
    And User click on manage drop down and click on view
    And User see status is "<StatusOpen>"
    And User select action and click on Under Review and click on save button
    And User see status is "<StatusUnderReview>"
    And User select action and click on Request Payment Agreement and click on save button
    And User click on notification on Payment Agreement
    And User see notification is open
    And User type initial amount "<Amount>"
    And User again type initial amount "<Amount1>"
    And User see validation message "<message>" for Payment Agreement
    And User again type initial amount "<Amount>"
    And User click on discount radio button
    And User see percentage is deselected
    And User click on percentage radio button
    And User see discount amount is deselected

    Examples: 
      | TestcaseID                           | Description                                 | filter                | TaxPayer     | StatusOpen | StatusUnderReview | Amount | Amount1      | message                                                          | path        |
      | DRC_ATC_Payment_Agrement_Tax_Officer | Validate functionality of Payment_Agreement | drp_CM_TaxPayer_Click | 1Rivet Smoke | Open       | Under Review      |     10 | 100000000000 | Amount should be less than the difference of total and discount. | Capture.pdf |

  @SP_15_Account_Adjustment
  Scenario Outline: Validate functionality of Account Adjustment for General - Internal portal
    Given "<Test Case Id>""<Description>" The officer has logged in with Uname "<uname>" Password "<pwd>"
    When clicks on Account adjustment from TaxPayer Profile of user with nitvanumber "<Filter>"
    Then user is on account adustment page
    Then selects action "<action>"
    Then validates created date Performed By "<user>" Source "<src>" and TaxPayer "<tpayer>"
    Then Source ID must be blank
    Then selects the Aprroved by officer "<ApproveO>"
    Then click on Add button and selects the transaction for adjustment
    Then Three row must be displayed with Old Records,Adustment row and total row
    Then user selects Charge "<charge>" and Enter Amount to be adjusted VAT Liability "<vatLiab>" LateFee "<ltfee>" Penalty "<pen>" Interest should be non-editable
    Then Select the reason "<reason>"
    Then Enters comment in the Account Adjustment "<comments>"
    Then clicks on Submit button
    Then click on Account Adjustment
    Then selects the user "<tpayer>" to validate the "<btn>" button for account adjustmentd done through internal adjstment "Internal adjustment"
    Then selects the user "<tpayer>" to Approve the Account Adjusted done through internal adjstment "Internal adjustment"
    Then status should be changed to "Approve" through to the account adjusted done through internal adjstment "Internal adjustment" TaxPayerName "<tpayer>"

    Examples: 
      | Test Case Id          | Description                     | Filter | tpayer       | action  | user  | src                 | ApproveO | reason       | comments            | charge | vatLiab | ltfee | pen  | btn      |
      | DRC_ATC_ACCAdjstmt_01 | Validate the Account Adjustment | NITVA  | 1Rivet Smoke | General | Ketan | Internal adjustment | Akib     | System Error | Adjusted the amount | Credit |    5000 |  5000 | 5000 | previous |

  @SP_17_Manufactorer_Portal
  Scenario Outline: Validate functionality of EFD module - manufactorer portal
    Given User Login with Manufacturer credentials
    When Click on Vendor registartion tab
    And Click on Register Vendor Button
    And Fill the Details of Vendor "<NIF>" , "<NIFDate>" , "<VName>" , "<VMobileNumber>" ,"<VEmail>"
    And Fill the Details of contact person "<CName>" ,"<CMobileNumber>" , "<CEmail>"
    And Fill Address detals "<AddressLine1>" ,"<Province>" ,"<City>"
    And click on Register button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id | Description   | NIF          | NIFDate    | VName | VMobileNumber | VEmail          | CName | CMobileNumber | CEmail          | AddressLine1 | Province | City  | ToastMessage                            |
      | TC_MP_01    | FX-supervisor | 100330131011 | 2018-12-22 | Deno  |          9824 | deno@mt2015.com | Lisa  |          8745 | lisa@mt2015.com | Valsad       | Bas-Uele | Aketi | Vendor has been registered successfully |

  @SP_17_Vendor_Portal
  Scenario Outline: Validate functionality of EFD Vendor module - vendor portal
    Given User Login with vendor's credentials
    When Click on EFD registartion tab
    And Click on EFD Registration Button
    And Enter NITVA number and click on search button
    And Fill the Details of Vendor "<Address>" , "<SIM1>" , "<SIM2>" , "<TypeOfDevice>" ,"<EFDModule>" ,"<EFDID>"
    And click on Test button and validate "<Test Tost Message>"
    And click on Register button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id | Description   | Address    | SIM1      | SIM2      | TypeOfDevice            | EFDModule | EFDID | Test Tost Message                       | ToastMessage                                |
      | TC_VP_01    | FX-supervisor | 2019-01-07 | 123456789 | 987456321 | Electronic Tax Register | ETRC1001  | Zil   | The device has been tested successfully | The device has been successfully registered |

  @SP_17_Helpdesk_Taxpayer
  Scenario Outline: Validate functionality of Help-Desk Module - Tax Payer Portal
    Given User login with Tax-payers credentials
    When Click on Help-desk tab
    And Fill the details "<IssueType>" ,"<ITitle>" ,"<IDescription>" ,"<IComment>"
    And Clicks on submit button on helpdesk

    Examples: 
      | TestCase_Id    | Description | IssueType            | ITitle               | IDescription                  | IComment                    |
      | TC_Helpdesk_01 | Help-Desk   | System Related Issue | Test From Automation | Test Automation from taxpayer | Device not wotking properly |

  @SP_17_Helpdesk_Internal
  Scenario Outline: Validate functionality of Help-Desk Module - Internal Portal
    Given User login in Internal portal
    When Click on Help-desk tab
    And Search for Registered TicketId
    And Check for status and other information from tax-payer
    And Select Next status "<Status>" and enter "<Comment>"
    And Clicks on submit button on helpdesk

    Examples: 
      | TestCase_Id    | Description        | Status       | Comment                       |
      | TC_Helpdesk_01 | Help-Desk-Internal | Under Review | Test From Automation internal |

  @SP_17_TaxPayerProfile
  Scenario Outline: Validate functionality of Tax-Payer Profile - Internal Portal
    Given User login in Internal portal
    When Click on Tax-payer profile tab
    And search by "<Filter>" and "<Element>" and hit search button
    And Click on View icon
    And Check Data for General details
    And Check Data for Declaration
    And Check Data for Assessment

    Examples: 
      | TestCase_Id    | Description                | Filter | Element                       |
      | TC_Helpdesk_01 | Tax Payer Profile-Internal | NITVA  | Test From Automation internal |

  @SP_18.1_IT_Support
  Scenario Outline: Validate functionalioty of IT-support Admin module - Internal Portal
    Given User login in Internal portal
    When Click on IT-Support tab
    And Click on + icon to create new issue
    And Fill the details "<IssueType>" ,"<ITitle>" ,"<IDescription>"
    And Clicks on Save Button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id     | Description          | IssueType     | ITitle               | IDescription                             | ToastMessage              |
      | TC_ITSupport_01 | IT-Support -Internal | General Query | Test From Automation | Test From Automation IT-Support internal | Record Added Successfully |

  @SP_18.2_IT_Support
  Scenario Outline: Validate the IT support User's functionality - ituser
    Given user should enter Username "<username>" and Password "<password>"
    And user clicks on Search "<Search>" textbox and enters the text
    Then user clicks on edit icon
    And user selects option from Priority dropdown "<Priority>"
    And user selects option from Next Status dropdown "<Next_Status>"
    And user selects option from Assign To Group dropdown
    Then click on download icon on any file
    Then file should get the download
    Then click on IT support submit button

    Examples: 
      | TC_ITSupportUserid | username                | password | Priority | Next_Status | Search                                   | comments      |
      | TC_18.1.1          | kalpesha@mailinator.com | Test@123 | High     | In Progress | Test From Automation IT-Support internal | Issue Updated |
      | TC_18.1.2          | kalpesha@mailinator.com | Test@123 | Medium   | On - Hold   | Test From Automation IT-Support internal | Issue Updated |
      | TC_18.1.3          | kalpesha@mailinator.com | Test@123 | Low      | Resolved    | Test From Automation IT-Support internal | Issue Updated |

  @SP_19_Fuel_Management_Admin
  Scenario Outline: Validate functionalioty of Fuel Management module - Internal Portal
    Given User login in Internal portal
    When Click on Fuel management tab
    And Check for the Current updated date and update fuel rate
    And update the rate as "<Petrol>" ,"<Diesel>" ,"<Keresone>" ,"<CNG>" ,"<Methanol>" ,"<Gasoline>"
    And click on save button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id          | Description           | Petrol | Diesel | Keresone | CNG            | Methanol | Gasoline                         | ToastMessage |
      | TC_Fuelmanagement_01 | Fuel management-Admin |     78 |     85 |       90 | 10100       10 |       15 | Fuel price Accepted successfully |              |

  @SP_19_Fuel_Management_Supervisor
  Scenario Outline: Validate functionality of Fuel management with supervisor role - Internal portal
    Given User login in Internal portal
    When Click on Fuel management tab
    And Clicks on the Approve Button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id          | Description                | ToastMessage |
      | Tc_Fuelmanagement_01 | Fuel management-supervisor |              |

  @SP_19_Fuel_Management_Taxofficer
  Scenario Outline: Validate functionality of Fuel-management with tax-officer - Internal portal
    Given User login in Internal portal
    When Click on Fuel management tab
    And Check for the Current updated date and update fuel rate
    And update the rate as "<Petrol>" ,"<Diesel>" ,"<Keresone>" ,"<CNG>" ,"<Methanol>" ,"<Gasoline>"
    And click on save button
    Then successfull "<ToastMessage>"  display on given page

    Examples: 
      | TestCase_Id          | Description                 | Petrol | Diesel | Keresone | CNG | Methanol | Gasoline | ToastMessage                     |
      | TC_Fuelmanagement_01 | Fuel management-Tax-officer |     78 |     85 |       90 |  10 |       10 |       15 | Fuel price Accepted successfully |
