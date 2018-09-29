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
@AutoPopulated @Editable
Feature: A re-assessment is a correction or adjustment to assessment done to a taxpayer declaration

  @Manualtc2 @ManaulReassessment @LiabilityCalculation @Overview
  Scenario Outline: Validate Additional Liability Calculated for VAT on Sales VAT on Purchase Utilised Credit Late Fees Interest penalty
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Observes Amount of Declaration VatonSales"<DVSales>"VatonPurchase"<DVPurchase>"UtilisedCredit"<DUCredit>"Latefee"<Dltfee>"Interest"<Dinterest>"Penalty"<Dpenalty>"Total"<Dtotal>"Assessed VatonSales"<AVSales>"VatonPurchase"<AVPurchase>"UtilisedCredit"<AUCredit>"Latefee"<Altfee>"Interest"<Ainterest>"Penalty"<Apenalty>"Total"<Atotal>" Reasessed VatonSales"<RVSales>"VatonPurchase"<RVPurchase>"UtilisedCredit"<RUCredit>"Latefee"<Rltfee>"Interest"<Rinterest>"Penalty"<Rpenalty>"Total"<Rtotal>"

    Examples: 
      | Test Case Id                                | Description                                                                                                          | month   | year | nitva             | DVSales | DVPurchase | DUCredit | Dltfee | Dinterest | Dpenalty | Dtotal | AVSales | AVPurchase | AUCredit | Altfee | Ainterest | Apenalty | Atotal    | RVSales | RVPurchase | RUCredit | Rltfee | Rinterest | Rpenalty | Rtotal    |
      | DRC_ATC_ReAssessmentLiabilityCalculation_01 | Validate Additional Liability Calculated for VAT on Sales VAT on Purchase Utilised Credit Late Fees Interest penalty | January | 2018 | 20180827123258904 |    1000 |          0 |        0 |      0 |         0 |        0 |  10000 |       0 |          0 |        0 | 250000 |     82.41 |        0 | 250082.41 |       0 |          0 |        0 | 250000 |   1534.48 |        0 | 251534.48 |

  @Manualtc3456 @ManaulReassessment @LiabilityCalculation
  Scenario Outline: Validate the Additional-liability
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Observes Amount of Declaration VatonSales"<DVSales>"VatonPurchase"<DVPurchase>"UtilisedCredit"<DUCredit>"Latefee"<Dltfee>"Interest"<Dinterest>"Penalty"<Dpenalty>"Total"<Dtotal>"Assessed VatonSales"<AVSales>"VatonPurchase"<AVPurchase>"UtilisedCredit"<AUCredit>"Latefee"<Altfee>"Interest"<Ainterest>"Penalty"<Apenalty>"Total"<Atotal>" Reasessed VatonSales"<RVSales>"VatonPurchase"<RVPurchase>"UtilisedCredit"<RUCredit>"Latefee"<Rltfee>"Interest"<Rinterest>"Penalty"<Rpenalty>"Total"<Rtotal>"
    And Enters in "<ReassesmentVATon>" "<amount>" and Additional Liability must be"<ALamount>"

    Examples: 
      | Test Case Id                                | Description                                                                                                              | month | year | nitva | DVSales | DVPurchase | DUCredit | Dltfee | Dinterest | Dpenalty | Dtotal | AVSales | AVPurchase | AUCredit | Altfee | Ainterest | Apenalty | Atotal | RVSales | RVPurchase | RUCredit | Rltfee | Rinterest | Rpenalty | Rtotal | ReassesmentVATon | amount | ALamount |
      | DRC_ATC_ReAssessmentLiabilityCalculation_02 | Validate the Additional-liability  when Reassessed  is greater than  assessed  in vat on sales while Manual Assessment . |       |      |       |         |            |          |        |           |          |        |         |            |          |        |           |          |        |         |            |          |        |           |          |        | RSales           |        |          |
      | DRC_ATC_ReAssessmentLiabilityCalculation_03 | Validate the Additional Liability when assessed is greater than Reassessed in VAT on Purchase.                           |       |      |       |         |            |          |        |           |          |        |         |            |          |        |           |          |        |         |            |          |        |           |          |        | Rpurchase        |        |          |
      | DRC_ATC_ReAssessmentLiabilityCalculation_04 | Validate the Additional-liability  when reassessed  is less than  assessed  in vat on sales while Manual Assessment.     |       |      |       |         |            |          |        |           |          |        |         |            |          |        |           |          |        |         |            |          |        |           |          |        | Rsales           |        |          |
      | DRC_ATC_ReAssessmentLiabilityCalculation_05 | Validate the Additional-liability  when Reassessed  is less than  assessed  in vat on Purchase while Manual Assessment . |       |      |       |         |            |          |        |           |          |        |         |            |          |        |           |          |        |         |            |          |        |           |          |        | Rpurchase        |        |          |

  @Manualtc7 @ManaulReassessment @LiabilityCalculation @InterestAmount
  Scenario Outline: Validate the Interest Amount when the Total Liabillity  calculated is 0.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And the Interest Amount when the Total Liabillity  calculated is "0".

    Examples: 
      | Test Case Id                                | Description                                                              | month | year | nitva |
      | DRC_ATC_ReAssessmentLiabilityCalculation_06 | Validate the Interest Amount when the Total Liabillity  calculated is 0. |       |      |       |

  @Manualtc8 @ManaulReassessment @LiabilityCalculation @UtilisedCredit
  Scenario Outline: Validate the Utilised Credit on Assessed List Page under Reassessed column.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And The Utilised Credit should be non-Editable Reimbursement of previous Period and it is Utilised by the tax payer while E-filing"<utilcredit>".
    And Utilised Credit should be same under Reassesed, Assessed and  e-Declaration "<utilcredit>"

    Examples: 
      | Test Case Id                                | Description                                                                 | month | year | nitva | utilcredit |
      | DRC_ATC_ReAssessmentLiabilityCalculation_07 | Validate the Utilised Credit on Assessed List Page under Reassessed column. |       |      |       |          0 |

  @Manualtc9 @ManaulReassessment @LiabilityCalculation @LateFee @user @Individual @LegalEntity @Hold
  Scenario Outline: Validate the Late Fees field on Liability Calculation Page under Reassessed column.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Late Fees "<Rlatefee>"field on Liability Calculation Page for "<efiling>" under Reassessed column.

    Examples: 
      | Test Case Id                                | Description                                                                                                  | month | year | nitva | Rlatefee | efiling |
      | DRC_ATC_ReAssessmentLiabilityCalculation_08 | Validate the Late Fees field on Liability Calculation Page under Reassessed column.(e-filed before due date) |       |      |       |        0 | before  |
      | DRC_ATC_ReAssessmentLiabilityCalculation_27 | Validate the Late Fees field on Liability Calculation Page under Reassessed column. (e-filed after due date) |       |      |       |   250000 | after   |

  @Manualtc10111213 @ManaulReassessment @LiabilityCalculation @Interest @Hold
  Scenario Outline: Validate the Interest field on Liability calculation Page under Reassessed column.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Interest "<Rinterest>"field on Liability Calculation Page under Reassessed column.

    Examples: 
      | Test Case Id                                | Description                                                                                                                                | month | year | nitva | Rinterest |
      | DRC_ATC_ReAssessmentLiabilityCalculation_09 | Validate the Interest field on Liability calculation Page under Reassessed column.                                                         |       |      |       |           |
      | DRC_ATC_ReAssessmentLiabilityCalculation_10 | Validate the Interest field on Liability Calculation Page, if user have paid the VAT Amount after the Reassessment done.                   |       |      |       | hold      |
      | DRC_ATC_ReAssessmentLiabilityCalculation_11 | Validate the Interest field on Liability Calculation Page , if user had not paid the Interest amount for 1 month is not paid.              |       |      |       | hold      |
      | DRC_ATC_ReAssessmentLiabilityCalculation_12 | Validate the Interest field on Manual Assessment Page , if user had not paid the Interest amount for 2 or more than 2 months are not paid. |       |      |       | hold      |

  @Manualtc14 @ManaulReassessment @LiabilityCalculation @Penalty
  Scenario Outline: Validate the Penalty field on Manual Assessment Page.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Penalty "<RPenalty>"field on Liability Calculation Page under Reassessed column Message "<msg>" should be shown for Penalty Amount should greater than the Total Liability

    Examples: 
      | Test Case Id                                | Description                                                                                                                                                     | month | year | nitva | RPenalty         | msg                                                           |
      | DRC_ATC_ReAssessmentLiabilityCalculation_13 | Validate the Penalty field (by default value)on Liability Calculation Page under Reassessed column.                                                             |       |      |       |                0 |                                                               |
      | DRC_ATC_ReAssessmentLiabilityCalculation_14 | Validate the Penalty field (Entered amount should be displayed)on Liability Calculation Page under Reassessed column.                                           |       |      |       |            34543 |                                                               |
      | DRC_ATC_ReAssessmentLiabilityCalculation_15 | Validate the Penalty field (Error Message Penalty Amount should not be greater than the Total Liability) on Liability Calculation Page under Reassessed column. |       |      |       | 3453445345345345 | Penalty Amount should not be greater than the Total Liability |

  @Manualtc15 @ManaulReassessment @LiabilityCalculation @EdeclarationTotalAmount @Amount
  Scenario Outline: Validate the Total of  e-Declaration Amount.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And e-Declaration total "<Etotal>"should be calculated by: VAT on sales - VAT on Purchase - Utilised credit

    Examples: 
      | Test Case Id                                | Description                                  | month | year | nitva | Etotal |
      | DRC_ATC_ReAssessmentLiabilityCalculation_16 | Validate the Total of  e-Declaration Amount. |       |      |       |        |

  @Manualtc16 @ManaulReassessment @LiabilityCalculation @ReassessedTotalAmount @Amount
  Scenario Outline: Validate the Total of  Reassessed Amount.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Assessed Total "<Atotal>"should be calculated by VAT on Sales - VAT on Purchase + Utilised Credit + Late fees + Interest + Penalty

    Examples: 
      | Test Case Id                                | Description                               | month | year | nitva | Atotal |
      | DRC_ATC_ReAssessmentLiabilityCalculation_17 | Validate the Total of  Reassessed Amount. |       |      |       |        |

  @Manualtc17 @ManaulReassessment @LiabilityCalculation @ReassessedTotalAmount @Amount
  Scenario Outline: Validate the Total of  Reassessed Amount.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Assessed Total "<Atotal>"should be calculated by VAT on Sales - VAT on Purchase + Utilised Credit + Late fees + Interest + Penalty

    Examples: 
      | Test Case Id                                | Description                               | month | year | nitva | Atotal |
      | DRC_ATC_ReAssessmentLiabilityCalculation_18 | Validate the Total of  Reassessed Amount. |       |      |       |        |

  @Manualtc18 @ManaulReassessment @LiabilityCalculation @Button @Previous
  Scenario Outline: Validate Previous button functionality
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Click on Previous button user should be on Manual Assessment (Sales and Purchase Summary)
    And Click on Next button in Manual Assessment (Sales and Purchase Summary) user should be on Liability Calculation

    Examples: 
      | Test Case Id                                | Description                            | month | year | nitva |
      | DRC_ATC_ReAssessmentLiabilityCalculation_19 | Validate Previous button functionality |       |      |       |

  @Manualtc19 @ManaulReassessment @LiabilityCalculation @Button @Next
  Scenario Outline: Validate Next button functionality
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Click on Next button user should be navigated to payment due page

    Examples: 
      | Test Case Id                                | Description                        | month | year | nitva |
      | DRC_ATC_ReAssessmentLiabilityCalculation_20 | Validate Next button functionality |       |      |       |

  @Manualtc20 @ManaulReassessment @LiabilityCalculation @Autopopulated @E-Declaration
  Scenario Outline: Validate amount displaying under e-Declaration column (VAT on Sales, VAT on Purchase, Utilised Credit, Late Fees, Interest and penalty)are as per calculations done on e-Filing.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Observe the e-Declaration Amount VAT on Sales"<DVsales>"VAT on Purchase"<DVpurchase>"Utilised Credit"<Dutilcredit>"LateFee"<Dltfee>"Interest"<Dinterest>"Penalty"<Dpenalty>"

    Examples: 
      | Test Case Id                                | Description                        | month | year | nitva | DVsales | DVpurchase | Dutilcredit | Dltfee | Dinterest | Dpenalty |
      | DRC_ATC_ReAssessmentLiabilityCalculation_21 | Validate Next button functionality |       |      |       |         |            |             |        |           |          |

  @Manualtc21 @ManaulReassessment @LiabilityCalculation @Autopopulated @Assessment
  Scenario Outline: Validate amount displaying under Reassessed column (VAT on Sales, VAT on Purchase, Utilised Credit, Late Fees, Interest and penalty)are auto populated based on Assessment done previously.
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Observe the Reassessed Amount VAT on Sales"<RVsales>"VAT on Purchase"<RVpurchase>"Utilised Credit"<Rutilcredit>"LateFee"<Rltfee>"Interest"<Rinterest>"Penalty"<Rpenalty>"

    Examples: 
      | Test Case Id                                | Description                                                                                                                                                                                 | month | year | nitva | RVsales | RVpurchase | Rutilcredit | Rltfee | Rinterest | Rpenalty |
      | DRC_ATC_ReAssessmentLiabilityCalculation_22 | Validate amount displaying under Reassessed column (VAT on Sales, VAT on Purchase, Utilised Credit, Late Fees, Interest and penalty)are auto populated based on Assessment done previously. |       |      |       |         |            |             |        |           |          |

  @Manualtc22 @ManaulReassessment @LiabilityCalculation @Autopopulated @ReAssessment @Editable @FieldLevelValidation
  Scenario Outline: Validate the editable elements on Liability Calculation page under Reassessed Column:- VAT on Sales- VAT on Purchase - Penalty
    Given The tax officer has logged in and has done Manual Assessment of the taxpayer"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then officer is on Reassessment Liability Calculation
    And Enters the Reassessed Amount VAT on Sales"<RVsales>"VAT on Purchase"<RVpurchase>"Utilised Credit"<Rutilcredit>"LateFee"<Rltfee>"Interest"<Rinterest>"Penalty"<Rpenalty>" "<msg>" should be shown
    And should be on Reassessment Liability Calculation

    Examples: 
      | Test Case Id                                | Description                                                                                                                    | month | year | nitva | RVsales          | RVpurchase       | Rutilcredit      | Rltfee           | Rinterest        | Rpenalty         | msg                        |
      | DRC_ATC_ReAssessmentLiabilityCalculation_23 | Validate the editable elements on Liability Calculation page under Reassessed Column:- VAT on Sales- VAT on Purchase - Penalty |       |      |       | @$%^$%^$%^       | @$%^$%^$%^       | @$%^$%^$%^       | @$%^$%^$%^       | @$%^$%^$%^       | @$%^$%^$%^       |                            |
      | DRC_ATC_ReAssessmentLiabilityCalculation_24 | Validate the editable elements on Liability Calculation page under Reassessed Column:- VAT on Sales- VAT on Purchase - Penalty |       |      |       | 1 1              | 1 1              | 1 1              | 1 1              | 1 1              | 1 1              |                            |
      | DRC_ATC_ReAssessmentLiabilityCalculation_25 | Validate the editable elements on Liability Calculation page under Reassessed Column:- VAT on Sales- VAT on Purchase - Penalty |       |      |       | 1234567891023456 | 1234567891023456 | 1234567891023456 | 1234567891023456 | 1234567891023456 | 1234567891023456 | Only 15 character allowed! |
      | DRC_ATC_ReAssessmentLiabilityCalculation_26 | Validate the editable elements on Liability Calculation page under Reassessed Column:- VAT on Sales- VAT on Purchase - Penalty |       |      |       |                1 |                2 |                2 |                2 |                2 |                2 | Only 15 character allowed! |
