Feature: EFD Manufacture TestSuite

  #@Ta
  #Scenario Outline: Validate the manufacturer able to test the device and submit for approval - efd-manufacturerportal
  #Given User login manufacture's credentials
  #
  #Examples:
  #| TestCase_Id        | Description                                          |
  #| DRC_Manufacturer02 | Testing log submodule of EFD firmware testing module |
  @TC_02
  Scenario Outline: Validate the manufacturer able to test the device and submit for approval - efd-manufacturerportal
    Given User login manufacture's credentials
    #And User landed on dashboard
    And Click on EFD Firmware Testing

    #And Click on Testing Logs
    #And click on Test new Firmware button
    #And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    #Then Selects Type of Device "<Device>"
    #And Enter EFD ID "<EFDid>" and EFD Model "<EFDmodel>"
    #And Upload Firmware "<Firmwarefile>"
    #Then Click on Test button
    #Then Click on Next button
    #And Click Add Release Note and enter the description "<description>"
    #And Click On Submit button
    Examples: 
      | TestCase_Id        | Description                                          | Sim1       | Sim2       | Device                  | EFDmodel | EFDid | Firmwarefile | description                                |
      | DRC_Manufacturer02 | Testing log submodule of EFD firmware testing module | 8956487469 | 8945458413 | Electronic Tax Register | ETRC1001 | EFD   | EDFfile.pdf  | Device test successfully, you can proceed! |

  @TC_03
  Scenario Outline: Validate the Filter By search functionality on Released Firmware and Testing Log modules - efd-manufacturerportal
    #And User landed on dashboard
    #And Click on EFD Firmware Testing
    And user clicked on Testing logs from EFD firmware
    And Verify the select filter of testing logs "<Tfilter>" option and "<Tstatusname>" and click on search button

    Examples: 
      | TestCase_Id        | Description                   | Tfilter  | Tstatusname             |
      | DRC_Manufacturer03 | Manufacture Test New Firmware | EFD Type | Electronic Tax Register |

  #@TC_04
  #Scenario Outline: Validate the sorting functionality on Released Firmware and Testing Log modules landing page - efd-manufacturerportal
  #And User landed on dashboard
  #And Click on EFD Firmware Testing
  #And user clicked on Testing logs from EFD firmware
  #And Verify the select filter of testing logs "<Tfilter>" option and "<Tstatusname>" and click on search button
  #
  #Examples:
  #| TestCase_Id        | Description                   | Tfilter  | Tstatusname                 |
  #| DRC_Manufacturer04 | Manufacture Test New Firmware | EFD Type | Electronic Signature Device |
  @TC_05
  Scenario Outline: Validate Status of the tested device on Testing log landing page when testing is cancelled - efd-manufacturerportal
    #And User landed on dashboard
    #And Click on EFD Firmware Testing
    #And Click on Testing Logs
    And user clicked on Testing logs from EFD firmware
    And click on Test new Firmware button
    And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    Then Selects Type of Device "<Device>"
    And Enter EFD ID "<EFDid>" and EFD Model "<EFDmodel>"
    And Upload Firmware "<Firmwarefile>"
    Then Click on Test button
    Then Click on Next button
    And Click Add Release Note and enter the description "<description>"
    And Click On Cancel button

    #And Click on Previous button
    Examples: 
      | TestCase_Id        | Description                                          | Sim1       | Sim2       | Device                      | EFDmodel | EFDid | Firmwarefile | description                                |
      | DRC_Manufacturer06 | Testing log submodule of EFD firmware testing module | 8956487468 | 8945458412 | Electronic Signature Device | ESDC1003 | EFD   | EDFfile.pdf  | Device test successfully, you can proceed! |

  @TC_06
  Scenario Outline: Validate Status of the tested device on Testing log landing page when testing is successful - efd-manufacturerportal
    #And User landed on dashboard
    #And Click on EFD Firmware Testing
    #And Click on Testing Logs
    And user clicked on Testing logs from EFD firmware
    And click on Test new Firmware button
    And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    Then Selects Type of Device "<Device>"
    And Enter EFD ID "<EFDid>" and EFD Model "<EFDmodel>"
    And Upload Firmware "<Firmwarefile>"
    Then Click on Test button
    Then Click on Next button
    And Click Add Release Note and enter the description "<description>"
    And Click On Submit button

    #And Click on Previous button
    Examples: 
      | TestCase_Id        | Description                                          | Sim1       | Sim2       | Device                      | EFDmodel | EFDid | Firmwarefile | description                                |
      | DRC_Manufacturer06 | Testing log submodule of EFD firmware testing module | 8956487468 | 8945458412 | Electronic Signature Device | ESDC1003 | EFD   | EDFfile.pdf  | Device test successfully, you can proceed! |

  @TC_07
  Scenario Outline: Validate Status of the tested device on Testing log landing page when testing is unsuccessfull - efd-manufacturerportal
    #And User landed on dashboard
    #And Click on EFD Firmware Testing
    #And Click on Testing Logs
    And user clicked on Testing logs from EFD firmware
    And click on Test new Firmware button
    And Enter sim numberone "<Sim1>" sim numbertwo "<Sim2>"
    Then Selects Type of Device "<Device>"
    And Enter EFD ID "<EFDid>" and EFD Model "<EFDmodel>"
    And Upload Firmware "<Firmwarefile>"
    Then Click on Test button
    Then Click on Next button
    And Click Add Release Note and enter the description "<description>"
    And Click On Submit button

    #And Click on Previous button
    Examples: 
      | TestCase_Id        | Description                                          | Sim1       | Sim2       | Device                    | EFDmodel | EFDid | Firmwarefile | description                                |
      | DRC_Manufacturer07 | Testing log submodule of EFD firmware testing module | 8956487468 | 8945458412 | Electronic Fiscal Printer | EFPC1002 | EFD   | EDFfile.pdf  | Device test successfully, you can proceed! |

  @TC_08
  Scenario Outline: Validate status of tested firmare on Released Firmware page when its pending for approval from Admin - EFDinternalportal
    #Given User login manufacture's credentials
    #And User landed on dashboard
    #When Click on Admin EFD Firmware Testing
    #And Click the Admin view icon
    #And Click on Admin Reject button
    #And Click the Admin view icon
    #And Click on Admin Approve button
    Given User click on EFD management link
    When User click on filter by on EFD management and selects "<filter>"
    And user enters the "<input>" and click on Search button
    And verify the result "<Result>"

    Examples: 
      | TestCase_Id        | Description                                             | filter   | input                       | Result                      |
      | DRC_Manufacturer12 | Validate the EFD Model drop down on Device Details page | EFD Type | Electronic Signature Device | Electronic Signature Device |
