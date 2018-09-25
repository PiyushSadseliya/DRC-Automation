Feature: User is on Manage VAT Registration


Scenario Outline: Validate User is able to do sorting 

Given User is on Internal Portal
When user selects Manage Vat Registraion
And user click on the sorting "<sort>"
Then User see sorting result "<value>"

Examples:

|sort|value|
|desc|9|
|desc|8|

