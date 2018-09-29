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
@ManaulReassessment @RPaymentDue @Depend @EFD @RLiabilityCalculation @Amount
Feature: Displays Detailed summary of  the re-assessment including VAT liability, late fees, interest, credits and penalty. The column Paid shows any payment done against this period.
  The column Net Payable will show the difference between the amount Re-Assessed versus any Payment done for this period and the new Net Payable to pay

  @Manualtc2 @ManaulReassessment @PaymentDue
  Scenario Outline: Validate Reassessed Amount for VAT liability.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Observe the VAT Liability field in Reassessed Column Vat Liability = Vat on sales "<RvatonSales>" - Vat on purchase"<Rvatonpurchase>".

    Examples: 
      | Test Case Id                      | Description                                   | month   | year | nitvano           | RvatonSales | Rvatonpurchase |
      | DRC_ATC_ReAssessmentPaymentDue_02 | Validate Reassessed Amount for vat liability. | January | 2018 | 20180827123258904 |           0 |              0 |

  @Manualtc3 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Hold @User @LegalEntity @NaturalPerson @UtilisedCredit @Amount
  Scenario Outline: Validate Reassessed Amount for Utilised credit.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Utilised credit"<Rutilcredit>" should be re-imbursement amount utilised  and same as that calculated while vat liability calculation on Reassessed list page.

    Examples: 
      | Test Case Id                      | Description                                    | month | year | nitvano | Rutilcredit |
      | DRC_ATC_ReAssessmentPaymentDue_03 | Validate Reassessed Amount for Utilised credit |       |      |         |             |

  @Manualtc4 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Users @LegalEntity @NaturalPerson @hold @LateFee @Amount
  Scenario Outline: Validate Reassessed Amount for Late fees
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Late fees "<Rlatefee>"should be calculated on Late e-filing  and same as that calculated while vat liability calculation for "<Category>"

    Examples: 
      | Test Case Id                      | Description                                                 | month | year | nitvano | Category | Rlatefee |
      | DRC_ATC_ReAssessmentPaymentDue_04 | Validate Reassessed Amount for Late fees for Natural Person |       |      |         | Natural  |   250000 |
      | DRC_ATC_ReAssessmentPaymentDue_05 | Validate Reassessed Amount for Late fees for Legal Entity   |       |      |         | Legal    |   500000 |

  @Manualtc5 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Interest @Amount
  Scenario Outline: Validate Assessed Amount for Interest.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Interest"<Rinterest>" should be calculated on Late Payment and same as that calculated on vat liability calculation page  on Reassessed list page.

    Examples: 
      | Test Case Id                      | Description                            | month | year | nitvano | Rinterest |
      | DRC_ATC_ReAssessmentPaymentDue_06 | Validate Assessed Amount for Interest. |       |      |         |           |

  @Manualtc6 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Penalty @Amount
  Scenario Outline: Validate Assessed Amount for Penalty
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Penalty "<Rpenalty>"should be calculated on if difference found while Reassessment in  assessed amount and Reassessment and should be  same as that calculated on vat  liability calculation page on Reassessed list page.

    Examples: 
      | Test Case Id                      | Description                          | month | year | nitvano | Rpenalty |
      | DRC_ATC_ReAssessmentPaymentDue_07 | Validate Assessed Amount for Penalty |       |      |         |          |

  @Manualtc7 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Total @Amount
  Scenario Outline: Validate Total Amount of Reassessed
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Total Amount "<Rtotal>"for Reassessed should be calculated as Vat liability + utilised credit + late fees + Interest + Penalty.

    Examples: 
      | Test Case Id                      | Description                         | month | year | nitvano | Rtotal |
      | DRC_ATC_ReAssessmentPaymentDue_08 | Validate Total Amount of Reassessed |       |      |         |        |

  @Manualtc8 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Paid @Amount
  Scenario Outline: Validate paid amount for vat liability.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Paid amount "<Ramount>"should be the amount paid by user after e-filing is done for the particular period

    Examples: 
      | Test Case Id                      | Description                             | month | year | nitvano | Ramount |
      | DRC_ATC_ReAssessmentPaymentDue_09 | Validate paid amount for vat liability. |       |      |         |         |

  @Manualtc9 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Paid @Amount @Hold @UtilisedCredit
  Scenario Outline: Validate paid amount for Utilised Credit.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Utilised credit "<Rutilcredit>"should be same as in Reassessed amount  as these amount is the reimbursement amount used by the tax payer and  it should not change for the particular period.

    Examples: 
      | Test Case Id                      | Description                               | month | year | nitvano | Rutilcredit |
      | DRC_ATC_ReAssessmentPaymentDue_10 | Validate paid amount for Utilised Credit. |       |      |         |             |

  @Manualtc10 @ManaulReassessment @PaymentDue @Paid @Amount @Hold @LateFee
  Scenario Outline: Validate paid amount for Late fee
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Amount of the Late fees for current period should be zero"0" as the amount can only be paid after raising notice for the current period.

    Examples: 
      | Test Case Id                      | Description                       | month | year | nitvano |
      | DRC_ATC_ReAssessmentPaymentDue_11 | Validate paid amount for Late fee |       |      |         |

  @Manualtc11 @ManaulReassessment @PaymentDue @Paid @Amount @Hold @LateFee @BetweenAssessmentReassessment
  Scenario Outline: Validate paid amount for Late fees when Amount is paid between Assessment and Reassessment duration.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Paid amount "<Rpamount>"should get displayed in Paid column for late fee field

    Examples: 
      | Test Case Id                      | Description                       | month | year | nitvano | Rpamount |
      | DRC_ATC_ReAssessmentPaymentDue_12 | Validate paid amount for Late fee |       |      |         |          |

  #####
  @Manualtc12 @ManaulReassessment @PaymentDue @DependonRLiabilityCalculation @Paid @Amount @Hold @Interest @DependsOnPayment
  Scenario Outline: Validate paid amount for Interest
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Paid amount "<Rpamount>"should get displayed in Paid column for Interest field

    Examples: 
      | Test Case Id                      | Description                       | month | year | nitvano | Rpamount |
      | DRC_ATC_ReAssessmentPaymentDue_13 | Validate paid amount for Interest |       |      |         |          |

  @Manualtc13 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @Paid @Amount @Hold @BetweenAssessmentReassessment @DependsOnPayment
  Scenario Outline: Validate paid amount for Interest when Amount is paid between Assessment and Reassessment duration.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Paid amount "<Rpamount>"should get displayed in Paid column for Interest field

    Examples: 
      | Test Case Id                      | Description                                                                                         | month | year | nitvano | Rpamount |
      | DRC_ATC_ReAssessmentPaymentDue_14 | Validate paid amount for Interest when Amount is paid between Assessment and Reassessment duration. |       |      |         |          |

  #####
  @Manualtc14 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @Paid @Amount @Hold @DependsOnPayment
  Scenario Outline: Validate the paid amount for Penalty.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Paid amount"<Rpamount>" should get displayed in Paid column for Penalty field

    Examples: 
      | Test Case Id                      | Description                           | month | year | nitvano | Rpamount |
      | DRC_ATC_ReAssessmentPaymentDue_15 | Validate the paid amount for Penalty. |       |      |         |          |

  @Manualtc15 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @Paid @Amount @Hold @BetweenAssessmentReassessment @DependsOnPayment
  Scenario Outline: Validate the paid amount for Penalty  when Amount is paid between Assessment and Reassessment duration.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Paid amount"<Rpamount>" should get displayed in Paid column for Penalty field

    Examples: 
      | Test Case Id                      | Description                                                                                             | month | year | nitvano | Rpamount |
      | DRC_ATC_ReAssessmentPaymentDue_16 | Validate the paid amount for Penalty  when Amount is paid between Assessment and Reassessment duration. |       |      |         |          |

  @Manualtc16 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @NetPayable @Amount @Hold @Depend @DependsOnVATLiability @DependsOnUtilisedCredit @DependsOnLateFee @DependsOnInterest @DependsOnPenalty
  Scenario Outline: Validate the Net Payable Amount for :Vat liability Utilised Credit Late fees Interest Penalty.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And observe the net payable amount for :Vat liability"<NVatliability>", UtilisedCredit"<Nutilcredit>", Latefees"<Nlatefee>", Interest"<Ninterest>", Penalty"<Npenalty>" and should be calculated :net payable = reassessed amount  - paid amount

    Examples: 
      | Test Case Id                      | Description                                                                                    | month | year | nitvano | NVatliability | Nutilcredit | Nlatefee | Ninterest | Npenalty |
      | DRC_ATC_ReAssessmentPaymentDue_17 | Validate the Net Payable Amount for :Vat liability Utilised Credit Late fees Interest Penalty. |       |      |         |               |             |          |           |          |

  @Manualtc17 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @NetPayable @Amount @Hold
  Scenario Outline: Validate the total Paid Amount .
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And observe the total amount of Paid Column & Total Amount"<PTamount>" for Paid should be calculated as Vat liability + utilised credit + late fees + Interest + Penalty.

    Examples: 
      | Test Case Id                      | Description                     | month | year | nitvano | PTamount |
      | DRC_ATC_ReAssessmentPaymentDue_18 | Validate the total Paid Amount. |       |      |         |          |

  @Manualtc18 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @NetPayable @Amount @Hold
  Scenario Outline: Validate the total Net Payable.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Observe the net payable amount"<NPtotal>" should be calculated as total Reassessed - total paid.

    Examples: 
      | Test Case Id                      | Description                     | month | year | nitvano | NPtotal |
      | DRC_ATC_ReAssessmentPaymentDue_19 | Validate the total Net Payable. |       |      |         |         |

  @Manualtc19 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @Button @Previous
  Scenario Outline: Validate the Previous Button
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Click on Previous Button e-Declaration Reconciliation page should get displayed for"<month>""<year>" that particular period.
    And Click on Next button on Liability calculation page Payment Due page should get displayed.

    Examples: 
      | Test Case Id                      | Description                  | month   | year | nitvano           |
      | DRC_ATC_ReAssessmentPaymentDue_20 | Validate the Previous Button | January | 2018 | 20180827123258904 |

  @Manualtc20 @ManaulReassessment @PaymentDue @dependonRLiabilityCalculation @Button @RaiseNotice @Hold
  Scenario Outline: Validate the Previous Button
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation Payment Due
    And Click on Raise Notice Button And Notice of Reassessment should be generated for the Tax Payer for that particular period The Reassessment should be communicated to the taxpayer via e-services portal and email.

    Examples: 
      | Test Case Id                      | Description                  | month | year | nitvano |
      | DRC_ATC_ReAssessmentPaymentDue_21 | Validate the Previous Button |       |      |         |
