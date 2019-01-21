$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/01_userRegistration.feature");
formatter.feature({
  "line": 2,
  "name": "User Registration for the steps involved in creating a user account for logging into DRC e-services portal that would be used by the taxpayer to perform tax activities",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UserRegistration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Valid_Registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Establish a connection with data base and execute query to create user\"\u003cusername\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "username"
      ],
      "line": 13,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;1"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_01",
        "Register with valid data",
        "Regression Seventeen"
      ],
      "line": 14,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_02",
        "Register with valid data",
        "Regression Eightteen"
      ],
      "line": 15,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;3"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_03",
        "Register with valid data",
        "Regression Nineteen"
      ],
      "line": 16,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9516271586,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 4,
      "name": "@Valid_Registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Establish a connection with data base and execute query to create user\"Regression Seventeen\".",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 251939590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regression Seventeen",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 514001868,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 51305893,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 48361671,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1986012665,
  "status": "passed"
});
formatter.before({
  "duration": 6397981219,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 4,
      "name": "@Valid_Registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Establish a connection with data base and execute query to create user\"Regression Eightteen\".",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 458503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regression Eightteen",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 39290492,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 49101431,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 47818819,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1833369619,
  "status": "passed"
});
formatter.before({
  "duration": 6847558421,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "New User should be allowed to Register in DRC TAX Portal with valid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 4,
      "name": "@Valid_Registration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Establish a connection with data base and execute query to create user\"Regression Nineteen\".",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Update data in another table based on created user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update data in roles table",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 151885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Regression Nineteen",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 52562859,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 52636093,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 49742025,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1804466258,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "#| DRC_ATC_Valid_Registration_03 | Register with valid data | Regression Nine |"
    },
    {
      "line": 19,
      "value": "# | DRC_ATC_Valid_Registration_04 | Register with valid data | Rejected User |"
    },
    {
      "line": 20,
      "value": "#| DRC_ATC_Valid_Registration_01 | Register with valid data | Rejecteud User |"
    }
  ],
  "line": 22,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Invalid_Registration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 21,
      "name": "@mtc9"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"\u003cName\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirm Password\u003e\" \"\u003cMobile Number\u003e\" in the respective fields",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"\u003cValidation Messages\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "Name",
        "Email",
        "Password",
        "Confirm Password",
        "Mobile Number",
        "Validation Messages"
      ],
      "line": 32,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;1"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_01",
        "Full name field is blank",
        "",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Full Name is required"
      ],
      "line": 33,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;2"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_02",
        "Full Name field length greater than size limit(fileds is trimmied)",
        "GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblclicks o oJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuid",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        ""
      ],
      "line": 34,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;3"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_03",
        "Full Name field with special characters and spaces",
        "sdfhsdhfh@34343545dsfsdfsdfsdfsdfsdfsdfuzfWgjWstKOWeEAqXzLwdIwz                                            BYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuidVlPJhxTffNnh",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Enter valid Full Name"
      ],
      "line": 35,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;4"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_04",
        "Full name field with minimum characters",
        "A a",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Enter valid Full Name"
      ],
      "line": 36,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;5"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_05",
        "Email field is empty",
        "Abhi Jo",
        "",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Email is required"
      ],
      "line": 37,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;6"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_06",
        "Email id is blank",
        "Abhi Jo",
        "abhi",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 38,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;7"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_07",
        "Email id without username",
        "Abhi Jo",
        "@gmail.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 39,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;8"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_08",
        "Invalid Email id",
        "Abhi Jo",
        "abhii \u003cabhii@1rivet.com\u003e",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 40,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;9"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_09",
        "Email id with dots",
        "Abhi Jo",
        "abhii.1rivet.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 41,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;10"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_10",
        "Invalid Email id  (@)",
        "Abhi Jo",
        "abhii@1rivet@1rivet.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 42,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;11"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_11",
        "Invalid Email id  dot in the begining",
        "Abhi Jo",
        ".abhii@1rivet.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 43,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;12"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_12",
        "Invalid Email id  (Multiple Dots)",
        "Abhi Jo",
        "abhii..abhii@1rivet.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 44,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;13"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_13",
        "Invalid Email id  (Special Characters)",
        "Abhi Jo",
        "ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞ@gmail.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 45,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;14"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_14",
        "Invalid Email id",
        "Abhi Jo",
        "abhii@1rivet.com testing",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 46,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;15"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_15",
        "Invalid Email id  (no domain)",
        "Abhi Jo",
        "abhii@1rivet",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 47,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;16"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_16",
        "Invalid Email id   with hypen",
        "Abhi Jo",
        "abhii@-1rivet.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 48,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;17"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_17",
        "Invalid Email id  multiple dots   before domain",
        "Abhi Jo",
        "abhii@1rivet..com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 49,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;18"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_18",
        "Invalid Email id  invalid domain",
        "Abhi Jo",
        "sdhfklshdfhsdfkhsdklfhskdfhkasdhf@hdkhkldhkhgflkhsflkhdfklhsdflkshdfdsfjdsklfjsdlkjfksdjflkjflsdjfskdjflksdjfkjflkjdsflksjdflksjdflkjflkjdslkklsdhf.com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 50,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;19"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6631724023,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_01\" \"Full name field is blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"\" \"abhi@o3enzyme.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Full Name is required\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_01",
      "offset": 42
    },
    {
      "val": "Full name field is blank",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 10117411262,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 3455720403,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 36196094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "abhi@o3enzyme.com",
      "offset": 21
    },
    {
      "val": "abq@12345",
      "offset": 41
    },
    {
      "val": "abq@12345",
      "offset": 53
    },
    {
      "val": "8989898989898",
      "offset": 65
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 6019557193,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4148551284,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3132591446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name is required",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 67654134,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1918462256,
  "status": "passed"
});
formatter.before({
  "duration": 5025968542,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_02\" \"Full Name field length greater than size limit(fileds is trimmied)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblclicks o oJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuid\" \"abhi@o3enzyme.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_02",
      "offset": 42
    },
    {
      "val": "Full Name field length greater than size limit(fileds is trimmied)",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 5957036639,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1582403742,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 37891331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblclicks o oJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuid",
      "offset": 18
    },
    {
      "val": "abhi@o3enzyme.com",
      "offset": 230
    },
    {
      "val": "abq@12345",
      "offset": 250
    },
    {
      "val": "abq@12345",
      "offset": 262
    },
    {
      "val": "8989898989898",
      "offset": 274
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 9336843014,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4143811235,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3140546146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 94037,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1847849083,
  "status": "passed"
});
formatter.before({
  "duration": 5024818152,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_03\" \"Full Name field with special characters and spaces\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"sdfhsdhfh@34343545dsfsdfsdfsdfsdfsdfsdfuzfWgjWstKOWeEAqXzLwdIwz                                            BYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuidVlPJhxTffNnh\" \"abhi@o3enzyme.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Enter valid Full Name\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_03",
      "offset": 42
    },
    {
      "val": "Full Name field with special characters and spaces",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 7212152411,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 3286185694,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 34129269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfhsdhfh@34343545dsfsdfsdfsdfsdfsdfsdfuzfWgjWstKOWeEAqXzLwdIwz                                            BYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuidVlPJhxTffNnh",
      "offset": 18
    },
    {
      "val": "abhi@o3enzyme.com",
      "offset": 189
    },
    {
      "val": "abq@12345",
      "offset": 209
    },
    {
      "val": "abq@12345",
      "offset": 221
    },
    {
      "val": "8989898989898",
      "offset": 233
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 9008400950,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4134450534,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3156636212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter valid Full Name",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 41240483,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1872696585,
  "status": "passed"
});
formatter.before({
  "duration": 5023057090,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_04\" \"Full name field with minimum characters\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"A a\" \"abhi@o3enzyme.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Enter valid Full Name\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_04",
      "offset": 42
    },
    {
      "val": "Full name field with minimum characters",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 5855083685,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 2330793281,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 33003386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A a",
      "offset": 18
    },
    {
      "val": "abhi@o3enzyme.com",
      "offset": 24
    },
    {
      "val": "abq@12345",
      "offset": 44
    },
    {
      "val": "abq@12345",
      "offset": 56
    },
    {
      "val": "8989898989898",
      "offset": 68
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8151689850,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4136007849,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3130258466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter valid Full Name",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 40085819,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1837447132,
  "status": "passed"
});
formatter.before({
  "duration": 5022905776,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_05\" \"Email field is empty\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Email is required\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_05",
      "offset": 42
    },
    {
      "val": "Email field is empty",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6700051521,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1413912846,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 31872373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 31
    },
    {
      "val": "abq@12345",
      "offset": 43
    },
    {
      "val": "8989898989898",
      "offset": 55
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 7872840205,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4155832620,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3142578491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 43839902,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1888415916,
  "status": "passed"
});
formatter.before({
  "duration": 5023286483,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_06\" \"Email id is blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhi\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_06",
      "offset": 42
    },
    {
      "val": "Email id is blank",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6240186354,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1551527023,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 34137248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhi",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 35
    },
    {
      "val": "abq@12345",
      "offset": 47
    },
    {
      "val": "8989898989898",
      "offset": 59
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8104544680,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4126451380,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3129210947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 42650472,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1932342446,
  "status": "passed"
});
formatter.before({
  "duration": 5025263261,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_07\" \"Email id without username\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"@gmail.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_07",
      "offset": 42
    },
    {
      "val": "Email id without username",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6861519825,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1379192568,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 35995197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "@gmail.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 41
    },
    {
      "val": "abq@12345",
      "offset": 53
    },
    {
      "val": "8989898989898",
      "offset": 65
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8092239187,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4131327926,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3134691612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 39864973,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1920554444,
  "status": "passed"
});
formatter.before({
  "duration": 5021947449,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_08\" \"Invalid Email id\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii \u003cabhii@1rivet.com\u003e\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_08",
      "offset": 42
    },
    {
      "val": "Invalid Email id",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6733189124,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 2010743049,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 31796574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii \u003cabhii@1rivet.com\u003e",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 55
    },
    {
      "val": "abq@12345",
      "offset": 67
    },
    {
      "val": "8989898989898",
      "offset": 79
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8175639439,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4154638632,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3104165681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 41535989,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 1962476555,
  "status": "passed"
});
formatter.before({
  "duration": 5034925166,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_09\" \"Email id with dots\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii.1rivet.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_09",
      "offset": 42
    },
    {
      "val": "Email id with dots",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6048452289,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1386431729,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 31329237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii.1rivet.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 47
    },
    {
      "val": "abq@12345",
      "offset": 59
    },
    {
      "val": "8989898989898",
      "offset": 71
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8134733501,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4105905371,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3125685973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 40705040,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 2146760587,
  "status": "passed"
});
formatter.before({
  "duration": 5023995183,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_10\" \"Invalid Email id  (@)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii@1rivet@1rivet.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_10",
      "offset": 42
    },
    {
      "val": "Invalid Email id  (@)",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6846977100,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 2000553681,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 35464314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii@1rivet@1rivet.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 54
    },
    {
      "val": "abq@12345",
      "offset": 66
    },
    {
      "val": "8989898989898",
      "offset": 78
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8147309422,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4150687640,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3125383344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 39149150,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 1870972567,
  "status": "passed"
});
formatter.before({
  "duration": 5019675451,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_11\" \"Invalid Email id  dot in the begining\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \".abhii@1rivet.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_11",
      "offset": 42
    },
    {
      "val": "Invalid Email id  dot in the begining",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6947277563,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1686411269,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 36499579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": ".abhii@1rivet.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 48
    },
    {
      "val": "abq@12345",
      "offset": 60
    },
    {
      "val": "8989898989898",
      "offset": 72
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8144404525,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4142121983,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3124125240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 39896889,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1883857957,
  "status": "passed"
});
formatter.before({
  "duration": 5022433024,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_12\" \"Invalid Email id  (Multiple Dots)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii..abhii@1rivet.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_12",
      "offset": 42
    },
    {
      "val": "Invalid Email id  (Multiple Dots)",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6823239237,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1333674812,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 36526365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii..abhii@1rivet.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 54
    },
    {
      "val": "abq@12345",
      "offset": 66
    },
    {
      "val": "8989898989898",
      "offset": 78
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8152616830,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4124541284,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3143093132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 46179151,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 1854708960,
  "status": "passed"
});
formatter.before({
  "duration": 5022207619,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_13\" \"Invalid Email id  (Special Characters)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞ@gmail.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_13",
      "offset": 42
    },
    {
      "val": "Invalid Email id  (Special Characters)",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6369554600,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 2492262726,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 30034942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞ@gmail.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 56
    },
    {
      "val": "abq@12345",
      "offset": 68
    },
    {
      "val": "8989898989898",
      "offset": 80
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8169873243,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4104175654,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3130622361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 41357032,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 1859244407,
  "status": "passed"
});
formatter.before({
  "duration": 5021374962,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_14\" \"Invalid Email id\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii@1rivet.com testing\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_14",
      "offset": 42
    },
    {
      "val": "Invalid Email id",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6210724184,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1334740853,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 31811392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii@1rivet.com testing",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 55
    },
    {
      "val": "abq@12345",
      "offset": 67
    },
    {
      "val": "8989898989898",
      "offset": 79
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8104321555,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4122123100,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3127249557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 39598250,
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 1870427152,
  "status": "passed"
});
formatter.before({
  "duration": 5021861961,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_15\" \"Invalid Email id  (no domain)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii@1rivet\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_15",
      "offset": 42
    },
    {
      "val": "Invalid Email id  (no domain)",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6756980274,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 2000275558,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 30445572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii@1rivet",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 43
    },
    {
      "val": "abq@12345",
      "offset": 55
    },
    {
      "val": "8989898989898",
      "offset": 67
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8103313931,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4097628380,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3143256984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 39811971,
  "error_message": "java.lang.AssertionError: expected [Please enter valid Email] but found [Captcha is required]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat org.drc.vat.StepDefinitions.userRegistration.error_messages_should_be_shown_to_user_as(userRegistration.java:318)\r\n\tat ✽.Then Error messages should be shown to user as\"Please enter valid Email\"(features/01_userRegistration.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 1847354389,
  "status": "passed"
});
formatter.before({
  "duration": 5019402459,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_16\" \"Invalid Email id   with hypen\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii@-1rivet.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_16",
      "offset": 42
    },
    {
      "val": "Invalid Email id   with hypen",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6745669867,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 2043019497,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 32455690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii@-1rivet.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 48
    },
    {
      "val": "abq@12345",
      "offset": 60
    },
    {
      "val": "8989898989898",
      "offset": 72
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8105147088,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4125404432,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3124209303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 37079190,
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 1850901875,
  "status": "passed"
});
formatter.before({
  "duration": 5020157037,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_17\" \"Invalid Email id  multiple dots   before domain\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"abhii@1rivet..com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_17",
      "offset": 42
    },
    {
      "val": "Invalid Email id  multiple dots   before domain",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6728037589,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1453147485,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 32355669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "abhii@1rivet..com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 48
    },
    {
      "val": "abq@12345",
      "offset": 60
    },
    {
      "val": "8989898989898",
      "offset": 72
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 8075413351,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4135996451,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3134728372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 40104057,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 1878593579,
  "status": "passed"
});
formatter.before({
  "duration": 5019463441,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@mtc5"
    },
    {
      "line": 21,
      "name": "@mtc4"
    },
    {
      "line": 21,
      "name": "@mtc6"
    },
    {
      "line": 21,
      "name": "@mtc9"
    },
    {
      "line": 21,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 21,
      "name": "@mtc3"
    },
    {
      "line": 21,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_18\" \"Invalid Email id  invalid domain\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Enters Data \"Abhi Jo\" \"sdhfklshdfhsdfkhsdklfhskdfhkasdhf@hdkhkldhkhgflkhsflkhdfklhsdflkshdfdsfjdsklfjsdlkjfksdjflkjflsdjfskdjflksdjfkjflkjdsflksjdflksjdflkjflkjdslkklsdhf.com\" \"abq@12345\" \"abq@12345\" \"8989898989898\" in the respective fields",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Error messages should be shown to user as\"Please enter valid Email\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRC_ATC_Invalid_Registration_18",
      "offset": 42
    },
    {
      "val": "Invalid Email id  invalid domain",
      "offset": 76
    }
  ],
  "location": "userRegistration.user_is_on_Welcome_to_DRC_Tax_Portal_page(String,String)"
});
formatter.result({
  "duration": 6503855814,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1860767527,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 379022160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi Jo",
      "offset": 18
    },
    {
      "val": "sdhfklshdfhsdfkhsdklfhskdfhkasdhf@hdkhkldhkhgflkhsflkhdfklhsdflkshdfdsfjdsklfjsdlkjfksdjflkjflsdjfskdjflksdjfkjflkjdsflksjdflksjdflkjflkjdslkklsdhf.com",
      "offset": 28
    },
    {
      "val": "abq@12345",
      "offset": 182
    },
    {
      "val": "abq@12345",
      "offset": 194
    },
    {
      "val": "8989898989898",
      "offset": 206
    }
  ],
  "location": "userRegistration.user_Enters_Data_in_the_respective_fields(String,String,String,String,String)"
});
formatter.result({
  "duration": 11017358145,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 4095216750,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "duration": 3104354896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid Email",
      "offset": 42
    }
  ],
  "location": "userRegistration.error_messages_should_be_shown_to_user_as(String)"
});
formatter.result({
  "duration": 43992926,
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 1839872440,
  "status": "passed"
});
formatter.uri("features/02_01_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Module",
  "description": "",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"\u003cEmail\u003e\" \"\u003cpassword\u003e\" in the respective fields",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Email",
        "password",
        "message"
      ],
      "line": 10,
      "id": "login-module;drc-tax-portal-with-invalid-data;;1"
    },
    {
      "comments": [
        {
          "line": 11,
          "value": "#| Invalid_DRC_ATC_LoginTaxPortal_01 | Email id is blank                                    |                                                                                                                                                                                                | Arun123  | Email is required.     |"
        }
      ],
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_02",
        "Email id with max character",
        "Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 12,
      "id": "login-module;drc-tax-portal-with-invalid-data;;2"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_03",
        "Email id with max character with space",
        "Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 13,
      "id": "login-module;drc-tax-portal-with-invalid-data;;3"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_04",
        "Email id invalid",
        "ranky@storiqax.com",
        "Arun123",
        "Email is not verified."
      ],
      "line": 14,
      "id": "login-module;drc-tax-portal-with-invalid-data;;4"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_05",
        "Email id with dots",
        "frankystoriqax",
        "Arun123",
        "Email is not valid."
      ],
      "line": 15,
      "id": "login-module;drc-tax-portal-with-invalid-data;;5"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_06",
        "Invalid Email id  (Special Characters)",
        "#@%^%#$@#$@#.com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 16,
      "id": "login-module;drc-tax-portal-with-invalid-data;;6"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_07",
        "Email id without username",
        "@dstoriqax.com",
        "Franky07",
        "Email is not valid."
      ],
      "line": 17,
      "id": "login-module;drc-tax-portal-with-invalid-data;;7"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_08",
        "Email id start with name and email",
        "Franky Mehta\u003cfranky@storiqax.com\u003e",
        "Arun123",
        "Email is not valid."
      ],
      "line": 18,
      "id": "login-module;drc-tax-portal-with-invalid-data;;8"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_09",
        "Invalid Email id with no @",
        "franky.storiqax.com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 19,
      "id": "login-module;drc-tax-portal-with-invalid-data;;9"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_10",
        "Invalid Email id  (@)",
        "franky@storiqax@storiqax.com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 20,
      "id": "login-module;drc-tax-portal-with-invalid-data;;10"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_11",
        "Invalid Email id  (Multiple Dots from start and end)",
        "franky.@storiqax.com",
        "Arun123",
        "Email is not verified."
      ],
      "line": 21,
      "id": "login-module;drc-tax-portal-with-invalid-data;;11"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_12",
        "Invalid Email id  (Multiple Dots)",
        "franky..@storiqax.com",
        "Arun123",
        "Email is not verified."
      ],
      "line": 22,
      "id": "login-module;drc-tax-portal-with-invalid-data;;12"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_13",
        "Invalid Email id name with last",
        "franky@storiqax.com(Franky Mehta)",
        "Arun123",
        "Email is not valid."
      ],
      "line": 23,
      "id": "login-module;drc-tax-portal-with-invalid-data;;13"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_14",
        "Invalid Email id without domain",
        "franky@storiqax",
        "Arun123",
        "Email is not valid."
      ],
      "line": 24,
      "id": "login-module;drc-tax-portal-with-invalid-data;;14"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_15",
        "Invalid Email id   with hypen",
        "franky@-storiqax.com",
        "Arun123",
        "Email is not verified."
      ],
      "line": 25,
      "id": "login-module;drc-tax-portal-with-invalid-data;;15"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_16",
        "Invalid Email id   .web domain",
        "franky@-storiqax.web",
        "Arun123",
        "Email is not verified."
      ],
      "line": 26,
      "id": "login-module;drc-tax-portal-with-invalid-data;;16"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_17",
        "Invalid Email id (IP )",
        "franky@111.222.333.4444",
        "Arun123",
        "Email is not valid."
      ],
      "line": 27,
      "id": "login-module;drc-tax-portal-with-invalid-data;;17"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_18",
        "Invalid Email id  (Multiple Dots before domain)",
        "franky@storiqax..com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 28,
      "id": "login-module;drc-tax-portal-with-invalid-data;;18"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_19",
        "Invalid Email id",
        "Q@.in",
        "Arun123",
        "Email is not valid."
      ],
      "line": 29,
      "id": "login-module;drc-tax-portal-with-invalid-data;;19"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_20",
        "Invalid Email id",
        "a@s.in",
        "Arun123",
        "Email is not verified."
      ],
      "line": 30,
      "id": "login-module;drc-tax-portal-with-invalid-data;;20"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_21",
        "Invalid Email id  invalid domain",
        "sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com",
        "Arun123",
        "Email is not valid."
      ],
      "line": 31,
      "id": "login-module;drc-tax-portal-with-invalid-data;;21"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5024806753,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#| Invalid_DRC_ATC_LoginTaxPortal_01 | Email id is blank                                    |                                                                                                                                                                                                | Arun123  | Email is required.     |"
    }
  ],
  "line": 12,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_02\" \"Email id with max character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_02",
      "offset": 27
    },
    {
      "val": "Email id with max character",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 5224897599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 197
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 1063740189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 184245847,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 2408222735,
  "status": "passed"
});
formatter.before({
  "duration": 7576791139,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_03\" \"Email id with max character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_03",
      "offset": 27
    },
    {
      "val": "Email id with max character with space",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2833542875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 211
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 1057525748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 147214245,
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 1773333360,
  "status": "passed"
});
formatter.before({
  "duration": 6762944803,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_04\" \"Email id invalid\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"ranky@storiqax.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_04",
      "offset": 27
    },
    {
      "val": "Email id invalid",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2842453336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ranky@storiqax.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 39
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 346657373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not verified.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 1397904279,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 1783814244,
  "status": "passed"
});
formatter.before({
  "duration": 6335392275,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_05\" \"Email id with dots\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"frankystoriqax\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_05",
      "offset": 27
    },
    {
      "val": "Email id with dots",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2831158317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "frankystoriqax",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 35
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 326493497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 160532776,
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 1777253575,
  "status": "passed"
});
formatter.before({
  "duration": 5808265365,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_06\" \"Invalid Email id  (Special Characters)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"#@%^%#$@#$@#.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_06",
      "offset": 27
    },
    {
      "val": "Invalid Email id  (Special Characters)",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2832043407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#@%^%#$@#$@#.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 37
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 370771955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 178178446,
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 1787793731,
  "status": "passed"
});
formatter.before({
  "duration": 6622955188,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_07\" \"Email id without username\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"@dstoriqax.com\" \"Franky07\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_07",
      "offset": 27
    },
    {
      "val": "Email id without username",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2821618661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@dstoriqax.com",
      "offset": 18
    },
    {
      "val": "Franky07",
      "offset": 35
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 380168275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 155326244,
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 1780516385,
  "status": "passed"
});
formatter.before({
  "duration": 6097357666,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_08\" \"Email id start with name and email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"Franky Mehta\u003cfranky@storiqax.com\u003e\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_08",
      "offset": 27
    },
    {
      "val": "Email id start with name and email",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2810471537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Franky Mehta\u003cfranky@storiqax.com\u003e",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 54
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 428690949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 143404025,
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 1796836129,
  "status": "passed"
});
formatter.before({
  "duration": 6997561584,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_09\" \"Invalid Email id with no @\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky.storiqax.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_09",
      "offset": 27
    },
    {
      "val": "Invalid Email id with no @",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2836204130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky.storiqax.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 40
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 342971967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 140939963,
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 1814073451,
  "status": "passed"
});
formatter.before({
  "duration": 6581426894,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_10\" \"Invalid Email id  (@)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@storiqax@storiqax.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_10",
      "offset": 27
    },
    {
      "val": "Invalid Email id  (@)",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2839534761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax@storiqax.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 49
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 364809991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 142682217,
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 1765636265,
  "status": "passed"
});
formatter.before({
  "duration": 6044440885,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_11\" \"Invalid Email id  (Multiple Dots from start and end)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky.@storiqax.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_11",
      "offset": 27
    },
    {
      "val": "Invalid Email id  (Multiple Dots from start and end)",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2863253531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky.@storiqax.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 41
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 350580723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not verified.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 1496865139,
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 1768560824,
  "status": "passed"
});
formatter.before({
  "duration": 5837112018,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_12\" \"Invalid Email id  (Multiple Dots)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky..@storiqax.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_12",
      "offset": 27
    },
    {
      "val": "Invalid Email id  (Multiple Dots)",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2832959844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky..@storiqax.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 42
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 395164090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not verified.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 1553840910,
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 2317903333,
  "status": "passed"
});
formatter.before({
  "duration": 6536063302,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_13\" \"Invalid Email id name with last\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@storiqax.com(Franky Mehta)\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_13",
      "offset": 27
    },
    {
      "val": "Invalid Email id name with last",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2818558745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax.com(Franky Mehta)",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 54
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 412939133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 153021760,
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 1789331099,
  "status": "passed"
});
formatter.before({
  "duration": 6969835116,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_14\" \"Invalid Email id without domain\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@storiqax\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_14",
      "offset": 27
    },
    {
      "val": "Invalid Email id without domain",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2821166427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 36
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 376400800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 167485551,
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 2947173553,
  "status": "passed"
});
formatter.before({
  "duration": 7839669547,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_15\" \"Invalid Email id   with hypen\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@-storiqax.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_15",
      "offset": 27
    },
    {
      "val": "Invalid Email id   with hypen",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2810800098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@-storiqax.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 41
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 375899837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not verified.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 791436109,
  "status": "passed"
});
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 1780982582,
  "status": "passed"
});
formatter.before({
  "duration": 6842874509,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_16\" \"Invalid Email id   .web domain\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@-storiqax.web\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_16",
      "offset": 27
    },
    {
      "val": "Invalid Email id   .web domain",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2814960820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@-storiqax.web",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 41
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 393205264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not verified.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 1573182388,
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 1961897797,
  "status": "passed"
});
formatter.before({
  "duration": 6366620351,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_17\" \"Invalid Email id (IP )\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@111.222.333.4444\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_17",
      "offset": 27
    },
    {
      "val": "Invalid Email id (IP )",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2853068437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@111.222.333.4444",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 44
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 397487380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 158012861,
  "status": "passed"
});
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 1851849656,
  "status": "passed"
});
formatter.before({
  "duration": 6407860834,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_18\" \"Invalid Email id  (Multiple Dots before domain)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"franky@storiqax..com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_18",
      "offset": 27
    },
    {
      "val": "Invalid Email id  (Multiple Dots before domain)",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2838721195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax..com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 41
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 420354116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 162506133,
  "status": "passed"
});
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 1950496489,
  "status": "passed"
});
formatter.before({
  "duration": 6905825639,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_19\" \"Invalid Email id\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"Q@.in\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_19",
      "offset": 27
    },
    {
      "val": "Invalid Email id",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2810379494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q@.in",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 26
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 293286079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 161943620,
  "status": "passed"
});
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 1912122148,
  "status": "passed"
});
formatter.before({
  "duration": 7943154455,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_20\" \"Invalid Email id\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"a@s.in\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_20",
      "offset": 27
    },
    {
      "val": "Invalid Email id",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2808911373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a@s.in",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 27
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 292885708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not verified.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 1825841220,
  "status": "passed"
});
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 2598108824,
  "status": "passed"
});
formatter.before({
  "duration": 6861990582,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on DRC Tax Portal \"Invalid_DRC_ATC_LoginTaxPortal_21\" \"Invalid Email id  invalid domain\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Data \"sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com\" \"Arun123\" in the respective fields",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on SignIn and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid_DRC_ATC_LoginTaxPortal_21",
      "offset": 27
    },
    {
      "val": "Invalid Email id  invalid domain",
      "offset": 63
    }
  ],
  "location": "Login.user_is_on_DRC_Tax_Portal(String,String)"
});
formatter.result({
  "duration": 2864044014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com",
      "offset": 18
    },
    {
      "val": "Arun123",
      "offset": 181
    }
  ],
  "location": "Login.user_Enters_Data_in_the_respective_fields(String,String)"
});
formatter.result({
  "duration": 967386157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not valid.",
      "offset": 53
    }
  ],
  "location": "Login.user_Clicks_on_SignIn_and_checks_Validation_message(String)"
});
formatter.result({
  "duration": 154538896,
  "status": "passed"
});
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 1869585660,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 33,
      "value": "#  | Invalid_DRC_ATC_LoginTaxPortal_22 | blank password                                       | testarun1122@mailinator.com                                                                                                                                                                    |                                                                                                                                                                                                                  | This account has been locked out, please try again later. |"
    },
    {
      "line": 34,
      "value": "#  | Invalid_DRC_ATC_LoginTaxPortal_23 | password wiyh max character                          | testarun1122@mailinator.com                                                                                                                                                                    | AsaartGovernmentanitiativtowardovernanceDRCgovernmenthasbroughtdigitaltransformationbusirocessetoasignificantxtenthroughthexortalrojecthichrovidesntegratedlatformconductariousaxroceedingselectronicallythrough | This account has been locked out, please try again later. |"
    },
    {
      "line": 35,
      "value": "#  | Invalid_DRC_ATC_LoginTaxPortal_24 | password wiyh max character with space               | testarun1122@mailinator.com                                                                                                                                                                    | A sa art Go vernmentaniti ativtoward overna nceDRCg overnmen thasbroughtdi gitaltransfor mationb usirocesse toasig nific antxtenthroug hthexortal rojecthic hrovide snt eg                                       | This account has been locked out, please try again later. |"
    }
  ],
  "line": 38,
  "name": "DRC Tax Portal with Valid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@Run_Valid_Login"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User is on DRC Tax Portal and login",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Enter Data: \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 43,
      "value": "#And User logout"
    }
  ],
  "line": 44,
  "name": "",
  "description": "",
  "id": "login-module;drc-tax-portal-with-valid-data;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "email",
        "password"
      ],
      "line": 45,
      "id": "login-module;drc-tax-portal-with-valid-data;;1"
    },
    {
      "cells": [
        "Valid_DRC_ATC_LoginTaxPortal_01",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 46,
      "id": "login-module;drc-tax-portal-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6601832417,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "DRC Tax Portal with Valid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@Run_Valid_Login"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User is on DRC Tax Portal and login",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User Enter Data: \"regressionseventeen@mailinator.com\" \"Test@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal_and_login()"
});
formatter.result({
  "duration": 1209258057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 55
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 13932840843,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_Click_on_SignIn()"
});
formatter.result({
  "duration": 1280617,
  "status": "passed"
});
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 1488509213,
  "status": "passed"
});
formatter.uri("features/03_01uploadDocuments.feature");
formatter.feature({
  "line": 2,
  "name": "Upload Documents after all process are completed till the Banks details",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Individual 4 docs poa*,a/c*,loa*,lyr"
    }
  ],
  "line": 6,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"\u003cuname\u003e\"\"\u003cpwd\u003e\" and proceeds for VAT Registration \"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"\u003cPOA\u003e\"\"\u003cPOA path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"\u003cA/C Proof\u003e\" \"\u003ca/c path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\""
    },
    {
      "line": 16,
      "value": "#And LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\""
    }
  ],
  "line": 17,
  "name": "LOAuth\"\u003cLOAuth\u003e\" \"\u003cLOAuthpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"\u003cRevenue\u003e\"\"\u003cRevpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "POA",
        "POA path",
        "A/C Proof",
        "a/c path",
        "COI",
        "COIpath",
        "LAWdegree",
        "LAWpath",
        "LOAuth",
        "LOAuthpath",
        "Revenue",
        "Revpath",
        "uname",
        "pwd"
      ],
      "line": 23,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;1"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Required_doc_01",
        "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1_1",
        "Capture.png",
        "doc_desc1",
        "Capture.png",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 24,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;2"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Required_doc_01",
        "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpg)",
        "doc_desc1",
        "Capture.jpg",
        "doc_desc1",
        "Capture.jpg",
        "doc_desc1",
        "Capture.jpg",
        "doc_desc1",
        "Capture.jpg",
        "doc_desc1_1",
        "Capture.jpg",
        "doc_desc1",
        "Capture.jpg",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 25,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;3"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Required_doc_01",
        "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpeg)",
        "doc_desc1",
        "Capture.jpeg",
        "doc_desc1",
        "Capture.jpeg",
        "doc_desc1",
        "Capture.jpeg",
        "doc_desc1",
        "Capture.jpeg",
        "doc_desc1_1",
        "Capture.jpg",
        "doc_desc1",
        "Capture.jpg",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 26,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;4"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Required_doc_01",
        "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.pdf)",
        "doc_desc1",
        "Capture.pdf",
        "doc_desc1",
        "Capture.pdf",
        "doc_desc1",
        "Capture.pdf",
        "doc_desc1",
        "Capture.pdf",
        "doc_desc1_1",
        "Capture.pdf",
        "doc_desc1",
        "Capture.pdf",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 27,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19937309895,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)\"",
  "matchedColumns": [
    0,
    1,
    14,
    15
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"Capture.png\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\""
    },
    {
      "line": 16,
      "value": "#And LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\""
    }
  ],
  "line": 17,
  "name": "LOAuth\"doc_desc1_1\" \"Capture.png\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"doc_desc1\"\"Capture.png\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Valid_Required_doc_01",
      "offset": 106
    },
    {
      "val": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.png)",
      "offset": 138
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24769612618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Natural Person",
      "offset": 18
    },
    {
      "val": "Individual",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6681331546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4843758943798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 39
    },
    {
      "val": "Newman",
      "offset": 52
    },
    {
      "val": "Mining",
      "offset": 61
    },
    {
      "val": "2018-02-12",
      "offset": 70
    },
    {
      "val": "Small Scale",
      "offset": 83
    },
    {
      "val": "8965741235698",
      "offset": 97
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30307927971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Ituri",
      "offset": 75
    },
    {
      "val": "Bunia",
      "offset": 83
    },
    {
      "val": "4563212",
      "offset": 91
    },
    {
      "val": "9865327452",
      "offset": 101
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 14002511935,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2359177727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "1rivet",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 43
    },
    {
      "val": "Branch4",
      "offset": 57
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16184080853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "Capture.png",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11712618608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8307990947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "Capture.png",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 10270611408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "Capture.png",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12262364907,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 42098224803,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 11052632674,
  "status": "passed"
});
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 789646836,
  "status": "passed"
});
formatter.before({
  "duration": 16067122681,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpg)\"",
  "matchedColumns": [
    0,
    1,
    14,
    15
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"Capture.jpg\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"doc_desc1\" \"Capture.jpg\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\""
    },
    {
      "line": 16,
      "value": "#And LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\""
    }
  ],
  "line": 17,
  "name": "LOAuth\"doc_desc1_1\" \"Capture.jpg\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"doc_desc1\"\"Capture.jpg\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Valid_Required_doc_01",
      "offset": 106
    },
    {
      "val": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpg)",
      "offset": 138
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24925332393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Natural Person",
      "offset": 18
    },
    {
      "val": "Individual",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6574538519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4843758943798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 39
    },
    {
      "val": "Newman",
      "offset": 52
    },
    {
      "val": "Mining",
      "offset": 61
    },
    {
      "val": "2018-02-12",
      "offset": 70
    },
    {
      "val": "Small Scale",
      "offset": 83
    },
    {
      "val": "8965741235698",
      "offset": 97
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30298631671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Ituri",
      "offset": 75
    },
    {
      "val": "Bunia",
      "offset": 83
    },
    {
      "val": "4563212",
      "offset": 91
    },
    {
      "val": "9865327452",
      "offset": 101
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 13996969434,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2435054709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "1rivet",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 43
    },
    {
      "val": "Branch4",
      "offset": 57
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16166147087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "Capture.jpg",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11377848974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.jpg",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8274163738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "Capture.jpg",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 10252123391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "Capture.jpg",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12333133101,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 41997189140,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 10963887969,
  "status": "passed"
});
formatter.embedding("image/png", "embedded43.png");
formatter.after({
  "duration": 778097917,
  "status": "passed"
});
formatter.before({
  "duration": 14749636246,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpeg)\"",
  "matchedColumns": [
    0,
    1,
    14,
    15
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"Capture.jpeg\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"doc_desc1\" \"Capture.jpeg\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\""
    },
    {
      "line": 16,
      "value": "#And LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\""
    }
  ],
  "line": 17,
  "name": "LOAuth\"doc_desc1_1\" \"Capture.jpg\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"doc_desc1\"\"Capture.jpg\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Valid_Required_doc_01",
      "offset": 106
    },
    {
      "val": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.jpeg)",
      "offset": 138
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 25078607485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Natural Person",
      "offset": 18
    },
    {
      "val": "Individual",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6703230267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4843758943798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 39
    },
    {
      "val": "Newman",
      "offset": 52
    },
    {
      "val": "Mining",
      "offset": 61
    },
    {
      "val": "2018-02-12",
      "offset": 70
    },
    {
      "val": "Small Scale",
      "offset": 83
    },
    {
      "val": "8965741235698",
      "offset": 97
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30428886718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Ituri",
      "offset": 75
    },
    {
      "val": "Bunia",
      "offset": 83
    },
    {
      "val": "4563212",
      "offset": 91
    },
    {
      "val": "9865327452",
      "offset": 101
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 14112529016,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2363429067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "1rivet",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 43
    },
    {
      "val": "Branch4",
      "offset": 57
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16223866608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "Capture.jpeg",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11409069355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.jpeg",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8277671614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "Capture.jpg",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 10220673614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "Capture.jpg",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12277162387,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 42035724199,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 11059275696,
  "status": "passed"
});
formatter.embedding("image/png", "embedded44.png");
formatter.after({
  "duration": 796132275,
  "status": "passed"
});
formatter.before({
  "duration": 16690903117,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as--natural-person-and--tax-payer-sub-category-as-individual-user-wants-to-upload-the-document---taxpayer-portal;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Individual_mtc6_mtc12_mtc10"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Valid_Required_doc_01\" \"Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.pdf)\"",
  "matchedColumns": [
    0,
    1,
    14,
    15
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Selects taxpayer \"Natural Person\" and sub category \"Individual\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Fills General details \"4843758943798\" \"2018-06-10\" \"Newman\" \"Mining\" \"2018-02-12\" \"Small Scale\" \"8965741235698\" \"\" \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Ituri\" \"Bunia\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fills Bank Details \"32145645678\" \"1rivet\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"Capture.pdf\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Acc \"doc_desc1\" \"Capture.pdf\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#And COI \"\u003cCOI\u003e\" \"\u003cCOIpath\u003e\""
    },
    {
      "line": 16,
      "value": "#And LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\""
    }
  ],
  "line": 17,
  "name": "LOAuth\"doc_desc1_1\" \"Capture.pdf\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "rev\"doc_desc1\"\"Capture.pdf\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Valid_Required_doc_01",
      "offset": 106
    },
    {
      "val": "Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.pdf)",
      "offset": 138
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24839393420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Natural Person",
      "offset": 18
    },
    {
      "val": "Individual",
      "offset": 52
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6647610341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4843758943798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 39
    },
    {
      "val": "Newman",
      "offset": 52
    },
    {
      "val": "Mining",
      "offset": 61
    },
    {
      "val": "2018-02-12",
      "offset": 70
    },
    {
      "val": "Small Scale",
      "offset": 83
    },
    {
      "val": "8965741235698",
      "offset": 97
    },
    {
      "val": "",
      "offset": 113
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30347310790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Ituri",
      "offset": 75
    },
    {
      "val": "Bunia",
      "offset": 83
    },
    {
      "val": "4563212",
      "offset": 91
    },
    {
      "val": "9865327452",
      "offset": 101
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 13990906594,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2382784222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "1rivet",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 43
    },
    {
      "val": "Branch4",
      "offset": 57
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16258170274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "Capture.pdf",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11315597425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "Capture.pdf",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8253856811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "Capture.pdf",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 10253825181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "Capture.pdf",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12241221904,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 42125715325,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 10980310300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded45.png");
formatter.after({
  "duration": 734071649,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "# | DRC_ATC_Valid_Required_doc_04 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.pdf)                  | doc_desc1_1 | capture.pdf        | doc_desc3 | capture.pdf        | doc_desc5 | capture.pdf        | doc_desc4 | capture.pdf        | regressionseventeen@mailinator.com  | Test@123 |"
    },
    {
      "line": 30,
      "value": "# | DRC_ATC_Valid_Required_doc_05 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.gif)                  | doc_desc1_1 | capture.gif        | doc_desc3 | capture.gif        | doc_desc5 | capture.gif        | doc_desc4 | capture.gif        | regressionseventeen@mailinator.com  | Test@123 |"
    },
    {
      "line": 31,
      "value": "#| DRC_ATC_Valid_Required_doc_06 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.docx)                 | doc_desc1_1 | capture.docx       | doc_desc3 | capture.docx       | doc_desc5 | capture.docx       | doc_desc4 | capture.docx       | regressionseventeen@mailinator.com  | Test@123 |"
    },
    {
      "line": 32,
      "value": "#| DRC_ATC_Valid_Required_doc_07 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (.xlsx) | doc_desc1_1 | capture.xlsx | doc_desc3 | capture.xlsx | doc_desc5 | capture.xlsx | doc_desc4 | capture.xlsx | regressionseventeen@mailinator.com | Test@123 |"
    },
    {
      "line": 33,
      "value": "#| DRC_ATC_Valid_Required_doc_08 | Tax payer Category as  Natural Person and  Tax payer Sub Category as Individual user wants to upload the document (pdf with greater size) | doc_desc1_1 | TCP_Estimation.pdf | doc_desc3 | TCP_Estimation.pdf | doc_desc5 | TCP_Estimation.pdf | doc_desc4 | TCP_Estimation.pdf | regressionseventeen@mailinator.com  | Test@123 |"
    },
    {
      "line": 34,
      "value": "#govt 6docs poa*,a/c*,coi*,establishemnt*,loa*,lyr 9 general details"
    },
    {
      "line": 35,
      "value": "#LLP no 6 docs   poa,a/c,coi,loa,lyr.establishemnt"
    }
  ],
  "line": 38,
  "name": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GovernmentEntity_mtc7_mtc12_mtc10_mtc7"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "The users has logged in \"\u003cuname\u003e\"\"\u003cpwd\u003e\" and proceeds for VAT Registration \"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Selects taxpayer \"Legal Entity\" and sub category \"Government Entity\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Fills General details \"484375891798\" \"2018-06-10\" \"Nov M\" \"3\" \"2018-02-12\" \"Mining\" \"2018-02-12\" \"Medium Scale\" \"8965741235698\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Bas-Uele\" \"Aketi\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "fills Details of Business Promoters \"Shah\" \" 1rivet Building Valsad\" \"Bas-Uele\" \"Aketi\" \"789798\" \"shah@div.com\" \"98998945621\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Fills Bank Details \"32145645678\" \"Nov M\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "The user is on the upload the page with Proofs of Add \"\u003cPOA\u003e\"\"\u003cPOA path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Acc \"\u003cA/C Proof\u003e\" \"\u003ca/c path\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "INC \"\u003cINCcerti\u003e\" \"\u003cincpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "LawDegree \"\u003cLAWdegree\u003e\" \"\u003cLAWpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#And establish \"\u003cEstablish\u003e\" \"\u003cEstbpath\u003e\""
    }
  ],
  "line": 51,
  "name": "LOAuth\"\u003cLOAuth\u003e\" \"\u003cLOAuthpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "rev\"\u003cRevenue\u003e\"\"\u003cRevpath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;",
  "rows": [
    {
      "cells": [
        "Test Case ID",
        "Description",
        "POA",
        "POA path",
        "A/C Proof",
        "a/c path",
        "INCcerti",
        "incpath",
        "LAWdegree",
        "LAWpath",
        "LOAuth",
        "LOAuthpath",
        "Establish",
        "Estbpath",
        "Revenue",
        "Revpath",
        "uname",
        "pwd"
      ],
      "line": 57,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;1"
    },
    {
      "cells": [
        "DRC_ATC_Required_doc_11",
        "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
        "doc_desc1",
        "capture.jpg",
        "doc_desc1",
        "capture.jpg",
        "doc_desc1",
        "capture.jpg",
        "doc_desc1",
        "Capture.png",
        "doc_desc1_1",
        "capture.jpg",
        "doc_desc21",
        "capture.jpg",
        "doc_desc1",
        "capture.jpg",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 58,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;2"
    },
    {
      "cells": [
        "DRC_ATC_Required_doc_11",
        "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "Capture.png",
        "doc_desc1_1",
        "capture.png",
        "doc_desc21",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 59,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;3"
    },
    {
      "cells": [
        "DRC_ATC_Required_doc_11",
        "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
        "doc_desc1",
        "capture.pdf",
        "doc_desc1",
        "capture.pdf",
        "doc_desc1",
        "capture.pdf",
        "doc_desc1",
        "Capture.pdf",
        "doc_desc1_1",
        "capture.pdf",
        "doc_desc21",
        "capture.pdf",
        "doc_desc1",
        "capture.pdf",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 60,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;4"
    },
    {
      "cells": [
        "DRC_ATC_Required_doc_11",
        "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
        "doc_desc1",
        "capture.jpeg",
        "doc_desc1",
        "capture.jpeg",
        "doc_desc1",
        "capture.jpeg",
        "doc_desc1",
        "Capture.png",
        "doc_desc1_1",
        "capture.jpeg",
        "doc_desc21",
        "capture.jpeg",
        "doc_desc1",
        "capture.jpeg",
        "regressionseventeen@mailinator.com",
        "Test@123"
      ],
      "line": 61,
      "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17394742631,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GovernmentEntity_mtc7_mtc12_mtc10_mtc7"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Required_doc_11\" \"Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document\"",
  "matchedColumns": [
    0,
    16,
    1,
    17
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Selects taxpayer \"Legal Entity\" and sub category \"Government Entity\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Fills General details \"484375891798\" \"2018-06-10\" \"Nov M\" \"3\" \"2018-02-12\" \"Mining\" \"2018-02-12\" \"Medium Scale\" \"8965741235698\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Bas-Uele\" \"Aketi\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "fills Details of Business Promoters \"Shah\" \" 1rivet Building Valsad\" \"Bas-Uele\" \"Aketi\" \"789798\" \"shah@div.com\" \"98998945621\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Fills Bank Details \"32145645678\" \"Nov M\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"capture.jpg\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Acc \"doc_desc1\" \"capture.jpg\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "INC \"doc_desc1\" \"capture.jpg\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "LawDegree \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#And establish \"\u003cEstablish\u003e\" \"\u003cEstbpath\u003e\""
    }
  ],
  "line": 51,
  "name": "LOAuth\"doc_desc1_1\" \"capture.jpg\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "rev\"doc_desc1\"\"capture.jpg\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Required_doc_11",
      "offset": 106
    },
    {
      "val": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
      "offset": 132
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24879791842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 18
    },
    {
      "val": "Government Entity",
      "offset": 50
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6733545611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "484375891798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 38
    },
    {
      "val": "Nov M",
      "offset": 51
    },
    {
      "val": "3",
      "offset": 59
    },
    {
      "val": "2018-02-12",
      "offset": 63
    },
    {
      "val": "Mining",
      "offset": 76
    },
    {
      "val": "2018-02-12",
      "offset": 85
    },
    {
      "val": "Medium Scale",
      "offset": 98
    },
    {
      "val": "8965741235698",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 39399606070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Bas-Uele",
      "offset": 75
    },
    {
      "val": "Aketi",
      "offset": 86
    },
    {
      "val": "4563212",
      "offset": 94
    },
    {
      "val": "9865327452",
      "offset": 104
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 14276467651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 37
    },
    {
      "val": " 1rivet Building Valsad",
      "offset": 44
    },
    {
      "val": "Bas-Uele",
      "offset": 70
    },
    {
      "val": "Aketi",
      "offset": 81
    },
    {
      "val": "789798",
      "offset": 89
    },
    {
      "val": "shah@div.com",
      "offset": 98
    },
    {
      "val": "98998945621",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_Details_of_Business_Promoters(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25448553906,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2343460390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "Nov M",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 42
    },
    {
      "val": "Branch4",
      "offset": 56
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16215399263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "capture.jpg",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11383286609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.jpg",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8287783187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.jpg",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.inc(String,String)"
});
formatter.result({
  "duration": 10292945265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 11
    },
    {
      "val": "Capture.png",
      "offset": 23
    }
  ],
  "location": "UploadDocuments.lawdegree(String,String)"
});
formatter.result({
  "duration": 8291303887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "capture.jpg",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 13333687350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "capture.jpg",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12261016184,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 64504371309,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 11102333663,
  "status": "passed"
});
formatter.embedding("image/png", "embedded46.png");
formatter.after({
  "duration": 801697288,
  "status": "passed"
});
formatter.before({
  "duration": 17385090130,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GovernmentEntity_mtc7_mtc12_mtc10_mtc7"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Required_doc_11\" \"Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document\"",
  "matchedColumns": [
    0,
    16,
    1,
    17
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Selects taxpayer \"Legal Entity\" and sub category \"Government Entity\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Fills General details \"484375891798\" \"2018-06-10\" \"Nov M\" \"3\" \"2018-02-12\" \"Mining\" \"2018-02-12\" \"Medium Scale\" \"8965741235698\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Bas-Uele\" \"Aketi\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "fills Details of Business Promoters \"Shah\" \" 1rivet Building Valsad\" \"Bas-Uele\" \"Aketi\" \"789798\" \"shah@div.com\" \"98998945621\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Fills Bank Details \"32145645678\" \"Nov M\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"capture.png\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Acc \"doc_desc1\" \"capture.png\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "INC \"doc_desc1\" \"capture.png\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "LawDegree \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#And establish \"\u003cEstablish\u003e\" \"\u003cEstbpath\u003e\""
    }
  ],
  "line": 51,
  "name": "LOAuth\"doc_desc1_1\" \"capture.png\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "rev\"doc_desc1\"\"capture.png\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Required_doc_11",
      "offset": 106
    },
    {
      "val": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
      "offset": 132
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 25053612941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 18
    },
    {
      "val": "Government Entity",
      "offset": 50
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6673490260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "484375891798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 38
    },
    {
      "val": "Nov M",
      "offset": 51
    },
    {
      "val": "3",
      "offset": 59
    },
    {
      "val": "2018-02-12",
      "offset": 63
    },
    {
      "val": "Mining",
      "offset": 76
    },
    {
      "val": "2018-02-12",
      "offset": 85
    },
    {
      "val": "Medium Scale",
      "offset": 98
    },
    {
      "val": "8965741235698",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 39529510897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Bas-Uele",
      "offset": 75
    },
    {
      "val": "Aketi",
      "offset": 86
    },
    {
      "val": "4563212",
      "offset": 94
    },
    {
      "val": "9865327452",
      "offset": 104
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 14237738534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 37
    },
    {
      "val": " 1rivet Building Valsad",
      "offset": 44
    },
    {
      "val": "Bas-Uele",
      "offset": 70
    },
    {
      "val": "Aketi",
      "offset": 81
    },
    {
      "val": "789798",
      "offset": 89
    },
    {
      "val": "shah@div.com",
      "offset": 98
    },
    {
      "val": "98998945621",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_Details_of_Business_Promoters(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25553766821,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2353928736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "Nov M",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 42
    },
    {
      "val": "Branch4",
      "offset": 56
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16256123965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "capture.png",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11367312238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8262979854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.png",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.inc(String,String)"
});
formatter.result({
  "duration": 10320693961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 11
    },
    {
      "val": "Capture.png",
      "offset": 23
    }
  ],
  "location": "UploadDocuments.lawdegree(String,String)"
});
formatter.result({
  "duration": 8247851818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "capture.png",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 13336917104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "capture.png",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12334660779,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 64532958932,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 11103116738,
  "status": "passed"
});
formatter.embedding("image/png", "embedded47.png");
formatter.after({
  "duration": 734155713,
  "status": "passed"
});
formatter.before({
  "duration": 17945996661,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GovernmentEntity_mtc7_mtc12_mtc10_mtc7"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Required_doc_11\" \"Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document\"",
  "matchedColumns": [
    0,
    16,
    1,
    17
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Selects taxpayer \"Legal Entity\" and sub category \"Government Entity\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Fills General details \"484375891798\" \"2018-06-10\" \"Nov M\" \"3\" \"2018-02-12\" \"Mining\" \"2018-02-12\" \"Medium Scale\" \"8965741235698\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Bas-Uele\" \"Aketi\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "fills Details of Business Promoters \"Shah\" \" 1rivet Building Valsad\" \"Bas-Uele\" \"Aketi\" \"789798\" \"shah@div.com\" \"98998945621\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Fills Bank Details \"32145645678\" \"Nov M\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"capture.pdf\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Acc \"doc_desc1\" \"capture.pdf\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "INC \"doc_desc1\" \"capture.pdf\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "LawDegree \"doc_desc1\" \"Capture.pdf\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#And establish \"\u003cEstablish\u003e\" \"\u003cEstbpath\u003e\""
    }
  ],
  "line": 51,
  "name": "LOAuth\"doc_desc1_1\" \"capture.pdf\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "rev\"doc_desc1\"\"capture.pdf\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Required_doc_11",
      "offset": 106
    },
    {
      "val": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
      "offset": 132
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24872983826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 18
    },
    {
      "val": "Government Entity",
      "offset": 50
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6749591792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "484375891798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 38
    },
    {
      "val": "Nov M",
      "offset": 51
    },
    {
      "val": "3",
      "offset": 59
    },
    {
      "val": "2018-02-12",
      "offset": 63
    },
    {
      "val": "Mining",
      "offset": 76
    },
    {
      "val": "2018-02-12",
      "offset": 85
    },
    {
      "val": "Medium Scale",
      "offset": 98
    },
    {
      "val": "8965741235698",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 39343487176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Bas-Uele",
      "offset": 75
    },
    {
      "val": "Aketi",
      "offset": 86
    },
    {
      "val": "4563212",
      "offset": 94
    },
    {
      "val": "9865327452",
      "offset": 104
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 14355959086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 37
    },
    {
      "val": " 1rivet Building Valsad",
      "offset": 44
    },
    {
      "val": "Bas-Uele",
      "offset": 70
    },
    {
      "val": "Aketi",
      "offset": 81
    },
    {
      "val": "789798",
      "offset": 89
    },
    {
      "val": "shah@div.com",
      "offset": 98
    },
    {
      "val": "98998945621",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_Details_of_Business_Promoters(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25596021196,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2342479268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "Nov M",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 42
    },
    {
      "val": "Branch4",
      "offset": 56
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16212950018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "capture.pdf",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11378490137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.pdf",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8345092079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.pdf",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.inc(String,String)"
});
formatter.result({
  "duration": 10321986261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 11
    },
    {
      "val": "Capture.pdf",
      "offset": 23
    }
  ],
  "location": "UploadDocuments.lawdegree(String,String)"
});
formatter.result({
  "duration": 8174731837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "capture.pdf",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 13301427999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "capture.pdf",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12226849015,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 64619032123,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 11063580895,
  "status": "passed"
});
formatter.embedding("image/png", "embedded48.png");
formatter.after({
  "duration": 755550623,
  "status": "passed"
});
formatter.before({
  "duration": 14728120228,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document - taxpayer portal",
  "description": "",
  "id": "upload-documents-after-all-process-are-completed-till-the-banks-details;tax-payer-category-as-legal-entity-and--tax-payer-sub-category-as-governement-entity-user-wants-to-upload-the-document---taxpayer-portal;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@GovernmentEntity_mtc7_mtc12_mtc10_mtc7"
    },
    {
      "line": 1,
      "name": "@UploadDocuments"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "The users has logged in \"regressionseventeen@mailinator.com\"\"Test@123\" and proceeds for VAT Registration \"DRC_ATC_Required_doc_11\" \"Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document\"",
  "matchedColumns": [
    0,
    16,
    1,
    17
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Selects taxpayer \"Legal Entity\" and sub category \"Government Entity\" and llp \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Fills General details \"484375891798\" \"2018-06-10\" \"Nov M\" \"3\" \"2018-02-12\" \"Mining\" \"2018-02-12\" \"Medium Scale\" \"8965741235698\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Fills Business address \"Confluence Software Dharmadas building 3rd floor\" \"Bas-Uele\" \"Aketi\" \"4563212\" \"9865327452\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "fills Details of Business Promoters \"Shah\" \" 1rivet Building Valsad\" \"Bas-Uele\" \"Aketi\" \"789798\" \"shah@div.com\" \"98998945621\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Selects Authorized signatory no and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Fills Bank Details \"32145645678\" \"Nov M\" \"Advans Bank\" \"Branch4\" and clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "The user is on the upload the page with Proofs of Add \"doc_desc1\"\"capture.jpeg\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Acc \"doc_desc1\" \"capture.jpeg\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "INC \"doc_desc1\" \"capture.jpeg\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "LawDegree \"doc_desc1\" \"Capture.png\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#And establish \"\u003cEstablish\u003e\" \"\u003cEstbpath\u003e\""
    }
  ],
  "line": 51,
  "name": "LOAuth\"doc_desc1_1\" \"capture.jpeg\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "rev\"doc_desc1\"\"capture.jpeg\"",
  "matchedColumns": [
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Views the files",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Clicks on Continue.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 61
    },
    {
      "val": "DRC_ATC_Required_doc_11",
      "offset": 106
    },
    {
      "val": "Tax payer Category as Legal Entity and  Tax payer Sub Category as Governement Entity user wants to upload the document",
      "offset": 132
    }
  ],
  "location": "UploadDocuments.the_users_has_logged_in_and_proceeds_for_VAT_Registration(String,String,String,String)"
});
formatter.result({
  "duration": 24839326169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 18
    },
    {
      "val": "Government Entity",
      "offset": 50
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "UploadDocuments.selects_taxpayer_and_sub_category_and_llp(String,String,String)"
});
formatter.result({
  "duration": 6723750914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "484375891798",
      "offset": 23
    },
    {
      "val": "2018-06-10",
      "offset": 38
    },
    {
      "val": "Nov M",
      "offset": 51
    },
    {
      "val": "3",
      "offset": 59
    },
    {
      "val": "2018-02-12",
      "offset": 63
    },
    {
      "val": "Mining",
      "offset": 76
    },
    {
      "val": "2018-02-12",
      "offset": 85
    },
    {
      "val": "Medium Scale",
      "offset": 98
    },
    {
      "val": "8965741235698",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_General_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 39513314256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confluence Software Dharmadas building 3rd floor",
      "offset": 24
    },
    {
      "val": "Bas-Uele",
      "offset": 75
    },
    {
      "val": "Aketi",
      "offset": 86
    },
    {
      "val": "4563212",
      "offset": 94
    },
    {
      "val": "9865327452",
      "offset": 104
    }
  ],
  "location": "UploadDocuments.fills_Business_address(String,String,String,String,String)"
});
formatter.result({
  "duration": 14315636179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 37
    },
    {
      "val": " 1rivet Building Valsad",
      "offset": 44
    },
    {
      "val": "Bas-Uele",
      "offset": 70
    },
    {
      "val": "Aketi",
      "offset": 81
    },
    {
      "val": "789798",
      "offset": 89
    },
    {
      "val": "shah@div.com",
      "offset": 98
    },
    {
      "val": "98998945621",
      "offset": 113
    }
  ],
  "location": "UploadDocuments.fills_Details_of_Business_Promoters(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25450203548,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.selects_Authorized_signatory_no_and_clicks_continue()"
});
formatter.result({
  "duration": 2397765218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32145645678",
      "offset": 20
    },
    {
      "val": "Nov M",
      "offset": 34
    },
    {
      "val": "Advans Bank",
      "offset": 42
    },
    {
      "val": "Branch4",
      "offset": 56
    }
  ],
  "location": "UploadDocuments.fills_Bank_Details_and_clicks_continue(String,String,String,String)"
});
formatter.result({
  "duration": 16218259136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 55
    },
    {
      "val": "capture.jpeg",
      "offset": 66
    }
  ],
  "location": "UploadDocuments.the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String,String)"
});
formatter.result({
  "duration": 11305501523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.jpeg",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.acc(String,String)"
});
formatter.result({
  "duration": 8315709414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 5
    },
    {
      "val": "capture.jpeg",
      "offset": 17
    }
  ],
  "location": "UploadDocuments.inc(String,String)"
});
formatter.result({
  "duration": 10212045266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 11
    },
    {
      "val": "Capture.png",
      "offset": 23
    }
  ],
  "location": "UploadDocuments.lawdegree(String,String)"
});
formatter.result({
  "duration": 8220524580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1_1",
      "offset": 7
    },
    {
      "val": "capture.jpeg",
      "offset": 21
    }
  ],
  "location": "UploadDocuments.loauth(String,String)"
});
formatter.result({
  "duration": 13299725639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 4
    },
    {
      "val": "capture.jpeg",
      "offset": 15
    }
  ],
  "location": "UploadDocuments.rev(String,String)"
});
formatter.result({
  "duration": 12323900348,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.views_the_files()"
});
formatter.result({
  "duration": 64526979015,
  "status": "passed"
});
formatter.match({
  "location": "UploadDocuments.clicks_on_Continue()"
});
formatter.result({
  "duration": 11124211298,
  "status": "passed"
});
formatter.embedding("image/png", "embedded49.png");
formatter.after({
  "duration": 762132948,
  "status": "passed"
});
formatter.uri("features/03_02VATRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "VAT Registration",
  "description": "",
  "id": "vat-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User submits the form for vat approval - taxpayer portal",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter Data: \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And User Click on SignIn for new user"
    }
  ],
  "line": 8,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Taxpayer Category \"\u003cCategory\u003e\" , SubCategory \"\u003cSubCategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enters NIF number \"\u003cNif\u003e\"  ,Full Name Of Business \"\u003cFName Business\u003e\" , Number of COI \"\u003cCOI\u003e\" , Last Year Revenue \"\u003cRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enters NIF Registration Date \"\u003cNif Registration Date\u003e\" , Date of Incorporation \"\u003cIncorporation Date\u003e\" , Type Of Business \"\u003cBusiness Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enters Business Start Date \"\u003cStart Date\u003e\" , Company Size \"\u003cCompany Size\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters Address Details \"\u003cAddressLine1\u003e\" , \"\u003cAddressLine2\u003e\" , \"\u003cProvince\u003e\" ,\"\u003cCity\u003e\" ,\"\u003cZipCode\u003e\",\"\u003cMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business details \"\u003cBName\u003e\",\"\u003cBAddressLine1\u003e\" , \"\u003cBAddressLine2\u003e\" , \"\u003cBProvince\u003e\" ,\"\u003cBCity\u003e\" ,\"\u003cBZipCode\u003e\",\"\u003cBEmail\u003e\",\"\u003cBMobileNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Authorization signature \"\u003cOption\u003e\" with Job Title \"\u003cJob Title\u003e\" , Full Name \"\u003cFName\u003e\" Email \"\u003cAEmail\u003e\" , Mobile Number \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enters Bank Details with Account Number \"\u003cAccount Number\u003e\" , Account Holder Name \"\u003cAccount Holder Name\u003e\" ,Bank Name \"\u003cBank Name\u003e\" ,Branch \"\u003cBranch\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Address Proof of Registered Place of Business for \"\u003cA1Document Description\u003e\" , \"\u003cA1Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Bank Account Proof for \"\u003cA2Document Description\u003e\" , \"\u003cA2Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Certificate of Incorporation for \"\u003cA3Document Description\u003e\" , \"\u003cA3Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Law or Degree of Establishment for \"\u003cA4Document Description\u003e\" , \"\u003cA4Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"\u003cA5Document Description\u003e\" , \"\u003cA5Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Proof of Last Year Revenue for \"\u003cA6Document Description\u003e\" , \"\u003cA6Status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;",
  "rows": [
    {
      "cells": [
        "TestCase_Id",
        "Description",
        "email",
        "password",
        "Category",
        "SubCategory",
        "Nif",
        "Nif Registration Date",
        "FName Business",
        "COI",
        "Incorporation Date",
        "Business Type",
        "Start Date",
        "Company Size",
        "Revenue",
        "AddressLine1",
        "AddressLine2",
        "Province",
        "City",
        "ZipCode",
        "MobileNumber",
        "BName",
        "BAddressLine1",
        "BAddressLine2",
        "BProvince",
        "BCity",
        "BZipCode",
        "BEmail",
        "BMobileNumber",
        "Option",
        "Job Title",
        "FName",
        "AEmail",
        "Mobile",
        "Account Number",
        "Account Holder Name",
        "Bank Name",
        "Branch",
        "A1Document Description",
        "A1Status",
        "A2Document Description",
        "A2Status",
        "A3Document Description",
        "A3Status",
        "A4Document Description",
        "A4Status",
        "A5Document Description",
        "A5Status",
        "A6Document Description",
        "A6Status",
        "Filter",
        "Manage",
        "DeOption",
        "SDomestic1",
        "SExport1",
        "SAdjustment1",
        "SDomestic2",
        "SExport2",
        "SAdjustment2",
        "PDomestic1",
        "PImport1",
        "PAdjustment1",
        "PDomestic2",
        "PImport2",
        "PAdjustment2",
        "Efile",
        "Authorized Signatory"
      ],
      "line": 34,
      "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;1"
    },
    {
      "cells": [
        "TC_End2End_01",
        "Registartion Process",
        "regressionseventeen@mailinator.com",
        "Test@123",
        "Legal Entity",
        "Government Entity",
        "1701210ABCDFE00100587",
        "2018-08-22",
        "Approved User1",
        "ABC09ABC09AGC09",
        "2018-08-25",
        "Mining",
        "2018-08-22",
        "Large Scale",
        "75000000",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "1234567890",
        "Business 1",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "abc@mailinator.com",
        "7896541023",
        "Yes",
        "Business Analyst",
        "John",
        "john@mailinator.com",
        "7412508963",
        "00112233440017",
        "Approved User",
        "Advans Bank",
        "Branch4",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "Name of Business/Applicant",
        "Review",
        "Approve",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "\\src\\test\\resources\\Scenario.xlsx",
        "bindi"
      ],
      "line": 35,
      "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;2"
    },
    {
      "cells": [
        "TC_End2End_02",
        "Registartion Process",
        "regressioneightteen@mailinator.com",
        "Test@123",
        "Legal Entity",
        "Government Entity",
        "1701210ABCDFE00100588",
        "2018-08-22",
        "OnHolded User1",
        "ABC09ABC09AGC09",
        "2018-08-25",
        "Mining",
        "2018-08-22",
        "Large Scale",
        "75000000",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "1234567890",
        "Business 1",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "abc@mailinator.com",
        "7896541023",
        "Yes",
        "Business Analyst",
        "John",
        "john@mailinator.com",
        "7412508963",
        "00112233440027",
        "OnHolded User",
        "Advans Bank",
        "Branch4",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "Name of Business/Applicant",
        "Review",
        "Approve",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "\\src\\test\\resources\\Scenario.xlsx",
        "bindi"
      ],
      "line": 36,
      "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;3"
    },
    {
      "cells": [
        "TC_End2End_03",
        "Registartion Process",
        "regressionnineteen@mailinator.com",
        "Test@123",
        "Legal Entity",
        "Government Entity",
        "1701210ABCDFE00100589",
        "2018-08-22",
        "Rejected User1",
        "ABC09ABC09AGC09",
        "2018-08-25",
        "Mining",
        "2018-08-22",
        "Large Scale",
        "75000000",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "1234567890",
        "Business 1",
        "Dharamdas Chamber",
        "Near Axis Bank",
        "Bas-Uele",
        "Aketi",
        "444604",
        "abc@mailinator.com",
        "7896541023",
        "Yes",
        "Business Analyst",
        "John",
        "john@mailinator.com",
        "7412508963",
        "00112233440037",
        "Rejected User",
        "Advans Bank",
        "Branch4",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "doc_desc1",
        "capture.png",
        "Name of Business/Applicant",
        "Review",
        "Approve",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "100",
        "100",
        "100",
        "10",
        "10",
        "10",
        "\\src\\test\\resources\\Scenario.xlsx",
        "bindi"
      ],
      "line": 37,
      "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14898418349,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User submits the form for vat approval - taxpayer portal",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter Data: \"regressionseventeen@mailinator.com\" \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And User Click on SignIn for new user"
    }
  ],
  "line": 8,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enters NIF number \"1701210ABCDFE00100587\"  ,Full Name Of Business \"Approved User1\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"75000000\"",
  "matchedColumns": [
    6,
    8,
    9,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enters NIF Registration Date \"2018-08-22\" , Date of Incorporation \"2018-08-25\" , Type Of Business \"Mining\"",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enters Business Start Date \"2018-08-22\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters Address Details \"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"1234567890\"",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business details \"Business 1\",\"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"abc@mailinator.com\",\"7896541023\"",
  "matchedColumns": [
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analyst\" , Full Name \"John\" Email \"john@mailinator.com\" , Mobile Number \"7412508963\"",
  "matchedColumns": [
    32,
    33,
    29,
    30,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enters Bank Details with Account Number \"00112233440017\" , Account Holder Name \"Approved User\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    34,
    35,
    36,
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Bank Account Proof for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Certificate of Incorporation for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Law or Degree of Establishment for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Proof of Last Year Revenue for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    48,
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 159578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regressionseventeen@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 55
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 14173319283,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 5136998090,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 5227256795,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 6314564724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 27
    },
    {
      "val": "Government Entity",
      "offset": 56
    }
  ],
  "location": "VatRegistration.selects_Taxpayer_Category_SubCategory(String,String)"
});
formatter.result({
  "duration": 2695959759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1701210ABCDFE00100587",
      "offset": 19
    },
    {
      "val": "Approved User1",
      "offset": 67
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 100
    },
    {
      "val": "75000000",
      "offset": 138
    }
  ],
  "location": "VatRegistration.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 6813750874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 30
    },
    {
      "val": "2018-08-25",
      "offset": 67
    },
    {
      "val": "Mining",
      "offset": 99
    }
  ],
  "location": "VatRegistration.enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String,String,String)"
});
formatter.result({
  "duration": 13904751904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 28
    },
    {
      "val": "Large Scale",
      "offset": 56
    }
  ],
  "location": "VatRegistration.enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String,String)"
});
formatter.result({
  "duration": 7135004500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharamdas Chamber",
      "offset": 24
    },
    {
      "val": "Near Axis Bank",
      "offset": 46
    },
    {
      "val": "Bas-Uele",
      "offset": 65
    },
    {
      "val": "Aketi",
      "offset": 77
    },
    {
      "val": "444604",
      "offset": 86
    },
    {
      "val": "1234567890",
      "offset": 95
    }
  ],
  "location": "VatRegistration.enters_Address_Details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8970196447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business 1",
      "offset": 25
    },
    {
      "val": "Dharamdas Chamber",
      "offset": 38
    },
    {
      "val": "Near Axis Bank",
      "offset": 60
    },
    {
      "val": "Bas-Uele",
      "offset": 79
    },
    {
      "val": "Aketi",
      "offset": 91
    },
    {
      "val": "444604",
      "offset": 100
    },
    {
      "val": "abc@mailinator.com",
      "offset": 109
    },
    {
      "val": "7896541023",
      "offset": 130
    }
  ],
  "location": "VatRegistration.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8732019642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 32
    },
    {
      "val": "Business Analyst",
      "offset": 53
    },
    {
      "val": "John",
      "offset": 84
    },
    {
      "val": "john@mailinator.com",
      "offset": 97
    },
    {
      "val": "7412508963",
      "offset": 135
    }
  ],
  "location": "VatRegistration.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 5532982869,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 36190,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 182686822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440017",
      "offset": 41
    },
    {
      "val": "Approved User",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 107
    },
    {
      "val": "Branch4",
      "offset": 129
    }
  ],
  "location": "VatRegistration.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 7089987137,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 137379083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 58
    },
    {
      "val": "capture.png",
      "offset": 72
    }
  ],
  "location": "VatRegistration.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 9068952134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 31
    },
    {
      "val": "capture.png",
      "offset": 45
    }
  ],
  "location": "VatRegistration.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 6560247700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 41
    },
    {
      "val": "capture.png",
      "offset": 55
    }
  ],
  "location": "VatRegistration.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 7620123241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 43
    },
    {
      "val": "capture.png",
      "offset": 57
    }
  ],
  "location": "VatRegistration.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 6515794276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 98
    },
    {
      "val": "capture.png",
      "offset": 112
    }
  ],
  "location": "VatRegistration.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 6569151037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 39
    },
    {
      "val": "capture.png",
      "offset": 53
    }
  ],
  "location": "VatRegistration.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 6551391951,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 2289869390,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 16539051409,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 10254906609,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 526392279,
  "status": "passed"
});
formatter.embedding("image/png", "embedded50.png");
formatter.after({
  "duration": 787965848,
  "status": "passed"
});
formatter.before({
  "duration": 15265266955,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User submits the form for vat approval - taxpayer portal",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter Data: \"regressioneightteen@mailinator.com\" \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And User Click on SignIn for new user"
    }
  ],
  "line": 8,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enters NIF number \"1701210ABCDFE00100588\"  ,Full Name Of Business \"OnHolded User1\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"75000000\"",
  "matchedColumns": [
    6,
    8,
    9,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enters NIF Registration Date \"2018-08-22\" , Date of Incorporation \"2018-08-25\" , Type Of Business \"Mining\"",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enters Business Start Date \"2018-08-22\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters Address Details \"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"1234567890\"",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business details \"Business 1\",\"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"abc@mailinator.com\",\"7896541023\"",
  "matchedColumns": [
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analyst\" , Full Name \"John\" Email \"john@mailinator.com\" , Mobile Number \"7412508963\"",
  "matchedColumns": [
    32,
    33,
    29,
    30,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enters Bank Details with Account Number \"00112233440027\" , Account Holder Name \"OnHolded User\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    34,
    35,
    36,
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Bank Account Proof for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Certificate of Incorporation for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Law or Degree of Establishment for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Proof of Last Year Revenue for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    48,
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 131652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regressioneightteen@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 55
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 14093631225,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 5112354904,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 5262297371,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 6297306886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 27
    },
    {
      "val": "Government Entity",
      "offset": 56
    }
  ],
  "location": "VatRegistration.selects_Taxpayer_Category_SubCategory(String,String)"
});
formatter.result({
  "duration": 2700633127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1701210ABCDFE00100588",
      "offset": 19
    },
    {
      "val": "OnHolded User1",
      "offset": 67
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 100
    },
    {
      "val": "75000000",
      "offset": 138
    }
  ],
  "location": "VatRegistration.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 6867239002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 30
    },
    {
      "val": "2018-08-25",
      "offset": 67
    },
    {
      "val": "Mining",
      "offset": 99
    }
  ],
  "location": "VatRegistration.enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String,String,String)"
});
formatter.result({
  "duration": 13814385484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 28
    },
    {
      "val": "Large Scale",
      "offset": 56
    }
  ],
  "location": "VatRegistration.enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String,String)"
});
formatter.result({
  "duration": 7076056224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharamdas Chamber",
      "offset": 24
    },
    {
      "val": "Near Axis Bank",
      "offset": 46
    },
    {
      "val": "Bas-Uele",
      "offset": 65
    },
    {
      "val": "Aketi",
      "offset": 77
    },
    {
      "val": "444604",
      "offset": 86
    },
    {
      "val": "1234567890",
      "offset": 95
    }
  ],
  "location": "VatRegistration.enters_Address_Details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 9010618805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business 1",
      "offset": 25
    },
    {
      "val": "Dharamdas Chamber",
      "offset": 38
    },
    {
      "val": "Near Axis Bank",
      "offset": 60
    },
    {
      "val": "Bas-Uele",
      "offset": 79
    },
    {
      "val": "Aketi",
      "offset": 91
    },
    {
      "val": "444604",
      "offset": 100
    },
    {
      "val": "abc@mailinator.com",
      "offset": 109
    },
    {
      "val": "7896541023",
      "offset": 130
    }
  ],
  "location": "VatRegistration.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8690057921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 32
    },
    {
      "val": "Business Analyst",
      "offset": 53
    },
    {
      "val": "John",
      "offset": 84
    },
    {
      "val": "john@mailinator.com",
      "offset": 97
    },
    {
      "val": "7412508963",
      "offset": 135
    }
  ],
  "location": "VatRegistration.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 5589202923,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 33056,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 180942288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440027",
      "offset": 41
    },
    {
      "val": "OnHolded User",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 107
    },
    {
      "val": "Branch4",
      "offset": 129
    }
  ],
  "location": "VatRegistration.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 7099252090,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 143404310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 58
    },
    {
      "val": "capture.png",
      "offset": 72
    }
  ],
  "location": "VatRegistration.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 9038388303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 31
    },
    {
      "val": "capture.png",
      "offset": 45
    }
  ],
  "location": "VatRegistration.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 6594164103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 41
    },
    {
      "val": "capture.png",
      "offset": 55
    }
  ],
  "location": "VatRegistration.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 7544355682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 43
    },
    {
      "val": "capture.png",
      "offset": 57
    }
  ],
  "location": "VatRegistration.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 6562388046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 98
    },
    {
      "val": "capture.png",
      "offset": 112
    }
  ],
  "location": "VatRegistration.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 6552405560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 39
    },
    {
      "val": "capture.png",
      "offset": 53
    }
  ],
  "location": "VatRegistration.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 6594634004,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 2290200801,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 16543995206,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 10244300913,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 514374313,
  "status": "passed"
});
formatter.embedding("image/png", "embedded51.png");
formatter.after({
  "duration": 737882439,
  "status": "passed"
});
formatter.before({
  "duration": 14888365763,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User submits the form for vat approval - taxpayer portal",
  "description": "",
  "id": "vat-registration;user-submits-the-form-for-vat-approval---taxpayer-portal;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SP_03"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on VAT Registration Dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter Data: \"regressionnineteen@mailinator.com\" \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And User Click on SignIn for new user"
    }
  ],
  "line": 8,
  "name": "User clicks on VAT Getting Started Guide CheckBox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Clicks on Register for Vat button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Continue button of Instructions Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Selects Taxpayer Category \"Legal Entity\" , SubCategory \"Government Entity\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enters NIF number \"1701210ABCDFE00100589\"  ,Full Name Of Business \"Rejected User1\" , Number of COI \"ABC09ABC09AGC09\" , Last Year Revenue \"75000000\"",
  "matchedColumns": [
    6,
    8,
    9,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enters NIF Registration Date \"2018-08-22\" , Date of Incorporation \"2018-08-25\" , Type Of Business \"Mining\"",
  "matchedColumns": [
    7,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enters Business Start Date \"2018-08-22\" , Company Size \"Large Scale\"",
  "matchedColumns": [
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enters Address Details \"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"1234567890\"",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enters Business details \"Business 1\",\"Dharamdas Chamber\" , \"Near Axis Bank\" , \"Bas-Uele\" ,\"Aketi\" ,\"444604\",\"abc@mailinator.com\",\"7896541023\"",
  "matchedColumns": [
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select Authorization signature \"Yes\" with Job Title \"Business Analyst\" , Full Name \"John\" Email \"john@mailinator.com\" , Mobile Number \"7412508963\"",
  "matchedColumns": [
    32,
    33,
    29,
    30,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Save Draft Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clicks on VAT Registration Page Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enters Bank Details with Account Number \"00112233440037\" , Account Holder Name \"Rejected User\" ,Bank Name \"Advans Bank\" ,Branch \"Branch4\"",
  "matchedColumns": [
    34,
    35,
    36,
    37
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clicks on Bank details Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select Address Proof of Registered Place of Business for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    38,
    39
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select Bank Account Proof for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    40,
    41
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Certificate of Incorporation for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    42,
    43
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select Law or Degree of Establishment for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    44,
    45
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    46,
    47
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "select Proof of Last Year Revenue for \"doc_desc1\" , \"capture.png\"",
  "matchedColumns": [
    48,
    49
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks on document required Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on Acknowledgement checkbox and continue button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Ok button on alert page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout on Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "VatRegistration.user_is_on_VAT_Registration_Dashboard()"
});
formatter.result({
  "duration": 86058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regressionnineteen@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 54
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 13995024002,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.user_clicks_on_VAT_Getting_Started_Guide_CheckBox()"
});
formatter.result({
  "duration": 5149507330,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Register_for_Vat_button()"
});
formatter.result({
  "duration": 5267476546,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Continue_button_of_Instructions_Page()"
});
formatter.result({
  "duration": 6323378014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Legal Entity",
      "offset": 27
    },
    {
      "val": "Government Entity",
      "offset": 56
    }
  ],
  "location": "VatRegistration.selects_Taxpayer_Category_SubCategory(String,String)"
});
formatter.result({
  "duration": 2759019174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1701210ABCDFE00100589",
      "offset": 19
    },
    {
      "val": "Rejected User1",
      "offset": 67
    },
    {
      "val": "ABC09ABC09AGC09",
      "offset": 100
    },
    {
      "val": "75000000",
      "offset": 138
    }
  ],
  "location": "VatRegistration.enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String,String,String,String)"
});
formatter.result({
  "duration": 6783724196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 30
    },
    {
      "val": "2018-08-25",
      "offset": 67
    },
    {
      "val": "Mining",
      "offset": 99
    }
  ],
  "location": "VatRegistration.enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String,String,String)"
});
formatter.result({
  "duration": 13911663076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-08-22",
      "offset": 28
    },
    {
      "val": "Large Scale",
      "offset": 56
    }
  ],
  "location": "VatRegistration.enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String,String)"
});
formatter.result({
  "duration": 7048216911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharamdas Chamber",
      "offset": 24
    },
    {
      "val": "Near Axis Bank",
      "offset": 46
    },
    {
      "val": "Bas-Uele",
      "offset": 65
    },
    {
      "val": "Aketi",
      "offset": 77
    },
    {
      "val": "444604",
      "offset": 86
    },
    {
      "val": "1234567890",
      "offset": 95
    }
  ],
  "location": "VatRegistration.enters_Address_Details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8985331037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business 1",
      "offset": 25
    },
    {
      "val": "Dharamdas Chamber",
      "offset": 38
    },
    {
      "val": "Near Axis Bank",
      "offset": 60
    },
    {
      "val": "Bas-Uele",
      "offset": 79
    },
    {
      "val": "Aketi",
      "offset": 91
    },
    {
      "val": "444604",
      "offset": 100
    },
    {
      "val": "abc@mailinator.com",
      "offset": 109
    },
    {
      "val": "7896541023",
      "offset": 130
    }
  ],
  "location": "VatRegistration.enters_Business_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 8691548840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 32
    },
    {
      "val": "Business Analyst",
      "offset": 53
    },
    {
      "val": "John",
      "offset": 84
    },
    {
      "val": "john@mailinator.com",
      "offset": 97
    },
    {
      "val": "7412508963",
      "offset": 135
    }
  ],
  "location": "VatRegistration.select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String,String,String,String,String)"
});
formatter.result({
  "duration": 5576874634,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Save_Draft_Button()"
});
formatter.result({
  "duration": 26501,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_VAT_Registration_Page_Continue_Button()"
});
formatter.result({
  "duration": 174520111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00112233440037",
      "offset": 41
    },
    {
      "val": "Rejected User",
      "offset": 80
    },
    {
      "val": "Advans Bank",
      "offset": 107
    },
    {
      "val": "Branch4",
      "offset": 129
    }
  ],
  "location": "VatRegistration.enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String,String,String,String)"
});
formatter.result({
  "duration": 7061636317,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Bank_details_Continue_Button()"
});
formatter.result({
  "duration": 142627790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 58
    },
    {
      "val": "capture.png",
      "offset": 72
    }
  ],
  "location": "VatRegistration.select_Address_Proof_of_Registered_Place_of_Business_for(String,String)"
});
formatter.result({
  "duration": 9099274887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 31
    },
    {
      "val": "capture.png",
      "offset": 45
    }
  ],
  "location": "VatRegistration.select_Bank_Account_Proof_for(String,String)"
});
formatter.result({
  "duration": 6529698973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 41
    },
    {
      "val": "capture.png",
      "offset": 55
    }
  ],
  "location": "VatRegistration.select_Certificate_of_Incorporation_for(String,String)"
});
formatter.result({
  "duration": 7518394265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 43
    },
    {
      "val": "capture.png",
      "offset": 57
    }
  ],
  "location": "VatRegistration.select_Law_or_Degree_of_Establishment_for(String,String)"
});
formatter.result({
  "duration": 6580509317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 98
    },
    {
      "val": "capture.png",
      "offset": 112
    }
  ],
  "location": "VatRegistration.select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(String,String)"
});
formatter.result({
  "duration": 6579101608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doc_desc1",
      "offset": 39
    },
    {
      "val": "capture.png",
      "offset": 53
    }
  ],
  "location": "VatRegistration.select_Proof_of_Last_Year_Revenue_for(String,String)"
});
formatter.result({
  "duration": 6580282773,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_document_required_Continue_Button()"
});
formatter.result({
  "duration": 2287783758,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.clicks_on_Acknowledgement_checkbox_and_continue_button()"
});
formatter.result({
  "duration": 16492599834,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Ok_button_on_alert_page()"
});
formatter.result({
  "duration": 10255075022,
  "status": "passed"
});
formatter.match({
  "location": "VatRegistration.click_on_Logout_on_Dashboard()"
});
formatter.result({
  "duration": 527114372,
  "status": "passed"
});
formatter.embedding("image/png", "embedded52.png");
formatter.after({
  "duration": 767101537,
  "status": "passed"
});
formatter.uri("features/04_DV_1377_ManageVatRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Manage VAT Registration",
  "description": "",
  "id": "user-is-on-manage-vat-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  @ManageVATRegistration_DV-1377"
    },
    {
      "line": 4,
      "value": "#  Scenario: Validate the Manual Assessment dashboard page All clicking compoment - internal portal"
    },
    {
      "line": 5,
      "value": "#   Given User is on Assessment Page"
    },
    {
      "line": 6,
      "value": "#And User click on windows icon"
    },
    {
      "line": 7,
      "value": "#    And User enter username and password and click on login and see dashboard"
    }
  ],
  "line": 10,
  "name": "Validate Filter Functionality for Dropdown - internal portal",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown---internal-portal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@FilterByDropdown_Piority_DV-1377"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see piority \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown---internal-portal;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value"
      ],
      "line": 18,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown---internal-portal;;1"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_01",
        "Filter Priority",
        "Priority",
        "6"
      ],
      "line": 19,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown---internal-portal;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82562131295,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@title\u003d\"Windows Authentication\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.appmanager.ApplicationManager.callinternalportal(ApplicationManager.java:133)\r\n\tat org.drc.vat.StepDefinitions.TestRunner.startScenario(TestRunner.java:75)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //a[@title\u003d\"Windows Authentication\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\t... 42 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate Filter Functionality for Dropdown - internal portal",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown---internal-portal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@FilterByDropdown_Piority_DV-1377"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_01\" \"Filter Priority\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects value from filter drop down \"Priority\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enters data in type here text box \"6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see piority \"6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_01",
      "offset": 28
    },
    {
      "val": "Filter Priority",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_piority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded53.png");
formatter.after({
  "duration": 782817163,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FilterByDropdown_Piority_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for piority",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 30,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_P_01",
        "Enter Special character",
        "Priority",
        "!@!@$@@",
        "No records found"
      ],
      "line": 31,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_P_02",
        "Enter alphanumeric",
        "Priority",
        "Abd12345",
        "No records found"
      ],
      "line": 32,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_P_03",
        "Enter character with space",
        "Priority",
        "a b c d e f",
        "No records found"
      ],
      "line": 33,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513307417,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FilterByDropdown_Piority_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_P_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user selects value from filter drop down \"Priority\" for piority",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_P_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 740330,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62077797624,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_piority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded54.png");
