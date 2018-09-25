Feature: User is on e-Filing Page
 #TC_01 UI Part
  #| TestcaseID              |
  #|Vat E-Declaration Page_01|
  
  #TC_02 Period Label
  @TC_02
  Scenario Outline: Validate Period label 
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on File button "<File>" and navigate to E-Declaration page
    And User check the period label 
    And User Logout
    
  
  Examples: 
  | TestcaseID                         | month | File    | 
  | Vat E-Declaration Functionality_01 | Feb   | JanFile |
   		 
  
  @TC_03
  Scenario Outline: Validate E-declaration functionality
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on File button "<File>" and navigate to E-Declaration page
    And User fill details for domestic sales "<sDomesticGross>" "<sDomesticVAT>"
    And  User Verify calculation of Domestic Net Amount   
    And User fill details for export sales "<sExportGross>" "<sExportVAT>"
    And  User Verify calculation of Export Net Amount    
    And User fill details for sales adjustment "<sAdjGross>" "<sAdjVAT>"
    And  User Verify calculation of Adjustment Net Amount
    And User fill details for purchase domestic "<pDomesticGross>" "<pDomesticVAT>"
    And  User Verify calculation of Domestic Net Amount for purchase    
    And User fill details for purchase import "<pImportGross>" "<pImportVAT>"
    And User Verify calculation of Import Net Amount for purchase
    And User fill details for purchase adjustement "<pAdjGross>" "<pAdjVAT>"
    And User Verify calculation of Adjustment Net Amount for purchase
    And  User fill detail for document summary invoice "<SalesTotal>" "<SalesCancel>"
    And  User Verify calculated Net Issued for invoices of Sales
    And  User fill detail for document summary debit "<DebitNoteTotal>" "<DebitNoteCancel>"
    And  User Verify calcuated Net Issued for Debit note    
    And User fill detail for document summary credit "<CreditNoteTotal>" "<CreditNoteCancel>"
    And User Verify calcuated Net Issued for Credit note    
    And User click on browse button and select file
    And User click on check box and select Authorised Signatory for filing
    And User click on Save Draft and click on Submit button
    And User see verification code and enter OTP value and click on verify for e filing
    And User see validation message and click on ok button for e filing
    And User Logout
 	
  #Then User Navigate to Payment of Tax Page
   Examples: 
     | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
     | Vat E-Declaration Functionality_02 | Jan   | JanFile |             10 |           10 |           10 |         10 |        10 |      10 |             10 |           10 |           10 |         10 |        10 |      10 |         100 |          10 |            100 |              10 |             100 |               10 |

  @TC_04
  Scenario Outline: Validate Gross amount field
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for Gross Amount
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross   | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      #| Vat E-Declaration Functionality_03 | Jan   | JanFile | 123456.15        |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_03 | Mar   | FebFile |                  |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_04 | Mar   | FebFile | $^$%@#           |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_05 | Mar   | FebFile | -sadlah          |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 | 
     
     #| Vat E-Declaration Functionality_02 | Jan   | JanFile |         -1234567 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 | 
     #| Vat E-Declaration Functionality_05 | Jan   | JanFile | 123 456          |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
     #| Vat E-Declaration Functionality_06 | Jan   | JanFile | 1212121212121234 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
     

  @TC_05
  Scenario Outline: Validate VAT amount field
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for VAT amount
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT     | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_06 | Mar   | FebFile |             20 |                  |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_07 | Mar   | FebFile |             20 | -sadlah          |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_08 | Mar   | FebFile |             20 | $^$%@#           |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
   #  | Vat E-Declaration Functionality_02 | Jul   | JanFile |             20 |         -1234567 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
   #  | Vat E-Declaration Functionality_05 | Jul   | JanFile |             20 | 123 456          |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |
   #  | Vat E-Declaration Functionality_06 | Jul   | JanFile |             20 | 1212121212121234 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |

  @TC_06
  Scenario Outline: Validate Net amount
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for domestic "<sDomesticGross>" "<sDomesticVAT>"
    And User check Net amount for domestic sales  
    And User fill details for export "<sExportGross>" "<sExportVAT>" 
    And User check Net amount for export
    And User fill details for adjustement sales "<sAdjGross>" "<sAdjVAT>"
    And User check Net amount for adjustement sales    
    And User fill details for domestic purchase "<pDomesticGross>" "<pDomesticVAT>" 
    And User check Net amount for domestic purchase        
    And User fill details for import "<pImportGross>" "<pImportVAT>"
    And User check Net amount for import     
    And User fill details for adjustement puchase "<pAdjGross>" "<pAdjVAT>" for purchase
    And User check Net amount for adjustement purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
 		And User click on check box and click on submit button and validate Net Amount for sales
 		And User Logout
 		 
  
  Examples: 
 | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | 
 | Vat E-Declaration Functionality_09 | Mar   | FebFile |             10 |           10 |           20 |         10 |        30 |      10 |             40 |           10 |           50 |         10 |        60 |      10 |         20 |          20 |             20 |              20 |              20 |               20 | 
  
  
  @TC_07_Valid_Upload
  Scenario Outline: Validate E -Filing Schedule
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User click on browse button
    And User select excel file
   # And User Check uploaded file
    And User Logout

    # Locator for file to find whwn select pdf or any other file
    Examples: 
      | TestcaseID                         | month | File    |
      | Vat E-Declaration Functionality_10 | Mar   | FebFile |

