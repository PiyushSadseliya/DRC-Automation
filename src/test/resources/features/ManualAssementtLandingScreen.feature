Feature: User is on Assessment Page

@TC_01
  Scenario Outline: DRC Internal Portal
	Given User is on DRC Internal Portal
	When  User Enter Valid : "<Username>" "<Password>"
  And   User Clicks on "SignIn" Button	
  Then  User Redirect to  "Dashboard" 
  					
    Examples: 
      | TestcaseID                           | Username         | Password |
      | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati |admin    |
					
  # UI part	
  #	Scenario: Verify the UI Elements on Assessment Page
  #  Given User is on Assessment Page
  #  And User click on Assessment Tab
  #  And User see Manual Assessment Page 
	
  #Examples:
  #|TestcaseID          |
  #|Manual_Assessment_01|
  
  
  @TC_02
  Scenario Outline: Validate the Manual Assessment dashboard page
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User see manual assessment and assessament list tab
    And User click on manual assessment
    And User click on drop down "<Period>"
   # And User click on month "<month>" and check
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>"
    And User type "<Data>"
    And User click on search button and check data
    And User click on manage setting drop down and check drop down list "<ClickSetting>"
    And User click on reassign and click on drop down and check list "<DropdownOfficer>"
    And User click on FilterBy "<FilterOfficer>" and type "<officerdata"> and click on search button
    And User click on manage setting drop down and click on Assess
    And User will navigate to user manual assessement page
  
    Examples: 
      | TestcaseID           | Period    | Year      | Filter           | Data              | ClickSetting | DropdownOfficer              | FilterOfficer             | officerdata |
      | Manual_Assessment_02 | PeriodJan | AssYear18 | AsestFilterNitva | 20180726023824844 | AssestManage | AssessOfficerChangedDropdown | AssestFilterAssestOfficer | Ritesh      |

  @TC_03
  Scenario Outline: Validate whether user can reassign the assessment officer whose status is Pending and in progress
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on FilterBy "<Filter>"
    And User click on "<FilterStatus>"
    And User click on search button and check status "<check>"
    And User click on manage setting
    And User click on manage status "<manageStatus>"
    And User click on drop down officer "<selectOfficer>" and click on cancel
    And User click on manage setting
    And User again click on drop down officer "<OfficerTwo>" and click on right tick
    And User check message for officer changed
  
    Examples: 
     | TestcaseID           | Period    | Filter             | FilterStatus     |check      | manageStatus         | selectOfficer              | OfficerTwo                 |
     | Manual_Assessment_03 | PeriodJan | AssestFilterStatus | StatusPending    |Pending    | AssestManageReassign | AssestChangedOfficerLaxman | AssestChangedOfficerRitesh |
     | Manual_Assessment_04 | PeriodJan | AssestFilterStatus | StatusInProgress |In Progress| AssestManageReassign | AssestChangedOfficerLaxman | AssestChangedOfficerRitesh |
 

  @TC_04
  Scenario Outline: Validate whether admin can select future month and year from the period drop down list
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<year>"
    And User see message no record found

    Examples: 
      | TestcaseID           | Period    | year      |
      | Manual_Assessment_05 | PeriodJan | AssYear17 |
			
  @TC_05
  Scenario Outline: Validate whether Admin/Supervisor is able to filter data using filter by and type here option
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<year>"
    And User click on FilterBy "<Filter>"
    And User enter data for NITVA "<data>"    
    And User check NITVA number
    And User refresh page
    And User again click on filter "<AgainFilter>"
    And User enter again data "<niftvaData>" and check message no record found
    And User filter record again "<again>" and click on business type "<type>"
    And User click on search button and check

    Examples: 
      | TestcaseID           | Period    | year      | Filter           | data              | AgainFilter      | niftvaData | again                    | type                |
      | Manual_Assessment_06 | PeriodJan | AssYear18 | AsestFilterNitva | 20180726023824844 | AsestFilterNitva |        100 | AssestFilterBusinessType | BusinessTypeTrading |

  @TC_06_Name_of_Applicant_TAX_Payer
  Scenario Outline: Validate whether Admin/Supervisor is able to filter by Name of Applicant
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User selects value from Assessment filter drop down "<Filters>"
    And User enters data for Assessment in type here text box "<Value>"
    And User check for valid data for TAX Payer
    And User again enter data in type here "<data>" for invalid data
    And User see message no record found

    Examples: 
      | TestcaseID                     | Period    | Filters              | Value  | data  |
      | Valid_Manage_VAT_Reg_Filter_07 | PeriodJan | AssestFilterTaxPayer | franky | Abx |

  @TC_06_NITVA
  Scenario Outline: Validate whether Admin/Supervisor is able to filter by NITVA
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User selects value from Assessment filter drop down "<Filters>"
    And User enters data for Assessment in type here text box "<Value>"
    And User check for valid data for NITVA
    And User again enter data in type here "<data>" for invalid data
    And User see message no record found

    Examples: 
      | TestcaseID                     | Period    | Filters          | Value             | data |
      | Valid_Manage_VAT_Reg_Filter_08 | PeriodJan | AsestFilterNitva | 20180726023824844 | 1000 |


