Feature: User is on Manual Assessement EFD ALL

  @TC_01
  Scenario: Validate the Manual Assessment dashboard page All clicking compoment
    Given User is on Assessment Page 
    And User click on windows icon
    And User enter username and password and click on login and see dashboard

  @TC_02_03_Mal_EFD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Delivery of goods
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | nitva             |
      | Mal_EFD_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_17_Mal_EFD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of goods
    And User calculate Total Quantity on Delivery of Goods
   And User calculate Total Gross Amount on Delivery of Goods
    And User calculate Total Vat Amount on Delivery of Goods
    And User calculate Total Net Amount on Delivery of Goods
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID             | Description          | Period        | nitva             |
      | Mal_EFD_04_05_06_07_17 | Validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Delivery of good Page.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of goods
   And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
  
      | TestcaseID   | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_EFD_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_EFD_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_EFD_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_EFD_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      |Mal_EFD_18_5  | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      |Mal_EFD_18_6  | validating first and first | txt_PeriodJan | lbl_lbl_AssFirst | lbl_lbl_AssFirst | 20181015014013724 | first and first |





  # sorting
#  @TC_19
#  Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Delivery of good page
  #  Given User is on Manual Assessment "<TestcaseID>" "<Description>"
  #  And User click on drop down "<Period>"
  #  And User click on Assessment Tab
  #  And User click on drop down "<Period>" for Manual Assessment
  #  And User click on FilterBy and click on NITVA
  #  And User type "<nitva>" and click on search button
  #  And User click on manage and click on assess
  #  And User click on Delivery of goods
  #  And User click on sorting sales type
  #  Then User see sorting result ascending order "<SalesvalueA>"
  #  And User click on sorting sales type
  #  Then User see sorting result descending order "<SalesvalueD>"
  #  And user click on the sorting Date
  #  Then User see sorting result descending order "<DateD>"
  #  And user click on the sorting Date
  #  Then User see sorting result ascending order "<DateA>"
  #  And user click on the sorting Invoice
  #  Then User see sorting result descending order "<InvoiceD>"
  #  And user click on the sorting Invoice
  #  Then User see sorting result ascending order "<InvoiceA>"
  #  And user click on the sorting nitva
  #  Then User see sorting result descending order "<nitvaD>"
  #  And user click on the sorting nitva
  #  Then User see sorting result ascending order "<nitvaA>"
  #  And user click on the sorting CSS
  #  Then User see sorting result descending order "<CSSD>"
 #   And user click on the sorting CSS
 #   Then User see sorting result ascending order "<CSSA>"
 ##   And user click on the sorting Quantity
 #   Then User see sorting result descending order "<QuaD>"
#    And user click on the sorting Quantity
  #  Then User see sorting result ascending order "<QuaA>"
#    And user click on the sorting Unit
#    Then User see sorting result descending order "<UniD>"
#    And user click on the sorting Unit
#    Then User see sorting result ascending order "<UniA>"
#    And user click on the sorting Gross Amount
#    Then User see sorting result descending order "<GAD>"
#    And user click on the sorting Gross Amount
#    Then User see sorting result ascending order "<GAA>"
#    And user click on the sorting Vat Amount
#    Then User see sorting result descending order "<VatD>"
#    And user click on the sorting Vat Amount
#    Then User see sorting result ascending order "<VatA>"
##    And user click on the sorting Net Amount
#    Then User see sorting result descending order "<NetD>"
#    And user click on the sorting Net Amount
#    Then User see sorting result ascending order "<NetA>"

