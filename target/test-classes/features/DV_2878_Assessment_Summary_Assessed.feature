Feature: User is on Assessment Summary Assessed List

  @TC_01
  Scenario: Validate the Manual Assessment dashboard page All clicking compoment
    Given User is on Assessment Page
    And User click on windows icon
    And User enter username and password and click on login and see dashboard

  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on next button and navigate to Assessment Summary page
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | nitva             |
      | Ass_AS_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_05_06_19_18_16
  Scenario Outline: Validate that the Total Reassessed(FC) tile amount when no any changes made in  re-assessment adjustment table for Operations Performed, Tax Deductible and Adjustment tab.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User see Total Reassessed amount
    And User click on next button and navigate to Assessment Summary page
    And User check Total Reassessed amount is not changed
    And User validate Total Additional Liability on Assessment Summary page on Assessed List
    And User see message "<mess>" when no changes done in adjustement
    And User click on e-filing schedule when tax payer did not uploaded file at the time of e-declaration and shows message "<FNF>"
    And User click on Transaction Received button

    Examples: 
      | TestcaseID            | Description                                                                | Period        | nitva             | mess                                   | FNF            |
      | Ass_AS_05_06_19_18_16 | Validate Total Reassessed amount is same and check Additionality Liability | txt_PeriodFeb | 20181015014013724 | No Modification made for e-declaration | File not found |

  @TC_07
  Scenario Outline: Validate that the Assessment Summary tab record should get saved successfully through Save and Next button operation
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
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
      | TestcaseID | Description         | Period        | nitva             |  1 | 10 | 10.1 | 17 | SaveMess           | selectedRemark                    | SR             | selected                          |
      | Ass_AS_07  | validate Happy Path | txt_PeriodJan | 20181016121937745 | 10 | 10 |   10 | 10 | Saved Successfully | Verified through EFD transactions | Select remarks | Verified through EFD transactions |

  @TC_14_08_09_10_11_12_13
  Scenario Outline: Validate the Prev button functionality.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
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
      | TestcaseID | Description                 | Period        | nitva             |  1 | 10 | 10.1 | 17 | SaveMess           | selectedRemark                    | SR             | selected                          |
      | Ass_AS_14_08_09_10_11_12_13  | validate prev functionality | txt_PeriodMar | 20181015054058149 | 10 | 10 |   10 |  1 | Saved Successfully | Verified through EFD transactions | Select remarks | Verified through EFD transactions |

  @TC_15
  Scenario Outline: Validate the Previous button functionality
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User click on previous button and navigate to Assessed List page
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
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
    And User click on previous button and navigate to Assessed List page
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button and navigate to Assessment Summary page
    And User see remark is selected in Opeartion performed
    And User see remark is selected in Tax Deductible
    And User see remark is selected in Adjustment

    Examples: 
      | TestcaseID | Description                     | Period        | nitva             |  1 | 10 | 10.1 | 17 | SaveMess           | selectedRemark                    | SR             | selected                          |
      | Ass_AS_15  | validate previous functionality | txt_PeriodJun | 20181019044303136 | 10 | 10 |   10 |  1 | Saved Successfully | Verified through EFD transactions | Select remarks | Verified through EFD transactions |

  @TC_17
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
      | TestcaseID | Description                                                  | Period        | nitva                |
      | Ass_AS_17  | validate  download functionality of e-filing schedule button | txt_PeriodJan |20181022121408836     |

  @TC_24
  Scenario Outline: Validate that the Total Additional Liability(FC) amount should be zero when Total Reassessed(FC)  amount should  be same as Total Assessed(FC) amount.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User see Total Assessed amount amount and Total Reassessed
    And User click on next button and navigate to Assessment Summary page
    And User see Total Total Assessed amount and Total Reassessed amount is same on previous screen
    And User validate total additionality liability for Assessed List

    Examples: 
      | TestcaseID | Description             | Period        | nitva             |
      | Ass_AS_24  | validate amount is same | txt_PeriodJan | 20181026010609039 |

  @TC_25_26
  Scenario Outline: Validate that the Total Additional Liability(FC) amount should be more than zero and less than zero when Total Reassessed(FC)  amount is more than Total Assessed(FC) amount.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User see Total Assessed amount amount and Total Reassessed
    And User click on edit button
    And User click on Save button and validate save message "<SaveMess>"
    And User enter value "<1>" for Operation Performed in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<10>" "<10.1>" on Tax Deductible in Assessment Adjustment
    And User click on next button
    And User click on edit button
    And User entered value "<17>" on Adjustment in Assessment Adjustment
    And User see Total Additional Liability value is greater than zero
    And User clicik on previous button on Assessment Summary
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User see Total Assessed amount amount and Total Reassessed
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
      | TestcaseID   | Description         | Period        | nitva             | SaveMess           |      1 | 10 | 10.1 | 17 | again1 | again10 | again10.1 | again17 |
      | Ass_AS_25_26 | validate Happy Path | txt_PeriodJan | 20181026010609039 | Saved Successfully | 500000 |  1 |    0 | 10 |    400 |       5 |         5 |      10 |

  @TC_27
  Scenario Outline: Validate that the Assessment Summary tab records should get auto populated with only those records whose changes made in Reassessment adjustment table for Operations Performed, Tax Deductible and Adjustment tab.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
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
      | TestcaseID | Description                                            | Period        | nitva             |   1 | 10 | 10.1 | 17 |
      | Ass_AS_27  | validate tabs auto populated in assessment adjustement | txt_PeriodJan | 20181026010609039 | 500 |  5 |    5 | 10 |
