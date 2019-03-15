Feature: Verify the IT support Users functionality

  @TC_ITSU_06_010_013
  Scenario Outline: Validate the open Issue from the Issue list - ituser
    Given user should enter Username "<username>" and Password "<password>"
    And user clicks on Search "<Search>" textbox and enters the text
    Then user clicks on edit icon
    And user selects option from Priority dropdown "<Priority>"
    And user selects option from Next Status dropdown "<Next_Status>"
    And user selects option from Assign To Group dropdown
    #And user enters comments "<comments>" in Communication
    Then click on download icon on any file
    Then file should get the download
    #And user clicks on File Uplod
    #And user selects the file
    Then click on IT support submit button

    #Then user clicks on logout icon
    Examples: 
      | TC_ITSAid         | username                | password | Priority | Next_Status | Search    | comments      |
      | TCITSU_06_010_013 | kalpesha@mailinator.com | Test@123 | High     | In Progress | Automation Support 2 |Issue Updated |
      | TCITSU_06_010_013 | kalpesha@mailinator.com | Test@123 | Medium   | On - Hold   | Automation Support 2| Issue Updated |
      | TCITSU_06_010_013 | kalpesha@mailinator.com | Test@123 | Low      | Resolved    | Automation Support 2 | Issue Updated |

  @TC_ITSU_07_08_09_14_16_17
  Scenario Outline: Verify the labels/contents for Edit screen - ituser
    Given user should enter Username "<username>" and Password "<password>"
    Then user clicks on edit icon
    #Then verify the issue type,title,current status,description
    Then click on IT support submit button

    Examples: 
      | TC_ITSAid    | username                | password |
      | TCITSU_07_08 | kalpesha@mailinator.com | Test@123 |

  #############################################################################
  ###############							User2															###############
  #############################################################################

###################
########## The below Scenario has been commented for user 2 ---Rohitpatil when Rohit patil user gets working
#####

  #@TC_ITSU2_05_06
  #Scenario Outline: Validate the open Issue from the Issue list - ituser
    #Given user should enter Username "<username>" and Password "<password>"
    #And user clicks on Search "<Search>" textbox and enters the text
    #Then user clicks on edit icon
    #And user selects option from Priority dropdown "<Priority>"
    #And user selects option from Next Status dropdown "<Next_Status>"
    #And user selects option from Assign To Group dropdown
    #And user enters comments "<comments>" in Communication
    #Then click on download icon on any file
    #Then file should get the download
    #And user clicks on File Uplod
    #And user selects the file
    #Then click on IT support submit button
#
    #Then user clicks on logout icon
    #Examples: 
      #| TC_ITSAid     | username                | password | Priority | Next_Status | Search                   | comments      |
      #| TCITSU2_05_06 | kalpesha@mailinator.com | Test@123 | High     | In Progress | 120841Testing IT support | Issue Updated |
      #| TCITSU2_05_06 | kalpesha@mailinator.com | Test@123 | Medium   | On - Hold   | 120841Testing IT support | Issue Updated |
      #| TCITSU2_05_06 | kalpesha@mailinator.com | Test@123 | Low      | Resolved    | 120841Testing IT support | Issue Updated |
#
  #@TC_ITSU2_09
  Scenario Outline: Validate the User is able to search with valid and invalid data - ituser
    Given user should enter Username "<username>" and Password "<password>"
    And user clicks on Search "<Search>" textbox and enters the text
    Then click on cross button

    Examples: 
      | TC_ITSAid  | username                | password | Search                   |
      | TCITSU2_09 | kalpesha@mailinator.com | Test@123 | 1444Testing IT support   |
      | TCITSU2_09 | kalpesha@mailinator.com | Test@123 | 121954Testing IT support |
