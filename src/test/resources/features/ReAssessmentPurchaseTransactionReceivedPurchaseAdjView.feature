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

Feature: User is Reassement purchase adjustement view ->  Re-Assessment-Purchase - Transaction received - Purchase Adjustment View


 #@TC_01  UI Part
 # Scenario: Verify the UI elements of Re-Assessment -Purchase - Transaction received - Adjustment View page.
 #   Given User is on Assessment Page "<TestcaseID>" "<Description>"
 #   And User click on Assessment Tab
 #   And User click on Assessed List
 #   And User click on manage setting drop down and click on ReAssess  
 #   And User click Purchase icon for adjustement page      
 #   And User navigate to Purchase Adjustement Page
  
  #Examples:
  #|TestcaseID          |Description|
  #|Reassess_Purchase_Adj_View_001|Verify the UI of the Page|

  @TC_02
   Scenario Outline: Validate the tax payers NITVA number displaying on the top of Purchase adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User see NITVA number on e-Declaration Reconciliation page "<seeNITVA>"
    And User click on Adjustement icon in Purchase adjustment
    And User verify the NITVA number "<NITVA>" for purchase adjustment

    Examples: 
      | TestcaseID                         | Description             | Period    | Data              |seeNITVA         |NITVA              |
      | Reassess_Purchase_Adj_View_01 | Validating NITVA number | PeriodJan | 20180705073851634 |20180705073851634| 20180705073851634 |  
  
  @TC_03
  Scenario Outline: Validate the Period field displaying on the top of Purchase adjustment Page.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User verify month for purchase adjustement page

    Examples: 
      | TestcaseID                         | Description             | Period    | Data              |
      | Reassess_Purchase_Adj_View_02 | Validating Period field | PeriodJan | 20180705073851634 |
  
  
  #@TC_04  Not yet implemented
  #Scenario: Validate the "?" (help) icon displayed on the top right corner of the Purchase adjustment page.
  #Given User is on Assessment Page
  #And   User click on Assessment Tab
  #And   User click on help icon
  #And User click on drop down "<Period>"
  #And User type "<Data>"
  #And User click on type here
  #And User click on manage setting drop down and click on ReAssess
  #And User click on Adjustement icon in Purchase adjustment
  #And User click on help icon
  
  @TC_05
  Scenario Outline: Validate the functionality of Previous button on Purchase adjustment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User click on Previous button
    And User navigate to e-Declaration Reconciliation page and check

    Examples: 
      | TestcaseID                         | Description                | Period    | Data              |
      | Reassess_Purchase_Adj_View_03 | Validting Precious buttton | PeriodJan | 20180705073851634 |
  
  @TC_06
  Scenario Outline: Validate the value displayed in Total Quantity above the Purchase adjustment table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
        
    And User check quantity list for purchase adjustement
    And User calculate quantity from list and check Total Quantity for purchase adjustement

    Examples: 
      | TestcaseID                         | Description               | Period    | Data              |
      | Reassess_Purchase_Adj_View_04 | Validating Total Quantity | PeriodJan | 20180705073851634 |
  
  @TC_07
 Scenario Outline: Validate the value displayed in Total Gross Amount above the Purchase adjustment table.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check gross amount list for purchase adjustement
    And User calculate gross amount from list and check Total Gross Amount for purchase adjustement

    Examples: 
      | TestcaseID                         | Description                   | Period    | Data              |
      | Reassess_Purchase_Adj_View_05 | Validating Total Gross Amount | PeriodJan | 20180705073851634 |
  
  @TC_08
  Scenario Outline: Validate the value displayed in Total VAT Amount above the Purchase adjustment table.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User check VAT amount list for purchase adjustement
    And User calculate VAT amount from list and check VAT Amount total for purchase adjustement

    Examples: 
      | TestcaseID                         | Description                 | Period    | Data              |
      | Reassess_Purchase_Adj_View_06 | Validating Total Vat Amount | PeriodJan | 20180705073851634 |
  
  @TC_09
  Scenario Outline: Validate the value displayed in Net Amount above the Purchase adjustment table.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check Net amount list for purchase adjustement
    And User calculate Net amount from list and check Net Amount total for purchase adjustement

    Examples: 
      | TestcaseID                         | Description           | Period    | Data              |
      | Reassess_Purchase_Adj_View_07 | Validating Net Amount | PeriodJan | 20180705073851634 |
  
  
  @TC_10
  Scenario Outline: Validate Invoice number is displaying as per data present under EFD device for that particular month.
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check invoice number "<invoice>" for Purchase adjustement page

    Examples: 
      | TestcaseID                         | Description               | Period    | Data              | invoice     |
      | Reassess_Purchase_Adj_View_08 | Validating Invoice number | PeriodJan | 20180705073851634 | 18012018014 |
  
  @TC_11
  Scenario Outline: Validate Purchase Type is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User check sales type "<sales>" for Purchase adjustement page

    Examples: 
      | TestcaseID                         | Description                     | Period    | Data              | sales  |
      | Reassess_Purchase_Adj_View_09 | Validating Purchase Type Import | PeriodJan | 20180705073851634 | Import |
  
  @TC_12
   Scenario Outline: Validate Credit/Debit note is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check Debit Credit note "<note>" for Purchase adjustement page

    Examples: 
      | TestcaseID                         | Description                  | Period    | Data              | note  |
      | Reassess_Purchase_Adj_View_10 | Validating Credit/Debit Note | PeriodJan | 20180705073851634 | Debit |
  
  @TC_13
   Scenario Outline: Validate NITVA of customer is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check sales type "<sale>" and NITVA of customer "<customer>" for Purchase adjustement 

    Examples: 
      | TestcaseID                         | Description                         | Period    | Data              | sale     | customer          |
      | Reassess_Purchase_Adj_View_11 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Domestic | 20180705073851634 |
      | Reassess_Purchase_Adj_View_12 | Validating NITVA of customer number | PeriodJan | 20180705073851634 | Export   | --                |
  
  @TC_14
   Scenario Outline: Validate Commodity code of customer displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
     And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check for single Commodity Service Code for purchase "<code>" for Purchase adjustement
    And User check for multiple Commodity Service Code "<code1>" "<code2>" for purchase adjustement

    Examples: 
      | TestcaseID                         | Description                           | Period    | Data              | code          | code1         | code2         |
      | Reassess_Purchase_Adj_View_13 | Validating Commodity code of customer | PeriodJan | 20180705073851634 | 6802-KEYBOARD | 6802-KEYBOARD | 6802-KEYBOARD |
  
  
  @TC_15
    Scenario Outline: Validate Quantity and its units are  displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    
    And User check quantity "<quantity>" and unit "<unit>" for invoice "<invoice>" for purchase adjustement

    Examples: 
      | TestcaseID                         | Description                    | Period    | Data              | quantity   | unit            | invoice          |
      | Reassess_Purchase_Adj_View_14 | Validating Quantity and  units | PeriodJan | 20180705073851634 | lbl_Quan11 | lbl_Unit_Pieces | lbl_invoiceSales |
  
  
