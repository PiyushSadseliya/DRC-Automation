Feature: User is on Assessed List

  @TC_001_Valid_DRC_ATC_LoginInternalPortal_01
  Scenario Outline: Sales Adjustement Page
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                           | Username         | Password |
      | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati | admin    |

  #@TC_01  UI Part
  #Scenario: Verify the UI elements of Assessed list landing screen page
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User click on Assessment Tab
  #  And User click on Assessed List
  #  And User see landing screen for assessed list
  #Examples:
  #|TestcaseID          |Description|
  #|Assessed List_001|Verify the UI of the Page|
  @TC_02
  Scenario Outline: Validate Tax Officer is able to View Notice
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click on view notice
    And User check view notice

    # check locator to found
    Examples: 
      | TestcaseID       | Description          | Period    | Data              |
      | Assessed List_01 | Validate View Notice | PeriodJan | 20180705073851634 |

  # 03 is on hold as objection is not implemented
  @TC_03
  Scenario Outline: Validate Tax officer able to view Objection.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click on "<view>" for View objection
    And User check view notice for view objection

    Examples: 
      | TestcaseID       | Description             | Period    | Data              | view               |
      | Assessed List_02 | Validate View Objection | PeriodJan | 20180705073851634 | drp_View_objection |

  @TC_04
  Scenario Outline: Validate reassess option from manage dropdown.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click on "<view>" for Reassess option
    And User navigate to re assement screen

    Examples: 
      | TestcaseID       | Description               | Period    | Data              | view          |
      | Assessed List_03 | Validate Reassess Options | PeriodJan | 20180705073851634 | drp_Reassemet |

  @TC_05
  Scenario Outline: Validate ReferenceID generated is not duplicate
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>" for assessed type here
    And User click on type here
    And User check referance id "<referance>"

    Examples: 
      | TestcaseID       | Description          | Period    | Data | Filter          | referance |
      | Assessed List_04 | Validate ReferenceID | PeriodJan |      | drp_ReferanceId |           |

  # incomplete scenario
  # it is reflecting e-filing screen depands on it tax payer 
  @TC_06
  Scenario Outline: Validate Assessed Date on Assessed list dashboard with the tax payer portal e-filing assessment completed date
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Date>" for assessed type here
    And User click on type here
    # assessed date which reflected in efiling landing screen
    And User check date

    Examples: 
      | TestcaseID       | Description            | Period    | Date | Filter           |
      | Assessed List_05 | Validate assessed date | PeriodJan |      | drp_AssessedDate |

  @TC_07
  Scenario Outline: Validate NITVA number displayed with the particular tax payer
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>" for assessed type here
    And User click on type here
    And User ckeck NITVA number "<NITVA>" for tax payer "<taxpayer>"

    Examples: 
      | TestcaseID       | Description       | Period    | Data | Filter    | NITVA | taxpayer |
      | Assessed List_06 | Validate NITVA no | PeriodJan |      | drp_NITVA |       |          |

  # not implemented
  # after generating raise notice the date will generated and it should reflect to tax payer on assessed section
  # (After successful manual assessment the status is changed to Assessed.)
  #
  @TC_08
  Scenario Outline: Validate Objection status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>" for assessed type here
    And User click on type here
    
    And User see status Assessed
    And User Logout
    
    And User go to tax payer 
    When User Enter Data: "<email>" "<password>"
    And User Clicks on "SignIn"
    And User click on Tab 
    And User click on collpase icon for filing "<month>" 
    And   User check button "<button>" for Assement
  
    Examples: 
      | TestcaseID       | Description       | Period    | Data | Filter | NITVA | taxpayer |month|button|email|password|
      | Assessed List_07 | Validate NITVA no | PeriodJan |      |        |       |          | Jan |view  |franky@o3enzyme.com|Franky07*|

  @TC_09
  Scenario Outline: Validate In Progress status.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>" for assessed type here
    And User click on manage setting drop down for Assessement list
    And User click on reassess and user see Reassessment e-Declaration Reconciliation page
    And User click on Next button and user see Reassessment Liability Calculation page
    And User click on Previous button and user see Reassessment e-Declaration Reconciliation page
    And User again click on Previous button and user see Assessed list dashboard

    Examples: 
      | TestcaseID       | Description                 | Period    | Data |
      | Assessed List_08 | Validate In Progress status | PeriodJan |      |

  @TC_10
  Scenario Outline: Validate Assessed status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User see manual assement is selected
    And User click on drop down "<Period>"
    And User click on FilterBy "<Filter>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click assess "<assess>" and user see Manual Assessment e-declaration page
    And User click on next button and user see Manual Assessment liability calculation page
    And User click on next buton and user see Payment due page
    And User click on Raise notice button and user see Notice of assessment page
    And User click on close button and user navigate to Manual assessment dashboard
    And User again follow same step
    And User click on FilterBy "<Filter>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click assess "<assess>" and user see Manual Assessment e-declaration page
    And User click on next button and user see Manual Assessment liability calculation page
    And User click on next buton and user see Payment due page
    And User click on Raise notice button and user see Notice of assessment page
    And User click on confirm button and user navigate to Manual assessment dashboard
    And User click on assessed list tab
    And User again click on FilterBy "<FilterAssess>"
    And User again type "<dataAssess>"
    And User click on type here
    And User check status Assessed for particular user at Assessed list

    Examples: 
      | TestcaseID       | Description              | Period    | Filter     | Data        | assess | FilterAssess | dataAssess |
      | Assessed List_09 | Validate Assessed status | PeriodJan | drp_Status | in progress |        |              |            |

  # this will come after completed for the particular tax payer by assigned assessment officer
  # and notice should be raised successfully
  @TC_11
  Scenario Outline: Validate re-assessed status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on filterby "<status>" and click on "<assess>" and click on search button
    And User click on manage setting drop down for Assessement list
    And User click assess "<reassess>" and user see Manual Assessment e-declaration page
    # re-asses
    And User click on next button and user see Manual Assessment liability calculation page
    And User click on next buton and user see Payment due page
    And User click on Raise notice button and user see Notice of assessment page
    #navigate to assessed list dashboard
    And User click on close button and user navigate to assessment list dashboard
    And User click on filterby "<status>" and click on "<assess>" and click on search button
    And User click on manage setting drop down for Assessement list
    # re-asses
    And User click assess "<reassess>" and user see Manual Assessment e-declaration page
    And User click on next button and user see Manual Assessment liability calculation page
    And User click on next buton and user see Payment due page
    And User click on Raise notice button and user see Notice of assessment page
    And User click on confirm button and user navigate to navigate to Assessed List dashboard
    And User again click on FilterBy "<FilterAssess>"
    And User again type "<reAssessdata>"
    And User click on type here
    And check status changed to in progress

    Examples: 
      | TestcaseID       | Description              | status     | assess             | reassess | FilterAssess |
      | Assessed List_10 | Validate Assessed status | drp_Status | drp_StatusAssessed |          |              |

  # to completew at end need to discuss with sanat as it is not proper
  @TC_12
  Scenario Outline: Validate Period Functionality.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab

    Examples: 
      | TestcaseID       | Description                 | Period    | Data |
      | Assessed List_11 | Validate In Progress status | PeriodJan |      |

  @TC_13_ReferenceID
  Scenario Outline: Validate whether Tax Officer is able to filter by ReferenceID
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for ReferenceID
    And User now type invalid referance "<new>"
    And User click on type here and see no record found
    And User refresh the page
    And User go to extreme page
    And User type "<FirstData>" and check record that was on first page for ReferenceID

    Examples: 
      | TestcaseID       | Description          | Filter          | Data | new | FirstData |
      | Assessed List_12 | Validate ReferenceID | drp_ReferanceId |      |  01 |           |

  @TC_13_Assessed_Date
  Scenario Outline: Validate whether Tax Officer is able to filter by Assessed Date
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for Assessed Date
    And User now type invalid Assessed Date "<new>"
    And User click on type here and see no record found
    And User refresh the page
    And User go to extreme page
    And User type "<FirstData>" and check record that was on first page for Assessed Date

    Examples: 
      | TestcaseID       | Description            | Filter           | Data    | new | FirstData |
      | Assessed List_13 | Validate Assessed Date | drp_AssessedDate | 6514511 |  01 |           |

  @TC_13_NITVA
  Scenario Outline: Validate whether Tax Officer is able to filter by NITVA
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for NITVA
    And User now type invalid NITVA "<new>"
    And User click on type here and see no record found
    And User refresh the page
    And User go to extreme page
    And User type "<FirstData>" and check record that was on first page for NITVA

    Examples: 
      | TestcaseID       | Description    | Filter    | Data    | new | FirstData |
      | Assessed List_14 | Validate NITVA | drp_NITVA | 6514511 |     |           |

  @TC_13_Tax_Payer
  Scenario Outline: Validate whether Tax Officer is able to filter by Tax Payer
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for Tax Payer
    And User now type invalid Tax Payer "<new>"
    And User click on type here and see no record found
    And User refresh the page
    And User go to extreme page
    And User type "<FirstData>" and check record that was on first page for Tax Payer

    Examples: 
      | TestcaseID       | Description         | Filter       | Data | new | FirstData |
      | Assessed List_15 | Validate  Tax Payer | txt_TaxPayer |      |     |           |

  @TC_13_Status
  Scenario Outline: Validate whether Tax Officer is able to filter by Status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on FilterBy "<Filter>" for Status
    And User type "<Data>"
    And User click on type here and check for Status
    And User now type invalid Status "<new>"
    And User click on type here and see no record found
    And User refresh the page
    And User go to extreme page
    And User type "<FirstData>" and check record that was on first page for Status

    Examples: 
      | TestcaseID       | Description     | Filter     | Data | new | FirstData |
      | Assessed List_16 | Validate Status | drp_Status |      |     |           |

  @TC_14
  Scenario Outline: Validate whether Tax Officer is able to filter by  entering data in Type here textbox when filter by option is selected as ALL
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User see Flter by all is selected
    And User enter valid "<data>" in type here
    And User check the valid data
    And User again enter invalid data "<invalidData>" in type here
    And User see message no record found

    Examples: 
      | TestcaseID       | Description         | Filter | Data | invalidData |
      | Assessed List_17 | Validate all filter | Status |      | dqwd        |

  @TC_15
  Scenario Outline: Validate whether Tax Officer is able to navigate to particular page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on page "<ClickPage>" and check page"<CheckPage>"
    And User see Result

    Examples: 
      | TestcaseID                     | Period    | ClickPage   | CheckPage   |
      | Assessed List_18 | PeriodJan | AssLast     | AssestRight |
      | Assessed List_19 | PeriodJan | AssLast     | AssestLeft  |
      | Assessed List_20 | PeriodJan | AssestRight | AssLast     |
      | Assessed List_21 | PeriodJan | AssestRight | AssFirst    |
      | Assessed List_22 | PeriodJan | AssFirst    | AssestLeft  |
      | Assessed List_23 | PeriodJan | AssFirst    | AssFirst    |

  #TC_001
  # ui part
  #Scenario: Verify the UI elements of Notice of assessment page
  @TC_002
  Scenario Outline: Validate the Notice details Section is generated properly.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the ReferenceID"<Refid>"Period"<period>"DateIssued taxCentre"<taxcentre>"

    Examples: 
      | TestcaseID     | Description                                                | month | year | nitvano | Refid | period | taxcentre |
      | View_Notice_01 | Validate the Notice details Section is generated properly. |       |      |         |       |        |           |

  # you Have liability shown in table
  @TC_003
  Scenario Outline: Validate the liability which tax payer has e-declared and payed
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the Assessed VatLiability as per the Payment Due

    Examples: 
      | TestcaseID     | Description                                                                     | month | year | nitvano |
      | View_Notice_02 | Validate the values in Liability table are populated Correctly from Payment Due |       |      |         |

  # We have calculated your liability using the amount table
  #Validate the Liability calculation table ( Annexure A ) generated Correctly.
  @TC_004
  Scenario Outline: Validate the liability which assessment officer has calculated while manual assessment
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the TaxAssesement is as per the Liability Calculated

    Examples: 
      | TestcaseID     | Description                                                                                             | month | year | nitvano |
      | View_Notice_03 | Validate the Liability calculation table ( Annexure A ) generated Correctly from Liability Calculation. |       |      |         |
