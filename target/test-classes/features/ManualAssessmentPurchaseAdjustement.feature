Feature: User is on Purchase Adjustement Page

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
  #Scenario: Verify the UI elements of Manual Assessment -Purchase - Transaction received - Adjustment View page
  #   Given User is on Assessment Page "<TestcaseID>" "<Description>"
  #  And User click on Assessment Tab
  #  And User see Manual Assessment Page
  #  And User click on manage drop down and click on assess
  #  And User click on Adjustement icon in Purchase type
  #  And User navigate to Purchase Adjustement Page
  #Examples:
  #|TestcaseID          |Description|
  #|Manual_Assessment_Purchase_View_001|Verify the UI of the Page|
  #@TC_02
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Purchase adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see NITVA number
    And User click on Adjustement icon in Purchase
    And User verify the NITVA number "<NITVA>"

    Examples: 
      | TestcaseID                         | Description             | Period    | Data              | NITVA             |
      | Manual_Assessment_Purchase_View_01 | Validating NITVA number | PeriodJan | 20180705073851634 | 20180705073851634 |

  @TC_03_Manual_Assessment_Purchase_View_02
  Scenario Outline: Validate the Period field displaying on the top of Purchase adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User verify month for purchase adjustement

    Examples: 
      | TestcaseID                         | Description             | Period    | Data              |
      | Manual_Assessment_Purchase_View_02 | Validating Period field | PeriodJan | 20180705073851634 |

  #@TC_04  Not yet implemented
  #Scenario: Validate help icon displayed on the top right corner of the Purchase adjustment page
  #Given User is on Assessment Page
  #And   User click on Assessment Tab
  #And   User click on help icon
  @TC_05Manual_Assessment_Purchase_View_03
  Scenario Outline: Validate the functionality of Previous button on Purchase adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User click on Previous button
    And User navigate to sales and purchase page and check

    Examples: 
      | TestcaseID                         | Description                | Period    | Data              |
      | Manual_Assessment_Purchase_View_03 | Validting Precious buttton | PeriodJan | 20180705073851634 |

  @TC_06_Manual_Assessment_Purchase_View_04
  Scenario Outline: Validate the value displayed in Total Quantity above the Purchase adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check quantity list
    And User calculate quantity from list and check Total Quantity

    Examples: 
      | TestcaseID                         | Description               | Period    | Data              |
      | Manual_Assessment_Purchase_View_04 | Validating Total Quantity | PeriodJan | 20180705073851634 |

  @TC_07_Manual_Assessment_Purchase_View_05
  Scenario Outline: Validate the value displayed in Total Gross Amount above the Purchase adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check gross amount list
    And User calculate gross amount from list and check Total Gross Amount

    Examples: 
      | TestcaseID                         | Description                   | Period    | Data              |
      | Manual_Assessment_Purchase_View_05 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |

  @TC_08_Manual_Assessment_Purchase_View_06
  Scenario Outline: Validate the value displayed in Total VAT Amount above the Purchase adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check VAT amount list
    And User calculate VAT amount from list and check VAT Amount total

    Examples: 
      | TestcaseID                         | Description                 | Period    | Data              |
      | Manual_Assessment_Purchase_View_06 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |

  @TC_09_Manual_Assessment_Purchase_View_07
  Scenario Outline: Validate the value displayed in Net Amount above the Purchase adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check Net amount list
    And User calculate Net amount from list and check Net Amount total

    Examples: 
      | TestcaseID                         | Description           | Period    | Data              |
      | Manual_Assessment_Purchase_View_07 | Validating Net Amount | PeriodJan | 20180705073851634 |

  @TC_10_Manual_Assessment_Purchase_View_08
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check invoice number "<invoice>" for Purchase adjustement

    Examples: 
      | TestcaseID                         | Description               | Period    | Data              | invoice     |
      | Manual_Assessment_Purchase_View_08 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018014 |

  @TC_11_Manual_Assessment_Purchase_View_09
  Scenario Outline: Validate Purchase Type is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check sales type "<sales>" for Purchase adjustement

    Examples: 
      | TestcaseID                         | Description                     | Period    | Data              | sales  |
      | Manual_Assessment_Purchase_View_09 | Validating Purchase Type Import | PeriodJan | 20180705073851634 | Import |

  @TC_12_Manual_Assessment_Purchase_View_10
  Scenario Outline: Validate Credit/Debit note is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check Debit Credit note "<note>" for Purchase adjustement

    Examples: 
      | TestcaseID                         | Description                  | Period    | Data              | note  |
      | Manual_Assessment_Purchase_View_10 | Validating Credit/Debit Note | PeriodJan | 20180705073851634 | Debit |

  @TC_13_Manual_Assessment_Purchase_View_11, @TC_13_Manual_Assessment_Purchase_View_12
  Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check  sales type "<sale>" and NITVA of customer "<customer>"

    Examples: 
      | TestcaseID                         | Description                         | Period    | Data              | sale     | customer          |
      | Manual_Assessment_Purchase_View_11 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |
      | Manual_Assessment_Purchase_View_12 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Export   | --                |

  @TC_14_Manual_Assessment_Purchase_View_13
  Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check for single Commodity Service Code for purchase "<code>"
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for purchase

    Examples: 
      | TestcaseID                         | Description                           | Period    | Data              | code          | code1         | code2         |
      | Manual_Assessment_Purchase_View_13 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |

  @TC_15_Manual_Assessment_Purchase_View_14
  Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>"

    Examples: 
      | TestcaseID                         | Description                    | Period    | Data              | quantity   | unit            | invoice          |
      | Manual_Assessment_Purchase_View_14 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_Quan11 | lbl_Unit_Pieces | lbl_invoiceSales |

 @TC_16_Manual_Assessment_Purchase_View_15
  Scenario Outline: Validate Gross amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check gross amount "<grossAmount>" for invoice "<invoice>"

    Examples: 
      | TestcaseID                         | Description             | Period    | Data              | grossAmount  | invoice          |
      | Manual_Assessment_Purchase_View_15 | Validating Gross amount | PeriodJan | 20180705073851634 | lbl_Gross250 | lbl_invoiceSales |

  @TC_17_Manual_Assessment_Purchase_View_16
  Scenario Outline: Validate VAT amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check vat amount "<vatAmount>"  for invoice "<invoice>"

    Examples: 
      | TestcaseID                         | Description           | Period    | Data              | vatAmount | invoice          |
      | Manual_Assessment_Purchase_View_16 | Validating VAT amount | PeriodJan | 20180705073851634 | lbl_Vat40 | lbl_invoiceSales |

  @TC_18__Manual_Assessment_Purchase_View_17
  Scenario Outline: Validate Net amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Adjustement icon in Purchase
    And User check net amount "<netAmount>"  for invoice "<invoice>"

    Examples: 
      | TestcaseID                         | Description           | Period    | Data              | netAmount  | invoice          |
      | Manual_Assessment_Purchase_View_17 | Validating Net amount | PeriodJan | 20180705073851634 | lbl_Net290 | lbl_invoiceSales |
