Feature: User is on Tax Deductible Page Manual Assessement

  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer   | Year            |
      | Tax_Dec_02_03 | validate nitva no,Period field | txt_PeriodJan | Arun111223 | txt_2019_Period |

  #TC_04 same amount on e-filing
  @TC_06_05
  Scenario Outline: Validate amount in Total Additional liability tile.
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User calculate Total Additional liability
    # And User see by default Total Assessed and Total e Declaration value are same
    And User click on edit button on Tax Deductible
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Manual Assessment Tax Deductible and calculate total Deductible
    And User click on next button and validate Total Assessed

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer   |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 | Year            |
      | Tax_Dec_06_05 | validate nitva no,Period field | txt_PeriodJan | Arun111223 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | txt_2019_Period |

  # 07 half cover total dec
  @TC_07_19_17
  Scenario Outline: Validate the Edit button functionality , Save button functionality ,next button functionality when assessment officer edit
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on year "<Year>" and check
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
      | TestcaseID       | Description                                                                                    | Period        | TaxPayer   | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | mes                | Year            |
      | Tax_Dec_07_19_17 | validate Edit button functionality and Total of Difference field and Save button functionality | txt_PeriodJan | Arun111223 |  5 |    5 |  0 |    0 |  0 |    0 |  0 |    0 | Saved Successfully | txt_2019_Period |

  #TC_08  same on e declaration page
  #TC_09  data come from edf
  @TC_10_11
  Scenario Outline: Validate the view icon in transaction received table and Total of Difference field.
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on view icon on transaction received and navigate to Manual Assessment Total Deduction page
    And User click on previous button on Manual Assessment Total Deduction page
    And User validate total difference field

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | TaxPayer   | Year            |
      | Tax_Dec_10_11 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | Arun111223 | txt_2019_Period |

  #TC_12
  # fot this new nitva with uploaded file   - > 20181022121408836 file uploaded while filiong
  @TC_14
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on Transaction Received button and validate
    And User click on e-Filing Scedule on Manual Assessment and validate

    Examples: 
      | TestcaseID | Description                                                        | Period        | TaxPayer   | Year            |
      | Tax_Dec_14 | validate download functionality when user upload file on tax payer | txt_PeriodJan | Arun111223 | txt_2019_Period |

  @TC_13_15
  Scenario Outline: Validate the download functionality of Transaction Received button and e-filing schedule button when e-file schedule file is not uploaded
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on Transaction Received button and validate
    And User click on e-Filing Scedule when file is not upload by tax payer and user see "<mes>"

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | TaxPayer   | mes            | Year            |
      | Tax_Dec_13_15 | validate view icon in transaction received table and Total of Difference field | txt_PeriodMar | Arun111223 | File not found | txt_2019_Period |

  @TC_16_18_20
  Scenario Outline: Validate the next button functionality when assessment officer does not edit the fields on the page
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on prev button and navigate to Operations Performed page
    And User click on next button and navigate to Tax Deductible
    And User click on next button and navigate to Adjustment page
    And User click on Previous button and navigate to Manual assessment Tax payer list page

    Examples: 
      | TestcaseID       | Description                                                                    | Period        | TaxPayer   | Year            |
      | Tax_Dec_16_18_20 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | Arun111223 | txt_2019_Period |

  @TC_Negative_Scenario_Manual_2880
  Scenario Outline: Validate Negative Scenario for all fields
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on edit button
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Manual Assessment Tax Deductible negative

    Examples: 
      | TestcaseID | Description                 | Period        | TaxPayer   |   10 | 10.1 |   11 | 11.1 |   12 | 12.1 |   13 | 13.1 | Year            |
      | Tax_Dec_1  | Validate special chatracter | txt_PeriodJan | Arun111223 | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | txt_2019_Period |
      | Tax_Dec_2  | Validate alpha numeric      | txt_PeriodJan | Arun111223 | A12  | B123 | C465 | D234 | E234 | F123 | G123 | H123 | txt_2019_Period |

  @TC_Negative_Scenario_field_length_Manual_2880
  Scenario Outline: Validate Negative Scenario for all fields length
    Given User is on Tax Deductible "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User navigate to Tax Deductible
    And User click on edit button
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" on Manual Assessment Tax Deductible field length

    Examples: 
      | TestcaseID               | Description               | Period        | Year            | TaxPayer   |               10 |             10.1 |               11 |             11.1 |               12 |             12.1 |               13 |             13.1 |
      | Mal_OP_NS_Field_Length_1 | Validate length of number | txt_PeriodJan | txt_2019_Period | Arun111223 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 |
