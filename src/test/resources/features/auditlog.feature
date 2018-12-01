Feature: Audit Log


  Scenario Outline: Export Transaction Inquiry for single date of Audit Log
    Given The user is on Audit Log page
    When User select date: "<date>"
    And User click Query
    Then User should select report format: "<report format>"
    And User click on Export Report
    And saved report equals report name: "<report name>" for audit log
    And verify toast messages "<toast message>"
        Examples:
          | TestcaseID           | date    | report format |report name             |toast message                 |
          | TC_AuditLogExport01  | 04/17/18| CSV           |FHLB-Transaction-Inquiry|CSV File Exported Successfully|
          | TC_AuditLogExport02  | 04/17/18| XLS           |FHLB-Transaction-Inquiry|XLS File Exported Successfully|
          | TC_AuditLogExport03  | 04/17/18| PDF           |FHLB-Transaction-Inquiry|PDF File Exported Successfully|


    Scenario Outline: Export Transaction Inquiry for all dates of Audit Log
        Given The user is on Audit Log page
        When User select all
        And User click Query
        Then User should select report format: "<report format>"
        And User click on Export Report
      And saved report equals report name: "<report name>" for audit log
        And verify toast messages "<toast message>"
            Examples:
          | TestcaseID           | date    | report format |report name             |toast message                 |
          | TC_AuditLogExport01  | 04/17/18| CSV           |FHLB-Transaction-Inquiry|CSV File Exported Successfully|
          | TC_AuditLogExport02  | 04/17/18| XLS           |FHLB-Transaction-Inquiry|XLS File Exported Successfully|
          | TC_AuditLogExport03  | 04/17/18| PDF           |FHLB-Transaction-Inquiry|PDF File Exported Successfully|

     Scenario: Deselect all functionality for Audit Log
        Given The user is on Audit Log page
        When User select all
        And User Deselect all


Scenario Outline: Export Transaction Inquiry details for single date of Audit Log
    Given The user is on Audit Log page
    When User select date: "<date>"
    And User click Query
    And User click on first value under input date-time
    Then User should select report format: "<report format>"
    And User click on Export Report
  And saved report equals report name: "<report name>" for audit log
    And verify toast messages "<toast message>"
        Examples:
          | TestcaseID           | date    | report format |report name             |toast message                 |
          | TC_AuditLogExport01  | 04/17/18| CSV           |FHLB-Transaction-Details|CSV File Exported Successfully|
          | TC_AuditLogExport02  | 04/17/18| XLS           |FHLB-Transaction-Details|XLS File Exported Successfully|
          | TC_AuditLogExport03  | 04/17/18| PDF           |FHLB-Transaction-Details|PDF File Exported Successfully|


Scenario Outline: Export Transaction Inquiry details for all dates of Audit Log
    Given The user is on Audit Log page
    When User select all
    And User click Query
    And User click on first value under input date-time
    Then User should select report format: "<report format>"
    And User click on Export Report
  And saved report equals report name: "<report name>" for audit log
    And verify toast messages "<toast message>"
        Examples:
          | TestcaseID           | report format |report name             |toast message                 |
          | TC_AuditLogExport04  | CSV           |FHLB-Transaction-Details|CSV File Exported Successfully|
          | TC_AuditLogExport05  | XLS           |FHLB-Transaction-Details|XLS File Exported Successfully|
          | TC_AuditLogExport06  | PDF           |FHLB-Transaction-Details|PDF File Exported Successfully|


Scenario Outline: Export Transaction Inquiry for multiple dates of Audit Log
    Given The user is on Audit Log page
    When User selects multiple dates
    And User click Query
    And User click on first value under input date-time
    Then User should select report format: "<report format>"
    And User click on Export Report
  And saved report equals report name: "<report name>" for audit log
    And verify toast messages "<toast message>"
        Examples:
          | TestcaseID           | report format |report name             |toast message                 |
          | TC_AuditLogExport07  | CSV           |FHLB-Transaction-Details|CSV File Exported Successfully|
          | TC_AuditLogExport08  | XLS           |FHLB-Transaction-Details|XLS File Exported Successfully|
          | TC_AuditLogExport09  | PDF           |FHLB-Transaction-Details|PDF File Exported Successfully|



