Feature: User is on Tax Officer internal Portal Help Desk

  @TC_01_04_05_06_07_08_TaxOfficer_3893
  Scenario Outline: Validate the Help Desk sub menu functionality and date format and valid and invalid search functionality -
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User navigate to helpdesk page
    And User enter in add new button frame
    And User type "<date>" on internal
    And User verify date format on internal
    And User search for Invalid data "<invalid>" and verify mess " No records found."
    And User search for valid data "<validData>" and verify
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal
    And User see frame is default in internal
    And User verify mess "<mess>"
    And User enter in add new button frame
    And User click on cancel button
    And User see frame is default in internal
    And User navigate to helpdesk page

    Examples: 
      | TestcaseID                               | Description                                          | date | invalid   | validData | mess                              |
      | TaxOfficer_Helpdesk_TC_01_04_05_06_07_08 | Verify date format valida and in valid functionality | open | as55d5wad | Open      | Issue Ticket updated successfully |

  @TC_09_10_11_12_TaxOfficer_3893
  Scenario Outline: Verify EFD Related ticket, General Query, System Related ticket, Payment Related Issue Type
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User navigate to helpdesk page
    And User enter in add new button frame
    And User type "<Data1>" on internal
    And User click on edit buton internal portal
    And User verify the issue type
    And User click on cancel button
    And User see frame is default in internal

    #    And User click on Dashboard
    Examples: 
      | TestcaseID                         | Description                 | Data1                |
      | TaxOfficer_Helpdesk_09_10_11_12_01 | Verify EFD Related issue    | EFD Related issue    |
      | TaxOfficer_Helpdesk_09_10_11_12_02 | Verify General Query        | General Query        |
      | TaxOfficer_Helpdesk_09_10_11_12_03 | Verify System Related issue | System Related issue |
      | TaxOfficer_Helpdesk_09_10_11_12_04 | Verify Payment Related      | Payment Related      |

  # 15 covered in tax payer
  @TC_13_14_16_TaxOfficer_3893
  Scenario Outline: Verify Under Review , Request information, close  
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User type "<Data>" on internal
    And User see ticket id
    And User click on edit buton internal portal
    And User click on Next status and click on under review
    And User click on Submit button internal portal officer
    And User click on cancel button
    And User type ticket id
    And User see status changed to "<UR>"
    And User click on edit buton internal portal
    And User click on Next status and click on Request Information    
    And User click on comments and Attachments     
    And User type comment for Request Information "<comment>"
    And User click on Submit button internal portal officer
    And User click on cancel button
    And User type ticket id
    And User see status changed to "<RI>"
    And User click on edit buton internal portal
    
    And User click on comments and Attachments and press page up
    
    And User click on Next status and click on close status
    And User click on Submit button internal portal officer
    And User click on cancel button
    And User type ticket id
    And User see status changed to "<Cl>"
    And User see frame is default in internal
    And User click on Dashboard

    Examples: 
      | TestcaseID                      | Description              | Data | UR           | RI                  | Cl    | comment               |
      | TaxOfficer_Helpdesk_TC_13_14_16 | Verify EFD Related issue | Open | Under Review | Request Information | Close | Need more information |

########################################################################################################################################################################

  # For this the paymemnt of should be done for another user using another tax payer name (i.e through ETL)
  # When creating ticket it should be same data as enter in etl for payment (i.e Transaction id , Amount and Date )
  #@TC_17_19_TaxOfficer_3893
  #Scenario Outline: Validate the status Request Adjustment when issue type is Payment related and Adjustment In Progress to Close  
    #Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    #And User enter in add new button frame
        # before make a payment for tax payer one (for anothe via ETL)
       # than create issue ticket of tax payer two(generate issue id) and type in data
    #And User type "<Data>" on internal
    #And User get request adj id
    #And User click on edit buton internal portal
    #And User click on Next status and click on under review
    #And User click on Submit button internal portal officer
    #And User click on Next status and click on Request Adjustement
    #And User click on Submit button internal portal and navigate to Account Adjustement
    #And User click on Approved by and select officier "<officier>"
    #And User type data in "<nitva>" account adjustement and clik on search button
    #And User select radio button and click on select
    #And User click on Add button and select radio and click on select
    #And User select Reason dropdown and click on Submit button
    #And User enter in add new button frame
    #And User type request adj id
    #And User see status changed to "<AIP>"
    #And User see frame is default in internal
    #And User click on Account Adjustment and select case id and type "<Data>" and clik on search
    #And User click on eye and navigate to account adjustement page and click on approve button
    #And User wait for Account Adjustment page
    #And User click on Helpdesk
    #And User enter in add new button frame
    #And User type request adj id
    #And User see status changed to "<CL>"
    #And User see frame is default in internal
    #And User click on Dashboard
#
    #Examples: 
      #| TestcaseID                   | Description              | Data            | officier | nitva             | AIP                    | CL    |
      #| TaxOfficer_Helpdesk_TC_17_19 | Verify EFD Related issue | H19020100000011 | drp_off1 | 20190118050708529 | Adjustment In Progress | Close |

########################################################################################################################################################################

  @TC_18_TaxOfficer_3893
  Scenario Outline: Validate the Next status change from Request Adjustment to Perform Adjustment
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User enter in add new button frame
    And User type "<Data>" on internal
    And User get request adj id
    #   And User click on edit buton internal portal
    #   And User click on Next status and click on under review
    #    And User click on Submit button internal portal
    #    And User click on Helpdesk
    #    And User enter in add new button frame
    #    And User type "<Data>" on internal
    And User click on edit buton internal portal
    And User click on Next status and click on Perform Adjustment
    And User click on Submit button internal portal officer
    And User click on cancel button
    And User type request adj id
    And User see status changed to "<PA>"
    And User see frame is default in internal
    And User click on Dashboard

    Examples: 
      | TestcaseID             | Description                      | Data               | PA                 |
      | TaxOfficer_Helpdesk_18 | Verify Perform Adjustment Status | Request Adjustment | Perform Adjustment |

  @TC_22_23_24_21_TaxOfficer_3893
  Scenario Outline: Verify Priority field , Communication, download file and re-assign ticket -fx taxofficer
    Given User click on Helpdesk menu on internal portal "<TestcaseID>" "<Description>"
    And User navigate to helpdesk page
    And User enter in add new button frame
    And User type "<Data>" on internal
    And User see ticket id for officier
    And User click on edit buton internal portal
    And User click on Priority and select "<prio>"
    And User click on Submit button internal portal officer
    
    And User see frame is default in internal    
    And User verify mess "<VerifyMess>"    
    And User enter in add new button frame    
    
    And User click on comments and Attachments    
    And User type comment "<comm>"
    And User click on chat "<public>"
    And User click on browse button and select file on internal "<file>"
    And User click on Submit button internal portal officer
    And User see file "<file>" is uploaded and click on download button and verify
    
    And User click on comments and Attachments and press page up
    
    And User click on Re-Asign to and select another officer "<officier>"
    And User click on Submit button internal portal officer
    And User click on cancel button
    And User type ticket id and see mess and verify mess " No records found."

    Examples: 
      | TestcaseID                         | Description              | Data | prio    | comm             | public     | file          | officier  | mess              | VerifyMess                        |
      | TaxOfficer_Helpdesk_TC_22_23_24_21 | Verify EFD Related issue | open | drp_Low | Priority Changed | rad_public | BankFile.xlsx | drp_op_DJ | No records found. | Issue Ticket updated successfully |
      
