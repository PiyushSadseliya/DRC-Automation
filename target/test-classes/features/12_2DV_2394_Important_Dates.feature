Feature: Use is on e-Filing page and see Important Dates

 # @TC_01
  #Scenario Outline: DRC Tax Portal Login
   # Given User Login "<TestcaseID>" "<Description>"
    #And User Enter email "<email>" and  password "<password>"
    #And User click on SignIn button 


    #Examples: 
     # | TestcaseID         | Description          | email                      | password   |
      #| Landing_Screen_001 | Login into tax payer | autotest007@mailinator.com | franky@123 |

  @TC_002_ImportantDates
  Scenario Outline: Validate the functionality of important Dates.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"        
    And User click on Tab
    And User can see the e-filing screen
    Then User verify the "<payment_date>" "<e-filing>"

    Examples: 
      | TestcaseID                 | Description                         | payment_date      | e-filing     |
      | VAT_e-filing_Imp_Dates_002 | User see important date for january | txt_payment_date1 | txt_efiling1 | 

  @TC_002_ImportantDates
  Scenario Outline: Validate the functionality of important Dates.
  
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    And User can see the e-filing screen
    Then User verify the "<payment_date>" "<e-filing>"

    Examples: 
      | TestcaseID                 | Description                         | payment_date      | e-filing     |
      | VAT_e-filing_Imp_Dates_002 | User see important date for january | txt_payment_date1 | txt_efiling1 |

  @TS_003_ImportantDates
  Scenario Outline: Validate the user is able to view the due date of  e-filing for that particular month in important dates section when user is missing his due date for e-filling.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    Then user verify "<due_date_of_e-filing>"

    Examples: 
      | TestcaseID                 | Description                                                          | due_date_of_e-filing |
      | VAT_e-filing_Imp_Dates_003 | user view  due date for january in important date section for filing | txt_efiling1         |

  @TS_004_ImportantDates
  Scenario Outline: Validate the user is able to view the due payment date of  e-filing for that particular month in important dates section when user is missing his due date for payment.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Tab
    Then user verify the "<payment-due-date>"

    Examples: 
      | TestcaseID                  | Description                                                           | payment-due-date  |
      | VAT_e-filing_Imp_Dates__004 | user view  due date for january in important date section for payment | txt_payment_date1 |

  @TS_005_ImportantDates
  Scenario Outline: Validate the date format in important date section
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    Then user can see the e-filing landing screen,verify "<date_format>" for payment
    And User logout

    Examples: 
      | TestcaseID                 | Description          | date_format  |
      | VAT_e-filing_Imp_Dates_005 | validate date format | txt_efiling1 |
