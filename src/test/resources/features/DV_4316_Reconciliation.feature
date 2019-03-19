Feature: User is on Reconciliation Page

  # filezilla through payment only writes in xls
  @e-filing_payment
  Scenario Outline: Verifing the payment is displaying in xls
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User click on Dashboard
    And User click on Tab
    And User clik on month "<month>" and lick on pay "<pay>" button
    #And clicks on e-filing on landing screen
    #And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed on preview
    #And User click on check box and click on submit button
    #And User click on Yes button
    #And Enter OTP and click on verify button and click on Ok button
    #And User is navigate to Tax Calculation page
    #   And User click on previous button and navigate to Vat e-filing page
    #   And User see Preview button is display and pay button gets enable and user click on pay button
    And User click on proceed button and navigate to Payment of tax page
    And cliccks on "<Payment Option>" and verify details
    And Execute query for payment

    #Then User wait for ten minute
    Examples: 
      | TestcaseID        | Description                               | email                    | password | bankName             | month | pay       |     1 | 2 | 2.1 | 3 | 4 | 5 | 6 | 7 | 8 | Payment Option   |
      | Landing_Screen_08 | Verifing the payment is displaying in xls | smokeatuser61@mt2015.com | Test@123 | txt_BankName_Central | eMay  | P_btn_May | 10000 | 0 |   0 | 0 | 0 | 0 | 0 | 0 | 0 | Over the Counter |

  ##################----------Negative Scenario for Unreconciled -------------------#######################

  @TC_02_03_04_16
  Scenario Outline: Validate Filter by, search and Download functionality for Unreconciled
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    #And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User see record
    And User click on Filter by and select Transaction no and type Transaction and click on search button and verify
    And User click on Filter by and select Taxpayer and type Taxpayer Name  and click on search button and verify
    And User click on Filter by "<Filter>" and type invalid data "<invalid>" and clik on search buttom
    Then User see mess "<mess>"

    Examples: `
      | TestcaseID          | Description                                  | Date       | Filter | mess             |
      | UnReconciliation_01 | Filter by, search and Download functionality | 2019-02-25 |        | No records found |


  @TC_10_13_08
  Scenario Outline: Validate that the tax officer should not perform Update operation on error record with invalid data(DOC No and NITVA) and e-Filing payment record given by bank on Unreconciled button.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    #And User click on Date and select "<Date>"
    
    And User see the status is Error
    
    When User click on Unreconciled Tile
    And User click on Edit pencil 
    And User click on Update button and see mess "<mess>"    
    
    And User click on Edit pencil
    And User click on Cancel button and pop up gets closed
    
    And User click on Edit pencil
    And User type "Doc01" and "101201" 
    And User click on Cancel button and pop up gets closed
    
    And User enter Doc No and enter invalid Nitva no "<InNitva>" in popup and click on Update button 
    And User see the pop up message "<popMess>"
     
    And User click on Edit pencil
    And User enter Invalid Doc No "<InDoc>" and valid NITVA no in popup and click on Update button 
    And User see the pop up message "<popMess>"
    
    #And User click on Edit pencil
    #And User enter Special character "<Doc_Special>" and "<Nitva_Special>" and click on Update button
     

    Examples: 
      | TestcaseID          | Description              | Date       | Filter | mess             |mess							|InNitva|popMes										 |Doc_Special|Nitva_Special|
      | UnReconciliation_01 | Calculation Unreconciled | 2019-02-25 |        | No records found |NITVA is required|01230  |Doc No. and NITVA mismatch|@!@@%&^*	 |@!@@%&^*|


 @TC_09_12
  Scenario Outline: Validate that the tax officer resolve error record with valid data(DOC No/NITVA) and functionality of check box and error records should be converted to reconcile
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    #And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User click on Edit pencil 
    
    And User Enter Valid Doc No and Valid Nitva no and click on Update button 
    And User see "Transaction updated successfully"
    
    And User see Reprocess button is disable
    When User again click on Check box 
    Then User see Reprocess button is enabled
     
    And User click on Reprocess button and see Processed Successfully and click on Ok button
    
    And User click on Reconciled Tile 
    
    And User click on Filte by "<Filter>" and type data and click on search button and verify the Status is Processed 

    Examples: 
      | TestcaseID          | Description              | Date       | Filter | mess             |mess							|InNitva|popMes										 |Doc_Special|Nitva_Special|
      | UnReconciliation_01 | Calculation Unreconciled | 2019-02-25 |        | No records found |NITVA is required|01230  |Doc No. and NITVA mismatch|@!@@%&^*	 |@!@@%&^*|




  #########################################################################################################
  @Total_Amount
  Scenario Outline: Validate the functionality of Total Amount Field. -internal portal
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Date and select "<Date>"
    And User calculate Total Amount addition of Reconciled and Unreconciled

    Examples: 
      | TestcaseID                     | Description              | Date       |
      | Reconciliation_Total_Amount_01 | Calculation Unreconciled | 2019-02-25 |

  @Reconciled
  Scenario Outline: Validate the functionality of Total Amount Field.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Date and select "<Date>"
    And User click on Reconciled
    Then User calculate Total Amount addition of Reconciled and Unreconciled

    Examples: 
      | TestcaseID                     | Description               | Date       |
      | Reconciliation_Total_Amount_02 | Calculation of Reconciled | 2019-02-18 |

  @Reconciled_TC_02_03
  Scenario Outline: Validate filter by functionality for Reconciled Screen
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    #And User click on Date and select "<Date>"
    And User click on Reconciled
    And User click FilterBy on Reconciled "<Filter>"
    #tempory
    And User Type Doc No and click on search button
    Then User verify Doc no
    And User click on FilterBy Nitva and verify NITVA no

    #Then User click on FilterBy TaxPayer and verify Tax Payer name
    #And User enter value on Type here and click on search button
    #And User enter value on Type here "<Data>" and click on search button
    #Then User verify the result "<Data>"
    Examples: 
      | TestcaseID            | Description          | Filter  | Data          | Date       |
      | Reconciled_TC_02_03_1 | User click on Doc No | Doc.No. | FT19022500003 | 2019-02-25 |

  #  | Reconciled_TC_02_03_1 | User click on Doc No              | Doc.No.         | FT19022500003     | 2019-02-25 |
  #  | Reconciled_TC_02_03_2 | User clicki on NITVA              | NITVA           | 20190219124036123 | 2019-02-25 |
  #  | Reconciled_TC_02_03_3 | Calculation of Transaction Number | Transaction No. | FT19022500006     | 2019-02-25 |
  @Reconciled_TC_04_11_07
  Scenario Outline: Validate the Search functionality with respect to Filter by option and Download button functionality for Reconciled records.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled
    And User click on Date and select "<Date>"
    And User click FilterBy on Reconciled "<Filter>"
    And User enter value on Type here "<Data>" and click on search button
    Then User verify the result "<Data>"
    And User click on download button and verify on Reconciled
    And User enter invalid data "<InvalidData>" and click on search button and verify mess No records found
    And User click on Reconciled and verify status
    And User click on Unreconciled and verify navigation Reprocess is disable

    Examples: 
      | TestcaseID             | Description                                   | Filter | Data              | InvalidData | Date       |
      | Reconciled_TC_04_11_07 | User verify Search and download functionality | NITVA  | 20190219124036123 | JamBond007  | 2019-02-25 |

  @Reconciled_TC_08
  Scenario Outline: Validate the e-Filing payment record given by bank on Reconciled button.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled
    And User click on Date and select "<Date>"
    And User click on Reconciled tab and see the status Processed

    Examples: 
      | TestcaseID       | Description                                   | Date       |
      | Reconciled_TC_08 | User verify Search and download functionality | 2019-02-25 |

  #@Reconciled_TC_10
  #Scenario Outline: Validate the pagination functionality for Reconciled button menu.
  #Given User is on Reconciliation "<TestcaseID>" "<Description>"
  #And User click on Dashboard
  #And User click on Accounts
  #And User click on Reconciled
  #And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
  #
  #Examples:
  #| TestcaseID         | Description                | Period        | ClickPage       | CheckPage       | option          |
  #| Reconciled_TC_10_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
  #| Reconciled_TC_10_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
  #| Reconciled_TC_10_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
  #| Reconciled_TC_10_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
  #| Reconciled_TC_10_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
  #| Reconciled_TC_10_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |
  @Payment_Receipt
  Scenario Outline: Validate Tax Payer ,nitva ,transaction no and institute name on payment recipt
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled
    And User click on Date and select "<Date>"
    Then User click on Processed and verify Recipt in new tab

    Examples: 
      | TestcaseID       | Description                                                                       | Date       |
      | Reconciled_TC_08 | User verify Tax Payer ,nitva ,transaction no and institute name on payment recipt | 2019-02-25 |
