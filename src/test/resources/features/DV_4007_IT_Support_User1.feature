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
      | TC_ITSAid         | username                | password | Priority | Next_Status | Search                   | comments      |
      | TCITSU_06_010_013 | kalpesha@mailinator.com | Test@123 | High     | In Progress | 213129Testing IT support | Issue Updated |
      | TCITSU_06_010_013 | kalpesha@mailinator.com | Test@123 | Medium   | On - Hold   | 213129Testing IT support | Issue Updated |
      | TCITSU_06_010_013 | kalpesha@mailinator.com | Test@123 | Low      | Resolved    | 213129Testing IT support | Issue Updated |

  @TC_ITSU_07_08
  Scenario Outline: Verify the labels/contents for Edit screen - ituser
    Given user should enter Username "<username>" and Password "<password>"
    Then user clicks on edit icon
    #Then verify the issue type,title,current status,description
    Then click on IT support submit button

    Examples: 
      | TC_ITSAid    | username                | password |
      | TCITSU_07_08 | kalpesha@mailinator.com | Test@123 |

  @TC_ITSU_09
  Scenario Outline: Validate the Issue list occurred while opened any Issue - ituser
    Given user should enter Username "<username>" and Password "<password>"
    Then user clicks on edit icon

    Examples: 
      | TC_ITSAid | username                | password |
      | TCITSU_09 | kalpesha@mailinator.com | Test@123 |

  @TC_ITSU_14
  Scenario Outline: Validate the user can  view the issue created by other user - ituser
    Given user should enter Username "<username>" and Password "<password>"
    Then user clicks on edit icon

    Examples: 
      | TC_ITSAid | username                | password |
      | TCITSU_14 | kalpesha@mailinator.com | Test@123 |

  @TC_ITSU_16
  Scenario Outline: Validate the color code which shows the Current Status of the issues
    Given user should enter Username "<username>" and Password "<password>"
    Then user clicks on edit icon

    Examples: 
      | TC_ITSAid | username                | password |
      | TCITSU_16 | kalpesha@mailinator.com | Test@123 |

  @TC_ITSU_17
  Scenario Outline: Validate the public and private comment in communication section
    Given user should enter Username "<username>" and Password "<password>"
    Then user clicks on edit icon

    Examples: 
      | TC_ITSAid | username                | password |
      | TCITSU_17 | kalpesha@mailinator.com | Test@123 |

  #############################################################################
  ###############							User2															###############
  #############################################################################
  @TC_ITSU2_05_06
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
      | TC_ITSAid     | username                | password | Priority | Next_Status | Search                   | comments      |
      | TCITSU2_05_06 | kalpesha@mailinator.com | Test@123 | High     | In Progress | 120841Testing IT support | Issue Updated |
      | TCITSU2_05_06 | kalpesha@mailinator.com | Test@123 | Medium   | On - Hold   | 120841Testing IT support | Issue Updated |
      | TCITSU2_05_06 | kalpesha@mailinator.com | Test@123 | Low      | Resolved    | 120841Testing IT support | Issue Updated |

  @TC_ITSU2_09
  Scenario Outline: Validate the User is able to search with valid and invalid data - ituser
    Given user should enter Username "<username>" and Password "<password>"
    And user clicks on Search "<Search>" textbox and enters the text
    Then click on cross button

    Examples: 
      | TC_ITSAid  | username                | password | Search                   |
      | TCITSU2_09 | kalpesha@mailinator.com | Test@123 | 1444Testing IT support   |
      | TCITSU2_09 | kalpesha@mailinator.com | Test@123 | 121954Testing IT support |
