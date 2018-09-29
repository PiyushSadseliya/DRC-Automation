Feature: Auditing Audit

  Scenario Outline: Export Auditing Audit Report
    Given The user is on the Auditing Audit page
    When User selects report period: "<report period>"
    And User selects report type: "<report type>"
    And User selects COB: "<Close of Business>"
    And User search for customer: "<Customer Name>"
    And User select customer
    And User clicks on View Report
    And User selects report bundle: "<report bundle>"
    And User selects report format: "<report format>"
    And User exports an auditing audit report
    Then Toast message: "<toast message>" equals expected result
    And saved report equals report name: "<report name>" for AuditingAudit

Examples:
      |TestcaseID         |report period |report type      |Close of Business      |Customer Name    |report bundle |report format |toast message                  |report name      |
      |TC_Auditing_Audit01|Day's End     |View Report Data |01/30/18               |Amalgamated Bank |Single Report |XLS           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit02|Day's End     |View Report Data |01/30/18               |Amalgamated Bank |Single Report |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit03|Day's End     |View Report Data |01/30/18               |Amalgamated Bank |Single Report |PDF           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit04|Month's End   |View Report Data |Jan 2018               |Amalgamated Bank |Single Report |XLS           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit05|Month's End   |View Report Data |Jan 2018               |Amalgamated Bank |Single Report |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit06|Month's End   |View Report Data |Jan 2018               |Amalgamated Bank |Single Report |PDF           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit07|Day's End     |View Cover Sheet |01/30/18               |Amalgamated Bank |Single Report |PDF           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit08|Day's End     |View Cover Sheet |01/30/18               |Amalgamated Bank |Single Report |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit09|Day's End     |View Cover Sheet |01/30/18               |Amalgamated Bank |Single Report |XLS           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit10|Month's End   |View Cover Sheet |Jan 2018               |Amalgamated Bank |Single Report |PDF           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit11|Month's End   |View Cover Sheet |Jan 2018               |Amalgamated Bank |Single Report |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit12|Month's End   |View Cover Sheet |Jan 2018               |Amalgamated Bank |Single Report |XLS           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit13|Month's End   |View Cover Sheet |Jan 2018               |Amalgamated Bank |Multi Report  |PDF           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit14|Month's End   |View Cover Sheet |Jan 2018               |Amalgamated Bank |Multi Report  |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit15|Month's End   |View Cover Sheet |Jan 2018               |Amalgamated Bank |Multi Report  |XLS           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit16|Day's End     |View Cover Sheet |01/30/18               |Amalgamated Bank |Multi Report  |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit17|Day's End     |View Cover Sheet |01/30/18               |Amalgamated Bank |Multi Report  |XLS           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit18|Day's End     |View Cover Sheet |01/30/18               |Amalgamated Bank |Multi Report  |PDF           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit19|Month's End   |View Report Data |Jan 2018               |Amalgamated Bank |Multi Report  |PDF           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit20|Month's End   |View Report Data |Jan 2018               |Amalgamated Bank |Multi Report  |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit21|Month's End   |View Report Data |Jan 2018               |Amalgamated Bank |Multi Report  |XLS           |ZIP file exported successfully |Accounting Audit |

      |TC_Auditing_Audit22|Day's End     |View Report Data |01/30/18               |Amalgamated Bank |Multi Report  |CSV           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit23|Day's End     |View Report Data |01/30/18               |Amalgamated Bank |Multi Report  |XLS           |ZIP file exported successfully |Accounting Audit |
      |TC_Auditing_Audit24|Day's End     |View Report Data |01/30/18               |Amalgamated Bank |Multi Report  |PDF           |ZIP file exported successfully |Accounting Audit |


Scenario Outline: Export Auditing Audit Report for multiple dates with single customer
    Given The user is on the Auditing Audit page
    When User selects report period: "<report period>"
    And  User selects report type: "View Cover Sheet"
    And User selects multiples Close of Business
    And User search for customer: "<Customer Name>"
    And User select customer
    And User clicks on View Report
    And User selects report bundle: "<report bundle>"
    And User exports an auditing audit report
    Then Toast message: "<toast message>" equals expected result
  And saved report equals report name: "<report name>" for AuditingAudit

    Examples:
          |TestcaseID         |report period  |Customer Name    |report bundle |toast message                  |report name      |
          |TC_Auditing_Audit25|Day's End      |Amalgamated Bank |Multi Report  |                               |                 |
          |TC_Auditing_Audit26|Day's End      |Amalgamated Bank |Single Report |                               |                 |
          |TC_Auditing_Audit25|Month's End    |Amalgamated Bank |Multi Report  |                               |                 |
          |TC_Auditing_Audit26|Month's End    |Amalgamated Bank |Single Report |                               |                 |




 Scenario Outline: Export Auditing Audit Report for multiple customer and multile dates
      Given The user is on the Auditing Audit page
      When User selects report period: "<report period>"
      And User selects report type: "View Cover Sheet"
      And User selects multiples Close of Business
      And User selects multiples customers
      And User clicks on View Report
      And User selects report bundle: "<report bundle>"
      And User exports an auditing audit report
      Then Toast message: "<toast message>" equals expected result
      And saved report equals report name: "<report name>" for AuditingAudit

      Examples:
            |TestcaseID         |report period  |report bundle |toast message                  |report name      |
            |TC_Auditing_Audit27|Day's End      |Multi Report  |                               |                 |
            |TC_Auditing_Audit28|Day's End      |Single Report |                               |                 |
            |TC_Auditing_Audit27|Month's End    |Multi Report  |                               |                 |
            |TC_Auditing_Audit28|Month's End    |Single Report |                               |                 |


 Scenario Outline: Export Auditing Audit Report for multiple customer with single date
       Given The user is on the Auditing Audit page
       When User selects report period: "<report period>"
       And  User selects report type: "View Cover Sheet"
       And User select COB: "<Close of Business>"
       And User selects multiples customers
       And User clicks on View Report
       And User selects report bundle: "<report bundle>"
       And User exports an auditing audit report
       Then Toast message: "<toast message>" equals expected result
   And saved report equals report name: "<report name>" for AuditingAudit

       Examples:
             |TestcaseID         |report period  |Close of Business    |report bundle |toast message                  |report name      |
             |TC_Auditing_Audit27|Day's End      |01/30/18             |Multi Report  |                               |                 |
             |TC_Auditing_Audit28|Month's End    |Jan 2018             |Multi Report  |                               |                 |
             |TC_Auditing_Audit27|Day's End      |01/30/18             |Single Report |                               |                 |
             |TC_Auditing_Audit28|Month's End    |Jan 2018             |Single Report |                               |                 |
