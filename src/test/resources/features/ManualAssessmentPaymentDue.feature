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
@tag
Feature: Manual Assessment Payment Due

  @tc2
  Scenario Outline: Validate Assessed Amount for vat liabillity
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the Assessed amount for vat liablity should be same as per liability calculation page

    Examples: 
      | Test Case ID                          | Description                                  | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentPaymentDue_01 | Validating Assessed amount for VAT Liability | February | 2018 | 20180719035040065 |

  @tc3
  Scenario Outline: Validate Assessed Amount for utilised credit
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the Assessed amount for utilised credit should be same as per liability calculation page

    Examples: 
      | Test Case ID                          | Description                                    | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentPaymentDue_02 | Validating Assessed amount for utilised credit | February | 2018 | 20180719035040065 |

  @tc4
  Scenario Outline: Validate Assessed Amount for Late Fee
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the Assessed amount for late fee should be same as per liability calculation page

    Examples: 
      | Test Case ID                          | Description                             | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentPaymentDue_03 | Validating Assessed amount for late fee | February | 2018 | 20180719035040065 |

  @tc5
  Scenario Outline: Validate Assessed Amount for interest
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the Assessed amount for interest should be same as per liability calculation page

    Examples: 
      | Test Case ID                          | Description                             | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentPaymentDue_04 | Validating Assessed amount for interest | February | 2018 | 20180719035040065 |

  @tc6
  Scenario Outline: Validate Assessed Amount for penalty
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the Assessed amount for penalty should be same as per liability calculation page for when assessed amount is greater than edeclared amount

    Examples: 
      | Test Case ID                          | Description                            | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentPaymentDue_05 | Validating Assessed amount for penalty | February | 2018 | 20180719035040065 |

  @tc7
  Scenario Outline: Validate Assessed Amount for Total
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the Assessed amount of Total  should be Vat liability- utillised credit+ late fees + Interest + Penalty

    Examples: 
      | Test Case ID                          | Description                          | month    | year | nitvano           | Comment                                                                 |
      | DRC_ATC_ManualAssessmentPaymentDue_06 | Validating Assessed amount for Total | February | 2018 | 20180719035040065 | utilised credit has not been implemented so need to need to verify once |

  @tc8
  Scenario Outline: Validate Paid Amount for Liability
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the paid amount of vat liability"<paid amount>"

    Examples: 
      | Test Case ID                          | Description                          | month    | year | nitvano           | paid amount |
      | DRC_ATC_ManualAssessmentPaymentDue_07 | Validating Paid amount for Liability | February | 2018 | 20180719035040065 |         300 |

  @tc9
  Scenario Outline: Validate Paid Amount for Utilised Credit
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the paid amount of Utilised Credit"<paid amount>"

    Examples: 
      | Test Case ID                          | Description                                 | month    | year | nitvano           | paid amount |
      | DRC_ATC_ManualAssessmentPaymentDue_08 | Validating Paid amount for  Utilised Credit | February | 2018 | 20180719035040065 |           0 |

  @tc10
  Scenario Outline: Validate Paid Amount for late fee
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the paid amount of late fee"<paid amount>"

    Examples: 
      | Test Case ID                          | Description                         | month    | year | nitvano           | paid amount |
      | DRC_ATC_ManualAssessmentPaymentDue_09 | Validating Paid Amount for late fee | February | 2018 | 20180719035040065 |           0 |

  @tc11
  Scenario Outline: Validate Paid Amount for interest
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the paid amount of interest"<paid amount>"

    Examples: 
      | Test Case ID                          | Description                            | month    | year | nitvano           | paid amount |
      | DRC_ATC_ManualAssessmentPaymentDue_10 | Validating Assessed amount for penalty | February | 2018 | 20180719035040065 |           0 |

  @tc12
  Scenario Outline: Validate Paid Amount for penalty
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the paid amount of penalty"<paid amount>"

    Examples: 
      | Test Case ID                          | Description                            | month    | year | nitvano           | paid amount |
      | DRC_ATC_ManualAssessmentPaymentDue_11 | Validating Assessed amount for penalty | February | 2018 | 20180719035040065 |           0 |

  @tc13
  Scenario Outline: Validate Net Payable Amount for Vat Liability,Utilised Credit,Late Fee,Interest,Penalty
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the net payable amount of for Vat Liability,Utilised Credit,Late Fee,Interest,Penalty "<Nvatliability>""<Netutilisedcredit>""<NetLatefee>""<etInterest>""<NetPenalty>"

    Examples: 
      | Test Case ID                          | Description                            | month    | year | nitvano           | Nvatliability | Netutilisedcredit | NetLatefee | NetInterest | NetPenalty |
      | DRC_ATC_ManualAssessmentPaymentDue_12 | Validating Assessed amount for penalty | February | 2018 | 20180719035040065 |          -300 |                 0 |          0 |          26 |          0 |

  @tc14
  Scenario Outline: Validate PAID amount for total
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the paid amount of total for total=Vat Liability-Utilised Credit+Late Fee+Interest+Penalty "<Nvatliability>""<Netutilisedcredit>""<NetLatefee>""<etInterest>""<NetPenalty>"

    Examples: 
      | Test Case ID                          | Description                            | month    | year | nitvano           | Nvatliability | Netutilisedcredit | NetLatefee | NetInterest | NetPenalty |
      | DRC_ATC_ManualAssessmentPaymentDue_13 | Validating Assessed amount for penalty | February | 2018 | 20180719035040065 |          -300 |                 0 |          0 |          26 |          0 |

  @tc15
  Scenario Outline: Validate Net Payable Amount for Total
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    Then Clicks on next button in liability Calcualtion and Observe the net payable amount for Total=AssessedTotal"<assessedTotal>"-Paid Total"<paidTotal>"

    Examples: 
      | Test Case ID                          | Description                            | month    | year | nitvano           | assessedTotal | paidTotal |
      | DRC_ATC_ManualAssessmentPaymentDue_14 | Validating Assessed amount for penalty | February | 2018 | 20180719035040065 |               |           |

  @tc16
  Scenario Outline: Validate the Previous Button Functionality
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    And clicks on previos button to view Liability calculation page

    Examples: 
      | Test Case ID                         | Description                   | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentLiability_15 | Previous button Functionality | February | 2018 | 20180719035040065 |

  @tc17
  Scenario Outline: Validate the Raise Notice functionality
    Given The taxofficer has logged in internal portal"<Test Case ID >"|"<Description>"
    When the officer checks for the particular period"<month>""<year>""<nitvano>"
    And Clicks next button on EFD summary
    And clicks on raise button
    Then Notice of Assessment should be generated to taxpayer
    And Email should be sent to the email address

    Examples: 
      | Test Case ID                         | Description                | month    | year | nitvano           |
      | DRC_ATC_ManualAssessmentLiability_16 | Raise button Functionality | February | 2018 | 20180719035040065 |