#    Examples: 
#      | TestcaseID | Description      | Period        | nitva             | SalesvalueA | SalesvalueD | DateA       | DateD       | InvoiceA | InvoiceD | nitvaA            | nitvaD            | CSSA        | CSSD           | QuaA | QuaD | UniA   | UniD   | GAA  | GAD   | VatA | VatD | NetA | NetD  |
##      | Mal_EFD_19 | Validate Sorting | txt_PeriodFeb | 20181015014013724 | Domestic    | Domestic    | 01-Feb-2018 | 11-Feb-2018 | INVOICE1 | INVOICE9 | 20181015061049221 | 20181015061049221 | 4411-LAPTOP | 7015-MACHINERY |   10 |  110 | Pieces | Pieces | 5000 | 20000 |  800 | 3200 | 5800 | 23200 |

  ##################----------Delivery of Services--------------##############
  @TC_02_03_Mal_EFD_DOS
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Delivery of Services
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID        | Description                    | Period        | nitva             |
      | Mal_EFD_DOS_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_17_Mal_EFD_DOS_
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of Services
    And User calculate Total Quantity on Delivery of Services
    And User calculate Total Gross Amount on Delivery of Services
    And User calculate Total Vat Amount on Delivery of Services
    And User calculate Total Net Amount on Delivery of Services
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID                 | Description          | Period        | nitva             |
      | Mal_EFD_DOS_04_05_06_07_17 | Validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_18_Mal_EFD_DOS
  Scenario Outline: Validate the Pagination functionality on Delivery of Services
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of Services
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
   
      | TestcaseID       | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_EFD_DOS_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_EFD_DOS_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_EFD_DOS_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_EFD_DOS_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      | Mal_EFD_DOS_18_5 | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      | Mal_EFD_DOS_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |



  # sorting
#  @TC_19
#  Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Delivery of Service page
#    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
#    And User click on drop down "<Period>"
#    And User click on Assessment Tab
#    And User click on drop down "<Period>" for Manual Assessment
#    And User click on FilterBy and click on NITVA
#    And User type "<nitva>" and click on search button
#    And User click on manage and click on assess
#    And User click on Delivery of Services

    # sorting
 #   Examples: 
  #    | TestcaseID     | Description | Period        | nitva             |
   #   | Mal_EFD_DOS_19 |validate sorting             | txt_PeriodFeb | 20181015014013724 |

  ##################----------EXPORT--------------##############
  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Exports and related transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | nitva             |
      | Mal_Exp_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_16_Mal_Exp
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Exports and related transactions
    And User calculate Total Quantity on Exports and related transactions
    And User calculate Total Gross Amount on Exports and related transactions
    And User calculate Total Vat Amount on Exports and related transactions
    And User calculate Total Net Amount on Exports and related transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID             | Description          | Period        | nitva             |
      | Mal_Exp_04_05_06_07_16 | validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_17
  Scenario Outline: Validate the Pagination functionality on Export
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Exports and related transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
  
 Examples: 
      | TestcaseID   | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      |Mal_Exp_17_1  | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      |Mal_Exp_17_2  | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      |Mal_Exp_17_3  | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      |Mal_Exp_17_4  | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      |Mal_Exp_17_5  | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      |Mal_Exp_17_6  | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |




  # sorting
#  @TC_18
#  Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Export page
#    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
#    And User click on drop down "<Period>"
    #And User click on Assessment Tab
