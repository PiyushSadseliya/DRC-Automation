#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario:
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
@tag
Feature: I want to calculate the user liability after the manaul assessment

  @t2
  Scenario Outline: The officer want to validate the additional liability page autopopulated and editable fields
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    And the e-declartion data must be same as efiling with"<EVATonSales>""<EVATonPurchase>""<EUtilisedCredit>""<ElateFee>""<EInterest>""<EPenalty>""<ETotal>"
    And The Assessed data must be same as from EFD"<AVATonSales>""<AVATonPurchase>""<AUtilisedCredit>""<AlateFee>""<AInterest>""<APenalty>""<ATotal>"
    Then The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                                         | month   | year | nitvano           | EVATonSales | EVATonPurchase | EUtilisedCredit | ElateFee | EInterest | EPenalty | ETotal | AVATonSales | AVATonPurchase | AUtilisedCredit | AlateFee | AInterest | APenalty | ATotal | LVATonSales | LVATonPurchase | LUtilisedCredit | LlateFee | LInterest | LPenalty | LTotal |
      | DRC_ATC_ManualAssessmentLiability_01 | Validate the Manual Assessment Liablity calculation | January | 2018 | 20180705073851634 |         550 |             90 |               0 |        0 |         0 |        0 |    460 |         622 |          57392 |               0 |      500 |         0 |        0 | -56270 |          72 |          57302 |               0 |      500 |         0 |        0 | -56730 |

  @tc3456
  Scenario Outline: The officer want to validate the additional liability
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    And the e-declartion data must be same as efiling with"<EVATonSales>""<EVATonPurchase>""<EUtilisedCredit>""<ElateFee>""<EInterest>""<EPenalty>""<ETotal>"
    And The Assessed data must be same as from EFD"<AVATonSales>""<AVATonPurchase>""<AUtilisedCredit>""<AlateFee>""<AInterest>""<APenalty>""<ATotal>"
    Then The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                                                                                      | type     | compare | month   | year | nitvano           | EVATonSales | EVATonPurchase | EUtilisedCredit | ElateFee | EInterest | EPenalty | ETotal | AVATonSales | AVATonPurchase | AUtilisedCredit | AlateFee | AInterest | APenalty | ATotal | LVATonSales | LVATonPurchase | LUtilisedCredit | LlateFee | LInterest | LPenalty | LTotal |
      | DRC_ATC_ManualAssessmentLiability_02 | validate the additional liability when Assessed is greater than e-Declaration in VAT on Sales    | Sales    | greater | January | 2018 | 20180705073851634 |         550 |             90 |               0 |        0 |         0 |        0 |    460 |         622 |          57392 |               0 |      500 |         0 |        0 | -56270 |          72 |          57302 |               0 |      500 |         0 |        0 | -56730 |
      | DRC_ATC_ManualAssessmentLiability_03 | validate the additional liability when Assessed is greater than e-Declaration in VAT on Purchase | Purchase | greater | January | 2018 | 20180705073851634 |         550 |             90 |               0 |        0 |         0 |        0 |    460 |         622 |          57392 |               0 |      500 |         0 |        0 | -56270 |          72 |          57302 |               0 |      500 |         0 |        0 | -56730 |
      | DRC_ATC_ManualAssessmentLiability_04 | validate the additional liability when Assessed is less than e-Declaration in VAT on Sales       | Sales    | less    | January | 2018 | 20180705073851634 |         550 |             90 |               0 |        0 |         0 |        0 |    460 |         300 |          57392 |               0 |      500 |         0 |        0 | -56592 |        -250 |          57302 |               0 |      500 |         0 |        0 | -57052 |
      | DRC_ATC_ManualAssessmentLiability_05 | validate the additional liability when Assessed is less than e-Declaration in VAT on Purchase    | Purchase | less    | January | 2018 | 20180705073851634 |         550 |             90 |               0 |        0 |         0 |        0 |    460 |         300 |             70 |               0 |      500 |         0 |        0 |    730 |        -250 |            -20 |               0 |      500 |         0 |        0 |    270 |

  @tc7
  Scenario Outline: The officer want to validate the Utilised Credit on Manual Assessment page
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    And the e-declartion data must be same as efiling with"<EVATonSales>""<EVATonPurchase>""<EUtilisedCredit>""<ElateFee>""<EInterest>""<EPenalty>""<ETotal>"
    And The Assessed data must be same as from EFD"<AVATonSales>""<AVATonPurchase>""<AUtilisedCredit>""<AlateFee>""<AInterest>""<APenalty>""<ATotal>"
    Then The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | month    | year | nitvano           | EVATonSales | EVATonPurchase | EUtilisedCredit | ElateFee | EInterest | EPenalty | ETotal | AVATonSales | AVATonPurchase | AUtilisedCredit | AlateFee | AInterest | APenalty | ATotal | LVATonSales | LVATonPurchase | LUtilisedCredit | LlateFee | LInterest | LPenalty | LTotal |
      | DRC_ATC_ManualAssessmentLiability_06 | February | 2018 | 20180705073851634 |             |                |                 |          |           |          |        |             |                |                 |          |           |          |        |             |                |                 |          |           |          |        |

  @tc8
  Scenario Outline: The officer want to validate the Late fee on Manual Assessment page
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then Late fee "<latefee>"should be applied
    And The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                                                                                               | month    | year | nitvano           | latefee |
      | DRC_ATC_ManualAssessmentLiability_07 | validate the Late fee on Manual Assessment page when the taxpayer category e-declares after the due date  | January  | 2018 | 20180705073851634 |     500 |
      | DRC_ATC_ManualAssessmentLiability_08 | validate the Late fee on Manual Assessment page when the taxpayer category e-declares before the due date | November | 2018 | 20180630055317644 |       0 |

  @tc9
  Scenario Outline: The officer want to validate the interest fee on the Manual Assessment Page when the TaxPayer has Paid the VAT Amount in that particulat month itself
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then The Interest should be calculated from the Due Date To Payment Date or to the assessed date which ever is smaller"<interest>"
    And The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                                                                                                           | month   | year | nitvano           | interest |
      | DRC_ATC_ManualAssessmentLiability_09 | validate the interest fee on the Manual Assessment Page when the TaxPayer has Paid the VAT Amount after the due date  | October | 2018 | 20180630055317644 |  6925615 |
      | DRC_ATC_ManualAssessmentLiability_10 | validate the interest fee on the Manual Assessment Page when the TaxPayer has Paid the VAT Amount before the due date | August  | 2018 | 20180731011416955 |        0 |

  ####To Be discussed test case 10
  @tc10
  Scenario Outline: The officer want to validate the interest fee on the Manual Assessment Page when the TaxPayer has Paid the VAT Amount after the Assessment done
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<Amonth>""<Ayear>""<nitvano>"
    And Verifies the interest rate calculated"<interest>"

    Examples: 
      | Test Case ID                         | Description                                                                                                                 | Amonth | Ayear | nitvano           | interest |
      | DRC_ATC_ManualAssessmentLiability_11 | validate the interest fee on the Manual Assessment Page when the TaxPayer has Paid the VAT Amount after the Assessment done | August |  2018 | 20180731011416955 |    12131 |

  @tc1112
  Scenario Outline: Validate the Interest field on Manual Assessment Page , if user had not done Any paymnet
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    And Verifies the interest rate calculated"<interest>"
    Then The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                                                                                                                              | month | year | nitvano           | interest |
      | DRC_ATC_ManualAssessmentLiability_12 | Validate the Interest field on Manual Assessment Page, if user had not paid the Interest amount for 1 month is not paid                  | May   | 2018 | 20180706030811509 |        0 |
      | DRC_ATC_ManualAssessmentLiability_13 | Validate the Interest field on Manual Assessment Page, if user had not paid the Interest amount for 2 or more than 2 months are not paid | March | 2018 | 20180630055627898 |  9868640 |

  @tc13
  Scenario Outline: The officer want to validate the penalty field in Manual Assessment page
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    Then the penalty amount should be by default 0
    And Adds the penalty amount for wrong E-Filing"<amount>"
    And The Additional liability must be Assessed minus e-Declaration"<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                       | month | year | nitvano           | amount |
      | DRC_ATC_ManualAssessmentLiability_14 | Can add penalty for wrong efiling | March | 2018 | 20180716054729666 |   5000 |

  @tc14
  Scenario Outline: Validate the Total of  e-Declaration Amount.
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then The e-Declaration total amount must be VAT on Sales-VAT in purchase -Utilised Credit"<EVATonSales>""<EVATonPurchase>""<EUtilisedCredit>""<ETotal>"

    Examples: 
      | Test Case ID                         | Description                         | month | year | nitvano           | EVATonSales | EVATonPurchase | EUtilisedCredit | ETotal |
      | DRC_ATC_ManualAssessmentLiability_15 | Validate E-declaration Total Amount | March | 2018 | 20180705073851634 |        5535 |          10465 |             -70 |  -5000 |

  @tc15
  Scenario Outline: Validate the Total of  Assessed Amount.
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    And The Assessed data must be same as from EFD"<AVATonSales>""<AVATonPurchase>""<AUtilisedCredit>""<AlateFee>""<AInterest>""<APenalty>"
    Then Assessed Total should be calculated by VAT on Sales - VAT on Purchase - Utilised Credit + Late fees + Interest + Penalty"<AVATonSales>""<AVATonPurchase>""<AUtilisedCredit>""<AlateFee>""<AInterest>""<APenalty>""<ATotal>"

    Examples: 
      | Test Case ID                         | Description                      | month | year | nitvano           | AVATonSales | AVATonPurchase | AUtilisedCredit | AlateFee | AInterest | APenalty | ATotal |
      | DRC_ATC_ManualAssessmentLiability_16 | Validate Assessment Total Amount | April | 2018 | 20180716054729666 |       58049 |           9844 |               0 |        0 |      1291 |        0 |  49496 |

  @tc16
  Scenario Outline: Validate the Total of Additional Liability
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then Additional Liability should be calculated by VAT on Sales-VAT on Purchase-Utilised Credit+Late Fees+Interest+Penalty Amount."<LVATonSales>""<LVATonPurchase>""<LUtilisedCredit>""<LlateFee>""<LInterest>""<LPenalty>""<LTotal>"

    Examples: 
      | Test Case ID                         | Description                               | month | year | nitvano           | LVATonSales | LVATonPurchase | LUtilisedCredit | LlateFee | LInterest | LPenalty | LTotal |
      | DRC_ATC_ManualAssessmentLiability_17 | Validate Total Additional Liablity Amount | April | 2018 | 20180716054729666 |       56249 |           8992 |               0 |        0 |      1291 |        0 |  48548 |

  @tc17
  Scenario Outline: Validate the Previous Button Functionality
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then click on "previous" button
    And tax officer must be navigated to Assessment Sales and Purchase Summary
    And click on "Next" button
    And tax officer must be navigated to liability Calculation page

    Examples: 
      | Test Case ID                         | Description                   | month | year | nitvano           |
      | DRC_ATC_ManualAssessmentLiability_18 | Previous button Functionality | March | 2018 | 20180705073851634 |

  @tc18
  Scenario Outline: Validate Next button functionality
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then click on "Next" button
    And tax officer must be navigated to Payment Due
    And click on "previous" button
    And tax officer must be navigated to liability Calculation page

    Examples: 
      | Test Case ID                         | Description               | month | year | nitvano           |
      | DRC_ATC_ManualAssessmentLiability_19 | Next button Functionality | March | 2018 | 20180705073851634 |

  @tc19
  Scenario Outline: Validate amount displaying under e-Declaration column (VAT on Sales, VAT on Purchase, Utilised Credit, Late Fees, Interest and penalty)are as per calculations done on E-Filing.
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then Amounts under e-Declaration Column should  pre populated from the e-Declaration done by user"<EVATonSales>""<EVATonPurchase>""<EUtilisedCredit>""<ElateFee>""<EInterest>""<EPenalty>""<ETotal>"

    Examples: 
      | Test Case ID                         | Description                                                     | month | year | nitvano           | EVATonSales    | EVATonPurchase  | EUtilisedCredit | ElateFee | EInterest | EPenalty | Etotal     |
      | DRC_ATC_ManualAssessmentLiability_20 | amount displaying under e-Declaration column is same as Efiling | March | 2018 | 20180630055627898 | 99999999999999 | 100000799999998 |               0 |        0 |         0 |        0 | -799999999 |

  @tc20
  Scenario Outline: Validate amount displaying under Assessed column (VAT on Sales, VAT on Purchase, Utilised Credit, Late Fees, Interest and penalty)are auto populated based on transaction received in EFD Device.
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then Assessed column in liability calculation should be prepoulated as per the EFD transactions received"<AVATonSales>""<AVATonPurchase>""<AUtilisedCredit>""<AlateFee>""<AInterest>""<APenalty>"

    Examples: 
      | Test Case ID                         | Description                                            | month   | year | nitvano           | AVATonSales | AVATonPurchase | AUtilisedCredit | AlateFee | AInterest | APenalty |
      | DRC_ATC_ManualAssessmentLiability_21 | amount displaying under Assessed column is same as EFD | January | 2018 | 20180705073851634 |         200 |            200 |               0 |        0 |         0 |        0 |

  @tc21
  Scenario Outline: Validate the editable elements on Liability Calculation page: VAT on Sales, VAT on Purchase, Penalty
    Given The tax payer has done E-Filing for the particular month"<Test Case ID>""<Description>"
    When The taxofficer has logged in internal portal
    And the officer is on liability calculation for the particular period"<month>""<year>""<nitvano>"
    Then tax office enter "<VATonSales>" "<VATonPurchase>""<Penalty>"
    And Click on next button
    And Validation Messages should be shown"<msg>"

    Examples: 
      | Test Case ID                         | Description                  | month   | year | nitvano           | VATonSales                                   | VATonPurchase                                | Penalty                                      | msg                              |
      | DRC_ATC_ManualAssessmentLiability_22 | Special Characters           | January | 2018 | 20180705073851634 | @!#$!$$$#(&()(&(&&()&()&()&(&(&%%%____++++++ | @!#$!$$$#(&()(&(&&()&()&()&(&(&%%%____++++++ | @!#$!$$$#(&()(&(&&()&()&()&(&(&%%%____++++++ | Only 15 character allowed!       |
      | DRC_ATC_ManualAssessmentLiability_23 | Spaces in between            | January | 2018 | 20180705073851634 | 3443456 345 345                              | 3443456 345 34 5                             | 3443456 345 34 5                             | Only 15 character allowed!       |
      | DRC_ATC_ManualAssessmentLiability_24 | Sales amount is blank        | January | 2018 | 20180705073851634 |                                              |                                   3454353453 |                                   3453453453 | Sales Vat amount is required!    |
      | DRC_ATC_ManualAssessmentLiability_25 | Purchase VAT amount is blank | January | 2018 | 20180705073851634 |                                     34345543 |                                              |                                   3453453453 | Purchase Vat amount is required! |
      | DRC_ATC_ManualAssessmentLiability_26 | Penaltu is blank             | January | 2018 | 20180705073851634 |                                       435345 |                                       456456 |                                              | penalty should not be zero       |
      | DRC_ATC_ManualAssessmentLiability_27 |                              | January | 2018 | 20180705073851634 | -                                            | -                                            | -                                            | Enter valid amount!              |
