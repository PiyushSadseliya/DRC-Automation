Feature: User is on FX Management Page DGI Admin

 
   @TC_05 @name_and_profile
  Scenario Outline: Validate the Name and profile picture displayed  on all the screens -internal portal
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the name and profile picture "<name>"
    And User Click on Historical FX Rates button
    And User verify the name and profile picture "<name>"

    Examples: 
      | TestcaseID             | Description             | name  |
      | FX_Management_Admin_05 | Verify Name and profile | ketan |

  @TC_06_07
  Scenario Outline: Validate add new currency and remove currency functionality under currency dropdown 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on currency and select "<SelectOption>"
    And User click on List of currencies and select currency
    And User click on Save button and see message "<mess>"
    And User click on currency and select "<SelectOption1>"
    And User click on List of currencies and select currency
    And User click on Save button and see message "<messRemoved>"

    Examples: 
      | TestcaseID                | Description                  | SelectOption       | SelectOption1      | mess                            | messRemoved                   |
      | FX_Management_Admin_06_07 | Verify Log out functionality | txt_AddNewCurrency | txt_RemoveCurrency | New currency added successfully | Currency removed successfully |

  @TC_09
  Scenario Outline: Validate the Update currency functionality with valid data  
    Given User is on FX Management "<TestcaseID>" "<Description>"  
    And User click on FX Management tab
    And User click on Update button and pop up appear
    And User enter currency for "<data>"
    And User see previously currency entered value on fx management
    And User click on cancel button on fx management
    And User click on Update button and pop up appear
    And User check previously enter currency value on fx management officer
    And User click on save button on pop up
    And User see mess for admin "<mess>"
    And User see reject and approve is disable on admin

    Examples: 
      | TestcaseID             | Description                                        | data | mess                                  |
      | FX_Management_Admin_09 | Verify Update currency functionality functionality |   50 | FX currency rate updated successfully |

  # cant automate invalid data as by default 0 is taken and update button isn not present
  #  @TC_10
  # Scenario Outline: Validate the Update currency functionality with invalid data
  #   Given User is on FX Management "<TestcaseID>" "<Description>"
  #   And User see FX Management
  #   And User click on FX Management tab
  #   And User click on Update button and pop up appear
  #   And User click on currency "<click>"
  #   And User enter data "<data>" in currency
  #   And User click on save button
  #   And User check validation "<message>"
  #    Examples:
  #      | TestcaseID             | Description                                               | click | data                 | message                     |
  #      | FX_Management_Admin_10 | Verify Update currency functionality invalid alphanumeric |       | @A#$%B               | Currency rates are required |
  #      | FX_Management_Admin_11 | Verify Update currency functionality invalid max character|       | 14.67023489104018000 |                             |
  
       
      

  @TC_13
  Scenario Outline: Validate the Historical FX Rates button functionality 
    Given User is on FX Management "<TestcaseID>" "<Description>" 
    And User click on FX Management tab
    And User Click on Historical fx rates button
    And User check in FX management list

    Examples: 
      | TestcaseID             | Description                                     |
      | FX_Management_Admin_13 | Verify Historical FX Rates button functionality |

  @TC_14
  Scenario Outline: Validate the Base currency on all the pages of FX management module
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is one
    And User click on update button
    And User see pop up and see base currency is 1
    And User click on cancel button on pop up
    And User click on Historical FX Rates button and verify the base currency

    Examples: 
      | TestcaseID             | Description          |
      | FX_Management_Admin_14 | Verify Base Currency |

  @TC_15
  Scenario Outline: Validate the from and to date search functionality on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User verify the by default date displaying in the From date and To date "<FD>" "<TD>"
    And User Select Todays date "<TodayDate>" in From and check selected date
    And USer Select todays days "<ToDate>" in To and check selected date
    And User click on search icon and today date should display "<DisplayDate>"
    And User select date which the currency record are not present in From "<NoCurrencyFromDate>"
    And User select date which the currency record are not present in To "<NoCurrencyToDate>"
    And User click on search icon
    And User see message no record found for date

    Examples: 
      | TestcaseID             | Description                      | FD         | TD         | TodayDate | ToDate | DisplayDate | NoCurrencyFromDate | NoCurrencyToDate |
      | FX_Management_Admin_15 | Verify date search functionality | 11/22/2018 | 11/28/2018 |        28 |     28 | 11/28/2018  |                  1 |                1 |

  @TC_16
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID               | Description                | Period        | ClickPage       | CheckPage       | option          |
      | FX_Management_Admin_16_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
      | FX_Management_Admin_16_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
      | FX_Management_Admin_16_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
      | FX_Management_Admin_16_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
      | FX_Management_Admin_16_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
      | FX_Management_Admin_16_6 | validating first and first | txt_PeriodJan | lbl_AssFirst   | lbl_AssFirst    | first and first |

  @TC_17
  Scenario Outline: Validate the previous button functionality on Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User click on Previous button and again navigate to FX management dashboard

    Examples: 
      | TestcaseID             | Description                          |
      | FX_Management_Admin_17 | Verify previous button functionality |

  @TC_18
  Scenario Outline: Validate the Target Currencies column data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify already added currencies "<verifyCurrency>" on FX management module

    Examples: 
      | TestcaseID             | Description              | verifyCurrency |
      | FX_Management_Admin_18 | Verify Target Currencies | GBP - Pound    |

  @TC_19_20
  Scenario Outline: Validate the New conversion rate(approval required) column data when officer has updated the currency rates
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout fx
    And User log in with officer credencial and update the currency
    Then User logout fx
    And User log in with DGI Admin credencial and verify currency

    Examples: 
      | TestcaseID                | Description                |
      | FX_Management_Admin_19_20 | Verify New conversion rate |
      
      
      
   @TC_04
  Scenario Outline: Validate the log out functionality  on FX Management landing and Historical FX Rates page 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    Then User logout fx
    And User again log in
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    Then User logout and verify

    Examples: 
      | TestcaseID             | Description                  |
      | FX_Management_Admin_04 | Verify Log out functionality |
      
      
       @TC_11
  Scenario Outline: Validate the Approve button functionality  internal portal
  
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
#   Then User logout fx 
      And User close browser
#    And User click on Approve and user see toast mess "<mess>"
    And User enter credencial for DGI Officer and update the currency and close      
    And User enter credencial for DGI Admin and verify Approve and user see toast mess "<mess>"
    

    Examples: 
      | TestcaseID             | Description                         | mess                                              |
      | FX_Management_Admin_11 | Verify Approve button functionality | New currency rates has been approved successfully |

  @TC_12
  Scenario Outline: Validate the Reject button functionality  
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
#  Then User logout fx
  #   And User close browser 
   And User enter credencial for DGI Officer and update the currency
   And User enter credencial for DGI Admin and verify Reject and user see toast mess "<mess>"

    Examples: 
      | TestcaseID             | Description                        | mess                                              |
      | FX_Management_Admin_12 | Verify Reject button functionality | New currency rates has been rejected successfully |
      
      
      
      
