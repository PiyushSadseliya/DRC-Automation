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
Feature: The DGI Admin can grant the permission to the officer based on their roles

  @tc1
  Scenario Outline: The DGI admin grants permission according to their roles
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Add Permission
    And Enters Permission Name "<name>"
    And Click on Permbutton"add"
    And Message "<msg>" should be displayed in permissions module
    And should be displayed in permission list below search box

    Examples: 
      | Test Case ID           | username | password | name | msg                            |
      | DRC_ATC_Permissions_01 |          |          |      | Permission Added Successfully. |

  @tc2
  Scenario Outline: The DGI admin can edit the details of the new added roles.
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Enters Permission Name "<name>"
    Then Click on Permbutton"save"
    And Message "<msg>" should be displayed in permissions module

    Examples: 
      | Test Case ID     | username | password | name | msg                              |
      | DRC_ATC_Roles_02 |          |          |      | Permission Updated Successfully. |

  @tc3
  Scenario Outline: The DGI admin can add the permissions.
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Add Permission
    And Enters Permission Name "<name>"
    And Click on Permbutton"add"
    And Message "<msg>" should be displayed in permissions module

    Examples: 
      | Test Case ID     | username | password | name                                                                                       | msg2                                        |
      | DRC_ATC_Roles_03 |          |          |                                                                                            | Name is required.                           |
      | DRC_ATC_Roles_04 |          |          | Developer Manager Techlead ceo cfo cto cxo cmo cpo advisior legal manager engineer analyst | Name should not be more than 50 characters. |

  @tc3
  Scenario Outline: The DGI admin can edit the details of the previously added roles.
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    And Selects the permission"<permname>"
    And edits the name"<name>"
    Then Click on Permbutton"add"
    And Message "<msg>" should be displayed in permissions module

    Examples: 
      | Test Case ID     | username | password | permname | name                                                                                       | msg2                                        |
      | DRC_ATC_Roles_05 |          |          | Delete   |                                                                                            | Name is required.                           |
      | DRC_ATC_Roles_06 |          |          | Delete   | Developer Manager Techlead ceo cfo cto cxo cmo cpo advisior legal manager engineer analyst | Name should not be more than 50 characters. |

  @tc4
  Scenario Outline: The DGI admin can edit the details of the previously added roles.
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Add Permission
    Then Enters Permission Name "<name>"
    Then Click on Permbutton"<button>"

    Examples: 
      | Test Case ID     | username | password | name          | button |
      | DRC_ATC_Roles_07 |          |          | Administrator | cancel |
      | DRC_ATC_Roles_08 |          |          | Developer     | remove |

  @tc5
  Scenario Outline: The DGI admin can edit the details of the previously added roles.
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Permbutton"delete"
    And Click on Permbutton"yes"

    Examples: 
      | Test Case ID     | username | password |
      | DRC_ATC_Roles_09 |          |          |

  @tc5
  Scenario Outline: The DGI admin can edit the details of the previously added roles.
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Permbutton"delete"
    And Click on Permbutton"no"

    Examples: 
      | Test Case ID     | username | password |
      | DRC_ATC_Roles_10 |          |          |

  @tc6
  Scenario Outline: The name should display as ... after name size greater than 25
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Add Permission
    Then Enters Permission Name "<name>"
    Then Click on Permbutton"<button>"
    And Check in permission list search box "<name>"
    And after 25TH character 3 dots should be displayed.

    Examples: 
      | Test Case ID     | username | password | name                         |
      | DRC_ATC_Roles_11 |          |          | Hi Permission has been added |

  @tc6
  Scenario Outline: The user should not find Permission which has not been added
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    And Check in permission list search box "<name>"
    Then Message should be displayed below the permission list searchbox"Searched Record Not Found."

    Examples: 
      | Test Case ID     | username | password | name           | msg                        |
      | DRC_ATC_Roles_11 |          |          | sdfsdfsdfsdfsf | Searched Record Not Found. |

  @tc6
  Scenario Outline: The user should find all the list of permission entered in the searchbox
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    And Check in permission list search box "<name>"
    Then the list of all the permission with name containing "<name>" should be listed

    Examples: 
      | Test Case ID     | username | password | name |
      | DRC_ATC_Roles_11 |          |          |      |

  @tc8
  Scenario Outline: The DGI Admin cannot add already existing permission
    Given The DGI admin has logged in the Authority Console Management portal with "<username>""<password>"
    When Click on Permission Module
    Then Click on Add Permission
    Then Enters Permission Name "<name>"
    Then Click on Permbutton"add"
    And Enters Permission Name "<name>"
    And Message "<msg1>" should be displayed below the table

    Examples: 
      | Test Case ID     | username | password | name | msg1                          | msg2                                     |
      | DRC_ATC_Roles_12 |          |          |      | Permission Added Successfully | Permission with this name already exists |
