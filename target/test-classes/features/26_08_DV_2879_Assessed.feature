Feature: User is on Assessed List on Adjustment Page

  @TC_02_03_AssessedList_2879
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer       | Year            |
      | Ass_Adj_02_03 | validate nitva no,Period field | txt_PeriodJan | AutoTest Reass | txt_2019_Period |

  @TC_06_07_08_09_10_AssessedList_2879
  Scenario Outline: validate Total additional liability tile on adjustment,Total Assessed tile,Edit button functionality
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And User validate Total additional liability on Adjustement page Assessed List
    And User Check the amount displayed in Total Assessed tile and Total Reassessed tile
    And User click on edit button on Tax Adjustement
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment page
    And User click on Save button and validate message "<mes>"
    And User again entered value "<17.1>" "<18.1>" "<19.1>" "<20.1>" for Adjustment page
    And User click on next button and navigate to Assessment Summary
    And User again click on prev button and click on edit button and validate amount is saved
    And User keep field blank and validate mess "<fieldMes>"
    And User see next button is disable

    Examples: 
      | TestcaseID             | Description                                                                    | Period        | Year            | TaxPayer       | 17 | 18 | 19 | 20 | mes                | 17.1 | 18.1 | 19.1 | 20.1 | fieldMes               |
      | Ass_Adj_06_07_08_09_10 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | txt_2019_Period | AutoTest Reass |  0 |  0 |  5 |  5 | Saved Successfully |   10 |   10 |   10 |   10 | This field is required |

  @TC_13_14_AssessedList_2879
  Scenario Outline: Validate the view icon in transaction received table and Total of Difference field under Amount column
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And User click on view icon on Supplementary deductions and navigate to  Assessed List Supplementary deductions page
    And User click on previous button and navigate to Assessed List Adjustment page
    And User click on view icon on VAT deducted by mining companies at source and navigate to Assessed List Supplementary Mining page
    And User click on previous button and navigate to Assessed List Adjustment page
    And User validate amount Difference on Adjustement page

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | TaxPayer       | Year            |
      | Ass_Adj_13_14 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | AutoTest Reass | txt_2019_Period |

  @TC_16_17_18_19_21_AssessedList_2879
  Scenario Outline: Validate the prev button, next,previous, download functionality of Transaction Received button and e-filing schedule button functionality when file is not uploaded by tax payer
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And User click on prev button and navigate to Tax Deductible
    And User click on next button and navigate to Adjustment page
    And User click on Transaction Received button and validate
    And User click on e-Filing Scedule when file is not upload by tax payer and user see "<mes>"
    And User click on Previous button and navigate to Assessed List Page

    Examples: 
      | TestcaseID             | Description                                                                    | Period        | TaxPayer       | mes            | Year            |
      | Ass_Adj_16_17_18_19_21 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | AutoTest Reass | File not found | txt_2019_Period |

  @TC_20_AssessedList_2879
  Scenario Outline: Validate the e-filing schedule button functionality when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And User click on e-Filing Scedule on Assessed List and validate

    Examples: 
      | TestcaseID | Description                                                        | Period        | TaxPayer       | Year            |
      | Ass_Adj_20 | validate download functionality when user upload file on tax payer | txt_PeriodJan | AutoTest Reass | txt_2019_Period |

  @TC_Negative_Scenario_field_length_AssessedList_2879
  Scenario Outline: Validate Negative Scenario for all fields
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And User click on edit button
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment page negative field

    Examples: 
      | TestcaseID | Description               | Period        | TaxPayer       |               17 |               18 |               19 |               20 | Year            |
      | Ass_Adj_1  | Validate length of number | txt_PeriodJan | AutoTest Reass | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | txt_2019_Period |

  @TC_Negative_Scenario_AssessedList_2879
  Scenario Outline: Validate Negative Scenario for all fields
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User navigate to Adjustment page
    And User click on edit button
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment page negative field

    Examples: 
      | TestcaseID | Description                 | Period        | TaxPayer       |   17 |   18 |   19 |   20 | Year            |
      | Ass_Adj_1  | Validate special chatracter | txt_PeriodJan | AutoTest Reass | @!@$ | @!@$ | @!@$ | @!@$ | txt_2019_Period |
      | Ass_Adj_2  | Validate alpha numeric      | txt_PeriodJan | AutoTest Reass | A12  | B465 | C465 | D234 | txt_2019_Period |
