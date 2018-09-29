
Feature: Upload Documents after all process are completed till the Banks details

  #Individual 4 docs poa*,a/c*,loa*,lyr
  @Individual
  Scenario Outline: Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Natural Person" and sub category "Individual" and llp ""
    And Fills General details "4843758943798" "2018-06-10" "Newman" "Mining" "2018-02-02" "Small Scale" "8965741235698" "" ""
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID                  | POA         | POA path                    | A/C Proof | a/c path                    | LOAuth    | LOAuthpath                  | Revenue   | Revpath                     |
      | DRC_ATC_Valid_Required_doc_01 | doc_desc1_1 | F:\\documents\\Capture.png  | doc_desc3 | F:\\documents\\capture.png  | doc_desc5 | F:\\documents\\capture.png  | doc_desc4 | F:\\documents\\capture.png  |
      | DRC_ATC_Valid_Required_doc_02 | doc_desc1_1 | F:\\documents\\capture.jpg  | doc_desc3 | F:\\documents\\capture.jpg  | doc_desc5 | F:\\documents\\capture.jpg  | doc_desc4 | F:\\documents\\capture.jpg  |
      | DRC_ATC_Valid_Required_doc_03 | doc_desc1_1 | F:\\documents\\capture.jpeg | doc_desc3 | F:\\documents\\capture.jpeg | doc_desc5 | F:\\documents\\capture.jpeg | doc_desc4 | F:\\documents\\capture.jpeg |
      | DRC_ATC_Valid_Required_doc_04 | doc_desc1_1 | F:\\documents\\capture.pdf  | doc_desc3 | F:\\documents\\capture.pdf  | doc_desc5 | F:\\documents\\capture.pdf  | doc_desc4 | F:\\documents\\capture.pdf  |
      | DRC_ATC_Valid_Required_doc_05 | doc_desc1_1 | F:\\documents\\capture.gif  | doc_desc3 | F:\\documents\\capture.gif  | doc_desc5 | F:\\documents\\capture.gif  | doc_desc4 | F:\\documents\\capture.gif  |
      | DRC_ATC_Valid_Required_doc_06 | doc_desc1_1 | F:\\documents\\capture.docx | doc_desc3 | F:\\documents\\capture.docx | doc_desc5 | F:\\documents\\capture.docx | doc_desc4 | F:\\documents\\capture.docx |
      | DRC_ATC_Valid_Required_doc_07 | doc_desc1_1 | F:\\documents\\capture.xlsx | doc_desc3 | F:\\documents\\capture.xlsx | doc_desc5 | F:\\documents\\capture.xlsx | doc_desc4 | F:\\documents\\capture.xlsx |

  #govt 6docs poa*,a/c*,coi*,establishemnt*,loa*,lyr 9 general details
  #LLP no 6 docs   poa,a/c,coi,loa,lyr.establishemnt
  @GovernmentEntity
  Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Legal Entity" and sub category "Government Entity" and llp ""
    And Fills General details "4843758943798" "2018-06-10" "Newman" "3" "2018-02-02" "Mining" "2018-02-02" "Medium Scale" "8965741235698"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "789798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And INC "<INCcerti>" "<incpath>"
    And establish "<Establish>" "<Estbpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | POA        | POA path                    | A/C Proof  | a/c path                    | INCcerti   | incpath                     | LOAuth     | LOAuthpath                  | Establish  | Estbpath                    | Revenue    | Revpath                     |
      | DRC_ATC_Required_doc_08 | doc_desc23 | F:\\documents\\capture.png  | doc_desc25 | F:\\documents\\capture.png  | doc_desc22 | F:\\documents\\capture.png  | doc_desc27 | F:\\documents\\capture.png  | doc_desc21 | F:\\documents\\capture.png  | doc_desc26 | F:\\documents\\capture.png  |
      | DRC_ATC_Required_doc_09 | doc_desc23 | F:\\documents\\capture.jpg  | doc_desc25 | F:\\documents\\capture.jpg  | doc_desc22 | F:\\documents\\capture.jpg  | doc_desc27 | F:\\documents\\capture.jpg  | doc_desc21 | F:\\documents\\capture.jpg  | doc_desc26 | F:\\documents\\capture.jpg  |
      | DRC_ATC_Required_doc_10 | doc_desc23 | F:\\documents\\capture.jpeg | doc_desc25 | F:\\documents\\capture.jpeg | doc_desc22 | F:\\documents\\capture.jpeg | doc_desc27 | F:\\documents\\capture.jpeg | doc_desc21 | F:\\documents\\capture.jpeg | doc_desc26 | F:\\documents\\capture.jpeg |
      | DRC_ATC_Required_doc_11 | doc_desc23 | F:\\documents\\capture.pdf  | doc_desc25 | F:\\documents\\capture.pdf  | doc_desc22 | F:\\documents\\capture.pdf  | doc_desc27 | F:\\documents\\capture.pdf  | doc_desc21 | F:\\documents\\capture.pdf  | doc_desc26 | F:\\documents\\capture.pdf  |
      | DRC_ATC_Required_doc_12 | doc_desc23 | F:\\documents\\capture.gif  | doc_desc25 | F:\\documents\\capture.gif  | doc_desc22 | F:\\documents\\capture.gif  | doc_desc27 | F:\\documents\\capture.gif  | doc_desc21 | F:\\documents\\capture.gif  | doc_desc26 | F:\\documents\\capture.gif  |
      | DRC_ATC_Required_doc_13 | doc_desc23 | F:\\documents\\capture.docx | doc_desc25 | F:\\documents\\capture.docx | doc_desc22 | F:\\documents\\capture.docx | doc_desc27 | F:\\documents\\capture.docx | doc_desc21 | F:\\documents\\capture.docx | doc_desc26 | F:\\documents\\capture.docx |
      | DRC_ATC_Required_doc_14 | doc_desc23 | F:\\documents\\capture.xlsx | doc_desc25 | F:\\documents\\capture.xlsx | doc_desc22 | F:\\documents\\capture.xlsx | doc_desc27 | F:\\documents\\capture.xlsx | doc_desc21 | F:\\documents\\capture.xlsx | doc_desc26 | F:\\documents\\capture.xlsx |

  @IncLLPY
  Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is  LLP user wants to upload the document
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Legal Entity" and sub category "Incorporated Bodies" and llp "Yes"
    And Fills General details "4843758943798" "2018-06-10" "Newman" "3" "2018-02-02" "Mining" "2018-02-02" "Medium Scale" "8965741235698"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And INC "<INCcerti>" "<incpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And llp"<LLP>""<llpPath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | POA       | POA path                    | A/C Proof | a/c path                    | INCcerti  | incpath                     | LOAuth     | LOAuthpath                  | LLP        | llpPath                     | Revenue    | Revpath                     |
      | DRC_ATC_Required_doc_15 | doc_desc7 | F:\\documents\\capture.png  | doc_desc9 | F:\\documents\\capture.png  | doc_desc6 | F:\\documents\\capture.png  | doc_desc11 | F:\\documents\\capture.png  | doc_desc12 | F:\\documents\\capture.png  | doc_desc10 | F:\\documents\\capture.png  |
      | DRC_ATC_Required_doc_16 | doc_desc7 | F:\\documents\\capture.jpg  | doc_desc9 | F:\\documents\\capture.jpg  | doc_desc6 | F:\\documents\\capture.jpg  | doc_desc11 | F:\\documents\\capture.jpg  | doc_desc12 | F:\\documents\\capture.jpg  | doc_desc10 | F:\\documents\\capture.jpg  |
      | DRC_ATC_Required_doc_17 | doc_desc7 | F:\\documents\\capture.jpeg | doc_desc9 | F:\\documents\\capture.jpeg | doc_desc6 | F:\\documents\\capture.jpeg | doc_desc11 | F:\\documents\\capture.jpeg | doc_desc12 | F:\\documents\\capture.jpeg | doc_desc10 | F:\\documents\\capture.jpeg |
      | DRC_ATC_Required_doc_18 | doc_desc7 | F:\\documents\\capture.pdf  | doc_desc9 | F:\\documents\\capture.pdf  | doc_desc6 | F:\\documents\\capture.pdf  | doc_desc11 | F:\\documents\\capture.pdf  | doc_desc12 | F:\\documents\\capture.pdf  | doc_desc10 | F:\\documents\\capture.pdf  |
      | DRC_ATC_Required_doc_19 | doc_desc7 | F:\\documents\\capture.gif  | doc_desc9 | F:\\documents\\capture.gif  | doc_desc6 | F:\\documents\\capture.gif  | doc_desc11 | F:\\documents\\capture.gif  | doc_desc12 | F:\\documents\\capture.gif  | doc_desc10 | F:\\documents\\capture.gif  |
      | DRC_ATC_Required_doc_20 | doc_desc7 | F:\\documents\\capture.docx | doc_desc9 | F:\\documents\\capture.docx | doc_desc6 | F:\\documents\\capture.docx | doc_desc11 | F:\\documents\\capture.docx | doc_desc12 | F:\\documents\\capture.doc  | doc_desc10 | F:\\documents\\capture.doc  |
      | DRC_ATC_Required_doc_21 | doc_desc7 | F:\\documents\\capture.xlsx | doc_desc9 | F:\\documents\\capture.xlsx | doc_desc6 | F:\\documents\\capture.xlsx | doc_desc11 | F:\\documents\\capture.xlsx | doc_desc12 | F:\\documents\\capture.xlsx | doc_desc10 | F:\\documents\\capture.xlsx |

  #LLP no 5 docs  poa,a/c,coi,loa,lyr
  @IncLLPN
  Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Incorporated Body and is not LLP user wants to upload the document
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Legal Entity" and sub category "Incorporated Bodies" and llp "No"
    And Fills General details "4843758943798" "2018-06-10" "Newman" "3" "2018-02-02" "Mining" "2018-02-02" "Medium Scale" "8965741235698"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And INC "<INCcerti>" "<incpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | POA       | POA path                    | A/C Proof | a/c path                    | INCcerti  | incpath                     | LOAuth     | LOAuthpath                  | Revenue    | Revpath                     |
      | DRC_ATC_Required_doc_22 | doc_desc7 | F:\\documents\\capture.png  | doc_desc9 | F:\\documents\\capture.png  | doc_desc6 | F:\\documents\\capture.png  | doc_desc11 | F:\\documents\\capture.png  | doc_desc10 | F:\\documents\\capture.png  |
      | DRC_ATC_Required_doc_23 | doc_desc7 | F:\\documents\\capture.jpg  | doc_desc9 | F:\\documents\\capture.jpg  | doc_desc6 | F:\\documents\\capture.jpg  | doc_desc11 | F:\\documents\\capture.jpg  | doc_desc10 | F:\\documents\\capture.jpg  |
      | DRC_ATC_Required_doc_24 | doc_desc7 | F:\\documents\\capture.jpeg | doc_desc9 | F:\\documents\\capture.jpeg | doc_desc6 | F:\\documents\\capture.jpeg | doc_desc11 | F:\\documents\\capture.jpeg | doc_desc10 | F:\\documents\\capture.jpeg |
      | DRC_ATC_Required_doc_25 | doc_desc7 | F:\\documents\\capture.pdf  | doc_desc9 | F:\\documents\\capture.pdf  | doc_desc6 | F:\\documents\\capture.pdf  | doc_desc11 | F:\\documents\\capture.pdf  | doc_desc10 | F:\\documents\\capture.pdf  |
      | DRC_ATC_Required_doc_26 | doc_desc7 | F:\\documents\\capture.docx | doc_desc9 | F:\\documents\\capture.docx | doc_desc6 | F:\\documents\\capture.docx | doc_desc11 | F:\\documents\\capture.docx | doc_desc10 | F:\\documents\\capture.docx |
      | DRC_ATC_Required_doc_27 | doc_desc7 | F:\\documents\\capture.gif  | doc_desc9 | F:\\documents\\capture.gif  | doc_desc6 | F:\\documents\\capture.gif  | doc_desc11 | F:\\documents\\capture.gif  | doc_desc10 | F:\\documents\\capture.gif  |
      | DRC_ATC_Required_doc_28 | doc_desc7 | F:\\documents\\capture.xlsx | doc_desc9 | F:\\documents\\capture.xlsx | doc_desc6 | F:\\documents\\capture.xlsx | doc_desc11 | F:\\documents\\capture.xlsx | doc_desc10 | F:\\documents\\capture.xlsx |

  # non corp llp Yes 7 docs poa,a/c,coi,assoc,loa,llp,lyr #done
  @NonCopratesLLPY
  Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is LLP user wants to upload the document
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Legal Entity" and sub category "Other Non-Corporates" and llp "Yes"
    And Fills General details "4843758943798" "2018-06-10" "Newman" "3" "2018-02-02" "Mining" "2018-02-02" "Medium Scale" "8965741235698"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And INC "<INCcerti>" "<incpath>"
    And Asssoc "<AssoReg>" "<Assoregpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And llp"<LLP>""<llpPath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | POA        | POA path                    | A/C Proof  | a/c path                    | INCcerti   | incpath                     | LOAuth     | LOAuthpath                  | AssoReg    | Assoregpath                 | LLP        | llpPath                     | Revenue    | Revpath                     |
      | DRC_ATC_Required_doc_29 | doc_desc14 | F:\\documents\\capture.png  | doc_desc16 | F:\\documents\\capture.png  | doc_desc13 | F:\\documents\\capture.png  | doc_desc18 | F:\\documents\\capture.png  | doc_desc19 | F:\\documents\\capture.png  | doc_desc20 | F:\\documents\\capture.png  | doc_desc17 | F:\\documents\\capture.png  |
      | DRC_ATC_Required_doc_30 | doc_desc14 | F:\\documents\\capture.jpg  | doc_desc16 | F:\\documents\\capture.jpg  | doc_desc13 | F:\\documents\\capture.jpg  | doc_desc18 | F:\\documents\\capture.jpg  | doc_desc19 | F:\\documents\\capture.jpg  | doc_desc20 | F:\\documents\\capture.jpg  | doc_desc17 | F:\\documents\\capture.jpg  |
      | DRC_ATC_Required_doc_31 | doc_desc14 | F:\\documents\\capture.jpeg | doc_desc16 | F:\\documents\\capture.jpeg | doc_desc13 | F:\\documents\\capture.jpeg | doc_desc18 | F:\\documents\\capture.jpeg | doc_desc19 | F:\\documents\\capture.jpeg | doc_desc20 | F:\\documents\\capture.jpeg | doc_desc17 | F:\\documents\\capture.jpeg |
      | DRC_ATC_Required_doc_32 | doc_desc14 | F:\\documents\\capture.pdf  | doc_desc16 | F:\\documents\\capture.pdf  | doc_desc13 | F:\\documents\\capture.pdf  | doc_desc18 | F:\\documents\\capture.pdf  | doc_desc19 | F:\\documents\\capture.pdf  | doc_desc20 | F:\\documents\\capture.pdf  | doc_desc17 | F:\\documents\\capture.pdf  |
      | DRC_ATC_Required_doc_33 | doc_desc14 | F:\\documents\\capture.docx | doc_desc16 | F:\\documents\\capture.docx | doc_desc13 | F:\\documents\\capture.docx | doc_desc18 | F:\\documents\\capture.docx | doc_desc19 | F:\\documents\\capture.docx | doc_desc20 | F:\\documents\\capture.docx | doc_desc17 | F:\\documents\\capture.docx |
      | DRC_ATC_Required_doc_34 | doc_desc14 | F:\\documents\\capture.gif  | doc_desc16 | F:\\documents\\capture.gif  | doc_desc13 | F:\\documents\\capture.gif  | doc_desc18 | F:\\documents\\capture.gif  | doc_desc19 | F:\\documents\\capture.gif  | doc_desc20 | F:\\documents\\capture.gif  | doc_desc17 | F:\\documents\\capture.gif  |
      | DRC_ATC_Required_doc_35 | doc_desc14 | F:\\documents\\capture.xlsx | doc_desc16 | F:\\documents\\capture.xlsx | doc_desc13 | F:\\documents\\capture.xlsx | doc_desc18 | F:\\documents\\capture.xlsx | doc_desc19 | F:\\documents\\capture.xlsx | doc_desc20 | F:\\documents\\capture.xlsx | doc_desc17 | F:\\documents\\capture.xlsx |

  #other non corporates LLp no 6 docs- Poa,a/c,COI,Assoc REg,LOA,Lyr
  @NonCopratesLLPN
  Scenario Outline: Tax payer Category as Legal Entity and  Tax payer Sub Category as Other Non Corporates and is not LLP user user wants to upload the document
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Legal Entity" and sub category "Other Non-Corporates" and llp "No"
    And Fills General details "4843758943798" "2018-06-10" "Newman" "3" "2018-02-02" "Mining" "2018-02-02" "Medium Scale" "8965741235698"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Acc "<A/C Proof>" "<a/c path>"
    And INC "<INCcerti>" "<incpath>"
    And Asssoc "<AssoReg>" "<Assoregpath>"
    And LOAuth"<LOAuth>" "<LOAuthpath>"
    And rev"<Revenue>""<Revpath>"
    And Views the files
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | POA        | POA path                    | A/C Proof  | a/c path                    | INCcerti   | incpath                     | LOAuth     | LOAuthpath                  | AssoReg    | Assoregpath                 | Revenue    | Revpath                     |
      | DRC_ATC_Required_doc_36 | doc_desc14 | F:\\documents\\capture.png  | doc_desc16 | F:\\documents\\capture.png  | doc_desc13 | F:\\documents\\capture.png  | doc_desc18 | F:\\documents\\capture.png  | doc_desc19 | F:\\documents\\capture.png  | doc_desc17 | F:\\documents\\capture.png  |
      | DRC_ATC_Required_doc_37 | doc_desc14 | F:\\documents\\capture.jpg  | doc_desc16 | F:\\documents\\capture.jpg  | doc_desc13 | F:\\documents\\capture.jpg  | doc_desc18 | F:\\documents\\capture.jpg  | doc_desc19 | F:\\documents\\capture.jpg  | doc_desc17 | F:\\documents\\capture.jpg  |
      | DRC_ATC_Required_doc_38 | doc_desc14 | F:\\documents\\capture.jpeg | doc_desc16 | F:\\documents\\capture.jpeg | doc_desc13 | F:\\documents\\capture.jpeg | doc_desc18 | F:\\documents\\capture.jpeg | doc_desc19 | F:\\documents\\capture.jpeg | doc_desc17 | F:\\documents\\capture.jpeg |
      | DRC_ATC_Required_doc_39 | doc_desc14 | F:\\documents\\capture.pdf  | doc_desc16 | F:\\documents\\capture.pdf  | doc_desc13 | F:\\documents\\capture.pdf  | doc_desc18 | F:\\documents\\capture.pdf  | doc_desc19 | F:\\documents\\capture.pdf  | doc_desc17 | F:\\documents\\capture.pdf  |
      | DRC_ATC_Required_doc_40 | doc_desc14 | F:\\documents\\capture.docx | doc_desc16 | F:\\documents\\capture.docx | doc_desc13 | F:\\documents\\capture.doc  | doc_desc18 | F:\\documents\\capture.docx | doc_desc19 | F:\\documents\\capture.docx | doc_desc17 | F:\\documents\\capture.docx |
      | DRC_ATC_Required_doc_41 | doc_desc14 | F:\\documents\\capture.gif  | doc_desc16 | F:\\documents\\capture.gif  | doc_desc13 | F:\\documents\\capture.gif  | doc_desc18 | F:\\documents\\capture.gif  | doc_desc19 | F:\\documents\\capture.gif  | doc_desc17 | F:\\documents\\capture.gif  |
      | DRC_ATC_Required_doc_42 | doc_desc14 | F:\\documents\\capture.xlsx | doc_desc16 | F:\\documents\\capture.xlsx | doc_desc13 | F:\\documents\\capture.xlsx | doc_desc18 | F:\\documents\\capture.xlsx | doc_desc19 | F:\\documents\\capture.xlsx | doc_desc17 | F:\\documents\\capture.xlsx |

  @Delete
  Scenario Outline: Check the Delete Functionality
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "Natural Person" and sub category "Individual" and llp ""
    And Fills General details "4843758943798" "2018-06-10" "Newman" "Mining" "2018-02-02" "Small Scale" "8965741235698" "" ""
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    And The user is on the upload the page with Proofs of Add "<POA>""<POA path>"
    And Removes the document
    Then Clicks on Continue.

    Examples: 
      | Test Case ID            | POA         | POA path                   |
      | DRC_ATC_Required_doc_43 | doc_desc1_1 | F:\\documents\\capture.jpg |

  @previouspage
  Scenario Outline: User is on Required Documents page and wants to redirect to Bank Details page.
    Given The users has logged in and proceeds for VAT Registration
    When Selects taxpayer "<Category>" and sub category "<SubCategory>" and llp "<Llp>"
    And Fills General details "<arg1>" "<arg2>" "<arg3>" "<arg4>" "<arg5>" "<arg6>" "<arg7>" "<arg8>" "<arg9>"
    And Fills Business address "Confluence Software Dharmadas building 3rd floor" "Ituri" "Bunia" "4563212" "9865327452"
    And fills Details of Business Promoters "Shah" " 1rivet Building Valsad" "Haut-Uele" "Rungu" "78978798" "shah@div.com" "98998945621"
    And Selects Authorized signatory no and clicks continue
    And Fills Bank Details "32145645678" "1rivet" "Advans Bank" "Branch4" and clicks continue
    Then clicks on previous button and goes to Bank details page
    And Clicks on Continue.

    Examples: 
      | Test Case ID            | Category       | SubCategory          | Llp | arg1          | arg2       | arg3   | arg4   | arg5       | arg6        | arg7          | arg8         | arg9          |
      | DRC_ATC_Required_doc_44 | Natural Person | Individual           |     | 4843758943798 | 2018-06-10 | Newman | Mining | 2018-02-02 | Small Scale | 8965741235698 |              |               |
      | DRC_ATC_Required_doc_45 | Legal Entity   | Government Entity    |     | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-02-02 | Mining      | 2018-02-02    | Medium Scale | 8965741235698 |
      | DRC_ATC_Required_doc_46 | Legal Entity   | Incorporated Bodies  | Yes | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-02-02 | Mining      | 2018-02-02    | Medium Scale | 8965741235698 |
      | DRC_ATC_Required_doc_47 | Legal Entity   | Incorporated Bodies  | No  | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-02-02 | Mining      | 2018-02-02    | Medium Scale | 8965741235698 |
      | DRC_ATC_Required_doc_48 | Legal Entity   | Other Non-Corporates | Yes | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-02-02 | Mining      | 2018-02-02    | Medium Scale | 8965741235698 |
      | DRC_ATC_Required_doc_49 | Legal Entity   | Other Non-Corporates | No  | 4843758943798 | 2018-06-10 | Newman |      3 | 2018-02-02 | Mining      | 2018-02-02    | Medium Scale | 8965741235698 |
