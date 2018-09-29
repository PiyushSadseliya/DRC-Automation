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
@TaskDV-1801 @USDV-1176 @DependonReassessmentPaymentDue @Depend @ReAssessment @RaiseNotice @InternalPortal
Feature: The Tax officer clicks on raise notice and the system will generate notice as per the Re-Assessment Calculation

  @ManualReAssessmentRaiseNoticetc2 @ManualReAssessment @ReAssessmentNotice @Barcode @Autopopulated
  Scenario Outline: Validate the 2D Barcode generated Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on ReAssessment Notice
    And "<barcodeid>"should be generated.

    Examples: 
      | Test Case Id                             | Description                                 | month | year | nitvano | barcodeid |
      | DRC_ATC_ReAssessment_AssessmentNotice_01 | Validate the 2D Barcode generated Correctly |       |      |         |           |

  @ManualReAssessmentRaiseNoticetc3 @ManualReAssessment @ReAssessmentNotice @TaxpayerDetails @Autopopulated
  Scenario Outline: Validate the Taxpayer name, Address and NITVA  of the Customer is printed Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on ReAssessment Notice
    And the Taxpayer name"<name>", Address"<address>" and NITVA"<nitvano>" of the Customer is same as that the record selected on Assessed List  Page.

    Examples: 
      | Test Case Id                             | Description                                                                          | month | year | nitvano | name | address |
      | DRC_ATC_ReAssessment_AssessmentNotice_02 | Validate the Taxpayer name, Address and NITVA  of the Customer is printed Correctly. |       |      |         |      |         |

  @ManualReAssessmentRaiseNoticetc4 @ManualReAssessment @ReAssessmentNotice @TaxpayerDetails @Autopopulated
  Scenario Outline: Validate the Notice details Section is generated properly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on ReAssessment Notice
    And Validate the ReferenceID"<Refid>"Period"<period>"DateIssued"<dateissued>" taxCentre"<taxcentre>"

    Examples: 
      | Test Case Id                             | Description                                                | month | year | nitvano | Refid | period | taxcentre | dateissued |
      | DRC_ATC_ReAssessment_AssessmentNotice_03 | Validate the Notice details Section is generated properly. |       |      |         |       |        |           |            |

  @ManualReAssessmentRaiseNoticetc5 @ManualReAssessment @ReAssessmentNotice @DependOnRPaymentDue @Autopopulated
  Scenario Outline: Validate the Amount in Liability table are populated Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on ReAssessment Notice
    And Validate the Assessed VatLiability as per the Payment Due

    Examples: 
      | Test Case Id                             | Description                                                     | month | year | nitvano |
      | DRC_ATC_ReAssessment_AssessmentNotice_04 | Validate the Amount in Liability table are populated Correctly. |       |      |         |

  @ManualReAssessmentRaiseNoticetc5 @ManualReAssessment @ReAssessmentNotice @ManualReAssessmnetLiablityCalculation @Autopopulated
  Scenario Outline: Validate the Liability calculation table ( Annexure A ) generated Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on ReAssessment Notice
    And Validate the TaxAssesement is as per the Liability Calculated

    Examples: 
      | Test Case Id                             | Description                                                                                             | month | year | nitvano |
      | DRC_ATC_ReAssessment_AssessmentNotice_05 | Validate the Liability calculation table ( Annexure A ) generated Correctly from Liability Calculation. |       |      |         |

  @ManualReAssessmentRaiseNoticetc6 @ManualAssessment @ReAssessmentNotice @ManualReAssessmnetCloseButton @Button @Close
  Scenario Outline: Validate the Close Button Functionality.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the Close Button Functionality on ReAssessment Notice.

    Examples: 
      | Test Case Id                             | Description                                  | month | year | nitvano |
      | DRC_ATC_ReAssessment_AssessmentNotice_06 | Validate the the Close Button Functionality. |       |      |         |

  @ManualReAssessmentc8 @ManualReAssessment @ReAssessmentNotice @ManualReAssessmnetConfirmButton @Button @Confirm @Hold
  Scenario Outline: Validate the Confirm Button Functionality.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for Reassessment the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on ReAssessment Notice
    And Validate the Confirm Button Functionality on ReAssessment Notice.

    Examples: 
      | Test Case Id                             | Description                                | month | year | nitvano |
      | DRC_ATC_ReAssessment_AssessmentNotice_07 | Validate the Confirm Button Functionality. |       |      |         |
