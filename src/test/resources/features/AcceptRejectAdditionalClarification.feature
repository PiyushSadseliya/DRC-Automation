 Feature: User is on Manage VAT Registration 

#TC_02  Note:It will be covered in future sprint.
#@TC_02
Scenario Outline: Validate Tax Officer can Approve the Application Form Successfully.

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on Approve and Continue button
Then user seee the certificate


Examples:
| TestcaseID                          |Filters |Value|
|Valid_Manage_VAT_Creation_Approve_01 |Status  |Review in Progress|

#@TC_03
Scenario Outline: Validate Tax Officer can View/Download the Files uploaded by Tax Payer.
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on view icon and file gets display
And user click on download icon and uploaded file gets downloaded  



Examples:
| TestcaseID                                |Filters|Value|
|Valid_Manage_VAT_Creation_View_Download_01 |Status |Review in Progress|


#TC_04   Note:  #1. Tax Officer should be logged out from the Internal Portal.
                #2. DGI Admin should be logged in to the Internal Portal Successfully.  Future Part
#@TC_04
Scenario Outline: Validate Tax Officer can Reject the Application Form
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on Reject button and popup gets display
And user enter reason for rejection "<Reason>"
And user click on Submit button
 

Examples:
| TestcaseID                         |Filters | Value              | Reason|
|Valid_Manage_VAT_Creation_Reject_01 |Status  | Review in Progress | You have not Provide proper document|


#@TC_05
Scenario Outline: Validate Tax officer can change the status to on hold in case of Additional Clarification/Document Needed for Application form 
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on Additional Clarification/Document Needed
And user entered comment for required document "<document>"
And user click on on hold button


Examples:
| TestcaseID                    |Filters |Value  |document|
|Valid_Manage_VAT_Creation_OnHold_01     |Status |Review in Progress|Your Address is not matching with your passport|


#TC_06  Need to discuss
Scenario Outline: Validate Tax Officer can post Comment to Tax Payer after Clicking on Additional Clarification /Document Needed
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on Additional Clarification/Document Needed
And user entered comment for required document "<document>"
And user click on on hold button

Examples:
| TestcaseID                                          |Filters|Value             |document|
|Valid_Manage_VAT_Creation_AdditionalClarification_01 |Status |Review in Progress|Your Address is not matching with your passport|


#@TC_07
 Scenario Outline: Validate that VAT/NITVA Certificate is generated and downloaded Successfull
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on Approve and Continue
Then user see the certificate and click on download 

Examples:
|TestcaseID                    |Filters|Value|
|Valid_Manage_VAT_Creation_Cerificate_01 |Status|Review In Progress|















 