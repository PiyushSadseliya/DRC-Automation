Feature: User is on internal Portal for objection and appeal

  @TC_01 @UI @CaseManagement
  Scenario Outline: Verify the UI of Case Management list page.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User see UI of case management

    Examples: 
      | TestcaseID                          | Description                      |
      | Objection_Appeal_internal_portal_01 | Verify the UI of case management |

  @TC_02 @UI @CaseManagement
  Scenario Outline: Verify the UI of Objection page.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User see UI of Objection page

    Examples: 
      | TestcaseID                          | Description                      |
      | Objection_Appeal_internal_portal_02 | Verify the UI of case management |

  @TC_03 @UI @CaseManagement
  Scenario Outline: Verify the Filter by Functionality based on filter option Case Type ,Status Priority, Tax Officer
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User user click on case type "<button>"
    And User click on search button
    And User see search result "<result>"
    And User again click on filter by "<againClick>"
    And User type "<status>" in type here and click on search
    And User see entered status "<enteredStatus>"
    And User type "<statusU>" in type here and click on search
    And User see entered status "<enteredStatusU>"
    And User type "<statusI>" in type here and click on search
    And User see entered status "<enteredStatusI>"
    And User type "<statusR>" in type here and click on search
    And User see entered status "<enteredStatusR>"
    
    And User type "<statusC>" in type here and click on search
    And User see entered status "<enteredStatusC>"
    
    And User again click on filter by "<priority>"
    And User type "<prioMedium>" in type here and click on search
    And User see entered priority "<PriorityM>"
    And User type "<prioHigh>" in type here and click on search
    And User see entered priority "<PriorityH>"
    And User type "<prioLow>" in type here and click on search
    And User see entered priority "<PriorityL>"
    And User again click on filter by "<officer>"
    And User type "<offname>" in type here and click on search
    And User see entered name "<name>"

    Examples: 
      | TestcaseID                          | Description      | filter       | button           | result               | againClick       | status | enteredStatus | statusU      | enteredStatusU | statusI             | enteredStatusI      | statusR              | enteredStatusR       | statusC | enteredStatusC | priority           | prioMedium | PriorityM | prioHigh | PriorityH | prioLow | PriorityL | officer           | offname | name   |
      | Objection_Appeal_internal_portal_03 | Verify Filter by | drp_CaseType | txt_Obj_A_Appeal | Objection and appeal | drp_Status_Click | open   | Open          | Under Review | Under Review   | Request Information | Request Information | Request Reassessment | Request Reassessment | Close   | Close          | drp_Priority_Click | Medium     | Medium    | High     | High      | Low     | Low       | drp_Officer_Click | Laxman  | Laxman |

  @TC_04 @Date @filteration @functionality
  Scenario Outline: Validate the Date filteration functionality on the case management page
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User Select From date on case management
    And User Select To date on case management
    And User click on search button
    And User see date on case management "<date>"

    Examples: 
      | TestcaseID                          | Description                            | date     |
      | Objection_Appeal_internal_portal_04 | Verify date filteration functionalityt | 09/06/18 |

  @TC_05 @Pagination @functionality
  Scenario Outline: Validate the Pagination button functionality
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And user click on the page "<ClickPage>" and check page"<CheckPage>"
    Then User see Result

    Examples: 
      | TestcaseID                          | Description                            | ClickPage    | CheckPage      |
      | Objection_Appeal_internal_portal_05 | click last page and check next page    | btn_LastFX   | btn_NextFX     |
      | Objection_Appeal_internal_portal_06 | click last and check previous page     | btn_LastFX   | btn_PreviousFX |
      | Objection_Appeal_internal_portal_07 | click next and check previous page     | btn_NextFX   | btn_PreviousFX |
      | Objection_Appeal_internal_portal_08 | click next and check first page        | btn_NextFX   | btn_FirstFX    |
      | Objection_Appeal_internal_portal_09 | click 1st page and check previous page | btn_First1FX | btn_PreviousFX |
      | Objection_Appeal_internal_portal_10 | click right arrow  and check 1st page  | btn_First1FX | btn_FirstFX    |

  # here agening will increase by day
  @TC_06 @caseType,Agening...
  Scenario Outline: Validate the Case Type, Tax Payer, Creation Date, ageing(Days) on the Case Management Page.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User see case type "<caseType>"
    And User see TaxPayer "<taxpayer>"
    And User see creation date "<date>"
    And User see ageing "<agening>"

    Examples: 
      | TestcaseID                          | Description                         | filter           | id              | caseType             | taxpayer | date     | agening |
      | Objection_Appeal_internal_portal_11 | click last page and check next page | drp_CaseID_Click | O18091400000003 | Objection and appeal | James    | 09/14/18 |       1 |

  # if object is created and it is assign automatically
  @TC_07 @taxOfficer @Assign
  Scenario Outline: Validate that tax officer assignment is done based on province, city.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User see TaxOfficer "<officer>"

    Examples: 
      | TestcaseID                          | Description              | filter           | id              | officer |
      | Objection_Appeal_internal_portal_12 | Verify taxOfficer Assign | drp_CaseID_Click | O18091400000002 | Ritesh  |

  @TC_08 @Priority @functionality
  Scenario Outline: Validate the priority is set correctly for the individual tax payer
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on priority
    And User select priority "<priority>"
    And User click on submit button
    And User see validation message for changing priority
    And User click on previous button
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User see priority is changed "<changed>"

    Examples: 
      | TestcaseID                          | Description                   | filter           | id              | priority      | changed |
      | Objection_Appeal_internal_portal_13 | verify Priority functionality | drp_CaseID_Click | O18091400000002 | drp_P_Medium  | Medium  |

  @TC_09 @Reassign @functionality
  Scenario Outline: Validate the Reassign option functionality under view column.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on officer name and type "<type>" and click on search
    And User click on manage dropdown on case management and click on reassign
   And User click on officer list and click on "<officername>"
    And User click on right tick
    And User see validation mesage "<message>"
    And User again click on manage dropdown on case management and click on reassign
    And User again click on officer list and select "<select>"
    And User clik on wrong tick
    And User see officer is not changed "<notChanged>"

    Examples: 
      | TestcaseID                          | Description                   | type   | officername   | message                    | select        | notChanged |
      | Objection_Appeal_internal_portal_14 | Verify Reassign functionality | Laxman | drp_offRitesh | object updated sucessfully | drp_offLaxman | Ritesh     |

  #10
  @TC_11 @Reject @status
  Scenario Outline: Validate Reject status in the internal portal.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on select action
    And User select reject
    And User click on submit button
    And User logout
    And login in taxpayer portal
    When User Enter Data: "<email>" "<password>"
    And User Clicks on "SignIn"
    And User click on Cases Tab
    And User click on search issue and type "<referanceId>"
    And User see status as rejected

    Examples: 
      | TestcaseID                          | Description                   | filter           | id              | email                      | password   | referanceId     |
      | Objection_Appeal_internal_portal_15 | Verify Reassign functionality | drp_CaseID_Click | O18091000000003 | jamesbond07@mailinator.com | franky@123 | O18091400000003 |

  #O18091400000003 mine above one is for testing
  # when click on object unique id will created
  # used dec 2018
  @TC_12 @CaseID,TaxpayerName,NITVA,date,Period
  Scenario Outline: Validate the "Case ID","Taxpayer name", "NITVA" , "date", "Period" on the objection page for the particular tax payer.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see case id "<caseid>"
    And User see NITVA "<nitva>"
    And User see period "<period>"
    And User see name "<name>"
    And User see date "<date>"

    Examples: 
      | TestcaseID                          | Description                   | filter           | id              | caseid        | nitva             | period | name   | date       |
      | Objection_Appeal_internal_portal_16 | Verify case id name and nitva | drp_CaseID_Click | O18091400000002 | CT18091400008 | 20180914013633474 |        | 1Rivet | 09/14/2018 |

  # manually created till objection -> unique no will generated after objection
  # used dec 2018
  @TC_13 @CaseID,TaxpayerName,NITVA,date,Period
  Scenario Outline: Validate the Objection Type, Reference ID,Title,Description,file upload for the particular tax payer when the objection is made against the particular period.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
     And User click on search button
    And User click on manage drop down and click on view
   
  #  And User see Objection Type "<objType>"
  #  And User see Ref ID "<ref>"
  #  And User see Title "<title>"
    And User see Description "<Des>"
  #  And User see file upload "<upload>"

    Examples: 
      | TestcaseID                          | Description                   | filter           | id              | objType    | ref             | title                 | Des                   | upload |
      | Objection_Appeal_internal_portal_17 | Verify objection page details | drp_CaseID_Click | O18091400000002 | Assessment | O18091400000002 | object for assessment | object for assessment |        |

  #14 remaining
  @TC_15 @Assigned @To @functionality
  Scenario Outline: Validate the Assigned to dropdown functionality.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User click on Assign to
    And User select officer "<officer>"
    And User click on submit button
    And User see validation message

    Examples: 
      | TestcaseID                          | Description                             | officer          |
      | Objection_Appeal_internal_portal_18 | Verify assigned dropdown funbctionality | drp_officerKirti |

  # cross button to ask
  @TC_16 @Attachments @comment @section
  Scenario Outline: Validate the Attachments and Comment Section on objection page.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User click on attachment icon
    And User upload the file and click on upload button
    And User see upload message
    And User click on download button and verify download file
    And User click on comment section on Attachments and comment section
    And User type comment "<comment>"
    And User click on add comment button
    And User see comment added message

    Examples: 
      | TestcaseID                          | Description                   |comment    |
      | Objection_Appeal_internal_portal_19 | Verify cancel   functionality |in valid doc|

  @TC_17 @Cancel @functionality
  Scenario Outline: Validate the Cancel button functionality.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User click on cancel button on objection page
    And User navigate to Case Management list page

    Examples: 
      | TestcaseID                          | Description                 |
      | Objection_Appeal_internal_portal_20 | Verify cancel functionality |

  @TC_18 @AddComment @button
  Scenario Outline: Validate the Add Comment button functionality.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User click on comment section on Attachments and comment section
    And User type comment "<comment>"
    And User click on add comment button
    And User see comment added message

    Examples: 
      | TestcaseID                          | Description                                    | comment                            |
      | Objection_Appeal_internal_portal_21 | Verify navigation of Transaction Details  page | please give additional information |

  @TC_19 @TransactionDetails
  Scenario Outline: Validate the functionality of Transaction Details button.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User click on Transaction Detail button
    And User navigate to Statement of transaction page

    Examples: 
      | TestcaseID                          | Description                                    |
      | Objection_Appeal_internal_portal_22 | Verify navigation of Transaction Details  page |

  # neeed to discuss
  @TC_20 @Object @and @cancel
  Scenario Outline: Validate that if user objects for the particular assessment and does not submits the objection then the objection is getting listed in case management or not.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on Logout
    And login in taxpayer portal
    When User Enter Data: "<email>" "<password>"
    And User Clicks on "SignIn"
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view
    And User click on Object button and navigate to Objection and Appeal case screen
    And User click on dropdown
    And User select "<ObjectionType>"
    And User click on title on objection page
    And User enter data "<data>" in title for objection page
    And User click on description field
    And User enter number "<number>" and check
    And User click on cancel button
    And User navigate to Notice Of Assessment Page

    Examples: 
      | TestcaseID                          | Description                                   | email              | password   | month | click           | data                     | number | ObjectionType |
      | Objection_Appeal_internal_portal_23 | Verify user object and click on cancel button | ironman@0ne0ak.com | franky@123 | eJan  | btn_JanView_Ass | objection on assessement | 123456 | assesement    |

  @TC_21 @previous @functionality
  Scenario Outline: Validate the previous button functionality.
    Given User is on Internal portal Objection and Appeal "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on manage drop down and click on view
    And User click on previous button on objection page
    And User navigate to Case Management list page

    Examples: 
      | TestcaseID                          | Description                   |
      | Objection_Appeal_internal_portal_24 | Verify previous functionality |
