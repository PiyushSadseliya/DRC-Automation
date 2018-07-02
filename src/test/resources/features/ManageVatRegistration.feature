Feature: User is on Manage VAT Registration 

#TC_02,TC_03 Name of business, Taxpayer sub Category,Location,Last Updated Date, Tax officer, Status are all common 
#TC_04,
#@FilterByDropdown
Scenario Outline: Validate Filter Functionality for Dropdown
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
#Then clicks on download pdf button

Examples:
| TestcaseID                   | Filters                   |Value|
|Valid_Manage_VAT_Reg_Filter_01| Priority                  |10   |
|Valid_Manage_VAT_Reg_Filter_02| NIF                       |JUIJIBI121213|
|Valid_Manage_VAT_Reg_Filter_03| Name of Business/Applicant|Arun|
|Valid_Manage_VAT_Reg_Filter_04| Taxpayer Sub Category     |Individual|
|Valid_Manage_VAT_Reg_Filter_05| Location                  |Banana|
|Valid_Manage_VAT_Reg_Filter_06| Last Updated Date         |06/19/2018|
|Valid_Manage_VAT_Reg_Filter_07| Tax Officer               |Demo officer|
|Valid_Manage_VAT_Reg_Filter_09| Status                    |Review Completed|
|Valid_Manage_VAT_Reg_Filter_10| Status                    |Review In Progress|


#TC_04
#@FilterByAll
Scenario Outline: Validate Filter Functionality for All
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects All from filter dropdown
And enters data in type here text box "<Value>"

Examples:
| TestcaseID                   | Value    |
|Valid_Manage_VAT_Reg_Filter_All_01| test 222 |


#TC_05 excel not implemeted from devlop 
#@FilterAll
Scenario: Download PDF
Given User is on Internal Portal
When user selects Manage Vat Registraion
And user selects filter by and select all  
Then clicks on download pdf button and all record gets downloaded 

#| TestcaseID                         |         
#|Valid_Manage_VAT_Reg_Download_PDF_01|


#TC_06
Scenario Outline: Validate Admin/Supervisor is able to filter data and then download the pdf/excel file
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
Then clicks on download pdf button

Examples:
|TestcaseID                | Filters    |Value|
|Valid_Manage_VAT_Reg_DonPDF_01| Priority      |11   |


#TC_07
Scenario Outline: User Navigate to particular page

Given User is on Internal Portal
When user selects Manage Vat Registraion
And user click on the page "<ClickPage>" and check page"<CheckPage>" 
Then User see Result

Examples:

| TestcaseID                     |ClickPage | CheckPage |
|Valid_Manage_VAT_Reg_Navigate_01|Last      | Next      |
|Valid_Manage_VAT_Reg_Navigate_02|Last      | Previous  |
|Valid_Manage_VAT_Reg_Navigate_03|Next      |Previous   |
|Valid_Manage_VAT_Reg_Navigate_04|Next      | First     |
|Valid_Manage_VAT_Reg_Navigate_05|First1    |Previous   |
|Valid_Manage_VAT_Reg_Navigate_06|First1    |First      |

#TC_08
#@ShowEnteries
Scenario Outline: Validate User Click on Show Enteries 
Given User is on Internal Portal
And User Click Dropdown "<Value>"
Then user see the page result 

Examples:
| TestcaseID                 |Value|
|Valid_Manage_VAT_Reg_Show_01|20|
|Valid_Manage_VAT_Reg_show_02|15|
|Valid_Manage_VAT_Reg_Show_03|25|
|Valid_Manage_VAT_Reg_Show_04|50|
|Valid_Manage_VAT_Reg_Show_05|100|

#TC_09
#@StatusChangePriority
Scenario Outline: Validate Review in Progress from Filter status and user select Change Priority  

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on Change Priority 
And user selects priority from priority list "<ChangePriority>" 
And click on right tick 
Then Priority is Changed and toast message display

Examples:
| TestcaseID                           |Filters|Value             |ChangePriority|
|Valid_Manage_VAT_Reg_ChangePriority_01|Status |Review in Progress|Ten           |

#TC_10
#@StatusReassign
Scenario Outline: Validate Review in Progress from Filter status and user select Reassign  

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on Reassign
And select another Tax Officier fron the list "<ChangeOfficer>" 
And click on right tick for reassign
Then Tax Officier Changed and toast message display 

Examples:
| TestcaseID                     |Filters|Value|ChangeOfficer|
|Valid_Manage_VAT_Reg_Reassign_01|Status|Review in Progress|SelectTaxOfficerOne|


#Review complete click than loader comes 
#@StatusReview
Scenario Outline: Validate View Functionality when user select view for Rejected and Review Completed

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on view 
Then it Navigate to Tax Payer Details

Examples:
|Filters|Value|
|Status|Rejected|
|Status|Review Completed|


#TC_11
#@RejectedPopup
Scenario Outline: Validate Pop up when user Click on Rejected 

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And User click on Rejected
Then User See pop up Reason for Rejected

Examples:
| TestcaseID                     |Filters|Value|
|Valid_Manage_VAT_Reg_RejPopUp_01|Status |Rejected|

#TC_13
#@StatusReviewInProgress
Scenario Outline: Validate Review in Progress from Filter status and user select Review  

Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
And user click on manage setting and select Review 
Then it Navigate to Tax Payer Details


Examples:
| TestcaseID                    |Filters|Value|
|Valid_Manage_VAT_Reg_Review_01 |Status|Review in Progress|

#TC_14
Scenario Outline: Validate User is able to do sorting 

Given User is on Internal Portal
When user selects Manage Vat Registraion
And user click on the sorting "<sort>"
Then User see sorting result "<value>"

Examples:

| TestcaseID                 |sort|value|
|Valid_Manage_VAT_Reg_Sort_01|desc|9|
#|Valid_Manage_VAT_Reg_Sort_02|desc|8|

#TC_16
#@FilterCombinationInvalid
Scenario Outline: Validate filter fucntionality and Type here with different combination Invalid 
Given User is on Internal Portal
When user selects Manage Vat Registraion
Then user selects value from filter drop down "<Filters>"
And enters data in type here text box "<Value>"
Then user checks its result "<check>"

Examples:
| TestcaseID                        |Filters                   |Value        |check|
|Valid_Manage_VAT_Reg_Combination_01|Priority                  |12          |No records found!|
|Valid_Manage_VAT_Reg_Combination_02|NIF                       |Arun         |No records found!|
|Valid_Manage_VAT_Reg_Combination_03|Name of Business/Applicant|Individual   |No records found!|
|Valid_Manage_VAT_Reg_Combination_04|Taxpayer Sub Category     |Banana       |No records found!|
|Valid_Manage_VAT_Reg_Combination_05|Location                  |06/19/2018   |No records found!|
|Valid_Manage_VAT_Reg_Combination_06|Last Updated Date         |officer      |No records found!|
|Valid_Manage_VAT_Reg_Combination_07|Tax Officer               |Rejected     |No records found!|
|Valid_Manage_VAT_Reg_Combination_08|Status                    |JUIJIBI121213|No records found!|


