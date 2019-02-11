Feature: Verify the Fuel Management- Supervisor

 
  @TC_04
  Scenario Outline: Verify the Approval of fuel rate functionality    
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Approve button and check the message "<message>"

    Examples: 
      | TestcaseID             | Description          | message                          |
      | FX_Management_Admin_14 | Verify Base Currency | Approve rate has been approved successfully |
