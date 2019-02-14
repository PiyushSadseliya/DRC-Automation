Feature: User is on Payment Agreement Landing Screen (Tax-officer) with payment agreement pop up 

# 39_Installment_Schedule_Pop_up_show 

  @tc_001_Payment_Agreement_2384
  Scenario Outline: User search taxpayer on Debt Management and assign taxofficer and navigate to Case Management  -internal portal
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"    
    Then user is on Pending debts
  	  
    Then User search TaxPayer name "<name>" and store TaxPayer name and address
    
    Then Search by TaxPayer Name "<name>" and assigns to officer and is on Case Management
    

    Examples: 
      | Test Case ID                       | Description                                              | ageing     | name   | officer | uname           | password | location |
      | Payment_Agrement_Tax_Officer_Login | User click on Debt Management and assign to tax offficer | 0-3 Months | test m | admin   | ketan.prajapati | admin    | Aketi    |

  #@TC_02 at last
  #Payment_Agreement_Landing_Screen
  #@TC_03_NITVA_Number_TC_07_Validate_no_of_notificationP_TC_09_Total_Amount_48_49
  @TC_03_07_09_10_11_12_48_49_Payment_Agreement_2384
  Scenario Outline: Validate NITVA number ,No of notification, Total amount field. ,initial amount ,Discount amount radio button ,Discount percentage radio button, open status ,Under review status. -internal portal
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type "<TaxPayer>" and click on search button
    And User store CaseID for Case Management
    And User store NITVA for Case Management
    And User click on manage drop down and click on view
    And User store Total Amount
    And User see status is "<StatusOpen>"
    And User select action and click on Under Review and click on save button
    And User see status is "<StatusUnderReview>"
    And User select action and click on Request Payment Agreement and click on save button
    And User verify NITVA for Case Management
    And User verify Total Amount and field is disable
    And User click on notification on Payment Agreement
    And User see notification is open
    And User type initial amount "<Amount>"
    And User again type initial amount "<Amount1>"
    And User see validation message "<message>" for Payment Agreement
    And User again type initial amount "<Amount>"
    And User click on discount radio button
    And User see percentage is deselected
    And User click on percentage radio button
    And User see discount amount is deselected

    Examples: 
      | TestcaseID                      | Description                                                                                                                                                                       | filter                | TaxPayer  | StatusOpen | StatusUnderReview | Amount | Amount1      | message                                                          |
      | Payment_Agrement_Tax_Officer_03 | Validate NITVA number ,No of notification, Total amount field. ,initial amount ,Discount amount radio button ,Discount percentage radio button, open status ,Under review status. | drp_CM_TaxPayer_Click | Mike Ross | Open       | Under Review      |     10 | 100000000000 | Amount should be less than the difference of total and discount. |

  @TC_13_discount_amount_textbox_14_discount_percentage_textbox_Payment_Agreement_2384
  Scenario Outline: Validate the Discount amount textbox and discount percentage textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type CaseID for Case Management
    And User click on search button
    #And User type "<TaxPayer>" and click on search button
    And User click on manage drop down and click on view
    And User click on continue
    And User click on discount radio button
    And User type amount "<amount>" in discount textbox
    And User see percentage is calculated
    And User click on percentage radio button
    And User type percentage "<per>" in percentage textbox
    And User see discount amount is calculated

    Examples: 
      | TestcaseID                         | Description                                             | filter           | TaxPayer | amount | per |
      | Payment_Agrement_Tax_Officer_13_14 | Verify dicount textbox and discount percentage textbox. | drp_CaseID_Click | 1Rivet S |    100 |   5 |

  ################################################################################################################################################
  #2385
  # Installment_Schedule_PopUp
  @TC_Installment_Schedule_PopUp_03_2385
  Scenario Outline: Validate the Installment Schedule button is disabled by default If there is no Payment agreement is done 
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"    
    And User type CaseID for Case Management
    #And User type "<TaxPayer>" and click on search button    
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue
    Then User see Installment Schedule button is disable

    Examples: 
      | TestcaseID                    | Description                                    | filter           |     
      | Installment_Schedule_PopUp_03 | Verify Installment Schedule button is disabled | drp_CaseID_Click |

  ################################################################################################################################################
  @TC_15_16_17_Payment_Agreement_2384
  Scenario Outline: Validate the Install amount radio button ,  No. of installment radio button, Installment amount textbox. 
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type CaseID for Case Management
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue
    And User click on No of Installement radio button
    And User see installement amount is deselected
    And User click on Installement radio button
    And User see no of installement is deselected
    And User click on No of Installement radio button
    And User type No of Installement "<NoInstall>"
    And User see Installement amount is calculated

    Examples: 
      | TestcaseID                            | Description                                                                            | filter           | NoInstall |
      | Payment_Agrement_Tax_Officer_15_16_17 | Verify amount radio button,No. of installment radio button, Installment amount textbox | drp_CaseID_Click |         2 |

  #21_browsew_button no breosw button
  @TC_18_19_20_22_Payment_Agreement_2384
  Scenario Outline: Validate Installment Frequency drop down ,Authorized Signatory ,comment textbox and cancel button functionality
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type CaseID for Case Management
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User see next installement date is displayed
    And User verify Authority and verify it is selected
    And User enter data in comment "<comment>" and check
    And User enter data in comment "<num>" and check
    #And User click on browse button on payment agreement
    #And User select file to upload "<upload>"
    # need to ask for browse
    #And User again click on browse and select file "<file>" and user see message "<message>"
    And User click on cancel button on payment agreement
    And User is redirect to list

    Examples: 
      | TestcaseID                               | Description                                                                                    | filter           | list       | comment | num      | upload             | file          |
      | Payment_Agrement_Tax_Officer_18_19_20_22 | Verify Install amount radio button,No. of installment radio button,Installment amount textbox. | drp_CaseID_Click | drp_Weelky | Testing | 78945132 | DRC Test Data.xlsx | BankFile.xlsx |

  # DRC_TC_01 Installment Schedule Pop up covered
  #2385
  @TC_23_installment_schedule_Payment_Agreement_2384
  Scenario Outline: Validate the installment schedule
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type CaseID for Case Management
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue
    And User click on No of Installement radio button
    And User type No of Installement "<NoInstall>"
    And User get installement amount
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on installement Scledules button
    And User see pop up appear
    And User verify installement amount

    #And User see installment amount "<entered>"
    Examples: 
      | TestcaseID                      | Description         | filter           | NoInstall | list       |
      | Payment_Agrement_Tax_Officer_23 | Verify installement | drp_CaseID_Click |         2 | drp_Weelky |


