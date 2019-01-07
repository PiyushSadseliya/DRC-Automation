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
@DebtManagementUnAssignedDebt
Feature: The Supervisor can assign the collection officer the pending amount from the TaxPayer

  @mtc_19
  Scenario Outline: Validate the close (X) icon functionality on officer selection Pop-up
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then selects unassigned debt and selects the officer and closes the popup window

    Examples: 
      | Test Case ID                         | Description                                                           | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_18 | Validate the close (X) icon functionality on officer selection Pop-up | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_03
  Scenario Outline: Validate the date picker functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Date selection should be disabled and should be same as debt management

    Examples: 
      | Test Case ID                         | Description                                                           | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_03 | Validate the close (X) icon functionality on officer selection Pop-up | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_04
  Scenario Outline: Validate the sorting functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then clicks on "NITVA" column on Debt Management
    Then "NITVA" should be in ascending order
    Then clicks on "NITVA" column on Debt Management
    Then "NITVA" should be in descending order
    Then clicks on "Taxpayer" column on Debt Management
    Then "TaxPayer" should be in ascending order
    Then clicks on "Taxpayer" column on Debt Management
    Then "TaxPayer" should be in descending order
    Then clicks on "City" column on Debt Management
    Then "City" should be in ascending order
    Then clicks on "City" column on Debt Management
    Then "City" should be in descending order
    Then clicks on "<ageing>" column on Debt Management
    Then "ageing" should be in ascending order
    Then clicks on "<ageing>" column on Debt Management
    Then "ageing" should be in descending order
    Then clicks on "Others" column on Debt Management
    Then "Others" should be in ascending order
    Then clicks on "Others" column on Debt Management
    Then "Others" should be in descending order
    Then clicks on "Total" column on Debt Management
    Then "Total" should be in ascending order
    Then clicks on "Total" column on Debt Management
    Then "Total" should be in descending order

    Examples: 
      | Test Case ID                         | Description                        | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_04 | Validate the sorting functionality | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_05
  Scenario Outline: Validate the Filter drop down functionality on Debt screen
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Clicks on Filter dropdown button
    Then Search by TaxPayer Name "<name>" and Records should be displayed

    Examples: 
      | Test Case ID                         | Description                                                | ageing     | name    | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_05 | Validate the Filter drop down functionality on Debt screen | 0-3 Months | willson | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_14
  Scenario Outline: Validate view icon functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then user Clicks on View button on Debt Managemnt and is on Taxpayer profile
   

    Examples: 
      | Test Case ID                         | Description                      | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_14 | Validate view icon functionality | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_12
  Scenario Outline: Validate previous button functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then user clicks on Previous Button on Debt Unassigned and is on Debt Management List

    Examples: 
      | Test Case ID                         | Description                             | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_12 | Validate previous button functionality. | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  # @mtc_15 @TotalAgeBracket
  #Scenario Outline: Verify the total (FC) tile on list of Pending Debt Taxpayer internal portal
  # Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
  #When clicked on Debt Management Module must be on Debt Management Module
  #When Clicked on pending amount for "<ageing>"
  #Then user is on Pending debts
  #Then Total amount for that particular"<ageing>" period  should  be displayed in  ageing bracket (FC) tile
  #Examples:
  # | Test Case ID                         | Description                                                  | ageing     |
  #| DRC_ATC_DebtManagement_Unassigned_15 | Verify the total (FC) tile on list of Pending Debt Taxpayer. | 0-3 Months |
  # @mtc_16 @TotalOther
  #Scenario Outline: Verify the Others (FC) tile on list of Pending Debt Taxpayer page
  # Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
  # When clicked on Debt Management Module must be on Debt Management Module
  # When Clicked on pending amount for "<ageing>"
  #Then user is on Pending debts
  #Then Total amount of remaining age bracket should  be displayed in Others (FC) tile
  #Examples:
  # | Test Case ID                         | Description                                                      | ageing     |
  #| DRC_ATC_DebtManagement_Unassigned_16 | Verify the Other (FC) tile on list of Pending Debt Taxpayer page | 0-3 Months |
  # @mtc_17 @Total
  #Scenario Outline: Verify the total (FC) tile on list of Pending Debt Taxpayer internal portal
  # Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
  #When clicked on Debt Management Module must be on Debt Management Module
  #When Clicked on pending amount for "<ageing>"
  #Then user is on Pending debts
  #Then Total amount should  be displayed including respective "<ageing>"ageing bracket (FC)+ Other (FC)
  #Examples:
  # | Test Case ID                         | Description                                                  | ageing     |
  #| DRC_ATC_DebtManagement_Unassigned_17 | Verify the total (FC) tile on list of Pending Debt Taxpayer. | 0-3 Months |
  @mtc_07
  Scenario Outline: Validate the Search button functionality with only value in From field
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Clicks on Filter dropdown button
    Then Selects "<drpdown>" from debt age
    Then Enter value "<from>"in the from value range
    Then click on search button Records should be displayed in "<drpdown>" as per From "<from>" value

    Examples: 
      | Test Case ID                         | Description                                                            | ageing     | drpdown    | from | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_07 | Validate the Search button functionality with only value in From field | 0-3 Months | 0-3 Months |    0 | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_08
  Scenario Outline: Validate the Search button functionality with only value in to field
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Clicks on Filter dropdown button
    Then Selects "<drpdown>" from debt age
    Then Enter value "<to>"in the to value range
    Then click on search button Records should be displayed in "<drpdown>" as per To"<to>" value

    Examples: 
      | Test Case ID                         | Description                                                          | ageing     | drpdown    | to    | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_08 | Validate the Search button functionality with only value in to field | 0-3 Months | 0-3 Months | 50000 | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_09
  Scenario Outline: Validate the Search button functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Clicks on Filter dropdown button
    Then if keeps blank in From and To value range, Search button should be disabled

    Examples: 
      | Test Case ID                         | Description                              | ageing     | dropdown   | to    | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_09 | Validate the Search button functionality | 0-3 Months | 0-3 Months | 50000 | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_06
  Scenario Outline: Validate the Reset button functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then user enters uses first records in the to filter the records click again on filter option to reset the previously filtered records

    Examples: 
      | Test Case ID                         | Description                             | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_06 | Validate the Reset button functionality | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_13 @columnverify
  Scenario Outline: Verify the tax payer details columns (NITVA, Tax payer Name, City)
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Column should be "NITVA" "Taxpayer" "City" "<ageing>" "Others" "Total" "View"

    Examples: 
      | Test Case ID                         | Description                                                        | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_13 | Verify the tax payer details columns (NITVA, Tax payer Name, City) | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_11
  Scenario Outline: Validate the pagination functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Click on Last button on debt pending it should be on last page
    Then click on First button it should be on First page of pending debt
    Then click on next button it should be second page of pendign debt
    Then Click on previous button it should be First page of pending Debt

    Examples: 
      | Test Case ID                         | Description                           | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_11 | Validate the pagination functionality | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_10 @mtc18
  Scenario Outline: Validate Assign officer button functionality
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then user selects all the records for assigning all the records should be selected
    Then click on assign button
    Then click on save button ,It should be disabled

    Examples: 
      | Test Case ID                         | Description                                  | ageing     | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_10 | Validate Assign officer button functionality | 0-3 Months | admin   | ketan.prajapati | admin    | Aketi    |

  @mtc_02
  Scenario Outline: Validate the assign officer button functionality with valid data
    Given "<Test Case ID>""<Description>"DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    When Clicked on pending amount for "<ageing>"
    Then user is on Pending debts
    Then Search by TaxPayer Name "<name>" and assigns to officer and is on Case Management

    Examples: 
      | Test Case ID                         | Description                                                      | ageing     | name          | officer | uname           | password | location |
      | DRC_ATC_DebtManagement_Unassigned_02 | Validate the assign officer button functionality with valid data | 0-3 Months | Approved User | admin   | ketan.prajapati | admin    | Aketi    |
