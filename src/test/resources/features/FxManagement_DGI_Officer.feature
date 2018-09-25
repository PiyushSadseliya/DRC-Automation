Feature: User is on FX Management Page

  @TC_001
  Scenario Outline: For FX Management Officer Login
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                             | Username    | Password |
      | Manual_Purchase_Domestic_and_Import_01 | rohit.patil | admin    |

  #Ui part
  #@TC_01
  #Scenario Outline: Validate the UI of FX management Module
  #  Given User is on FX Management "<TestcaseID>" "<Description>"
  #  And User see FX Management
  #  And User click on FX Management tab
  #  And User click on Historical FX Rates button and verify ui
  #  And User click on Update button
  #  And User see the pop up Update currency rate

  #  Examples: 
  #    | TestcaseID                | Description               |
  #    | FX_Management_Officer_01 | Verify the UI of the Page |

  #On Hold
#  @TC_02
#  Scenario Outline: Validate help functionality on FX management page
#    Given User is on FX Management "<TestcaseID>" "<Description>"
#    And User see FX Management
#    And User click on FX Management tab
#    And User click on Help button on FX manageent page
#    And User click on Help button on Historical FX Rates
#    And User see help page display

 #   Examples: 
 #     | TestcaseID                | Description        |
 #     | FX_Management_Officer_02 | Verify help button |

  @TC_03
  Scenario Outline: Validate the Base currency on all the pages of FX management module
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is 1
    And User click on update button
    And User see pop up and see base currency is 1
    And User click on cancel button on pop up
    And User click on Historical FX Rates button and verify the base currency

    Examples: 
      | TestcaseID                | Description          |
      | FX_Management_Officer_03 | Verify Base Currency |

  @TC_04
  Scenario Outline: Validate the Update currency functionality with valid data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on Update button and pop up appear
    And User enter currency for "<data>"
    And User click on save button
    
    Examples: 
      | TestcaseID                | Description           |data | 
      | FX_Management_Officer_04 | Verify update Currency |100  | 

 # @TC_05
 # Scenario Outline: Validate the Update currency functionality with invalid data
 #   Given User is on FX Management "<TestcaseID>" "<Description>"
 #   And User see FX Management
 #   And User click on FX Management tab
 #   And User click on Update button and pop up appear
    #And User clear all field blank and click on save button
    #And User click on Update button and pop up appear
 #   And User click on "<field>"enter data "<data>" and click on save button and check "<message>"

