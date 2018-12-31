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
      "line": 12,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;1"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_01",
        "Register with valid data",
        "Approveddd User"
      ],
      "line": 13,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;2"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_02",
        "Register with valid data",
        "OnHoldeddd User"
      ],
      "line": 14,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;3"
    },
    {
      "cells": [
        "DRC_ATC_Valid_Registration_03",
        "Register with valid data",
        "Rejecteddd User"
      ],
      "line": 15,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;new-user-should-be-allowed-to-register-in-drc-tax-portal-with-valid-details.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8057642078,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "name": "Establish a connection with data base and execute query to create user\"Approveddd User\".",
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
  "duration": 125189998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approveddd User",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 279894917,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 54125649,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 53268484,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 765891324,
  "status": "passed"
});
formatter.before({
  "duration": 5509963690,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "name": "Establish a connection with data base and execute query to create user\"OnHoldeddd User\".",
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
  "duration": 170977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OnHoldeddd User",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 39725103,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 42190022,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 42146708,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 771591130,
  "status": "passed"
});
formatter.before({
  "duration": 5505707786,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "name": "Establish a connection with data base and execute query to create user\"Rejecteddd User\".",
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
  "duration": 172402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejecteddd User",
      "offset": 71
    }
  ],
  "location": "userRegistration.establish_a_connection_with_data_base_and_execute_query_to_create_user(String)"
});
formatter.result({
  "duration": 45662568,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_another_table_based_on_created_user()"
});
formatter.result({
  "duration": 53891695,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.update_data_in_roles_table()"
});
formatter.result({
  "duration": 48313852,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 760679942,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "# | DRC_ATC_Valid_Registration_04 | Register with valid data | Rejected User |"
    },
    {
      "line": 18,
      "value": "#| DRC_ATC_Valid_Registration_01 | Register with valid data | Rejecteud User |"
    }
  ],
  "line": 20,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Invalid_Registration"
    },
    {
      "line": 19,
      "name": "@mtc3"
    },
    {
      "line": 19,
      "name": "@mtc4"
    },
    {
      "line": 19,
      "name": "@mtc5"
    },
    {
      "line": 19,
      "name": "@mtc6"
    },
    {
      "line": 19,
      "name": "@mtc8"
    },
    {
      "line": 19,
      "name": "@mtc9"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Welcome to DRC Tax Portal page\"\u003cTest Case ID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User Enters Data \"\u003cName\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirm Password\u003e\" \"\u003cMobile Number\u003e\" in the respective fields",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Error messages should be shown to user as\"\u003cValidation Messages\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
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
      "line": 30,
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
      "line": 31,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;2"
    },
    {
      "comments": [
        {
          "line": 32,
          "value": "#| DRC_ATC_Invalid_Registration_02 | Full Name field length greater than size limit(fileds is trimmied) | GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblclicks o oJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuid | abhi@o3enzyme.com                                                                                                                                       | abq@12345             | abq@12345             |               8989898989898 |                                               |"
        }
      ],
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
      "line": 33,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;3"
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
      "line": 34,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;4"
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
      "line": 35,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;5"
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
      "line": 36,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;6"
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
      "line": 37,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;7"
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
      "line": 38,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;8"
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
      "line": 39,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;9"
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
      "line": 40,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;10"
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
      "line": 41,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;11"
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
      "line": 42,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;12"
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
      "line": 43,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;13"
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
      "line": 44,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;14"
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
      "line": 45,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;15"
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
      "line": 46,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;16"
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
      "line": 47,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;17"
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
      "line": 48,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;18"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_19",
        "Invalid Email id  multiple dots   after username",
        "Abhi Jo",
        "abhii@1rivet..com",
        "abq@12345",
        "abq@12345",
        "8989898989898",
        "Please enter valid Email"
      ],
      "line": 49,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;19"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_20",
        "Password blank",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "",
        "abq@12345",
        "8989898989898",
        "Password is required"
      ],
      "line": 50,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;20"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_21",
        "Confirm Password blank",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "",
        "8989898989898",
        "Confirm Password is required"
      ],
      "line": 51,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;21"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_22",
        "Password field with less than minimum field",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@1",
        "abq@1",
        "8989898989898",
        "Password should at least be 6 characters long"
      ],
      "line": 52,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;22"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_23",
        "Different Password and Confirm Password",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@123456",
        "abq",
        "8989898989898",
        "Mismatch Password and Confirm Password"
      ],
      "line": 53,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;23"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_24",
        "Blank mobile no field",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "",
        "Mobile Number is required"
      ],
      "line": 54,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;24"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_25",
        "Mobile number with special characters and alphabets",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "srij_o@][!$%sdfdfAbnbmFSDF\u0026",
        "Mobile Number is required"
      ],
      "line": 55,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;25"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_26",
        "Mobile no with less than minimum length",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "954547220",
        "Enter valid Mobile Number"
      ],
      "line": 56,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;26"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_27",
        "Mobile no with zero\u0027s",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "0000000000",
        "Enter valid Mobile Number"
      ],
      "line": 57,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;27"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_28",
        "Mobile no with same digits",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "11111111",
        "Enter valid Mobile Number"
      ],
      "line": 58,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;28"
    },
    {
      "cells": [
        "DRC_ATC_Invalid_Registration_29",
        "Mobile no with same digits",
        "Abhi Jo",
        "abhi@o3enzyme.com",
        "abq@12345",
        "abq@12345",
        "888888888",
        "Enter valid Mobile Number"
      ],
      "line": 59,
      "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;29"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5506965607,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@mtc5"
    },
    {
      "line": 19,
      "name": "@mtc4"
    },
    {
      "line": 19,
      "name": "@mtc6"
    },
    {
      "line": 19,
      "name": "@mtc9"
    },
    {
      "line": 19,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 19,
      "name": "@mtc3"
    },
    {
      "line": 19,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_01\" \"Full name field is blank\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
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
  "line": 25,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
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
  "duration": 10184400506,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 3163014690,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 36016895,
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
  "duration": 5981635065,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 64322131674,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //button[contains(text(),\u0027Accept\u0027)] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.userRegistration.accepts_Rejects_Terms_and_conditions(userRegistration.java:303)\r\n\tat ✽.And Accepts/Rejects Terms and conditions(features/01_userRegistration.feature:25)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //button[contains(text(),\u0027Accept\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.userRegistration.accepts_Rejects_Terms_and_conditions(userRegistration.java:303)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1853099046,
  "status": "passed"
});
formatter.before({
  "duration": 5024577387,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#| DRC_ATC_Invalid_Registration_02 | Full Name field length greater than size limit(fileds is trimmied) | GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblclicks o oJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuid | abhi@o3enzyme.com                                                                                                                                       | abq@12345             | abq@12345             |               8989898989898 |                                               |"
    }
  ],
  "line": 33,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@mtc5"
    },
    {
      "line": 19,
      "name": "@mtc4"
    },
    {
      "line": 19,
      "name": "@mtc6"
    },
    {
      "line": 19,
      "name": "@mtc9"
    },
    {
      "line": 19,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 19,
      "name": "@mtc3"
    },
    {
      "line": 19,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_03\" \"Full Name field with special characters and spaces\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
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
  "line": 25,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
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
  "duration": 5836700348,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 1001081145,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.user_should_be_Navigated_to_Register_With_Us_page()"
});
formatter.result({
  "duration": 888214036,
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
  "duration": 8981012993,
  "status": "passed"
});
formatter.match({
  "location": "userRegistration.accepts_Rejects_Terms_and_conditions()"
});
formatter.result({
  "duration": 65349162867,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //button[contains(text(),\u0027Accept\u0027)] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.userRegistration.accepts_Rejects_Terms_and_conditions(userRegistration.java:303)\r\n\tat ✽.And Accepts/Rejects Terms and conditions(features/01_userRegistration.feature:25)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //button[contains(text(),\u0027Accept\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CS74-PC\u0027, ip: \u0027172.16.3.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:97)\r\n\tat org.drc.vat.StepDefinitions.userRegistration.accepts_Rejects_Terms_and_conditions(userRegistration.java:303)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "userRegistration.clicks_On_Register_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1867750073,
  "status": "passed"
});
formatter.before({
  "duration": 5023236642,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User Should not be allowed to Register in DRC TAX Portal with InValid details.",
  "description": "",
  "id": "user-registration-for-the-steps-involved-in-creating-a-user-account-for-logging-into-drc-e-services-portal-that-would-be-used-by-the-taxpayer-to-perform-tax-activities;user-should-not-be-allowed-to-register-in-drc-tax-portal-with-invalid-details.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@mtc5"
    },
    {
      "line": 19,
      "name": "@mtc4"
    },
    {
      "line": 19,
      "name": "@mtc6"
    },
    {
      "line": 19,
      "name": "@mtc9"
    },
    {
      "line": 19,
      "name": "@mtc8"
    },
    {
      "line": 1,
      "name": "@UserRegistration"
    },
    {
      "line": 19,
      "name": "@mtc3"
    },
    {
      "line": 19,
      "name": "@Invalid_Registration"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on Welcome to DRC Tax Portal page\"DRC_ATC_Invalid_Registration_04\" \"Full name field with minimum characters\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User Clicks on Register",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be Navigated to Register With Us page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
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
  "line": 25,
  "name": "Accepts/Rejects Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Clicks On Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
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
