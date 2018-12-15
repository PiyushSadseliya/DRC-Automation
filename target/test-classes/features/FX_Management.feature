Feature: FX Management Page Tax Officer

  @SP_7.1
  Scenario Outline: FX management module TestSuite to validate all funcationality - fx taxofficer
    When click on FX Management tab
    Then verify the Base currency on the FX management is Congolese France and its value is one
    And click on update button and pop up appear
    And verify the pop up and see base currency is 1
    And enter currency for "<data>"
    And click on save button on pop up on officer
    And click on Historical FX Rates button
    And click on Previous button and again navigate to FX management dashboard
    And click on logout button fx taxofficer

    Examples: 
      | TestcaseID                | data  | message                               |
      | FX_Management_Officer_001 | 0.047 | FX currency rate updated successfully |

  @SP_7.2
  Scenario Outline: FX management module TestSuite to validate all funcationality - fx-supervisor
    When click on FX tab supervisor
    Then verify the base_currency of Congolese France and its value is one
    And click on approve button
    And click on historical_fx_rates button
    And click on prev button and return navigate to dashboard
    And click on logout button in fx-supervisor

    Examples: 
      | TestcaseID                | approvedata | message                               |
      | FX_Management_Officer_001 |       14.42 | FX currency rate updated successfully |

  @SP_7.3
  Scenario Outline: FX management module TestSuite to validate all funcationality - fx-admin
    Given admin is on FX Management "<TestcaseID>" "<Description>"
    When admin click on FX tab
    Then verify the admin base_currency of Congolese France and its value is one
    And click on currency and select "<SelectOption>"
    And click on List of currencies and select currency
    And click on Save button and see message "<mess>"
    And click on admin Update button
    And enter admin currency for "<data>"
    And admin click on save button on pop up
    #And click on admin approve button
    And click on admin historical_fx_rates button
    And click on admin prev button and return navigate to dashboard
    And click on admin logout button in fx-supervisor

    Examples: 
      Examples:

      | TestcaseID              | Description                        | name  | SelectOption       | mess                            | data |
      | FX_Management_Admin_001 | Verify admin fx all  functionality | ketan | txt_AddNewCurrency | New currency added successfully | 0.056 |
