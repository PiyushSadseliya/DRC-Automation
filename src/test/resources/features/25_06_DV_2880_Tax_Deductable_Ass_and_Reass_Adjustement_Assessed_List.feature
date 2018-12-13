Feature: User is on Tax Deductible Page Assessed List

  @TC_01
  Scenario: Validate the Manual Assessment dashboard page All clicking compoment
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on windows icon
    And User enter username and password and click on login and see dashboard

  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    # period field store
    And User see that period field month and year is selected
    And User click on manage and click on Reassess
    And User navigate to Tax Deductible
    And Validate NITVA no "<validate>"
    # in this match period field
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | nitva             | validate          |
      | Ass_Tax_Dec_02_03 | validate nitva no,Period field | txt_PeriodJan | 20181015014013724 | 20181015014013724 |

  #04 same value from e filing
  @TC_05_06_07
  Scenario Outline: Validate amount in  Total Assessed tile,Total Ressessed tile,Total Additional liability tile
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Tax Deductible
    And User Check the amount displayed in Total Assessed tile and Total Reassessed tile on assessement list
    #And User Check the amount displayed in Total Reassessed tile
    And User Check the amount displayed in Total Additional liability tile
    And User click on edit button on Tax Deductible
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Assessed List Tax Deductible and calculate Total Reassessed amount
    And User click on next button and validate Total Reassessed

    Examples: 
      | TestcaseID       | Description                                                                       | Period        | nitva             | validate          | periodField    |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |
      | Ass_Tax_Dec_05_06_07 | validate Total Assessed tile,Total Ressessed tile,Total Additional liability tile | txt_PeriodJan | 20181015014013724 | 20181016025450411 | February, 2018 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 |

  #09 same from e filing
  #10 scenario will not come need to update
  @TC_08_18_20
  Scenario Outline: Validate the Edit button functionality,next button when officer edit the fields on the page, Save button functionality
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Tax Deductible
    And User click on edit button on Tax Deductible
    And User see Reassessment Adjustmen and see all field are editable
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Assessed List on Tax Deductible and calculate total
    And User click on Save button and verify toast message "<mes>"
    And User click on next button and navigate to Adjustment tab
    And User click on previous button and click on edit button
    And User validate previously enter value on Reassessment Adjustment field

    Examples: 
      | TestcaseID       | Description                                                                                                        | Period        | nitva             | validate          | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | mes                |
      | Ass_Tax_Dec_08_18_20 | validate Edit button functionality,next button when officer edit the fields on the page, Save button functionality | txt_PeriodJan | 20181015014013724 | 20181015014013724 |  5 |    5 |  0 |    0 |  0 |    0 |  0 |    0 | Saved Successfully |

  @TC_11_12
  Scenario Outline: Validate the view icon in transaction received table and Total of Difference field.
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Tax Deductible
    And User click on view icon on transaction received and navigate to Assessed List Total Deduction page
    And User click on previous button on Assessed List
    And User Validate the amount in Total of Difference field

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | nitva             |
      | Ass_Tax_Dec_11_12 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | 20181015014013724 |

  #13 same from efiling carried carry forward
  @TC_15
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Tax Deductible
    And User click on e-Filing Scedule on Assessed List and validate

    Examples: 
      | TestcaseID | Description                                                  | Period        | nitva |                |
      | Ass_Tax_Dec_15 | validate  download functionality of e-filing schedule button | txt_PeriodJan |       | File not found |

  @TC_14_16_17_19_21
  Scenario Outline: Validate the download functionality of Transaction Received button,download functionality of e-file schedule file is not uploaded,next and Prev button functionality and  Previous button functionality
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Tax Deductible
    And User click on Transaction Received button on Assessed List and validate
    And User click on e-Filing Scedule when file is not upload by tax payer and user see "<mes>" on Assessed List
    And User click on next button and navigate to Adjustment page
    And User click on prev button and navigate to Operations Performed page
    And User click on Previous button and navigate to Assessed List Page

    Examples: 
      | TestcaseID              | Description                                                                    | Period        | nitva             | mes            |
      | Ass_Tax_Dec_14_16_17_19_21 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | 20181015014013724 | File not found |
