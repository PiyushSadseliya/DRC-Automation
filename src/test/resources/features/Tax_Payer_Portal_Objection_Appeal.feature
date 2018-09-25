Feature: User is on Tax Payer portal Objection and Appeal


@Run_Valid_Login
  Scenario Outline: DRC Tax Portal 
    Given User is on DRC Tax Portal
    When User Enter Data: "<email>" "<password>"
    And User Clicks on "SignIn"
    Then User see "Dashboard"
   
    Examples: 
      | TestcaseID                        | email             | password  |
     	|	Valid_DRC_ATC_LoginTaxPortal_01	  | ironman@0ne0ak.com| franky@123 |


  @TC_01 @UI @Notice
  Scenario Outline: Validate the UI of Notice Page.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User see pop up appear for Notice

    Examples: 
      | TestcaseID                    | Description               | month | click           |
      | Objection_Appeal_Tax_Payer_01 | Verify the UI of the Page | eJan  | btn_JanView_Ass |

  # multiple list will disolay and selectparticular one
  @TC_02 @rasie @objection
  Scenario Outline: Validate Tax Payer is able to raise objection.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User see pop up appear for Notice
    And User see document type "<document>"
    And User click on view
    And User click on Object button
    And User click on dropdown and select "<ObjectionType>"
    
    And User enter title "<title>"
    And User enter description "<description>"
    And User click on choose fie button and select file
    And User click on submit button for objection

    Examples: 
      | TestcaseID                    | Description                       | month | click           | document   | ObjectionType           | title                                  | description                       |
      | Objection_Appeal_Tax_Payer_02 | Verify raise notice for objection | eJan  | btn_JanView_Ass | assessment | drp_Objection_Assesment | Objection against re-assessment notice | Notice raise by you is incorrect  |

  @TC_03 @rasie @for @period
  Scenario Outline: Validate the list of notice raised against that particular period.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User see pop up appear for Notice
    And User see document type "<document>"
    And User see date "<date>" and click on view button
    And User see same date "<date2>" on notice on assessment

    Examples: 
      | TestcaseID                    | Description           | month | click           | document   | date       | date2      |
      | Objection_Appeal_Tax_Payer_03 | Verify noticed period | eJan  | btn_JanView_Ass | assessment | 12-09-2018 | 12-09-2018 |

  @TC_04 @viweButton @functionality
  Scenario Outline: Validate the View button functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see date "<date>" and click on view button
    And User see same date "<date2>" on notice on assessment
    And User is on Notice page

    Examples: 
      | TestcaseID                    | Description                          | month | click           | date       | date2      |
      | Objection_Appeal_Tax_Payer_04 | Verify the View button functionality | eJan  | btn_JanView_Ass | 12-09-2018 | 12-09-2018 |

  @TC_05 @UI @Notice @of @Assessement
  Scenario Outline: Validate the UI of Notice Page.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User ui of Notice of assessement

    Examples: 
      | TestcaseID                    | Description               | month | click           |
      | Objection_Appeal_Tax_Payer_05 | Verify the UI of the Page | eJan  | btn_JanView_Ass |

  @TC_06 @2D @Barcode
  Scenario Outline: Validate that 2D Barcode is generated Correctly.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User scan barcode "<barcode>"

    Examples: 
      | TestcaseID                    | Description           | month | click           | barcode       |
      | Objection_Appeal_Tax_Payer_06 | Verify the 2D Barcode | eJan  | btn_JanView_Ass | CT18091200002 |

  @TC_07 @TaxpayerName, @Address, @NITVA
  Scenario Outline: Validate the Taxpayer name, Address and NITVA  of the Customer is printed Correctly.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see Taxpayer name "<name>" Address "<address>" and NITVA "<NITVA>"  of the Customer

    Examples: 
      | TestcaseID                    | Description               | month | click           | name       | address                | NITVA             |
      | Objection_Appeal_Tax_Payer_07 | Verify add,nitva and name | eJan  | btn_JanView_Ass | tony stark | valsad,,Aketi,Bas-Uele | 20180912112040575 |

  # data format mm//dd/yyyy is different from
  @TC_08 @NoticeDetails @section
  Scenario Outline: Validate the Notice details Section is generated properly.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see Ref ID "<ref>" for notice
    And User see Period "<Period>" 
    And User see Date Issued "<date>" 
    And User see Tax Center "<center>"

    Examples: 
      | TestcaseID                    | Description                   | month | click           | ref           | Period   | date       | center |
      | Objection_Appeal_Tax_Payer_08 | Verify Notice details Section | eJan  | btn_JanView_Ass | CT18091200002 | Jan-2018 | 12/09/2018 | ABC    |

  # have to make dynamic
  @TC_09 @Liability @RaiseNotice
  Scenario Outline: Validate the values in Liability table are populated Correctly.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    # And User verify vat libality in table
    And User verify vat libality in table for Assessed FC 
    And User verify vat libality in table for Paid FC
    And User verify vat libality in table for Net Payable FC

    #And User verify Tax assement in Annexure A
    Examples: 
      | TestcaseID                    | Description            | month | click           |
      | Objection_Appeal_Tax_Payer_09 | Verify Liability table | eJan  | btn_JanView_Ass |

  # have to make dynamic
  @TC_10 @TaxAssessment @AnnexureA @RaiseNotice
  Scenario Outline: Validate the Liability calculation table ( Annexure A ) generated Correctly.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    
    And User verify Tax assement in Annexure A for e-Declared (FC)
    And User verify Tax assement in Annexure A for Assessed (FC)
    And User verify Tax assement in Annexure A for Additional Liability (FC)

    Examples: 
      | TestcaseID                    | Description                 | month | click           |
      | Objection_Appeal_Tax_Payer_10 | Verify Annexure A liability | eJan  | btn_JanView_Ass |

  # in complete
  #@TC_10
  @TC_11 @Download @button
  Scenario Outline: Validate the download functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see notice page
    And User click on download button on notice page

    Examples: 
      | TestcaseID                    | Description                   | month | click           |
      | Objection_Appeal_Tax_Payer_11 | Verify download functionality | eJan  | btn_JanView_Ass |

  @TC_12 @Previous @button
  Scenario Outline: Validate the previous button functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see notice page
    And User click on previous button on notice page
    And User navigate to efiling landing screen

    Examples: 
      | TestcaseID                    | Description                           | month | click           |
      | Objection_Appeal_Tax_Payer_12 | Verify  previous button functionality | eJan  | btn_JanView_Ass |

  @TC_13 @Pay @button
  Scenario Outline: Validate the Pay button functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see pay button
    And User click on pay button and navigate to Payement of tax page

    Examples: 
      | TestcaseID                    | Description                      | month | click           |
      | Objection_Appeal_Tax_Payer_13 | Verify  Pay button functionality | eJan  | btn_JanView_Ass |

  @TC_14 @Object @button
  Scenario Outline: Validate the Object button functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User see Object button
    And User click on Object button and navigate to Objection and Appeal case screen

    Examples: 
      | TestcaseID                    | Description          | month | click           |
      | Objection_Appeal_Tax_Payer_14 | Verify object button | eFeb  | btn_FebView_Ass |

  @TC_15 @Object @Appel @Screen @UI
  Scenario Outline: Validate the UI of Objection and Appeal case screen Page.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User validate UI

    Examples: 
      | TestcaseID                    | Description               | month | click           |
      | Objection_Appeal_Tax_Payer_15 | Verify the UI of the Page | eFeb  | btn_FebView_Ass |

  @TC_16 @PeriodLabel
  Scenario Outline: Validate Period Label.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User validate period field

    #for january
    Examples: 
      | TestcaseID                    | Description         | month | click           |
      | Objection_Appeal_Tax_Payer_16 | Verify period label | eFeb  | btn_FebView_Ass |

  @TC_17 @AssessmentId
  Scenario Outline: Validate the Assessment Id Field.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    # assement id will auto generated
    And User see Assessement id "<assement>" on notice
    And User click on Object button and navigate to Objection and Appeal case screen
    And User validate assement id "<id>" on cases page

    # check id
    Examples: 
      | TestcaseID                    | Description          | month | click           | assement      | id            |
      | Objection_Appeal_Tax_Payer_17 | Verify assessment id | eFeb  | btn_FebView_Ass | CT18091200003 | CT18091200003 |

  @TC_18 @ObjectionType
  Scenario Outline: Validate the Objection Type.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User click on Objection Type and select "<list>"
    And User verify selected objection type "<verify>"
    And User click on Objection Type and select "<list2>"
    And User verify selected objection type "<verify2>"

    Examples: 
      | TestcaseID                    | Description          | month | click           | list                    | verify     | list2                     | verify2      |
      | Objection_Appeal_Tax_Payer_18 | Verify ObjectionType | eFeb  | btn_FebView_Ass | drp_Objection_Assesment | Assessment | drp_Objection_Reassesment | Reassessment |

  @TC_19 @TitleField
  Scenario Outline: Validate the Title field.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User click on title on objection page
    And User enter data "<data>" in title for objection page
    And User click on submit button on notice page and see message "<message>"
    And User click on title on objection page
    And User again enter data "<data1>" in title for objection page
    And User click on submit button

    Examples: 
      | TestcaseID                    | Description                 | month | click           | data                                   | data1                                  | message                  |
      | Objection_Appeal_Tax_Payer_19 | Verify TitleField blank     | eFeb  | btn_FebView_Ass |                                        | Objection against re-assessment notice | Title field is required. |
      | Objection_Appeal_Tax_Payer_20 | Verify TitleField with data | eFeb  | btn_FebView_Ass | Objection against re-assessment notice | Objection against re-assessment notice |                          |

  @TC_20 @Description
  Scenario Outline: Validate the Description field.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User click on description field
    And User enter number "<number>" and check
    And User enter alphabets "<alphabets>" and check
    And User enter special character "<special>" aned checks

    Examples: 
      | TestcaseID                    | Description        | month | click           | number            | alphabets                        | special        |
      | Objection_Appeal_Tax_Payer_21 | Verify Description | eFeb  | btn_FebView_Ass | 25375123761547615 | Notice raise by you is incorrect | -$%#^%$^@$#^%# |

  # file upload at lase remaining
  @TC_21 @FilUpload
  Scenario Outline: Validate the File Upload functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User click on choose file
    And User choose file which is not supported and verify validation message "<message>"
    And User click on choose file
    And User upload file  which is more than 2 mb and verify message"<mess>"
    And User click on choose file
    And User choose file which is supported

    # select another file than replace it
    Examples: 
      | TestcaseID                    | Description      | month | click           |
      | Objection_Appeal_Tax_Payer_22 | Verify FilUpload | eFeb  | btn_FebView_Ass |

  @TC_22 @Cancel @button
  Scenario Outline: Validate Cancel button functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User click on cancel button on notice page
    And User navigate to Notice Of Assessment Page

    Examples: 
      | TestcaseID                    | Description          | month | click           |
      | Objection_Appeal_Tax_Payer_23 | Verify Cancel button | eFeb  | btn_FebView_Ass |

  @TC_23 @Submit @button
  Scenario Outline: Validate Submit button functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    
    And User click on Object button
    #And User click on Object button and navigate to Objection and Appeal case screen
    
    
     And User click on dropdown and select "<ObjectionType>"
    
    And User enter title "<title>"
    And User enter description "<description>"
    
    
   # And User click on Objection Type and select "<list>"
    #And User click on title on objection page
    #And User enter data "<data>" in title for objection page
    #And User click on description field
    #And User enter description in object "<details>"
    
