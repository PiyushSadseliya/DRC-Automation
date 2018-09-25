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
Feature: ManualAssessment and ReAssessment Sales and Purchase (Manual Assessment sales and purchase)

  # thisn is for manual assement e-declaration page
  @TC_001
  Scenario Outline: Sales Adjustement Page
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                           | Username         | Password |
      | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati | admin    |

  @TC_01
  Scenario Outline: To validate the UI of Manual Assesment Page with sales and purchase section
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement with sale and purchase section

    Examples: 
      | TestcaseID                              | Description                          | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_01 | Validating UI for sales and purchase | PeriodJan | Pending |

  @TC_02
  Scenario Outline: To validate the UI of Domestic Sales page when DGI officer clicks on view icon of domestic in transaction received section of sales in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement when user click on domestic icon in transaction received

    Examples: 
      | TestcaseID                              | Description                                 | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_02 | Validating UI for Domestic in sales section | PeriodJan | Pending |

  @TC_03
  Scenario Outline: To validate the UI of Export Sales page when DGI officer clicks on view icon of export in transaction received section of sales in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement when user click on Export sale icon in transaction received

    Examples: 
      | TestcaseID                              | Description                               | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_03 | Validating UI for Export in sales section | PeriodJan | Pending |

  @TC_04
  Scenario Outline: To validate the UI of Sales Adjustment page when DGI officer clicks on view icon of adjusment in transaction received section of sales in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement when user click on Adjustement sales icon in transaction received

    Examples: 
      | TestcaseID                              | Description                                    | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_04 | Validating UI for Adjustement in sales section | PeriodJan | Pending |

  @TC_05
  Scenario Outline: To validate the UI of Domestic Purchase page when DGI officer clicks on view icon of domestic in transaction received section of Purchase in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement when user click on Domestic purchase in transaction received

    Examples: 
      | TestcaseID                              | Description                                    | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_05 | Validating UI for Domestic in purchase section | PeriodJan | Pending |

  @TC_06
  Scenario Outline: To validate the UI of Import Purchase page when DGI officer clicks on view icon of export in transaction received section of Purchase in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement when user click on Import purchase in transaction received

    Examples: 
      | TestcaseID                              | Description                                  | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_06 | Validating UI for Export in purchase section | PeriodJan | Pending |

  @TC_07
  Scenario Outline: To validate the UI of  Purchase Adjustment page when DGI officer clicks on view icon of adjusment in transaction received section of purchase in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User see the ui of manaual assessement when user click on Adjustment purchase in transaction received

    Examples: 
      | TestcaseID                              | Description                                     | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_07 | Validating UI for Adjusment in purchase section | PeriodJan | Pending |

  @TC_08
  Scenario Outline: Validate weather the DGI officer is navigated to Liability Calculation page by clicking on next button
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on next button and navigate to Liability Caculation page

    Examples: 
      | TestcaseID                              | Description                                    | Period    | Data    |
      | Manual_Assessment_Sales_and_Purchase_08 | Validating navigation on Liability Calculation | PeriodJan | Pending |

  @TC_09
  Scenario Outline: Validate weather the DGI officer is navigated to Manual Assessment Landing Page/Dashboard Page of Assesment module by clicking on Previous button
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on next button and navigate to Liability Caculation page
    And User click on Previous button and navigated to sales and purchased transaction received page
    And USer again click on Previous page and navigate to manual assement landing screen
    And User click on drop down "<Period>"
    And User enter "<value>" in type here
    And User click on type here
    And User check its status has been changed "<status>"

    Examples: 
      | TestcaseID                              | Description                                           | Period    | Data              | value             | status      |
      | Manual_Assessment_Sales_and_Purchase_09 | Validating status changed from pending to in progress | PeriodJan | 20180821035120132 | 20180821035120132 | In Progress |

  @TC_10
  Scenario Outline: Validate the tax payers NITVA number displaying on the top of Manual Assessment page with e-declaration table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User validate nitva number "<nitva>" on top of Manual Assessment page

    Examples: 
      | TestcaseID                              | Description                                    | Period    | Data   | nitva             |
      | Manual_Assessment_Sales_and_Purchase_10 | Validating navigation on Liability Calculation | PeriodJan | franky | 20180821035120132 |

  @TC_11
  Scenario Outline: Validate the Period field displaying on the top of Manual Assessment page with with e-declaration table
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User validate Period field on top of Manual Assessment page

    Examples: 
      | TestcaseID                              | Description              | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_11 | Validating period  field | PeriodJan | franky |

  #@TC_12  Not yet implemented on hold
  #Scenario Outline: Validate the "?" (help) icon displayed on the top right cornor of the Manual Assessment page with e-declaration table
  #Given User is on Assessment Page
  #And User click on Assessment Tab
  #And User click on drop down "<Period>"
  #And User type "<Data>"
  #And User click on type here
  #And User click on manage setting drop down and click on Assess
  #And User clik on help icon on the top right cornor of the Manual Assessment page
  #  Examples:
  #    | TestcaseID                    | Description                                    | Period    | Data    |
  #    | Manual_Assessment_Sales_and_Purchase_12 | Validating navigation on Liability Calculation | PeriodJan | franky  |
  # it is on hold ( This is futhure implemente )
  @TC_13
  Scenario Outline: Validate the download functionality of Transaction Received button
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on Tansacstion Received button
    And User open the downloaded file and observe total count of record in sales sheet
    And User open the downloaded file and observe total count of record in purchase sheet

    Examples: 
      | TestcaseID                              | Description                                                | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_13 | Validating download functionality for transaction received | PeriodJan | franky |

  # it is on hold ( This is futhure implemente )
  @TC_14
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is uploaded by tax payer from tax payer portal
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on e-filing schedule button
    And User open the downloaded file and observe total count of record in sales sheet for e-filing schedule
    And User open the downloaded file and observe total count of record in purchase sheet for e-filing schedule

    Examples: 
      | TestcaseID                              | Description                                           | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_14 | Validating download for e-file schedule when uploaded | PeriodJan | franky |

  @TC_15
  Scenario Outline: Validate the download functionality of e-filing schedule button when e-file schedule file is not uploaded by tax payer from tax payer portal
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User click on e-filing schedule button
    And User see toast message e-filing schedule file is not available

    Examples: 
      | TestcaseID                              | Description                                             | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_15 | Validating download for e-file schedule is not uploaded | PeriodJan | franky |

  @TC_16
  Scenario Outline: To validate the view icon functionality in transaction received section of Sales in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User Click on View icon of Domestic sales type and navigate to domestic sales page
    And User Click on View icon of Export sales type and navigate to export sales page
    And User Click on View icon of Adjustement sales type and navigate to adjustement sales page

    Examples: 
      | TestcaseID                              | Description                                         | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_16 | Validating view icon transaction received for sales | PeriodJan | franky |

  @TC_17
  Scenario Outline: To validate the view icon functionality in transaction received section of Purchase in e-declaration table on the Manual Assessment Page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User Click on View icon of Domestic sales type and navigate to domestic purchase page
    And User Click on View icon of Import sales type and navigate to import purchase page
    And User Click on View icon of Adjustement sales type and navigate to adjustement purchase page

    Examples: 
      | TestcaseID                              | Description                                            | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_17 | Validating view icon transaction received for purchase | PeriodJan | franky |

  @TC_18
  Scenario Outline: Validate the entries displayed in table of Sales on Manual Assesment page Domestic,Export,Adjustment
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User Observe the Differece value of Net issued document column is blank for Manual Assesment sales page
    And User count in domestic,export and adjustment sales type should be displayed equal/same as declared in Gross Amount for Sales Type of Sales e-filing "<saleDomesticGross>" "<saleExportGross>" "<saleAdjustementGross>"
    And User count in domestic,export and adjustment sales type should be displayed equal/same as declared in Vat Amount for Sales Type of Sales e-filing "<saleDomesticVAT>" "<saleExportVAT>" "<saleAdjustementVAT>"
    And User count in domestic,export and adjustment sales type should be displayed equal/same as declared in Net Amount for Sales Type of Sales e-filing "<saleDomesticNet>" "<saleExportNet>" "<saleAdjustementNet>"
    And User count in Transaction received for domestic,export and adjustment sales in Gross Amount for Sales Type "<TRsaleDomesticGross>" "<TRsaleExportGross>" "<TRsaleAdjustementGross>"
    And User count in Transaction received for domestic,export and adjustment sales in Vat Amount for Sales Type "<TRsaleDomesticVAT>" "<TRsaleExportVAT>" "<TRsaleAdjustementVAT>"
    And User count in Transaction received for domestic,export and adjustment sales in Net Amount for Sales Type "<TRsaleDomesticNet>" "<TRsaleExportNet>" "<TRsaleAdjustementNet>"

    Examples: 
      | TestcaseID                              | Description                                            | Period    | Data   | saleDomesticGross     | saleExportGross     | saleAdjustementGross     | saleDomesticVAT     | saleExportVAT     | saleAdjustementVAT     | saleDomesticNet     | saleExportNet     | saleAdjustementNet     | TRsaleDomesticGross     | TRsaleExportGross     | TRsaleAdjustementGross     | TRsaleDomesticVAT     | TRsaleExportVAT     | TRsaleAdjustementVAT     | TRsaleDomesticNet     | TRsaleExportNet     | TRsaleAdjustementNet     |
      | Manual_Assessment_Sales_and_Purchase_18 | Validating view icon transaction received for purchase | PeriodJan | franky | txt_saleDomesticGross | txt_saleExportGross | txt_saleAdjustementGross | txt_saleDomesticVAT | txt_saleExportVAT | txt_saleAdjustementVAT | txt_saleDomesticNet | txt_saleExportNet | txt_saleAdjustementNet | txt_TRsaleDomesticGross | txt_TRsaleExportGross | txt_TRsaleAdjustementGross | txt_TRsaleDomesticVAT | txt_TRsaleExportVAT | txt_TRsaleAdjustementVAT | txt_TRsaleDomesticNet | txt_TRsaleExportNet | txt_TRsaleAdjustementNet |

  @TC_19
  Scenario Outline: Validate the entries displayed in table of Purchase on Manual Assesment page Domestic,Import and Adjustment
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User Observe the Differece value of Net issued document column is blank for Manual Assesment purchase page
    And User count in domestic,export and adjustment purchase type should be displayed equal/same as declared in Gross Amount for purchase Type of purchase e-filing "<purchaseDomesticGross>" "<purchaseExportGross>" "<purchaseAdjustementGross>"
    And User count in domestic,export and adjustment purchase type should be displayed equal/same as declared in Vat Amount for purchase Type of purchase e-filing "<purchaseDomesticVAT>" "<purchaseExportVAT>" "<purchaseAdjustementVAT>"
    And User count in domestic,export and adjustment purchase type should be displayed equal/same as declared in Net Amount for purchase Type of purchase e-filing "<purchaseDomesticNet>" "<purchaseExportNet>" "<purchaseAdjustementNet>"
    And User count in Transaction received for domestic,export and adjustment purchase in Gross Amount for purchase Type "<TRpurchaseDomesticGross>" "<TRpurchaseExportGross>" "<TRpurchaseAdjustementGross>"
    And User count in Transaction received for domestic,export and adjustment purchase in Vat Amount for purchase Type  "<TRpurchaseDomesticVAT>" "<TRpurchaseExportVAT>" "<TRpurchaseAdjustementVAT>"
    And User count in Transaction received for domestic,export and adjustment purchase in Net Amount for purchase Type  "<TRpurchaseDomesticNet>" "<TRpurchaseExportNet>" "<TRpurchaseAdjustementNet>"

    Examples: 
      | TestcaseID                              | Description                                            | Period    | Data   | purchaseDomesticGross | purchaseExportGross | purchaseAdjustementGross | purchaseDomesticVAT | purchaseExportVAT | purchaseAdjustementVAT | purchaseDomesticNet | purchaseExportNet | purchaseAdjustementNet | TRpurchaseDomesticGross | TRpurchaseExportGross | TRpurchaseAdjustementGross | TRpurchaseDomesticVAT | TRpurchaseExportVAT | TRpurchaseAdjustementVAT | TRpurchaseDomesticNet | TRpurchaseExportNet | TRpurchaseAdjustementNet |
      | Manual_Assessment_Sales_and_Purchase_19 | Validating view icon transaction received for purchase | PeriodJan | franky |                       |                     |                          |                     |                   |                        |                     |                   |                        |                         |                       |                            |                       |                     |                          |                       |                     |                          |

  @TC_20
  Scenario Outline: Validate the difference values of all columns of sales table on manual assessment page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User Observe the Differece value of Net issued document column is blank Manual Assesment sales page
    And User Observe the Difference value of Gross Amount column for sales
    And User Observe the Difference value of VET Amount column for sales
    And User Observe the Difference value of NET Amount for sales

    Examples: 
      | TestcaseID                              | Description                                            | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_20 | Validating view icon transaction received for purchase | PeriodJan | franky |

  @TC_21
  Scenario Outline: Validate the difference values of all columns of Purchase table on manual assessment page
    Given User is on Assessment Page "<TestcaseID>" "<Description>"
    And User click on Assessment Tab
    And User click on drop down "<Period>"
    And User type "<Data>"
    And User click on type here
    And User click on manage setting drop down and click on Assess
    And User Observe the Differece value of Net issued document column is blankfor Manual Assesment purchase page
    And User Observe the Difference value of Gross Amount column for purchase
    And User Observe the Difference value of VET Amount column for purchase
    And User Observe the Difference value of NET Amount for purchase

    Examples: 
      | TestcaseID                              | Description                                            | Period    | Data   |
      | Manual_Assessment_Sales_and_Purchase_21 | Validating view icon transaction received for purchase | PeriodJan | franky |
