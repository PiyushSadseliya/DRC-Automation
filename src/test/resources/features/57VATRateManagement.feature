#AT Task 4427  #Sprint 24
#US-4116 & US 3967 Sprint 20,21
@VATRateManagement
Feature: As a DGI officer I want to update and approve VAT rates for
  	            Commodity/Service Codes that are 
                     already added into the system.

  # @tag2
  #Scenario Outline: Validate Tax officer able to update and send the same for approval.
  # Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
  # When Clicks on the VAT Rate Management menu
  #Then Should be on "VAT Rate by Commodity" page
  #Then Clicks on Update Rates
  #    Examples:
  #     | Test Case ID       | Description |
  #    | DRC_ATC_VATRATE_01 |             |
  @AutoReject
  Scenario Outline: Validate the VAT Rate get auto rejected when with effective date becomes old date internal portal.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Clicks on Update Rates
    Then Click on filterby on VAT Rate management
    Then Select "Commodity/Service Code"
    Then Enter "<validservicecode>"
    Then Click on search button
    Then Store it in Previous vat Records
    Then Select all records
    Then Click on Update Rates Button
    Then Pop up for updating VAT Rates should be opened
    Then Click on vat Rate dropdown
    Then Select VAT Rate as "<vatRate>"
    Then Click on Save button
    Then Status should be "Updated"
    Then click on Send for Approval button
    Then Selects date
    Then Click on Save button
    Then Click on filterby on VAT Rate management
    Then Select "Commodity/Service Code"
    Then Enter "<validservicecode>"
    Then Click on search button
    Then Status should be "Approval Pending" with proposed rate"<vatRate>" and previous rate
    Then Supervisor has neither Approved or Rejected and date becomes old
    When Clicks on the VAT Rate Management menu
    Then Click on Approval List
    Then Click on filterby on VAT Rate management
    Then Select "Commodity/Service Code"
    Then Enter "<validservicecode>"
    Then Click on search button
    Then "No Record Found" should be displayed
    When Clicks on the VAT Rate Management menu
    Then Clicks on Update Rates
    Then Click on filterby on VAT Rate management
    Then Select "Commodity/Service Code"
    Then Enter "<validservicecode>"
    Then Click on search button
    Then Rate prior to update must be displayed of Commodity "<validservicecode>"Category"<Category>"

    Examples: 
      | Test Case ID        | Description                                                                        | vatRate | validservicecode  | Category                   |
      | DRC_ATC_VATRATE_A02 | Validate the VAT Rate get auto rejected when with effective date becomes old date. | Exempt  | 1010-Glass statue | R Glasses, Mirrors, Flasks |

  ###TBD
  @mtc05_06_07_08 @run
  Scenario Outline: Validate the Commodity/service code,Category columns on Current VAT Rates page.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Verify the Commodity/service code columns

    Examples: 
      | Test Case ID       | Description                                                                                                                                                                                                                                                  |
      | DRC_ATC_VATRATE_03 | 1]Validate the Commodity/service code column on Current VAT Rates page.2]Validate the Category column on Current VAT Rates  page.3]Validate the VAT Rate column on Current VAT Rates page.4]Validate the Last Updated Date column on Current VAT Rates page. |

  @mtc03 @run
  Scenario Outline: Validate the filter by functionality on Current VAT Rate page "<role>".
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on filterby on VAT Rate management
    Then Filterby list contains "Category""Commodity/Service Code"
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button
    Then Record of type "<Category>" should be displayed
    Then Click on filterby on VAT Rate management
    Then Select "Commodity/Service Code"
    Then Enter "<validservicecode>"
    Then Click on search button
    Then Recods "<validservicecode>" should be displayed
    Then Enter "<invalidservicecode>"
    Then Click on search button
    Then "No Record Found" should be displayed

    Examples: 
      | Test Case ID        | Description                                                    | Category | validservicecode             | invalidservicecode           | role            |
      | DRC_ATC_VATRATE_A02 | Validate the filter by functionality on Current VAT Rate page. | Fuel     |1001-Waste or scrap of glass | 01-wasdste or scrap of glass | internal portal |
      | DRC_ATC_VATRATE_02  | Validate the filter by functionality on Current VAT Rate page. | Fuel     |1001-Waste or scrap of glass | 01-wasdste or scrap of glass | Supervisor      |

  ###TBD
  #@mtc05_06_07_08 @run
  #Scenario Outline: Validate the Commodity/service code,Category ,VAT Rate,Last Updated Date columns on Current VAT Rates page.
  #Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
  #When Clicks on the VAT Rate Management menu
  #Then Should be on "VAT Rate by Commodity" page
  #Then Verify the Commodity/service code,VAT Rate,Last Updated Date columns
  #
  #Examples:
  #| Test Case ID       | Description                                                                                                                                                                                                                                                  |
  #| DRC_ATC_VATRATE_03 | 1]Validate the Commodity/service code column on Current VAT Rates page.2]Validate the Category column on Current VAT Rates  page.3]Validate the VAT Rate column on Current VAT Rates page.4]Validate the Last Updated Date column on Current VAT Rates page. |
  @mtc10
  Scenario Outline: Validate Show (N) Entries on Current VAT Rates page internal portal.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then By Default "15" records should be displayed
    Then Clicks on show records as per the list and records should be displayed
      |  15 |
      |  20 |
      |  25 |
      |  50 |
      | 100 |
      | 200 |

    Examples: 
      | Test Case ID       | Description                                          |
      | DRC_ATC_VATRATE_04 | Validate Show (N) Entries on Current VAT Rates page. |

  @mtc11_14_15
  Scenario Outline: Validate the History button functionality on Current VAT Rates page, Download & close on History PopUp.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on History button
    Then "Rates Updated On"History pop up shoudld be opened
    Then Click on Download button
    Then Records should get downloaded
    Then Closes the pop up

    Examples: 
      | Test Case ID       | Description                                                                                                                                                                 |
      | DRC_ATC_VATRATE_05 | 1)Validate the History button functionality on Current VAT Rates page.2) Validate the Downloaded functionality on History popup.3)Validate the Close Icon on History popup. |

  @mtc12_16
  Scenario Outline: Validate the Update Rates button and filterby functionality.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Should be on "VAT Rate by Commodity" page
    Then Click on filterby on VAT Rate management
    Then Filterby list contains "Category""Commodity/Service Code"
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button
    Then Record of type "<Category>" should be Displayed
    Then Click on filterby on VAT Rate management
    Then Select "Commodity/Service Code"
    Then Enter "<validservicecode>"
    Then Click on search button
    Then Recods "<validservicecode>" should be displayed
    Then Enter "<invalidservicecode>"
        Then Click on search button
    Then "No Record Found" should be displayed

    Examples: 
      | Test Case ID       | Description                                                                                                                               | Category | validservicecode             | invalidservicecode           |
      | DRC_ATC_VATRATE_05 | 1)Validate the Update Rates button and filterby functionality. 2)Validate the filter by functionality on after clicking on update button. | Fuel     |1001-Waste or scrap of glass | 01-wasdste or scrap of glass |

  ###TBD
  #@mtc18_19_20_21
  #Scenario Outline: Validate the Commodity/service code,Category VAT Rate,Last Updated Date columns on Current VAT Rates page after clicking on udpdate rates
    #Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    #And click on dashboard
    #When Clicks on the VAT Rate Management menu
    #Then Should be on "VAT Rate by Commodity" page
    #Then Click on Update Rates Button
    #Then Verify the Commodity/service code columns
