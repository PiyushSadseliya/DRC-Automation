Feature: Automate ACS To GL

  Scenario Outline: Add New ACS_to_GL Record
    Given user is on ACS_to_GL page
    When user clicks on add button
    Then user enter "<GROUP>" value
    And enters ACCOUNT ID "<account1>" "<account2>" "<account3>"
    And Selects "<Reverse Sign>"
    And Select "<Plus/Less>"
    And clicks on "<save/cancel>" button
    And verify toast message "<toast message>"

    Examples:
      | TestcaseID      | GROUP          | account1 | account2     | account3                       | Reverse Sign | Plus/Less | save/cancel | toast message                  |
      | TC_ACSToGLAdd01 | Advances       | 140-0010 | 01400010-100 | CITIBANK                       | No           | plus      | save-btn    | Information saved successfully |
      | TC_ACSToGLAdd02 | Demand Deposit |          |              |                                | Yes          | less      | save-btn    | All fields are mandatory       |
      | TC_ACSToGLAdd03 |                | 140-0000 | 01400000-100 | DEUTSCHE/BANKERS TRUST COMPANY | No           | less      | save-btn    | All fields are mandatory       |
      | TC_ACSToGLAdd04 |                |          |              |                                | No           | less      |             | All fields are mandatory       |
      | TC_ACSToGLAdd05 | Advances       | 140-0010 | 01400010-100 | CITIBANK                       | No           | plus      | btn_cancel  |                                |

 Scenario Outline: Edit ACS_to_GL record
     Given user is on ACS_to_GL page
     When Search for "<Account Id>"
     Then select account id
     And click on edit icon
     And select other the value of "<group>" from dropdown
     And change the account id "<value1>" "<value2>" "<value3>"
     And click on "<save/cancel>"
     Then verify toast message "<toast message>"

     Examples:
       | TestcaseID       | Account Id   | group    | value1   | value2       | value3   | save/cancel | toast message                  |
       | TC_ACSToGLEdit01 | 30200010-100 | Advances | 140-0010 | 01400010-100 | CITIBANK | save-btn    | Information saved successfully |
       | TC_ACSToGLEdit02 | 30200010-100 | Advances | 140-0010 | 01400010-100 | CITIBANK | btn_cancel  |                                |
       | TC_ACSToGLEdit03 | 30200010-100 |          |          |              |          | save-btn    | All fields are mandatory       |

  Scenario Outline: Delete ACS_to_GL Record
    Given user is on ACS_to_GL page
    When Search for "<Account Id>"
    Then user clicks on delete icon of first value
     And click on "<save/cancel>"
    Then verify toast message "<toast message>"

    Examples:
      | TestcaseID         | Account Id   | delete/cancel | toast message               |
      | TC_ACSToGlDelete01 | 30200010-100 | delete-btn    | Record deleted successfully |
      | TC_ACSToGlDelete02 | 30200010-100 | del-cancel    |                             |

  Scenario Outline: Export ACS_to_GL report
    Given user is on ACS_to_GL page
    When select "<REPORT>" option
    Then click on export button
    And saved report equals report name: "<report name>"
    And verify toast message "<toast message>"

    Examples:
      | TestcaseID         | REPORT | report name             | toast message                  |
      | TC_ACSToGLExport01 | CSV    | FHLB-ACSToGLMaintenance | CSV File Exported Successfully |
      | TC_ACSToGLExport02 | XLS    | FHLB-ACSToGLMaintenance | XLS File Exported Successfully |
      | TC_ACSToGLExport03 | PDF    | FHLB-ACSToGLMaintenance | PDF File Exported Successfully |