#    Examples: 
#      | TestcaseID                | Description                   | field              | data                 | message                             |
 #     | FX_Management_Officer_05 | Verify update invalid Currency | txt_CurrencySelect | 14.67023489104018000 | Currency rates are required         |
 #     | FX_Management_Officer_06 | Verify update invalid Currency | txt_CurrencySelect | @A#$%B               |                                     |
 #     | FX_Management_Officer_07 | update update invalid Currency |                    | -1,-12.003           | Currency amount can not in negative |


  @TC_06
  Scenario Outline: Validate the Cancel button functionality on Update currency rate popup
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on Update button and pop up appear
    And User enter currency for "<data>"
    And User click on cancel button
    And User click on Update button and pop up appear
    And User check previously enter currency value "<value>"
    And User click on Save button
    And User see New Conversion Rate column is display

    Examples: 
      | TestcaseID                | Description          | data | value |
      | FX_Management_Officer_08 | Verify cancel button  |  100 |   100 |

  @TC_07
  Scenario Outline: Validate the Historical FX Rates button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical fx rates button
    And User check "<data>" in FX management list

    Examples: 
      | TestcaseID                | Description                                   | data |
      | FX_Management_Officer_09 | Verify Historical FX Rates button functionality| 100  |

  @TC_08
  Scenario Outline: Validate the from and to date search functionality on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User verify the by default date displaying in the From date and To date
    And User Select Todays date "<TodayDate>" in From and check selected date
    And USer Select todays days "<ToDate>" in To and check selected date
    And User click on search icon and today date should display "<DisplayDate>"
    And User select future date "<FutureDate>" in from and check selected date
    And User select future date "<FutureDate>" in TO and check selected date
    And User select present date "<PresentDate>" in From and check selected date
    And User select present date "<PresentDate>" in TO and check selected date
    And User select date which the currency record are not present in From "<NoCurrencyFromDate>"
    And User select date which the currency record are not present in To "<NoCurrencyToDate>"
    And User click on search icon
    And User see message no record found for date

    Examples: 
      | TestcaseID                | Description             | TodayDate | ToDate | DisplayDate | FutureDate | FutuureTo | PresentDate | PastDate | NoCurrencyFromDate | NoCurrencyToDate |
      | FX_Management_Officer_10 | Verify date functionality|           |        | 08/24/2018  |            |           |             |          |                    |                  |

  @TC_09
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And user click on the page "<ClickPage>" and check page"<CheckPage>"
    Then User see Result

    Examples: 
      | TestcaseID                       | Description                            | ClickPage    | CheckPage      |
      | FX_Management_Officer_11 | click last page and check next page    | btn_LastFX   | btn_NextFX     |
      | FX_Management_Officer_12 | click last and check previous page     | btn_LastFX   | btn_PreviousFX |
      | FX_Management_Officer_13 | click next and check previous page     | btn_NextFX   | btn_PreviousFX |
      | FX_Management_Officer_14 | click next and check first page        | btn_NextFX   | btn_FirstFX    |
      | FX_Management_Officer_15 | click 1st page and check previous page | btn_First1FX | btn_PreviousFX |
      | FX_Management_Officer_16 | click right arrow  and check 1st page  | btn_First1FX | btn_FirstFX    |

  @TC_10
  Scenario Outline: Validate the previous button functionality on Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User navigate to FX management page
    And User click on Previous button and again navigate to FX management dashboard

    Examples: 
      | TestcaseID                | Description                         |
      | FX_Management_Officer_17 | Verify previous button functionality |

  @TC_11
  Scenario Outline: Validate the New conversion rate(approval required) column data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on Update button and pop up appear
    And User enter currency for "<data>"
    And User click on Save button
    And User see New Conversion Rate column on FX management landing page
    And User verify "<value>" updated currency rates in new conversion rate column
    Then User logout
    And User enter credencial for DGI Supervisor and verify New Updated rates notification on their FX management landing page "<valueSupervisour>"
    Then User logout
    And User enter credencial for DGI Admin and verify New Updated rates notification on their FX management landing page "<valueAdmin>"

    Examples: 
      | TestcaseID               | Description                | data | value | valueSupervisour | valueAdmin |
      | FX_Management_Officer_18 | Verify New conversion rate |  100 |       |                  |            |

  @TC_12
  Scenario Outline: Validate the Approved rate column data and date when Admin has not updated currency rates
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on Update button and pop up appear
    And User enter currency "<data>" for field
    And User click on save button
    And User verify "<value>" updated currency rates in new conversion rate column
    And User veruify currency "<currency>" and approved rate date "<date>"

    Examples: 
      | TestcaseID                | Description                | data | value | currency | date       |
      | FX_Management_Officer_19 | Verify Approved rate column |  100 |       |     1000 | 29/08/2018 |

  # flag remaining as it is ui part
  @TC_13
  Scenario Outline: Validate the New Conversion Rate(approval rate) data when Admin has updated currency rates
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User logout
    And User log in with DGI Admin credencial
    And User click on FX Management tab
    And User click on approve button
    And User log in with officer credencial
    And User click on FX Management tab
    And verify the currency rates of New Conversion Rate which dgi admin has approved

    Examples: 
      | TestcaseID                | Description                             |
      | FX_Management_Officer_20 | Verify ew Conversion Rate(approval rate) |

  @TC_14
  Scenario Outline: Validate the Target Currencies column data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify already added currencies "<verifyCurrency>" on FX management module
    And User click on update button and check currencies "<currency>" on Update Currency Rate popup window

    Examples: 
      | TestcaseID                | Description                    | verifyCurrency | currency    |
      | FX_Management_Officer_21 | Verify Target Currencies column | GBP - Pound    | GBP - Pound |

  # notification on hold
 # @TC_15
 # Scenario Outline: Validate the notification functionality on FX Management landing and Historical FX Rates page
 #   Given User is on FX Management "<TestcaseID>" "<Description>"
 #   And User see FX Management
 #   And User click on FX Management tab
 #   And User click on notification icon and see notification window
 #   And User Click on Historical FX Rates button
 #   Then User logout

  #  Examples: 
  #    | TestcaseID                | Description         |
  #    | FX_Management_Officer_22 | Verify notification  |

  @TC_16
  Scenario Outline: Validate the log out functionality  on FX Management landing and Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    And User again log in
    And User Click on Historical FX Rates button
    Then User logout and verify

    Examples: 
      | TestcaseID                | Description                  |
      | FX_Management_Officer_23 | Verify Log out functionality |

 # on hold
 # @TC_17
 # Scenario Outline: Validate the Name and profile picture displayed  on all the screens.
 #   Given User is on FX Management "<TestcaseID>" "<Description>"
 #   And User see FX Management
 #   And User click on FX Management tab
 #   And User verify the DGI officer name and profile picture "<name>"
 #   And User Click on Historical FX Rates button
 #   And User verify name "<name>" and profile "<profile>" of dgi officer

 #   Examples: 
 #     | TestcaseID                | Description                    | name  |
 #     | FX_Management_Officer_24 | Verify Name and profile picture | Ketan |
