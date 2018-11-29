@DebtManagement @DV-1685_2251
Feature: Debt Management - Landing screen to show the grouped (according to duration of the debt and priority of collection) list of tax payer that are in debt

  @Mtc02 @Save @Button @Previous @comp
  Scenario Outline: Validate whether the DGI Supervisor/Admin is able to save the date and data internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Select date "<date>" from Upto date
    Then click on zero to three months Pending amount Link
    Then click on Previuos button on Debt Management pending amount list
    Then click on Save button on Debt Management Landing Screen an click on logout and again login to see last Saved Data

    Examples: 
      | Test Case ID             | Description                                                                 | officer | uname           | password | date      |
      | DRC_ATC_DebtManagemnt_01 | Validate whether the DGI Supervisor/Admin is able to save the date and data | Admin   | ketan.prajapati | admin    | 2018-09-6 |

  @Mtc03 @comp
  Scenario Outline: Validate the Upto date  filter on Debt Management dashboard internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then select Todays date todays date should be displayed and select previous date "<prevdate>"
    Then select future date it should be disabled

    Examples: 
      | Test Case ID             | Description                                                 | officer | uname           | password | prevdate |
      | DRC_ATC_DebtManagemnt_02 | Validate the Upto date  filter on Debt Management dashboard | Admin   | ketan.prajapati | admin    |          |

  @Mtc05 @comp
  Scenario Outline: Validate the Age Brackets column internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Age Brackets column shoul display as "24 Months and Above""13-24 Months""7-12 Months""4-6 Months""0-3 Months"

    Examples: 
      | Test Case ID             | Description                      | officer | uname           | password |
      | DRC_ATC_DebtManagemnt_03 | Validate the Age Brackets column | Admin   | ketan.prajapati | admin    |

  #@Mtc06
  #Scenario Outline: Validate the debt amount in Total(FC) column for all the age brackets
  # Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
  #When clicked on Debt Management Module must be on Debt Management Module
  #Examples:
  #| Test Case ID             | Description                                                           | officer | uname           | password |
  #| DRC_ATC_DebtManagemnt_04 | Validate the debt amount in Total(FC) column for all the age brackets | Admin   | ketan.prajapati | admin    |
  @Mtc07 @NoPending @Disabled @comp
  Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when there is no pending amount internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then if there is no pending amount displayed amount shoul be  0 with disabled hyperlink

    Examples: 
      | Test Case ID             | Description                                                                                        | officer | uname           | password |
      | DRC_ATC_DebtManagemnt_05 | Validate the Pending (FC) column amount for particular age bracket when there is no pending amount | Admin   | ketan.prajapati | admin    |
