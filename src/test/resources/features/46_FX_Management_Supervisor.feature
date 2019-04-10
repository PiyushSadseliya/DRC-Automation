Feature: User is on FX Management Page DGI Supervisor

  @TC_09
  Scenario Outline: Validate the Base currency on all the pages of FX management module -supervisor
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is one for supervisor
    Then User click on Historical FX Rates button and verify the base currency for supervisor
    

    Examples: 
      | TestcaseID                   | Description          |
      | FX_Management_Supervisior_09 | Verify Base Currency |

  # on hold profile picture
  @TC_05_name_and_profile
  Scenario Outline: Validate the Name and profile picture displayed  on all the screens
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User see FX Management
    And User click on FX Management tab
    And User verify the DGI officer name and profile picture "<name>" for DGI Supervisior
    And User Click on Historical FX Rates button
    And User verify the DGI officer name and profile picture "<name>" for DGI Supervisior

    Examples: 
      | TestcaseID                   | Description             | name  |
      | FX_Management_Supervisior_05 | Verify Name and profile | pooja |

  @TC_08
  Scenario Outline: Validate the Historical FX Rates button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User Click on Historical fx rates button
    And User check in FX management list

    Examples: 
      | TestcaseID                   | Description                                     |
      | FX_Management_Supervisior_08 | Verify Historical FX Rates button functionality |

  @TC_10
  Scenario Outline: Validate the from and to date search functionality on the FX management page with historic data 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User verify the by default date displaying in the From date and To date
    And User Select Todays date "<TodayDate>" in From and Select todays days "<ToDate>" in To check selected date
    And User click on search icon and today date should display "<DisplayDate>"
    And User select date which the currency record are not present in From "<NoCurrencyFromDate>" and in To "<NoCurrencyToDate>"
    And User click on search icon
    And User see message no record found for date

    Examples: 
      | TestcaseID                   | Description                      | TodayDate  | ToDate     | DisplayDate | NoCurrencyFromDate | NoCurrencyToDate |
      | FX_Management_Supervisior_10 | Verify date search functionality |2019-04-09 | 2019-04-09 | 04/09/2019  | 2019-02-02          | 2019-02-02       |

  @TC_11
  Scenario Outline: Validate the Pagination on the FX management page with historic data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User see FX Management
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"

    Examples: 
      | TestcaseID                    | Description                | Period        | ClickPage       | CheckPage       | option          |
      | FX_Management_Supervisio_11_1 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
      | FX_Management_Supervisio_11_2 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
      | FX_Management_Supervisio_11_3 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
      | FX_Management_Supervisio_11_4 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
      | FX_Management_Supervisio_11_5 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
      | FX_Management_Supervisio_11_6 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |

  @TC_12
  Scenario Outline: Validate the previous button functionality on Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    And User click on Previous button and again navigate to FX management dashboard

    Examples: 
      | TestcaseID                   | Description                          |
      | FX_Management_Supervisior_12 | Verify previous button functionality |

  @TC_13
  Scenario Outline: Validate the Target Currencies column data
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User verify already added currencies "<verifyCurrency>" on FX management module

    Examples: 
      | TestcaseID                   | Description                     | verifyCurrency  |
      | FX_Management_Supervisior_13 | Verify Target Currencies column | GBP - Pound     |

  @TC_14_15_06
  Scenario Outline: Validate the Approved rate column data and Supervisior approve currency rate if DGI Officer has update the currency 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User enter credencial for DGI Officer and update the currency
    #And User enter credencial for DGI Supervisior and approve the currency
    And User enter credencial for DGI Supervisior and approve the currency and see mess "<mess>"

    Examples: 
      | TestcaseID                         | Description                                           | mess                                              |
      | FX_Management_Supervisior_14_15_06 | Verify Approved rate column data and approve currency | New currency rates has been approved successfully |

  @TC_06
  Scenario Outline: Validate the Approve button functionality 
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    Then User logout fx
    And User enter credencial for DGI Officer and update the currency
    And User enter credencial for DGI Supervisor and verify New Updated rates notification and click on approve and verify message "<mess>"

    Examples: 
      | TestcaseID                   | Description                         | mess                                              |
      | FX_Management_Supervisior_06 | Verify Approve button functionality | New currency rates has been approved successfully |

  @TC_07
  Scenario Outline: Validate the Reject button functionality
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    And User enter credencial for DGI Officer and update the currency
    And User enter credencial for DGI Supervisor and verify New Updated rates notification and click on reject and verify message "<mess>"

    Examples: 
      | TestcaseID                   | Description                        | data | mess                                              |
      | FX_Management_Supervisior_07 | Verify Reject button functionality |  100 | New currency rates has been rejected successfully |

  @TC_04
  Scenario Outline: Validate the log out functionality  on FX Management landing and Historical FX Rates page
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on FX Management tab
    Then User logout fx
    And User again log in
    And User click on FX Management tab
    And User Click on Historical FX Rates button
    Then User logout and verify

    Examples: 
      | TestcaseID                   | Description                  |
      | FX_Management_Supervisior_04 | Verify Log out functionality |
