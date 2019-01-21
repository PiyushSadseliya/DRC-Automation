@UploadDocuments
Feature: Upload Documents after all process are completed till the Banks details

  #Individual 4 docs poa*,a/c*,loa*,lyr
  @Individual_mtc6_mtc12_mtc10
  Scenario Outline: Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document - taxpayer portal
    Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    When Selects taxpayer "Natural Person" and sub category "Individual" and llp ""
    And Fills General details "4843758943798" "2018-06-10" "Newman" "Mining" "2018-02-12" "Small Scale" "8965741235698" "" ""
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    #And COI "<COI>" "<COIpath>"
    #And LawDegree "<LAWdegree>" "<LAWpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID                  | Description                                                                                                               | POA       | POA path     | A/C Proof | a/c path     | COI       | COIpath      | LAWdegree | LAWpath      | LOAuth      | LOAuthpath  | Revenue   | Revpath     | uname                           | pwd      |
      | DRC_ATC_Valid_Required_doc_01 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)  | doc_desc1 | Capture.png  | doc_desc1 | Capture.png  | doc_desc1 | Capture.png  | doc_desc1 | Capture.png  | doc_desc1_1 | Capture.png | doc_desc1 | Capture.png | regressionseventeen@mailinator.com | Test@123 |
      | DRC_ATC_Valid_Required_doc_01 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpg)  | doc_desc1 | Capture.jpg  | doc_desc1 | Capture.jpg  | doc_desc1 | Capture.jpg  | doc_desc1 | Capture.jpg  | doc_desc1_1 | Capture.jpg | doc_desc1 | Capture.jpg | regressionseventeen@mailinator.com | Test@123 |
      | DRC_ATC_Valid_Required_doc_01 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpeg) | doc_desc1 | Capture.jpeg | doc_desc1 | Capture.jpeg | doc_desc1 | Capture.jpeg | doc_desc1 | Capture.jpeg | doc_desc1_1 | Capture.jpg | doc_desc1 | Capture.jpg | regressionseventeen@mailinator.com | Test@123 |
      | DRC_ATC_Valid_Required_doc_01 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.pdf)  | doc_desc1 | Capture.pdf  | doc_desc1 | Capture.pdf  | doc_desc1 | Capture.pdf  | doc_desc1 | Capture.pdf  | doc_desc1_1 | Capture.pdf | doc_desc1 | Capture.pdf | regressionseventeen@mailinator.com | Test@123 |

  # | DRC_ATC_Valid_Required_doc_04 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.pdf)                  | doc_desc1_1 | capture.pdf        | doc_desc3 | capture.pdf        | doc_desc5 | capture.pdf        | doc_desc4 | capture.pdf        | regressionseventeen@mailinator.com  | Test@123 |
  # | DRC_ATC_Valid_Required_doc_05 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.gif)                  | doc_desc1_1 | capture.gif        | doc_desc3 | capture.gif        | doc_desc5 | capture.gif        | doc_desc4 | capture.gif        | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Valid_Required_doc_06 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.docx)                 | doc_desc1_1 | capture.docx       | doc_desc3 | capture.docx       | doc_desc5 | capture.docx       | doc_desc4 | capture.docx       | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Valid_Required_doc_07 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.xlsx) | doc_desc1_1 | capture.xlsx | doc_desc3 | capture.xlsx | doc_desc5 | capture.xlsx | doc_desc4 | capture.xlsx | regressionseventeen@mailinator.com | Test@123 |
  #| DRC_ATC_Valid_Required_doc_08 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (pdf with greater size) | doc_desc1_1 | TCP_Estimation.pdf | doc_desc3 | TCP_Estimation.pdf | doc_desc5 | TCP_Estimation.pdf | doc_desc4 | TCP_Estimation.pdf | regressionseventeen@mailinator.com  | Test@123 |
  #govt 6docs poa*,a/c*,coi*,establishemnt*,loa*,lyr 9 general details
  #LLP no 6 docs   poa,a/c,coi,loa,lyr.establishemnt
  
  @GovernmentEntity_mtc7_mtc12_mtc10_mtc7
  Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document - taxpayer portal
    Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    When Selects taxpayer "Legal Entity" and sub category "Government Entity" and llp ""
    And Fills General details "484375891798" "2018-06-10" "Nov M" "3" "2018-02-12" "Mining" "2018-02-12" "Medium Scale" "8965741235698"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Bas-Uele" "Aketi" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Bas-Uele" "Aketi" "789798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "Nov M" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And INC "<INCcerti>" "<incpath>"
    And LawDegree "<LAWdegree>" "<LAWpath>"
    #And establish "<Establish>" "<Estbpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | Description                                                                                                            | POA       | POA path     | A/C Proof | a/c path     | INCcerti  | incpath      | LAWdegree | LAWpath     | LOAuth      | LOAuthpath   | Establish  | Estbpath     | Revenue   | Revpath      | uname                           | pwd      |
      | DRC_ATC_Required_doc_11 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc1 | capture.jpg  | doc_desc1 | capture.jpg  | doc_desc1 | capture.jpg  | doc_desc1 | Capture.png | doc_desc1_1 | capture.jpg  | doc_desc21 | capture.jpg  | doc_desc1 | capture.jpg  | regressionseventeen@mailinator.com | Test@123 |
      | DRC_ATC_Required_doc_11 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc1 | capture.png  | doc_desc1 | capture.png  | doc_desc1 | capture.png  | doc_desc1 | Capture.png | doc_desc1_1 | capture.png  | doc_desc21 | capture.png  | doc_desc1 | capture.png  | regressionseventeen@mailinator.com | Test@123 |
      | DRC_ATC_Required_doc_11 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc1 | capture.pdf  | doc_desc1 | capture.pdf  | doc_desc1 | capture.pdf  | doc_desc1 | Capture.pdf | doc_desc1_1 | capture.pdf  | doc_desc21 | capture.pdf  | doc_desc1 | capture.pdf  | regressionseventeen@mailinator.com | Test@123 |
      | DRC_ATC_Required_doc_11 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc1 | capture.jpeg | doc_desc1 | capture.jpeg | doc_desc1 | capture.jpeg | doc_desc1 | Capture.png | doc_desc1_1 | capture.jpeg | doc_desc21 | capture.jpeg | doc_desc1 | capture.jpeg | regressionseventeen@mailinator.com | Test@123 |

  #| DRC_ATC_Required_doc_13 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc23 | capture.gif  | doc_desc25 | capture.gif  | doc_desc22 | capture.gif  | doc_desc27 | capture.gif  | doc_desc21 | capture.gif  | doc_desc26 | capture.gif  | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_14 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc23 | capture.docx | doc_desc25 | capture.docx | doc_desc22 | capture.docx | doc_desc27 | capture.docx | doc_desc21 | capture.docx | doc_desc26 | capture.docx | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Required_doc_15 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document | doc_desc23 | capture.xlsx | doc_desc25 | capture.xlsx | doc_desc22 | capture.xlsx | doc_desc27 | capture.xlsx | doc_desc21 | capture.xlsx | doc_desc26 | capture.xlsx | regressionseventeen@mailinator.com | Test@123 |
  #@IncLLPY_mtc12_mtc10_mtc8
  #Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document
    #Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    #When Selects taxpayer "Legal Entity" and sub category "Incorporated Bodies" and llp "Yes"
    #And Fills General details "4843758943798" "2018-08-22" "Newman" "3" "2018-02-12" "Mining" "2018-08-22" "Medium Scale" "8965741235698"
    #And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    #And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    #And Selects Authorized signatory no and clicks continue
    #And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    #And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    #And Acc "<A/C Proof>" "<a/c path>"
    #And INC "<INCcerti>" "<incpath>"
    #And LOAuth"<LOAuth>" "<LOAuthpath>"
    #And llp"<LLP>""<llpPath>"
    #And rev"<Revenue>""<Revpath>"
    #And Views the files
    #Then Clicks on Continue.