#@TC_07_InValid_Upload_Cross_button      
#	Scenario Outline: Validate E -Filing Schedule
#    Given User is on E Declaration Page
#    And User click on VAT e-Filing Tab
#    And User click on collapse for the month "<month>" for VAT amount
#    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
#    And User click on browse button
#    And User select excel file
#    And User click on cancel button

    # Locator for file to find whwn select pdf or any other file
#    Examples: 
#      | TestcaseID                         | month | File    |
#      | Vat E-Declaration Functionality_11 | Jul   | FebFile |
    

  @TC_08_InValid
  Scenario Outline: Validate the authorised Signatory with InValid
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and click on "<checkbox>" and click on "<submit>"
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | checkbox      | submit      |
      | Vat E-Declaration Functionality_12 | Mar   | FebFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |        200 |          20 |            200 |              20 |             200 |               20 | eFileCheckBox | eFileSubmit |

  @TC_08_Valid
  Scenario Outline: Validate the authorised Signatory with Valid
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and click on "<checkbox>" and select dropdown "<Select>" and click on "<Signatory>"
    And User check Authorised Signatory
    And User Logout
    #And User click on submit button and check Validation message for VAT amount
    Examples: 
   | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | checkbox      | Select        | Signatory      |
   | Vat E-Declaration Functionality_13 | Mar   | FebFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 | eFileCheckBox | eFileDropdown | eAuthoritySign |

  @TC_09
  Scenario Outline: Validate the Functionality of save draft
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User upload file and click on Save Draft and check message
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | checkbox      | Select        | Signatory      |
      | Vat E-Declaration Functionality_14 | Feb   | FebFile |                |              |              |            |           |         |                |              |              |            |           |         |            |             |                |                 |                 |                  | eFileCheckBox | eFileDropdown | eAuthoritySign |
      | Vat E-Declaration Functionality_15 | Feb   | FebFile |             10 |           10 |           10 |         10 |        10 |      10 |                |              |              |            |           |         |            |             |                |                 |                 |                  | eFileCheckBox | eFileDropdown | eAuthoritySign |
      | Vat E-Declaration Functionality_16 | Feb   | FebFile |                |              |              |            |           |         |             10 |           10 |           10 |         10 |        10 |      10 |         10 |          10 |             10 |              10 |              10 |               10 | eFileCheckBox | eFileDropdown | eAuthoritySign |


 @TC_10
  Scenario Outline: Validate the functionality for Previous button
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount 
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
 		#First Previous
    And User click on Previous button and check
    And User click on collapse for the month "<month>" for VAT amount 
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details "<sales1>" "<sales2>" "<sales3>" "<sales4>" "<sales5>" "<sales6>" "<purchase1>" "<purchase2>" "<purchase3>" "<purchase4>" "<purchase5>" "<purchase6>" "<Document1>" "<Document2>" "<Document3>" "<Document4>" "<Document5>" "<Document6>"
    #Second Previous
    And User click on Previous button and check
    And User click on collapse for the month "<month>" for VAT amount 
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount        
    And User fill details "<sales11>" "<sales22>" "<sales33>" "<sales44>" "<sales55>" "<sales66>" "<purchase11>" "<purchase22>" "<purchase33>" "<purchase44>" "<purchase55>" "<purchase66>" "<Document11>" "<Document22>" "<Document33>" "<Document44>" "<Document55>" "<Document66>"
    #Save and Previous
    And User click on Save Draft and click on previous button
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount 
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount 
    And User check saved record    
    And User Logout 
		
		Examples:
		 | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT   | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | checkbox      | Select        | Signatory      |sales1|sales2|sales3|sales4|sales5|sales6|purchase1|purchase2|purchase3|purchase4|purchase5|purchase6|Document1|Document2|Document3|Document4|Document5|Document6|sales11|sales22|sales33|sales44|sales55|sales66|purchase11|purchase22|purchase33|purchase44|purchase55|purchase66|Document11|Document22|Document33|Document44|Document55|Document66|    
     | Vat E-Declaration Functionality_17 | Mar   | FebFile |                |              |              |            |           |         |                |              |              |            |           |           |          |             |                |                 |                 |                    | eFileCheckBox | eFileDropdown | eAuthoritySign | 10   |10     |10   |10    | 10   |10    | 20      | 20      |20       |20       | 20      |20       |30       |30       | 30      |  30     |  30     | 30      | 50    |50     |50     |50     | 50    |50     | 50       | 20       |20        |20        | 20       |20        |300       |30       | 300       |  30      |  300     | 30       |
     
 #TC_11  Validate the functionality for Submit button for otp.
 #Scenario Outline: Validate the functionality for Submit button for otp
 #   Given User is on E Declaration Page
 #   And User click on VAT e-Filing Tab
 #   And User click on collapse for the month "<month>" for VAT amount 
 #   And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
 #   And User Enter Details
 #   And User fill details for sales "<sDomesti  cGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
 #   And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
 #   And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
 # 	And User click on browse button and select file
 #   And User click on check box and select Authorised Signatory for filing
 #   And User see verification code and enter OTP value and click on verify
 #   And User Logout
    #And User see validation message and click on ok button for e filing
 # Examples: 
 #     | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | 
 #     | Vat E-Declaration Functionality_18 | Feb   | FebFile |             10 |           10 |           10 |         10 |        10 |      10 |                |              |              |            |           |         |            |             |                |                 |                 |                  |

 @TC_12
 Scenario Outline: Validate the Gross Amt should not be inserted and submitted less than VAT Amt in Sales e-filling.
 Given User is on E Declaration Page
 And User click on VAT e-Filing Tab
 And User click on collapse for the month "<month>" for VAT amount
 And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
 And User Enter Details
 And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
 And User click on Submit and check VAliadation message
 And User Logout


