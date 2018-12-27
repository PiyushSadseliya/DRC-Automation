$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Manual Assessement Landing Screen",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see manual assessment and assessament list tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on manual assessment",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# And User click on month \"\u003cmonth\u003e\" and check"
    }
  ],
  "line": 13,
  "name": "User click on year \"\u003cYear\u003e\" and check",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And User click on FilterBy \"\u003cFilter\u003e\""
    }
  ],
  "line": 15,
  "name": "User type \"\u003cData\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on search button and check data \"\u003cData\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on manage setting drop down and check drop down list for Reassign and Assess",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on reassign and click on drop down and check list \"\u003cDropdownOfficer\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And User click on FilterBy \"\u003cFilterOfficer\u003e\" and type \"\u003cofficerdata\u003e\" and click on search button"
    }
  ],
  "line": 20,
  "name": "User click on manage setting drop down and click on Assess",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User will navigate to user manual assessement page",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Year",
        "Filter",
        "Data",
        "DropdownOfficer",
        "FilterOfficer",
        "officerdata"
      ],
      "line": 24,
      "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;;1"
    },
    {
      "cells": [
        "Manual_Assessment_02",
        "validating all clickable compoment",
        "txt_PeriodJan",
        "txt_AssYear18",
        "txt_AsestFilterNitva",
        "20181212113956105",
        "drp_AssestChangedOfficerRitesh",
        "txt_AssestFilterAssestOfficer",
        "Laxman"
      ],
      "line": 25,
      "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40257989934,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate the Manual Assessment dashboard page All clicking compoment - internal portal",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-the-manual-assessment-dashboard-page-all-clicking-compoment---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Assessment Page \"Manual_Assessment_02\" \"validating all clickable compoment\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see manual assessment and assessament list tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on manual assessment",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# And User click on month \"\u003cmonth\u003e\" and check"
    }
  ],
  "line": 13,
  "name": "User click on year \"txt_AssYear18\" and check",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And User click on FilterBy \"\u003cFilter\u003e\""
    }
  ],
  "line": 15,
  "name": "User type \"20181212113956105\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on search button and check data \"20181212113956105\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on manage setting drop down and check drop down list for Reassign and Assess",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on reassign and click on drop down and check list \"drp_AssestChangedOfficerRitesh\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#And User click on FilterBy \"\u003cFilterOfficer\u003e\" and type \"\u003cofficerdata\u003e\" and click on search button"
    }
  ],
  "line": 20,
  "name": "User click on manage setting drop down and click on Assess",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User will navigate to user manual assessement page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_02",
      "offset": 28
    },
    {
      "val": "validating all clickable compoment",
      "offset": 51
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 2091950747,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 166932886,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 2142100519,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_see_manual_assessment_and_assessament_list_tab()"
});
formatter.result({
  "duration": 2071902067,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manual_assessment()"
});
formatter.result({
  "duration": 110567399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 4297696586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssYear18",
      "offset": 20
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_year_and_check(String)"
});
formatter.result({
  "duration": 1823807520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181212113956105",
      "offset": 11
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_type(String)"
});
formatter.result({
  "duration": 1345369875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20181212113956105",
      "offset": 44
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_search_button_and_check_data(String)"
});
formatter.result({
  "duration": 1254162928,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting_drop_down_and_check_drop_down_list_for_Reassign_and_Assess()"
});
formatter.result({
  "duration": 2246208830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 62
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_reassign_and_click_on_drop_down_and_check_list(String)"
});
formatter.result({
  "duration": 3677148448,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting_drop_down_and_click_on_Assess()"
});
formatter.result({
  "duration": 2346695036,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_will_navigate_to_user_manual_assessement_page()"
});
formatter.result({
  "duration": 1027302581,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 667228269,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Assessment Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on drop down \"\u003cPeriod\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on FilterBy \"\u003cFilter\u003e\" dropdown and click on Status",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Status and click on \"\u003cFilterStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on search button and check status \"\u003ccheck\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage status \"\u003cmanageStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on drop down officer \"\u003cselectOfficer\u003e\" and click on cancel",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User again click on drop down officer \"\u003cOfficerTwo\u003e\" and click on right tick",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User check message for officer changed \"\u003cvalidationMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Period",
        "Filter",
        "FilterStatus",
        "check",
        "manageStatus",
        "selectOfficer",
        "OfficerTwo",
        "validationMessage"
      ],
      "line": 44,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;1"
    },
    {
      "cells": [
        "Manual_Assessment_03_1",
        "Validating officer changed in pending status",
        "txt_PeriodApr",
        "txt_AssestFilterStatus",
        "txt_Pending",
        "Pending",
        "txt_AssestManageReassign",
        "drp_AssestChangedOfficerRitesh",
        "drp_AssestChangedOfficerRitesh",
        "Assessment officer reassigned successfully"
      ],
      "line": 45,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;2"
    },
    {
      "cells": [
        "Manual_Assessment_03_2",
        "Validating officer changed in In Progress status",
        "txt_PeriodJan",
        "txt_AssestFilterStatus",
        "txt_InProgress",
        "In Progress",
        "txt_AssestManageReassign",
        "drp_AssestChangedOfficerRitesh",
        "drp_AssestChangedOfficerRitesh",
        "Assessment officer reassigned successfully"
      ],
      "line": 46,
      "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5531857570,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Assessment Page \"Manual_Assessment_03_1\" \"Validating officer changed in pending status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on drop down \"txt_PeriodApr\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on FilterBy \"txt_AssestFilterStatus\" dropdown and click on Status",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Status and click on \"txt_Pending\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on search button and check status \"Pending\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage status \"txt_AssestManageReassign\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on cancel",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User again click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on right tick",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User check message for officer changed \"Assessment officer reassigned successfully\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_03_1",
      "offset": 28
    },
    {
      "val": "Validating officer changed in pending status",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 2009363612,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 148935212,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 2168808630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodApr",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 4324994891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestFilterStatus",
      "offset": 24
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_FilterBy_dropdown_and_click_on_Status(String)"
});
formatter.result({
  "duration": 2275683534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Pending",
      "offset": 35
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(String)"
});
formatter.result({
  "duration": 1804158382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 46
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_search_button_and_check_status(String)"
});
formatter.result({
  "duration": 1205898588,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "duration": 1666036194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestManageReassign",
      "offset": 29
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_status(String)"
});
formatter.result({
  "duration": 1151280034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 33
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down_officer_and_click_on_cancel(String)"
});
formatter.result({
  "duration": 3616850228,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "duration": 1650489355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 39
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_again_click_on_drop_down_officer_and_click_on_right_tick(String)"
});
formatter.result({
  "duration": 4715753366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assessment officer reassigned successfully",
      "offset": 40
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_check_message_for_officer_changed(String)"
});
formatter.result({
  "duration": 444910515,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 716458693,
  "status": "passed"
});
formatter.before({
  "duration": 5524827095,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate whether user can reassign the assessment officer whose status is Pending and in progress.",
  "description": "",
  "id": "user-is-on-manual-assessement-landing-screen;validate-whether-user-can-reassign-the-assessment-officer-whose-status-is-pending-and-in-progress.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on Assessment Page \"Manual_Assessment_03_2\" \"Validating officer changed in In Progress status\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Assessment Tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on drop down \"txt_PeriodJan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on FilterBy \"txt_AssestFilterStatus\" dropdown and click on Status",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Status and click on \"txt_InProgress\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on search button and check status \"In Progress\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on manage status \"txt_AssestManageReassign\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on cancel",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on manage setting",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User again click on drop down officer \"drp_AssestChangedOfficerRitesh\" and click on right tick",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User check message for officer changed \"Assessment officer reassigned successfully\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual_Assessment_03_2",
      "offset": 28
    },
    {
      "val": "Validating officer changed in In Progress status",
      "offset": 53
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_is_on_Assessment_Page(String,String)"
});
formatter.result({
  "duration": 2007882852,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 184766982,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Assessment_Tab()"
});
formatter.result({
  "duration": 2182275110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PeriodJan",
      "offset": 25
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down(String)"
});
formatter.result({
  "duration": 4321962127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestFilterStatus",
      "offset": 24
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_FilterBy_dropdown_and_click_on_Status(String)"
});
formatter.result({
  "duration": 2334838411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_InProgress",
      "offset": 35
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Status_and_click_on(String)"
});
formatter.result({
  "duration": 1831714310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Progress",
      "offset": 46
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_search_button_and_check_status(String)"
});
formatter.result({
  "duration": 1214898565,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "duration": 1661060715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_AssestManageReassign",
      "offset": 29
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_status(String)"
});
formatter.result({
  "duration": 1168224419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 33
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_drop_down_officer_and_click_on_cancel(String)"
});
formatter.result({
  "duration": 3502544451,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_manage_setting()"
});
formatter.result({
  "duration": 1629830531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_AssestChangedOfficerRitesh",
      "offset": 39
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_again_click_on_drop_down_officer_and_click_on_right_tick(String)"
});
formatter.result({
  "duration": 4637592836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assessment officer reassigned successfully",
      "offset": 40
    }
  ],
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_check_message_for_officer_changed(String)"
});
formatter.result({
  "duration": 28194855,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 645450326,
  "status": "passed"
});
});