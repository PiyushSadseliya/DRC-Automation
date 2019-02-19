Feature: Verify the IT support Admin functionality

  @TC_ITSA_01_04
  Scenario Outline: validate the IT support sub menu functionality - Internal portal
    Given user must be logged in and should be on dashboard
    And click on the IT support Sub menu
    #And user click on click here link
    And user click on Add button
    And enter the required details "<issue>" "<title>"
    And User enter in description frame
    And Enter the description "<description>"
    And Add the comment in comment section "<comments>"
    And click on attach icon choose file section window is displayed
    #And select the files "<file>"
    #Then click on cross button
    And select the files "<file>"
    Then click on IT support submit button
    Then validation message is displayed "<message>"

    Examples: 
      | TC_ITSAid    | issue | title | description                                         | comments     | file        | message                    |
      | TCITSA_01_04 | Bug   | Issue | The enviroment for IT support windows 10 and Mac OS | Uploadedfile | capture.pdf | Record Added Successfully. |


  @TC_ITSA_07_08
  Scenario Outline: validate the create issue functionality with description field is blank ketan.prajapati	
    And user click on Add button
    And enter the required details "<issue>" "<title>"
    Then click on IT support submit button
    Then validation message is displayed "<message>"

    Examples: 
      | TC_ITSAid | issue       | title        | description | message                       |
      | TCITSA01  | Enhancement | test support |             | Description field is required |

  @TC_ITSA_09_10
  Scenario Outline: validate the create issue functionality with blank mandatory fields and multiple click event on the submit button - itadminuser
    And user click on Add button
    Then user do not enter anything or select anything
    Then click on IT support submit button
    Then validation message is displayed "<message>"

    Examples: 
      | TC_ITSAid      | message                                                                        |
      | TCITSATCITSA01 | Title field is required Description field is required Please select Issue Type |

  @TC_ITSA_011
  Scenario Outline: Validate the cancel button functionality - itadminuser
    And user click on Add button
    And enter the required details "<issue>" "<title>"
    Then click on cancel button

    Examples: 
      | TC_ITSAid | issue | title        |
      | TCITSA01  | Bug   | Test support |

  @TC_ITSA_012
  Scenario Outline: Validate the search functionality of the issue with valid data and invalid data - itadminuser
    Then click on search box
    And enter any text on the dashboard page "<searchelement>"
    Then click on cross button or clear the filter given in the textbox for cancel the search

    Examples: 
      | TC_ITSAid | searchelement            |
      | TCITSA01  | Nescso                   |
      | TCITSA02  | 193308Testing IT support |

  @TC_ITSA_013_014
  Scenario Outline: verify the labels/ content for edit screen and functionality - itadminuser
    Then click on edit icon of any issue from the issue grid
    Then user should redirected to edit screen
    Then verify the issuetype, title, currentstatus, description, referid
    #And Enter the comments "<comments>"
    #And click on attach icon choose file section window is displayed
    #And select the files "<file>"
    Then click on IT support submit button
    Then validation message is displayed "<message>"

    Examples: 
      | TC_ITSAid | comments     | file        | message                      |
      | TCITSA01  | File updated | capture.pdf | Record Updated Successfully. |


  @TC_ITSA_017_018
  Scenario Outline: validation the communication functionality - itadminuser
    Then click on edit icon of any issue from the issue grid
    #And Enter the comments "<comments>"
    #And click on attach icon choose file section window is displayed
    #And select the files "<file>"
    Then click on download icon on any file
    Then file should get the download
    Then click on IT support submit button
    Then validation message is displayed "<message>"

    Examples: 
      | TC_ITSAid | comments     | file        | message                      |
      | TCITSA01  | File updated | capture.pdf | Record Updated Successfully. |
