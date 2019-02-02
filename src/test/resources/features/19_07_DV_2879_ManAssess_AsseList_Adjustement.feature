Feature: User is on Manual Assement on Adjustment Page

  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer          | Year            |
      | Man_Adj_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_07_06_08_09
  Scenario Outline: validate Total additional liability tile on adjustment,Total Assessed tile,Edit button functionality,save button
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And User validate Total additional liability on Adjustement page
    And User check total assessed value and click on next button and validate same amount
    And User click on prev button
    And User click on edit button on Tax Adjustement
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment page
    And User click on Save button and validate message "<mes>"
    And User again entered value "<17.1>" "<18.1>" "<19.1>" "<20.1>" for Adjustment page
    And User click on next button and navigate to Assessment Summary
    And User again click on prev button and click on edit button and validate amount is saved

    Examples: 
      | TestcaseID          | Description                                                                    | Period        | TaxPayer          | 17 | 18 | 19 | 20 | mes                | 17.1 | 18.1 | 19.1 | 20.1 | Year            |
      | Man_Adj_07_06_08_09 | validate view icon in transaction received table and Total of Difference field | txt_PeriodFeb | Automation User 10 |  0 |  0 |  5 |  5 | Saved Successfully |   10 |   10 |   10 |   10 | txt_2019_Period |

  @TC_12_13
  Scenario Outline: Validate the view icon in transaction received table and Total of Difference field under Amount column
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And User click on view icon on Supplementary deductions and navigate to Manual Assessment Supplementary deductions page
    And User click on previous button and navigate to Manual Assessment Adjustment page
    And User click on view icon on  VAT deducted by mining companies at source and navigate to Manual Assessment Supplementary Mining page
    And User click on previous button and navigate to Manual Assessment Adjustment page
    And User validate amount Difference on Adjustement page

    Examples: 
      | TestcaseID    | Description                                                                    | Period        | TaxPayer          | Year            |
      | Man_Adj_12_13 | validate view icon in transaction received table and Total of Difference field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_15_16_17_18_20
  Scenario Outline: Validate the prev button, next,previous, download functionality of Transaction Received button and e-filing schedule button functionality when file is not uploaded by tax payer
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And User click on prev button and navigate to Tax Deductible
    And User click on next button and navigate to Adjustment page
    And User click on Transaction Received button and validate
    And User click on e-Filing Scedule when file is not upload by tax payer and user see "<mes>"
    And User click on Previous button and navigate to Manual assessment Tax payer list page

    Examples: 
      | TestcaseID             | Description                                                                    | Period        | Period1       | TaxPayer          | mes            | Year            |
      | Man_Adj_15_16_17_18_20 | validate view icon in transaction received table and Total of Difference field | txt_PeriodJan | txt_PeriodFeb | Automation User 10 | File not found | txt_2019_Period |

  @TC_19
  Scenario Outline: Validate the e-filing schedule button functionality when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And User click on e-Filing Scedule on Manual Assessment and validate

    Examples: 
      | TestcaseID | Description                                                        | Period        | TaxPayer          | Year            |
      | Man_Adj_19 | validate download functionality when user upload file on tax payer | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_Negative_Scenario_field_length_Manual_2879
  Scenario Outline: Validate Negative Scenario for all fields length
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And User click on edit button
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment page negative field length

    Examples: 
      | TestcaseID | Description               | Period        | TaxPayer          |               17 |               18 |               19 |               20 | Year            |
      | Man_Adj_1  | Validate length of number | txt_PeriodFeb | Automation User 10 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | txt_2019_Period |

  @TC_Negative_Scenario_Manual_2879
  Scenario Outline: Validate Negative Scenario for all fields
    Given User is on Adjustment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Next button
    And User click on Next button
    And User navigate to Adjustment page
    And User click on edit button
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment page negative field

    Examples: 
      | TestcaseID | Description                 | Period        | TaxPayer          |   17 |   18 |   19 |   20 | Year            |
      | Man_Adj_1  | Validate special chatracter | txt_PeriodFeb | Automation User 10 | @!@$ | @!@$ | @!@$ | @!@$ | txt_2019_Period |
      | Man_Adj_2  | Validate alpha numeric      | txt_PeriodFeb | Automation User 10 | A12  | B123 | C465 | D234 | txt_2019_Period |
