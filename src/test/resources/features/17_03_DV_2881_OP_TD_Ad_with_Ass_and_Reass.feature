Feature: User is on Operation Performed Page Manual Assessement

  @TC_02_03_Manual_2881
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
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | TaxPayer               | Year            |
      | Mal_OP_02_03 | validate nitva no,Period field | txt_PeriodFeb | Regression AprilTOne | txt_2019_Period |

  @TC_06_Manual_2881
  Scenario Outline: Validate Total Additional liability.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User calculate Total Additional liability

    Examples: 
      | TestcaseID | Description                         | Period        | TaxPayer               | Year            |
      | Mal_OP_06  | Validate Total Additional liability | txt_PeriodFeb | Regression AprilTOne | txt_2019_Period |

  @TC_08_20_Manual_2881
  Scenario Outline: Validate the Edit button functionality and Save button functionality
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed and calculate
    And User click on Save button and validate save message "<SaveMess>"
    And User again make changes "<01>" "<02>" "<02.1>" "<03>" "<04>" "<05>" "<06>" "<07>" "<08>" for Operation Performed
    And User click on next button and navigate to Tax deductible tab
    And User click on prev button
    And User click on edit button
    And User see previously entered value
    And User clear all fields
    And User clear field and see next button is disable
    And User see save button is disable

    Examples: 
      | TestcaseID   | Description                                 | Period        | TaxPayer               |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 | SaveMess           |   01 |   02 | 02.1 |   03 |   04 |   05 |   06 |   07 |   08 | Year            |
      | Mal_OP_08_20 | Validate edit and save button functionality | txt_PeriodFeb | Regression AprilTOne | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | Saved Successfully | 1000 | 1000 | 1000 | 1000 | 1000 | 1000 | 1000 | 1000 | 1000 | txt_2019_Period |

  @TC_10_11_Manual_2881
  Scenario Outline: Validate the view icon in transaction received table and difference amount calculate
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of goods and validate navigation
    And User click on previous button and navigate to Operations Performed page
    And User click on Delivery of Services and validate navigation
    And User click on previous button and navigate to Operations Performed page
    And User click on Exports and related transactions and validate navigation
    And User click on previous button and navigate to Operations Performed page
    And User click on Exempt transactions and validate navigation
    And User click on previous button and navigate to Operations Performed page
    And User click on Non-taxable transactions and validate navigation
    And User click on previous button and navigate to Operations Performed page

    #And User validate difference amount on operation performed
    Examples: 
      | TestcaseID   | Description                                              | Period        | TaxPayer               | Year            |
      | Mal_OP_10_11 | Validate Total Additional liability and amount calculate | txt_PeriodFeb | Regression AprilTOne | txt_2019_Period |

  @TC_13_14_15_16_17_Manual_2881
  Scenario Outline: Validate total row under Other e-declaration table , total amount for taxable turnover,next and prev,previous,transaction received button
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User verify total amount for taxable turnover
    And User verify the total amount for VAT collected
    And User click on next button and navigate to Tax deductible page
    And User click on prev and navigate to operation tap and prev button is disable
    And User click on Transaction received button and verify
    And User click on previous button and navigate to manual assessement landing screen

    Examples: 
      | TestcaseID               | Description                                                                                                              | Period        | TaxPayer               | Year            |
      | Mal_OP_13_14_15_16_17_19 | Validate total row, amount for taxable turnover, next and prev, previous, transaction received, e-filing schedule button | txt_PeriodFeb | Regression AprilTOne | txt_2019_Period |

  @TC_18_Manual_2881
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on e-filing schedule button and validate

    Examples: 
      | TestcaseID | Description                       | Period        | TaxPayer               | Year            |
      | Mal_OP_18  | Validate e-filing schedule button | txt_PeriodFeb | Regression AprilTOne | txt_2019_Period |

  @TC_19_Manual_2881
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is not uploaded by tax payer from tax payer portal
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on e-filing schedule when tax payer did not uploaded file at the time of e-declaration and shows message "<FNF>"

    Examples: 
      | TestcaseID | Description                       | Period        | TaxPayer               | Year            | FNF            |
      | Mal_OP_19  | Validate e-filing schedule button | txt_PeriodJan | Regression AprilTOne | txt_2019_Period | File not found |

  @TC_Negative_Scenario_Manual_2881
  Scenario Outline: Validate Negative Scenario for all fields
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed negative scenario

    Examples: 
      | TestcaseID  | Description                 | Period        | TaxPayer               |    1 |    2 |  2.1 |    3 |    4 |    5 |    6 |    7 |    8 | Year            |
      | Mal_OP_NS_1 | Validate special chatracter | txt_PeriodFeb | Regression AprilTOne | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | @!@$ | txt_2019_Period |
      | Mal_OP_NS_2 | Validate alpha numeric      | txt_PeriodFeb | Regression AprilTOne | A12  | B123 | C465 | D234 | E234 | F123 | G123 | H123 | I123 | txt_2019_Period |

  @TC_Negative_Scenario_field_length_Manual_2881
  Scenario Outline: Validate Negative Scenario for all fields length
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed negative scenario field length

    Examples: 
      | TestcaseID               | Description               | Period        | Year            | TaxPayer               |                1 |                2 |              2.1 |                3 |                4 |                5 |                6 |                7 |                8 |
      | Mal_OP_NS_Field_Length_1 | Validate length of number | txt_PeriodFeb | txt_2019_Period | Regression AprilTOne | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 | 1234567891011123 |
