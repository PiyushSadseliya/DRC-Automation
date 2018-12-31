Feature: User is on Assessment Summary Manual Assessement

  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button and navigate to Assessment Summary page
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | TaxPayer   |
      | Mal_AS_02_03 | validate nitva no,Period field | txt_PeriodJan | Arun111223 |

  @TC_05_06_19_18_16
  Scenario Outline: Validate that the Total Assessed(FC) tile amount when no any changes made in  assessment adjustment table for Operations Performed, Tax Deductible and Adjustment tab.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
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
      | TestcaseID            | Description                                                              | Period        | TaxPayer   | mess                                   | FNF            |
      | Mal_AS_05_06_19_18_16 | Validate Total Assessed amount is same and check Additionality Liability | txt_PeriodMar | Arun111223 | No Modification made for e-declaration | File not found |

  # Happy path
  @TC_07
  Scenario Outline: Validate that the Assessment Summary tab record should get saved successfully through Save and Next button operation
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User enter value "<1>" for Operation Performed in Assessment Adjustment
    And User click on Save button and validate save message "<SaveMess>"
    And User click on next button
    And User click on edit button
    And User entered value "<10>" "<10.1>" on Tax Deductible in Assessment Adjustment
    And User click on Save button and validate save message "<SaveMess>"
    And User click on next button
    And User click on edit button
    And User entered value "<17>" on Adjustment in Assessment Adjustment
    And User click on Save button and validate save message "<SaveMess>"
    And User click on next button
    And User is on Assessment Summary and see Opeartion performed ,Tax Deductible and Adjustment record list
    And User select remark for Opeartion performed
    And User select remark for Tax Deductible
    And User select remark for Adjustment
    And User click on Save button and validate save message "<SaveMess>"
    And User click on next button
    And User navigate to Payment Summary page

    Examples: 
      | TestcaseID | Description         | Period        | TaxPayer   |  1 | 10 | 10.1 | 17 | SaveMess           | selectedRemark                    | SR             | selected                          |
      | Mal_AS_07  | validate Happy Path | txt_PeriodJan | Arun111223 | 10 | 10 |   10 | 10 | Saved Successfully | Verified through EFD transactions | Select remarks | Verified through EFD transactions |

  @TC_14_08_09_10_11_12_13
  Scenario Outline: Validate the Prev button functionality
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User enter value "<1>" for Operation Performed in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<10>" "<10.1>" on Tax Deductible in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<17>" on Adjustment in Assessment Adjustment
    And User click on next button
    And User is on Assessment Summary and see Opeartion performed ,Tax Deductible and Adjustment record list
    And User click on prev button and navigate to Tax Deductible tab screen
    And User click on next button and navigeta to Assessment Summary tab screen
    And User select remark and validate "<selectedRemark>"
    And User click on prev button and navigate to Tax Deductible tab screen
    And User click on next button and validate remark is removed "<SR>"
    And User select remark for Opeartion performed
    And User select remark for Tax Deductible
    And User select remark for Adjustment
    And User click on Save button and validate save message "<SaveMess>"
    And User click on prev button and navigate to Tax Deductible tab screen
    And User click on next button and navigate to Assessment Summary tab screen
    And User see remark is selected in Opeartion performed
    And User see remark is selected in Tax Deductible
    And User see remark is selected in Adjustment

    Examples: 
      | TestcaseID                  | Description                 | Period        | TaxPayer   |  1 | 10 | 10.1 | 17 | SaveMess           | selectedRemark                    | SR             | selected                          |
      | Mal_AS_14_08_09_10_11_12_13 | validate prev functionality | txt_PeriodJan | Arun111223 | 10 | 10 |   10 |  1 | Saved Successfully | Verified through EFD transactions | Select remarks | Verified through EFD transactions |

  @TC_15
  Scenario Outline: Validate the Previous button functionality
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on previous button and navigate to Manual Assessment landing screen
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User enter value "<1>" for Operation Performed in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<10>" "<10.1>" on Tax Deductible in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<17>" on Adjustment in Assessment Adjustment
    And User click on next button
    And User is on Assessment Summary and see Opeartion performed ,Tax Deductible and Adjustment record list
    And User select remark for Opeartion performed
    And User select remark for Tax Deductible
    And User select remark for Adjustment
    And User click on Save button and validate save message "<SaveMess>"
    And User click on previous button and navigate to Manual Assessment landing screen
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on next button and navigate to Assessment Summary page
    And User see remark is selected in Opeartion performed
    And User see remark is selected in Tax Deductible
    And User see remark is selected in Adjustment

    Examples: 
      | TestcaseID | Description                     | Period        | TaxPayer   |  1 | 10 | 10.1 | 17 | SaveMess           | selectedRemark                    | SR             | selected                          |
      | Mal_AS_15  | validate previous functionality | txt_PeriodJan | Arun111223 | 10 | 10 |   10 |  1 | Saved Successfully | Verified through EFD transactions | Select remarks | Verified through EFD transactions |

  @TC_17
  Scenario Outline: Validate e-filing schedule button functionality when tax payer uploaded file at the time of e-declaration.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on e-Filing Scedule on Manual Assessment and validate

    Examples: 
      | TestcaseID | Description                                                       | Period        | TaxPayer   |
      | Mal_AS_17  | validate download functionality when user upload file on tax paye | txt_PeriodJan | Arun111223 |

  @TC_24
  Scenario Outline: Validate that the Total Additional Liability(FC) amount should be zero when Total e-Declaration(FC)  amount should  be same as Total Assessed(FC) amount.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User see Total e-Declaration amount and Total Assessed amount
    And User click on next button and navigate to Assessment Summary page
    And User see Total e-Declaration amount and Total Assessed amount is same on previous screen
    And User validate total additionality liability

    Examples: 
      | TestcaseID | Description    | Period        | TaxPayer   |
      | Mal_AS_24  | amount is same | txt_PeriodJan | Arun111223 |

  @TC_25_26
  Scenario Outline: Validate that the Total Additional Liability(FC) amount should be more than zero when Total e-Declaration(FC)  amount is less than Total Assessed(FC) amount
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User see Total e-Declaration amount and Total Assessed amount
    And User click on edit button
    And User click on Save button and validate save message "<SaveMess>"
    And User enter value "<1>" for Operation Performed in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<10>" "<10.1>" on Tax Deductible in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<17>" on Adjustment in Assessment Adjustment
    And User click on next button
    And User see Total Additional Liability value is greater than zero
    And User clicik on previous button on Assessment Summary
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User see Total e-Declaration amount and Total Assessed amount
    And User click on edit button
    And User again enter value less amount "<again1>" for Operation Performed in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User again enter value less amount "<again10>" "<again10.1>" on Tax Deductible in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User again enter value less amount "<again17>" on Adjustment in Assessment Adjustment
    And User see Total Additional Liability value is less than zero

    Examples: 
      | TestcaseID   | Description                                                              | Period        | TaxPayer   | SaveMess           |      1 | 10 | 10.1 | 17 | again1 | again10 | again10.1 | again17 |
      | Mal_AS_25_26 | validate additionality liablility with more than zero and less than zero | txt_PeriodJan | Arun111223 | Saved Successfully | 500000 |  1 |    0 | 10 |    400 |       5 |         5 |      10 |

  @TC_27
  Scenario Outline: Validate that the Assessment Summary tab records should get auto populated with only those records whose changes made in assessment adjustment table for Operations Performed, Tax Deductible and Adjustment tab
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on edit button
    And User enter value in Delivery of goods "<1>" for Operation Performed in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value in Assets "<10>" "<10.1>" on Tax Deductible in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value in VAT Reversal "<17>" on Adjustment in Assessment Adjustment
    And User click on next button
    And User see Opeartion performed tab and validate entered value
    And User see Tax Deductible tab and validate entered value
    And User see Adjustment tab and validate entered value

    Examples: 
      | TestcaseID | Description                                            | Period        | TaxPayer   |   1 | 10 | 10.1 | 17 |
      | Mal_AS_27  | validate tabs auto populated in assessment adjustement | txt_PeriodJan | Arun111223 | 500 |  5 |    5 | 10 |
