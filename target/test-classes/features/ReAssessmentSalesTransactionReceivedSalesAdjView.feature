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
Feature: User is Reassement sales adjustement view Re-Assessment-Sales - Transaction received - Sales Adjustment View

  @TC_001_Valid_DRC_ATC_LoginInternalPortal_01
  Scenario Outline: Sales Adjustement Page
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                           | Username         | Password |
      | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati | admin    |

  #@TC_01  UI Part
  #Scenario: Verify the UI elements of "Manual Assessment -Sales - Transaction received - Adjustment View" page
  #  Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User click on Assessment Tab
  #  And User click on Assement List Tab
  #  And User click on manage drop down and click on assess
  #  And User click on Adjustement icon in sales type
  #  And User navigate to Sales Adjustement Page
  #Examples:
  #|TestcaseID          |Description|
  #|Reassess_Sales_Adj_View_01|Verify the UI of the Page|
  @TC_02
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Sales adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User see NITVA number for Sales adjustment
    And User verify the NITVA number "<NITVA>" for Sales adjustment

    Examples: 
      | TestcaseID                 | Description             | Period    | Data              | NITVA             |
      | Reassess_Sales_Adj_View_01 | Validating NITVA number | PeriodJan | 20180705073851634 | 20180705073851634 |

  @TC_03
  Scenario Outline: Validate the Period field displaying on the top of Sales adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User verify month/period for sale adjustement

    Examples: 
      | TestcaseID                 | Description             | Period    | Data              |
      | Reassess_Sales_Adj_View_02 | Validating Period field | PeriodJan | 20180705073851634 |

  #@TC_04  Not yet implemented
  #Scenario: Validate the ?(help) icon displayed on the top right corner of the Sales adjustment page
  # Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User click on Assessment Tab
  #  And User click on Assessed List
  @TC_05
  Scenario Outline: Validate the functionality of Previous button on sales adjustment Page of Assessed List module
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on Assessed List
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User click on Previous button
    And User navigate to e-Declaration Reconciliation page and check

    Examples: 
      | TestcaseID                 | Description                | Period    | Data              |
      | Reassess_Sales_Adj_View_03 | Validting Precious buttton | PeriodJan | 20180705073851634 |

  @TC_06
  Scenario Outline: Validate the value displayed in Total Quantity above the sales adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check quantity list for sales adjustement
    And User calculate quantity from list and check Total Quantity for sales adjustement

    Examples: 
      | TestcaseID                 | Description               | Period    | Data              |
      | Reassess_Sales_Adj_View_04 | Validating Total Quantity | PeriodJan | 20180705073851634 |

  @TC_07
  Scenario Outline: Validate the value displayed in Total Gross Amount above the sales adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check gross amount list for sales adjustement
    And User calculate gross amount from list and check Total Gross Amount for sales adjustement

    Examples: 
      | TestcaseID                 | Description                   | Period    | Data              |
      | Reassess_Sales_Adj_View_05 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |

  @TC_08
  Scenario Outline: Validate the value displayed in Total VAT Amount above the sales adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check VAT amount list for sales adjustement
    And User calculate VAT amount from list and check VAT Amount total for sales adjustement

    Examples: 
      | TestcaseID                 | Description                 | Period    | Data              |
      | Reassess_Sales_Adj_View_06 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |

  @TC_09
  Scenario Outline: Validate the value displayed in Net Amount above the sales adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check Net amount list for sales adjustement
    And User calculate Net amount from list and check Net Amount total for sales adjustement

    Examples: 
      | TestcaseID                 | Description           | Period    | Data              |
      | Reassess_Sales_Adj_View_07 | Validating Net Amount | PeriodJan | 20180705073851634 |

  @TC_10
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check invoice number "<invoice>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description               | Period    | Data              | invoice     |
      | Reassess_Sales_Adj_View_08 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018017 |

  @TC_11
  Scenario Outline: Validate Sales Type is displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check sales type "<sales>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description                  | Period    | Data              | sales  |
      | Reassess_Sales_Adj_View_09 | Validating Sales Type Export | PeriodJan | 20180705073851634 | Export |

  @TC_12
  Scenario Outline: Validate Credit/Debit note is displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check Debit Credit note "<note>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description                  | Period    | Data              | sales  | note  |
      | Reassess_Sales_Adj_View_10 | Validating Credit/Debit Note | PeriodJan | 20180705073851634 | Export | Debit |

  @TC_13
  Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check  sales type "<sale>" and NITVA of customer "<customer>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description                         | Period    | Data              | sale     | customer          |
      | Reassess_Sales_Adj_View_11 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |
      | Reassess_Sales_Adj_View_12 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Export   | --                |

  @TC_14
  Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check for single Commodity Service Code for sales "<code>" for sales adjustement page
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description                           | Period    | Data              | code          | code1         | code2         |
      | Reassess_Sales_Adj_View_13 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |

  @TC_15
  Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description                    | Period    | Data              | quantity       | unit           | invoice     |
      | Reassess_Sales_Adj_View_14 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_quantity11 | lbl_unitPieces | lbl_invoice |

  @TC_16
  Scenario Outline: Validate Gross amount(FC) is displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check gross amount "<grossAmount>" for invoice "<invoice>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description             | Period    | Data              | grossAmount | invoice     |
      | Reassess_Sales_Adj_View_15 | Validating Gross amount | PeriodJan | 20180705073851634 | lbl_gross30 | lbl_invoice |

  @TC_17
  Scenario Outline: Validate VAT amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check vat amount "<vatAmount>"  for invoice "<invoice>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description           | Period    | Data              | vatAmount | invoice     |
      | Reassess_Sales_Adj_View_16 | Validating VAT amount | PeriodJan | 20180705073851634 | lbl_vat10 | lbl_invoice |

  @TC_18
  Scenario Outline: Validate Net amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in sales adjustement
    And User check net amount "<netAmount>"  for invoice "<invoice>" for sales adjustement page

    Examples: 
      | TestcaseID                 | Description           | Period    | Data              | netAmount | invoice     |
      | Reassess_Sales_Adj_View_17 | Validating Net amount | PeriodJan | 20180705073851634 | lbl_net40 | lbl_invoice |
