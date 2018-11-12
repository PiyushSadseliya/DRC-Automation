Feature: User is on Tax Deductible Page Manual Assessement

  @TC_01
  Scenario: Validate the Manual Assessment dashboard page All clicking compoment
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on windoews icon
    And User enter username and password and click on login and see dashboard

  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    # period field store
    And User see that period field month and year is selected
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And Validate NITVA no "<validate>"
    # in this match period field
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | nitva             | validate          |
      | Tax_Dec_02_03 | validate nitva no,Period field | txt_PeriodJan | 20181022121408836 | 20181022121408836 |

  #TC_04 same amount on e-filing
  # 07 half cover total dec
  @TC_06_05
  Scenario Outline: Validate amount in Total Additional liability tile.
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User calculate Total Additional liability
   # And User see by default Total Assessed and Total e Declaration value are same
    And User click on edit button on Tax Deductible
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Manual Assessment Tax Deductible and calculate total Deductible
    And User click on next button and validate Total Assessed

    Examples: 
      | TestcaseID    | Description                    | Period        | nitva             | validate          | 10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |
      | Tax_Dec_06_05 | validate nitva no,Period field | txt_PeriodJan | 20181022121408836 | 20181022121408836 |500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 |

  @TC_07_19_17
  Scenario Outline: Validate the Edit button functionality , Save button functionality ,next button functionality when assessment officer edit
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on edit button on Tax Deductible
    And User see Assessment Adjustmen and see all field are editable
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Manual Assessment Tax Deductible
    # And User calculates and verify the amount for Total deductible field
    And User click on Save button and verify toast message "<mes>"
    And User click on next button
    And User click on previous button and click on edit button
    And User validate previously enter value

    Examples: 
      | TestcaseID       | Description                                                                                    | Period        | nitva             | validate          | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | mes                |
      | Tax_Dec_07_19_17 | validate Edit button functionality and Total of Difference field and Save button functionality | txt_PeriodJan | 20181022121408836 | 20181022121408836 |  5 |    5 |  0 |    0 |  0 |    0 |  0 |    0 | Saved Successfully |

  #TC_08  same on e declaration page
  #TC_09  data come from edf
  @TC_10_11
  Scenario Outline: Validate the view icon in transaction received table and Total of Difference field.
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on view icon on transaction received and navigate to Manual Assessment Total Deduction page
    And User click on previous button on Manual Assessment Total Deduction page
    And User validate total difference field

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | nitva             |
      | Tax_Dec_10_11 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | 20181022121408836 |

  #TC_12
  # fot this new nitva with uploaded file   - > 20181022121408836 file uploaded while filiong
  @TC_14
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on Transaction Received button and validate
    And User click on e-Filing Scedule on Manual Assessment and validate

    Examples: 
      | TestcaseID | Description                                                        | Period        | nitva             |
      | Tax_Dec_14 | validate download functionality when user upload file on tax payer | txt_PeriodJan | 20181022121408836 |

  @TC_13_15
  Scenario Outline: Validate the download functionality of Transaction Received button and e-filing schedule button when e-file schedule file is not uploaded
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on Transaction Received button and validate
    And User click on e-Filing Scedule when file is not upload by tax payer and user see "<mes>"

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | nitva             | mes            |
      | Tax_Dec_13_15 | validate view icon in transaction received table and Total of Difference field | txt_PeriodFeb | 20181015014013724 | File not found |

  @TC_16_18_20
  Scenario Outline: Validate the next button functionality when assessment officer does not edit the fields on the page
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on prev button and navigate to Operations Performed page
    And User click on next button and navigate to Tax Deductible
    And User click on next button and navigate to Adjustment page
    And User click on Previous button and navigate to Manual assessment Tax payer list page

    Examples: 
      | TestcaseID       | Description                                                                    | Period        | nitva             | mes            |
      | Tax_Dec_16_18_20 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | 20181022121408836 | File not found |
