 Feature: End2End TestSuites012
 
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
    And check for "<Tost message>"

    Examples: 
      | TestCase_Id      | Description | Assesment         | Month   | Year | Filter    | SerachElement | Action   | Tost message                        |
      | TC_Assessment_01 | assessment  | Manual Assessment | January | 2018 | Tax Payer | Warn          | Assess   | Assessment Successfully Completed   |
      | TC_Assessment_02 | assessment  | Assessed List     | January | 2018 | Tax Payer | Warn          | Reassess | Reassessment Successfully Completed |

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
    And validate "<Tost Message>"

    Examples: 
      | TestCase_Id | Description   | Option  | Tost Message                                      |
      | TC_FX_01    | FX-supervisor | Approve | New currency rates has been approved successfully |

  @SP_EFD
  Scenario Outline: Validate functionality of EFD module - manufactorer portal
    Given User Login with Manufacturer credentials
    When Click on Vendor registartion tab
    And Click on Register Vendor Button
    And Fill the Details of Vendor "<NIF>" , "<NIFDate>" , "<VName>" , "<VMobileNumber>" ,"<VEmail>"
    And Fill the Details of contact person "<CName>" ,"<CMobileNumber>" , "<CEmail>"
    And Fill Address detals "<AddressLine1>" ,"<Province>" ,"<City>"
    And validate "<Tost Message>"

    Examples: 
      | TestCase_Id | Description   | NIF     | NIF          | NIFDate    | VName | VMobileNumber | VEmail              | CName | CMobileNumber | CEmail             | AddressLine1 | Province | City  | Tost Message                                      |
      | TC_FX_01    | FX-supervisor | Approve | 100330131011 | 2019-08-02 | jack  |  124563798745 | jack@mailinator.com | Zil   |  874596857924 | Zil@mailinator.com | Valsad       | Bas-Uele | Aketi | New currency rates has been approved successfully |

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
    And Clicks on manage icon and "<Manage>" option
    And Clicks on "<Action>" option and click on submit button
    

    Examples: 
      | TestCase_Id | Description        | Filter | SearchElement | Manage | Action                             |
      | TC_OBj_01   | Objection-internal | NITVA  | Reassessment  |        | Objection from tax-payer ATEUSER37 |