#    And User click on submit button on notice page

    Examples: 
      | TestcaseID                    | Description          | month | click           | ObjectionType           | title                                   | description                          |
      | Objection_Appeal_Tax_Payer_24 | Verify submit button | eFeb  | btn_FebView_Ass | drp_Objection_Assesment | Objection against re-assessment notice | Notice raise by you is incorrect |

  @TC_24 @Open @Status
  Scenario Outline: Validate Open status.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on Cases Tab
    And User click on button which is open status
    And User see on objection page current state is open

    Examples: 
      | TestcaseID                    | Description        | month | click           |
      | Objection_Appeal_Tax_Payer_25 | Verify open status | eFeb  | btn_FebView_Ass |

  @TC_25 @UnderReveiw @Status
  Scenario Outline: Validate Under Reveiw status.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Cases Tab
    And User click on search issue and type "<referanceId>"
    And User see status as under review

    #And User logout from tax payer portal
    # need to login as ketan.prajapati
    #And User login in internal portal
    #And User click on filter by "<filter>"
    #And User type case id "<type>"
    #And User click on search button
    #And User click on manage drop down and click on view
    #And User click on Next Status drop down
    #And User click on status "<status>"
    #And User click on Under review
    #And User click on submit button
    #And User logout from internal portal
    #And User login in tax payer portal "<username>" "password>"
    #And User click on Cases Tab
    #And User click on search issue and type "<referanceId>"
    #And User see status as under review
    Examples: 
      | TestcaseID                    | Description                | month | click           | referanceId     |
      | Objection_Appeal_Tax_Payer_26 | Verify under review status | eMar  | btn_MarView_Ass | O18091200000002 |

  #  | TestcaseID                    | Description               | month | click           | filter  | type            | username                   | password   | referanceId     | status                 |
  #  | Objection_Appeal_Tax_Payer_01 | Verify the UI of the Page | eJan  | btn_JanView_Ass | Case Id | O18090700000005 | jamesbond07@mailinator.com | franky@123 | O18090700000005 | txt_Select_UnderReview |
  @TC_26 @InformationRequested @Status
  Scenario Outline: Validate Information Requested Status.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Cases Tab
    And User click on search issue and type "<referanceId>"
    And User see status as Information Requested
    And User click on button Information Requested
    And User see officer comment "<officerComment>"

    #And User logout from tax payer portal
    #And User login in internal portal
    #And User click on filter by "<filter>"
    #And User type case id "<type>"
    #And User click on search button
    #And User click on manage drop down and click on view
    #And User click on Next Status drop down
    #And User click on status "<status>"
    #And User click on comment section
    #And User enter comment "<comment>"
    #And User click on Under review
    #And User click on submit button
    #And User logout from internal portal
    #And User login in tax payer portal "<username>" "password>"
    #And User click on Cases Tab
    #And User click on search issue and type "<referanceId>"
    #And User see status as Information Requested
    #And User click on button Information Requested
    #And User see officer comment "<officerComment>"
    Examples: 
      | TestcaseID                    | Description                          | month | click           | referanceId     |
      | Objection_Appeal_Tax_Payer_27 | Verify  Information Requested Status | eApr  | btn_AprView_Ass | O18091200000003 |

  # | TestcaseID                    | Description               | month | click           | filter  | type            | username                   | password   | referanceId     | status                | comment                               | officerComment                        |
  # | Objection_Appeal_Tax_Payer_01 | Verify the UI of the Page | eJan  | btn_JanView_Ass | Case Id | O18090700000005 | jamesbond07@mailinator.com | franky@123 | O18090700000005 | Information Requested | Need more information about objection | Need more information about objection |
 
  @TC_27 @Close @Status
  Scenario Outline: Validate Close Status.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Cases Tab
    And User click on search issue and type "<referanceId>"
    And User see status as closed

    #And User see officer comment "<officerComment>"
    #And User logout from tax payer portal
    #And User login in internal portal
    #And User click on filter by "<filter>"
    #And User type case id "<type>"
    ##And User click on search button
    #And User click on manage drop down and click on view
    #And User click on Next Status drop down
    #And User click on status "<status>"
    #And User click on comment section
    #And User enter comment "<comment>"
    #And User click on submit button
    #And User logout from internal portal
    #And User login in tax payer portal "<username>" "password>"
    #And User click on Cases Tab
    #And User click on search issue and type "<referanceId>"
    #And User see status as closed
    #And User see officer comment "<officerComment>"
    Examples: 
      | TestcaseID                    | Description          | month | click           | referanceId     |
      | Objection_Appeal_Tax_Payer_28 | Verify closed status | eApr  | btn_AprView_Ass | O18091200000003 |

  # | TestcaseID                    | Description               | month | click           | filter  | type            | username                   | password   | referanceId     | status | comment                                            | officerComment                                     |
  # | Objection_Appeal_Tax_Payer_01 | Verify the UI of the Page | eJan  | btn_JanView_Ass | Case Id | O18090700000005 | jamesbond07@mailinator.com | franky@123 | O18090700000005 | close  | Valid information provided hence closing the case. | Valid information provided hence closing the case. |
  # here used another month assesement
  @TC_28 @Reject @Status
  Scenario Outline: Validate Reject status
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Cases Tab
    And User click on search issue and type "<referanceId>"
    And User see status as rejected

    #And User see officer comment "<officerComment>"
    #And User logout from tax payer portal
    #And User login in internal portal
    #And User click on filter by "<filter>"
    #And User type case id "<type>"
    #And User click on search button
    #And User click on manage drop down and click on view
    #And User click on Next Status drop down
    #And User click on status "<status>"
    #And User click on comment section
    #And User enter comment "<comment>"
    #And User click on submit button
    #And User logout from internal portal
    #And User login in tax payer portal "<username>" "password>"
    #And User click on Cases Tab
    #And User click on search issue and type "<referanceId>"
    #And User see status as rejected
    #And User see officer comment "<officerComment>"
    Examples: 
      | TestcaseID                    | Description          | month | click           | referanceId     |
      | Objection_Appeal_Tax_Payer_29 | Verify reject status | eMay  | btn_MayView_Ass | O18091200000004 |

  #| TestcaseID                    | Description               | month | click   | filter  | type | username                   | password   | referanceId | status | comment                                            | officerComment                                     |
  #| Objection_Appeal_Tax_Payer_01 | Verify the UI of the Page | eMay  | btn_JanView_Ass | Case Id |      | jamesbond07@mailinator.com | franky@123 |             | reject | Invalid information hence rejecting the objection. | Invalid information hence rejecting the objection. |
  @TC_29 @Cancel @button @ObjectionDetails
  Scenario Outline: Validate Cancel button functionality on Assessment Objection Details edited page.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on Cases Tab
    And User click on reject button edit page
    #And User click on button which is open status
    And User click on cancel button on notice page
    And User navigate to cases page

    #And User navigate to Objection and Appeal List Page
    Examples: 
      | TestcaseID                    | Description                              | month | click           |
      | Objection_Appeal_Tax_Payer_30 | Verify cancel button on ObjectionDetails | eJan  | btn_JanView_Ass |

  @TC_30 @Submit @button @AssessmentObjection
  Scenario Outline: Validate Submit button functionality on Assessment Objection Details edited page.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Cases Tab
    # And User see status "<status>" and click on it and see button is "<enable/disable>"
    And User click on search issue and type "<status>"
    And User click on open status
    And User see button is disable
    And User click on cancel button
    And User click on search issue and type "<status>"
    And User click on it under review status
    And User see button is disable
    And User click on cancel button
    And User click on search issue and type "<status>"
    And User click on closed status
    And User see button is disable
    And User click on cancel button
    And User click on search issue and type "<status>"
    And User click on Request Information
    And User see button is enabled

    Examples: 
      | TestcaseID                    | Description                                      | status              |
      | Objection_Appeal_Tax_Payer_31 | Verify button disable on open                    | open                |
      | Objection_Appeal_Tax_Payer_32 | Verify button disable on Under review            | Under review        |
     #| Objection_Appeal_Tax_Payer_33 | Verify button disable on closed                  | closed              |
      | Objection_Appeal_Tax_Payer_34 | Verify button enable on open Request Information | Request Information |

  @TC_31 @CaseManagement @UI
  Scenario Outline: Validate the UI of Case management - List
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on Cases Tab
    And User validate UI of cases

    Examples: 
      | TestcaseID                    | Description               | 
      | Objection_Appeal_Tax_Payer_35 | Verify the UI of the Page | 

  @TC_32 @CaseManagement @UI
  Scenario Outline: Validate the search functionality.
    Given User is on Tax Payer portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on VAT e-Filing Tab
    And User click on Cases Tab
    And User click on search issue on cases page
    And User enter referance id "<ref>" and check
    And User enter invalid referance id "<invalidRef>" and check
    And User enter valid title "<title>" and check
    And User enter invalid title "<Invalidtitle>" and check

    Examples: 
      | TestcaseID                    | Description                | ref             | invalidRef | title            | Invalidtitle |
      | Objection_Appeal_Tax_Payer_36 | Verify search functionalit | O18091200000004 |    4156465 | payment for maqy | asd          |
# 33 to discuss      
