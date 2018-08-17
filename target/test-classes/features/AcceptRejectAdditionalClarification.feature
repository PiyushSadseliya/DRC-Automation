Feature: User is on Manage VAT Registration 

#TC_02  Note:It will be covered in future sprint.
Scenario Outline: Validate Tax Officer can Approve the Application Form Successfully.

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details
And user click on Approve and Continue Button
Then user seee the certificate


Examples:
| TestcaseID                    |Filters|Value|
|Valid_Manage_VAT_Reg_Review_01 |Status|Review in Progress|

#TC_03
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
| TestcaseID                    |Filters|Value|
|Valid_Manage_VAT_Reg_Review_01 |Status|Review in Progress|

#TC_04   Note:  #1. Tax Officer should be logged out from the Internal Portal.
                #2. DGI Admin should be logged in to the Internal Portal Successfully.  Future Part

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
| TestcaseID                    |Filters|Value|
|Valid_Manage_VAT_Reg_Review_01 |Status|Review in Progress|


#TC_05
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
| TestcaseID                    |Filters|Value            |document|
|Valid_Manage_VAT_Reg_Review_01 |Status|Review in Progress|Your Address is not matching with your passport|


#TC_06
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
| TestcaseID                    |Filters|Value|
|Valid_Manage_VAT_Reg_Review_01 |Status|Review in Progress|


#TC_07 Note Future part 
 