#
    #Examples: 
      #| Test Case ID            | Description                                                                                                                       | POA       | POA path     | A/C Proof | a/c path     | INCcerti  | incpath      | LOAuth      | LOAuthpath   | LLP        | llpPath      | Revenue    | Revpath      | uname                           | pwd      |
      #| DRC_ATC_Required_doc_16 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc7 | capture.png  | doc_desc9 | capture.png  | doc_desc6 | capture.png  | doc_desc11 | capture.png  | doc_desc12 | capture.png  | doc_desc10 | capture.png  | regressionseventeen@mailinator.com  | Test@123 |
      # | DRC_ATC_Required_doc_17 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc7 | capture.jpg  | doc_desc9 | capture.jpg  | doc_desc6 | capture.jpg  | doc_desc11 | capture.jpg  | doc_desc12 | capture.jpg  | doc_desc10 | capture.jpg  | regressionseventeen@mailinator.com  | Test@123 |
      # | DRC_ATC_Required_doc_18 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc7 | capture.jpeg | doc_desc9 | capture.jpeg | doc_desc6 | capture.jpeg | doc_desc11 | capture.jpeg | doc_desc12 | capture.jpeg | doc_desc10 | capture.jpeg | regressionseventeen@mailinator.com  | Test@123 |
      #| DRC_ATC_Required_doc_19 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc7 | capture.pdf  | doc_desc9 | capture.pdf  | doc_desc6 | capture.pdf  | doc_desc11 | capture.pdf  | doc_desc12 | capture.pdf  | doc_desc10 | capture.pdf  | regressionseventeen@mailinator.com | Test@123 |
      #| DRC_ATC_Required_doc_20 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc7 | capture.gif  | doc_desc9 | capture.gif  | doc_desc6 | capture.gif  | doc_desc11 | capture.gif  | doc_desc12 | capture.gif  | doc_desc10 | capture.gif  | regressionseventeen@mailinator.com  | Test@123 |
      #| DRC_ATC_Required_doc_21 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc1 | capture.docx | doc_desc1 | capture.docx | doc_desc1 | capture.docx | doc_desc1_1 | capture.docx | doc_desc12 | capture.docx | doc_desc10 | capture.docx | regressionseventeen@mailinator.com | Test@123 |
