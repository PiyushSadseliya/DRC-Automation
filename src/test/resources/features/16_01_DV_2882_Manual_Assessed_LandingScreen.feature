Feature: User is on Manual Assessement Landing Screen

  @TC_02
  Scenario Outline: Validate the Manual Assessment dashboard page All clicking compoment - internal portal
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    #    And User click on pin
    And User click on Assessment Tab
    And User see manual assessment and assessament list tab
    And User click on manual assessment
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    #And User click on FilterBy "<Filter>"
    And User click on FilterBy and click on TaxPayer
    And User type "<Data>"
    And User click on search button and check data "<Data>"
    And User click on manage setting drop down and check drop down list for Reassign and Assess
    And User click on reassign and click on drop down and check list "<DropdownOfficer>"
    #And User click on FilterBy "<FilterOfficer>" and type "<officerdata>" and click on search button
    And User click on manage setting drop down and click on Assess
    And User will navigate to user manual assessement page

    Examples: 
      | TestcaseID           | Description                        | Period        | Year            | Filter               | Data                   | DropdownOfficer                | FilterOfficer                 | officerdata |
      | Manual_Assessment_02 | validating all clickable compoment | txt_PeriodJan | txt_2019_Period | txt_AsestFilterNitva | Regression AprilTOne | drp_AssestChangedOfficerRitesh | txt_AssestFilterAssestOfficer | Laxman      |

  @TC_03
  Scenario Outline: Validate whether user can reassign the assessment officer whose status is Pending and in progress.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" dropdown and click on Status
    And User click on Status and click on "<FilterStatus>"
    And User click on search button and check status "<check>"
    And User click on manage setting
    And User click on manage status "<manageStatus>"
    And User click on drop down officer "<selectOfficer>" and click on cancel
    And User click on manage setting
    And User again click on drop down officer "<OfficerTwo>" and click on right tick
    And User check message for officer changed "<validationMessage>"

    Examples: 
      | TestcaseID             | Description                                      | Period        | Year            | Filter                 | FilterStatus   | check       | manageStatus             | selectOfficer                  | OfficerTwo                     | validationMessage                          |
      | Manual_Assessment_03_1 | Validating officer changed in pending status     | txt_PeriodJan | txt_2019_Period | txt_AssestFilterStatus | txt_Pending    | Pending     | txt_AssestManageReassign | drp_AssestChangedOfficerRitesh | drp_AssestChangedOfficerRitesh | Assessment officer reassigned successfully |
      | Manual_Assessment_03_2 | Validating officer changed in In Progress status | txt_PeriodJan | txt_2019_Period | txt_AssestFilterStatus | txt_InProgress | In Progress | txt_AssestManageReassign | drp_AssestChangedOfficerRitesh | drp_AssestChangedOfficerRitesh | Assessment officer reassigned successfully |

  #@TC_05
  #Scenario Outline: Validate whether User can select future month and year from the period drop down list.
  #Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #And User click on Dashboard
  #And User click on Assessment Tab
  #And User click on drop down Period and select "<Period>"
  #And User click on year and select "<year>"
  #And User see message no record found
  #
  #Examples:
  #| TestcaseID           | Description                                                  | Period        | year            |
  #| Manual_Assessment_05 | validate when user select month which are not file in filing | txt_PeriodDec | txt_2018_Period |
  @TC_06
  Scenario Outline: Validate whether User is able to filter data using filter by and type here option.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    #And User click on year and select "<year>"
    And User see NITVA number is selected
    And User click on FilterBy "<Filter>"
    And User type NITVA number and check
    #    And User enter data for NITVA "<data>" and click on search button
    #    And User check NITVA number "<NITVA>" no
    #And User refresh page
    #And User again click on filter "<AgainFilter>"
    And User again enter invalid data "<niftvaData>" and check message no record found

    Examples: 
      | TestcaseID           | Description                                                  | Period        | Year            | Filter               | data              | NITVA             | AgainFilter          | niftvaData | again        | type                         | BType                   | businessType |
      | Manual_Assessment_06 | Validating user is able filter by nitva no and business type | txt_PeriodJan | txt_2019_Period | txt_AsestFilterNitva | 20181211062210697 | 20181211062210697 | txt_AsestFilterNitva | 0000526000 | drp_FilterBy | txt_AssestFilterBusinessType | txt_BusinessTypeTrading | Trading      |

  @TC_07_Name_of_Applicant_TAX_Payer
  Scenario Outline: Validate whether User is able to filter by Name of Applicant
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    And User selects value from Assessment filter drop down "<Filters>"
    And User enters data for Assessment in type here text box "<Value>"
    And User check for valid data for TAX Payer "<Value>"
    And User again enter data in type here "<data>" for invalid data
    And User see message no record found

    Examples: 
      | TestcaseID           | Description                    | Period        | Filters                  | Value                  | data | Year            |
      | Manual_Assessment_07 | validate tyax payer  PeriodJan | txt_PeriodJan | txt_AssestFilterTaxPayer | Regression AprilTOne | Abx  | txt_2019_Period |

  @TC_07_NITVA
  Scenario Outline: Validate whether User is able to filter by NITVA
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    And User see NITVA number is selected
    And User selects value from Assessment filter drop down "<Filters>"
    And User type NITVA number and check
    #    And User enters data for Assessment in type here text box "<Value>"
    #And User check for valid data for NITVA "<Value>"
    And User again enter data in type here "<data>" for invalid data
    And User see message no record found

    Examples: 
      | TestcaseID             | Description              | Period        | Filters              | Value             | data      | Year            |
      | Manual_Assessment_07_1 | validate filter ny nitva | txt_PeriodJan | txt_AsestFilterNitva | 20190118050708529 | 000000000 | txt_2019_Period |

  #@TC_07_Assessment_Officer
  # Scenario Outline: Validate whether User is able to filter by Assessment Officer
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  # And User click on Assessment Tab
  #  And User click on drop down "<Period>"
  # And User click on year "<Year>" and check
  #  And User selects value from Assessment filter drop down "<Filters>"
  #  And User enters data for Assessment in type here text box "<Value>"
  #  #And User check for valid data for Assessment Officer "<validOfficer>"
  #  #And User again enter data in type here "<data>" for invalid data
  #  And User see message no record found
  #   Examples:
  #     | TestcaseID             | Description                 | Period         | Filters                       | Value  | validOfficer | data   |Year|
  #     | Manual_Assessment_07_2 | validate assessment officer | txt_PeriodJan | txt_AssestFilterAssestOfficer | Laxman | Laxman       | franky |txt_AssYear17|
  #  @TC_07_Business_Type
  #  Scenario Outline: Validate whether User is able to filter by Business Type
  #    Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #    And User click on Assessment Tab
  #    And User click on drop down "<Period>"
  #   And User click on year "<Year>" and check
  #    And User selects value from Assessment filter drop down "<Filters>"
  #    And User click on business type and click on "<FilterStatus>"
  #    And User click on search button and check Business Type "<check>"
  # And User click on year "<year>"
  # And User click on "<FilterStatus>"
  # And User see message no record found
  #    Examples:
  #      | TestcaseID             | Description                           | Period         | Filters                       | FilterStatus                  | check          | year      |
  #      | Manual_Assessment_07_3 | validate business type manufacturing  | txt_PeriodJan | txt_AssestFilterBusinessType  | txt_BusinessTypeManufacturing | Manufacturing  | AssYear18 |
  #      | Manual_Assessment_07_4 | validate business type mining         | txt_PeriodJan | txt_AssestFilterBusinessType2 | txt_BusinessTypeMining        | Mining         | AssYear18 |
  #      | Manual_Assessment_07_5 | validate business type service sector | txt_PeriodJan | txt_AssestFilterBusinessType2 | txt_BusinessTypeServiceSector | Service Sector | AssYear18 |
  #      | Manual_Assessment_07_6 | validate business type trading        | txt_PeriodJan | txt_AssestFilterBusinessType2 | txt_BusinessTypeTrading       | Trading        | AssYear18 |
  #  @TC_07_company_Size
  #  Scenario Outline: Validate whether User is able to filter by Company Size
  #Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #And User click on Assessment Tab
  #And User click on drop down "<Period>"
  #  And User click on year "<Year>" and check
  #And User selects value from Assessment filter drop down "<Filters>"
  #And User click on company size and click on "<FilterStatus>"
  #And User click on search button and check Company Size "<check>"
  #
  #And User click on year "<year>"
  #And User click on "<FilterStatus>"
  #And User see message no record found
  #    Examples:
  #      | TestcaseID              | Description                  | Period         | Filters                     | FilterStatus         | check        | Year      |
  #      | Manual_Assessment_07_7  | validate company size large  | txt_PeriodJan | txt_AssestFilterCompanySize  | txt_CompanySizeLarge  | Large Scale  | AssYear18 |
  #      | Manual_Assessment_07_8  | validate company size medium | txt_PeriodJan | txt_AssestFilterCompanySize1 | txt_CompanySizeMedium | Medium Scale | AssYear18 |
  #      | Manual_Assessment_07_9  | validate company size micro  | txt_PeriodJan | txt_AssestFilterCompanySize1 | txt_CompanySizeMicro  | Micro Scale  | AssYear18 |
  #      | Manual_Assessment_07_10 | validate company size small  | txt_PeriodJan | txt_AssestFilterCompanySize1 | txt_CompanySizeSmall  | Small Scale  | AssYear18 |
  @TC_07_Status
  Scenario Outline: Validate whether User is able to filter by Status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    And User selects value from Assessment filter drop down "<Filters>"
    And User click Status In Progress "<Status1>" and check "<InProgress>"
    And User click Status Pending "<Status2>" and check "<Pending>"

    # And User click on year "<year>"
    # And User click Status In Progress "<Status1>" and check for no record found
    # And User click Status Pending "<Status2>"  and check for no record found
    #And   User see message no record found
    Examples: 
      | TestcaseID              | Description     | Period        | Filters    | Status1        | Status2     | Pending | InProgress  | Year            |
      | Manual_Assessment_07_11 | validate status | txt_PeriodJan | drp_Status | txt_InProgress | txt_Pending | Pending | In Progress | txt_2019_Period |

  #  @TC_08
  #  Scenario Outline: Validate whether admin is able to filter data using different combination of filter by option and entering different option in type here text box.
  #    Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #    And User click on Assessment Tab
  #    And User click on drop down "<Period>"
  #    And User click on year "<year>"
  #    And User click on FilterBy "<Filter>"
  #    And User enter data "<data>"
  #    And User see message no record found
  #    Examples:
  #      | TestcaseID           | Description                    | Period        | year          | Filter               | data         |
  #      | Manual_Assessment_08 | validate different combination | txt_PeriodJan | txt_2019_Period | txt_AsestFilterNitva | Medium Scale |
  @TC_10
  Scenario Outline: Validate whether User is able to navigate to particular page and filter the data according
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    #    And User click on Assessed List
    #    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User click on year "<Year>" and check
    And User see NITVA number is selected
    And User click on Last "<Last>"
    #And User select "<month>"
    And User click on FilterBy "<Filter>"
    And User type NITVA number and check

    #    And User enter data for NITVA "<data>"
    #    And User check NITVA number "<nitvaNO>"
    Examples: 
      | TestcaseID           | Description                                  | Period        | Last          | Filter               | data              | nitvaNO           | Year            |
      | Manual_Assessment_10 | validate navigation and filter functionality | txt_PeriodJan | lbl_First1_No | txt_AsestFilterNitva | 20181211062210697 | 20181211062210697 | txt_2019_Period |

  # this scenario is of feature file 20
  @TC_05_06_19_18_16
  Scenario Outline: Validate that the Total Assessed(FC) tile amount when no any changes made in  assessment adjustment table for Operations Performed, Tax Deductible and Adjustment tab.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User see Total Assessed amount
    And User click on next button and navigate to Assessment Summary page
    And User check Total Assessed amount is not changed
    And User validate Total Additional Liability on Assessment Summary page
    And User see message "<mess>" when no changes done in adjustement
    And User click on e-filing schedule when tax payer did not uploaded file at the time of e-declaration and shows message "<FNF>"
    And User click on Transaction Received button

    Examples: 
      | TestcaseID            | Description                                                              | Period        | TaxPayer               | mess                                   | FNF            | Year            |
      | Mal_AS_05_06_19_18_16 | Validate Total Assessed amount is same and check Additionality Liability | txt_PeriodJan | Regression AprilTOne | No Modification made for e-declaration | File not found | txt_2019_Period |