#
    #Examples: 
      #| Test Case ID       | Description                                                                                                                                |
      #| DRC_ATC_VATRATE_06 | Validate the Commodity/service code,Category VAT Rate,Last Updated Date columns on Current VAT Rates page after clicking on udpdate rates. |
#
  ###TBD
  @mtc22_23
  Scenario Outline: Validate the checkbox functionality and  Selected Record after clicking on update button page.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Select 1 Records
    Then Selected Records count should be 1
    Then deselect Recod 1
    Then Select 5 Records
    Then Selected Records count should be 5
    Then deselect Recod 5
    Then Select all records
    Then All Records count should be shown as per the page size

    Examples: 
      | Test Case ID       | Description                                                                               |
      | DRC_ATC_VATRATE_07 | Validate the checkbox functionality and  Selected Record  clicking on update button page. |

  @mtc25
  Scenario Outline: Validate Show (N) Entries on VAT Rates page after click on update rate.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then By Default "15" records should be displayed
    Then Clicks on show records as per the list and records should be displayed
      |  15 |
      |  20 |
      |  25 |
      |  50 |
      | 100 |
      | 200 |

    Examples: 
      | Test Case ID       | Description                                              |
      | DRC_ATC_VATRATE_08 | Validate Show (N) Entries on after click on update rate. |

  @mtc27
  Scenario Outline: Validate the Cancel button functionality on after clicking on update button page.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Click on Cancel button on VAT Rate
    Then Should be on "VAT Rate by Commodity" page

    Examples: 
      | Test Case ID       | Description                                                                       |
      | DRC_ATC_VATRATE_09 | Validate the Cancel button functionality on after clicking on update button page. |

  @mtc28_29_31
  Scenario Outline: Validate the Update button,Close VAT Rate PopUp after updated VAT Rate Updated functionality on after clicking on update button page.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Update button should be disabled
    Then Select 1 Records
    Then Selected Records count should be 1
    Then Click on Update Rates Button
    Then Pop up for updating VAT Rates should be opened
    Then Click on vat Rate dropdown
    Then List of Rate should be as below list
      |      0 |
      |     16 |
      | Exempt |
    Then Select VAT Rate as "16"
    Then Close the VAT Rate Update PopUp
    Then Click on Update Rates Button
    Then Click on vat Rate dropdown
    Then Select VAT Rate as "Exempt"
    Then Closes the pop up

    Examples: 
      | Test Case ID       | Description                                                                             |
      | DRC_ATC_VATRATE_10 | Validate the Update button,Close functionality on after clicking on update button page. |

  @mtc30_32_35_36_37_38
  Scenario Outline: Validate the Save button functionality on after clicking on update button page.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button
    Then Select all records
    Then Store previous VAT Rate of Commodities of"<Category>"
    Then Click on Update Rates Button
    Then Click on vat Rate dropdown
    Then Select VAT Rate as "<newRate>"
    Then Click on Save button
    Then Click on filterby on VAT Rate management
    Then Filterby list contains "Category""Commodity/Service Code""Status"
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button
    Then commodity of Category "<Category>"should be moved to Approval List
    Then Validate VAT Rate Commodity Commodity Service Code,Category,VAT Rate,Proposed VAT Rate"<newRate>"Updated By Status"Updated"Update Officer"<Updated/ApprovedOfficer>"

    Examples: 
      | Test Case ID       | Description                                                                                                                                                             | newRate | Updated/ApprovedOfficer | Category                 | newRate | Updated/ApprovedOfficer |
      | DRC_ATC_VATRATE_11 | Validate the Save button functionality on after clicking on update button page,Validate the filter by functionality on Send updated VAT rate for approval (first time). | Exempt  | Ketan                   | Fuel wood, Wood Charcoal | Exempt  | Ketan                   |

  @mtc39
  Scenario Outline: Validate the Records Selected for VAT Rate Update is Displayed on Update New Page and validate Cross Icon functionality on Send updated VAT rate for approval (first time) internal portal.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button
    Then "No Record Found" should be displayed
    Then Click on Approval List
    Then Click on filterby on VAT Rate management
   Then Select "Category"
        Then Select Category "<Category>"   
    Then Click on close button and Click on Yes Button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button   
    Then "No Record Found" should be displayed
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Update Rates Button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "<Category>"
    Then Click on search button
    Then Records should be displayed on Update new Rate page of Category"<Category>"

    Examples: 
      | Test Case ID       | Description                                                                                                                                                                 | Category                 |
      | DRC_ATC_VATRATE_12 | Validate the Records Selected for VAT Rate Update is Displayed on Update New Page and validate Cross Icon functionality on Send updated VAT rate for approval (first time). | Fuel wood, Wood Charcoal |

  ####Admin Role DV3967
  @nomapping
  Scenario Outline: Validate Admin able to update commodity of Different Category and send the same for approval.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Clicks on Update Rates
    Then Select show 200 Entries
    Then Select all records
    Then Clicks on Update Rates
    Then Message should be displayed as "Please select items within the same category. You cannot update rates for multiple categories at a time."

    Examples: 
      | Test Case ID       | Description                                                                                   |
      | DRC_ATC_VATRATE_13 | Validate Admin able to update commodity of Different Category and send the same for approval. |

  @mt02_42_60_61
  Scenario Outline: Validate Admin able to update and send the same for approval.
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Clicks on Update Rates
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
    Then Select all records
    Then Click on Update Rates Button
    Then Pop up for updating VAT Rates should be opened
    Then Click on vat Rate dropdown
    Then Select VAT Rate as "<newvatRate>"
    Then Click on Save button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
    Then Status should be "Updated"
    Then click on Send for Approval button
    Then Selects Effective Date as Tomorrow
    Then Click on Save button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
    Then Status should be "Approval Pending"
    Then Admin should not be able to Approve or Reject self Updated Rates

    Examples: 
      | Test Case ID       | Description                                                   | newvatRate |
      | DRC_ATC_VATRATE_14 | Validate Admin able to update and send the same for approval. |         16 |

  @RejectEdit @mt72
  Scenario Outline: Validate Supervisor able to reject the updated rate and validate reason for rejection
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Approval List
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
    Then Select all records
    Then Click on Reject button for Rejection of Commodity Rate
    Then Enter reason for rejection Rejection "<invalidreason>"
    Then Submit button should be disabled
    Then Closes the "Reason for Rejection" popup
    Then Click on Reject button for Rejection of Commodity Rate
    Then Enter reason for rejection Rejection "<validreason>"
    Then Click on Submit Button
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
    Then Status should be "Rejected"
    Then Verifies the reason"<validreason>" for Rejection

    Examples: 
      | Test Case ID       | Description                                                                               | invalidreason | validreason |
      | DRC_ATC_VATRATE_12 | Validate Supervisor able to reject the updated rate and can view the reason for rejection | Not Valid     | Not Valid.  |

  @RejectEditR
  Scenario Outline: Validate Admin able to edit the rejected rate and validate reason for rejection close button internal portal
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    And click on dashboard
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Approval List
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
   Then Status should be "Rejected"
    Then Verifies the reason"<validreason>" for Rejection
    Then Edits the Rate with new Rate"<nRate>"
    Then Status should be "Approval Pending"

    Examples: 
      | Test Case ID       | Description                                                                               | invalidreason | validreason | nRate | prevvatRate |
      | DRC_ATC_VATRATE_15 | Validate Supervisor able to reject the updated rate and can view the reason for rejection | Not Valid     | Not Valid.  |     0 |          16 |

  @Approve @mtS
  Scenario Outline: Validate Supervisor is able to approve the edited rate
    Given "<Test Case ID>""<Description>"The officer has logged in to internal portal
    When Clicks on the VAT Rate Management menu
    Then Should be on "VAT Rate by Commodity" page
    Then Click on Approval List
    Then Click on filterby on VAT Rate management
    Then Select "Category"
    Then Select Category "Drugs and Pharmaceutical"
    Then Click on search button
    Then Status should be "Approval Pending"
    Then Select all records
    Then display the count of selected records
    Then Click on Approve button

    Examples: 
      | Test Case ID       | Description                                            |
      | DRC_ATC_VATRATE_16 | Validate Supervisor is able to approve the edited rate |
