Feature: Verify the Fuel Management- Officer

  @TC_01
  Scenario Outline: Verify the cancelation of Reject fuel rate functionality - fx taxofficer
    Given User click on Fuel Management tab
    Then Click on Update button to update the fuel rate
    Then click on Save button on update fuel rate popup.
    Then Message of "Fuel price Accepted sucessfully" should be displayed
    Then Fuel Rates List the page should get displayed with caption "Approval Required"

    Examples: 
      | TestcaseID               | Description          |
      | FX_Management_officer_01 | Verify Base Currency |

  @TC_02
  Scenario Outline: Validate the close(X) icon,Effective date functionality on update fuel rate popup
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then Click on Update button to update the fuel rate
    Then Today should be selected
    Then Selects previous date
    Then close the pop up

    Examples: 
      | TestcaseID               | Description                                                          |
      | FX_Management_officer_02 | Validate the close(X) icon functionality on update fuel rate popup.. |

  @TC_03
  Scenario Outline: Validate  Historical Fuel Rate button and Previous button on it.
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then user is on "Fuel Management"
    Then Click on Historical Fuel rate button
    Then user should be on Historical fuel rate and records should be in newest to oldest and of six months only
    Then click on previous button on historical page
    Then user is on Fuel Rate List

    Examples: 
      | TestcaseID               | Description                                                     |
      | FX_Management_officer_03 | Validate  Historical Fuel Rate button and Previous button on it |

  @TC_04
  Scenario Outline: Verify the Approval of fuel rate functionality
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Approve button and check the message "<message>"

    Examples: 
      | TestcaseID               | Description          | message                                     |
      | FX_Management_officer_04 | Verify Base Currency | Approve rate has been approved successfully |
