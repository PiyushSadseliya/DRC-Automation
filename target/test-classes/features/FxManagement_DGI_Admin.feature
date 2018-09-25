Feature: User is on FX Management Page DGI Admin

  @TC_001
  Scenario Outline: For FX Management Officer Login
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                             | Username        | Password |
      | Manual_Purchase_Domestic_and_Import_01 | ketan.prajapati | admin    |

  #Ui part
  # @TC_01
  # Scenario Outline: Validate the UI of FX management landing page and Historical FX Rates Page
  #   Given User is on FX Management "<TestcaseID>" "<Description>"
  #   And User see FX Management
  #   And User click on FX Management tab
  #   And User click on Historical FX Rates button and verify ui for DGI Admin
  #   And User Click on Historical FX Rates button and verify ui for DGI Admin
  #  Examples:
  #    | TestcaseID             | Description               |
  #    | FX_Management_Admin_01 | Verify the UI of the Page |
  
  #On Hold
  # @TC_02
  # Scenario Outline: Validate help functionality on FX management page
  #   Given User is on FX Management "<TestcaseID>" "<Description>"
  #   And User click on FX Management tab
  #   And User see FX Management
  #   And User click on Help button on FX manageent page for DGI Admin
  #   And User click on Help button on Historical FX Rates for DGI Admin
  #   And User see help page display for DGI Admin
  #    Examples:
  #      | TestcaseID             | Description        |
  #      | FX_Management_Admin_02 | Verify help button |
  
  # notification on hold
  # @TC_03
  # Scenario Outline: Validate the notification functionality on FX Management landing and Historical FX Rates page.
  #   Given User is on FX Management "<TestcaseID>" "<Description>"
  #   And User see FX Management
  #   And User click on FX Management tab
  #   And User click on notification icon and see notification window
  #   And User Click on Historical FX Rates button
  #   Then User logout
  #  Examples:
  #    | TestcaseID                | Description         |
  #    | FX_Management_Admin_03 | Verify notification |
  @TC_04
  Scenario Outline: Validate the log out functionality  on FX Management landing and Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User see FX Management landing screen
    Then User logout
    And User again log in DGI Admin
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    Then User logout and verify

    Examples: 
      | TestcaseID             | Description                  |
      | FX_Management_Admin_04 | Verify Log out functionality |

  # on hold profile picture
  @TC_05
  Scenario Outline: Validate the Name and profile picture displayed  on all the screens.
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the DGI officer name and profile picture "<name>" for DGI Admin
    And User Click on Historical FX Rates button

    #   And User verify the DGI officer name and profile picture "<name>" for DGI Admin
    # And User verify name "<name>" and profile "<profile>" for DGI Admin
    Examples: 
      | TestcaseID             | Description                     | name  | profile |
      | FX_Management_Admin_05 | Verify Name and profile picture | Ketan |         |

  # click on Update button and further process cant do as update button is not present in screen but written test case
  @TC_06
  Scenario Outline: Validate add new currency functionality under currency dropdown
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on currency and select "<SelectOption>"
    And User select List of currencies "<List>"
    And User click on Save button
    And User check selected curency "<currency>" is added in target currency

    #And User click on update button
    #And User enter currency for "<data>"
    #And User click on Save button
    #And verify the currency rates which DGI Admin has updated
    Examples: 
      | TestcaseID             | Description                  | SelectOption       | List            | currency     | data |
      | FX_Management_Admin_06 | Verify Log out functionality | txt_AddNewCurrency | txt_IndianRupee | Indian rupee |   10 |

  @TC_07
  Scenario Outline: Validate the remove currency functionality in currency header
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User click on currency and select "<SelectOption>"
    And User select List of currencies "<List>"
    And User click on Save button
    #And User check selected curency "<currency>" is removed from target currency
    And User see toast message currencuy removed

    Examples: 
      | TestcaseID             | Description                  | SelectOption       | List            |
      | FX_Management_Admin_07 | Verify remove currency functionality | txt_RemoveCurrency | txt_IndianRupee |

  # on hold
  #@TC_08
  #Scenario Outline: Validate the auto update functionality
  #  Given User is on FX Management "<TestcaseID>" "<Description>"
  #  And User see FX Management
  #  And User click on FX Management tab
  #  And User click on Auto update toogle
  #  And User verify target currency gets auto update
  #  And User Click on Historical FX Rates button and check currency "<currency>"
  #  And User verify currency value for last updated date
  #   Examples:
  #    | TestcaseID             | Description                   | SelectOption | currency |
  #    | FX_Management_Admin_08 | Verify auto update functionality |              |          |
  
  # update button is not present
  # @TC_09
  # Scenario Outline: Validate the Update currency functionality with valid data
  #   Given User is on FX Management "<TestcaseID>" "<Description>"
  #   And User see FX Management
  #   And User click on FX Management tab
  #   And User click on Update button and pop up appear
  #   And User click on currency "<click>"
  #   And User enter data "<data>" in currency
  #   And User click on save button
  #   And User verify approve and reject is displayed
  #  Examples:
  #    | TestcaseID                | Description                                     | click | data |
  #    | FX_Management_Admin_09 | Verify Update currency functionality functionality |       |      |
  
  
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
 
  @TC_11
  Scenario Outline: Validate the Approve button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    
    And User log in with officer credencial
    # testing robot class
    #And User log in with officer credencial "<username>" "<password>"
    
    And User click on FX Management tab
    And User click on update button
    And User enter currency for "<data>"
    And User click on save button
    Then User logout
    And User log in with DGI Admin credencial
    And User click on FX Management tab
    And User verify approve and reject is displayed
    And User click on approve button
    And User see approved toast message

    Examples: 
      | TestcaseID             | Description                         | data |
      | FX_Management_Admin_12 | Verify Approve button functionality |  200 |

  @TC_12
  Scenario Outline: Validate the Reject button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    
    And User log in with officer credencial
    And User click on FX Management tab
    And User click on update button
    And User enter currency for "<data>"
    And User click on save button
    Then User logout
    
    And User log in with DGI Admin credencial
    And User click on FX Management tab
    And User click on Reject button
    And User see Rejected toast message notification
    And User Click on Historical fx rates button
    
    And User select present date "<PresentDate>" in From and check selected date
    And User click on search icon
    
    And User see Status of approvial with wrong tick with date and time

    Examples: 
      | TestcaseID             | Description                        | data |
      | FX_Management_Admin_13 | Verify Reject button functionality | 1000 |

  @TC_13
  Scenario Outline: Validate the Historical FX Rates button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical fx rates button
    
    And User select present date "<PresentDate>" in From and check selected date
   # And User select present date "<PresentDate>" in TO and check selected date
    And User click on search icon
     
    And User check "<data>" in FX management list for DGI Admin

    Examples: 
      | TestcaseID             | Description                       | data |
      | FX_Management_Admin_14 | Verify Historical FX Rates button | 200 |

  @TC_14
  Scenario Outline: Validate the Base currency on all the pages of FX management module
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is 1
    And User click on Historical FX Rates button and verify the base currency

    Examples: 
      | TestcaseID             | Description          |
      | FX_Management_Admin_15 | Verify Base Currency |

  @TC_15
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
      | TestcaseID             | Description                      | TodayDate | ToDate | DisplayDate | FutureDate | FutuureTo | PresentDate | PastDate | NoCurrencyFromDate | NoCurrencyToDate |
      | FX_Management_Admin_16 | Verify date search functionality |           |        | 08/24/2018  |            |           |             |          |                    |                  |

  @TC_16
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And user click on the page "<ClickPage>" and check page"<CheckPage>"
    Then User see Result

    Examples: 
      | TestcaseID             | Description                            | ClickPage    | CheckPage      |
      | FX_Management_Admin_17 | click last page and check next page    | btn_LastFX   | btn_NextFX     |
      | FX_Management_Admin_18 | click last and check previous page     | btn_LastFX   | btn_PreviousFX |
      | FX_Management_Admin_19 | click next and check previous page     | btn_NextFX   | btn_PreviousFX |
      | FX_Management_Admin_20 | click next and check first page        | btn_NextFX   | btn_FirstFX    |
      | FX_Management_Admin_21 | click 1st page and check previous page | btn_First1FX | btn_PreviousFX |
      | FX_Management_Admin_22 | click right arrow  and check 1st page  | btn_First1FX | btn_FirstFX    |

  @TC_17
  Scenario Outline: Validate the previous button functionality on Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User navigate to FX management page
    And User click on Previous button and again navigate to FX management dashboard

    Examples: 
      | TestcaseID             | Description                          |
      | FX_Management_Admin_23 | Verify previous button functionality |

  @TC_18
  Scenario Outline: Validate the Target Currencies column data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify already added currencies "<verifyCurrency>" on FX management module

    #And User click on update button and check currencies "<currency>" on Update Currency Rate popup window
    Examples: 
      | TestcaseID             | Description              | verifyCurrency | currency     |
      | FX_Management_Admin_24 | Verify Target Currencies | Indian rupee   | Indian rupee |

  @TC_19
  Scenario Outline: Validate the New conversion rate(approval required) column data when officer has updated the currency rates
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    And User log in with officer credencial
    And User click on Update button and pop up appear
    And User enter currency for "<data>"
    And User click on save button
    Then User logout
    And User log in with DGI Admin credencial
    And User click on FX Management tab
    And User see New Conversion Rate column on FX management landing page
    And User verify "<value>" updated currency rates in new conversion rate column for DGI Admin

    Examples: 
      | TestcaseID             | Description                                  | data | value |
      | FX_Management_Admin_25 | Verify New conversion rate(approval required |  100 |       |

  @TC_20
  Scenario Outline: Validate the Approved rate column data and date when Supervisor has approved the currency rates of DGI officer
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    And User log in with officer credencial
    And User click on Update button and pop up appear
    And User enter currency "<data>" for field
    And User click on save button
    Then User logout
    And User log in with DGI Admin credencial
    And User click on FX Management tab
    And User click on Approve button
    And User verify Approval currency rate for DGI Admin
    And User veruify currency approved rate date "<date>" for DGI Admin

    Examples: 
      | TestcaseID             | Description                 | data | value | currency | date       |
      | FX_Management_Admin_26 | Verify Approved rate column |  100 |       |     1000 | 29/08/2018 |