# DRC_TC_03 to 14 of DV-2028_Payment Agreement document also covered

  @TC_02_payment_Agreement_Submit_25_47_Payment_Agreement_2384
  Scenario Outline: Validate the Tax officer able to do payment agreement and submit button and payment agreement documents verification
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type CaseID for Case Management
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue
    
    And User store Assigned To Tax Officer name    
    
    And User type initial amount "<Amount>"
    And User type amount "<amount>" in discount textbox
    And User click on percentage radio button
    And User type percentage "<per>" in percentage textbox
    And User click on No of Installement radio button
    And User type No of Installement "<NoInstall>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on Authorized Signatory on Payment Agreement
    
    And User store total amount
    And User store initial amount
    And User store discount amount
    And User store discount percantage
    And User store installement amount
    And User store no of installements
    And User store installement frequency
    And User store Next installements Date
    And User store authorized signatory
    
    And User click on submit button on payment agreement
    
    And User navigate to payment agreement notice page
    
    And User store payment agreement Case id
    And User store Agreement Id
    And User store payment agreement creation date
    
    
    And User see current date generated and verify date format DD/MMM/YYYY and on payment agreement
    And User validate barcode on payment agreement
    And User validate taxpayer name and address on payment agreement
		And User validate subject field "<paymentAgreement>"
		
		And User validate case id field format YYMMDD
    And User validate payment agreement id format YYMMDD

		And User verify the paymentg period field start date and end date 
		And User verify payment amount due date 
		And User verify Payment Schedule field and verify date for Annexure A and installment amount 
		
		And User verify the Regards field 

		And User see print button is enabled 
		And User click on previous button and navigate to payment agrement landing screen


    Examples: 
      | TestcaseID                      | Description                                                                | filter           | Amount | amount  | per | NoInstall | list       | auth          |paymentAgreement    |
      | Payment_Agrement_Tax_Officer_22 | Verify payment agreement and submit button. and payment agreement document | drp_CaseID_Click |     50 | 2100040 |   5 |         2 | drp_Weelky | drp_click_One |txt_PaymentAgreement|

  @TC_26_TO_40_Payment_Agreement_2384
  Scenario Outline: Validating stored value for Payment Agreement
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type case id of payment agreement
    And User click on search button
    And User click on manage drop down and click on view
    And User verify store payment agreement creation date
    And User verify store Agreement Id
    And User verify store payment agreement Case id
    And User verify store total amount
    And User verify store initial amount
    And User verify store discount amount
    And User verify store discount percantage
    And User verify store installement amount
    And User verify store no of installements
    And User verify store installement frequency
    And User verify store Next installements Date
    And User verify store authorized signatory

    Examples: 
      | TestcaseID                            | Description                                   | filter           |
      | Payment_Agrement_Tax_Officer_26_TO_40 | Validating stored value for Payment Agreement | drp_CaseID_Click |

  ################################################################################################################################################
  @TC_04_05_07_09_Installment_Schedule_PopUp_2385
  Scenario Outline: Validate Agreement ID and Validate Date displayed on the Installment Schedule and verify date format 
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type case id of payment agreement
    And User click on search button    
    And User click on manage drop down and click on view    
    And User click on view icon on installement status            
    And User verify Agreement ID in installement pop up
    And User verify the creation date of payment agreement on pop up
    And User verify the difference between two consecutive date
    And User verify the date format DD/MMM/YYYY
    And User verify Installment amount calculated as per the selection    
    Then User click on close icon on Installment Details pop up

    Examples: 
      | TestcaseID                             | Description                                   | filter           |             
      | Installment_Schedule_PopUp_04_05_07_09 | Validating stored value for Payment Agreement | drp_CaseID_Click |

  ################################################################################################################################################
  @TC_41_42_43_44_45_46_Payment_Agreement_2384
  Scenario Outline: Validate Payment agreement Document,installment status, view icon, comment textbox, Browse button functionality,cancel button functionality.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type case id of payment agreement
    And User click on search button
    And User click on manage drop down and click on view
    And User click on action and select pa executed
    And User click on browse and select file "<file>" and verify
    And User see paid installment "<paid>"
    And User see over due installment "<overdue>"
    And User see pending installement "<pending>"
    And User click on view icon on installement status
    And User see notification of installement details
    And User enter data in comment "<comment>" and check
    And User enter data in comment "<data>" and check
    #And User again enter data "<data>" and check
    And User click on browse button on communication session and upload file "<file>" and verify
    And User click on cancel button on payment agreement
    And User is redirect to list

    Examples: 
      | TestcaseID                                     | Description                                                                                                                                | filter           | message                         | upload             | file          | paid | overdue | pending | comment | data |
      | Payment_Agrement_Tax_Officer_41_42_43_44_45_46 | Verify Payment agreement Document,installment status, view icon, comment textbox, Browse button functionality,cancel button functionality. | drp_CaseID_Click | Only 1 document can be uploaded | DRC Test Data.xlsx | BankFile.xlsx |    0 |       0 |       2 | test    |  123 |

  @TC_55_Cancel_button_Payment_Agreement_2384
  Scenario Outline: Validate the Cancel/Closed status.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type case id of payment agreement
    And User click on search button
    And User click on manage drop down and click on view
    And User click on action and select cancel
    And User click on submit button on Payment agreement
    And User click on filter by on case management and click on "<filter>"
    And User type case id of payment agreement
    And User click on search button
    Then User see the status "<status>" on case management

    #And User click on submit button and see message for cancel status
    Examples: 
      | TestcaseID                      | Description                | filter           | status |
      | Payment_Agrement_Tax_Officer_58 | Verify cancel/close status | drp_CaseID_Click | Cancel |
