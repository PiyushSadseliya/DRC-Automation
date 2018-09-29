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
#DV-1797
@AssessmentNotice 
Feature: The Tax officer clicks on raise notice and the system will generate notice as per the Assessment Calculation

  @ManualAssessmenttc2 @ManualAssessment @AssessmentNotice @Barcode @Autopopulated
  Scenario Outline: Validate the 2D Barcode generated Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the Barcode generated"<barcodeid>"

    Examples: 
      | Test Case Id                                | Description                                    | month | year | nitvano | barcodeid |
      | DRC_ATC_ManualAssessmentAssessmentNotice_01 | To validate the barcode id generated is unique |       |      |         |           |

  @ManualAssessmenttc3 @ManualAssessment @AssessmentNotice @TaxpayerDetails @Autopopulated
  Scenario Outline: Validate the Taxpayer name, Address and NITVA  of the Customer is printed Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the Taxpayer name"<Name>"Address"<Address>"NITVA"<Nitvano>"

    Examples: 
      | Test Case Id                                | Description                                                                              | month | year | nitvano | Name | Address | Nitvano |
      | DRC_ATC_ManualAssessmentAssessmentNotice_02 | To validate The Taxpayer  name, Address and NITVA  of the Customer is printed Correctly. |       |      |         |      |         |         |

  @ManualAssessmenttc4 @ManualAssessment @AssessmentNotice @TaxpayerDetails @Autopopulated
  Scenario Outline: Validate the Notice details Section is generated properly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the ReferenceID"<Refid>"Period"<period>"DateIssued"<dateissued>" taxCentre"<taxcentre>"

    Examples: 
      | Test Case Id                                | Description                                                | month | year | nitvano | Refid | period | taxcentre | dateissued |
      | DRC_ATC_ManualAssessmentAssessmentNotice_03 | Validate the Notice details Section is generated properly. |       |      |         |       |        |           |            |

  @ManualAssessmenttc5 @ManualAssessment @AssessmentNotice @MAPaymentDuedetails @Autopopulated
  Scenario Outline: Validate the values in Liability table are populated Correctly from Payment Due
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the Assessed VatLiability as per the Payment Due

    Examples: 
      | Test Case Id                                | Description                                                                     | month | year | nitvano |
      | DRC_ATC_ManualAssessmentAssessmentNotice_04 | Validate the values in Liability table are populated Correctly from Payment Due |       |      |         |

  @ManualAssessmentc6 @ManualAssessment @AssessmentNotice @ManualAssessmnetLiablityCalculation @Autopopulated
  Scenario Outline: Validate the Liability calculation table ( Annexure A ) generated Correctly.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the TaxAssesement is as per the Liability Calculated

    Examples: 
      | Test Case Id                                | Description                                                                                             | month | year | nitvano |
      | DRC_ATC_ManualAssessmentAssessmentNotice_05 | Validate the Liability calculation table ( Annexure A ) generated Correctly from Liability Calculation. |       |      |         |

  @ManualAssessmentc7 @ManualAssessment @AssessmentNotice @ManualAssessmnetCloseButton @Button @Close
  Scenario Outline: Validate the Close Button Functionality.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the "Close" Button Functionality.

    Examples: 
      | Test Case Id                                | Description                                  | month | year | nitvano |
      | DRC_ATC_ManualAssessmentAssessmentNotice_06 | Validate the the Close Button Functionality. |       |      |         |

  @ManualAssessmentc8 @ManualAssessment @AssessmentNotice @ManualAssessmnetConfirmButton @Button @Confirm
  Scenario Outline: Validate the Confirm Button Functionality.
    Given The tax officer has logged in and has done Liability Calculation"<Test Case Id>"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    Then Tax officer is on Assessment Notice
    And Validate the "Confirm" Button Functionality.

    Examples: 
      | Test Case Id                                | Description                                | month | year | nitvano |
      | DRC_ATC_ManualAssessmentAssessmentNotice_07 | Validate the Confirm Button Functionality. |       |      |         |