Examples:
| TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT |  
| Vat E-Declaration Functionality_19 | Mar   | FebFile |  1             |    10        |      10        |   10     |  10       |    10   |



@TC_13
 Scenario Outline: Validate the Gross Amt should not be inserted and submitted less than VAT Amt in Sales e-filling.
 Given User is on E Declaration Page
 And User click on VAT e-Filing Tab
 And User click on collapse for the month "<month>" for VAT amount
 And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
 And User Enter Details
  And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
 And User click on Submit and check VAliadation message
 And User Logout


Examples:
| TestcaseID                         | month | File    | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT |
| Vat E-Declaration Functionality_20 | Apr   | MarFile |  1             |    10        |      10        |   10     |  10       |    10   |



 @TC_14
  Scenario Outline: Validate the field limits of Total Number numeric fields in Invoices for Sales summary type
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for Total Number Invoices for Sales
		And User Logout
		
		
    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross   | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal  | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_21 |  Apr  | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |             |          20 |             20 |              20 |              20 |               20 |
   #   | Vat E-Declaration Functionality_02 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 | -1234567    |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_22 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 | -sadlah     |          20 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_23 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 | $^$%@#      |          20 |             20 |              20 |              20 |               20 |
   #   | Vat E-Declaration Functionality_05 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 | 123 456     |          20 |             20 |              20 |              20 |               20 |
   #   | Vat E-Declaration Functionality_06 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |1212121212121|          20 |             20 |              20 |              20 |               20 |
   #   | Vat E-Declaration Functionality_07 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |123456.15    |          20 |             20 |              20 |              20 |               20 |

