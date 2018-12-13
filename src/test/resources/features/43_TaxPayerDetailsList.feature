#DV-2065 TaxPayer Details List-
@TaxPayerProfile
Feature: Only authorized users are able to view the list of taxpayers.
  Tax officer can view the details of taxpayers managed by their own tax office, while Admin is able to view all the records.

  @Mtc_admin_02 @admin
  Scenario Outline: Validate the  Functionality of Taxpayer Profile Menu Item internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Tax Payer Profile Page should get displayed along with  the List of all Registered Tax Payer

    Examples: 
      | Test Case ID                    | Description                                                 | officer | uname           | pwd   |
      | DRC_ATC_TaxPayerProfile_List_01 | Validate the  Functionality of Taxpayer Profile Menu Item . | Admin   | ketan.prajapati | admin |

  @Mtc_admin_03 @admin @filter
  Scenario Outline: Validate the filter by dropdown with respect to Filter option All, NITVA,NIF,,Tax Payer,Tax Office,Business Type internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Select the Option from the Filter by Dropdown as "NITVA"
    Then Enter valid data in "20181121041249414" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "NIF"
    Then Enter valid data in "130748ADFSXXXABVCDFE00100" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "TaxPayer"
    Then Enter valid data in "1Rivet S" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "Business type"
    Then Enter valid data in "Mining" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "TaxPayerCategory"
    Then Enter valid data in "Natural Person" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "Location"
    Then Enter valid data in "Aketi" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box

    Examples: 
      | Test Case ID                    | Description                                                                                                      | officer | uname           | pwd   |
      | DRC_ATC_TaxPayerProfile_List_02 | Validate the filter by dropdown with respect to Filter option All, NITVA,NIF,,Tax Payer,Tax Office,Business Type | Admin   | ketan.prajapati | admin |

  @Mtc_admin_04 @View @admin
  Scenario Outline: Validate the View Icon Functionality internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Validate the View Icon Functionality
    Then Tax Payer details of the particular Tax Payer should be displayed
    Then Click on Previous Button on TaxPayerDetails page
    Then officer is on Tax Payer Profile List

    Examples: 
      | Test Case ID                    | Description                                                 | officer | uname           | pwd   |
      | DRC_ATC_TaxPayerProfile_List_03 | Validate the  Functionality of Taxpayer Profile Menu Item . | Admin   | ketan.prajapati | admin |

  @Mtc_admin_05 @pagination @admin
  Scenario Outline: Validate the Pagination Button Functionality of First , Last,Next, Previous ,Page Number Search Button internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User clicks on page button"2" other than first button ths page should be displayed
    Then User click on page button "First" User should be on that page
    Then User click on page button "Last" User should be on that page

    Examples: 
      | Test Case ID                    | Description                                                 | officer | uname           | pwd   |
      | DRC_ATC_TaxPayerProfile_List_04 | Validate the  Functionality of Taxpayer Profile Menu Item . | Admin   | ketan.prajapati | admin |

  @Mtc_admin_05 @pagination @admin
  Scenario Outline: Validate the Pagination Button Functionality of First , Last,Next, Previous ,Page Number Search Button internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User clicks on page button Next user should be second page
    Then User click on page button Previous button User should be on First Page
    Then User click on page button Previous button,Previous button should be non-editable
    Then User click on page button Last button User should be on Last Page

    Examples: 
      | Test Case ID                    | Description                                                 | officer | uname           | pwd   |
      | DRC_ATC_TaxPayerProfile_List_05 | Validate the  Functionality of Taxpayer Profile Menu Item . | Admin   | ketan.prajapati | admin |

  @Mtc_admin_06 @admin
  Scenario Outline: Validate the NITVA, NIF, Tax Payer, Address, Business Type , Tax Office of the Tax payer is correctly displayed  after VAT registration is approved successfully of the User internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User Search using NITVA"<nitva>"
    Then Observes the details displayed in the list NIF"<nif>"BusinessNmae/ApplicantName"<name>"Address"<add>"BusinessType"<btype>"Taxoffice"<taxoffice>"
    Then Observes NITVA"<NITVA>"field

    Examples: 
      | Test Case ID                    | Description                                                 | officer | uname           | pwd   | nif                       | name     | add                              | btype  | taxoffice | NITVA             |
      | DRC_ATC_TaxPayerProfile_List_06 | Validate the  Functionality of Taxpayer Profile Menu Item . | Admin   | ketan.prajapati | admin | 130748ADFSXXXABVCDFE00100 | 1Rivet S | Dharamdas Chamber,Near Axis Bank | Mining | Aketi     | 20181121041249414 |

  @Mtc_admin_07 @admin @ReviewInProgress @Status
  Scenario Outline: Validate that profile is not getting listed in the Tax Payer List if the user submitted the form but the status is Review In Progress internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User Search using NIF"<nif>"
    Then No record found Messages "<msg>"should be displayed

    Examples: 
      | Test Case ID                    | Description                                                 | officer | uname           | pwd   | nif                       | msg              |
      | DRC_ATC_TaxPayerProfile_List_07 | Validate the  Functionality of Taxpayer Profile Menu Item . | Admin   | ketan.prajapati | admin | 105254ADFSXXXABVCDFE00100 | No records found |

  @Mtc_admin_08_09 @admin @OnHold @Status @Rejected
  Scenario Outline: Validate that profile is not getting listed in the Tax Payer List internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User Search using NIF"<nif>"
    Then No record found Messages "<msg>"should be displayed

    Examples: 
      | Test Case ID                    | Description                                                                                                                            | officer | uname           | pwd   | nif                | msg              |
      | DRC_ATC_TaxPayerProfile_List_08 | Validate that profile is not getting listed in the Tax Payer List if the user submitted the form but the status is On Hold             | Admin   | ketan.prajapati | admin | 786786786 | No records found |
      | DRC_ATC_TaxPayerProfile_List_09 | Validate that profile is not getting listed in the Tax Payer List if the user submitted the VAT Application and the Status is Rejected | Admin   | ketan.prajapati | admin |     1t2r3e1t | No records found |

  @Mtc_admin_10_11_12_13 @admin
  Scenario Outline: Validate that profile is getting listed in the Tax Payer List for according to tax Payer Category internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User Search using NIF"<nif>"
    Then Taxpayer Detail list shows NITVA"<nitva>"NIF"<nif>"Taxpayer"<tpayer>"Address"<add>"BusinessType"<btype>"TaxOffice"<TaxOffice>"

    Examples: 
      | Test Case ID                    | Description                                                                                                                                                      | officer | uname           | pwd   | nif             | nitva             | tpayer               | add  | btype         | TaxOffice |
    #  | DRC_ATC_TaxPayerProfile_List_10 | Validate that profile is getting listed in the Tax Payer List if the user has tax Payer Category Natural Person and sub tax payer category as Individual         | Admin   | ketan.prajapati | admin |    345345345345 | 20180829065611557 | LokunNp              | add, | Mining        | Aketi     |
      | DRC_ATC_TaxPayerProfile_List_11 | Validate that profile is getting listed in the Tax Payer List if the user has tax Payer Category Legal Entity and sub tax payer category as Government Entity    | Admin   | ketan.prajapati | admin |     130748ADFSXXXABVCDFE00100 | 20181121041249414 | 1Rivet S              |Dharamdas Chamber,Near Axis Bank| Mining        | Aketi     |
    #  | DRC_ATC_TaxPayerProfile_List_12 | Validate that profile is getting listed in the Tax Payer List if the user has tax Payer Category Legal Entity and sub tax payer category as Incorporated Bodies  | Admin   | ketan.prajapati | admin |   7652458755446 | 20180829074250394 | LukanLeInc           | add, | Manufacturing | Aketi     |
    #  | DRC_ATC_TaxPayerProfile_List_13 | Validate that profile is getting listed in the Tax Payer List if the user has tax Payer Category Legal Entity and sub tax payer category as Other Non-Corporates | Admin   | ketan.prajapati | admin | 341534475893759 | 20180830103151090 | Lokun non corporates | add, | Manufacturing | Aketi     |

  @Mtc_taxofficer_02 @taxofficer
  Scenario Outline: Validate the  Functionality of Taxpayer Profile Menu Item internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Tax Payer Profile Page should get displayed along with  the List of all Registered Tax Payer

    Examples: 
      | Test Case ID                    | Description                                                 | officer    | uname         | pwd   |
      | DRC_ATC_TaxPayerProfile_List_01 | Validate the  Functionality of Taxpayer Profile Menu Item . | Taxofficer | jitesh.mistry | admin |

  @Mtc_taxofficer_03 @taxofficer
  Scenario Outline: Validate the filter by dropdown with respect to Filter option All, NITVA,NIF,,Tax Payer,Tax Office,Business Type internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Select the Option from the Filter by Dropdown as "NITVA"
    Then Enter valid data in "20180820071455014" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "NIF"
    Then Enter valid data in "20180820071455014" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "TaxPayer"
    Then Enter valid data in "Tapan Parekh" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "BusinessType"
    Then Enter valid data in "Mining" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then Select the Option from the Filter by Dropdown as "TaxPayerCategory"
    Then Enter valid data in "Natural Person" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box

    Examples: 
      | Test Case ID                    | Description                                                                                                      | officer    | uname         | pwd   | All | NITVA | NIF |
      | DRC_ATC_TaxPayerProfile_List_02 | Validate the filter by dropdown with respect to Filter option All, NITVA,NIF,,Tax Payer,Tax Office,Business Type | Taxofficer | jitesh.mistry | admin |     |       |     |

  @Mtc_taxofficer_04 @taxofficer
  Scenario Outline: Validate the filter by dropdown with respect to Filter option with valid data in type here Search Box.All,NITVA,NIF,Tax Payer,Tax Office,Business Type internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Select the Option from the Filter by Dropdown as "All"
    Then Enter valid data in "20180820071455016" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then No record found Messages "No records found"should be displayed
    Then Select the Option from the Filter by Dropdown as "NITVA"
    Then Enter valid data in "20180820071455016" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then No record found Messages "No records found"should be displayed
    Then Select the Option from the Filter by Dropdown as "NIF"
    Then Enter valid data in "20180820071455014" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then No record found Messages "No records found"should be displayed
    Then Select the Option from the Filter by Dropdown as "TaxPayer"
    Then Enter valid data in "Tapan Parekh" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then No record found Messages "No records found"should be displayed
    Then Select the Option from the Filter by Dropdown as "BusinessType"
    Then Enter valid data in "Mining" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then No record found Messages "No records found"should be displayed
    Then Select the Option from the Filter by Dropdown as "TaxPayerCategory"
    Then Enter valid data in "Natural Person" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box
    Then No record found Messages "No records found"should be displayed

    Examples: 
      | Test Case ID                    | Description                                                                                                                                            | officer    | uname | pwd |
      | DRC_ATC_TaxPayerProfile_List_03 | Validate the filter by dropdown with respect to Filter option with valid data in type here Search Box.All,NITVA,NIF,Tax Payer,Tax Office,Business Type | Taxofficer |       |     |

  @Mtc_taxofficer_05 @View @taxofficer
  Scenario Outline: Validate the View Icon Functionality internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then Validate the View Icon Functionality
    Then Tax Payer details of the particular Tax Payer should be displayed
    Then Click on Previous Button on TaxPayerDetails page
    Then officer is on Tax Payer Profile List

    Examples: 
      | Test Case ID                    | Description                                                 | officer    | uname         | pwd   |
      | DRC_ATC_TaxPayerProfile_List_04 | Validate the  Functionality of Taxpayer Profile Menu Item . | Taxofficer | jitesh.mistry | admin |

  @Mtc_taxofficer_06 @navigation @taxofficer
  Scenario Outline: Validate the Pagination Button Functionality of First , Last,Next, Previous ,Page Number Search Button internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User clicks on page button"2" other than first button ths page should be displayed
    Then User click on page button "First" User should be on that page
    Then User click on page button "Last" User should be on that page

    Examples: 
      | Test Case ID                    | Description                                                 | officer    | uname          | pwd   |
      | DRC_ATC_TaxPayerProfile_List_05 | Validate the  Functionality of Taxpayer Profile Menu Item . | Taxofficer | saurabh.dongre | admin |

  @Mtc_taxofficer_07 @navigation @taxofficer
  Scenario Outline: Validate the Pagination Button Functionality of First , Last,Next, Previous ,Page Number Search Button internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User clicks on page button Next user should be second page
    Then User click on page button Previous button User should be on First Page
    Then User click on page button Previous button,Previous button should be non-editable
    Then User click on page button Last button User should be on Last Page

    Examples: 
      | Test Case ID                    | Description                                                                                             | officer    | uname            | pwd   |
      | DRC_ATC_TaxPayerProfile_List_06 | Validate the Pagination Button Functionality of First , Last,Next, Previous ,Page Number Search Button. | Taxofficer | jitesh.prajapati | admin |

  @Mtc_taxofficer_09 @taxofficer
  Scenario Outline: Validate the NITVA, NIF, Tax Payer, Address, Business Type , Tax Office of the Tax payer is correctly displayed  after VAT registration is approved successfully of the User internal portal.
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User Search using NITVA"<nitva>"
    Then Observes the details displayed in the list NIF"<nif>"BusinessNmae/ApplicantName"<name>"Address"<add>"BusinessType"<btype>"Taxoffice"<taxoffice>"
    Then Observes NITVA"<NITVA>"field

    Examples: 
      | Test Case ID                    | Description                                                                                                                                                                   | officer    | uname         | pwd   | nif             | name      | add  | btype         | taxoffice | NITVA             |
      | DRC_ATC_TaxPayerProfile_List_08 | Validate the NITVA, NIF, Tax Payer, Address, Business Type , Tax Office of the Tax payer is correctly displayed  after VAT registration is approved successfully of the User. | Taxofficer | jitesh.mistry | admin | 341534475893759 | Lokuncopr | add, | Manufacturing | Aketi     | 20180830103151090 |

  @Mtc_taxofficer_08 @taxofficer
  Scenario Outline: Validate the Pagination Functionality by using Page Number Search Option internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User click on page button "First" User should be on that page

    Examples: 
      | Test Case ID                    | Description                                                               | officer    | uname         | pwd   |
      | DRC_ATC_TaxPayerProfile_List_07 | Validate the Pagination Functionality by using Page Number Search Option. | Taxofficer | jitesh.mistry | admin |

  @Mtc_taxofficer_10 @taxofficer @ReviewInProgress @Status
  Scenario Outline: Validate that profile is not getting listed in the Tax Payer List if the user submitted the form but the status is Review In Progress internal portal
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then User Search using NIF"<nif>"
    Then No record found Messages "<msg>"should be displayed

    Examples: 
      | Test Case ID                    | Description                                                 | officer    | uname         | pwd   | nif        | name                 | add     | btype  | taxoffice | msg              |
      | DRC_ATC_TaxPayerProfile_List_09 | Validate the  Functionality of Taxpayer Profile Menu Item . | Taxofficer | jitesh.mistry | admin | 6543210789 | Lokun Natural Person | Address | Mining | Aketi     | No records found |

  @Mtc_taxofficer_11_12 @taxofficer @OnHold @Status @Rejected
  Scenario Outline: Validate that profile is not getting listed in the Tax Payer List
    Given "<Test Case ID>""<Description>"the Officer"<officer>" has logged in internal portal"<uname>""<pwd>"
    When Clicks on Tax Payer Profile Menu item"<officer>"
    Then officer is on Tax Payer Profile List
    Then User Search using NIF"<nif>"
    Then No record found Messages "<msg>"should be displayed

    Examples: 
      | Test Case ID                    | Description                                                                                                                            | officer    | uname         | pwd   | nif      | msg              |
      # | DRC_ATC_TaxPayerProfile_List_10 | Validate that profile is not getting listed in the Tax Payer List if the user submitted the form but the status is On Hold             | Taxofficer | jitesh.mistry | admin | 456456456464 | No records found |
      | DRC_ATC_TaxPayerProfile_List_11 | Validate that profile is not getting listed in the Tax Payer List if the user submitted the VAT Application and the Status is Rejected | Taxofficer | jitesh.mistry | admin | 1t2r3e1t | No records found |