#
  #   | DRC_ATC_Required_doc_22 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document | doc_desc7 | capture.xlsx | doc_desc9 | capture.xlsx | doc_desc6 | capture.xlsx | doc_desc11 | capture.xlsx | doc_desc12 | capture.xlsx | doc_desc10 | capture.xlsx | regressionseventeen@mailinator.com  | Test@123 |
  #LLP no 5 docs  poa,a/c,coi,loa,lyr
  #@IncLLPN_mtc12_mtc10_mtc9
  #Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document
    #Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    #When Selects taxpayer "Legal Entity" and sub category "Incorporated Bodies" and llp "No"
    #And Fills General details "4843758943798" "2018-08-22" "Newman" "3" "2018-02-12" "Mining" "2018-08-22" "Medium Scale" "8965741235698"
    #And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    #And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    #And Selects Authorized signatory no and clicks continue
    #And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    #And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    #And Acc "<A/C Proof>" "<a/c path>"
    #And INC "<INCcerti>" "<incpath>"
    #And LOAuth"<LOAuth>" "<LOAuthpath>"
    #And rev"<Revenue>""<Revpath>"
    #And Views the files
    #Then Clicks on Continue.
#
    #Examples: 
      #| Test Case ID            | Description                                                                                                                          | POA       | POA path     | A/C Proof | a/c path     | INCcerti  | incpath      | LOAuth     | LOAuthpath   | Revenue    | Revpath      | uname                           | pwd      |
      #| DRC_ATC_Required_doc_23 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.png  | doc_desc9 | capture.png  | doc_desc6 | capture.png  | doc_desc11 | capture.png  | doc_desc10 | capture.png  | regressionseventeen@mailinator.com  | Test@123 |
      #    | DRC_ATC_Required_doc_24 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.jpg  | doc_desc9 | capture.jpg  | doc_desc6 | capture.jpg  | doc_desc11 | capture.jpg  | doc_desc10 | capture.jpg  | regressionseventeen@mailinator.com  | Test@123 |
      #| DRC_ATC_Required_doc_25 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.jpeg | doc_desc9 | capture.jpeg | doc_desc6 | capture.jpeg | doc_desc11 | capture.jpeg | doc_desc10 | capture.jpeg | regressionseventeen@mailinator.com | Test@123 |
