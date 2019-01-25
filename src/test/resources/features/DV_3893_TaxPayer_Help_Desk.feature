Feature: User is on Tax Payer Portal Help Desk

  #0
  @TC_01_Extra_user_created_System
  Scenario Outline: Creating System related issue
    Given User login in to tax payer email "<email>" and  password "<password>"
    #  And User click on Dashboard
    And User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User validate Helpdesk page
    #  And User click here for first time
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>"
    And User type title "<title>" for Helpdesk
    And User store title for System releated
    And User enter in description frame
    And User type description "<Description_1>" for Helpdesk
    And User click on Submit button for system related
    And User type store title and get issue id
    And User see referance id for System related issue
    And User see frame is default
    And User click on Dashboard

    Examples: 
      | TestcaseID           | Description                       | email                        | password | List           | title           | Description_1                 |
      | TaxPayer_Helpdesk_01 | Verify System related issue extra | automationone@mailinator.com | Test123  | drp_Select_SRI | System Related4 | Creating System related issue |

  #0.1
  @TC_Extra_user_created_Payment_Related
  Scenario Outline: Creating Payment related issue
    Given User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>"
    And User type title "<title>" for Helpdesk
    And User store title for Payment Related
    And User enter in description frame
    And User type description "<Description_1>" for Helpdesk
    And User enter again in add new button frame
    And User type Trasnsaction ID "<Tid>"
    And User type Amount "<Amount>"
    And User select date "<date>"
    And User click on Submit button
    And User type store title and get issue id Payment Related
    And User see referance id forPayment Related issue
    And User see frame is default
    And User click on Dashboard

    Examples: 
      | TestcaseID        | Description                  | List          | title            | Description_1                  | Tid       | Amount | date       |
      | TaxPayer_Helpdesk | Verify Payment related extra | drp_Select_PR | Payment Related4 | Creating Payment related issue | T10012019 |  10000 | 2018-08-22 |

  #1
  @TC_08_09_10_11_06_07_03
  Scenario Outline: Verify add new issue , submit , cancel , System Related Issue dropdown , search functionality
    Given User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Submit button and see mess "Title field is required." and "Description field is required." and "Please select Issue Types."
    And User enter in add new button frame
    And User click on Issue Type and select "<List>"
    And User type title "<title>" for Helpdesk
    And User enter in description frame
    And User type description "<Description_1>" for Helpdesk
    And User enter in subcategory frame
    And User click on Subcategory and select "<subcategory>"
    And User click on browse button and select file "<file>"
    And User click on Cancel button and navigate to helpdesk
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>"
    And User type title "<title>" for Helpdesk
    And User store title for new user
    And User enter in description frame
    And User type description "<Description_1>" for Helpdesk
    And User enter in subcategory frame
    And User click on Subcategory and select "<subcategory>"
    And User click on browse button and select file "<file>"
    And User click on Submit button and the unique id is generated
    And User type title one
    And User get issue id for system related
    And User verify date format on internal
    And User type invalid search id "<in-search>" and verify mess " No records found."
    And User see frame is default
    And User click on Dashboard

    Examples: 
      | TestcaseID                             | Description                                                                                   | List           | title   | Description_1  | subcategory | file                               | in-search     | date                |
      | TaxPayer_Helpdesk_08_09_10_11_06_07_03 | Verify add new issue , submit , cancel , System Related Issue dropdown , search functionality | drp_Select_SRI | Testing | System Related | drp_GSI     | Officers List With Tax Center.xlsx | 14681231asdda | asdasdasdasdasdsads |

  #2
  @TC_12_24_23
  Scenario Outline: Validate General Query Issue type Drop-down and Edit functionality
    Given User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>" and user verify issue type is selected
    And User type title "<title>" and verify title
    And User see Issue Type
    And User store title for general query issue type
    And User enter in description frame
    And User type description "<Description_1>" and verify description
    And User enter in subcategory frame
    And User click on Subcategory and select "<subcategory>" and verify subcategory is selected
    And User type Tax Period "<Tax Period>" and verify tax period
    And User click on browse button and select file "<file>"
    And User click on Submit button and the unique id is generated
    And User type title for general query issue type
    And User get issue id for general query issue type
    And User click on edit buton
    And User verify Issue Type
    And User verify Ticket id
    And User verify title
    And User enter in description frame
    And User verify derscription
    And User enter in subcategory frame
    And User click on upload button and and verify the file "<file>" and see file name
    # And User click on upload button and select file "<file>" and verify uploaded file
    # need to ask for scroll down
    And User click on submit button on helpdesk
    And User click on download and verify
    And User click on Dashboard

    Examples: 
      | TestcaseID                 | Description                                | List          | title                | Description_1            | subcategory | file          | Tax Period |
      | TaxPayer_Helpdesk_12_24_23 | Verify General Query Issue and edit button | drp_Select_GQ | General Queary Issue | General Query Issue type | drp_Decl    | BankFile.xlsx | January    |

  #3
  @TC_13
  Scenario Outline: Validate EFD Related Issue type Drop-down
    Given User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>"
    And User type title "<title>" for Helpdesk
    And User store title for EFD Related Issue type
    And User enter in description frame
    And User type description "<Description_1>" for Helpdesk
    And User enter in subcategory frame
    And User click on Subcategory and select "<subcategory>"
    And User type EFD id "<EFD>" and click on EFD Manufacturer and select "<Man>"
    And User click on browse button and select file "<file>"
    And User click on Submit button and the unique id is generated
    And User type title for EFD Related Issue type
    And User get issue id for EFD Related Issue type
    And User see frame is default
    And User click on Dashboard

    Examples: 
      | TestcaseID           | Description              | List           | title              | Description_1     | subcategory | EFD    | Man           | file                               |
      | TaxPayer_Helpdesk_13 | Verify EFD Related Issue | drp_Select_ERI | EFD Related Queary | EFD Related Issue | drp_ETR     | EFD001 | drp_TEstManfa | Officers List With Tax Center.xlsx |

  #4
  @TC_14
  Scenario Outline: Validate Payment Related Issue type Drop-down
    Given User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>"
    And User type title "<title>" for Helpdesk
    And User store title for Payment Related Issue type Drop-down
    And User enter in description frame
    And User type description "<Description_1>" for Helpdesk
    And User type Trasnsaction ID "<Tid>"
    And User type Amount "<Amount>"
    And User select date "<date>"
    And User click on browse button and select file "<file>"
    And User click on Submit button and the unique id is generated
    And User type title for Payment Related Issue type Drop-down
    And User get id for Payment Related Issue type Drop-down
    And User see frame is default
    And User click on Dashboard

    Examples: 
      | TestcaseID           | Description                  | email                     | password | List          | title                  | Description_1         | Tid   | Amount | file                               | date       |
      | TaxPayer_Helpdesk_14 | Verify Payment Related Issue | arunkumar1@mailinator.com | Arun123  | drp_Select_PR | Payment Relatwed Issue | Payment Related Issue | PA001 |   5000 | Officers List With Tax Center.xlsx | 2018-08-22 |

  #5
  @TC_19_20_21_22
  Scenario Outline: Validate Issue Type dropdown and title , Description upload file
    Given User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User click on Add New Issue button
    And User click on Issue Type and select "<List>"
    And User see "<List_check>" is selected
    And User type title "<title>" and verify
    And User type title "<title1>" and verify
    And User type title "<title2>" and verify
    And User enter in description frame
    And User type description "<Description_1>" and verify
    And User type description "<Description_2>" and verify
    And User type description "<Description_3>" and verify
    And User enter in subcategory frame
    And User upload more than two mb file "<more_file>" and verify the message "File size should be less then 2MB"
    And User click on upload button and and verify the file "<file>" and see file name
    And User click on cancel button
    And User see frame is default
    And User click on Dashboard

    Examples: 
      | TestcaseID                    | Description                                       | List_check           | List           | title                        | title1                       | title2                        | Description_1 | Description_2              | Description_3   | more_file                | file                               |
      | TaxPayer_Helpdesk_19_20_21_22 | Verify Issue Type dropdown ,title and description | System Related Issue | drp_Select_SRI | QUEARY FOR PAYMENT RELATED 1 | Queary For Payment Related 1 | !!@!@#$@#$@#$@$ @#$!$@!#$@!#$ |   56165166554 | QUEARY FOR PAYMENT RELATED | 651651651665161 | SampleXLSFile_6800kb.xls | Officers List With Tax Center.xlsx |

  # inter portal start from here
  #6
  # will check from 1
  @TC_25
  Scenario Outline: Verify the Under Review Status for the Helpdesk ticket - internal portal
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    #   And User type "<date>" om
    # store title will type here
    And User type get issue id for system related
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on cancel button
    And User type get issue id for system related
    And User see status changed to "<UR>"

    Examples: 
      | TestcaseID           | Description                | UR           | date            |
      | TaxPayer_Helpdesk_25 | Verify Under Review Status | Under Review | H18121100000002 |

  #7
  # will check from 4
  @TC_26
  Scenario Outline: Verify the Request Adjustment Status for the Helpdesk ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    #And User type "<date>" om
    And User type id for Payment Related Issue type Drop-down
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on Next status and click on Request Adjustement
    And User click on Submit button internal portal
    And User click on cancel button
    And User type id for Payment Related Issue type Drop-down
    And User see status changed to "<RA>"

    Examples: 
      | TestcaseID           | Description                      | RA                  | date            |
      | TaxPayer_Helpdesk_26 | Verify Request Adjustment Status | Request Adjustement | H19011100000026 |

  #8
  # will check from  3
  @TC_27
  Scenario Outline: Verify the Request Information Status for the Helpdesk EFD Related ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    # store title will type here
    And User type issue id for EFD Related Issue type
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on Next status and click on Request Information
    And User click on Submit button internal portal
    And User click on cancel button
    And User type issue id for EFD Related Issue type
    And User see status changed to "<RI>"

    Examples: 
      | TestcaseID           | Description                       | RI                  |
      | TaxPayer_Helpdesk_27 | Verify Request Information Status | Request Information |

  #9
  # will check from  1 (i.e 25)
  @TC_28
  Scenario Outline: Validate the Information Received status for the Helpdesk ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User type get issue id for system related
    And User click on edit buton internal portal
    And User click on Next status and click on Request Information
    And User login in to tax payer email "<email>" and  password "<password>"
    And User click on helpdesk
    And User type get issue id for system related
    And User click on edit buton internal portal
    And User respond to the comment "<comment>"
    And User click on Submit button internal portal
    And User click on Dashboard
    And User click on helpdesk
    And User type get issue id for system related
    And User see status changed to "<IR>"

    Examples: 
      | TestcaseID           | Description                        | comment                        | email                     | password | IR                   |
      | TaxPayer_Helpdesk_28 | Verify Information Received status | The Additional information are | arunkumar1@mailinator.com | Arun123  | Information Received |

  #10
  # will check from  0
  @TC_29
  Scenario Outline: Verify the Request Information Status for the Helpdesk System related ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    #  coming from store in 0 and searched
    And User type System related issue id
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on Next status and click on Request Information
    And User click on Submit button internal portal
    And User click on cancel button
    And User type System related issue id
    And User see status changed to "<RI>"

    Examples: 
      | TestcaseID           | Description                                          | RI                  |
      | TaxPayer_Helpdesk_29 | Verify Request Information for System related ticket | Request Information |

  #10
  # will check from  0.1
  @TC_30
  Scenario Outline: Verify the Request Information Status for the Helpdesk Payment related ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User type Payment related issue id
    # search stored title
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on Next status and click on Request Information
    And User click on Submit button internal portal
    And User click on cancel button
    And User type Payment related issue id
    And User see status changed to "<RI>"

    Examples: 
      | TestcaseID           | Description                                    | RI                  |
      | TaxPayer_Helpdesk_30 | Verify Request Information for Payment related | Request Information |

  #11
  # will check from  2
  @TC_31
  Scenario Outline: Verify the Request Information Status for the Helpdesk General query related ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User type issue id for general query issue type
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on Next status and click on Request Information
    And User click on Submit button internal portal
    And User click on cancel button
    And User type issue id for general query issue type
    And User see status changed to "<RI>"

    Examples: 
      | TestcaseID           | Description                                                     | RI                  |
      | TaxPayer_Helpdesk_31 | Verify Request Information Status for the General query related | Request Information |

  #12
  # will close from 0
  @TC_32
  Scenario Outline: Verify the Close Status for the Helpdesk System Related Issue ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    #  coming from store in 0
    And User type System related issue id
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User click on Next status and click on close status
    And User click on Submit button internal portal
    And User click on cancel button
    And User type System related issue id
    And User see status changed to "<Cl>"

    Examples: 
      | TestcaseID           | Description                                  | CL    |
      | TaxPayer_Helpdesk_32 | Verify Close Status for System Related Issue | Close |

  #13
  # will close from 0.1
  @TC_33
  Scenario Outline: Verify the Close Status for the Helpdesk Payment Related Issue ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User type Payment related issue id
    # store in 0.1
    And User click on edit buton internal portal
    And User click on Next status and click on close status
    And User click on Submit button internal portal
    And User click on cancel button
    And User type Payment related issue id
    And User see status changed to "<Cl>"

    Examples: 
      | TestcaseID           | Description                                   | CL    |
      | TaxPayer_Helpdesk_33 | Verify Close Status for Payment Related Issue | Close |

  #14
  # will close from 31
  @TC_34
  Scenario Outline: Verify the Close Status for the Helpdesk  General Query Issue ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User type issue id for general query issue type
    And User click on edit buton internal portal
    And User click on Next status and click on close status
    And User click on Submit button internal portal
    And User click on cancel button
    And User type issue id for general query issue type
    And User see status changed to "<Cl>"

    Examples: 
      | TestcaseID           | Description                                 | CL    |
      | TaxPayer_Helpdesk_34 | Verify Close Status for General Query Issue | Close |

  #15
  # will close from 3 -> 8
  @TC_35
  Scenario Outline: Verify the Close Status for the Helpdesk EFD Related issue ticket
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User type issue id for EFD Related Issue type
    And User click on edit buton internal portal
    And User click on Next status and click on close status
    And User click on Submit button internal portal
    And User click on cancel button
    And User type issue id for EFD Related Issue type
    And User see status changed to "<Cl>"

    Examples: 
      | TestcaseID           | Description                               | CL    |
      | TaxPayer_Helpdesk_35 | Verify Close Status for EFD Related issue | Close |

  #16
  @TC_36
  Scenario Outline: Validate Communication functionality when current status is close - Tax Payer
    Given User login in to tax payer email "<email>" and  password "<password>"
    And User click on Helpdesk menu "<TestcaseID>" "<Description>"
    And User type "<close_status>"

    #And User click on edit buton
    #And User click on browse button and select file "<file>"
    Examples: 
      | TestcaseID           | Description                                                     | email                     | password | file                               | close_status |
      | TaxPayer_Helpdesk_36 | Verify Communication functionality when current status is close | arunkumar1@mailinator.com | Arun123  | Officers List With Tax Center.xlsx | close        |
