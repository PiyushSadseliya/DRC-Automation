#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Manual Assessment/Reassessment -Sales - Transaction received - Domestic & Export View  (Manual Assment)

  @TC_001
  Scenario Outline: Sales Adjustement Page
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                      | Username         | Password |
      | Manual_Sales_Domestic_Export_01 | laxman.prajapati | admin    |

  #@TC_01  UI Part
  #Scenario: Validate the UI of Domestic Sale Page under Manual Assessment module
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User see Manual Assessment Page
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #  And User click on manage drop down and click on assess
  #
  #  And User click on view icon in sales for domestic
  #  And User navigate to Domestic sales
  #Examples:
  #|TestcaseID          |Description| Period|Data|
  #|Manual_Sales_Domestic_Export_01|Verify the UI of the Page|PeriodJan|Pending|
  @TC_02
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Domestic Sales Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User verify the NITVA number "<NITVA>" for domestic sales
    And User again click on previous button and navigate to landing screen
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User verify another nitva number "<nitvas2>" for domestic sales

    Examples: 
      | TestcaseID                      | Description             | Period    | Data    | NITVA             | nitvas2           |
      | Manual_Sales_Domestic_Export_02 | Validating NITVA number | PeriodJan | pending | 20180705073851634 | 20180705073851634 |

  @TC_03
  Scenario Outline: Validate the Period field displaying on the top of Domestic page of Manual Assessement module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User verify month for sale adjustement for domestic sales

    Examples: 
      | TestcaseID                      | Description             | Period    | Data              |
      | Manual_Sales_Domestic_Export_03 | Validating Period field | PeriodJan | 20180705073851634 |

  #@TC_04  Not yet implemented
  #Scenario: Validate the "?" (help) icon displayed on the top right cornor of the Domestic sales page of manual assessment module
  #Given User is on Assessment Page
  #And   User click on Assessment Tab
  #And   User click on help icon
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #  And User click on manage setting drop down and click on Assess
  #  And User click on Adjustement icon in sales
  #And   User click on help icon
  #Examples:
  #  | TestcaseID           | Description             | Period    | Data              |
  #  | Manual_Sales_Domestic_Export_04 | Validating Period field | PeriodJan | 20180705073851634 |
  @TC_05
  Scenario Outline: Validate the functionality of Previous button on Domestic Sale Page of Manual assessment module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User again click on previous button and navigate to landing screen
    And User click on view icon for domestic sales
    And User navigate to domestic sales page

    Examples: 
      | TestcaseID                      | Description                | Period    | Data              |
      | Manual_Sales_Domestic_Export_05 | Validting Previous buttton | PeriodJan | 20180705073851634 |

  @TC_06
  Scenario Outline: Validate the Pagination functionality on Domestic Sale Page of Manual assessment module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
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
  Scenario Outline: Validate the sorting in Commodity/Service code,Quantity,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Domestic Sales page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
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
    And User click on previous button and again click on view icon for domestic sales and check data "<data>" is reset

    Examples: 
      | TestcaseID                      | Description                      | Period    | Data              | ServiceCode | ServiceAsc | ServiceDec | Quantity | QuantityAsc | QuantityDec | GrossAmount | GrossAsc | GrossDec | VATAmount | VATAsc | VATDec | NETAmount | NETAsc | NETDec | data |
      | Manual_Sales_Domestic_Export_12 | Validating sorting functionality | PeriodJan | 20180705073851634 |             |            |            |          |             |             |             |          |          |           |        |        |           |        |        |      |

  @TC_08
  Scenario Outline: Validate the value displayed in Total Quantity above the domestic sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check quantity list
    And User calculate quantity from list and check Total Quantity for domestic sales

    Examples: 
      | TestcaseID                      | Description               | Period    | Data              |
      | Manual_Sales_Domestic_Export_13 | Validating Total Quantity | PeriodJan | 20180705073851634 |

  @TC_09
  Scenario Outline: Validate the value displayed in Total Gross Amount(FC) above the domestic sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check gross amount list
    And User calculate gross amount from list and check Total Gross Amount for domestic sales

    Examples: 
      | TestcaseID                      | Description                   | Period    | Data              |
      | Manual_Sales_Domestic_Export_14 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |

  @TC_10
  Scenario Outline: Validate the value displayed in VAT Amount(FC) above the domestic sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check VAT amount list
    And User calculate VAT amount from list and check VAT Amount total for domestic sales

    Examples: 
      | TestcaseID                      | Description                 | Period    | Data              |
      | Manual_Sales_Domestic_Export_15 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |

  @TC_11
  Scenario Outline: Validate the value displayed in Net Amount(FC) above the domestic sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check Net amount list
    And User calculate Net amount from list and check Net Amount total for domestic sales

    Examples: 
      | TestcaseID                      | Description           | Period    | Data              |
      | Manual_Sales_Domestic_Export_16 | Validating Net Amount | PeriodJan | 20180705073851634 |

  @TC_12
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check invoice number "<invoice>" for domestic sales

    Examples: 
      | TestcaseID                      | Description               | Period    | Data              | invoice     |
      | Manual_Sales_Domestic_Export_17 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018017 |

  @TC_13
  Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check  sales type "<sale>" and NITVA of customer "<customer>" for domestic sales

    Examples: 
      | TestcaseID                      | Description                         | Period    | Data              | sale     | customer          |
      | Manual_Sales_Domestic_Export_18 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |

  @TC_14
  Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check for single Commodity Service Code for sales "<code>" for domestic sale
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for domestic sales

    Examples: 
      | TestcaseID                      | Description                           | Period    | Data              | code          | code1         | code2         |
      | Manual_Sales_Domestic_Export_19 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |

  @TC_15
  Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>" for domestic sales

    Examples: 
      | TestcaseID                      | Description                    | Period    | Data              | quantity       | unit           | invoice     |
      | Manual_Sales_Domestic_Export_20 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  # On hold
  @TC_16
  Scenario Outline: Validate Cancelled Invoice numbers is not getting populated on Domestic Sales page.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon for domestic sales
    And Verify the value in Total Quantity ,Total Gross Amount ,VAT Amount and Net Amount displayed above the table

    Examples: 
      | TestcaseID                      | Description        | Period    | Data              | quantity       | unit           | invoice     |
      | Manual_Sales_Domestic_Export_21 | Validating invoice | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  ###################### manual for Export start from here###########################################################
  #@TC_01  UI Part
  #Scenario: Validate the UI of Export Sale Page under Manual Assessment module
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User see Manual Assessment Page
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #  And User click on manage drop down and click on assess
  #
  #  And User click on view icon in sales for export sales
  #  And User navigate to Domestic sales
  #Examples:
  #|TestcaseID          |Description| Period|Data|
  #|Manual_Sales_Domestic_Export_22|Verify the UI of the Page|PeriodJan|Pending|
  @TC_02
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Export Sales Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User verify the NITVA number "<NITVA>" for export sales
    And User again click on previous button and navigate to landing screen
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User verify another nitva number "<nitvas2>" for export sales

    Examples: 
      | TestcaseID                      | Description             | Period    | Data    | NITVA             | nitvas2           |
      | Manual_Sales_Domestic_Export_23 | Validating NITVA number | PeriodJan | pending | 20180705073851634 | 20180705073851634 |

  @TC_03
  Scenario Outline: Validate the Period field displaying on the top of Export sales page of Manual Assessement module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User verify month for sale adjustement for export sales

    Examples: 
      | TestcaseID                      | Description             | Period    | Data              |
      | Manual_Sales_Domestic_Export_24 | Validating Period field | PeriodJan | 20180705073851634 |

  #@TC_04  Not yet implemented
  #Scenario: Validate the "?" (help) icon displayed on the top right cornor of the Export sales page of manual assessment module
  #Given User is on Assessment Page
  #And   User click on Assessment Tab
  #And   User click on help icon
  #And User click on drop down "<Period>"
  #  And User type "<Data>"
  #  And User click on type here
  #  And User click on manage setting drop down and click on Assess
  #   And User click on view icon in sales for export sales
  #And   User click on help icon
  #Examples:
  #  | TestcaseID           | Description             | Period    | Data              |
  #  | Manual_Sales_Domestic_Export_25 | Validating Period field | PeriodJan | 20180705073851634 |
  @TC_05
  Scenario Outline: Validate the functionality of Previous button on Export Sale Page of Manual assessment module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User again click on previous button and navigate to landing screen
    And User click on view icon in sales for export sales
    And User navigate to export sales page

    Examples: 
      | TestcaseID                      | Description                | Period    | Data              |
      | Manual_Sales_Domestic_Export_26 | Validting Previous buttton | PeriodJan | 20180705073851634 |

  @TC_06
  Scenario Outline: Validate the Pagination functionality on Export Sale Page of Manual assessment module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
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
  Scenario Outline: Validate the sorting in Commodity/Service code,Quantity,Gross Amount(FC),VAT Amount(FC),& Net Amount(FC) columns displayed on the Export Sales page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
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
    And User click on previous button and again click on view icon for domestic sales and check data "<data>" is reset for export sales

    Examples: 
      | TestcaseID                      | Description                      | Period    | Data              | ServiceCode | ServiceAsc | ServiceDec | Quantity | QuantityAsc | QuantityDec | GrossAmount | GrossAsc | GrossDec | VATAmount | VATAsc | VATDec | NETAmount | NETAsc | NETDec | data |
      | Manual_Sales_Domestic_Export_33 | Validating sorting functionality | PeriodJan | 20180705073851634 |             |            |            |          |             |             |             |          |          |           |        |        |           |        |        |      |

  @TC_08
  Scenario Outline: Validate the value displayed in Total Quantity above the Export sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check quantity list
    And User calculate quantity from list and check Total Quantity for export sale

    Examples: 
      | TestcaseID                      | Description               | Period    | Data              |
      | Manual_Sales_Domestic_Export_34 | Validating Total Quantity | PeriodJan | 20180705073851634 |

  @TC_09
  Scenario Outline: Validate the value displayed in Total Gross Amount above the Export sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check gross amount list
    And User calculate gross amount from list and check Total Gross Amount export sale

    Examples: 
      | TestcaseID                      | Description                   | Period    | Data              |
      | Manual_Sales_Domestic_Export_35 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |

  @TC_10
  Scenario Outline: Validate the value displayed in VAT Amount above the Export sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check VAT amount list
    And User calculate VAT amount from list and check VAT Amount total for export sale

    Examples: 
      | TestcaseID                      | Description                 | Period    | Data              |
      | Manual_Sales_Domestic_Export_36 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |

  @TC_11
  Scenario Outline: Validate the value displayed in Net Amount above the Export sales table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check Net amount list
    And User calculate Net amount from list and check Net Amount total for export sales

    Examples: 
      | TestcaseID                      | Description           | Period    | Data              |
      | Manual_Sales_Domestic_Export_37 | Validating Net Amount | PeriodJan | 20180705073851634 |

  @TC_12
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check invoice number "<invoice>" for export sales

    Examples: 
      | TestcaseID                      | Description               | Period    | Data              | invoice     |
      | Manual_Sales_Domestic_Export_38 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018017 |

  @TC_13
  Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check  sales type "<sale>" and NITVA of customer "<customer>" for export sales

    Examples: 
      | TestcaseID                      | Description                         | Period    | Data              | sale     | customer          |
      | Manual_Sales_Domestic_Export_39 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |

  @TC_14
  Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check for single Commodity Service Code for sales "<code>" for export sale
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for export sales

    Examples: 
      | TestcaseID                      | Description                           | Period    | Data              | code          | code1         | code2         |
      | Manual_Sales_Domestic_Export_40 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |

  @TC_15
  Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>" for export sales

    Examples: 
      | TestcaseID                      | Description                    | Period    | Data              | quantity       | unit           | invoice     |
      | Manual_Sales_Domestic_Export_41 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  # On hold
  @TC_16
  Scenario Outline: Validate Cancelled Invoice numbers is not getting populated on Export Sales page.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on view icon in sales for export sales
    And Verify the value in Total Quantity ,Total Gross Amount ,VAT Amount and Net Amount displayed above the table for export ssle

    Examples: 
      | TestcaseID                      | Description        | Period    | Data              | quantity       | unit           | invoice     |
      | Manual_Sales_Domestic_Export_42 | Validating invoice | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |
