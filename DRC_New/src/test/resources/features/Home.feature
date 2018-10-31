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
@tag
Feature: Title of your feature
 Scenario Outline: Home page State requirements menu option verification
  
    Given User is on intoxalock home page "<url>"
    When User click on state requirements section from the menu bar
    Then User is redirected to state requirement  "<state_url>"

    Examples: 
      | Testcase_id | Url                            | state_url                                          |
      | TS_01       | https://beta.intoxalockdev.com | https://beta.intoxalockdev.com/state-requirements/ |

  Scenario Outline: Home page pricing  menu option verification
  
    Given User is on intoxalock home page "<url>"
    And User hover on pricing option from the menu bar
    When User Select Ignition interlock cost option from the list
    Then User is redirected to Ignition interlock cost page "< pricing_ignition_url >"
    And User hover on pricing option from the menu bar
    When User selelct the Financial assistance option from the list
    Then User is redirected to  Financial assistance page "<pricing_financial_url>"
    And User hover on pricing option from the menu bar
    When User select the Discounts & promotions option from the list
    Then User is redirected to Discounts & promotions page "<pricing_discount_url>"

    Examples: 
      | Testcase_id | Url                            | pricing_ignition_url                                    | pricing_financial_url                                                        | pricing_discount_url                                                         |
      | TS_01       | https://beta.intoxalockdev.com | https://beta.intoxalockdev.com/ignition-interlock-cost/ | https://beta.intoxalockdev.com/ignition-interlock-cost/financial-assistance/ | https://beta.intoxalockdev.com/ignition-interlock-cost/discounts-promotions/ |

  Scenario Outline: Home page installation locations  menu option verification
  
    Given User is on intoxalock home page "<url>"
    And User click on Installation Locations option from the menu bar
    Then User is redirected to  Installation Locations page of intoxalock "<installation_url >"

    Examples: 
      | Testcase_id | Url                            | installation_url                                       |
      | TS_01       | https://beta.intoxalockdev.com | https://beta.intoxalockdev.com/installation-locations/ |

  Scenario Outline: Home page Support  menu option verification
  
    Given User is on intoxalock home page "<url>"
    And User hover on support option  from the menu bar
    Then User select the  customer support option from the list
    When User is redirect to customer support page "<support_customer_url>"
    And User hover on support option  from the menu bar
    When User select device help option from the list
    Then User is redirected to device help page "<support_device_help_url>"
    And User hover on support option  from the menu bar
    When User select the How to use your device option from the list
    Then User is redirected to How to use your device page "<support_how_to_use_url>"
    And User hover on support option  from the menu bar
    When User select the vedios option from the list
    Then User is redirected to videos page "<support_vedios_url>"
    And User hover on support option  from the menu bar
    When User select contact us option from the list
    Then User is redirected to contact us page "<support_contactus>"

    Examples: 
      | Testcase_id | Url                            | support_customer_url                             | support_device_help_url                                      | support_how_to_use_url                                            | support_contactus                                                        | support_vedios_url                                       |
      | TS_01       | https://beta.intoxalockdev.com | https://beta.intoxalockdev.com/customer-support/ | https://beta.intoxalockdev.com/customer-support/device-help/ | https://beta.intoxalockdev.com/ignition-interlock-devices/how-to/ | https://beta.intoxalockdev.com/ignition-interlock-devices/how-to/videos/ | https://beta.intoxalockdev.com/customer-support/contact/ |

  Scenario Outline: Home page Devices menu option verification
  
    Given User is on intoxalock home page "<url>"
    And User hover on Devices option  from the menu bar
    When user select the What is an ignition interlock device from the list
    Then user is redirected to What is an ignition interlock device page "<Devices_what_url >"
    And User hover on Devices option  from the menu bar
    When User select the State certified device from the list
    Then User is redirected to State certified device page "<Devices_state_url>"
    And User hover on Devices option  from the menu bar
    When User select  Installation & removal option from the list
    Then User is redirected to Installation & removal page "<Device_installation_url>"
    And User hover on Devices option  from the menu bar
    When User select Mobile installation option from the list
    Then User is redirected to Mobile installation page "<Devices_mobile_url>"
    And User hover on Devices option  from the menu bar
    When User select the Ratings & reviews option from the list
    Then User is redirected to Ratings & reviews page "<Devices_rating_url>"
    And User hover on Devices option  from the menu bar
    When User select the Voluntary ignition interlocks option from the list
    Then User is redirected to Voluntary ignition interlocks page "<Devices_vol_url>"
    And User hover on Devices option  from the menu bar
    When User select the FAQs option from the list
    Then User is redirected to FAQs interlocks page "<Devices_FAQ_url>"
    And User hover on Devices option  from the menu bar
    When User select the Why choose Intoxalock option from the list
    Then User is redirected to Why choose Intoxalock interlocks page "<Devices_why_url>"

    Examples: 
      | Testcase_id | Url                            | Devices_what_url                                                                                | Devices_state_url                                          | Device_installation_url                                                         | Devices_mobile_url                                                                                  | Devices_rating_url                                                 | Devices_vol_url                                                                     | Devices_FAQ_url                                                | Devices_why_url                                                                          | TestQS_url                             |
      | TS_01       | https://beta.intoxalockdev.com | https://beta.intoxalockdev.com/ignition-interlock-devices/what-is-an-ignition-interlock-device/ | https://beta.intoxalockdev.com/ignition-interlock-devices/ | https://beta.intoxalockdev.com/ignition-interlock-devices/installation-removal/ | https://beta.intoxalockdev.com/ignition-interlock-devices/installation-removal/mobile-installation/ | https://beta.intoxalockdev.com/ignition-interlock-devices/reviews/ | https://beta.intoxalockdev.com/ignition-interlock-devices/drunk-driving-prevention/ | https://beta.intoxalockdev.com/ignition-interlock-devices/faq/ | https://beta.intoxalockdev.com/ignition-interlock-devices/reviews/why-choose-intoxalock/ | https://beta.intoxalockdev.com/testqs/ |

  Scenario Outline: Home page Devices menu option verification
  
    Given User is on intoxalock home page "<url>"
    And User click on testQS option from the menu bar
    Then User is redirected to TestQS page "<TestQS_url>"

    Examples: 
      | Testcase_id | Url                            | TestQS_url                             |
      | TS_01       | https://beta.intoxalockdev.com | https://beta.intoxalockdev.com/testqs/ |
