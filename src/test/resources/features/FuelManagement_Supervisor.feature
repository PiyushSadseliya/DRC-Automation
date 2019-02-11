Feature: Verify the Fuel Management- Supervisor

  @TC_01
  Scenario Outline: Verify the cancelation of Reject fuel rate functionality - supervisor
    Given User click on Fuel Management tab
    When click on Reject button
    And enter the reason for the comment "<comment>"
    And user click on cancel button

    Examples: 
      | TestcaseID             | Description          | comment            |
      | FX_Management_Admin_14 | Verify Base Currency | Rates are too high |

  @TC_02
  Scenario Outline: Verify the character limitation on Reject fuel rate    
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Reject button
    And enter the reason for the comment "<comment>"
    And user check the informative message "<message>"
    And user click on cancel button

    Examples: 
      | TestcaseID             | Description          | comment | message                                   |
      | FX_Management_Admin_14 | Verify Base Currency | Too low | Comment must be of minimum 10 characters. |

  @TC_03
  Scenario Outline: Verify the Reject fuel rate functionality    
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Reject button
    And enter the reason for the comment "<comment>"
    And user clicked on update button "<message>"

    Examples: 
      | TestcaseID             | Description          | comment            | message                                     |
      | FX_Management_Admin_14 | Verify Base Currency | Rates are too high | Approve rate has been rejected successfully |

  @TC_04
  Scenario Outline: Verify the Approval of fuel rate functionality    
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Approve button and check the message "<message>"

    Examples: 
      | TestcaseID             | Description          | message                          |
      | FX_Management_Admin_14 | Verify Base Currency | Approve rate has been approved successfully |
