# to add in VAT 

Feature: User is on Manage VAT Registration 
     	
 
 #Background: User is on Manage VAT Registration

  Scenario Outline: Validate whether Admin/Supervisor is able to filter by Priority with Valid Data
    
    Given User is on Manage VAT Registration
    And User Select Priority from Filter by dropdown
    And User Enter "<Priority>" in Type Here field
    And User Refresh the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record for First Page "<FirstPage"> 
    Then User See the Filtered Result
    
    
    
    Examples: 
      | TestcaseID                        | Priority | FirstPage|
     	|	Valid_DRC_VAT_Registration_01	    |   1      |     1     |
     
     
     
    Scenario Outline: Validate whether Admin/Supervisor is able to filter by Priority with InValid Data
    
    Given User is on Manage VAT Registration
    And User Select Priority from Filter by dropdown
    And User Enter "<Priority>" in Type Here field
    And User Refresh the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record for First Page "<FirstPage"> 
    Then User See the Filtered Result
    Then User see message
    
   
    Examples: 
      | TestcaseID                        |  Priority    | FirstPage|
     	
     	|	Valid_DRC_VAT_Registration_01	    |   1      |     qwe     |
     	|	Valid_DRC_VAT_Registration_02	    |   2      |     fgh    |
     	|	Valid_DRC_VAT_Registration_03	    |   3      |      qwe    |
     	|	Valid_DRC_VAT_Registration_04	    |   4      |     asd    |
     	|	Valid_DRC_VAT_Registration_05	    |  5      |     zxc    |
     	|	Valid_DRC_VAT_Registration_06	    |   6      |      qwe   |
     	|	Valid_DRC_VAT_Registration_07	    |   7      |      tyu   |
     	|	Valid_DRC_VAT_Registration_08	    |   8      |     qwe   |
     	|	Valid_DRC_VAT_Registration_09	    |   9      |      qwe    |
     	|	Valid_DRC_VAT_Registration_10	    |   10     |      tyu   |
     
  
   Scenario Outline: Validate whether Admin/Supervisor is able to filter by NIF with Valid Data
    
    Given User is on Manage VAT Registration
    And User Select NIF from Filter by dropdown
    And User Enter "<NIF>" in Type Here field
    And User Refresh the Page and all Filters are removed
    And User Click on Last Page
     And User Filter Record for First Page "<FirstPageNIF">
    Then User See NIF Result 
    
    
    Examples: 
      
      | TestcaseID                        |  NIF             | FirstPageNIF |
     	|	Valid_DRC_VAT_Registration_01	    |   JUIJIBI121213     | JUIJIBI121213 |
     	
     	
    Scenario Outline: Validate whether Admin/Supervisor is able to filter by NIF with Invalid Data
    
    Given User is on Manage VAT Registration
    And User Select NIF from Filter by dropdown
    And User Enter "<NIF>" in Type Here field
   And User Refresh the Page and all Filters are removed
    And User Click on Last Page
      And User Filter Record for First Page "<FirstPageNIF"> 
      Then User see Nif Message
    
    
    Examples: 
      
      | TestcaseID                        |  NIF             | FirstPageNIF |
     	|	Valid_DRC_VAT_Registration_01	    |   1556250303     |     qwedqwe    |
     	|	Valid_DRC_VAT_Registration_02	    |  1556250303      |     hgfghf     |
     	|	Valid_DRC_VAT_Registration_03	    |   1556250303     |     gfhjfgh    |
     	|	Valid_DRC_VAT_Registration_04	    |   1556250303     |      qwe    |
     	|	Valid_DRC_VAT_Registration_05	    |   1556250303     |     qweqew    |
     
     
    Scenario Outline: Validate whether Admin/Supervisor able is to filter by Name of Business /Applicant with Valid Data
        
    Given User is on Manage VAT Registration
    And User Select Name of Business /Applicant from Filter by dropdown
    And User Enter "<BusinessName>" in Type Here field
    And User Refresh the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record for First Page "<FirstPageBusiness">
    
    Then User see Business Name
    
    
    Examples: 
      
      | TestcaseID                        |  BusinessName  | FirstPageBusiness |
     	|	Valid_DRC_VAT_Registration_01	    |   1Rivet       |     1Rivet    |
    
     
     Scenario Outline: Validate whether Admin/Supervisor able is to filter by Name of Business /Applicant with InValid Data
        
    Given User is on Manage VAT Registration
    And User Select Name of Business /Applicant from Filter by dropdown
    And User Enter "<BusinessName>" in Type Here field
    And User Refresh the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record for First Page "<FirstPageBusiness">
    
    Then User see Business Name Result
    
    
    Examples: 
      
      | TestcaseID                        |  BusinessName  | FirstPageBusiness |
     	|	Valid_DRC_VAT_Registration_01	    |   1Rivet       |     qwe    |
     	|	Valid_DRC_VAT_Registration_01	    |   1Rivet       |     asd    |
     	|	Valid_DRC_VAT_Registration_01	    |   1Rivet       |     asd    |
     	
     	
     		
    Scenario Outline: Validate whether Admin/Supervisor able is to filter by Taxpayer Sub category with Valid DAta
        
    Given User is on Manage VAT Registration
    And User Select Taxpayer Sub category from Filter by dropdown
    And User Enter "<TaxPayerSubCategory>" in Type Here field
     And User Refresh the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record for First Page "<FirstPageTaxPayer">
    
    
    Examples: 
      
      | TestcaseID                        | | TaxPayerSubCategory          | FirstPageTaxPayer |
     	
     	|	Valid_DRC_VAT_Registration_01	    | |  Government Entity       |      Other Non-Corporates   |
     	|	Valid_DRC_VAT_Registration_02	    | | Incorporated Bodies       |       Government Entity   |
     	|	Valid_DRC_VAT_Registration_03	    | |  Other Non-Corporates     |     Incorporated Bodies      |
 
     
        	
   	Scenario Outline: Validate whether Admin/Supervisor able is to filter by Taxpayer Sub category
        
    Given User is on Manage VAT Registration
    And User Select Taxpayer Sub category from Filter by dropdown
    And User Enter "<TaxPayerSubCategory>" in Type Here field
    And User Refreash the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record from First Page "<FirstPageTaxPayer"> 
    
    
    Examples: 
      
      | TestcaseID                        | | TaxPayerSubCategory          | FirstPageTaxPayer |
     	
     	|	Valid_DRC_VAT_Registration_01	    | |  Government Entity       |      Other Non-Corporates   |
     	|	Valid_DRC_VAT_Registration_02	    | | Incorporated Bodies       |       Government Entity   |
     	|	Valid_DRC_VAT_Registration_03	    | |  Other Non-Corporates     |     Incorporated Bodies      |
     	|	Valid_DRC_VAT_Registration_04	    | |  Government Entity          |      qwe    |
     	|	Valid_DRC_VAT_Registration_05	    | |  Incorporated Bodies    |       qwe  |
     	|	Valid_DRC_VAT_Registration_06	    | |  Other Non-Corporates    |     qwe   |
     	
     	
     Scenario Outline: Validate whether Admin/Supervisor able is to filter by Location
        
    Given User is on Manage VAT Registration
    And User Select Location from Filter by dropdown
    And User Enter "<Location>" in Type Here field
    And User Refreash the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record from First Page "<FirstPageLocation"> 
    
    
    Examples: 
      
      | TestcaseID                        | | Location                 | FirstPageLocation |
     	|	Valid_DRC_VAT_Registration_01	    | |  Banana,Kongo Central     |      qwwe   |
     	|	Valid_DRC_VAT_Registration_02	    | | Incorporated Bodies       |       Banana,Kongo Central   |
     	
    Scenario Outline: Validate whether Admin/Supervisor able is to filter by Last Updated Date
        
    Given User is on Manage VAT Registration
    And User Select Last Updated Date from Filter by dropdown
    And User Enter "<UpdatedDate>" in Type Here field
    And User Refreash the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record from First Page "<FirstDate"> 
    
    
    Examples: 
      
      | TestcaseID                        | | UpdatedDate      | FirstDate |
     	|	Valid_DRC_VAT_Registration_01	    | |  06/19/2018      |    qwwe   |
     	|	Valid_DRC_VAT_Registration_02	    | | 06/19/2018       |06/19/2018 |
     	
     
    Scenario Outline: Validate whether Admin/Supervisor able is to filter by Tax Officer 
        
    Given User is on Manage VAT Registration
    And User Select Tax Officer from Filter by dropdown
    And User Enter "<TaxOfficer>" in Type Here field
    And User Refreash the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record from First Page "<FirstTaxOfficier"> 
    
    
    Examples: 
      
      | TestcaseID                        | | TaxOfficer    | FirstTaxOfficier |
     	|	Valid_DRC_VAT_Registration_01	    | |  OFFICER1     |    OFFICER5   |
     	|	Valid_DRC_VAT_Registration_02	    | |  OFFICER2     |OFFICER4 |
     		|	Valid_DRC_VAT_Registration_03	  | |  OFFICER3     | OFFICER0|
     	|	Valid_DRC_VAT_Registration_04	    | |  OFFICER4     | OFFICER2 |
     	|	Valid_DRC_VAT_Registration_05	    | |  OFFICER5     | OFFICER1  |
     	
     	
   Scenario Outline: Validate whether Admin/Supervisor able is to filter by Status
        
    Given User is on Manage VAT Registration
    And User Select Status from Filter by dropdown
    And User Enter "<Status>" in Type Here field
    And User Refreash the Page and all Filters are removed
    And User Click on Last Page
    And User Filter Record from First Page "<FirstStatus"> 
    
    
    Examples: 
      
      | TestcaseID                        | | Status       | FirstSrtatus |
     	|	Valid_DRC_VAT_Registration_01	    | |  Assigned    | In Progress   |
     	|	Valid_DRC_VAT_Registration_02	    | |  Rejected    | On Hold  |
     	|	Valid_DRC_VAT_Registration_03	    | |  On Hold     | Assigned |
     	|	Valid_DRC_VAT_Registration_04	    | |  In Progress | Rejected |
     	
     	
    Scenario Outline: Validate whether Admin/Supervisor able is to filter by  All 
        
    Given User is on Manage VAT Registration
    And User Select All from Filter by dropdown
    And User Enter "<AllData>" in Type Here field
    #And User Refreash the Page and all Filters are removed
    #And User Click on Last Page
   # And User Filter Record from First Page "<AllData"> 
    
    
    Examples: 
      
      | TestcaseID                        | | AllData               | AllData |
     	|	Valid_DRC_VAT_Registration_01	    | |  7                    | In Progress   |
     	|	Valid_DRC_VAT_Registration_02	    | |  1556250303           | On Hold  |
     	|	Valid_DRC_VAT_Registration_03	    | |  1Rivet               | Assigned |
     	|	Valid_DRC_VAT_Registration_04	    | |  Government Entity    | Rejected | 	
     	|	Valid_DRC_VAT_Registration_05	    | |  Banana,Kongo Central | Rejected |
     	|	Valid_DRC_VAT_Registration_06	    | |  06/19/2018           | Rejected |
     	|	Valid_DRC_VAT_Registration_07	    | |  OFFICER1             | Rejected |
     	|	Valid_DRC_VAT_Registration_08	    | |   Assigned            | Rejected |
     	
     	
    Scenario: Validate whether Admin/Supervisor is able to download pdf/excel file
        
    Given User is on Manage VAT Registration
    And User Select All from Filter by dropdown
    And User Click on Download PDF
    #And User Refreash the Page and all Filters are removed
    #And User Click on Last Page
    #And User Filter Record from First Page "<AllData"> 
    
   
   Scenario Outline: Validate whether Admin/Supervisor is able to change the Priority
        
    Given User is on Manage VAT Registration
   And User Click on Manage Setting dropdown
   And Click on Change Priority 
   And Selects Priority from "<PriorityList>"
   And Click on Check button
   
 	 Examples: 
      
      | TestcaseID                        | | PriorityList        | 
     	|	Valid_DRC_VAT_Registration_01	    | |  1                  | 
     	|	Valid_DRC_VAT_Registration_02	    | |  2                  | 
     	|	Valid_DRC_VAT_Registration_03	    | |  3                  | 
     	|	Valid_DRC_VAT_Registration_04	    | |  4                  | 
     	|	Valid_DRC_VAT_Registration_05	    | |  5                  | 
     	|	Valid_DRC_VAT_Registration_06	    | |  0                  | 
     	
    Scenario Outline: Validate whether Admin/Supervisor is able to reassign the tax payer
        
    Given User is on Manage VAT Registration
   And User Click on Manage Setting dropdown
   And Click on Reassign 
   And Selects from Tax Officier dropdown "<OfficierList>"
   And Click on Check button
   
 	 Examples: 
      
      | TestcaseID                        | | OfficierList        | 
     	|	Valid_DRC_VAT_Registration_01	    | |  OFFICER1                  | 
     	|	Valid_DRC_VAT_Registration_02	    | |  OFFICER2                  | 
    	

 Scenario: Validate whether Admin/Supervisor  is able to view rejected reason
        
    Given User is on Manage VAT Registration
   And User Click on Rejected status
   Then Reject for Rejecttion popup appear
  
   
 Scenario: Validate whether Admin/Supervisor  is able to view  reason of on Hold
        
    Given User is on Manage VAT Registration
   And User Click on On Hold status
   Then Reject for On Hold popup appear

Scenario: Validate whether Admin/Supervisor is able to review 
        
    Given User is on Manage VAT Registration
   And User Click on Review 
   Then Reject for On Hold popup appear
  	 
     	