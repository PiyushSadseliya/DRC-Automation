Feature: User is on Manage VAT Registration 

Scenario Outline: Validate Filter Functionality
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filter>"
And enters data in type here text box "<Value>"
Then clicks on download pdf button

Examples:
|Filters|Value|
|Priority| 1|
|Priority| 0|
|Priority| 2|
|NIF|1717|
|NIF|JUIJIBI121213|
|Name of Business/Applicant|Arun|
|Name of Business/Applicant|ritesh|
|Taxpayer Sub Category|Individual|
|Taxpayer Sub Category|Incorporated Bodies|
|Location|Banana|
|Last Updated Date|06/19/2018|
|Last Updated Date|06/18/2018|
|Tax Officer| officer16 |
|Tax Officer| officer12 |
|Status|Rejected|
|Status|Review Completed|
|Status|Review In Progress|


Scenario: Download PDF
Given User is on Internal Portal
When user selects Manage Vat Registraion
And User selects all in filter
Then clicks on download pdf button



Scenario Outline: Validate View Functionality when user select view for Rejected and Review Completed

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filter>"
And enters data in type here text box "<Value>"
And user click on view 
Then it Navigate to Tax Payer Details


Examples:
|Filters|Value|
|Status|Rejected|
|Status|Review Completed|



Scenario Outline: Validate Pop up when user Click on Rejected 

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filter>"
And enters data in type here text box "<Value>"
And User click on Rejected
Then User See pop up Reason for Rejected


Examples:
|Filters|Value|
|Status|Rejected|


Scenario Outline: Validate Review in Progress from Filter status and user select Review  

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filter>"
And enters data in type here text box "<Value>"
And user click on view 
Then it Navigate to Tax Payer Details


Examples:
|Filters|Value|
|Status|Review in Progress|


Scenario Outline: Validate Review in Progress from Filter status and user select Change Priority  

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filter>"
And enters data in type here text box "<Value>"
And user click on Change Priority 
And select priority from priority list 
And click on right tick
Then Priority will change    



Examples:
|Filters|Value|
|Status|Review in Progress|


Scenario Outline: Validate Review in Progress from Filter status and user select Reassign  

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filter>"
And enters data in type here text box "<Value>"
And user click on Reassign
And select another Tax Officier fron the list
And click on right tick
Then Tax Officier Changed and toast message display 


Examples:
|Filters|Value|
|Status|Review in Progress|

#on hold
Scenario Outline: Validate User is able to change maximum page size

Given User is on Internal Portal
When user selects Manage Vat Registraion
And  user select show "<Entries>"
Then see the result

Examples:
|Entries|
|20|
|25|
|50|
|100|


Scenario Outline: User Navigate to particular page

Given User is on Internal Portal
When user selects Manage Vat Registraion
And user click on the page "<ClickPage>" and check page"<CheckPage>" 
Then User see Result

Examples:

|ClickPage | CheckPage |
|Last      | Next      |
|First     | Previous  |
|Previous  | First     |
|Previous  | Next      |



Scenario Outline: Validate User is able to do sorting 

Given User is on Internal Portal
When user selects Manage Vat Registraion
And user click on the sorting "<Sorting>"

Examples:

|Sorting|
|FixSort|