Feature: Verify the Fuel Management- Officer

  @TC_01
  Scenario Outline: Verify the cancelation of Reject fuel rate functionality - supervisor
    Given User click on Fuel Management tab
    When click on Reject button
    And enter the reason for the comment "<comment>"
    And user click on cancel button

    Examples: 
      | TestcaseID             | Description          | comment            |
      | FX_Management_Admin_14 | Verify Base Currency | Rates are too high |