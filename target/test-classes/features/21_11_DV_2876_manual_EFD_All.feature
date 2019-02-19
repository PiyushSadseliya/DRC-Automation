Feature: User is on Manual Assessement EFD ALL

  @TC_02_03_Mal_EFD
  Scenario Outline: Validate the NITVA field,Period field internal portal
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Delivery of goods
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | Year            | TaxPayer           |
      | Mal_EFD_02_03 | validate nitva no,Period field | txt_PeriodFeb | txt_2019_Period | Automation User 10 |

  @TC_04_05_06_07_17_Mal_EFD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of goods
    And User calculate Total Quantity on Delivery of Goods
    And User calculate Total Gross Amount on Delivery of Goods
    And User calculate Total Vat Amount on Delivery of Goods
    And User calculate Total Net Amount on Delivery of Goods
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID             | Description          | Period        | Year            | TaxPayer           |
      | Mal_EFD_04_05_06_07_17 | Validate calculation | txt_PeriodFeb | txt_2019_Period | Automation User 10 |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Delivery of good Page.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of goods
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
      | TestcaseID   | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_EFD_18_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_EFD_18_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_EFD_18_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_EFD_18_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_EFD_18_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_EFD_18_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ##################----------Delivery of Services--------------##############
  @TC_02_03_Mal_EFD_DOS
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Delivery of Services
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID        | Description                    | Period        | Year            | TaxPayer           |
      | Mal_EFD_DOS_02_03 | validate nitva no,Period field | txt_PeriodFeb | txt_2019_Period | Automation User 10 |

  @TC_04_05_06_07_17_Mal_EFD_DOS_
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of Services
    And User calculate Total Quantity on Delivery of Services
    And User calculate Total Gross Amount on Delivery of Services
    And User calculate Total Vat Amount on Delivery of Services
    And User calculate Total Net Amount on Delivery of Services
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID                 | Description          | Year            | TaxPayer           | Period        |
      | Mal_EFD_DOS_04_05_06_07_17 | Validate calculation | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_18_Mal_EFD_DOS
  Scenario Outline: Validate the Pagination functionality on Delivery of Services
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Delivery of Services
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User see Result
      | TestcaseID       | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_EFD_DOS_18_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_EFD_DOS_18_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_EFD_DOS_18_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_EFD_DOS_18_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_EFD_DOS_18_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_EFD_DOS_18_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ##################----------EXPORT--------------##############
  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Exports and related transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Year            | TaxPayer           | Period        |
      | Mal_Exp_02_03 | validate nitva no,Period field | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_04_05_06_07_16_Mal_Exp
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Exports and related transactions
    And User calculate Total Quantity on Exports and related transactions
    And User calculate Total Gross Amount on Exports and related transactions
    And User calculate Total Vat Amount on Exports and related transactions
    And User calculate Total Net Amount on Exports and related transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID             | Description          | Year            | TaxPayer           | Period        |
      | Mal_Exp_04_05_06_07_16 | validate calculation | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_17
  Scenario Outline: Validate the Pagination functionality on Export
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Exports and related transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID   | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_Exp_17_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_Exp_17_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_Exp_17_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_Exp_17_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_Exp_17_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_Exp_17_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ########---------------EXEMPT---------------###########
  @TC_02_03
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Exempt transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID       | Description                    | Year            | TaxPayer           | Period        |
      | Mal_Exempt_02_03 | validate nitva no,Period field | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_04_05_06_07_17_Mal_Exempt
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Exempt transactions
    And User calculate Total Quantity on Exempt transactions
    And User calculate Total Gross Amount on Exempt transactions
    And User calculate Total Vat Amount on Exempt transactions
    And User calculate Total Net Amount on Exempt transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID                | Description          | Year            | TaxPayer           | Period          |
      | Mal_Exempt_04_05_06_07_17 | validate calculation | txt_2019_Period | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on EXEMPT
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Exempt transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID      | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_Exempt_18_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_Exempt_18_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_Exempt_18_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_Exempt_18_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_Exempt_18_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_Exempt_18_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ##################-------------Non-taxable transactions---------------#################
  @TC_02_03_Mal_NT
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on Non-taxable transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Year            | TaxPayer           | Period        |
      | Mal_NT_02_03 | validate nitva no,Period field | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_04_05_06_07_17_Mal_NT
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Non-taxable transactions
    And User calculate Total Quantity on Non-taxable transactions
    And User calculate Total Gross Amount on Non-taxable transactions
    And User calculate Total Vat Amount on Non-taxable transactions
    And User calculate Total Net Amount on Non-taxable transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID            | Description          | Period          | TaxPayer           | Year            |
      | Mal_NT_04_05_06_07_17 | validate calculation | txt_2019_Period | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Non-taxable transactions
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on Non-taxable transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID  | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_NT_18_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_NT_18_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_NT_18_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_NT_18_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_NT_18_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_NT_18_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ##################-----------Total deductible------------------###############
  @TC_02_03_Mal_TD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button
    And User click on Total deductible
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Year            | TaxPayer           | Period        |
      | Mal_TD_02_03 | validate nitva no,Period field | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_04_05_06_07_17_Mal_TD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on Total deductible
    And User calculate Total Quantity on Total deductible
    And User calculate Total Gross Amount on Total deductible
    And User calculate Total Vat Amount on Total deductible
    And User calculate Total Net Amount on Total deductible
    And User click on previous button and navigate to Tax Deductible page

    Examples: 
      | TestcaseID            | Description          | Year            | TaxPayer           | Period        |
      | Mal_TD_04_05_06_07_17 | validate calculation | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Total deductible
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on Total deductible
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID  | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_TD_18_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_TD_18_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_TD_18_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_TD_18_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_TD_18_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_TD_18_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ############----------------Supplementary deductions------------##############
  @TC_02_03_Mal_SD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Year            | TaxPayer           | Period        |
      | Mal_SD_02_03 | validate nitva no,Period field | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_04_05_06_07_19_Mal_SD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
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
      | TestcaseID            | Description           | Year            | TaxPayer           | Period        |
      | Mal_SD_04_05_06_07_19 | validate csalculation | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_20
  Scenario Outline: Validate the Pagination functionality on Supplementary deductions
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID  | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_SD_20_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_SD_20_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_SD_20_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_SD_20_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_SD_20_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_SD_20_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |

  ############----------------Mining------------##############
  @TC_02_03_Mal_Min
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Year            | TaxPayer           | Period        |
      | Mal_Min_02_03 | validate nitva no,Period field | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_04_05_06_07_18_Mal_Min
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
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
      | TestcaseID             | Description          | Year            | TaxPayer           | Period        |
      | Mal_Min_04_05_06_07_18 | validate calculation | txt_2019_Period | Automation User 10 | txt_PeriodFeb |

  @TC_19
  Scenario Outline: Validate the Pagination functionality on Mining Page.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>" for Manual Assessment
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on assess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID   | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | Year            | TaxPayer           |
      | Mal_Min_19_1 | validating last and right  | txt_PeriodFeb | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | txt_2019_Period | Automation User 10 |
      | Mal_Min_19_2 | validating last and left   | txt_PeriodFeb | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | txt_2019_Period | Automation User 10 |
      | Mal_Min_19_3 | validating right and left  | txt_PeriodFeb | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | txt_2019_Period | Automation User 10 |
      | Mal_Min_19_4 | validating right and first | txt_PeriodFeb | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | txt_2019_Period | Automation User 10 |
      | Mal_Min_19_5 | validating first and left  | txt_PeriodFeb | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | txt_2019_Period | Automation User 10 |
      | Mal_Min_19_6 | validating first and first | txt_PeriodFeb | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | txt_2019_Period | Automation User 10 |