#
  #  | DRC_ATC_Required_doc_26 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.pdf  | doc_desc9 | capture.pdf  | doc_desc6 | capture.pdf  | doc_desc11 | capture.pdf  | doc_desc10 | capture.pdf  | regressionseventeen@mailinator.com  | Test@123 |
  # | DRC_ATC_Required_doc_27 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.docx | doc_desc9 | capture.docx | doc_desc6 | capture.docx | doc_desc11 | capture.docx | doc_desc10 | capture.docx | regressionseventeen@mailinator.com  | Test@123 |
  # | DRC_ATC_Required_doc_28 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.gif  | doc_desc9 | capture.gif  | doc_desc6 | capture.gif  | doc_desc11 | capture.gif  | doc_desc10 | capture.gif  | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Required_doc_29 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document | doc_desc7 | capture.xlsx | doc_desc9 | capture.xlsx | doc_desc6 | capture.xlsx | doc_desc11 | capture.xlsx | doc_desc10 | capture.xlsx | regressionseventeen@mailinator.com  | Test@123 |
  # non corp llp Yes 7 docs poa,a/c,coi,assoc,loa,llp,lyr #done
  #@NonCopratesLLPY_mtc12_mtc10
  #Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document
    #Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    #When Selects taxpayer "Legal Entity" and sub category "Other Non-Corporates" and llp "Yes"
    #And Fills General details "4843758943798" "2018-08-22" "Newman" "3" "2018-02-12" "Mining" "2018-08-22" "Medium Scale" "8965741235698"
    #And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    #And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    #And Selects Authorized signatory no and clicks continue
    #And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    #And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    #And Acc "<A/C Proof>" "<a/c path>"
    #And INC "<INCcerti>" "<incpath>"
    #And Asssoc "<AssoReg>" "<Assoregpath>"
    #And LOAuth"<LOAuth>" "<LOAuthpath>"
    #And llp"<LLP>""<llpPath>"
    #And rev"<Revenue>""<Revpath>"
    #And Views the files
    #Then Clicks on Continue.
#
    #Examples: 
      #| Test Case ID            | Description                                                                                                                         | POA        | POA path    | A/C Proof  | a/c path    | INCcerti   | incpath     | LOAuth     | LOAuthpath  | AssoReg    | Assoregpath | LLP        | llpPath     | Revenue    | Revpath     | uname                           | pwd      |
      #| DRC_ATC_Required_doc_30 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.png | doc_desc16 | capture.png | doc_desc13 | capture.png | doc_desc18 | capture.png | doc_desc19 | capture.png | doc_desc20 | capture.png | doc_desc17 | capture.png | regressionseventeen@mailinator.com | Test@123 |