# Test case id need to discuss with manual team
@TC_15
  Scenario Outline: Validate the field limits For Cancelled Invoices for Sales
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for Cancelled Invoices for Sales
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross   | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal  | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_24 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |    20       |             |             20 |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_02 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    -1234567 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_25 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |  -sadlah    |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_26 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   $^$%@#    |             20 |              20 |              20 |               20 |
   #   | Vat E-Declaration Functionality_05 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    123 456  |             20 |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_06 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |1212121212121|             20 |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_07 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         | 123456.15   |             20 |              20 |              20 |               20 |



@TC_16
  Scenario Outline: Validate the field limits of Total Number numeric fields in Debit Note summary type
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for Total Number Debit Note
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross   | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal  | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_27 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |    20       |    20       |                |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_02 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    20       |      -1234567  |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_28 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    20       |    -sadlah     |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_29 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |  $^$%@#        |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_05 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |    123 456     |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_06 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        | 1212121212121  |              20 |              20 |               20 |
  #    | Vat E-Declaration Functionality_07 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         | 20          |  123456.15     |              20 |              20 |               20 |


@TC_17
  Scenario Outline: Validate the field limits of Total Number Debit Note Cancelled field          
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for Total Number Debit Cancelled    
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross   | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal  | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_30 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |    20       |    20       |    20          |                 |              20 |               20 |
   #   | Vat E-Declaration Functionality_02 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    20       |    20          | -1234567        |              20 |               20 |
      | Vat E-Declaration Functionality_31 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    20       |    20          |   -sadlah       |              20 |               20 |
      | Vat E-Declaration Functionality_32 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |  20            |   $^$%@#        |              20 |               20 |
  #    | Vat E-Declaration Functionality_05 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |    20          | 123 456         |              20 |               20 |
  #    | Vat E-Declaration Functionality_06 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |  20            |  1212121212121  |              20 |               20 |
  #    | Vat E-Declaration Functionality_07 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         | 20          |   20           |  123456.15      |              20 |               20 |


 @TC_18
  Scenario Outline: Validate the field limits of Total Number numeric fields in Credit Note summary type
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for Total Number Credit Note
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross   | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal  | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_33 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |    20       |    20       |    20          | 20              |                 |               20 |
 #     | Vat E-Declaration Functionality_02 | Jul   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    20       |    20          |  20             |   -1234567      |               20 |
      | Vat E-Declaration Functionality_34 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |    20       |    20          |   20            |    -sadlah      |               20 |
      | Vat E-Declaration Functionality_35 | Apr   | MarFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |  20            |   20            |  $^$%@#         |               20 |
 #     | Vat E-Declaration Functionality_05 | Jul   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |    20          |  20             | 123 456         |               20 |
 #     | Vat E-Declaration Functionality_06 | Jul   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |  20            |  20             | 1212121212121   |               20 |
 #     | Vat E-Declaration Functionality_07 | Jul   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         | 20          |   20           |  20             | 123456.15       |               20 |
    



  @TC_19
  Scenario Outline: Validate the field limits of Total Number numeric fields in Credit Note Cancelled field
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for Gross amount
    And User click on File button "<File>" and navigate to E-Declaration page for Gross amount
    And User Enter Details
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary     
    And User check and select authorised signatory
    And User click on submit button and check Validation message for Credit Note Cancelled field
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel | checkbox      | Select        | Signatory      |
      | Vat E-Declaration Functionality_36 | Apr   | MarFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |                  | eFileCheckBox | eFileDropdown | eAuthoritySign |
      | Vat E-Declaration Functionality_37 | Apr   | MarFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 | -sadlah          | eFileCheckBox | eFileDropdown | eAuthoritySign |
      | Vat E-Declaration Functionality_38 | Apr   | MarFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 | $^$%@            | eFileCheckBox | eFileDropdown | eAuthoritySign |
  #   | Vat E-Declaration Functionality_02 | Jan   | JanFile |       20       |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20        |    20       |    20          |  20             |	 20            |   -1234567       |eFileCheckBox  |eFileDropdown|eAuthoritySign|
      

  #    | Vat E-Declaration Functionality_05 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |    20          |  20             |   20            | 123 456         |eFileCheckBox   |eFileDropdown|eAuthoritySign|
  #    | Vat E-Declaration Functionality_06 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         |   20        |  20            |  20             |    20           | 1212121212121   |eFileCheckBox   |eFileDropdown|eAuthoritySign|
  #    | Vat E-Declaration Functionality_07 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |  20         | 20          |   20           |  20             |    20           | 123456.15       |eFileCheckBox   |eFileDropdown|eAuthoritySign|
  
  
  @TC_20
  Scenario Outline: Validate the Total Number should not be inserted and submitted less than Cancelled Document Summary.
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User Enter Details
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on Submit and check Valiadation message for Total Number is less than Cancelled document
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_39 | Apr   | MarFile |          1 |          10 |             10 |              10 |              10 |               10 |
  



  # xls more than 10 mb
  #@TC_21
  # Scenario Outline: Validate that the e-filling Schedule should not accept more than ten mb
  # Given User is on E Declaration Page
  # And User click on VAT e-Filing Tab
  # And User click on collapse for the month "<month>" for VAT amount
  # And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
  # And User click on check box and select Authorised Signatory
  # And User check upload file size
  # And User Logout
  #Examples:
  #| TestcaseID                         | month | File    |  SalesTotal  | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
  #| Vat E-Declaration Functionality_40 | May   | MayFile |    1          |    10       |      10        |   10            |  10             |    10            |
 
  @TC_22_InValid
  Scenario Outline: Validate VAT amount FC for adjustment sales type in sales e filing InValid
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User check message for sales Adjustment 
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_41 | Apr   | MarFile |             20 |           20 |           20 |         20 |       500 |    -500 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |

  # DV-1405 for 02
  #| Vat E-Declaration Functionality_042 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |    20       |    20       |    20          | 20              |     -500        |		500		       |
  @TC_22_Valid
  Scenario Outline: Validate VAT amount FC for adjustment sales type in sales e filing Valid
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User see verification code and enter OTP value and click on verify for e filing
    And User see validation message and click on ok button for e filing
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_42 | Apr   | MarFile |             20 |           20 |           20 |         20 |      -500 |    -500 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              20 |               20 |

  @TC_23_InValid
  Scenario Outline: Validate VAT amount FC  for adjustment Purchase type in Purchase e filing InValid
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User check message for purchase Adjustment 
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_43 | Mar   | FebFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |       500 |    -500 |         20 |          20 |             20 |              20 |              20 |               20 |

  # DV-1405 for 02
  #| Vat E-Declaration Functionality_044 | Jan   | JanFile |       20         |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |    20       |    20       |    20          | 20              |     -500        |		500		       |
  @TC_23_Valid
  Scenario Outline: Validate VAT amount FC  for adjustment Purchase type in Purchase e filing Valid
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User see verification code and enter OTP value and click on verify for e filing
    And User see validation message and click on ok button for e filing
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_44 | Mar   | FebFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |      -500 |    -500 |         20 |          20 |             20 |              20 |              20 |               20 |

  @TC_24_InValid_invoice
  Scenario Outline: Validate the Cancelled invoices,debit note,credit note for InValid invoices
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for invoice of sale
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_45 | Mar   | FebFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         10 |          15 |             20 |              20 |              20 |               20 |

  @TC_24_Valid_invoice
  Scenario Outline: Validate the Cancelled invoices,debit note,credit note for valid invoices
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User see verification code and enter OTP value and click on verify for e filing
    And User see validation message and click on ok button for e filing
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_46 | Mar   | FebFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         10 |          10 |             20 |              20 |              20 |               20 |
      | Vat E-Declaration Functionality_47 | Apr   | SepFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         10 |           6 |             20 |              20 |              20 |               20 |

  @TC_24_InValid_debit
  Scenario Outline: Validate the Cancelled invoices,debit note,credit note for InValid debit note
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for invoice of sale
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_48 | Oct   | OctFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             10 |              15 |              20 |               20 |

  @TC_24_Valid_debit
  Scenario Outline: Validate the Cancelled invoices,debit note,credit note for valid debit
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User see verification code and enter OTP value and click on verify for e filing
    And User see validation message and click on ok button for e filing
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_49 | Oct   | OctFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             10 |              10 |              20 |               20 |
      | Vat E-Declaration Functionality_50 | Nov   | NovFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             10 |               6 |              20 |               20 |

  @TC_24_InValid_credit
  Scenario Outline: Validate the Cancelled invoices,debit note,credit note for InValid credit note
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User click on submit button and check Validation message for invoice of sale
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_51 | Dec   | DecFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              10 |               15 |

  @TC_24_Valid_credit
  Scenario Outline: Validate the Cancelled invoices,debit note,credit note for valid credit
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>" for VAT amount
    And User click on File button "<File>" and navigate to E-Declaration page for VAT amount
    And User fill details for sales "<sDomesticGross>" "<sDomesticVAT>" "<sExportGross>" "<sExportVAT>" "<sAdjGross>" "<sAdjVAT>" for sales
    And User fill details for purchase "<pDomesticGross>" "<pDomesticVAT>" "<pImportGross>" "<pImportVAT>" "<pAdjGross>" "<pAdjVAT>" for purchase
    And User fill detail for document summary "<SalesTotal>" "<SalesCancel>" "<DebitNoteTotal>" "<DebitNoteCancel>"  "<CreditNoteTotal>" "<CreditNoteCancel>" for document summary
    And User click on check box and select Authorised Signatory
    And User see verification code and enter OTP value and click on verify for e filing
    And User see validation message and click on ok button for e filing
    And User Logout

    Examples: 
      | TestcaseID                         | month | File    | sDomesticGross | sDomesticVAT | sExportGross | sExportVAT | sAdjGross | sAdjVAT | pDomesticGross | pDomesticVAT | pImportGross | pImportVAT | pAdjGross | pAdjVAT | SalesTotal | SalesCancel | DebitNoteTotal | DebitNoteCancel | CreditNoteTotal | CreditNoteCancel |
      | Vat E-Declaration Functionality_52 | Dec   | DecFile |             20 |           20 |           20 |         20 |        20 |      20 |             20 |           20 |           20 |         20 |        20 |      20 |         20 |          20 |             20 |              20 |              10 |               10 |
     
     
