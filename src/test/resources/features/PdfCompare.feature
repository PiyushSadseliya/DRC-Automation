Feature: User is on Manage VAT Registration 

@FilterAll
Scenario: Download PDF
Given User is on Internal Portal
When user selects Manage Vat Registraion
And user selects filter by and select all  
Then clicks on download pdf button and all record gets downloaded 