@TC_06_Business_Type
  Scenario Outline: Validate whether Admin/Supervisor is able to filter by Business Type
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User selects value from Assessment filter drop down "<Filters>"    
    And User click on "<FilterStatus>"
    And User click on search button and check Business Type "<check>" 
    And User click on year "<year>"
    And User click on "<FilterStatus>"
    And User see message no record found           

  Examples: 
     | TestcaseID                     | Period    | Filters                  |FilterStatus             |check         | year      |
     | Valid_Manage_VAT_Reg_Filter_09 | PeriodJan | AssestFilterBusinessType |BusinessTypeManufacturing|Manufacturing |AssYear17  |
     | Valid_Manage_VAT_Reg_Filter_10 | PeriodJan | AssestFilterBusinessType |BusinessTypeMining       |Mining        |AssYear17  |
     | Valid_Manage_VAT_Reg_Filter_11 | PeriodJan | AssestFilterBusinessType |BusinessTypeServiceSector|Service Sector|AssYear17  |
     | Valid_Manage_VAT_Reg_Filter_12 | PeriodJan | AssestFilterBusinessType |BusinessTypeTrading      |Trading       |AssYear17  |


 
  @TC_06_company_Size
	Scenario Outline: Validate whether Admin/Supervisor is able to filter by Company Size
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User selects value from Assessment filter drop down "<Filters>"    
    And User click on "<FilterStatus>"
    And User click on search button and check Company Size "<check>" 
    And User click on year "<year>"
    And User click on "<FilterStatus>"
    And User see message no record found           

  Examples: 
     | TestcaseID                     | Period    | Filters                |FilterStatus      |check       | year     |
     | Valid_Manage_VAT_Reg_Filter_13 | PeriodJan | AssestFilterCompanySize|CompanySizeLarge  |Large Scale |AssYear17 |
     | Valid_Manage_VAT_Reg_Filter_14 | PeriodJan | AssestFilterCompanySize|CompanySizeMedium |Medium Scale|AssYear17 |
     | Valid_Manage_VAT_Reg_Filter_15 | PeriodJan | AssestFilterCompanySize|CompanySizeMicro  |Micro Scale |AssYear17 |
     | Valid_Manage_VAT_Reg_Filter_16 | PeriodJan | AssestFilterCompanySize|CompanySizeSmall  |Small Scale |AssYear17 |  
  
  

  @TC_06_Assessment_Officer
  Scenario Outline: Validate whether Admin/Supervisor is able to filter by Assessment Officer
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User selects value from Assessment filter drop down "<Filters>"
    And User enters data for Assessment in type here text box "<Value>"
    And User check for valid data for Assessment Officer
    And User again enter data in type here "<data>" for invalid data
    And User see message no record found

    Examples: 
      | TestcaseID                     | Period    | Filters                   | Value    | data   |
      | Valid_Manage_VAT_Reg_Filter_17 | PeriodJan | AssestFilterAssestOfficer | Shraddha | franky |

  @TC_06_Status
  Scenario Outline: Validate whether Admin/Supervisor is able to filter by Status
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User selects value from Assessment filter drop down "<Filters>"
    And User click Status In Progress "<Status1>" and check
    And User click Status Pending "<Status2>"  and check
    And User click on year "<year>"
    And User click Status In Progress "<Status1>" and check for no record found
    And User click Status Pending "<Status2>"  and check for no record found

    #And   User see message no record found
    Examples: 
      | TestcaseID                     | Period    | Filters            | Status1          | Status2       | year      |
      | Valid_Manage_VAT_Reg_Filter_18 | PeriodJan | AssestFilterStatus | StatusInProgress | StatusPending | AssYear17 |

  @TC_07
  Scenario Outline: Validate the functionality of Type here/Search text box with combination of period function
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<year>"
    And User click on FilterBy "<Filter>"
    And User enter data for NITVA "<data>"
    And User check message for combination of period

    Examples: 
      | TestcaseID                     | Period    | year      | Filter           | data              |
      | Valid_Manage_VAT_Reg_Filter_19 | PeriodJan | AssYear18 | AsestFilterNitva | 20180726023824844 |

  @TC_08
  Scenario Outline: Validate whether admin is able to filter data using different combination of filter by option and entering different option in type here text box
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<year>"
    And User click on FilterBy "<Filter>"
    And User enter data "<data>"
    And User see message no record found

    Examples: 
      | TestcaseID                     | Period    | year      | Filter           | data         |
      | Valid_Manage_VAT_Reg_Filter_20 | PeriodJan | AssYear18 | AsestFilterNitva | Medium Scale |

  @TC_09
  Scenario Outline: Validate whether Admin/Supervisor  is able to navigate to particular page
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
 
    And User click on page "<ClickPage>" and check page"<CheckPage>"
    And User see Result

    Examples: 
      | TestcaseID                     | Period    | ClickPage   | CheckPage   |
      | Valid_Manage_VAT_Reg_Filter_21 | PeriodJan | AssLast     | AssestRight |
      | Valid_Manage_VAT_Reg_Filter_22 | PeriodJan | AssLast     | AssestLeft  |
      | Valid_Manage_VAT_Reg_Filter_23 | PeriodJan | AssestRight | AssLast     |
      | Valid_Manage_VAT_Reg_Filter_24 | PeriodJan | AssestRight | AssFirst    |
      | Valid_Manage_VAT_Reg_Filter_25 | PeriodJan | AssFirst    | AssestLeft  |
      | Valid_Manage_VAT_Reg_Filter_26 | PeriodJan | AssFirst    | AssFirst    |

  @TC_10
  Scenario Outline: Validate whether Admin/Supervisor  is able to navigate to particular page and filter the data according
    Given User is on Assessment Page
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on Last "<Last>"
    And User select "<month>"
    And User click on FilterBy "<Filter>"
    And User enter data for NITVA "<data>"
    And User check NITVA number and status

    Examples: 
      | TestcaseID                     | Period    | Last    | year      | month     | Filter           | data              |
      | Valid_Manage_VAT_Reg_Filter_27 | PeriodFeb | AssLast | AssYear18 | PeriodJan | AsestFilterNitva | 20180726023824844 |