#
  #  | DRC_ATC_Required_doc_31 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.jpg  | doc_desc16 | capture.jpg  | doc_desc13 | capture.jpg  | doc_desc18 | capture.jpg  | doc_desc19 | capture.jpg  | doc_desc20 | capture.jpg  | doc_desc17 | capture.jpg  | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_32 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.jpeg | doc_desc16 | capture.jpeg | doc_desc13 | capture.jpeg | doc_desc18 | capture.jpeg | doc_desc19 | capture.jpeg | doc_desc20 | capture.jpeg | doc_desc17 | capture.jpeg | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Required_doc_33 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.pdf  | doc_desc16 | capture.pdf  | doc_desc13 | capture.pdf  | doc_desc18 | capture.pdf  | doc_desc19 | capture.pdf  | doc_desc20 | capture.pdf  | doc_desc17 | capture.pdf  | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_34 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.docx | doc_desc16 | capture.docx | doc_desc13 | capture.docx | doc_desc18 | capture.docx | doc_desc19 | capture.docx | doc_desc20 | capture.docx | doc_desc17 | capture.docx | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Required_doc_35 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.gif  | doc_desc16 | capture.gif  | doc_desc13 | capture.gif  | doc_desc18 | capture.gif  | doc_desc19 | capture.gif  | doc_desc20 | capture.gif  | doc_desc17 | capture.gif  | regressionseventeen@mailinator.com  | Test@123 |
  #| DRC_ATC_Required_doc_36 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document | doc_desc14 | capture.xlsx | doc_desc16 | capture.xlsx | doc_desc13 | capture.xlsx | doc_desc18 | capture.xlsx | doc_desc19 | capture.xlsx | doc_desc20 | capture.xlsx | doc_desc17 | capture.xlsx | regressionseventeen@mailinator.com  | Test@123 |
  #other non corporates LLp no 6 docs- Poa,a/c,COI,Assoc REg,LOA,Lyr
  #@NonCopratesLLPN_mtc12_mtc10
  #Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document
    #Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    #When Selects taxpayer "Legal Entity" and sub category "Other Non-Corporates" and llp "No"
    #And Fills General details "4843758943798" "2018-08-22" "Newman" "3" "2018-02-12" "Mining" "2018-08-22" "Medium Scale" "8965741235698"
    #And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    #And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    #And Selects Authorized signatory no and clicks continue
    #And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    #And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    #And Acc "<A/C Proof>" "<a/c path>"
    #And INC "<INCcerti>" "<incpath>"
    #And Asssoc "<AssoReg>" "<Assoregpath>"
    #And LOAuth"<LOAuth>" "<LOAuthpath>"
    #And rev"<Revenue>""<Revpath>"
    #And Views the files
    #Then Clicks on Continue.
#
    #Examples: 
      #| Test Case ID            | Description                                                                                                                                  | POA        | POA path    | A/C Proof  | a/c path    | INCcerti   | incpath     | LOAuth     | LOAuthpath  | AssoReg    | Assoregpath | Revenue    | Revpath     | uname                           | pwd      |
      #| DRC_ATC_Required_doc_37 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | Capture.png | doc_desc16 | capture.png | doc_desc13 | capture.png | doc_desc18 | capture.png | doc_desc19 | capture.png | doc_desc17 | capture.png | regressionseventeen@mailinator.com | Test@123 |
#
  #  | DRC_ATC_Required_doc_38 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.jpg  | doc_desc16 | capture.jpg  | doc_desc13 | capture.jpg  | doc_desc18 | capture.jpg  | doc_desc19 | capture.jpg  | doc_desc17 | capture.jpg  | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_39 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.jpeg | doc_desc16 | capture.jpeg | doc_desc13 | capture.jpeg | doc_desc18 | capture.jpeg | doc_desc19 | capture.jpeg | doc_desc17 | capture.jpeg | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_40 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.pdf  | doc_desc16 | capture.pdf  | doc_desc13 | capture.pdf  | doc_desc18 | capture.pdf  | doc_desc19 | capture.pdf  | doc_desc17 | capture.pdf  | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_41 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.docx | doc_desc16 | capture.docx | doc_desc13 | capture.doc  | doc_desc18 | capture.docx | doc_desc19 | capture.docx | doc_desc17 | capture.docx | regressionseventeen@mailinator.com  | Test@123 |
  #  | DRC_ATC_Required_doc_42 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.gif  | doc_desc16 | capture.gif  | doc_desc13 | capture.gif  | doc_desc18 | capture.gif  | doc_desc19 | capture.gif  | doc_desc17 | capture.gif  | regressionseventeen@mailinator.com  | Test@123 |
  # | DRC_ATC_Required_doc_43 | Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document | doc_desc14 | capture.xlsx | doc_desc16 | capture.xlsx | doc_desc13 | capture.xlsx | doc_desc18 | capture.xlsx | doc_desc19 | capture.xlsx | doc_desc17 | capture.xlsx | regressionseventeen@mailinator.com  | Test@123 |
  #@Delete_mtc13_mtc11
  #Scenario Outline: Check the Delete Functionality
    #Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    #When Selects taxpayer "Natural Person" and sub category "Individual" and llp ""
    #And Fills General details "4843758943798" "2018-08-22" "Newman" "Mining" "2018-08-22" "Small Scale" "8965741235698" "" ""
    #And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    #And Selects Authorized signatory no and clicks continue
    #And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    #And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    #And Removes the document
    #Then Logouts