#### all the Pending Amount cant be assigned for which may affect the records 
  @Mtc08
  Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when all pending debt amount is assigned to collection officer internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Assign all the pending amount to collection officer then pending amount should be zero

    Examples: 
      | Test Case ID             | Description                                                                                                                       | officer | uname           | password |
      | DRC_ATC_DebtManagemnt_06 | Validate the Pending (FC) column amount for particular age bracket when all pending debt amount is assigned to collection officer | Admin   | ketan.prajapati | admin    |

  @Mtc09
  Scenario Outline: Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Assign all the pending amount to collection officer for age bracket"<ageing>" then pending amount should be zero

    Examples: 
      | Test Case ID             | Description                                                                                                                   | officer | uname           | password | ageing              |
      | DRC_ATC_DebtManagemnt_07 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    | 24 Months and Above |

  @Mtc10
  Scenario Outline: Validate the Pending (FC) column amount for   particular age bracket when pending debt amount is partially assigned to collection officers internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Assign the pending amount to the collection officer then partial amount assigned should be reflected in pending column"<ageing>""<pendingamount>"

    Examples: 
      | Test Case ID             | Description                                                                                                                   | officer | uname           | password | ageing     | apendingamount | bassignedamount   | afterassigne      |
      | DRC_ATC_DebtManagemnt_08 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    | 0-3 Months |        6142217 | 376317983878646.9 | 376317983883746.9 |

  @Mtc11
  Scenario Outline: Validate the Assigned (FC) column amount for particular age bracket when pending debt amount is partially assigned to collection officers internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Assign the pending amount to the collection officer then partial amount assigned should be reflected in assignned column"<ageing>""<aassigne>"

    Examples: 
      | Test Case ID             | Description                                                                                                                   | officer | uname           | password | ageing     | bpendingamount | bassignedamount   | aassigne      |apending|
      | DRC_ATC_DebtManagemnt_09 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    | 0-3 Months |        6142217 | 376317983878646.9 | 376317983884096.9 |6137155|

  @Mtc12 @comp
  Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then if there is no assign amount then total amount should be same as pending amount

    Examples: 
      | Test Case ID             | Description                                                                                                                   | officer | uname           | password |
      | DRC_ATC_DebtManagemnt_10 | Validate the Assigned (FC) column amount for particular age bracket when total debt amount is assigned to collection officers | Admin   | ketan.prajapati | admin    |

  @Mtc13 @comp
  Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then if there is no assign amount then total amount should be same as pending amount

    Examples: 
      | Test Case ID             | Description                                                                                         | officer | uname           | password |
      | DRC_ATC_DebtManagemnt_11 | Validate the Pending (FC) column amount for particular age bracket when there is no assigned amount | Admin   | ketan.prajapati | admin    |

  #@Mtc14 @mtc15 @mtc16
 # Scenario Outline: Validate the Pending (FC) column amount for particular age bracket when objection is raised by the tax payer internal portal
  #  Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
   # When clicked on Debt Management Module must be on Debt Management Module
    #Then Verify the amount displayed in pending (FC),assigned (FC) column of particular age bracket after user has raised objection and it has been assigned ofr debt collection"<ageing>""<bpendingamount>""<bassignedamount>""<afterassigne>"

    #Examples: 
     # | Test Case ID             | Description                                                                                                  | officer | uname           | password | ageing     | bpendingamount | bassignedamount   | afterassigne      |
      #| DRC_ATC_DebtManagemnt_18 | Validate the Pending (FC) column amount for particular age bracket when objection is raised by the tax payer | Admin   | ketan.prajapati | admin    | 0-3 Months |        6142217 | 376317983878646.9 | 376317983883746.9 |

  @Mtc17
  Scenario Outline: Validate the Pending (FC) amount hyper link for all age brackets internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then click on the hyper link amount under pending (FC) column for "<pending>" age bracket

    Examples: 
      | Test Case ID             | Description                                                      | officer | uname           | password | pending             |
      | DRC_ATC_DebtManagemnt_12 | Validate the Pending (FC) amount hyper link for all age brackets | Admin   | ketan.prajapati | admin    | 24 Months and Above |
      | DRC_ATC_DebtManagemnt_13 | Validate the Pending (FC) amount hyper link for all age brackets | Admin   | ketan.prajapati | admin    | 13-24 Months        |
      | DRC_ATC_DebtManagemnt_14 | Validate the Pending (FC) amount hyper link for all age brackets | Admin   | ketan.prajapati | admin    | 7-12 Months         |
      | DRC_ATC_DebtManagemnt_15 | Validate the Pending (FC) amount hyper link for all age brackets | Admin   | ketan.prajapati | admin    | 4-6 Months          |
      | DRC_ATC_DebtManagemnt_16 | Validate the Pending (FC) amount hyper link for all age brackets | Admin   | ketan.prajapati | admin    | 0-3 Months          |

  @Mtc18 @comp
  Scenario Outline: Validate the amount in Total Debt (FC) for Total (FC),Pending (FC),and Assigned (FC) columns internal portal
    Given DGI "<officer>""<uname>""<password>""<location>"should be logged in to the internal portal
    When clicked on Debt Management Module must be on Debt Management Module
    Then Total Debt (FC) amount of Total (FC) column should be the sum of all amounts
    Then Total Debt (FC) amount of Pending (FC) column should be the sum of all amounts
    Then Total Debt (FC) amount of Assigned (FC) column should be the sum of all amounts

    Examples: 
      | Test Case ID             | Description                                                                                  | officer | uname           | password |
      | DRC_ATC_DebtManagemnt_17 | Validate the amount in Total Debt (FC) for Total (FC),Pending (FC),and Assigned (FC) columns | Admin   | ketan.prajapati | admin    |
