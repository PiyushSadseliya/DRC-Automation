Feature: User is on Assessed List Landing Screen

  @TC_08_AssessedList_2882
  Scenario Outline: Validate Assessed status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on pin
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see the status is changed to "<statusChanged>"

    Examples: 
      | TestcaseID       | Description              | Period        | statusChanged | Year            | TaxPayer       |
      | Assessed List_08 | Validate Assessed status | txt_PeriodJan | Assessed      | txt_2019_Period | AutoTest Reass |

  #  	@TC_02_AssessedList_2882
  #    Scenario Outline: Validate Tax Officer is able to View Notice internal portal
  #      Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #      And User click on Assessment Tab
  #      And User click on Assessed List
  #      And User click on drop down "<Period>" on assessed list
  #		  And User click on year "<Year>" and check
  #		  And User click on FilterBy and click on TaxPayer
  #      And User type "<TaxPayer>" and click on search button
  #    	And User click on manage setting drop down for Assessement list
  #      And User click on view notice and navigate to new tab
  #      And User see notice
  #      Examples:
  #        | TestcaseID       | Description          | Period        | Filter          |TaxPayer          |Year            |
  #        | Assessed List_02 | Validate View Notice | txt_PeriodJan | drp_ReferanceId |AutoTest Reass    |txt_2019_Period |
  @TC_03_AssessedList_2882
  Scenario Outline: Validate reassess option from manage dropdown  
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
 #  And User click on pin
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage setting drop down for Assessement list
    And User click on Reassess option
    And User navigate to re assement screen

    Examples: 
      | TestcaseID       | Description               | Period        | TaxPayer       | Year            |
      | Assessed List_03 | Validate Reassess Options | txt_PeriodJan | AutoTest Reass | txt_2019_Period |

  @TC_04_AssessedList_2882
  Scenario Outline: Validate ReferenceID generated is not duplicate
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on assessed list
    And User click on year "<Year>" and check
    And User see referance id
    And User click on filter and select referance id
    And User type referance id in filter and click on search button
    And User see referance id which is entered

    Examples: 
      | TestcaseID       | Description          | Period        | Year            |
      | Assessed List_04 | Validate ReferenceID | txt_PeriodJan | txt_2019_Period |

  #TC_05
  @TC_06_AssessedList_2882
  Scenario Outline: Validate NITVA number displayed with the particular tax payer.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User see nitva number
    And User click on filter and select NITVA no
    And User type nitva no in filter and click on search button
    And User see nitva no which is entered

    Examples: 
      | TestcaseID       | Description       | Period        | Year            |
      | Assessed List_06 | Validate NITVA no | txt_PeriodJan | txt_2019_Period |

  @TC_07_AssessedList_2882
  Scenario Outline: Validate In Progress status.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" dropdown and click on Status on re assessed list
    And User click on Status and click on "<FilterStatus>" on assessed list
    And User click on search button on re assessment page
    And User see status on assessed list
    And User click on manage and click on Reassess
    And User is navigate to Operations Performed page
    And User click on Previous button on Operations Performed page
    And User click on drop down "<Period>" on re assessment page
    And User click on year "<Year>" and check
    And User Select filter and verify status
    And User see status is changed to "<InProgress>"

    Examples: 
      | TestcaseID       | Description                                 | Period        | Filter     | FilterStatus | manageStatus | InProgress  | Year            |
      | Assessed List_07 | Validating status is changed to in progress | txt_PeriodJan | drp_Status | txt_Assessed | drp_ReAssess | In Progress | txt_2018_Period |

  #  @TC_09_AssessedList_2882
  #  Scenario Outline: Validate re-assessed status
  @TC_10_AssessedList_2882
  Scenario Outline: Validate Period Functionality
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User see the current month "<month>" and year "<year>" is shown

    #   And User click on year and see no future year is display
    Examples: 
      | TestcaseID       | Description              | month         | year            |
      | Assessed List_10 | Validate Assessed status | txt_PeriodJan | txt_2019_Period |

  @TC_11_ReferenceID_AssessedList_2882
  Scenario Outline: Validate whether user is able to filter by ReferenceID invalid
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" for assessed list
    And User now type invalid referance "<new>"
    And User click on type here and see no record found
    And User type "<Specialchar>" and see no record found

    Examples: 
      | TestcaseID       | Description          | Period        | Filter          | new      | Specialchar | Year            |
      | Assessed List_11 | Validate ReferenceID | txt_PeriodJan | drp_ReferanceId | 01212313 | @!@##$%^%$  | txt_2019_Period |

  @TC_11_1_Assessed_Date_AssessedList_2882
  Scenario Outline: Validate whether user  is able to filter by Assessed Date invalid
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" for assessed list
    And User now type invalid Assessed Date "<new>"
    And User click on type here and see no record found
    And User type "<Specialchar>" and see no record found

    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for Assessed Date
    Examples: 
      | TestcaseID         | Description            | Period        | Filter           | new | Specialchar | Year            |
      | Assessed List_11_1 | Validate Assessed Date | txt_PeriodJan | drp_AssessedDate | 011 | @!@##$%^%$  | txt_2019_Period |

  @TC_11_2_NITVA_AssessedList_2882
  Scenario Outline: Validate whether user is able to filter by NITVA invalid
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" for assessed list
    And User now type invalid NITVA "<new>" and click on search and see no record found
    And User now type invalid NITVA "<SpecialChar>" and see no record found

    # And User refresh the page
    # And User go to extreme page
    # And User type "<FirstData>" and check record that was on first page for NITVA
    Examples: 
      | TestcaseID         | Description    | Period        | Filter    | new              | SpecialChar | Year            |
      | Assessed List_11_2 | Validate NITVA | txt_PeriodJan | drp_NITVA | 0116666666666666 | !@#!@#$#$%4 | txt_2019_Period |

  @TC_11_3_Tax_Payer_AssessedList_2882
  Scenario Outline: Validate whether user is able to filter by Tax Payer invalid
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" for assessed list
    And User now type invalid Tax Payer "<new>"
    And User click on type here and see no record found
    And User now type invalid name "<SpecialChar>" and see no record found

    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for Tax Payer
    Examples: 
      | TestcaseID         | Description         | Period        | Filter       | new | SpecialChar | Year            |
      | Assessed List_11_3 | Validate  Tax Payer | txt_PeriodJan | txt_TaxPayer | xyz | !@#@#$@#    | txt_2019_Period |

  @TC_11_4_Status_AssessedList_2882
  Scenario Outline: Validate whether user is able to filter by Tax Payer
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on year "<Year>" and check
    And User click on FilterBy "<Filter>" for assessed list
    And User click on status and select "<SelectStatus>" and click on search
    And USer check search record "<record>"

    #And User type "<Data>"
    #And User click on type here and check for Tax Payer "<Data>"
    #And User now type invalid Tax Payer "<new>"
    #And User click on type here and see no record found
    #And User now type invalid name "<SpecialChar>" and see no record found
    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for Tax Payer
    Examples: 
      | TestcaseID           | Description                 | Period        | Filter     | SelectStatus   | record      | Year            |
      | Assessed List_11_3_1 | Validate search in progress | txt_PeriodMar | drp_Status | txt_InProgress | In Progress | txt_2018_Period |
      | Assessed List_11_3_2 | Validate search Assessed    | txt_PeriodMar | drp_Status | txt_Assessed   | Assessed    | txt_2018_Period |
      | Assessed List_11_3_3 | Validate search Objection   | txt_PeriodMar | drp_Status | txt_Objection  | Objection   | txt_2018_Period |
      | Assessed List_11_3_4 | Validate search Re-Assed    | txt_PeriodMar | drp_Status | txt_ReAssessed | Re-Assessed | txt_2018_Period |

  # this scenario is of feature file 27
  @TC_05_06_19_18_16_AssessedList_2878
  Scenario Outline: Validate that the Total Reassessed(FC) tile amount when no any changes made in  re-assessment adjustment table for Operations Performed, Tax Deductible and Adjustment tab.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User see Total Reassessed amount
    And User click on next button and navigate to Assessment Summary page
    And User check Total Reassessed amount is not changed
    And User validate Total Additional Liability on Assessment Summary page on Assessed List
    And User see message "<mess>" when no changes done in adjustement
    And User click on e-filing schedule when tax payer did not uploaded file at the time of e-declaration and shows message "<FNF>"
    And User click on Transaction Received button

    Examples: 
      | TestcaseID            | Description                                                                | Period        | Year            | TaxPayer       | mess                                | FNF            |
      | Ass_AS_05_06_19_18_16 | Validate Total Reassessed amount is same and check Additionality Liability | txt_PeriodJan | txt_2019_Period | AutoTest Reass | No Modification made for Assessment | File not found |