@TC_16  
 Scenario Outline: Validate Gross amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User check gross amount "<grossAmount>" for invoice "<invoice>" for purchase adjustement

    Examples: 
      | TestcaseID                         | Description             | Period    | Data              | grossAmount  | invoice          |
      | Reassess_Purchase_Adj_View_15 | Validating Gross amount | PeriodJan | 20180705073851634 | lbl_Gross250 | lbl_invoiceSales |
  
  @TC_17
   Scenario Outline: Validate VAT amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User check vat amount "<vatAmount>"  for invoice "<invoice>" for purchase adjustement

    Examples: 
      | TestcaseID                         | Description           | Period    | Data              | vatAmount | invoice          |
      | Reassess_Purchase_Adj_View_16 | Validating VAT amount | PeriodJan | 20180705073851634 | lbl_Vat40 | lbl_invoiceSales |
  @TC_18
   Scenario Outline: Validate Net amount is displaying as per data present under EFD device for that particular month
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    
    And User click on manage setting drop down and click on ReAssess
    And User click on Adjustement icon in Purchase adjustment
    And User check net amount "<netAmount>"  for invoice "<invoice>" for purchase adjustement

    Examples: 
      | TestcaseID                         | Description           | Period    | Data              | netAmount  | invoice          |
      | Reassess_Purchase_Adj_View_17 | Validating Net amount | PeriodJan | 20180705073851634 | lbl_Net290 | lbl_invoiceSales |
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  