Feature: User is on internal Portal for objection and appeal

  @TC_03_Priority
  Scenario Outline: Verify the Filter by Functionality based on filter option Priority Tax Officer internal portal
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type status "<Pir>" and verify "<VerifyPir>"

    Examples: 
      | TestcaseID | Description                            | filter                    | Pir  | VerifyPir |
      | Priority_1 | Verify date filteration functionalityt | drp_Priority_click_filter | High | High      |

  # | Priority_2 | Verify date filteration functionalityt | drp_Priority_Click | Medium | Medium    |
  # | Priority_3 | Verify date filteration functionalityt | drp_Priority_Click | Low    | Low       |
  @TC_03_CaseType
  Scenario Outline: Verify the Filter by Functionality based on filter option Case Type Status Priority Tax Officer
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User user click on case type "<CaseType>" and click on search button search result "<QaResult>" on case management

    Examples: 
      | TestcaseID   | Description                            | filter       | CaseType               | QaResult             |
      | CaseType_3_1 | Verify date filteration functionalityt | drp_CaseType | drp_ObjectionAndAppeal | Objection and appeal |
      | CaseType_3_2 | Verify date filteration functionalityt | drp_CaseType | drp_Debt               | Debt Collection      |
      | CaseType_3_3 | Verify date filteration functionalityt | drp_CaseType | drp_PA                 | Payment Agreement    |
      | CaseType_3_4 | Verify date filteration functionalityt | drp_CaseType | drp_Audit              | Audit                |

  @TC_03_Status
  Scenario Outline: Verify the Filter by Functionality based on filter option Status
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type status "<status>" and verify "<VerifyStatus>"

    Examples: 
      | TestcaseID    | Description                            | filter           | status             | VerifyStatus       |
      | Case_Status_1 | Verify date filteration functionalityt | drp_Status_Click | Open               | Open               |
      | Case_Status_2 | Verify date filteration functionalityt | drp_Status_Click | Reject             | Reject             |
      | Case_Status_3 | Verify date filteration functionalityt | drp_Status_Click | Under Review       | Under Review       |
      | Case_Status_4 | Verify date filteration functionalityt | drp_Status_Click | Request adjustment | Request adjustment |

  #| Case_Status_5 | Verify date filteration functionalityt | drp_Status_Click | ApproveReport      | ApproveReport      |
  @TC_03_Taxofficer
  Scenario Outline: Verify the Filter by Functionality based on filter option Priority Tax Officer
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type status "<Pir>" and verify "<VerifyPir>"

    Examples: 
      | TestcaseID        | Description                            | filter            | Pir    | VerifyPir |
      | Case_Taxofficer_1 | Verify date filteration functionalityt | drp_Officer_Click | Laxman | Laxman    |

  #   | Case_Taxofficer_2 | Verify date filteration functionalityt | drp_Officer_Click | Ketan  | Ketan     |
  @TC_05
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID          | Description               | Period        | ClickPage   | CheckPage       | option         |
      | Case_Management_9_1 | validating last and right | txt_PeriodJan | lbl_AssLast | lbl_AssestRight | last and right |

  #    | Case_Management_9_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
  #    | Case_Management_9_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
  #    | Case_Management_9_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
  #    | Case_Management_9_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
  #    | Case_Management_9_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |
  @TC_09
  Scenario Outline: Validate the Reassign option functionality under view column
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User type status "<status>"
    And user click on Reassign
    And select another Tax Officier fron the list "<ChangeOfficer>"
    And click on right tick for reassign
    Then Tax Officier Changed and toast message display

    Examples: 
      | TestcaseID       | Description                            | filter           | status | ChangeOfficer           |
      | Case_Management_ | Verify date filteration functionalityt | drp_Status_Click | Open   | drp_SelectTaxOfficerOne |

  @TC_19
  Scenario Outline: Validate the functionality of Transaction Details button
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on manage drop down and click on view
    And User click on Transaction Detail button
    And User navigate to Statement of transaction page

    Examples: 
      | TestcaseID       | Description                            | filter           | ChangeOfficer           |
      | Case_Management_ | Verify date filteration functionalityt | drp_Status_Click | drp_SelectTaxOfficerOne |

  @TC_21_17_18
  Scenario Outline: Validate the previous and cancel button functionality
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on manage drop down and click on view
    And User click on previous button on objection page
    And User navigate to Case Management list page
    And User click on manage drop down and click on view

    #And User click on cancel button on objection page
    #And User navigate to Case Management list page
    #And User click on manage drop down and click on view
    #And User click on comment section and type comment "<comment>" and see mess"<mess>"
    Examples: 
      | TestcaseID       | Description                            | comment       | mess                           |
      | Case_Management_ | Verify date filteration functionalityt | need document | Objection updated successfully |

  @TC_08
  Scenario Outline: Validate the priority is set correctly for the individual tax payer
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And User click on Dashboard and click on pin button
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on priority
    And User select priority "<priority>"
    And User click on submit button

    #And User see validation message for changing priority "<mess>"
    Examples: 
      | TestcaseID       | Description                            | filter     | id              | priority   | mess                           |
      | Case_Management_ | Verify date filteration functionalityt | drp_CaseID | O18121200000003 | drp_P_High | Objection updated successfully |
