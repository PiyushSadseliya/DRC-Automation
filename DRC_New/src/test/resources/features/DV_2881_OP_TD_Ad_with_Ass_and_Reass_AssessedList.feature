Feature: User is on Operation Performed Page Assessed List 


  @TC_01 @AssessedList_2881
  Scenario: Validate the Manual Assessment dashboard page All clicking compoment
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on windoews icon
    And User enter username and password and click on login and see dashboard


@TC_02_03 @AssessedList_2881
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
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | nitva             |
      | Ass_OP_02_03 | validate nitva no,Period field | txt_PeriodJan | 20181026120648410 |
      
      
  @TC_07 @AssessedList_2881
  Scenario Outline: Validate Total Additional liability.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
    And User calculate Total Additional liability for assessed list 

    Examples: 
      | TestcaseID | Description                         | Period        | nitva             |
      | Ass_OP_07  | Validate Total Additional liability | txt_PeriodJan | 20181026120648410 |
      
      
  
  @TC_11_12 @AssessedList_2881
  Scenario Outline: Validate the view icon in transaction received table and difference amount calculate
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess
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
    And User validate difference amount on operation performed

    Examples: 
      | TestcaseID   | Description                                              | Period        | nitva             |
      | Ass_OP_11_12 | Validate Total Additional liability and amount calculate | txt_PeriodJan | 20181026120648410 |
  
  
      
      
  @TC_09_21 @AssessedList_2881
  Scenario Outline: Validate the Edit button functionality and Save button functionality
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
     And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess   
    And User click on edit button    
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed and calculate
    And User click on Save button and validate save message "<SaveMess>" 
    And User again make changes "<01>" "<02>" "<02.1>" "<03>" "<04>" "<05>" "<06>" "<07>" "<08>" for Operation Performed
    And User click on next button and navigate to Tax deductible tab
    And User click on prev button
    And User click on edit button
    And User see previously entered value
  #  And User clear all fields
  #  And User see submit button is disable
  #  And User see next button is disable
    
Examples: 
      | TestcaseID   | Description                                  | Period        | nitva             |   1  |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |SaveMess           |01   |02   |02.1 |03   |04   |05   |06   |07   |08   |
      | Ass_OP_09_21 | Validate edit and save button functionality  | txt_PeriodJan | 20181026120648410 |10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 |Saved Successfully |1000 |1000 |1000 |1000 |1000 |1000 |1000 |1000 |1000 |
    
    
    
    @TC_14_15_16_17_18_20 @AssessedList_2881
  Scenario Outline: Validate total row under Other e-declaration table , total amount for taxable turnover,next and prev,previous,transaction received button and e-filing schedule button
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess 
    And User verify total amount for taxable turnover
    And User verify the total amount for VAT collected
    And User click on next button and navigate to Tax deductible page
    And User click on prev and navigate to operation tap and prev button is disable
    
    # open and observe count
    And User click on Transaction received button and verify
    And User click on e-filing schedule when tax payer did not uploaded file at the time of e-declaration and shows message "<FNF>"
And User click on previous button and navigate to manual assessement landing screen
    Examples: 
      | TestcaseID               | Description                                                                                                         | Period        | nitva             | FNF            |
      | Ass_OP_14_15_16_17_18_20 | Validate total row,amount for taxable turnover,next and prev,previous,transaction received,e-filing schedule button | txt_PeriodJan | 20181026120648410 | File not found |
    
       
    @TC_19 @AssessedList_2881
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on Reassess 
    And User click on e-filing schedule button and validate 
    
    Examples: 
      | TestcaseID   | Description                        | Period        | nitva             |
      | Ass_OP_19 | Validate e-filing schedule button  | txt_PeriodJan | 20181022121408836 |
    
      
      
      
      
      