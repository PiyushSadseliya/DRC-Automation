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
    And User is navigate to Tax Calculation page
    #   And User click on previous button and navigate to Vat e-filing page
    #   And User see Preview button is display and pay button gets enable and user click on pay button
    And User click on proceed button and navigate to Payment of tax page
    And cliccks on "<Payment Option>" and verify details
    And Execute query for payment

    # Then User wait for ten minute
    Examples: 
      | TestcaseID        | Description                               | email                        | password | bankName             | month | pay       |     1 | 2 | 2.1 | 3 | 4 | 5 | 6 | 7 | 8 | Payment Option   |
      | Landing_Screen_08 | Verifing the payment is displaying in xls | RegressionAprilOne@mt2015.com  | Test@123 | txt_BankName_Central | eJan  | P_btn_Jan | 10000 | 0 |   0 | 0 | 0 | 0 | 0 | 0 | 0 | Over the Counter |

  #######################################--Unreconciled--##################################################################
  @Unreconciled_TC_06
  Scenario Outline: Validate the  functionality of check box on Unreconciled screen only.  -internal portal
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User click on check box and see reprocess button is enabled
    Then User deselect checkbox then see reprocess is disabled
    And User click on check box and click on Reconciled Tile and again click on Unreconcilied Tile
    Then User see reprocess is disabled

    Examples: 
      | TestcaseID         | Description                           | Date       |
      | Unreconciled_TC_06 | Validating functionality of Check box | 2019-03-27 |

	# Sorting to do 
  #@Unreconciled_TC_
  #Scenario Outline: Validate the functionality of sorting data in ascending and descending order for Unreconciled button screen.
    #Given User is on Reconciliation "<TestcaseID>" "<Description>"
    #And User click on Dashboard
    #And User click on Accounts
    #And User click on Date and select "<Date>"
    #When User click on Unreconciled Tile
    #And User click on
    #And User click on the sorting on Reconcilied and click on Insistute Name "<sort>"