#    And User click on drop down "<Period>" for Manual Assessment
#    And User click on FilterBy and click on NITVA
#    And User type "<nitva>" and click on search button
#    And User click on manage and click on assess
#    And User click on Exports and related transactions

    # sorting
 #   Examples: 
 #     | TestcaseID | Description | Period        | nitva             |
 #     | Mal_Exp_18 | sorting     | txt_PeriodFeb | 20181015014013724 |

  ########---------------EXEMPT---------------###########
  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Exempt transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID       | Description                    | Period        | nitva             |
      | Mal_Exempt_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_17_Mal_Exempt
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Exempt transactions
    And User calculate Total Quantity on Exempt transactions
    And User calculate Total Gross Amount on Exempt transactions
    And User calculate Total Vat Amount on Exempt transactions
    And User calculate Total Net Amount on Exempt transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID                | Description          | Period        | nitva             |
      | Mal_Exempt_04_05_06_07_17 | validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on EXEMPT
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Exempt transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
  
 Examples: 
      | TestcaseID      | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_Exempt_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_Exempt_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_Exempt_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_Exempt_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      | Mal_Exempt_18_5 | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      | Mal_Exempt_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |



  # sorting
 # @TC_19
 # Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Exempt page
 #   Given User is on Manual Assessment "<TestcaseID>" "<Description>"
 #   And User click on drop down "<Period>"
 #   And User click on Assessment Tab
 #   And User click on drop down "<Period>" for Manual Assessment
 #   And User click on FilterBy and click on NITVA
 #   And User type "<nitva>" and click on search button
 #   And User click on manage and click on assess
 #   And User click on Exempt transactions

    # sorting
  #  Examples: 
  #    | TestcaseID    | Description | Period        | nitva             |
  #    | Mal_Exempt_19 | sorting     | txt_PeriodFeb | 20181015014013724 |

  ##################-------------Non-taxable transactions---------------#################
  @TC_02_03_Mal_NT
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Non-taxable transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | nitva             |
      | Mal_NT_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_17_Mal_NT
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Non-taxable transactions
    And User calculate Total Quantity on Non-taxable transactions
    And User calculate Total Gross Amount on Non-taxable transactions
    And User calculate Total Vat Amount on Non-taxable transactions
    And User calculate Total Net Amount on Non-taxable transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID            | Description          | Period        | nitva             |
      | Mal_NT_04_05_06_07_17 | validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Non-taxable transactions
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on Non-taxable transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
 
 Examples: 
      | TestcaseID  | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_NT_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_NT_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_NT_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_NT_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      | Mal_NT_18_5 | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      | Mal_NT_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |



  # sorting
  #@TC_19
  #Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Non taxable page
  #  Given User is on Manual Assessment "<TestcaseID>" "<Description>"
 #   And User click on drop down "<Period>"
 #   And User click on drop down "<Period>" for Manual Assessment
  #  And User click on FilterBy and click on NITVA
  #  And User type "<nitva>" and click on search button
 #   And User click on manage and click on assess
 #   And User click on Non-taxable transactions

    # sorting
 #   Examples: 
 #     | TestcaseID | Description | Period        | nitva             |
 #     | Mal_NT_19  | sorting     | txt_PeriodFeb | 20181015014013724 |

  ##################-----------Total deductible------------------###############
  @TC_02_03_Mal_TD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button
    And User click on Total deductible
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | nitva             |
      | Mal_TD_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_17_Mal_TD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on Total deductible
    And User calculate Total Quantity on Total deductible
    And User calculate Total Gross Amount on Total deductible
    And User calculate Total Vat Amount on Total deductible
    And User calculate Total Net Amount on Total deductible
    And User click on previous button and navigate to Tax Deductible page

    Examples: 
      | TestcaseID            | Description          | Period        | nitva             |
      | Mal_TD_04_05_06_07_17 | validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_18
    Scenario Outline: Validate the Pagination functionality on Total deductible
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on Total deductible
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
   
 Examples: 
      | TestcaseID  | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_TD_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_TD_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_TD_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_TD_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      | Mal_TD_18_5 | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      | Mal_TD_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |




  # sorting
 # @TC_19
 # Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Total deduction page
 #   Given User is on Manual Assessment "<TestcaseID>" "<Description>"
 #   And User click on drop down "<Period>"
 #   And User click on Assessment Tab
 #   And User click on drop down "<Period>" for Manual Assessment
 #   And User click on FilterBy and click on NITVA
 #   And User type "<nitva>" and click on search button
 #   And User click on manage and click on assess
 #   And User click on next button
 #   And User click on Total deductible

    # sorting
 #   Examples: 
 #     | TestcaseID | Description      | Period        | nitva             |
 #     | Mal_TD_19  | validate sorting | txt_PeriodFeb | 20181015014013724 |

  ############----------------Supplementary deductions------------##############
  @TC_02_03_Mal_SD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | nitva             |
      | Mal_SD_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_19_Mal_SD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And User calculate Total Quantity on Supplementary deductions
    And User calculate Total Gross Amount on Supplementary deductions
    And User calculate Total Vat Amount on Supplementary deductions
    And User calculate Total Net Amount on Supplementary deductions
    And User click on previous button and navigate to Adjustment Page

    Examples: 
      | TestcaseID         | Description           | Period        | nitva             |
      | Mal_SD_04_05_06_07_19 | validate csalculation | txt_PeriodFeb | 20181015014013724 |

  @TC_20
  Scenario Outline: Validate the Pagination functionality on Supplementary deductions
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
  
 Examples: 
      | TestcaseID  | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_SD_20_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_SD_20_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_SD_20_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_SD_20_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      | Mal_SD_20_5 | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      | Mal_SD_20_6 | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |



  # sorting
 # @TC_20
 # Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Supplimentary Deducaton page
 #   Given User is on Manual Assessment "<TestcaseID>" "<Description>"
 #   And User click on drop down "<Period>"
 #   And User click on Assessment Tab
 #   And User click on drop down "<Period>" for Manual Assessment
 #   And User click on FilterBy and click on NITVA
 #   And User type "<nitva>" and click on search button
 #   And User click on manage and click on assess
 #   And User click on next button
 #   And User click on next button
 #   And User click on Supplementary deductions

    # sorting
 #   Examples: 
 #     | TestcaseID | Description      | Period        | nitva             |
 #     | Mal_SD_20  | validate sorting | txt_PeriodFeb | 20181015014013724 |

  ############----------------Mining------------##############
  @TC_02_03_Mal_Min
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | nitva             |
      | Mal_Min_02_03 | validate nitva no,Period field | txt_PeriodFeb | 20181015014013724 |

  @TC_04_05_06_07_18_Mal_Min
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on FilterBy and click on NITVA
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And User calculate Total Quantity on Mining
    And User calculate Total Gross Amount on Mining
    And User calculate Total Vat Amount on Mining
    And User calculate Total Net Amount on Mining
    And User click on previous button and navigate to Adjustment Page

    Examples: 
      | TestcaseID             | Description          | Period        | nitva             |
      | Mal_Min_04_05_06_07_18 | validate calculation | txt_PeriodFeb | 20181015014013724 |

  @TC_19
  Scenario Outline: Validate the Pagination functionality on Mining Page.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User type "<nitva>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result

 Examples: 
      | TestcaseID   | Description                | Period        | ClickPage        | CheckPage        | nitva             | option          |
      | Mal_Min_19_1 | validating last and right  | txt_PeriodJan | lbl_AssLast      | lbl_AssestRight  | 20181015014013724 | last and right  |
      | Mal_Min_19_2 | validating last and left   | txt_PeriodJan | lbl_AssLast      | lbl_AssestLeft   | 20181015014013724 | last and left   |
      | Mal_Min_19_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight  | lbl_AssestLeft   | 20181015014013724 | right and left  |
      | Mal_Min_19_4 | validating right and first | txt_PeriodJan | lbl_AssestRight  | lbl_lbl_AssFirst | 20181015014013724 | right and first |
      | Mal_Min_19_5 | validating first and left  | txt_PeriodJan | lbl_lbl_AssFirst | lbl_AssestLeft   | 20181015014013724 | first and left  |
      | Mal_Min_19_6 | validating first and first | txt_PeriodJan | lbl_AssFirst     | lbl_AssFirst     | 20181015014013724 | first and first |



  # sorting
#  @TC_20
#  Scenario Outline: Validate the sorting in Sales type,Date,Invoice no,NITVA of customer,Commodity/Service code,Quantity,Unt,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Mining page
#    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
#    And User click on drop down "<Period>"
#    And User click on Assessment Tab
#    And User click on drop down "<Period>" for Manual Assessment
#    And User click on FilterBy and click on NITVA
#    And User type "<nitva>" and click on search button
#    And User click on manage and click on assess
#    And User click on next button
#    And User click on next button
#    And User click on VAT deducted by mining companies at source

    # sorting
#    Examples: 
#      | TestcaseID | Description      | Period        | nitva             |
#      | Mal_Min_20 | validate sorting | txt_PeriodFeb | 20181015014013724 |
