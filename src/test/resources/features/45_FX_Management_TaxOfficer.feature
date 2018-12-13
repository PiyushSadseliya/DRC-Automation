Feature: User is on FX Management Page Tax Officer

  @TC_03
  Scenario Outline: Validate the Base currency on all the pages of FX management module -fx taxofficer
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is one
    And User click on update button
    And User see pop up and see base currency is 1
    And User click on cancel button on pop up
    And User click on Historical FX Rates button and verify the base currency

    Examples: 
      | TestcaseID               | Description          |
      | FX_Management_Officer_03 | Verify Base Currency |


 @TC_14
  Scenario Outline: Validate the Target Currencies column data  
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    And User verify already added currencies "<verifyCurrency>" on FX management module
    And User click on update button and check currencies "<currency>" on Update Currency Rate popup window

    Examples: 
      | TestcaseID               | Description                     | verifyCurrency     | currency           |
      | FX_Management_Officer_14 | Verify Target Currencies column | INR - Indian Rupee | INR - Indian Rupee |



  @TC_04_06_11_12
  Scenario Outline: Validate the Update and Cancel currency functionality on Update currency rate popup and New conversion rate and Approved rate column data 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on Update button and pop up appear
    And User enter currency for "<data>"
    And User see previously currency entered value on fx management
    And User click on cancel button on fx management
    And User click on Update button and pop up appear
    And User check previously enter currency value on fx management officer
    And User click on save button on pop up on officer
    And User see message for fx management officer "<mess>"
    And User see New Conversion Rate column is display
    Then User logout fx
    And User enter credencial for DGI Supervisor and verify New Updated rates notification on their FX management landing page
    And User enter credencial for DGI Admin and verify New Updated rates notification on their FX management landing page

    Examples: 
      | TestcaseID                        | Description                       | data | mess                                  |
      | FX_Management_Officer_04_06_11_12 | Verify update Currency and cancel |  100 | FX currency rate updated successfully |

  #  @TC_05
  #  Scenario Outline: Validate the Update currency functionality with invalid data
  #    Given User is on FX Management "<TestcaseID>" "<Description>"
  #    And User see FX Management
  #    And User click on FX Management tab
  #    And User click on Update button and pop up appear
  #    And User clear all field blank and click on save button
  #    And User click on Update button and pop up appear
  #    And User click on "<field>"enter data "<data>" and click on save button and check "<message>"
  #    Examples:
  #      | TestcaseID                 | Description                    | field              | data                 | message                             |
  #      | FX_Management_Officer_05_1 | Verify update invalid Currency | txt_CurrencySelect | 14.................. | Invalid currency rate!              |
  #      | FX_Management_Officer_05_2 | Verify update invalid Currency | txt_CurrencySelect | @A#$%B               |                                     |
  #      | FX_Management_Officer_05_3 | update update invalid Currency |                    | -1,-12.003           | Currency amount can not in negative |
  
  @TC_07
  Scenario Outline: Validate the Historical FX Rates button functionality 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    And User Click on Historical fx rates button
    And User check in FX management list

    Examples: 
      | TestcaseID               | Description                                     |
      | FX_Management_Officer_07 | Verify Historical FX Rates button functionality |

  @TC_08
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
      | TestcaseID               | Description               | FD         | TD         | TodayDate | ToDate | DisplayDate | NoCurrencyFromDate | NoCurrencyToDate |
      | FX_Management_Officer_08 | Verify date functionality | 11/22/2018 | 11/28/2018 |        28 |     28 | 11/28/2018  |                  1 |                1 |

  @TC_09
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID                 | Description                | Period        | ClickPage       | CheckPage        | option          |
      | FX_Management_Officer_09_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight  | last and right  |
      | FX_Management_Officer_09_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft   | last and left   |
      | FX_Management_Officer_09_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft   | right and left  |
      | FX_Management_Officer_09_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst | right and first |
      | FX_Management_Officer_09_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft   | first and left  |
      | FX_Management_Officer_09_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst     | first and first |

  @TC_10
  Scenario Outline: Validate the previous button functionality on Historical FX Rates page 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User click on Previous button and again navigate to FX management dashboard

    Examples: 
      | TestcaseID               | Description                          |
      | FX_Management_Officer_10 | Verify previous button functionality |

  
  @TC_13
  Scenario Outline: Validate the New Conversion Rate(approval rate) data when Admin has updated currency rates 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
   And User logout fx
    And User log in with DGI Admin credencial and update the currency    
    And User log in with officer credencial and verify currency rate

    Examples: 
      | TestcaseID               | Description                              |
      | FX_Management_Officer_13 | Verify ew Conversion Rate(approval rate) |

 
  # notification on hold
  # @TC_15
  # Scenario Outline: Validate the notification functionality on FX Management landing and Historical FX Rates page
  #   Given User is on FX Management "<TestcaseID>" "<Description>"
  #   And User see FX Management
  #   And User click on FX Management tab
  #   And User click on notification icon and see notification window
  #   And User Click on Historical FX Rates button
  #   Then User logout fx
  #  Examples:
  #    | TestcaseID                | Description         |
  #    | FX_Management_Officer_22 | Verify notification  |
  @TC_16
  Scenario Outline: Validate the log out functionality  on FX Management landing and Historical FX Rates page 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on FX Management tab
    Then User logout fx
    And User again log in
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    Then User logout and verify

    Examples: 
      | TestcaseID               | Description                  |
      | FX_Management_Officer_16 | Verify Log out functionality |

      
      
      
      

      
      