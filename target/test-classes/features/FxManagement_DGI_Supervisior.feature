Feature: User is on FX Management Page DGI Supervisor

  @TC_001
  Scenario Outline: For FX Management Officer Login
    Given User is on DRC Internal Portal
    When User Enter Valid : "<Username>" "<Password>"
    And User Clicks on "SignIn" Button
    Then User Redirect to  "Dashboard"

    Examples: 
      | TestcaseID                             | Username     | Password |
      | Manual_Purchase_Domestic_and_Import_01 | pooja.parmar | admin    |

  #Ui part
 # @TC_01
 # Scenario Outline: Validate the UI of FX management Module
 #   Given User is on FX Management "<TestcaseID>" "<Description>"
 #   And User see FX Management
 #   And User click on FX Management tab
 #   And User click on Historical FX Rates button and verify ui for DGI Supervisor

 #   Examples: 
 #     | TestcaseID                   | Description               |
 #     | FX_Management_Supervisior_01 | Verify the UI of the Page |

  #On Hold
 # @TC_02
 # Scenario Outline: Validate help functionality on FX management page
 #   Given User is on FX Management "<TestcaseID>" "<Description>"
 #   And User see FX Management
 #   And User click on FX Management tab
 #   And User click on Help button on FX manageent page
 #   And User click on Help button on Historical FX Rates
 #   And User see help page display

  #  Examples: 
  #   | TestcaseID                   | Description               |
  #   | FX_Management_Supervisior_02 | Verify help functionality |

  # notification on hold
 # @TC_03
 # Scenario Outline: Validate the notification functionality on FX Management landing and Historical FX Rates page
 #   Given User is on FX Management "<TestcaseID>" "<Description>"
 #   And User see FX Management
 #   And User click on FX Management tab
 #   And User click on notification icon and see notification window
 #   And User Click on Historical FX Rates button
 #   Then User logout

  #  Examples: 
  #    | TestcaseID                   | Description                       |
  #    | FX_Management_Supervisior_03 | Verify notification functionality |

  
  # on hold profile picture
  @TC_05 @name_and_profile
  Scenario Outline: Validate the Name and profile picture displayed  on all the screens.
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the DGI officer name and profile picture "<name>" for DGI Supervisior
    And User Click on Historical FX Rates button
    # And User verify name "<name>" and profile "<profile>" for DGI Supervisior
    And User verify the DGI officer name and profile picture "<name>" for DGI Supervisior

    Examples: 
      | TestcaseID                   | Description             | name  | profile |
      | FX_Management_Supervisior_05 | Verify Name and profile | pooja |         |

  @TC_06
  Scenario Outline: Validate the Approve button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    And User enter credencial for DGI Officer
    And User click on FX Management tab
    And User click on update button
    And User enter currency for "<data>"
    And User click on Save button
    Then User logout
    And User enter credencial for DGI Supervisior
    And User click on FX Management tab
    And User click on Approve button
    And User see approved toast message
    #User see notification is send to officer and dgi admin on hold
    And User Click on Historical fx rates button
    
    And User select present date "<PresentDate>" in From and check selected date
    And User click on search icon
    
    # 100 will see
    
    And User see previous currency list which was on FX management dashboard "<value>"
    And User see Status of approvial with green tick with date and time

    Examples: 
      | TestcaseID                   | Description                         | data | value |
      | FX_Management_Supervisior_06 | Verify Approve button functionality |  100 |   200 |

  @TC_07
  Scenario Outline: Validate the Reject button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    And User enter credencial for DGI Officer
    And User click on FX Management tab
    And User click on update button
    And User enter currency for "<data>"
    And User click on Save button
    Then User logout
    And User enter credencial for DGI Supervisior
    And User click on FX Management tab
    And User click on Reject button
    And User see Rejected toast message notification
    
    #User see notification is send to officer and dgi admin on hold
    And User Click on Historical fx rates button
    And User select present date "<PresentDate>" in From and check selected date
    And User click on search icon
    
    And User see Status of approvial with wrong tick with date and time

    Examples: 
      | TestcaseID                   | Description                        | data |
      | FX_Management_Supervisior_07 | Verify Reject button functionality | 100 |

  @TC_08
  Scenario Outline: Validate the Historical FX Rates button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical fx rates button
     And User select present date "<PresentDate>" in From and check selected date
    And User click on search icon
    And User check "<data>" in FX management list for DGI Supervisior

    Examples: 
      | TestcaseID                   | Description                                     | data |
      | FX_Management_Supervisior_08 | Verify Historical FX Rates button functionality |  100 |

  @TC_09
  Scenario Outline: Validate the Base currency on all the pages of FX management module
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is 1
    And User click on Historical FX Rates button and verify the base currency

    Examples: 
      | TestcaseID                   | Description          |
      | FX_Management_Supervisior_09 | Verify Base Currency |

  @TC_10
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
      | TestcaseID                   | Description                      | TodayDate | ToDate | DisplayDate | FutureDate | FutuureTo | PresentDate | PastDate | NoCurrencyFromDate | NoCurrencyToDate |
      | FX_Management_Supervisior_10 | Verify date search functionality |           |        | 08/24/2018  |            |           |             |          |                    |                  |

  @TC_11
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And user click on the page "<ClickPage>" and check page"<CheckPage>"
    Then User see Result

    Examples: 
      | TestcaseID                       | Description                            | ClickPage    | CheckPage      |
      | FX_Management_Supervisio_11 | click last page and check next page    | btn_LastFX   | btn_NextFX     |
      | FX_Management_Supervisio_12 | click last and check previous page     | btn_LastFX   | btn_PreviousFX |
      | FX_Management_Supervisio_13 | click next and check previous page     | btn_NextFX   | btn_PreviousFX |
      | FX_Management_Supervisio_14 | click next and check first page        | btn_NextFX   | btn_FirstFX    |
      | FX_Management_Supervisio_15 | click 1st page and check previous page | btn_First1FX | btn_PreviousFX |
      | FX_Management_Supervisio_16 | click right arrow  and check 1st page  | btn_First1FX | btn_FirstFX    |

  @TC_12
  Scenario Outline: Validate the previous button functionality on Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User navigate to FX management page
    And User click on Previous button and again navigate to FX management dashboard

    Examples: 
      | TestcaseID                   | Description                          |
      | FX_Management_Supervisior_17 | Verify previous button functionality |

  # flag ui is remaining
  @TC_13
  Scenario Outline: Validate the Target Currencies column data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify already added currencies "<verifyCurrency>" on FX management module for DGI Supervisior

    Examples: 
      | TestcaseID                   | Description              | verifyCurrency |
      | FX_Management_Supervisior_18 | Verify Target Currencies | EUR - Euro     |

  @TC_14
  Scenario Outline: Validate the Approved rate column data and date when Supervisor/Admin has approved the currency rates of DGI officer
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User logout
    And User enter credencial for DGI Officer
    And User click on FX Management tab
    And User click on update button
    And User enter currency for "<data>"
    And User click on Save button
    And User logout
    And User enter credencial for DGI Supervisior
    And User click on FX Management tab
    And User click on approve button
    And User see approve toast message for DGI Supervisior
    And User verify the currency rates of Approved rate
    And User see Approved date rate

    Examples: 
      | TestcaseID                   | Description                      | data |
      | FX_Management_Supervisior_19 | Verify Approved rate column data |  100 |

  @TC_15
  Scenario Outline: Validate the Approval required (new conversion rate) column data when DGI officer/Admin has updated the rates
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User logout
    And User enter credencial for DGI Officer
    And User click on FX Management tab
    And User click on update button
    And User enter currency for "<data>"
    And User click on Save button
    And User logout
    And User enter credencial for DGI Supervisior
    And User click on FX Management tab
    And User see New Conversion Rate column is display for DGI Supervisior
    And verify the currency rates of New Conversion Rate which dgi officer has updated for DGI Supervisior

    Examples: 
      | TestcaseID                   | Description                                   | data |
      | FX_Management_Supervisior_20 | Verify Approval required (new conversion rate |      |
      
      
   @TC_04
  Scenario Outline: Validate the log out functionality  on FX Management landing and Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    Then User logout
    And User again log in DGI Supervisior
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    Then User logout and verify

    Examples: 
      | TestcaseID                   | Description                  |
      | FX_Management_Supervisior_04 | Verify Log out functionality |
     
