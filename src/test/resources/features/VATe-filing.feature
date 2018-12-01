Feature: Automate VAT e-filing landing screen statement of transaction

#TS:002
@tc2
Scenario Outline: Validate the displayed default records of the Statement of Transaction table
Given User is on VAT registration Dashboard after login"demo2@mailinator.com""demo1234"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction ,verify tables data from tables "<date>" "<period>" "<particulars>" "<opening balance>" "<Vat liability>""<late fee>" "<interest>""<penalty>""<total>" "<view All>"

Examples:
|Test Case Id|date      |period        |particulars|opening balance|Vat liability|late fee|interest|penalty|total|
|002         |10-07-2018|january,2018  |e-filing   |0              |45           |0       |0       |0      |45   |  

#TS:003
@tcp
Scenario Outline: Validate the functionality of "view all" button located on the statement of transaction section of e-filing landing page
Given User is on VAT registration Dashboard after login"demo2@mailinator.com""demo1234"
When User selects VAT e-filing from Menu
Then user click on View All button from statement transaction section, verify "<title_statement_of_transaction>" "<previous_button>".

Examples:
|Test Case Id       |title_statement_of_transaction|previous_button|
|TC_VAT_e-filing_003|Statement of Transaction      |Previous       |
 

#TS:04
@tcm
Scenario Outline: Validate the statement of trasaction when no efiling of any month is done for the selected year
Given User is on VAT registration Dashboard after login"fiyaf@nickrizos.com""12345678"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction as "No records found!"
Examples:
|Test Case Id       |
|TC_VAT_e-filing_004|
 
#TS:05
@tc5
Scenario Outline: Validate Statement of Transaction table when the E filing and payment is made for the previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction"payment" 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_005|

#TS:06
@tc6
Scenario Outline: Validate Statement of Transaction table columns data when the E filing is done and payment is not done for the previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction"paymentnotdone"
Examples:
|Test Case Id       |
|TC_VAT_e-filing_006|

#TS:07
@tc7
Scenario Outline: Validate Statement of Transaction table columns data when the E filing and payment are done late for the previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_007|

#TS:08
@tc8
Scenario Outline: Validate Statement of Transaction table columns data when the E filing and payment are not done for the Previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction
Examples: 
|Test Case Id       |
|TC_VAT_e-filing_008|

#TS:09
@tc9
Scenario Outline: Validate Statement of Transaction table columns data when the E filing is not done and payment is done for Previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_009|

#TS:10
@tc10
Scenario Outline: Validate Statement of Transaction table columns data when the E filing is done late and payment is not done for previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_010|

#TS:11
@tc11
Scenario Outline: Validate Statement of Transaction table columns data when the E filing and payment are done late for the previous particular months
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction
Examples: 
|Test Case Id       |
|TC_VAT_e-filing_011|

#TS:12
@tc12
Scenario Outline: Validate Statement of Transaction table columns data when the E filing is done on time but payment is done late of the previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_012|

#TS:13
@tc13
Scenario Outline: Validate Statement of Transaction table columns data when the E filing and payment is not done for previous three months
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction
Examples: 
|Test Case Id       |
|TC_VAT_e-filing_013|

#TS:14
@tc14
Scenario Outline: Validate Statement of Transaction table columns data when the E filing and payment is done for the last previous two months of the year
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_014|

#TS:15
@tc15
Scenario Outline: Validate Statement of Transaction table columns data when the E filing is done and Payment is done partially for previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction 
Examples:
|Test Case Id       |
|TC_VAT_e-filing_015|

#TS:16
@tc16
Scenario Outline: Validate Statement of Transaction table columns data when the E filing is done and Payment is done more than VAT amount for the previous month
Given User is on VAT registration Dashboard after login"<uname>""<pwd>"
When User selects VAT e-filing from Menu
Then user can see the statement of transaction
Examples: 
|Test Case Id       |
|TC_VAT_e-filing_016|




