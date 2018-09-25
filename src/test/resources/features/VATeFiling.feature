Feature: User is on Vat e-Filing
 
#TC_01 UI Part

@TC_02
Scenario: Validate the Download template functionality of VAT E-filing page

Given User is on Vat e-Filing Page
And User click on Tab
And   User click on Download Template
Then  User verify download file
And User Logout

#|TestcaseID          |
#|E-File DownloadTC_01|

@TC_03
Scenario Outline: Validate the Financial Year dropdown functionality.

Given User is on Vat e-Filing Page
And User click on Tab 
And   User click on Finicial year dropdown "<Filters>"
And  User see all month record from that year
And User Logout 

Examples:
|TestcaseID        |Filters |
|E-File Dropdown_01|Year2018|

#TC_04 for Duedate - it ui part  File Done
@TC_04
Scenario Outline: Validate the E filing Status functionality when user has done filing
Given User is on Vat e-Filing Page
And User click on Tab
And User check image "<image>" for filing
And User click on collpase icon for filing "<month>"
And User see Due Date for filing "<filingDate>"
And User check Completed Date "<CheckSymbolDate>" for filing
And User check button "<button>" for filing
And User Logout

Examples:
|TestcaseID       |image  |month    |filingDate |CheckSymbolDate   |button    |
|E-File Status_01 |green  |Jan      |DueDateJan |CompletedDateJan  |JanPreview|
|E-File Status_02 |pending|Aug      |DueDateAug |  FileNotDoneAug  |JanFile   |


@TC_05
Scenario Outline: Validate the E filing Payment functionality.
Given User is on Vat e-Filing Page
And User click on Tab
And   User check image "<image>" for payment
And  User click on collpase icon for filing "<month>"
And  User see Due Date  "<duePay>" for Payment
And  User see Completed Date "<comDate>" for Payment
And  User see button "<button>" for Payment
And User Logout 

Examples:
|TestcaseID        |image  |month |duePay    |comDate             |button |
|E-File Payment_01 |green  |Jan   |PayDateJan|CompletedDateJan    |JanView|
|E-File Payment_01 |pending|Feb   |PayDateFeb|PayNotDoneFeb       |JanPay|

@TC_06
Scenario Outline: Validate the E filing Assement functionality.
Given User is on Vat e-Filing Page
And   User check image "<image>" for Assement
And   User click on collpase icon for Assement
And   User see Due Date "<check>" for Assement
And   User check Completed Date "<CheckCompleteDate>" for Assement
And   User check button "<button>" for Assement
And User Logout 

Examples:
|TestcaseID          |image  |check |CheckCompleteDate|button|
|E-File Assement_01  |green  |  -   |PayDateJan       |view|
#|pending|     |pendinding|Pay|

#TC_07 scenario for another us Validate the "File" button functionality.
@TC_07
Scenario Outline: Validate the File button functionality.
Given User is on Vat e-Filing Page
And User click on Tab
And   User see "<image>" for particular month
And   User click on collapse for the month
And   User see Due Date "<date>" for particular month
And   User click on File button and navigate to E-Declaration page 
And   User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>"
And   User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>"
And   User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>"
And   User click on check box and click on submit button
And   User see  verification code and enter OTP value and click on verify 
And   User see validation message and click on ok button
And  User navigate to payment page and click on Proceed to pay
And  User see pop up and click on ok 
And  User click on particular month and see File button converted to Preview button
And  User see Payment Pay button converted to View button
And User Logout 

#Then  User navigate to e filing and see preview button on e filing and pay button on payment and assement button get enabled  
 
Examples:
|TestcaseID        |image  |date       |sDomesticGross|sDomesticVAT|sExportGross|sExportVAT  |sAdjGross|sAdjVAT |pDomesticGross|pDomesticVAT|pImportGross|pImportVAT|pAdjGross|pAdjVAT|SalesTotal|SalesCancel|DebitNoteTotal|DebitNoteCancel|CreditNoteTotal|CreditNoteCancel|
|E-File button_01  |pending|DueDateJan |10           |  10        |      10     |    10     |    10   |   10   |   10         |  10        |     10     |     10   |    10   |   10  | 10       |     10    |      10      |     10        |    10         |      10        |



#TC_08
Scenario: Validate the Preview button functionality

Given User is on Vat e-Filing Page
And   User click on collpase icon 
And   User click on Preview button
Then  User navigate to another page
And User Logout 

|TestcaseID        |
|E-File Preview_01  |



#TC_09 preview scenario added 
Scenario Outline: Validate Download button functionality, after clicking on Preview button.

Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" for Gross amount
And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
And User see Preview button and click on it "<preview>"
And User navigate to e-Filing Preview page
And User click on Download button
And User Logout  


Examples: 
| TestcaseID                         | month | File    |preview|
| Vat E-Declaration Preview button_download_01 | Jan   | JanFile |bPreview|      



#TC_10
Scenario Outline: Validate the Pay button functionality in Payment status.

Given User is on Vat e-Filing Page
And   User check image "<image>" Pay Payment status
And   User click on collpase icon Pay Payment status
And   User see Due Date "<Ddate>" Pay Payment status
And   User check Completed Date "<CheckSymbolDate>" Pay Payment status
And   User click on Proceded to Pay button and navigate to Payment of tax page
And  User click on Net Banking Ratio and select bank from Other Bank
And   User click on Pay Now button 
And   User navigate to another page for payment
And User Logout   
# step 6 to see 

#And   User check button "<button>" Pay Payment status
#And   User click on View button and navigate to Pay Payment Page 

Examples:
|TestcaseID           |image    |Ddate     |CheckSymbolDate|button|
|E-File Pay button_01 |pending  |DueDateFeb|    -          |view|

#TC_11
Scenario Outline: Validate the View button functionality in Payment status.

Given User is on Vat e-Filing Page
And   User check image "<image>" View Payment status
And   User click on collpase icon View Payment status
And   User see Due Date "<check>" View Payment status
And   User check Completed Date "<CheckCompleteDate>" View Payment status
And   User check button "<button>" View Payment status
And   User click on View button and navigate to View Payment Page
And User Logout 

Examples:
|TestcaseID                |image  |check      |CheckCompleteDate|button|
|E-File View Pay Payment_01 |green  |DueDateJan |PayDateJan       |JanPay|
#|pending|     |pendinding       |Pay|

 
 
#TC_12
Scenario Outline: Validate the View button functionality in Assessment status.

Given User is on Vat e-Filing Page
And   User check image "<image>" View Assessment status
And   User click on collpase icon View Assessment status
And   User see Due Date "<check>" View Assessment status
And   User check Completed Date "<CheckCompleteDate>" View Assessment status
And   User check button "<button>" View Payment status
And   User click on View button and navigate to View Assessment status
And User Logout

Examples:
|TestcaseID                 |image  |check|CheckCompleteDate|button|
|E-File View Pay Assement_01|green  |  -  |               |view|
#|pending|     |pendinding|Pay  |

 
