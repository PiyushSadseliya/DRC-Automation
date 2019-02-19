Feature: User is on Assessed List EFD ALL

  @TC_02_03_Ass_EFD
  Scenario Outline: Validate the NITVA field,Period field internal portal
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on Delivery of goods
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer           | Year            |
      | Ass_EFD_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_17_Ass_EFD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Delivery of goods
    And User calculate Total Quantity on Delivery of Goods
    And User calculate Total Gross Amount on Delivery of Goods
    And User calculate Total Vat Amount on Delivery of Goods
    And User calculate Total Net Amount on Delivery of Goods
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID             | Description          | Period        | TaxPayer           | Year            |
      | Ass_EFD_04_05_06_07_17 | Validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Delivery of good Page.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Delivery of goods
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID   | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_EFD_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_EFD_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_EFD_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_EFD_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_EFD_18_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_EFD_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ##################----------Delivery of Services--------------##############
  @TC_02_03_Ass_EFD_DOS
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on Delivery of Services
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID        | Description                    | Period        | TaxPayer           | Year            |
      | Ass_EFD_DOS_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_17_Ass_EFD_DOS
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Delivery of Services
    And User calculate Total Quantity on Delivery of Services
    And User calculate Total Gross Amount on Delivery of Services
    And User calculate Total Vat Amount on Delivery of Services
    And User calculate Total Net Amount on Delivery of Services
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID                 | Description          | Period        | TaxPayer           | Year            |
      | Ass_EFD_DOS_04_05_06_07_17 | Validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Delivery of Services
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Delivery of Services
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID       | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_EFD_DOS_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_EFD_DOS_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_EFD_DOS_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_EFD_DOS_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_EFD_DOS_18_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_EFD_DOS_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ##################----------EXPORT--------------##############
  @TC_02_03_Mal_Exp
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on Exports and related transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer           | Year            |
      | Ass_Exp_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_16_Mal_Exp
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Exports and related transactions
    And User calculate Total Quantity on Exports and related transactions
    And User calculate Total Gross Amount on Exports and related transactions
    And User calculate Total Vat Amount on Exports and related transactions
    And User calculate Total Net Amount on Exports and related transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID             | Description          | Period        | TaxPayer           | Year            |
      | Ass_Exp_04_05_06_07_16 | validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_17
  Scenario Outline: Validate the Pagination functionality on Export
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Exports and related transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID   | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_Exp_17_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_Exp_17_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_Exp_17_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_Exp_17_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_Exp_17_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_Exp_17_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ########---------------EXEMPT---------------###########
  @TC_02_03_Mal_Exempt
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on Exempt transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID       | Description                    | Period        | TaxPayer           | Year            |
      | Ass_Exempt_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_17_Mal_Exempt
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Exempt transactions
    And User calculate Total Quantity on Exempt transactions
    And User calculate Total Gross Amount on Exempt transactions
    And User calculate Total Vat Amount on Exempt transactions
    And User calculate Total Net Amount on Exempt transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID                | Description          | Period        | TaxPayer           | Year            |
      | Ass_Exempt_04_05_06_07_17 | validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on EXEMPT
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Exempt transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID      | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_Exempt_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_Exempt_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_Exempt_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_Exempt_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_Exempt_18_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_Exempt_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ##################-------------Non-taxable transactions---------------#################
  @TC_02_03_Mal_NT
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on Non-taxable transactions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | TaxPayer           | Year            |
      | Ass_NT_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_17_Mal_NT
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Non-taxable transactions
    And User calculate Total Quantity on Non-taxable transactions
    And User calculate Total Gross Amount on Non-taxable transactions
    And User calculate Total Vat Amount on Non-taxable transactions
    And User calculate Total Net Amount on Non-taxable transactions
    And User click on previous button and navigate to Operations Performed page

    Examples: 
      | TestcaseID            | Description          | Period        | TaxPayer           | Year            |
      | Ass_NT_04_05_06_07_17 | validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Non-taxable transactions
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on Non-taxable transactions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID  | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_NT_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_NT_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_NT_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_NT_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_NT_18_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_NT_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ##################-----------Total deductible------------------###############
  @TC_02_03_Ass_TD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on next button
    And User click on Total deductible
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | TaxPayer           | Year            |
      | Ass_TD_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_17_Ass_TD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button
    And User click on Total deductible
    And User calculate Total Quantity on Total deductible
    And User calculate Total Gross Amount on Total deductible
    And User calculate Total Vat Amount on Total deductible
    And User calculate Total Net Amount on Total deductible
    And User click on previous button and navigate to Tax Deductible page

    Examples: 
      | TestcaseID            | Description          | Period        | TaxPayer           | Year            |
      | Ass_TD_04_05_06_07_17 | validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_18
  Scenario Outline: Validate the Pagination functionality on Total deductible
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button
    And User click on Total deductible
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID  | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_TD_18_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_TD_18_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_TD_18_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_TD_18_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_TD_18_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_TD_18_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ############----------------Supplementary deductions------------##############
  @TC_02_03_Ass_SD
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID   | Description                    | Period        | TaxPayer           | Year            |
      | Ass_SD_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_19_Ass_SD
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And User calculate Total Quantity on Supplementary deductions
    And User calculate Total Gross Amount on Supplementary deductions
    And User calculate Total Vat Amount on Supplementary deductions
    And User calculate Total Net Amount on Supplementary deductions
    And User click on previous button and navigate to Adjustment Page

    Examples: 
      | TestcaseID            | Description           | Period        | TaxPayer           | Year            |
      | Ass_SD_04_05_06_07_19 | validate csalculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_20_
  Scenario Outline: Validate the Pagination functionality on Supplementary deductions
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button
    And User click on next button
    And User click on Supplementary deductions
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID  | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_SD_20_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_SD_20_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_SD_20_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_SD_20_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_SD_20_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_SD_20_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |

  ############----------------Mining------------##############
  @TC_02_03_Ass_Min
  Scenario Outline: Validate the NITVA field,Period field
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User see that period field month and year is selected
    And User see NITVA number is selected
    And User click on manage and click on Reassess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And Validate NITVA number
    And Validate Period field

    Examples: 
      | TestcaseID    | Description                    | Period        | TaxPayer           | Year            |
      | Ass_Min_02_03 | validate nitva no,Period field | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_04_05_06_07_18_Ass_Min
  Scenario Outline: Validate the Total Quantity,Total Gross Amount,Total Vat Amount,Total Net Amount,Previous buttton
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And User calculate Total Quantity on Mining
    And User calculate Total Gross Amount on Mining
    And User calculate Total Vat Amount on Mining
    And User calculate Total Net Amount on Mining
    And User click on previous button and navigate to Adjustment Page

    Examples: 
      | TestcaseID             | Description          | Period        | TaxPayer           | Year            |
      | Mal_Min_04_05_06_07_18 | validate calculation | txt_PeriodFeb | Automation User 10 | txt_2019_Period |

  @TC_19
  Scenario Outline: Validate the Pagination functionality on Mining Page.
    Given User is on Manual Assessment "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>" for Assessed List
    And User click on year "<Year>" and check
    And User click on FilterBy and click on TaxPayer
    And User type "<TaxPayer>" and click on search button
    And User click on manage and click on Reassess
    And User click on next button
    And User click on next button
    And User click on VAT deducted by mining companies at source
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID   | Description                | Period        | ClickPage       | CheckPage       | nitva             | option          | TaxPayer           | Year            |
      | Ass_Min_19_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | 20181015014013724 | last and right  | Automation User 10 | txt_2019_Period |
      | Ass_Min_19_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | 20181015014013724 | last and left   | Automation User 10 | txt_2019_Period |
      | Ass_Min_19_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | 20181015014013724 | right and left  | Automation User 10 | txt_2019_Period |
      | Ass_Min_19_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | 20181015014013724 | right and first | Automation User 10 | txt_2019_Period |
      | Ass_Min_19_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | 20181015014013724 | first and left  | Automation User 10 | txt_2019_Period |
      | Ass_Min_19_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | 20181015014013724 | first and first | Automation User 10 | txt_2019_Period |
