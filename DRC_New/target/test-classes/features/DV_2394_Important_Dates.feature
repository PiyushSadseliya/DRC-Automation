Feature: Use is on e-Filing page and see Important Dates

  @TS_002
  Scenario Outline: Validate the functionality of important Dates.
    Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    Then User open E-filing page
    And User can see the e-filing screen
    Then User verify the "<payment_date>" "<e-filing>"

    #And User logout
    Examples: 
      | TestcaseID                 | Description                         | payment_date      | e-filing     |
      | VAT_e-filing_Imp_Dates_002 | User see important date for january | txt_payment_date1 | txt_efiling1 |

  @TS_003
  Scenario Outline: Validate the user is able to view the due date of  e-filing for that particular month in important dates section when user is missing his due date for e-filling.
    #Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    Then User open E-filing page
    Then user verify "<due_date_of_e-filing>"

    #And User logout
    Examples: 
      | TestcaseID                  | Description                                                          | due_date_of_e-filing |
      | VAT_e-filing_Imp_Dates__003 | user view  due date for january in important date section for filing | txt_efiling1         |

  @TS_004
  Scenario Outline: Validate the user is able to view the due payment date of  e-filing for that particular month in important dates section when user is missing his due date for payment.
    #Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    Then User open E-filing page
    Then user verify the "<payment-due-date>"

    #And User logout
    Examples: 
      | TestcaseID                  | Description                                                           | payment-due-date  |
      | VAT_e-filing_Imp_Dates__004 | user view  due date for january in important date section for payment | txt_payment_date1 |

  @TS_005
  Scenario Outline: Validate the date format in important date section
    #Given User login to DRC VAT
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    Then User open E-filing page
    Then user can see the e-filing landing screen,verify "<date_format>" for payment

    #And User logout
    Examples: 
      | TestcaseID                 | Description          | date_format  |
      | VAT_e-filing_Imp_Dates_005 | validate date format | txt_efiling1 |
      


      