#
    #Examples: 
      #| Test Case ID            | Description                    | POA         | POA path    | uname                           | pwd      |
      #| DRC_ATC_Required_doc_44 | Check the Delete Functionality | doc_desc1_1 | Capture.png | regressionseventeen@mailinator.com | Test@123 |
#
  #@previous_mtc3
  #Scenario Outline: User is on Required Documents page and wants to redirect to Bank Details page.
    #Given The users has logged in "<uname>""<pwd>" and proceeds for VAT Registration "<Test Case ID>" "<Description>"
    #When Selects taxpayer "<Category>" and sub category "<SubCategory>" and llp "<Llp>"
    #And Fills General details "<arg1>" "<arg2>" "<arg3>" "<arg4>" "<arg5>" "<arg6>" "<arg7>" "<arg8>" "<arg9>"
    #And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    #And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    #And Selects Authorized signatory no and clicks continue
    #And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    #Then clicks on previous button and goes to Bank details page
    #And Clicks on Continue and user is on Upload Documents
    #Then Logouts
#
    #Examples: 
      #| Test Case ID            | Description                                                                                | Category       | SubCategory | Llp | arg1          | arg2       | arg3   | arg4   | arg5       | arg6        | arg7          | arg8 | arg9 | uname                           | pwd      |
      #| DRC_ATC_Required_doc_45 | User is on Required Documents page and wants to redirect to Bank Details page.(Individual) | Natural Person | Individual  |     | 4843758943798 | 2018-06-10 | Newman | Mining | 2018-06-10 | Small Scale | 8965741235698 |      |      | regressionseventeen@mailinator.com | Test@123 |
      #| DRC_ATC_Required_doc_46 | User is on Required Documents page and wants to redirect to Bank Details page.(Government Entity  ) | Legal Entity   | Government Entity |     | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-08-22 | Mining      | 2018-08-22    | Medium Scale | 8965741235698 | regressionseventeen@mailinator.com | Test@123 |
      # | DRC_ATC_Required_doc_47 | User is on Required Documents page and wants to redirect to Bank Details page.( Incorporated Bodies Y)   | Legal Entity   | Incorporated Bodies  | Yes | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-06-10 | Mining      | 2018-06-10    | Medium Scale | 8965741235698 | regressionseventeen@mailinator.com  | Test@123 |
     # | DRC_ATC_Required_doc_48 | User is on Required Documents page and wants to redirect to Bank Details page. (Incorporated Bodies N) | Legal Entity   | Incorporated Bodies | No  | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-06-10 | Mining      | 2018-06-10    | Medium Scale | 8965741235698 | regressionseventeen@mailinator.com  | Test@123 |
      #| DRC_ATC_Required_doc_49 | User is on Required Documents page and wants to redirect to Bank Details page. (Other Non-Corporates  Y) | Legal Entity   | Other Non-Corporates | Yes | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-06-10 | Mining      | 2018-06-10    | Medium Scale | 8965741235698 | regressionseventeen@mailinator.com  | Test@123 |
      #| DRC_ATC_Required_doc_50 | User is on Required Documents page and wants to redirect to Bank Details page.(Other Non-Corporates N)   | Legal Entity   | Other Non-Corporates | No  | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-06-10 | Mining      | 2018-06-10    | Medium Scale | 8965741235698 | regressionseventeen@mailinator.com  | Test@123 |
