Feature: Upload Documents page the User has completed filling the Banks details
@Individual
  Scenario Outline: Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document
    Given The user is on the upload the page with Proofs of Address "<POA>""<POA path>", A\c "<A\c Proof>" "<a/c path>",INC"<Inc certi>" "<inc path>",LOAuth"<LOAuth>" "<LOAuth path>" 
    When the user uploads document the message should be shown
    And Views the files
    Then Clicks on Continue.
        Examples: 
      |Test Case ID 									  | POA|POA path|A/C proof|a/c path|Inc certi  |inc path|LOAuth|LOAuth path|Establish|Estb path|Revenue|Revpath|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc11|F:\Capture.png|||||
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc11|F:\Capture.jpg|||||
      |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc11|F:\Capture.jpeg|||||
      |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|||||
      #|DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.docx|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|||||
        
 
    @GovernmentEntity
      Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document
    Given The user has all the required document and is on the upload the documnet page
    When the user uploads document the message should be shown
    And Views the files
    Then Clicks on Continue.   
     |Test Case ID 									  | POA|POA path|A/C proof|a/c path|Inc certi  |inc path|LOAuth|LOAuth path|Establish|Estb path|Revenue|Revpath|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc11|F:\Capture.png|doc_desc21|F:\Capture.png|doc_desc27|F:\Capture.png|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc11|F:\Capture.jpg|doc_desc21|F:\Capture.jpg|doc_desc27|F:\Capture.jpg|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc11|F:\Capture.jpeg|doc_desc21|F:\Capture.jpeg|doc_desc27|F:\Capture.jpeg|
     #|DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|doc_desc21|F:\Capture.p|doc_desc27|F:\Capture.pdf|
    
 @IncLLPY
    Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document
    Given The user has all the required document and is on the upload the documnet page
    When the user uploads document the message should be shown
    And Views the files
    Then Clicks on Continue.
         |Test Case ID 									  | POA|POA path|A/C proof|a/c path|Inc certi  |inc path|LOAuth|LOAuth path|Establish|Estb path|Revenue|Revpath|LLPAgreement|llpdoc|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc11|F:\Capture.png|doc_desc11||
      |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc11|F:\Capture.jpg|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc11|F:\Capture.jpeg|
     #|DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|
      
  @IncLLPN
    Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document
    Given The user has all the required document and is on the upload the documnet page
    When the user uploads document the message should be shown
    And Views the files
    Then Clicks on Continue. 
          |Test Case ID 									  | POA|POA path|A/C proof|a/c path|Inc certi  |inc path|LOAuth|LOAuth path|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc11|F:\Capture.png| 
      |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc11|F:\Capture.jpg|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc11|F:\Capture.jpeg|
     #|DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|
    
 @NonCopratesLLPY
     Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document
    Given The user has all the required document and is on the upload the documnet page
    When the user uploads document the message should be shown
    And Views the files
    Then Clicks on Continue. 
           |Test Case ID 									  | POA|POA path|A/C proof|a/c path|Inc certi  |inc path|LOAuth|LOAuth path|Establish|Estb path|Revenue|Revpath|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc11|F:\Capture.png|
      |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc11|F:\Capture.jpg|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc11|F:\Capture.jpeg|
     #|DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|
     
     @NonCopratesLLPN
     Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document
    Given The user has all the required document and is on the upload the documnet page
    When the user uploads document the message should be shown
    And Views the files
    Then Clicks on Continue.  
      |Test Case ID 				| POA|POA path|A/C proof|a/c path|Inc certi  |inc path|LOAuth|LOAuth path|Establish|Estb path|Revenue|Revpath|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc9|F:\Capture.png|doc_desc11|F:\Capture.png|
      |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc9|F:\Capture.jpg|doc_desc11|F:\Capture.jpg|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc9|F:\Capture.jpeg|doc_desc11|F:\Capture.jpeg|
     |DRC_ATC_Required_doc_01 	|doc_desc7|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc9|F:\Capture.pdf|doc_desc11|F:\Capture.pdf|
 


  
