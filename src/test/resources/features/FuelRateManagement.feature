#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@FuelManagement
Feature: Update and Appove or Reject the Fuel Rate.

  @admin @tc32 @tc31 @tc33
  Scenario Outline: Validate the Change rate column,Previous Rate Header,Current Rates before updating- internal portal
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then user is on "Fuel Management"
    Then Contains Header Previous Rate
    Then Contains header Current Rates
    Then The Change in Rate (CDF) column should be Previous Rate-Current Rate

    Examples: 
      | TestcaseID                      | Description                                      |
      | DRC_ATC_FuelManagement_Admin_01 | Validate the Change rate column- internal portal |

 @admin @tc38
  Scenario Outline: Validate the close(X) icon,Effective date functionality on update fuel rate popup
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then user is on "Fuel Management"	
    Then Click on Update button to update the fuel rate
    Then close the pop up

    Examples: 
      | TestcaseID                      | Description                                                          |
      | DRC_ATC_FuelManagement_Admin_02 | Validate the close(X) icon functionality on update fuel rate popup.. |
      
  @admin @tc39 @tc40 @tc42 @tc43 @tc44 @tc45 @tc46
  Scenario Outline: Validate the Excise,VAT,Fuel Rate,Royalty,Total are getting calculated on Save of Update fuel rate popup Approval Required Rejected
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then user is on "Fuel Management"
    Then Contains Header Previous Rate
    Then Contains header Current Rates
    # Then The Change in Rate (CDF) column should be Previous Rate-Current Rate
    Then Click on Update button to update the fuel rate
    Then Selects effective date of future date
    Then enter Fuel Rates of Petrol in basic"<basicpetrolrate>" Rates are Excise"<Excise>" ,VAT"<VAT>",Fuel Tax"<Fuel>",Royalty"<Royalty>" and does Total
    Then enter Fuel Rates of Diesel in basic"<basicdieselrate>" Rates are Excise"<Excise>" ,VAT"<VAT>",Fuel Tax"<Fuel>",Royalty"<Royalty>" and does Total
    Then enter Fuel Rates of Kerosene in basic"<basickerosenerate>" Rates are Excise"<Excise>" ,VAT"<VAT>",Fuel Tax"<Fuel>",Royalty"<Royalty>" and does Total
    Then click on Save button on update fuel rate popup.
    Then Message of "Fuel price Accepted sucessfully" should be displayed
    Then Fuel Rates List the page should get displayed with caption "Approval Required"
    #Then Current Rate should be dispayed
    #And New Rate with the effective date as well should be displayed
    #Then The Change in Rate (CDF) column should be New Rate -Current Rate
    Then Admin should not approve or reject the self-updated rates

    Examples: 
      | TestcaseID                      | Description                                                                                         | Excise | VAT | Fuel | Royalty | basicpetrolrate | basicdieselrate | basickerosenerate |
      | DRC_ATC_FuelManagement_Admin_03 | Validate the close(X) icon functionality on update fuel rate popup  Approval Required admin update. |     10 |   0 |    5 |      12 |             100 |             100 |               100 |

  @TC_01
  Scenario Outline: Verify the cancelation of Reject fuel rate functionality - supervisor
    Given User click on Fuel Management tab
    When click on Reject button
    And enter the reason for the comment "<comment>"
    And user click on cancel button

    Examples: 
      | TestcaseID                  | Description          | comment            |
      | FX_Management_supervisor_01 | Verify Base Currency | Rates are too high |

  @TC_02
  Scenario Outline: Verify the character limitation on Reject fuel rate
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Reject button
    And enter the reason for the comment "<comment>"
    And user check the informative message "<message>"
    And user click on cancel button

    Examples: 
      | TestcaseID                           | Description          | comment | message                                   |
      | DRC_ATC_FuelManagement_supervisor_02 | Verify Base Currency | Too low | Comment must be of minimum 10 characters. |

  @TC_03
  Scenario Outline: Verify the Reject fuel rate functionality
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Reject button
    And enter the reason for the comment "<comment>"
    And user clicked on update button "<message>"

    Examples: 
      | TestcaseID                           | Description          | comment            | message                                     |
      | DRC_ATC_FuelManagement_supervisor_03 | Verify Base Currency | Rates are too high | Approve rate has been rejected successfully |

  @admin @tc35 @tc37
  Scenario Outline: Validate  Historical Fuel Rate button and Previous button on it internal portal
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then user is on "Fuel Management"
    Then Click on Historical Fuel rate button
    Then user should be on Historical fuel rate and records should be in newest to oldest and of six months only"<message>"of rejection should be displayed.
    Then click on previous button on historical page
    Then user is on Fuel Rate List

    Examples: 
      | TestcaseID                      | Description                                                     | message            |
      | DRC_ATC_FuelManagement_Admin_03 | Validate  Historical Fuel Rate button and Previous button on it | Rates are too high |

  @admin @tc39 @tc40 @tc42 @tc43 @tc44 @tc45 @tc46 @approval
  Scenario Outline: Validate the Excise,VAT,Fuel Rate,Royalty,Total are getting calculated,Save on Update fuel rate popup Approval Required
    Given The officer has logged in "<TestcaseID>""<Description>"
    When the user click on Fuel Rate Management
    Then user is on "Fuel Management"
    Then Contains Header Previous Rate
    Then Contains header Current Rates
    # Then The Change in Rate (CDF) column should be Previous Rate-Current Rate
    Then Click on Update button to update the fuel rate
    Then Selects effective date of future date
    Then enter Fuel Rates of Petrol in basic"<basicpetrolrate>" Rates are Excise"<Excise>" ,VAT"<VAT>",Fuel Tax"<Fuel>",Royalty"<Royalty>" and does Total
    Then enter Fuel Rates of Diesel in basic"<basicdieselrate>" Rates are Excise"<Excise>" ,VAT"<VAT>",Fuel Tax"<Fuel>",Royalty"<Royalty>" and does Total
    Then enter Fuel Rates of Kerosene in basic"<basickerosenerate>" Rates are Excise"<Excise>" ,VAT"<VAT>",Fuel Tax"<Fuel>",Royalty"<Royalty>" and does Total
    Then click on Save button on update fuel rate popup.
    Then Message of "Fuel price Accepted sucessfully" should be displayed
    Then Fuel Rates List the page should get displayed with caption "Approval Required"
    #Then Current Rate should be dispayed
    #And New Rate with the effective date as well should be displayed
    #Then The Change in Rate (CDF) column should be New Rate -Current Rate
    Then Admin should not approve or reject the self-updated rates

    Examples: 
      | TestcaseID                      | Description                                                                                         | Excise | VAT | Fuel | Royalty | basicpetrolrate | basicdieselrate | basickerosenerate |
      | DRC_ATC_FuelManagement_Admin_04 | Validate the close(X) icon functionality on update fuel rate popup  Approval Required admin update. |     10 |   0 |    5 |      12 |             100 |             100 |               100 |

  @TC_04
  Scenario Outline: Verify the Approval of fuel rate functionality supervisor
    When User click on Dashboard
    And User click on Fuel Management tab
    And click on Approve button and check the message "<message>"

    Examples: 
      | TestcaseID                           | Description          | message                                     |
      | DRC_ATC_FuelManagement_Supervisor_04 | Verify Base Currency | Approve rate has been approved successfully |
