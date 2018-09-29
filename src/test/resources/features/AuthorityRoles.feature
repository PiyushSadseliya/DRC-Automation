#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: As a DGI ADMIN I want to assign roles to the officer

  @tc1
  Scenario Outline: The DGI Admin add creates a new user using 1Authority Login portal
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Add Roles
    And Enters Name "<name>"and description "<desc>"
    Then Click on button"add"
    And Message "<msg>" should be displayed
    And listed below searchbbox

    Examples: 
      | Test Case ID     | username | password | name        | desc           | msg                     |
      | DRC_ATC_Roles_01 |          |          | Super Admin | has all rights | Role Added Successfully |

  @tc2
  Scenario Outline: The DGI Admin add creates a new user using 1Authority Login portal
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Add Roles
    And Enters Name "<name>"and description "<desc>"
    Then Click on button"save"
    And Message "<msg>" should be displayed

    Examples: 
      | Test Case ID     | username | password | name                                                                                                                                                                                                                                                      | desc                                                                                                                                                                                                                                                                   | msg                                                 |
      | DRC_ATC_Roles_02 |          |          |                                                                                                                                                                                                                                                           | has all rights                                                                                                                                                                                                                                                         |                                                     |
      | DRC_ATC_Roles_03 |          |          | Super Admin                                                                                                                                                                                                                                               | has all rights                                                                                                                                                                                                                                                         | Name is Required                                    |
      | DRC_ATC_Roles_04 |          |          | abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ § $%& /() =?* <>  ; ²³~ @`´ ©«» ¤¼× {} abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !§ $%& /() =?*<> ; ²³~ @`´ ©«» ¤¼× {} abc def ghi jkl mno pqrs tfdgfgdfguv | has all rights                                                                                                                                                                                                                                                         | Name should not be more than 50 characters.         |
      | DRC_ATC_Roles_05 |          |          |                                                                                                                                                                                                                                                           | abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !§ $%& /() =?* <>  ²³~ @`´ ©«» ¤¼× {} abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !§ $%& /() =?* <>  ; ²³~ @`´ ©«» ¤¼× {} abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JK | Description should not be more than 150 characters. |
      | DRC_ATC_Roles_08 |          |          |                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                        | Name is Required                                    |

  @tc3
  Scenario Outline: The DGI Admin dont want to create new user using 1Authority Login portal
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Add Roles
    When Enters Name "<name>"and description "<desc>"
    Then Click on button"<button>"

    Examples: 
      | Test Case ID     | username | password | name   | desc       | button |
      | DRC_ATC_Roles_06 |          |          | Admin1 | all rights | remove |
      | DRC_ATC_Roles_07 |          |          | Admin2 | all rights | cancel |

  @tc5
  Scenario Outline: The DGI Admin can search the added roles using Seatch box
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Enters name"<name>" in search box
    Then searched name should be visible as the result.

    Examples: 
      | Test Case ID     | username | password | name |
      | DRC_ATC_Roles_09 |          |          |      |

  @tc5
  Scenario Outline: The DGI Admin search for not added roles using Search box
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Enters name"<name>" in search box
    Then Message "<msg>" should be displayed below the table

    Examples: 
      | Test Case ID     | username | password | name | msg                        |
      | DRC_ATC_Roles_10 |          |          |      | Searched Record Not Found. |

  @tc5
  Scenario Outline: The DGI Admin search for not added roles using Search box
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Enters name"<name>" Starting letter in search box
    Then Records containing Starting letter should be displayed

    Examples: 
      | Test Case ID     | username | password | name |
      | DRC_ATC_Roles_11 |          |          |      |

  @tc6
  Scenario Outline: The DGI Admin has added some roles record previously and want to update it
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks roles name "<name>" from the search list
    And Change to role name to"<newname>" and description to"<newdesc>"
    Then Click on button"update"
    And Message "<msg>" should be displayed
    And Clicks on any roles "<oname>"
    And again Clicks previous changed roles"<newname>" from the search list
    And New name"<newname>" and description "<newdesc>"must be shown.

    Examples: 
      | Test Case ID     | username | password | name | newname | oname | msg                       |
      | DRC_ATC_Roles_12 |          |          |      |         |       | Role Updated Successfully |

  @tc7
  Scenario Outline: The DGI Admin can delete the roles previously added.
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    And Clicks on any roles "<name>"
    Then Click on button"delete"
    And Message "<msg>" should be displayed

    Examples: 
      | Test Case ID     | username | password | name | msg                       |
      | DRC_ATC_Roles_13 |          |          |      | Role Deleted Successfully |

  @tc11
  Scenario Outline: The name should display as ... after name size greater than 25
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Add Roles
    And Enters Name "<name>"and description "<desc>"
    And Check in search box "<name>"
    Then after 25TH character 3 dots should be displayed.

    Examples: 
      | Test Case ID     | username | password | name                          |
      | DRC_ATC_Roles_14 |          |          | or just a note to our sdf sdf |

  @tc12
  Scenario Outline: The name should display as ... after name size greater than 25
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Roles
    Then Click on button"delete"
    Then after deletion of all records msg should be displayed and Delete button should be disabled

    Examples: 
      | Test Case ID     | username | password |
      | DRC_ATC_Roles_15 |          |          |

  @tc15
  Scenario Outline: The DGI admin can create role with same name as previously deleted  one.
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Roles
    And Check in search box "<name>"
    Then Click on button"delete"
    And Click on button"yes"
    And Message "<msg1>" should be displayed
    And Clicks Add Roles again
    And Enters Name "<name>"
    And Click on button"save"
    And Message "<msg2>" should be displayed

    Examples: 
      | Test Case ID     | username | password | name | msg1                    | msg2                      |
      | DRC_ATC_Roles_16 |          |          |      | Role Added Successfully | Role Deleted Successfully |

  @tc16
  Scenario Outline: The DGI admin can edit the details of the new added roles.
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Roles
    And Enters Name "<name>"and description "<desc>"
    Then Click on button"save"
    And Message "<msg1>" should be displayed
    And edits the "<name1>" and desc"<desc1>"
    And Click on button"save"
    And Message "<msg2>" should be displayed

    Examples: 
      | Test Case ID     | username | password | name | desc | msg1                    | msg2                      | name1 | desc1 |
      | DRC_ATC_Roles_17 |          |          |      |      | Role Added Successfully | Role Updated Successfully |       |       |

  @tc18
  Scenario Outline: The DGI admin on edit page cannot add previously inserted records
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Roles
    And Enters Name "<name>"and description "<desc>"
    Then Click on button"save"
    And Message "<msg1>" should be displayed
    And edits the "<name1>" and desc"<desc1>"
    And Click on button"save"
    And Message "<msg2>" should be displayed

    Examples: 
      | Test Case ID     | username | password | name | desc | msg1                    | msg2                      | name1 | desc1 | msg2                               |
      | DRC_ATC_Roles_18 |          |          |      |      | Role Added Successfully | Role Updated Successfully |       |       | Role with this name already exists |

  @tc7
  Scenario Outline: The DGI Admin can delete the roles previously added.
    Given The DGI admin has logged into the Authority Console Management portal with "<username>""<password>"
    And Click on Role Module
    When Clicks Roles
    And Enters Name "<name>"and description "<desc>"
    And Message "<msg1>" should be displayed
    And Click on button"delete"
    Then Click on button"No"
    And records are not deleted
    Examples: 
      | Test Case ID     | username | password | name | desc | msg1 |
      | DRC_ATC_Roles_19 |          |          |      |      |  Role Added Successfully    |
