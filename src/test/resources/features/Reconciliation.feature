Feature: User is on Reconciliation Page

  @Total_Amount
  Scenario Outline: Validate the functionality of Total Amount Field.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User calculate Total Amount addition of Reconciled and Unreconciled
    And User click on Date and select "<Date>"

    Examples: 
      | TestcaseID     | Description                                  | Date       |
      | Reconciliation | Calcuylation of Recopnciled and Unreconciled | 2019-02-27 |

  Scenario Outline: Validate the functionality of Total Amount Field.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Date and select "<Date>"
    Then User calculate Total Amount addition of Reconciled and Unreconciled

    Examples: 
      | TestcaseID     | Description                                  | Date       |
      | Reconciliation | Calcuylation of Recopnciled and Unreconciled | 2019-02-27 |

  @Reconciled_TC_02_03
  Scenario Outline: Validate filter by functionality for Reconciled Screen
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click FilterBy on Reconciled "<Filter>"
    And User enter value on Type here "<Data>" and click on search button
    Then User verify the result "<Data>"

    Examples: 
      | TestcaseID     | Description                        | Filter             | Data              |
      | Reconciliation | User click on Doc No               | drp_FilterBy_Recon | FT19022600007     |
      | Reconciliation | User clicki on NITVA               | drp_FilterBy_Recon | 20190219030157939 |
      | Reconciliation | Calcuylation of Transaction Number | drp_FilterBy_Recon | FT19022600007     |

  @Reconciled_TC_04_11_07
  Scenario Outline: Validate the Search functionality with respect to Filter by option and Download button functionality for Reconciled records.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click FilterBy on Reconciled "<Filter>"
    And User enter value on Type here "<Data>" and click on search button
    Then User verify the result "<Data>"
    And User click on download button and verify on Reconciled
    And User enter invalid data "<InvalidData>" and click on search button and verify mess No records found
    And User click on Reconciled and verify status
    And User click on Unreconciled and verify navigation Reprocess is disable

    Examples: 
      | TestcaseID     | Description                                   | Filter             | Data              | InvalidData |
      | Reconciliation | User verify Search and download functionality | drp_FilterBy_Recon | 20190219030157939 | JamBond007  |

  @Reconciled_TC_08
  Scenario Outline: Validate the e-Filing payment record given by bank on Reconciled button.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on Reconciled tab and see the status Processed

    Examples: 
      | TestcaseID     | Description                                   | Filter             | Data              | InvalidData |
      | Reconciliation | User verify Search and download functionality | drp_FilterBy_Recon | 20190219030157939 | JamBond007  |

  @Reconciled_TC_10
  Scenario Outline: Validate the pagination functionality for Reconciled button menu.
    Given User is on Reconciliation "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Accounts
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID                 | Description                | Period        | ClickPage       | CheckPage       | option          |
      | FX_Management_Officer_09_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
      | FX_Management_Officer_09_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
      | FX_Management_Officer_09_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
      | FX_Management_Officer_09_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
      | FX_Management_Officer_09_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
      | FX_Management_Officer_09_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |
