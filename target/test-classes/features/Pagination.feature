Feature: User is on Manage VAT Registration

Scenario Outline: User Navigate to particular page

Given User is on Internal Portal
When user selects Manage Vat Registraion
And user click on the page "<ClickPage>" and check page"<CheckPage>" 
Then User see Result

Examples:

|ClickPage | CheckPage |
|Last      | Next      |
|Last      | Previous  |
|Next      |Previous   |
|Next      | First      |
|First1    |Previous |
|First1    |First |