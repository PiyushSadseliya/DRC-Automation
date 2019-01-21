Feature: User is on Manage VAT Registration and user perform opertations

  # @ManageVATRegistration_DV-1376
  # Scenario: Validate the Manual Assessment dashboard page All clicking compoment
  #   Given User is on Assessment Page
  #   And User click on windows icon
  #   And User enter username and password and click on login and see dashboard
  Scenario Outline: Validating file download, view certificate, download certificate and approval of VAT - internal portal
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on manage setting and select Review
    Then it Navigate to Tax Payer Details
    And user click on download icon and uploaded file gets downloaded

    Examples: 
      | TestcaseID                              | Description                                                                          | Filters        | Value          |
      | Valid_Manage_VAT_Creation_Cerificate_01 | Validating file download, view certificate, download certificate and approval of VAT | Applicant Name | Approved User1 |

  @TC_07_ManageVATRegistration_DV-1376 @ApprovedUser
  Scenario Outline: Validating file download, view certificate, download certificate and approval of VAT
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on manage setting and select Review
    Then it Navigate to Tax Payer Details
    And user click on download icon and uploaded file gets downloaded
    And user click on view icon and file gets display
    And user click on Approve and Continue

    #Then user see the certificate and click on download
    Examples: 
      | TestcaseID                              | Description                                                                | Filters        | Value          |
      | Valid_Manage_VAT_Creation_Cerificate_01 | Validating file view certificate, download certificate and approval of VAT | Applicant Name | Approved User1 |

  #TC_04   Note:  #1. Tax Officer should be logged out from the Internal Portal.
  #2. DGI Admin should be logged in to the Internal Portal Successfully.  Future Part
  @TC_04_ManageVATRegistration_DV-1376 @RejectUser
  Scenario Outline: Validate Tax Officer can Reject the Application Form - internal portal
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on manage setting and select Review
    Then it Navigate to Tax Payer Details
    And user click on Reject button and popup gets display
    And user enter reason for rejection "<Reason>"
    And user click on Submit button

    Examples: 
      | TestcaseID                          | Description                       | Filters        | Value          | Reason                                |
      | Valid_Manage_VAT_Creation_Reject_01 | user click on reject with comment | Applicant Name | Rejected User1 | You have not provided proper document |

  #TC_06  Need to discuss integration part
  @TC_06_ManageVATRegistration_DV-1376 @OnholdUser
  Scenario Outline: Validate Tax Officer can post Comment to Tax Payer after Clicking on Additional Clarification /Document Needed
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on manage setting and select Review
    Then it Navigate to Tax Payer Details
    And user click on Additional Clarification/Document Needed
    And user entered comment for required document "<document>"
    And user click on on hold button

    Examples: 
      | TestcaseID                                           | Description                          | Filters        | Value          | document                                        |
      | Valid_Manage_VAT_Creation_AdditionalClarification_01 | user enter comment and click on hold | Applicant Name | OnHolded User1 | Your Address is not matching with your passport |