#
    #Examples: 
      #| TestcaseID         | Description                      | Date       |
      #| Unreconciled_TC_06 | Validating sorting functionality | 2019-03-27 |

  @TC_02_03_04_16
  Scenario Outline: Validate Filter by, search and Download functionality for Unreconciled
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    # And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User click in Download button on Unreconciled record
    And User click on Filter by and select Transaction no and type Transaction and click on search button and verify
    And User click on Filter by and select Taxpayer and type Taxpayer Name  and click on search button and verify
    And User click on Filter by "<Filter>" and type invalid data "<invalid>" and clik on search buttom
    Then User see mess "<mess>"

    Examples: `
      | TestcaseID                   | Description                                  | Date       | Filter                | invalid   | mess             |
      | UnReconciliation_02_03_04_16 | Filter by, search and Download functionality | 2019-03-16 | drp_FilterBy_Taxpayer | 123ABC789 | No records found |

  @TC_08_10_13
  Scenario Outline: Validate that the tax officer should not perform Update operation on error record with invalid data(DOC No and NITVA),e-Filing payment record given by bank on Unreconciled button and Cancel functionality
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    # And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User see the status is Error
    And User click on Edit pencil
    And User click on Update button and see mess "<mess>"
    And User click on Edit pencil
    And User click on Cancel button and pop up gets closed
    And User click on Edit pencil
    And User type "Doc01" and "101201"
    And User click on Cancel button and pop up gets closed
    And User click on Edit pencil
    And User enter Doc No and enter invalid Nitva no "<InNitva>" in popup and click on Update button
    And User see the pop up message "<popMess>"
    And User click on Edit pencil
    And User enter Invalid Doc No "<InDoc>" and valid NITVA no in popup and click on Update button
    And User see the pop up message "<popMess>"

    Examples: 
      | TestcaseID                | Description                                                                                       | Date       | mess             | mess              | InNitva | InDoc | popMess                    | Doc_Special | Nitva_Special |
      | UnReconciliation_08_10_13 | Validate Cancel functionality , Update on error record with invalid data and check payment record | 2019-03-20 | No records found | NITVA is required |   01230 | Doc11 | Doc No. and NITVA mismatch | @!@@%&^*    | @!@@%&^*      |

  @TC_09_17
  Scenario Outline: Validate that the tax officer resolve error record with valid data(DOC No/NITVA) and functionality of check box and error records should be converted to reconcile
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    # And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User click on Edit pencil
    And User Enter Valid Doc No and Valid Nitva no and click on Update button
    Then User see mess "<m1>" for UnReconciliation
    And User see Reprocess button is disable
    When User again click on Check box
    Then User see Reprocess button is enabled
    And User click on Reprocess button and see Processed Successfully and click on Ok button
    And User click on Reconciled Tile
    And User click on Filter by "<Filter>" and type data and click on search button and verify the Status is Processed

    Examples: 
      | TestcaseID             | Description              | Date       | Filter            | m1                               | mess             | mess              | InNitva | popMes                     | Doc_Special | Nitva_Special |
      | UnReconciliation_09_17 | Calculation Unreconciled | 2019-03-13 | drp_FilterBy_Tran | Transaction updated successfully | No records found | NITVA is required |   01230 | Doc No. and NITVA mismatch | @!@@%&^*    | @!@@%&^*      |

  @Unreconciled_TC_05
  Scenario Outline: Validate the functionality of Date picker.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    When User click on Unreconciled Tile
    And User see Today Date is displayed
    Then User click on Date and see today day is selected
    When User see future date is disable
    Then User see previous date is enable and select the date

    Examples: 
      | TestcaseID         | Description                             |
      | Unreconciled_TC_05 | Validating functionality of Date picker |

  # Payment
  @TC_12_14
  Scenario Outline: Validate the error records should be converted to reconcile in case of Overpayment and tax officer resolve Warning record.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    #And User click on Date and select "<Date>"
    When User click on Unreconciled Tile
    And User click on Filter Transaction No and type overpayment Transactrion no and click on search button
    And User see Reason is "<Reason>"
    And User see Status is "<Status>"
    And User get the user get Transaction number
    When User again click on Check box
    And User click on Reprocess button and see Processed Successfully and click on Ok button
    And User click on Reconciled Tile
    Then User click on Filter by "<Filter>" and type data and click on search button and verify the Status is Processed for Overpayment

    Examples: 
      | TestcaseID             | Description              | Date       | Reason      | Filter            | Status  |
      | UnReconciliation_12_14 | Calculation Unreconciled | 2019-03-06 | Overpayment | drp_FilterBy_Tran | Warning |

  @TC_15
  Scenario Outline: Validate the pagination functionality for Unreconciled button menu.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    When User click on Unreconciled Tile
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID          | Description                | Period        | ClickPage       | CheckPage       | option          |
      | UnReconciliation_01 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
      | UnReconciliation_02 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
      | UnReconciliation_03 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
      | UnReconciliation_04 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
      | UnReconciliation_05 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
      | UnReconciliation_06 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |

  #######################################--Total Amount--##################################################################
  @Total_Amount_Unreconciled
  Scenario Outline: Validate the functionality of Total Amount Field.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User calculate Total Amount addition of Reconciled and Unreconciled

    Examples: 
      | TestcaseID                 | Description              |
      | Reconciled_Total_Amount_01 | Calculation Unreconciled |

  @Total_Amount_Reconciled
  Scenario Outline: Validate the change in Reconciliation screen when current date is change to previous date.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    And User click on Date and select "<Date>"
    Then User calculate Total Amount addition of Reconciled and Unreconciled

    Examples: 
      | TestcaseID                 | Description               | Date       |
      | Reconciled_Total_Amount_02 | Calculation of Reconciled | 2019-03-27 |

  #######################################################################################################################
  #######################################--Reconciled--##################################################################
  @Reconciled_TC_02_03_04
  Scenario Outline: Validate filter by functionality for Reconciled Screen and Search functionality with respect to Filter
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    And User click FilterBy on Reconciled "<Filter>"
    And User Type Doc No and click on search button
    Then User verify Doc no
    And User click on FilterBy Nitva and verify NITVA no
    And User click FilterBy on Reconciled "<Filter1>"
    And User enter invalid data "<InvalidData>" and click on search button and verify mess No records found

    Examples: 
      | TestcaseID             | Description                                         | Filter  | Filter1 | InvalidData |
      | Reconciled_TC_02_03_04 | Verifiying filter functioality for Doc No and NITVA | Doc. No | NITVA   | JamBond007  |

  @Reconciled_TC_07_11
  Scenario Outline: Validate the functionality of button navigation of Unreconciled button with respect to Reconciled button and Download button functionality for Reconciled records.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    And User click on download button and verify on Reconciled
    And User click on Reconciled and verify status
    And User click on Unreconciled and verify navigation Reprocess is disable

    Examples: 
      | TestcaseID          | Description                                              |
      | Reconciled_TC_07_11 | Validating navigation of tile and Download functionality |

  @Reconciled_TC_08
  Scenario Outline: Validate the e-Filing payment record given by bank on Reconciled button.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    And User click FilterBy on Reconciled "<Filter>"
    And User click FilterBy Select Doc Type on Reconciled "<SubFilter>" and click on search button
    Then User see the status Processed

    Examples: 
      | TestcaseID       | Description                         | Filter        | SubFilter |
      | Reconciled_TC_08 | User verify e-Filing payment record | Document Type | e-Filing  |

  @Reconciled_TC_05
  Scenario Outline: Validate the functionality of Date picker.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    And User see Today Date is displayed
    Then User click on Date and see today day is selected
    When User see future date is disable
    Then User see previous date is enable and select the date

    Examples: 
      | TestcaseID       | Description                                        |
      | Reconciled_TC_05 | Validating functionality of Date picker Reconciled |

  @Reconciled_TC_10
  Scenario Outline: Validate the pagination functionality for Reconciled button menu.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID         | Description                | Period        | ClickPage       | CheckPage       | option          |
      | Reconciled_TC_10_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
      | Reconciled_TC_10_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
      | Reconciled_TC_10_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
      | Reconciled_TC_10_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
      | Reconciled_TC_10_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
      | Reconciled_TC_10_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |

  @Payment_Receipt_Reconcilied_09
  Scenario Outline: Validate Tax Payer ,nitva ,transaction no and institute name on payment recipt
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled Tile
    Then User click on Processed and verify Recipt in new tab

    Examples: 
      | TestcaseID                    | Description                                                                       |
      | Reconciled_Payment_Receipt_01 | User verify Tax Payer ,nitva ,transaction no and institute name on payment recipt |
