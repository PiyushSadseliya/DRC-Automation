Feature: Manual Assessment/Reassessment -Purchase - Transaction received - Domestic & Import View  (Assessed List)

  @TC_001
  Scenario Outline: Sales Adjustement Page
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                           | Username         | Password |
      | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati | admin    |

  #@TC_01  UI Part
  #Scenario: Validate the UI of Domestic Sale Page under Assessed List module
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User see Manual Assessment Page
  #And User click on Assessed List Tab
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #  And User click on manage drop down and click on Reassess
  #
  #  And User click on view icon in sales for domestic
  #  And User navigate to Domestic sales
  #Examples:
  #|TestcaseID                                   |Description| Period|Data|
  #|Assessed_List_Purchase_Domestic_and_Import_01|Verify the UI of the Page|PeriodJan|Pending|
  @TC_02
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Domestic Import Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User verify the NITVA number "<NITVA>" for domestic purchase
    And User again click on previous button and navigate to landing screen
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User verify another nitva number "<nitvas2>" for domestic purchase

    Examples: 
      | TestcaseID                                    | Description             | Period    | Data     | NITVA             | nitvas2           |
      | Assessed_List_Purchase_Domestic_and_Import_02 | Validating NITVA number | PeriodJan | Assessed | 20180705073851634 | 20180705073851634 |

  @TC_03
  Scenario Outline: Validate the Period field displaying on the top of Domestic page of Assessed List module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User verify month for sale adjustement for domestic purchase

    Examples: 
      | TestcaseID                                    | Description             | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_03 | Validating Period field | PeriodJan | 20180705073851634 |

  #@TC_04  Not yet implemented
  #Scenario: Validate the "?" (help) icon displayed on the top right cornor of the Domestic purchase page of Assessed List module
  #Given User is on Assessment Page
  #And   User click on Assessment Tab
  #And   User click on help icon
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #  And User click on manage setting drop down and click on Reassess from list
  #  And User click on Adjustement icon in sales
  #And   User click on help icon
  #Examples:
  #  | TestcaseID           | Description             | Period    | Data              |
  #  | Assessed_List_Purchase_Domestic_and_Import_04 | Validating Period field | PeriodJan | 20180705073851634 |
  @TC_05
  Scenario Outline: Validate the functionality of Previous button on Domestic Page of Assessed List module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic sales
    And User again click on previous button and navigate to landing screen
    And User click on view icon for domestic purchase
    And User navigate to domestic purchase page

    Examples: 
      | TestcaseID                                    | Description                | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_05 | Validting Previous buttton | PeriodJan | 20180705073851634 |

  @TC_06
  Scenario Outline: Validate the Pagination functionality on Domestic purchase Page of Assessed List module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User click on page "<ClickPage>" and check page"<CheckPage>"
    And User see Result

    Examples: 
      | TestcaseID                     | Description        | Period    | ClickPage   | CheckPage   |
      | Valid_Manage_VAT_Reg_Filter_06 | Last and Next      | PeriodJan | AssLast     | AssestRight |
      | Valid_Manage_VAT_Reg_Filter_07 | Last and Previous  | PeriodJan | AssLast     | AssestLeft  |
      | Valid_Manage_VAT_Reg_Filter_08 | Next and Last      | PeriodJan | AssestRight | AssLast     |
      | Valid_Manage_VAT_Reg_Filter_09 | Next and First     | PeriodJan | AssestRight | AssFirst    |
      | Valid_Manage_VAT_Reg_Filter_10 | First and Previous | PeriodJan | AssFirst    | AssestLeft  |
      | Valid_Manage_VAT_Reg_Filter_11 | First and First    | PeriodJan | AssFirst    | AssFirst    |

  @TC_07
  Scenario Outline: Validate the sorting in Commodity/Service code,Quantity,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Domestic purchase page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User click on Commodity/Service code "<ServiceCode>" and check "<ServiceAsc>" and see in asceding order
    And User again click on Commodity/Service code "<ServiceCode>" and check "<ServiceDec>" and see in decending order
    And User click on Quantity "<Quantity>" and check "<QuantityAsc>" and see in asceding order
    And User again click on Quantity "<Quantity>" and check "<QuantityDec>" and see in decending order
    And User click on Gross Amount "<GrossAmount>" and check "<GrossAsc>" and see in asceding order
    And User again click on Gross Amount "<GrossAmount>" and check "<GrossDec>" and see in decending order
    And User click on VAT Amount "<VATAmount>" and check "<VATAsc>" and see in asceding order
    And User again click on VAT Amount "<VATAmount>" and check "<VATDec>" and see in decending order
    And User click on NET Amount "<NETAmount>" and check "<NETAsc>" and see in asceding order
    And User again click on NET Amount "<NETAmount>" and check "<NETDec>" and see in decending order
    And User click on previous button and again click on view icon for domestic purchase and check data "<data>" is reset

    Examples: 
      | TestcaseID                                    | Description                      | Period    | Data              | ServiceCode | ServiceAsc | ServiceDec | Quantity | QuantityAsc | QuantityDec | GrossAmount | GrossAsc | GrossDec | VATAmount | VATAsc | VATDec | NETAmount | NETAsc | NETDec | data |
      | Assessed_List_Purchase_Domestic_and_Import_12 | Validating sorting functionality | PeriodJan | 20180705073851634 |             |            |            |          |             |             |             |          |          |           |        |        |           |        |        |      |

  @TC_08
  Scenario Outline: Validate the value displayed in Total Quantity above the domestic purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check quantity list
    And User calculate quantity from list and check Total Quantity for domestic purchase

    Examples: 
      | TestcaseID                                    | Description               | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_13 | Validating Total Quantity | PeriodJan | 20180705073851634 |

  @TC_09
  Scenario Outline: Validate the value displayed in Total Gross Amount(FC) above the domestic purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check gross amount list
    And User calculate gross amount from list and check Total Gross Amount for domestic purchase

    Examples: 
      | TestcaseID                                    | Description                   | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_14 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |

  @TC_10
  Scenario Outline: Validate the value displayed in VAT Amount(FC) above the domestic purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check VAT amount list
    And User calculate VAT amount from list and check VAT Amount total for domestic purchase

    Examples: 
      | TestcaseID                                    | Description                 | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_15 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |

  @TC_11
  Scenario Outline: Validate the value displayed in Net Amount(FC) above the domestic purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check Net amount list
    And User calculate Net amount from list and check Net Amount total for domestic purchase

    Examples: 
      | TestcaseID                                    | Description           | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_16 | Validating Net Amount | PeriodJan | 20180705073851634 |

  @TC_12
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check invoice number "<invoice>" for domestic purchase

    Examples: 
      | TestcaseID                                    | Description               | Period    | Data              | invoice     |
      | Assessed_List_Purchase_Domestic_and_Import_17 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018017 |

  @TC_13
  Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check  sales type "<sale>" and NITVA of customer "<customer>" for domestic purchase

    Examples: 
      | TestcaseID                                    | Description                         | Period    | Data              | sale     | customer          |
      | Assessed_List_Purchase_Domestic_and_Import_18 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |

  @TC_14
  Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check for single Commodity Service Code for sales "<code>" for domestic purchase
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for domestic purchase

    Examples: 
      | TestcaseID                                    | Description                           | Period    | Data              | code          | code1         | code2         |
      | Assessed_List_Purchase_Domestic_and_Import_19 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |

  @TC_15
  Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>" for domestic purchase

    Examples: 
      | TestcaseID                                    | Description                    | Period    | Data              | quantity       | unit           | invoice     |
      | Assessed_List_Purchase_Domestic_and_Import_20 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  # On hold
  @TC_16
  Scenario Outline: Validate Cancelled Invoice numbers is not getting populated on Domestic purchase page.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon for domestic purchase
    And Verify the value in Total Quantity ,Total Gross Amount ,VAT Amount and Net Amount displayed above the table for domestic purchase

    Examples: 
      | TestcaseID                                    | Description        | Period    | Data              | quantity       | unit           | invoice     |
      | Assessed_List_Purchase_Domestic_and_Import_21 | Validating invoice | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  ###################### Assessed for Purchase Import start from here###########################################################
  #@TC_01  UI Part
  #Scenario: Validate the UI of Export Sale Page under Assessed List module
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User see Manual Assessment Page
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  # And User click on manage drop down and click on Reassess
  #
  #  And User click on view icon in sales for import purchase
  #  And User navigate to Import Purchase
  #Examples:
  #|TestcaseID          |Description| Period|Data|
  #|Assessed_List_Purchase_Domestic_and_Import_22|Verify the UI of the Page|PeriodJan|Pending|
  @TC_02
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Import purchase Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User verify the NITVA number "<NITVA>" for import purchase
    And User again click on previous button and navigate to landing screen
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User verify another nitva number "<nitvas2>" for import purchase

    Examples: 
      | TestcaseID                                    | Description             | Period    | Data    | NITVA             | nitvas2           |
      | Assessed_List_Purchase_Domestic_and_Import_23 | Validating NITVA number | PeriodJan | pending | 20180705073851634 | 20180705073851634 |

  @TC_03
  Scenario Outline: Validate the Period field displaying on the top of import page of Assessed List module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User verify month for import purchase

    Examples: 
      | TestcaseID                                    | Description             | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_24 | Validating Period field | PeriodJan | 20180705073851634 |

  #@TC_04  Not yet implemented
  #Scenario: Validate the "?" (help) icon displayed on the top right cornor of the import purchase page of Assessed List module
  #Given User is on Assessment Page
  #And   User click on Assessment Tab
  #And   User click on help icon
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #   And User click on manage setting drop down and click on Reassess from list
  #   And User click on view icon in purchase for import purchase
  #And   User click on help icon
  #Examples:
  #  | TestcaseID           | Description             | Period    | Data              |
  #  | Assessed_List_Purchase_Domestic_and_Import_25 | Validating Period field | PeriodJan | 20180705073851634 |
  @TC_05
  Scenario Outline: Validate the functionality of Previous button on import purchase Page of Manual assessment module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User again click on previous button and navigate to landing screen
    And User click on view icon in purchase for import purchase
    And User navigate to import purchase page

    Examples: 
      | TestcaseID                                    | Description                | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_26 | Validting Previous buttton | PeriodJan | 20180705073851634 |

  @TC_06
  Scenario Outline: Validate the Pagination functionality on import purchase Page of Manual assessment module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User click on page "<ClickPage>" and check page"<CheckPage>"
    And User see Result

    Examples: 
      | TestcaseID                     | Description        | Period    | ClickPage   | CheckPage   |
      | Valid_Manage_VAT_Reg_Filter_27 | Last and Next      | PeriodJan | AssLast     | AssestRight |
      | Valid_Manage_VAT_Reg_Filter_28 | Last and Previous  | PeriodJan | AssLast     | AssestLeft  |
      | Valid_Manage_VAT_Reg_Filter_29 | Next and Last      | PeriodJan | AssestRight | AssLast     |
      | Valid_Manage_VAT_Reg_Filter_30 | Next and First     | PeriodJan | AssestRight | AssFirst    |
      | Valid_Manage_VAT_Reg_Filter_31 | First and Previous | PeriodJan | AssFirst    | AssestLeft  |
      | Valid_Manage_VAT_Reg_Filter_32 | First and First    | PeriodJan | AssFirst    | AssFirst    |

  @TC_07
  Scenario Outline: Validate the sorting in Commodity/Service code,Quantity,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the import purchase page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User click on Commodity/Service code "<ServiceCode>" and check "<ServiceAsc>" and see in asceding order
    And User again click on Commodity/Service code "<ServiceCode>" and check "<ServiceDec>" and see in decending order
    And User click on Quantity "<Quantity>" and check "<QuantityAsc>" and see in asceding order
    And User again click on Quantity "<Quantity>" and check "<QuantityDec>" and see in decending order
    And User click on Gross Amount "<GrossAmount>" and check "<GrossAsc>" and see in asceding order
    And User again click on Gross Amount "<GrossAmount>" and check "<GrossDec>" and see in decending order
    And User click on VAT Amount "<VATAmount>" and check "<VATAsc>" and see in asceding order
    And User again click on VAT Amount "<VATAmount>" and check "<VATDec>" and see in decending order
    And User click on NET Amount "<NETAmount>" and check "<NETAsc>" and see in asceding order
    And User again click on NET Amount "<NETAmount>" and check "<NETDec>" and see in decending order
    And User click on previous button and again click on view icon for domestic purchase and check data "<data>" is reset for import purchase

    Examples: 
      | TestcaseID                                    | Description                      | Period    | Data              | ServiceCode | ServiceAsc | ServiceDec | Quantity | QuantityAsc | QuantityDec | GrossAmount | GrossAsc | GrossDec | VATAmount | VATAsc | VATDec | NETAmount | NETAsc | NETDec | data |
      | Assessed_List_Purchase_Domestic_and_Import_33 | Validating sorting functionality | PeriodJan | 20180705073851634 |             |            |            |          |             |             |             |          |          |           |        |        |           |        |        |      |

  @TC_08
  Scenario Outline: Validate the value displayed in Total Quantity above the import purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check quantity list
    And User calculate quantity from list and check Total Quantity for import purchase

    Examples: 
      | TestcaseID                                    | Description               | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_34 | Validating Total Quantity | PeriodJan | 20180705073851634 |

  @TC_09
  Scenario Outline: Validate the value displayed in Total Gross Amount above the import purchases table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check gross amount list
    And User calculate gross amount from list and check Total Gross Amount import purchase

    Examples: 
      | TestcaseID                                    | Description                   | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_35 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |

  @TC_10
  Scenario Outline: Validate the value displayed in VAT Amount above the import purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check VAT amount list
    And User calculate VAT amount from list and check VAT Amount total for import purchase

    Examples: 
      | TestcaseID                                    | Description                 | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_36 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |

  @TC_11
  Scenario Outline: Validate the value displayed in Net Amount above the import purchase table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check Net amount list
    And User calculate Net amount from list and check Net Amount total for import purchase

    Examples: 
      | TestcaseID                                    | Description           | Period    | Data              |
      | Assessed_List_Purchase_Domestic_and_Import_37 | Validating Net Amount | PeriodJan | 20180705073851634 |

  @TC_12
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check invoice number "<invoice>" for import purchase

    Examples: 
      | TestcaseID                                    | Description               | Period    | Data              | invoice     |
      | Assessed_List_Purchase_Domestic_and_Import_38 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018017 |

  @TC_13
  Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check  sales type "<sale>" and NITVA of customer "<customer>" for import purchase

    Examples: 
      | TestcaseID                                    | Description                         | Period    | Data              | sale     | customer          |
      | Assessed_List_Purchase_Domestic_and_Import_39 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |

  @TC_14
  Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check for single Commodity Service Code for sales "<code>" for import purchase
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for import purchase

    Examples: 
      | TestcaseID                                    | Description                           | Period    | Data              | code          | code1         | code2         |
      | Assessed_List_Purchase_Domestic_and_Import_40 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |

  @TC_15
  Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>" for import purchase

    Examples: 
      | TestcaseID                                    | Description                    | Period    | Data              | quantity       | unit           | invoice     |
      | Assessed_List_Purchase_Domestic_and_Import_41 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  # On hold
  @TC_16
  Scenario Outline: Validate Cancelled Invoice numbers is not getting populated on Export Sales page.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Reassess from list
    And User click on view icon in purchase for import purchase
    And Verify the value in Total Quantity ,Total Gross Amount ,VAT Amount and Net Amount displayed above the table for import purchase

    Examples: 
      | TestcaseID                                    | Description        | Period    | Data              | quantity       | unit           | invoice     |
      | Assessed_List_Purchase_Domestic_and_Import_42 | Validating invoice | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |
