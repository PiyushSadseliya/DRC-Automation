Feature: EFD Vendor Module TestSuite

  @TC_01
  Scenario Outline: Validate registration of new Vendor when user clicked on Cancel button - efd-manufacturerportal
    Given User login vendor's credentials
    When User landed on dashboard
    Then Click on vendor registration tab
    And Click on Register vendor
    And Enters NIF number "<Nif>"
    And Enters NIF Registration Date "<NIFDate>"
    # And Enter the NITVA "<Nitviano>"
    And Enter Vendor Information "<vendorname>", "<bussinessname>", "<VEmail>", "<VMobileNumber>", "<Website>"
    And Enter Contact information "<Nameofperson>","<CMobile>" , "<CEmail>"
    And Enters Business Address Details "<AddressLine1>" , "<AddressLine2>" , "<Province>" ,"<City>" ,"<ZipCode>"
    Then Click on Cancel button

    #And User Login with vendor's credentials
    #Then Click on Register button
    Examples: 
      | TestCase_Id            | Description                                  | Nif                   | NIFDate    | Nitviano          | vendorname | bussinessname | VEmail            | VMobileNumber | Website                | Nameofperson | CEmail             | CMobile  | AddressLine1      | AddressLine2   | Province | City  | ZipCode |
      | TC_EDF_VendorPortal001 | Vendor registeration submodule of EFD module | 1632024ADFSCBVCDFE114 | 2018-12-11 | 20190116043654296 | Ven Dome   | Boeing Bon    | vendor@mt2015.com |      98987878 | www.efdtestexample.com | Autoz        | jackdev@mt2015.com | 78789800 | Dharamdas Chamber | Near HDFC Bank | Bas-Uele | Aketi |  444785 |

  @TC_02
  Scenario Outline: Validate registration of new Vendor when user clicked on Cancel button - efd-manufacturerportal
    #Given User login vendor's credentials
    When User landed on dashboard
    Then Click on vendor registration tab
    And Click on Register vendor
    And Enters NIF number "<Nif>"
    And Enters NIF Registration Date "<NIFDate>"
    # And Enter the NITVA "<Nitviano>"
    And Enter Vendor Information "<vendorname>", "<bussinessname>", "<VEmail>", "<VMobileNumber>", "<Website>"
    And Enter Contact information "<Nameofperson>","<CMobile>" , "<CEmail>"
    And Enters Business Address Details "<AddressLine1>" , "<AddressLine2>" , "<Province>" ,"<City>" ,"<ZipCode>"
    Then Click on Register button
    And User Login with vendor's credentials
    And user closed the current browser

    Examples: 
      | TestCase_Id            | Description                                  | Nif                   | NIFDate    | Nitviano          | vendorname | bussinessname | VEmail            | VMobileNumber | Website                | Nameofperson | CEmail             | CMobile  | AddressLine1      | AddressLine2   | Province | City  | ZipCode |
      | TC_EDF_VendorPortal001 | Vendor registeration submodule of EFD module | 1632024ADFSCBVCDFE151 | 2018-12-11 | 20190116043654296 | Ravi Kumar | Boeing Bon    | vendor@mt2015.com |      98987878 | www.efdtestexample.com | Autoz        | jackdev@mt2015.com | 78789800 | Dharamdas Chamber | Near HDFC Bank | Bas-Uele | Aketi |  444785 |

  @TC_Search
  Scenario Outline: Validate 'Filter By' functionality for all categories with invalid data - efd-manufacturerportal
    Given User login vendor's credentials
    And User landed on dashboard
    Then Click on vendor registration tab
    And select "<Filter>" option and "<Fvalue>"
    And Clicks on Search Button
    And User see mess "<Result>"

    Examples: 
      | TestCase_Id             | Description                                   | Filter             | Fvalue     | Result           |
      | TC_EDF_VendorPortal04.1 | Validate Filter By functionality NITVA number | NIF                | Random123  | No records found |
      | TC_EDF_VendorPortal04.2 | Validate Filter By functionality City number  | Name of the Vendor | Random 123 | No records found |
      | TC_EDF_VendorPortal04.3 | Validate Filter By functionality NITVA number | City               | Random     | No records found |

  @TC_Searchvalid
  Scenario Outline: Validate 'Filter By' functionality for all categories with invalid data - efd-manufacturerportal
    And User landed on dashboard
    Then Click on vendor registration tab
    And select "<Filter>" option and "<Fvalue>"
    And Clicks on Search Button
    And User see result "<Fvalue>"

    Examples: 
      | TestCase_Id             | Description                                   | Filter             | Fvalue                | 
      | TC_EDF_VendorPortal04.1 | Validate Filter By functionality NITVA number | NIF                | 1632024ADFSCBVCDFE151 | 
      | TC_EDF_VendorPortal04.2 | Validate Filter By functionality City number  | Name of the Vendor | Ravi Kumar            | 
      | TC_EDF_VendorPortal04.3 | Validate Filter By functionality NITVA number | City               | Aketi                 | 
  
  
  #@TC_3471_EFDReg02
  #Scenario Outline: Validate EFD Registration button - vendor
    #And User landed on dashboard
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #Then Click on NITVA Cancel button
#
    #Examples: 
      #| TestCase_Id           | Description                   | NITVAno           |
      #| TC_EDF_VendorPortal02 | Manufacture Test New Firmware | 20190116043654296 |
#
  #@TC_3471_EFDReg03
  #Scenario Outline: Validate Filter By functionality for all categories with valid data - Vendor portal
    #And User landed on dashboard
    #And Click on EFD Registration button
    #And select "<Filter>" option and "<Fvalue>"
    #And Clicks on Search Button
#
    #Examples: 
      #| TestCase_Id             | Description                                   | Filter    | Fvalue              |
      #| TC_EDF_VendorPortal03.1 | Validate Filter By functionality NITVA number | NITVA     | ADFSXXXABVCDFE00100 |
      #| TC_EDF_VendorPortal03.2 | Validate Filter By functionality City number  | City      | Aketi               |
      #| TC_EDF_VendorPortal03.3 | Validate Filter By functionality NITVA number | EFD Model | ETRC1001            |
#
  #@TC_3471_EFDReg04
  #Scenario Outline: Validate 'Filter By' functionality for all categories with invalid data - Vendor portal
    #And User landed on dashboard
    #And Click on EFD Registration button
    #And select "<Filter>" option and "<Fvalue>"
    #And Clicks on Search Button
#
    #Examples: 
      #| TestCase_Id             | Description                                   | Filter    | Fvalue              |
      #| TC_EDF_VendorPortal04.1 | Validate Filter By functionality NITVA number | NITVA     | ADFSXXXABVCDFE00100 |
      #| TC_EDF_VendorPortal04.2 | Validate Filter By functionality City number  | City      | Aketi01             |
      #| TC_EDF_VendorPortal04.3 | Validate Filter By functionality NITVA number | EFD Model | ETRC101             |
#
  #@TC_3471_EFDST03
  #Scenario Outline: Validate Search button functionality with valid NITVA number - Vendor portal
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #And Click on NITVA Search button
#
    #Examples: 
      #| TestCase_Id           | Description                                                  | NITVAno           |
      #| TC_EDF_VendorPortal02 | Validate Search button functionality with valid NITVA number | 20190116043654296 |
#
  #@TC_3471_EFDST04
  #Scenario Outline: Validate Search button functionality with invalid NITVA number - Vendor portal
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #And Click on NITVA Search button
#
    #Examples: 
      #| TestCase_Id           | Description                                                    | NITVAno          |
      #| TC_EDF_VendorPortal02 | Validate Search button functionality with invalid NITVA number | 2019024543654296 |
#
  #@TC_3471_EFDST06
  #Scenario Outline: Validate NITVA number searchbox on the EFD Registration page - Vendor portal
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
#
    #Examples: 
      #| TestCase_Id           | Description                                                  | NITVAno          |
      #| TC_EDF_VendorPortal02 | Validate NITVA number searchbox on the EFD Registration page | 2019024543654296 |
#
  #@TC_3471_EFDST07
  #Scenario Outline: Validate Cancel button on the EFD Registration page - Vendor portal
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #Then Click on NITVA Cancel button
#
    #Examples: 
      #| TestCase_Id           | Description                                         |
      #| TC_EDF_VendorPortal02 | Validate Cancel button on the EFD Registration page |
#
  #@TC_3471_EFDDT04
  #Scenario Outline: Validate Test button functionality keeping all fields empty - vendor portal
    #Given User Login with vendor's credentials
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #And Click on NITVA Search button
    #Then Click on Test button
#
    #Examples: 
      #| TestCase_Id           | Description                                        | NITVAno           |
      #| TC_EDF_VendorPortal01 | Test button functionality keeping all fields empty | 20190116043654296 |
#
  #@TC_3471_EFDDT05_06_07_10_09_13_14
  #Scenario Outline: Validate Test button functionality with valid details - vendor portal
    #Given User Login with vendor's credentials
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #And Click on NITVA Search button
    #And Enters  BusinessAddress "<Businessaddress>"
    #And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    #Then Select Type of Device "<Device>" , EFD Model "<EFDmodel>"
    #And Enter EFD ID "<EFDid>"
    #Then Click on Test button
#
    #Examples: 
      #| TestCase_Id            | Description                                             | NITVAno           | Businessaddress                                            | Sim1   | Sim2   | Device                  | EFDmodel | EFDid |
      #| TC_EDF_VendorPortal001 | Vendor registeration submodule of EFD Registration List | 20190116043654296 | Irrigation Colony, Above Axis Bank, Aketi, Bas-Uele-444604 | 895648 | 894545 | Electronic Tax Register | ETRC1001 | EFD   |
#
  #@TC_3471_EFDDT08
  #Scenario Outline: Validate Test button functionality with invalid details - vendor portal
    #Given User Login with vendor's credentials
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #And Click on NITVA Search button
    #And Enters  BusinessAddress "<Businessaddress>"
    #And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    #Then Select Type of Device "<Device>" , EFD Model "<EFDmodel>"
    #And Enter EFD ID "<EFDid>"
    #Then Click on Test button
#
    #Examples: 
      #| TestCase_Id            | Description                                    | NITVAno           | Businessaddress   | Sim1  | Sim2  | Device                  | EFDmodel | EFDid |
      #| TC_EDF_VendorPortal001 | Test button functionality with invalid details | 20190116043654296 | Irrigation Colony | 89648 | 89445 | Electronic Tax Register | ETRC1002 | EFD   |
#
  #@TC_3471_EFDDT_15_16_17
  #Scenario Outline: Validate Unique number functionality for SIM1, SIM2 and EFD ID fields - vendor portal
    #Given User Login with vendor's credentials
    #When User landed on dashboard
    #Then Click on EFD registration list tab
    #And Click on EFD Registration button
    #And Enter NITVA no "<NITVAno>"
    #And Click on NITVA Search button
    #And Enters  BusinessAddress "<Businessaddress>"
    #And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    #Then Select Type of Device "<Device>" , EFD Model "<EFDmodel>"
    #And Enter EFD ID "<EFDid>"
    #And Click on Registration List close button
#
    #Examples: 
      #| TestCase_Id            | Description                                                           | NITVAno           | Businessaddress                    | Sim1   | Sim2   | Device                  | EFDmodel | EFDid |
      #| TC_EDF_VendorPortal001 | Validate Unique number functionality for SIM1, SIM2 and EFD ID fields | 20190116043654296 | Irrigation Colony, Bas-Uele-444604 | 895648 | 894545 | Electronic Tax Register | ETRC1001 | EFD   |
