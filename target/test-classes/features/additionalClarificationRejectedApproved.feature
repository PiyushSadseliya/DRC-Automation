Feature: The user can see the status for the application of NITVA number whether it is Approved,Rejected or needs additional clarification

  @Reject
  Scenario: The user can see the status as "Rejected" for the application of NITVA number when the officer Rejects the application
    Given the officer has Rejected the form and The User is on Dashboard After Successfully login from taxpayer portal
    Then User must see the application Status as Rejected
    And again applies for VAT Registration

  @AdditionalClarification
  Scenario Outline: The user can edit the form after after the officer asks for some clarification with proper comment
    Given the officer Ask for additional clarification in the form and The User is on Dashboard After Successfully login from taxpayer portal
    When user clicks on edit button for clarifying form details
    Then the user is redirected to review and submit page
    And Edits the clarifications details needed respectively
    And Must Reply with the comment along with the documents
    And Can View the document
    And again Submits the form for review to DGI officer

    Examples: 
      | Test Case ID                          | Comment | DocNo | Noofdocumnets | docpath |
      | TC_DRC_ATC_UserRegistration_Status_01 |         |       |               |         |

  @Approve
  Scenario: The user can see the status as "Aprroved" for the application of NITVA number when the officer Approves the application
    Given The DGI officer has approved for NITVA and The User is on Dashboard After Successfully login from taxpayer portal
    Then User must see the application Status as Approved   on the Dashboard
    And Views the NITVA Certificate

  @Deletecleardocument
  Scenario Outline: The user can clear or delete the uploaded document
    Given the officer Ask for additional clarification in the form and The User is on Dashboard After Successfully login from taxpayer portal
    When user clicks on edit button for clarifying form details
    And Must Reply with the comment along with the documents
    And Adds and removesthe document