formatter.after({
  "duration": 797187202,
  "status": "passed"
});
formatter.before({
  "duration": 5512121123,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FilterByDropdown_Piority_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_P_02\" \"Enter alphanumeric\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user selects value from filter drop down \"Priority\" for piority",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "enters data in type here text box \"Abd12345\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_P_02",
      "offset": 28
    },
    {
      "val": "Enter alphanumeric",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 249057,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62009773895,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_piority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abd12345",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded55.png");
formatter.after({
  "duration": 701387136,
  "status": "passed"
});
formatter.before({
  "duration": 5512880545,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@FilterByDropdown_Piority_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_P_03\" \"Enter character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user selects value from filter drop down \"Priority\" for piority",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "enters data in type here text box \"a b c d e f\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_P_03",
      "offset": 28
    },
    {
      "val": "Enter character with space",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 255895,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62124605115,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priority",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_piority(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a b c d e f",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded56.png");
formatter.after({
  "duration": 696398885,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 35,
      "value": "#TC_02,TC_03 Name of business, Taxpayer sub Category,Location,Last Updated Date, Tax officer, Status are all common"
    }
  ],
  "line": 37,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value"
      ],
      "line": 44,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_01",
        "Filter NIF",
        "NIF",
        "123456789"
      ],
      "line": 45,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_02",
        "Filter Applicant Name",
        "Applicant Name",
        "gfdgfdgdfgd"
      ],
      "line": 46,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_03",
        "Filter Taxpayer Category",
        "Taxpayer Category",
        "Individual"
      ],
      "line": 47,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_04",
        "Filter Location",
        "Location",
        "Gbadolite"
      ],
      "line": 48,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;5"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_05",
        "Filter Updated Date",
        "Updated Date",
        "10/17/2018"
      ],
      "line": 49,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;6"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_06",
        "Filter Tax Officer",
        "Tax Officer",
        "Jitesh"
      ],
      "line": 50,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;7"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Filter_07",
        "Filter Status Assigned",
        "Status",
        "Assigned"
      ],
      "line": 51,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512658845,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_01\" \"Filter NIF\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"NIF\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"123456789\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_01",
      "offset": 28
    },
    {
      "val": "Filter NIF",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 260455,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 61063943365,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "NIF",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded57.png");
formatter.after({
  "duration": 666534350,
  "status": "passed"
});
formatter.before({
  "duration": 5511997165,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_02\" \"Filter Applicant Name\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"Applicant Name\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"gfdgfdgdfgd\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_02",
      "offset": 28
    },
    {
      "val": "Filter Applicant Name",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 252761,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62243992299,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applicant Name",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "gfdgfdgdfgd",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded58.png");
formatter.after({
  "duration": 718476277,
  "status": "passed"
});
formatter.before({
  "duration": 5512189513,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_03\" \"Filter Taxpayer Category\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"Taxpayer Category\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"Individual\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_03",
      "offset": 28
    },
    {
      "val": "Filter Taxpayer Category",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 245637,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62229782125,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer Category",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Individual",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded59.png");
formatter.after({
  "duration": 702120342,
  "status": "passed"
});
formatter.before({
  "duration": 5511685132,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_04\" \"Filter Location\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"Gbadolite\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_04",
      "offset": 28
    },
    {
      "val": "Filter Location",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 263589,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62147264968,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gbadolite",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded60.png");
formatter.after({
  "duration": 687307758,
  "status": "passed"
});
formatter.before({
  "duration": 5512053871,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_05\" \"Filter Updated Date\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"Updated Date\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"10/17/2018\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_05",
      "offset": 28
    },
    {
      "val": "Filter Updated Date",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 578757,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62202641536,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated Date",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10/17/2018",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded61.png");
formatter.after({
  "duration": 730910287,
  "status": "passed"
});
formatter.before({
  "duration": 5512005998,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_06\" \"Filter Tax Officer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"Tax Officer\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"Jitesh\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_06",
      "offset": 28
    },
    {
      "val": "Filter Tax Officer",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 250481,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62256095469,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jitesh",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded62.png");
formatter.after({
  "duration": 695716687,
  "status": "passed"
});
formatter.before({
  "duration": 5511379368,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@FilterByDropdown_DV-1377"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Filter_07\" \"Filter Status Assigned\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user selects value from filter drop down \"Status\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enters data in type here text box \"Assigned\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Filter_07",
      "offset": 28
    },
    {
      "val": "Filter Status Assigned",
      "offset": 61
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 249056,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62167307450,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:39)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Status",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Assigned",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded63.png");
formatter.after({
  "duration": 693456942,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@FilterByDropdown_NIF_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for nif",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 62,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_N_01",
        "Enter Special character",
        "NIF",
        "!@!@$@@",
        "No records found"
      ],
      "line": 63,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_N_02",
        "Enter character with space",
        "NIF",
        "a b c d e f",
        "No records found"
      ],
      "line": 64,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5510871566,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@FilterByDropdown_NIF_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_N_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user selects value from filter drop down \"NIF\" for nif",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_N_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 294366,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62088014064,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:56)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "NIF",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_nif(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded64.png");
formatter.after({
  "duration": 720968835,
  "status": "passed"
});
formatter.before({
  "duration": 5511026871,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@FilterByDropdown_NIF_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_N_02\" \"Enter character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user selects value from filter drop down \"NIF\" for nif",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "enters data in type here text box \"a b c d e f\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_N_02",
      "offset": 28
    },
    {
      "val": "Enter character with space",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 260170,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62201417912,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:56)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "NIF",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_nif(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a b c d e f",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded65.png");
formatter.after({
  "duration": 674909653,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@FilterByDropdown_ApplicantName_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for Applicant Name",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 75,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_AN_01",
        "Enter Special character",
        "Applicant Name",
        "!@!@$@@",
        "No records found"
      ],
      "line": 76,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_AN_02",
        "Enter character with space",
        "Applicant Name",
        "a b c d e f",
        "No records found"
      ],
      "line": 77,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_AN_03",
        "Enter alphanumeric",
        "Applicant Name",
        "Abd123454561",
        "No records found"
      ],
      "line": 78,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5510863872,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@FilterByDropdown_ApplicantName_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_AN_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user selects value from filter drop down \"Applicant Name\" for Applicant Name",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_AN_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 623211,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62311550686,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:69)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applicant Name",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Applicant_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded66.png");
formatter.after({
  "duration": 1843230711,
  "status": "passed"
});
formatter.before({
  "duration": 5542654177,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@FilterByDropdown_ApplicantName_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_AN_02\" \"Enter character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user selects value from filter drop down \"Applicant Name\" for Applicant Name",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "enters data in type here text box \"a b c d e f\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_AN_02",
      "offset": 28
    },
    {
      "val": "Enter character with space",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 337964,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62203937826,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:69)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applicant Name",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Applicant_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a b c d e f",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded67.png");
formatter.after({
  "duration": 677062822,
  "status": "passed"
});
formatter.before({
  "duration": 5017613185,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@FilterByDropdown_ApplicantName_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_AN_03\" \"Enter alphanumeric\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user selects value from filter drop down \"Applicant Name\" for Applicant Name",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "enters data in type here text box \"Abd123454561\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_AN_03",
      "offset": 28
    },
    {
      "val": "Enter alphanumeric",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 342809,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62072936750,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:69)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applicant Name",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Applicant_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abd123454561",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded68.png");
formatter.after({
  "duration": 684374649,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@FilterByDropdown_TaxpayerCategory_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for Taxpayer Category",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 89,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_TC_01",
        "Enter Special character",
        "Taxpayer Category",
        "!@!@$@@",
        "No records found"
      ],
      "line": 90,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_TC_02",
        "Enter character with space",
        "Taxpayer Category",
        "a b c d e f",
        "No records found"
      ],
      "line": 91,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_TC_03",
        "Enter alphanumeric",
        "Taxpayer Category",
        "Abd123454561",
        "No records found"
      ],
      "line": 92,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5017694399,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@FilterByDropdown_TaxpayerCategory_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_TC_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user selects value from filter drop down \"Taxpayer Category\" for Taxpayer Category",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_TC_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 1346443,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62130094898,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:83)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer Category",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Taxpayer_Category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded69.png");
formatter.after({
  "duration": 700859672,
  "status": "passed"
});
formatter.before({
  "duration": 5017112508,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@FilterByDropdown_TaxpayerCategory_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_TC_02\" \"Enter character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user selects value from filter drop down \"Taxpayer Category\" for Taxpayer Category",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "enters data in type here text box \"a b c d e f\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_TC_02",
      "offset": 28
    },
    {
      "val": "Enter character with space",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 288381,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62159902440,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:83)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer Category",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Taxpayer_Category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a b c d e f",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded70.png");
formatter.after({
  "duration": 710679730,
  "status": "passed"
});
formatter.before({
  "duration": 5017753671,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@FilterByDropdown_TaxpayerCategory_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_TC_03\" \"Enter alphanumeric\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user selects value from filter drop down \"Taxpayer Category\" for Taxpayer Category",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "enters data in type here text box \"Abd123454561\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_TC_03",
      "offset": 28
    },
    {
      "val": "Enter alphanumeric",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 146470,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62309330266,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:83)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer Category",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Taxpayer_Category(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abd123454561",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded71.png");
formatter.after({
  "duration": 702311836,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@FilterByDropdown_Location_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for Location",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 103,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_L_01",
        "Enter Special character",
        "Location",
        "!@!@$@@",
        "No records found"
      ],
      "line": 104,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_L_02",
        "Enter character with space",
        "Location",
        "a b c d e f",
        "No records found"
      ],
      "line": 105,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_L_03",
        "Enter alphanumeric",
        "Location",
        "Abd123454561",
        "No records found"
      ],
      "line": 106,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5017416277,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@FilterByDropdown_Location_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_L_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "user selects value from filter drop down \"Location\" for Location",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_L_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 306334,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62090374115,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:97)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Location(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded72.png");
formatter.after({
  "duration": 733727986,
  "status": "passed"
});
formatter.before({
  "duration": 5018497421,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@FilterByDropdown_Location_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_L_02\" \"Enter character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "user selects value from filter drop down \"Location\" for Location",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "enters data in type here text box \"a b c d e f\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_L_02",
      "offset": 28
    },
    {
      "val": "Enter character with space",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 240508,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62154351961,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:97)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Location(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a b c d e f",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded73.png");
formatter.after({
  "duration": 703958913,
  "status": "passed"
});
formatter.before({
  "duration": 5017315400,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@FilterByDropdown_Location_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_L_03\" \"Enter alphanumeric\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "user selects value from filter drop down \"Location\" for Location",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "enters data in type here text box \"Abd123454561\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_L_03",
      "offset": 28
    },
    {
      "val": "Enter alphanumeric",
      "offset": 65
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 233669,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62096089873,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:97)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Location(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abd123454561",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded74.png");
formatter.after({
  "duration": 730882076,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 109,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@FilterByDropdown_UpdatedDate_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for Updated Date",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 116,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 117,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_UD_01",
        "Enter Special character",
        "Updated Date",
        "!@!@$@@",
        "No records found"
      ],
      "line": 118,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_UD_02",
        "Enter character with space",
        "Updated Date",
        "a b c d e f",
        "No records found"
      ],
      "line": 119,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_UD_03",
        "Enter alphanumeric",
        "Updated Date",
        "Abd12345",
        "No records found"
      ],
      "line": 120,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5041864264,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@FilterByDropdown_UpdatedDate_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_UD_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "user selects value from filter drop down \"Updated Date\" for Updated Date",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_UD_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 265869,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62094846301,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:111)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated Date",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Updated_Date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded75.png");
formatter.after({
  "duration": 692833731,
  "status": "passed"
});
formatter.before({
  "duration": 5020333427,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@FilterByDropdown_UpdatedDate_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_UD_02\" \"Enter character with space\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "user selects value from filter drop down \"Updated Date\" for Updated Date",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "enters data in type here text box \"a b c d e f\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_UD_02",
      "offset": 28
    },
    {
      "val": "Enter character with space",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 221130,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62151053531,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:111)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated Date",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Updated_Date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a b c d e f",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded76.png");
formatter.after({
  "duration": 714236619,
  "status": "passed"
});
formatter.before({
  "duration": 5017328508,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@FilterByDropdown_UpdatedDate_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_UD_03\" \"Enter alphanumeric\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "user selects value from filter drop down \"Updated Date\" for Updated Date",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "enters data in type here text box \"Abd12345\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_UD_03",
      "offset": 28
    },
    {
      "val": "Enter alphanumeric",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 251621,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62181729637,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:111)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated Date",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Updated_Date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Abd12345",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded77.png");
formatter.after({
  "duration": 699792491,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 123,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@FilterByDropdown_TaxOfficer_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\" for Tax Officer",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User see mess \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 130,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "Value",
        "mess"
      ],
      "line": 131,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;1"
    },
    {
      "cells": [
        "InValid_Manage_VAT_Reg_Filter_TO_01",
        "Enter Special character",
        "Tax Officer",
        "!@!@$@@",
        "No records found"
      ],
      "line": 132,
      "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5019776898,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Validate Filter Functionality for Dropdown",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-functionality-for-dropdown;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@FilterByDropdown_TaxOfficer_invalid_data_DV-1377"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "User is on Internal Portal \"InValid_Manage_VAT_Reg_Filter_TO_01\" \"Enter Special character\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "user selects value from filter drop down \"Tax Officer\" for Tax Officer",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "enters data in type here text box \"!@!@$@@\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User see mess \"No records found\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "InValid_Manage_VAT_Reg_Filter_TO_01",
      "offset": 28
    },
    {
      "val": "Enter Special character",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 177531,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62238911436,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:125)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down_for_Tax_Officer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@$@@",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 15
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_see_mess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded78.png");
formatter.after({
  "duration": 703181253,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 133,
      "value": "#| InValid_Manage_VAT_Reg_Filter_TO_02 | Enter character with space | Tax Officer | a b c d e f  | No records found |"
    },
    {
      "line": 134,
      "value": "#| InValid_Manage_VAT_Reg_Filter_TO_03 | Enter alphanumeric         | Tax Officer | Abd123454561 | No records found |"
    },
    {
      "line": 136,
      "value": "#@FilterByDropdown_Status_invalid_data_DV-1377"
    },
    {
      "line": 137,
      "value": "#Scenario Outline: Validate Filter Functionality for Dropdown"
    },
    {
      "line": 138,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 139,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 140,
      "value": "#Then user selects value from filter drop down \"\u003cFilters\u003e\" for Status"
    },
    {
      "line": 141,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 142,
      "value": "#And User see mess \"\u003cmess\u003e\""
    },
    {
      "line": 143,
      "value": "#"
    },
    {
      "line": 144,
      "value": "#Examples:"
    },
    {
      "line": 145,
      "value": "#| TestcaseID                         | Description                | Filters | Value       | mess             |"
    },
    {
      "line": 146,
      "value": "#| InValid_Manage_VAT_Reg_Filter_S_01 | Enter Special character    | Status  | !@!@$@@     | No records found |"
    },
    {
      "line": 147,
      "value": "#| InValid_Manage_VAT_Reg_Filter_S_02 | Enter character with space | Status  | a b c d e f | No records found |"
    },
    {
      "line": 148,
      "value": "#| InValid_Manage_VAT_Reg_Filter_S_03 | Enter alphanumeric         | Status  | Abd12345    | No records found |"
    },
    {
      "line": 150,
      "value": "# filter will removed from all the screen"
    },
    {
      "line": 151,
      "value": "#TC_04"
    },
    {
      "line": 152,
      "value": "#  @FilterByAll"
    },
    {
      "line": 153,
      "value": "#  Scenario Outline: Validate Filter Functionality for All"
    },
    {
      "line": 154,
      "value": "#    Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 155,
      "value": "#    When user selects Manage Vat Registraion"
    },
    {
      "line": 156,
      "value": "#    Then user selects All from filter dropdown"
    },
    {
      "line": 157,
      "value": "#    And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 158,
      "value": "#    And User see value \"\u003cValue\u003e\""
    },
    {
      "line": 159,
      "value": "#    Examples:"
    },
    {
      "line": 160,
      "value": "#      | TestcaseID                         | Description    | Value    |"
    },
    {
      "line": 161,
      "value": "#      | Valid_Manage_VAT_Reg_Filter_All_01 | enter Rejected | Rejected |"
    },
    {
      "line": 162,
      "value": "#  @FilterByAll_invalid_DV-1377"
    },
    {
      "line": 163,
      "value": "# Scenario Outline: Validate Filter Functionality for All"
    },
    {
      "line": 164,
      "value": "#   Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 165,
      "value": "#   When user selects Manage Vat Registraion"
    },
    {
      "line": 166,
      "value": "#   Then user selects All from filter dropdown select"
    },
    {
      "line": 167,
      "value": "#   And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 168,
      "value": "#   And User see mess \"\u003cmess\u003e\""
    },
    {
      "line": 169,
      "value": "#   Examples:"
    },
    {
      "line": 170,
      "value": "#     | TestcaseID                           | Description                | Value       | mess             |"
    },
    {
      "line": 171,
      "value": "#     | InValid_Manage_VAT_Reg_Filter_All_01 | Enter Special character    | !@!@$@@     | No records found |"
    },
    {
      "line": 172,
      "value": "#     | InValid_Manage_VAT_Reg_Filter_All_02 | Enter character with space | a b c d e f | No records found |"
    },
    {
      "line": 173,
      "value": "#     | InValid_Manage_VAT_Reg_Filter_All_03 | Enter alphanumeric         | Abd12345    | No records found |"
    },
    {
      "line": 179,
      "value": "#@TC_06_TC_05_ManageVATRegistration_DV-1377"
    },
    {
      "line": 180,
      "value": "#Scenario Outline: Validate Admin/Supervisor is able to filter data and then download the pdf/excel file"
    },
    {
      "line": 181,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 182,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 183,
      "value": "#Then user selects value from filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 184,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 185,
      "value": "#Then clicks on download pdf button"
    },
    {
      "line": 186,
      "value": "#And user clicks on download and click on Excel button"
    },
    {
      "line": 187,
      "value": "#"
    },
    {
      "line": 188,
      "value": "#Examples:"
    },
    {
      "line": 189,
      "value": "#| TestcaseID                        | Description                        | Filters  | Value |"
    },
    {
      "line": 190,
      "value": "#| Valid_Manage_VAT_Reg_DonPDF_05_06 | Filter with download PDF and Excel | Priority |    10 |"
    },
    {
      "line": 191,
      "value": "#"
    },
    {
      "line": 192,
      "value": "#@TC_07_ManageVATRegistration_DV-1377"
    },
    {
      "line": 193,
      "value": "#Scenario Outline: User Navigate to particular page"
    },
    {
      "line": 194,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 195,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 196,
      "value": "#And User click on page \"\u003cClickPage\u003e\" and check page\"\u003cCheckPage\u003e\" \"\u003coption\u003e\""
    },
    {
      "line": 197,
      "value": "#And User click on Dashboard"
    },
    {
      "line": 198,
      "value": "#"
    },
    {
      "line": 199,
      "value": "#Examples:"
    },
    {
      "line": 200,
      "value": "#| TestcaseID                       | Description                | Filters  | Value    | Period        | ClickPage       | CheckPage       | option          |"
    },
    {
      "line": 201,
      "value": "#| Valid_Manage_VAT_Reg_Navigate_01 | validating last and right  | Status   | rejected | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |"
    },
    {
      "line": 202,
      "value": "#| Valid_Manage_VAT_Reg_Navigate_02 | validating last and left   | Priority |        1 | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |"
    },
    {
      "line": 203,
      "value": "#| Valid_Manage_VAT_Reg_Navigate_03 | validating right and left  | Status   | rejected | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |"
    },
    {
      "line": 204,
      "value": "#| Valid_Manage_VAT_Reg_Navigate_04 | validating right and first | Priority |        1 | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |"
    },
    {
      "line": 205,
      "value": "#| Valid_Manage_VAT_Reg_Navigate_05 | validating first and left  | Status   | rejected | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |"
    },
    {
      "line": 206,
      "value": "#| Valid_Manage_VAT_Reg_Navigate_06 | validating first and first | Priority |        1 | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |"
    },
    {
      "line": 207,
      "value": "#"
    },
    {
      "line": 208,
      "value": "#TC_08"
    },
    {
      "line": 209,
      "value": "#@ShowEnteries_ManageVATRegistration_DV-1377"
    },
    {
      "line": 210,
      "value": "#Scenario Outline: Validate User Click on Show Enteries"
    },
    {
      "line": 211,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 212,
      "value": "#  Then user selects value from filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 213,
      "value": "#  And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 214,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 215,
      "value": "#And User Click Dropdown \"\u003cValue1\u003e\""
    },
    {
      "line": 216,
      "value": "#Then user see the page result"
    },
    {
      "line": 217,
      "value": "#"
    },
    {
      "line": 218,
      "value": "#Examples:"
    },
    {
      "line": 219,
      "value": "#| TestcaseID                   | Filters  | Value    | Description      | Value1 |"
    },
    {
      "line": 220,
      "value": "#| Valid_Manage_VAT_Reg_Show_01 | Status   | rejected | Show 20 Entries  |    20 |"
    },
    {
      "line": 221,
      "value": "#| Valid_Manage_VAT_Reg_show_02 | Priority |        1 | Show 15 Entries  |    15 |"
    },
    {
      "line": 222,
      "value": "#| Valid_Manage_VAT_Reg_Show_03 | Status   | rejected | Show 25 Entries  |    25 |"
    },
    {
      "line": 223,
      "value": "#| Valid_Manage_VAT_Reg_Show_04 | Priority |        1 | Show 50 Entries  |    50 |"
    },
    {
      "line": 224,
      "value": "#| Valid_Manage_VAT_Reg_Show_05 | Status   | rejected | Show 100 Entries |   100 |"
    },
    {
      "line": 225,
      "value": "#"
    },
    {
      "line": 226,
      "value": "#TC_09"
    },
    {
      "line": 227,
      "value": "#@StatusChangePriority_ManageVATRegistration_DV-1377"
    },
    {
      "line": 228,
      "value": "#Scenario Outline: Validate Review in Progress from Filter status and user select Change Priority"
    },
    {
      "line": 229,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 230,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 231,
      "value": "#Then user selects value from filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 232,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 233,
      "value": "#And user click on Change Priority"
    },
    {
      "line": 234,
      "value": "#And user selects priority from priority list \"\u003cChangePriority\u003e\""
    },
    {
      "line": 235,
      "value": "#And click on right tick"
    },
    {
      "line": 236,
      "value": "#Then Priority is Changed and toast message display"
    },
    {
      "line": 237,
      "value": "#"
    },
    {
      "line": 238,
      "value": "#Examples:"
    },
    {
      "line": 239,
      "value": "#| TestcaseID                             | Description          | Filters | Value    | ChangePriority |"
    },
    {
      "line": 240,
      "value": "#| Valid_Manage_VAT_Reg_ChangePriority_01 | user change priority | Status  | assigned | Ten            |"
    },
    {
      "line": 241,
      "value": "#"
    },
    {
      "line": 242,
      "value": "#TC_10"
    },
    {
      "line": 243,
      "value": "#@StatusReassign_ManageVATRegistration_DV-1377"
    },
    {
      "line": 244,
      "value": "#Scenario Outline: Validate Review in Progress from Filter status and user select Reassign"
    },
    {
      "line": 245,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 246,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 247,
      "value": "#And user click on Reassign"
    },
    {
      "line": 248,
      "value": "#And select another Tax Officier fron the list \"\u003cChangeOfficer\u003e\""
    },
    {
      "line": 249,
      "value": "#And click on right tick for reassign"
    },
    {
      "line": 250,
      "value": "#Then Tax Officier Changed and toast message display"
    },
    {
      "line": 251,
      "value": "#"
    },
    {
      "line": 252,
      "value": "#Examples:"
    },
    {
      "line": 253,
      "value": "#| TestcaseID                       | Description         | Value              | ChangeOfficer           |"
    },
    {
      "line": 254,
      "value": "#| Valid_Manage_VAT_Reg_Reassign_01 | user change officer | Review in Progress | drp_SelectTaxOfficerOne |"
    },
    {
      "line": 255,
      "value": "#"
    },
    {
      "line": 256,
      "value": "#TC_11"
    },
    {
      "line": 257,
      "value": "#@RejectedPopup_ManageVATRegistration_DV-1377"
    },
    {
      "line": 258,
      "value": "#Scenario Outline: Validate Pop up when user Click on Rejected"
    },
    {
      "line": 259,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 260,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 261,
      "value": "#Then user selects value from filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 262,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 263,
      "value": "#And User click on Rejected"
    },
    {
      "line": 264,
      "value": "#Then User See pop up Reason for Rejected"
    },
    {
      "line": 265,
      "value": "#"
    },
    {
      "line": 266,
      "value": "#Examples:"
    },
    {
      "line": 267,
      "value": "#| TestcaseID                       | Description            | Filters | Value      |"
    },
    {
      "line": 268,
      "value": "#| Valid_Manage_VAT_Reg_RejPopUp_01 | user click on rejected | NIF     | LOKI123456 |"
    },
    {
      "line": 269,
      "value": "#"
    },
    {
      "line": 270,
      "value": "#TC_12"
    },
    {
      "line": 271,
      "value": "#@OnHold_ManageVATRegistration_DV-1377"
    },
    {
      "line": 272,
      "value": "#Scenario Outline: Validate Pop up when user Click on OnHold"
    },
    {
      "line": 273,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 274,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 275,
      "value": "#Then user selects value from filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 276,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 277,
      "value": "#And User click on OnHold"
    },
    {
      "line": 278,
      "value": "#Then User See pop up Reason for OnHold"
    },
    {
      "line": 279,
      "value": "#"
    },
    {
      "line": 280,
      "value": "#Examples:"
    },
    {
      "line": 281,
      "value": "#| TestcaseID                          | Description           | Filters | Value  |"
    },
    {
      "line": 282,
      "value": "#| Valid_Manage_VAT_Reg_OnHoldPopUp_01 | user click on on hold | Status  | OnHold |"
    },
    {
      "line": 283,
      "value": "#"
    },
    {
      "line": 284,
      "value": "#TC_13"
    },
    {
      "line": 285,
      "value": "#@StatusReviewInProgress_ManageVATRegistration_DV-1377"
    },
    {
      "line": 286,
      "value": "#Scenario Outline: Validate Review in Progress from Filter status and user select Review"
    },
    {
      "line": 287,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 288,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 289,
      "value": "#And select filter"
    },
    {
      "line": 290,
      "value": "#Then user selects value from filter drop down \"\u003cFilters\u003e\""
    },
    {
      "line": 291,
      "value": "#And enters data in type here text box \"\u003cValue\u003e\""
    },
    {
      "line": 292,
      "value": "#And user click on manage setting and select Review"
    },
    {
      "line": 293,
      "value": "#Then it Navigate to Tax Payer Details"
    },
    {
      "line": 294,
      "value": "#"
    },
    {
      "line": 295,
      "value": "#Examples:"
    },
    {
      "line": 296,
      "value": "#| TestcaseID                     | Description                        | Filters | Value              |"
    },
    {
      "line": 297,
      "value": "#| Valid_Manage_VAT_Reg_Review_01 | user navigate to tax payer details | Status  | Review in Progress |"
    },
    {
      "line": 298,
      "value": "#"
    },
    {
      "line": 299,
      "value": "#@TC_14_ManageVATRegistration_Sort_DV-1377"
    },
    {
      "line": 300,
      "value": "#Scenario Outline: Validate User is able to do sorting"
    },
    {
      "line": 301,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 302,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 303,
      "value": "#And user click on the sorting \"\u003csort\u003e\""
    },
    {
      "line": 304,
      "value": "#Then User see sorting result"
    },
    {
      "line": 305,
      "value": "#"
    },
    {
      "line": 306,
      "value": "#Examples:"
    },
    {
      "line": 307,
      "value": "#| TestcaseID                   | Description                     | sort |"
    },
    {
      "line": 308,
      "value": "#| Valid_Manage_VAT_Reg_Sort_01 | user validate ascending order   | asc  |"
    },
    {
      "line": 309,
      "value": "#| Valid_Manage_VAT_Reg_Sort_02 | user validate descending  order | desc |"
    },
    {
      "line": 310,
      "value": "#"
    },
    {
      "line": 311,
      "value": "#@TC_15_ManageVATRegistration_DV-1377"
    },
    {
      "line": 312,
      "value": "#Scenario Outline: Validate whether all filter working properly when used simultaneously"
    },
    {
      "line": 313,
      "value": "#Given User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 314,
      "value": "#When user selects Manage Vat Registraion"
    },
    {
      "line": 315,
      "value": "#And user select from filter \"\u003cFilters\u003e\""
    },
    {
      "line": 316,
      "value": "#And enter valid data in Type Here \"\u003cValue1\u003e\""
    },
    {
      "line": 317,
      "value": "#And user click on NIF sorting \"\u003csorting\u003e\""
    },
    {
      "line": 318,
      "value": "#And user select from filter \"\u003cFilters1\u003e\""
    },
    {
      "line": 319,
      "value": "#And enter valid filter data \"\u003cValue3\u003e\" and verify"
    },
    {
      "line": 320,
      "value": "#"
    },
    {
      "line": 321,
      "value": "#Examples:"
    },
    {
      "line": 322,
      "value": "#| TestcaseID                                    | Description                                  | Value1 | Filters  | sorting | Value3   | Filters1 |"
    },
    {
      "line": 323,
      "value": "#| Valid_Manage_VAT_Reg_Filter_Simultaneously_01 | user check multuiple possibility with filter |      7 | Priority | asc     | Rejected | Status   |"
    },
    {
      "line": 327,
      "value": "#TC_16"
    }
  ],
  "line": 329,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"\u003cFilters\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"\u003cValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"\u003ccheck\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 336,
  "name": "",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Filters",
        "Value",
        "check"
      ],
      "line": 337,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;1"
    },
    {
      "comments": [
        {
          "line": 338,
          "value": "#| Valid_Manage_VAT_Reg_Combination_01 | Priority          | A10           | No records found |"
        },
        {
          "line": 339,
          "value": "#| Valid_Manage_VAT_Reg_Combination_02 | NIF               | Arun          | No records found |"
        }
      ],
      "cells": [
        "Valid_Manage_VAT_Reg_Combination_03",
        "Applicant Name",
        "Individual",
        "No records found"
      ],
      "line": 340,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;2"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Combination_04",
        "Taxpayer Category",
        "Banana",
        "No records found"
      ],
      "line": 341,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;3"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Combination_05",
        "Location",
        "06/19/2018",
        "No records found"
      ],
      "line": 342,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;4"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Combination_06",
        "Updated Date",
        "officer",
        "No records found"
      ],
      "line": 343,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;5"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Combination_07",
        "Tax Officer",
        "Rejected",
        "No records found"
      ],
      "line": 344,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;6"
    },
    {
      "cells": [
        "Valid_Manage_VAT_Reg_Combination_08",
        "Status",
        "JUIJIBI121213",
        "No records found"
      ],
      "line": 345,
      "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5017940321,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 338,
      "value": "#| Valid_Manage_VAT_Reg_Combination_01 | Priority          | A10           | No records found |"
    },
    {
      "line": 339,
      "value": "#| Valid_Manage_VAT_Reg_Combination_02 | NIF               | Arun          | No records found |"
    }
  ],
  "line": 340,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Combination_03\" \"\u003cDescription\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"Applicant Name\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"Individual\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"No records found\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Combination_03",
      "offset": 28
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 344518,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62171928671,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:331)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applicant Name",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Individual",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 24
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_checks_its_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded79.png");
formatter.after({
  "duration": 725949677,
  "status": "passed"
});
formatter.before({
  "duration": 5017511739,
  "status": "passed"
});
formatter.scenario({
  "line": 341,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Combination_04\" \"\u003cDescription\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"Taxpayer Category\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"Banana\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"No records found\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Combination_04",
      "offset": 28
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 224264,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62141186454,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:331)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taxpayer Category",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 24
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_checks_its_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded80.png");
formatter.after({
  "duration": 1907407460,
  "status": "passed"
});
formatter.before({
  "duration": 5684407705,
  "status": "passed"
});
formatter.scenario({
  "line": 342,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Combination_05\" \"\u003cDescription\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"Location\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"06/19/2018\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"No records found\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Combination_05",
      "offset": 28
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 226259,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62106225383,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:331)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "06/19/2018",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 24
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_checks_its_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded81.png");
formatter.after({
  "duration": 723667991,
  "status": "passed"
});
formatter.before({
  "duration": 5017824626,
  "status": "passed"
});
formatter.scenario({
  "line": 343,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Combination_06\" \"\u003cDescription\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"Updated Date\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"officer\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"No records found\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Combination_06",
      "offset": 28
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 249626,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62133521845,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:331)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Updated Date",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "officer",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 24
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_checks_its_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded82.png");
formatter.after({
  "duration": 750399089,
  "status": "passed"
});
formatter.before({
  "duration": 5016582195,
  "status": "passed"
});
formatter.scenario({
  "line": 344,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Combination_07\" \"\u003cDescription\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"Tax Officer\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"Rejected\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"No records found\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Combination_07",
      "offset": 28
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 225119,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
formatter.result({
  "duration": 62125864645,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@title\u003d\"Manage VAT Registration\"] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat ✽.When user selects Manage Vat Registraion(features/04_DV_1377_ManageVatRegistration.feature:331)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@title\u003d\"Manage VAT Registration\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion(DV_1377_ManageVatRegistration.java:57)\r\n\tat sun.reflect.GeneratedMethodAccessor33.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax Officer",
      "offset": 42
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_selects_value_from_filter_drop_down(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 35
    }
  ],
  "location": "DV_1377_ManageVatRegistration.enters_data_in_type_here_text_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No records found",
      "offset": 24
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_checks_its_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded83.png");
formatter.after({
  "duration": 783233207,
  "status": "passed"
});
formatter.before({
  "duration": 5017353015,
  "status": "passed"
});
formatter.scenario({
  "line": 345,
  "name": "Validate filter fucntionality and Type here with different combination Invalid",
  "description": "",
  "id": "user-is-on-manage-vat-registration;validate-filter-fucntionality-and-type-here-with-different-combination-invalid;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 328,
      "name": "@FilterCombinationInvalid_ManageVATRegistration_DV-1377"
    }
  ]
});
formatter.step({
  "line": 330,
  "name": "User is on Internal Portal \"Valid_Manage_VAT_Reg_Combination_08\" \"\u003cDescription\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "user selects Manage Vat Registraion",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "user selects value from filter drop down \"Status\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "enters data in type here text box \"JUIJIBI121213\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "user checks its result \"No records found\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Valid_Manage_VAT_Reg_Combination_08",
      "offset": 28
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 66
    }
  ],
  "location": "DV_1377_ManageVatRegistration.user_is_on_Internal_Portal(String,String)"
});
formatter.result({
  "duration": 252191,
  "status": "passed"
});
formatter.match({
  "location": "DV_1377_ManageVatRegistration.user_selects_Manage_Vat_Registraion()"
});
