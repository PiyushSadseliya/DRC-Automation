Feature: User is on Assessed List Landing Screen



  @TC_02
  Scenario Outline: Validate Tax Officer is able to View Notice internal portal
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click on view notice and navigate to new tab
    And User see notice

    # check locator to found
    Examples: 
      | TestcaseID       | Description          | Period        | Data          | Filter          |
      | Assessed List_02 | Validate View Notice | txt_PeriodJan | CT18101500007 | drp_ReferanceId |

  @TC_03
  Scenario Outline: Validate reassess option from manage dropdown.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down for Assessement list
    And User click on Reassess option
    And User navigate to re assement screen

    Examples: 
      | TestcaseID       | Description               | Period        | Data              | Filter    |
      | Assessed List_03 | Validate Reassess Options | txt_PeriodJan | 20181015014013724 | drp_NITVA |

  @TC_04
  Scenario Outline: Validate ReferenceID generated is not duplicate
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on assessed list
    And User see referance id
    # And User click on drop down "<Period>" on assessed list
    And User click on filter and select referance id
    And User type referance id in filter and click on search button
    And User see referance id which is entered

    Examples: 
      | TestcaseID       | Description          | Period        |
      | Assessed List_04 | Validate ReferenceID | txt_PeriodJan |

  #TC_05
  @TC_06
  Scenario Outline: Validate NITVA number displayed with the particular tax payer.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User see nitva number
    And User click on filter and select NITVA no
    And User type nitva no in filter and click on search button
    And User see nitva no which is entered

    Examples: 
      | TestcaseID       | Description       | Period        |
      | Assessed List_06 | Validate NITVA no | txt_PeriodJan |

  @TC_07
  Scenario Outline: Validate In Progress status.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" dropdown and click on Status on re assessed list
    And User click on Status and click on "<FilterStatus>" on assessed list
    And User click on search button on re assessment page
    And User click on manage setting
    And User click on manage status "<manageStatus>" on re assessment page
    And User is navigate to Operations Performed page
    And User click on Previous button on Operations Performed page
    And User click on drop down "<Period>" on re assessment page
    And User click on FilterBy "<NITVA>"
    And User type nitva no on assessement and click on search button
    And User see status is changed to "<InProgress>"

    Examples: 
      | TestcaseID       | Description                                 | Period        | Filter     | FilterStatus | check   | manageStatus   | InProgress  | NITVA                |
      | Assessed List_07 | Validating status is changed to in progress | txt_PeriodMar | drp_Status | txt_Assessed | Pending | drp_ReAssess   | In Progress | txt_AsestFilterNitva |

  @TC_08
  Scenario Outline: Validate Assessed status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    # And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" on re assessed list
    And User click on status in progress
    #And User type "<Data>"
    
    And User click on type here search
    And User see nitva number
    And User click on manage setting drop down for Assessement list
    And User click on assess and user is navigate to Operations Performed page
    And User click on next button and navigate to Payment summary
    And User click on raise notice
    And User see notice is raised and see referance id
    And User navigate to assessement landing screen again
    And User click on Assessed List
    
    And User click on drop down "<Period>" on re assessed list
    And User click on filter and select NITVA no
    And User type nitva no in filter and click on search button
    
    #And User click on FilterBy and click on referance on re assessed list
    #And Uer type refrance id and click on search button
    And User see the status is changed to "<statusChanged>"

    Examples: 
      | TestcaseID       | Description              | Period        | Filter     | statusChanged |
      | Assessed List_08 | Validate Assessed status | txt_PeriodMar | drp_Status | Assessed   |

  @TC_09
  Scenario Outline: Validate re-assessed status
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    # referance id
    And User click on period "<filter>" and click on filter by "<filterStatus>" status and select assessed status
    And User see referance id and nitva
    And User click on manage setting drop down for Assessement list
    And User click reassess and user navigate to Operations Performed page
    And User click on next button and navigate to Payment summary
    And User click on raise notice
    And User see notice is raised and see referance id
    And User navigate to assessement landing screen again
    And User click on Assessed List
    
    And User click on drop down "<filter>" on re assessed list
  #  And User click on FilterBy "<filter>" on re assessed list    
     And User click on filter and select nitva  
    And User type nitva in filter and click on search button
   # And User see referance id which is entered
    And User see status is changed to re assessed 
    #And User again click on filter and enter referance id and see status assessed list changed to re assessed

    Examples: 
      | TestcaseID       | Description              | filter        | filterStatus |
      | Assessed List_09 | Validate Assessed status | txt_PeriodMar | drp_Status   |
      
      
    
       @TC_10
  Scenario Outline: Validate Period Functionality.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User see the current month "<month>" and year "<year>" is shown
    And User click on year and see no future year is display

    Examples: 
      | TestcaseID       | Description              | month         | year          |
      | Assessed List_10 | Validate Assessed status | txt_PeriodJan | txt_AssYear18 |

  @TC_11_ReferenceID
  Scenario Outline: Validate whether user  is able to filter by ReferenceID
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for ReferenceID "<id>"
    And User now type invalid referance "<new>"
    And User click on type here and see no record found
    And User type "<Specialchar>" and see no record found

    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for ReferenceID
    Examples: 
      | TestcaseID       | Description          | Period        | Filter          | Data          | id            | new      | Specialchar |
      | Assessed List_11 | Validate ReferenceID | txt_PeriodJan | drp_ReferanceId | CT18101500007 | CT18101500007 | 01212313 | @!@##$%^%$  |

  @TC_11_1_Assessed_Date
  Scenario Outline: Validate whether user  is able to filter by Assessed Date
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for Assessed Date "<check>"
    And User now type invalid Assessed Date "<new>"
    And User click on type here and see no record found
    And User type "<Specialchar>" and see no record found

    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for Assessed Date
    Examples: 
      | TestcaseID         | Description            | Period        | Filter           | Data       | check      | new | Specialchar |
      | Assessed List_11_1 | Validate Assessed Date | txt_PeriodJan | drp_AssessedDate | 10/15/2018 | 10/15/2018 |  011 | @!@##$%^%$  |

  @TC_11_2_NITVA
  Scenario Outline: Validate whether user is able to filter by NITVA
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for NITVA "<check>"
    And User now type invalid NITVA "<new>" and click on search and see no record found
    #And User click on type here and see no record found
    And User now type invalid NITVA "<SpecialChar>" and see no record found

    # And User refresh the page
    # And User go to extreme page
    # And User type "<FirstData>" and check record that was on first page for NITVA
    Examples: 
      | TestcaseID         | Description    | Period        | Filter    | Data              | check             | new              | SpecialChar |
      | Assessed List_11_2 | Validate NITVA | txt_PeriodJan | drp_NITVA | 20181015014013724 | 20181015014013724 | 0116666666666666 | !@#!@#$#$%4 |

  @TC_11_3_Tax_Payer
  Scenario Outline: Validate whether user is able to filter by Tax Payer
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User type "<Data>"
    And User click on type here and check for Tax Payer "<Data>"
    And User now type invalid Tax Payer "<new>"
    And User click on type here and see no record found
    And User now type invalid name "<SpecialChar>" and see no record found

    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for Tax Payer
    Examples: 
      | TestcaseID         | Description         | Period        | Filter       | Data                   | new | SpecialChar |
      | Assessed List_11_3 | Validate  Tax Payer | txt_PeriodJan | txt_TaxPayer | Automation Franky one  | xyz | !@#@#$@#    |

  @TC_11_4_Status
  Scenario Outline: Validate whether user is able to filter by Tax Payer
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" on re assessed list
    And User click on FilterBy "<Filter>" for assessed list
    And User click on status and select "<SelectStatus>" and click on search
    And USer check search record "<record>"

    #   And User type "<Data>"
    #   And User click on type here and check for Tax Payer "<Data>"
    #   And User now type invalid Tax Payer "<new>"
    #   And User click on type here and see no record found
    #   And User now type invalid name "<SpecialChar>" and see no record found
    #And User refresh the page
    #And User go to extreme page
    #And User type "<FirstData>" and check record that was on first page for Tax Payer
    Examples: 
      | TestcaseID           | Description                 | Period        | Filter     | SelectStatus   | record      |
      | Assessed List_11_3_1 | Validate search in progress | txt_PeriodMar | drp_Status | txt_InProgress | In Progress |
      | Assessed List_11_3_2 | Validate search Assessed    | txt_PeriodMar | drp_Status | txt_Assessed   | Assessed    |
      | Assessed List_11_3_3 | Validate search Objection   | txt_PeriodMar | drp_Status | txt_Objection  | Objection   |
      | Assessed List_11_3_4 | Validate search Re-Assed    | txt_PeriodMar | drp_Status | txt_ReAssessed | Re-Assessed |
 #   Examples: 
 #     | TestcaseID         | Description                | Period        | ClickPage       | CheckPage       |
 #     | Assessed List_12_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight |
 #     | Assessed List_12_2 | validating left and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  |
 #     | Assessed List_12_3 | validating right and last  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  |
 #     | Assessed List_12_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    |
 #     | Assessed List_12_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  |
 #     | Assessed List_12_6 | validating first and first | txt_PeriodJan | AssFirst        | AssFirst        |   
      