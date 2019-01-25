$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/08_1DV_2394_Important_Dates.feature");
formatter.feature({
  "line": 1,
  "name": "Use is on e-Filing page and see Important Dates",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "DRC Tax Portal Login",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;drc-tax-portal-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Login \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter email \"\u003cemail\u003e\" and  password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;drc-tax-portal-login;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "email",
        "password"
      ],
      "line": 11,
      "id": "use-is-on-e-filing-page-and-see-important-dates;drc-tax-portal-login;;1"
    },
    {
      "cells": [
        "e-file_Login_001",
        "Login into tax payer",
        "regressiondaysix@mailinator.com",
        "Test@123"
      ],
      "line": 12,
      "id": "use-is-on-e-filing-page-and-see-important-dates;drc-tax-portal-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7636346978,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "DRC Tax Portal Login",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;drc-tax-portal-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Login \"e-file_Login_001\" \"Login into tax payer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter email \"regressiondaysix@mailinator.com\" and  password \"Test@123\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on SignIn",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "e-file_Login_001",
      "offset": 12
    },
    {
      "val": "Login into tax payer",
      "offset": 31
    }
  ],
  "location": "DV_2390_e_filing.user_Login(String,String)"
});
formatter.result({
  "duration": 138812205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regressiondaysix@mailinator.com",
      "offset": 18
    },
    {
      "val": "Test@123",
      "offset": 66
    }
  ],
  "location": "DV_2390_e_filing.user_Enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 15373151721,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_Click_on_SignIn()"
});
formatter.result({
  "duration": 60986,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 778269464,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Validate the functionality of important Dates.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@TC_002_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see the e-filing screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User verify the \"\u003cpayment_date\u003e\" \"\u003ce-filing\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "payment_date",
        "e-filing"
      ],
      "line": 22,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;;1"
    },
    {
      "cells": [
        "VAT_e-filing_Imp_Dates_002",
        "User see important date for january",
        "txt_payment_date1",
        "txt_efiling1"
      ],
      "line": 23,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5515468051,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate the functionality of important Dates.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@TC_002_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Vat e-Filing Page \"VAT_e-filing_Imp_Dates_002\" \"User see important date for january\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can see the e-filing screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User verify the \"txt_payment_date1\" \"txt_efiling1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "VAT_e-filing_Imp_Dates_002",
      "offset": 30
    },
    {
      "val": "User see important date for january",
      "offset": 59
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 539754,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15179487530,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_can_see_the_e_filing_screen()"
});
formatter.result({
  "duration": 4063176562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_payment_date1",
      "offset": 17
    },
    {
      "val": "txt_efiling1",
      "offset": 37
    }
  ],
  "location": "DV_2394_landing_screen.user_verify_the(String,String)"
});
formatter.result({
  "duration": 110039393,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 783065693,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Validate the functionality of important Dates.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@TC_002_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User can see the e-filing screen",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User verify the \"\u003cpayment_date\u003e\" \"\u003ce-filing\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "payment_date",
        "e-filing"
      ],
      "line": 34,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;;1"
    },
    {
      "cells": [
        "VAT_e-filing_Imp_Dates_002",
        "User see important date for january",
        "txt_payment_date1",
        "txt_efiling1"
      ],
      "line": 35,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5517262291,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validate the functionality of important Dates.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-functionality-of-important-dates.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@TC_002_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Vat e-Filing Page \"VAT_e-filing_Imp_Dates_002\" \"User see important date for january\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User can see the e-filing screen",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User verify the \"txt_payment_date1\" \"txt_efiling1\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "VAT_e-filing_Imp_Dates_002",
      "offset": 30
    },
    {
      "val": "User see important date for january",
      "offset": 59
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 316614,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15196658199,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_can_see_the_e_filing_screen()"
});
formatter.result({
  "duration": 4050932643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_payment_date1",
      "offset": 17
    },
    {
      "val": "txt_efiling1",
      "offset": 37
    }
  ],
  "location": "DV_2394_landing_screen.user_verify_the(String,String)"
});
formatter.result({
  "duration": 112893762,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 775543052,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Validate the user is able to view the due date of  e-filing for that particular month in important dates section when user is missing his due date for e-filling.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-e-filling.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@TS_003_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user verify \"\u003cdue_date_of_e-filing\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-e-filling.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "due_date_of_e-filing"
      ],
      "line": 44,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-e-filling.;;1"
    },
    {
      "cells": [
        "VAT_e-filing_Imp_Dates_003",
        "user view  due date for january in important date section for filing",
        "txt_efiling1"
      ],
      "line": 45,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-e-filling.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5509933437,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Validate the user is able to view the due date of  e-filing for that particular month in important dates section when user is missing his due date for e-filling.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-e-filling.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@TS_003_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User is on Vat e-Filing Page \"VAT_e-filing_Imp_Dates_003\" \"user view  due date for january in important date section for filing\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user verify \"txt_efiling1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "VAT_e-filing_Imp_Dates_003",
      "offset": 30
    },
    {
      "val": "user view  due date for january in important date section for filing",
      "offset": 59
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 332573,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15137857234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_efiling1",
      "offset": 13
    }
  ],
  "location": "DV_2394_landing_screen.user_verify(String)"
});
formatter.result({
  "duration": 2033399762,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 758201395,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Validate the user is able to view the due payment date of  e-filing for that particular month in important dates section when user is missing his due date for payment.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-payment-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-payment.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@TS_004_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user verify the \"\u003cpayment-due-date\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-payment-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-payment.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "payment-due-date"
      ],
      "line": 54,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-payment-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-payment.;;1"
    },
    {
      "cells": [
        "VAT_e-filing_Imp_Dates__004",
        "user view  due date for january in important date section for payment",
        "txt_payment_date1"
      ],
      "line": 55,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-payment-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-payment.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511778118,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Validate the user is able to view the due payment date of  e-filing for that particular month in important dates section when user is missing his due date for payment.",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-user-is-able-to-view-the-due-payment-date-of--e-filing-for-that-particular-month-in-important-dates-section-when-user-is-missing-his-due-date-for-payment.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@TS_004_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User is on Vat e-Filing Page \"VAT_e-filing_Imp_Dates__004\" \"user view  due date for january in important date section for payment\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user verify the \"txt_payment_date1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "VAT_e-filing_Imp_Dates__004",
      "offset": 30
    },
    {
      "val": "user view  due date for january in important date section for payment",
      "offset": 60
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 710743,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15125500747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_payment_date1",
      "offset": 17
    }
  ],
  "location": "DV_2394_landing_screen.user_verify_the(String)"
});
formatter.result({
  "duration": 2033325383,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 773684407,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "Validate the date format in important date section",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-date-format-in-important-date-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@TS_005_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "user can see the e-filing landing screen,verify \"\u003cdate_format\u003e\" for payment",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-date-format-in-important-date-section;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "date_format"
      ],
      "line": 64,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-date-format-in-important-date-section;;1"
    },
    {
      "cells": [
        "VAT_e-filing_Imp_Dates_005",
        "validate date format",
        "txt_efiling1"
      ],
      "line": 65,
      "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-date-format-in-important-date-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513577203,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Validate the date format in important date section",
  "description": "",
  "id": "use-is-on-e-filing-page-and-see-important-dates;validate-the-date-format-in-important-date-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@TS_005_ImportantDates"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "User is on Vat e-Filing Page \"VAT_e-filing_Imp_Dates_005\" \"validate date format\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "user can see the e-filing landing screen,verify \"txt_efiling1\" for payment",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "VAT_e-filing_Imp_Dates_005",
      "offset": 30
    },
    {
      "val": "validate date format",
      "offset": 59
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 327728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_efiling1",
      "offset": 49
    }
  ],
  "location": "DV_2394_landing_screen.user_can_see_the_e_filing_landing_screen_verify_for_payment(String)"
});
formatter.result({
  "duration": 2033411447,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 782863927,
  "status": "passed"
});
formatter.uri("features/09_DV_2389_calculation_with_offset.feature");
formatter.feature({
  "line": 1,
  "name": "User is on Tax Calculation",
  "description": "",
  "id": "user-is-on-tax-calculation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate proceed button functionality",
  "description": "",
  "id": "user-is-on-tax-calculation;validate-proceed-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_02_12"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#  And User click on browser and upload file \"\u003cuploadFile\u003e\" for tax calculation"
    }
  ],
  "line": 10,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on proceed button on tax calculation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see pop up for offset successful",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-calculation;validate-proceed-button-functionality;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description"
      ],
      "line": 18,
      "id": "user-is-on-tax-calculation;validate-proceed-button-functionality;;1"
    },
    {
      "cells": [
        "Tax_Cal_02,12",
        "validate proceed functionality and see offset"
      ],
      "line": 19,
      "id": "user-is-on-tax-calculation;validate-proceed-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5514102138,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate proceed button functionality",
  "description": "",
  "id": "user-is-on-tax-calculation;validate-proceed-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_02_12"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Vat e-Filing Page \"Tax_Cal_02,12\" \"validate proceed functionality and see offset\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#  And User click on browser and upload file \"\u003cuploadFile\u003e\" for tax calculation"
    }
  ],
  "line": 10,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on proceed button on tax calculation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see pop up for offset successful",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tax_Cal_02,12",
      "offset": 30
    },
    {
      "val": "validate proceed functionality and see offset",
      "offset": 46
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 393844,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 408614460,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15151408076,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 15736277528,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5828692562,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9182575584,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "duration": 51417229433,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_is_navigate_to_Tax_Calculation_page()"
});
formatter.result({
  "duration": 545266225,
  "status": "passed"
});
formatter.match({
  "location": "DV_2389_calculation_with_offset.user_click_on_proceed_button_on_tax_calculation()"
});
formatter.result({
  "duration": 127088946,
  "status": "passed"
});
formatter.match({
  "location": "DV_2389_calculation_with_offset.user_see_pop_up_for_offset_successful()"
});
formatter.result({
  "duration": 3179431389,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 607144414,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "# @TC_03"
    },
    {
      "line": 22,
      "value": "# Scenario Outline: Validate the Period field."
    },
    {
      "line": 23,
      "value": "#  Given User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 24,
      "value": "#  And User click on Dashboard"
    },
    {
      "line": 25,
      "value": "#  And User click on Tab"
    },
    {
      "line": 26,
      "value": "#  And User click on collpase icon for filing \"\u003cmonth\u003e\""
    },
    {
      "line": 27,
      "value": "#  And User click on file button \"\u003cfile\u003e\" and navigate to e-declaration page"
    },
    {
      "line": 28,
      "value": "#    And User verify period \"\u003cperiod\u003e\" for Tax Calculation"
    },
    {
      "line": 29,
      "value": "#    Examples:"
    },
    {
      "line": 30,
      "value": "##     | TestcaseID | Description               | month | file  | period         |"
    },
    {
      "line": 31,
      "value": "#   | Tax_Cal_03 | Validate the Period field | eDec    | eDecC  | December, 2019 |"
    }
  ],
  "line": 33,
  "name": "Validate Tax calculation values are displayed",
  "description": "",
  "id": "user-is-on-tax-calculation;validate-tax-calculation-values-are-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_04_05_07_08_09_10_11"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed  on calculation",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User entered value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On calculation",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment on calculation",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User entered value \"\u003c26\u003e\" for Tax Calculation on calculation",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click on browser and upload file \"\u003cuploadFile\u003e\" for tax calculation",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User verify Tax calculation",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User click on previous button on tax calculation and navigate to e-filing landing screen",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "user-is-on-tax-calculation;validate-tax-calculation-values-are-displayed;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "10.1",
        "11",
        "11.1",
        "12",
        "12.1",
        "13",
        "13.1",
        "17",
        "18",
        "19",
        "20",
        "26",
        "uploadFile"
      ],
      "line": 51,
      "id": "user-is-on-tax-calculation;validate-tax-calculation-values-are-displayed;;1"
    },
    {
      "cells": [
        "Tax_Cal_04_05_07_08_09_10_11",
        "validate Tax calculation values are displayed",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "DRC Test Data.xlsx"
      ],
      "line": 52,
      "id": "user-is-on-tax-calculation;validate-tax-calculation-values-are-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5530503073,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Validate Tax calculation values are displayed",
  "description": "",
  "id": "user-is-on-tax-calculation;validate-tax-calculation-values-are-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_04_05_07_08_09_10_11"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Vat e-Filing Page \"Tax_Cal_04_05_07_08_09_10_11\" \"validate Tax calculation values are displayed\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Operation Performed  on calculation",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User entered value \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" for Tax Deductible On calculation",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User entered value \"10\" \"10\" \"10\" \"10\" for Adjustment on calculation",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User entered value \"10\" for Tax Calculation on calculation",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click on browser and upload file \"DRC Test Data.xlsx\" for tax calculation",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User verify Tax calculation",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User click on previous button on tax calculation and navigate to e-filing landing screen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tax_Cal_04_05_07_08_09_10_11",
      "offset": 30
    },
    {
      "val": "validate Tax calculation values are displayed",
      "offset": 61
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 191223,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 325744861,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15169932691,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 17235437262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    },
    {
      "val": "500",
      "offset": 44
    },
    {
      "val": "500",
      "offset": 50
    },
    {
      "val": "500",
      "offset": 56
    },
    {
      "val": "500",
      "offset": 62
    },
    {
      "val": "500",
      "offset": 68
    }
  ],
  "location": "DV_2389_calculation_with_offset.user_entered_value_for_Operation_Performed_on_calculation(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 7009090321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 35
    },
    {
      "val": "10",
      "offset": 40
    },
    {
      "val": "10",
      "offset": 45
    },
    {
      "val": "10",
      "offset": 50
    },
    {
      "val": "10",
      "offset": 55
    }
  ],
  "location": "DV_2389_calculation_with_offset.user_entered_value_for_Tax_Deductible_On_calculation(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6525132324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "DV_2389_calculation_with_offset.user_entered_value_for_Adjustment_on_calculation(String,String,String,String)"
});
formatter.result({
  "duration": 636129252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "DV_2389_calculation_with_offset.user_entered_value_for_Tax_Calculation_on_calculation(String)"
});
formatter.result({
  "duration": 274202645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRC Test Data.xlsx",
      "offset": 39
    }
  ],
  "location": "DV_2389_calculation_with_offset.user_click_on_browser_and_upload_file_for_tax_calculation(String)"
});
formatter.result({
  "duration": 9329479252,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5566069546,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9140035058,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "duration": 45691474825,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_is_navigate_to_Tax_Calculation_page()"
});
formatter.result({
  "duration": 542658650,
  "status": "passed"
});
formatter.match({
  "location": "DV_2389_calculation_with_offset.user_verify_Tax_calculation()"
});
formatter.result({
  "duration": 1202696661,
  "status": "passed"
});
formatter.match({
  "location": "DV_2389_calculation_with_offset.user_click_on_previous_button_on_tax_calculation_and_navigate_to_e_filing_landing_screen()"
});
formatter.result({
  "duration": 4194897873,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 668071053,
  "status": "passed"
});
formatter.uri("features/10_DV_2390_e_filing.feature");
formatter.feature({
  "line": 1,
  "name": "E-filing -\u003e Filing -\u003e Declaration with verification and confirmation of e-declaration",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate whether the tax payer is able to e-file",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-whether-the-tax-payer-is-able-to-e-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_02_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User entered value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User entered value \"\u003c26\u003e\" for Tax Calculation",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on browser and upload file \"\u003cuploadFile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see uploaded file name in field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 20,
      "value": "#    And User is navigate to Tax Calculation page"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-whether-the-tax-payer-is-able-to-e-file;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "10.1",
        "11",
        "11.1",
        "12",
        "12.1",
        "13",
        "13.1",
        "17",
        "18",
        "19",
        "20",
        "26",
        "uploadFile"
      ],
      "line": 22,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-whether-the-tax-payer-is-able-to-e-file;;1"
    },
    {
      "cells": [
        "Declaration_Verification_02",
        "validate tax payer is able to e-file and period field",
        "10000",
        "7000",
        "5000",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "10000",
        "DRC Test Data.xlsx"
      ],
      "line": 23,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-whether-the-tax-payer-is-able-to-e-file;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5505787534,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate whether the tax payer is able to e-file",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-whether-the-tax-payer-is-able-to-e-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_02_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_02\" \"validate tax payer is able to e-file and period field\"",
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
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User entered value \"10000\" \"7000\" \"5000\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Operation Performed",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Tax Deductible On",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" for Adjustment",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User entered value \"10000\" for Tax Calculation",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on browser and upload file \"DRC Test Data.xlsx\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User see uploaded file name in field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_02",
      "offset": 30
    },
    {
      "val": "validate tax payer is able to e-file and period field",
      "offset": 60
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 209176,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 345850834,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15156910488,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 18920496311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 20
    },
    {
      "val": "7000",
      "offset": 28
    },
    {
      "val": "5000",
      "offset": 35
    },
    {
      "val": "500",
      "offset": 42
    },
    {
      "val": "500",
      "offset": 48
    },
    {
      "val": "500",
      "offset": 54
    },
    {
      "val": "500",
      "offset": 60
    },
    {
      "val": "500",
      "offset": 66
    },
    {
      "val": "500",
      "offset": 72
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Operation_Performed(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15147418914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    },
    {
      "val": "500",
      "offset": 44
    },
    {
      "val": "500",
      "offset": 50
    },
    {
      "val": "500",
      "offset": 56
    },
    {
      "val": "500",
      "offset": 62
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Tax_Deductible_On(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10748648264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Adjustment(String,String,String,String)"
});
formatter.result({
  "duration": 735280950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 20
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Tax_Calculation(String)"
});
formatter.result({
  "duration": 225109839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRC Test Data.xlsx",
      "offset": 39
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_browser_and_upload_file(String)"
});
formatter.result({
  "duration": 9234371434,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_see_uploaded_file_name_in_field()"
});
formatter.result({
  "duration": 44479820,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5534094974,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9132068987,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "duration": 45345538780,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 589072065,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Validate the text fields on e-filing declaration page.",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_03_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User check value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User check value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User check value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User check value \"\u003c26\u003e\" for Tax Calculation",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "10.1",
        "11",
        "11.1",
        "12",
        "12.1",
        "13",
        "13.1",
        "17",
        "18",
        "19",
        "20",
        "26",
        "Period",
        "uploadFile"
      ],
      "line": 38,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.;;1"
    },
    {
      "cells": [
        "Declaration_Verification_03_1",
        "Validate the text fields",
        "-10000",
        "-7000",
        "-5000",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "-500",
        "500",
        "500",
        "10000",
        "March, 2018",
        "DRC Test Data.xlsx"
      ],
      "line": 39,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.;;2"
    },
    {
      "cells": [
        "Declaration_Verification_03_2",
        "Validate the text fields",
        "A0b00",
        "b000",
        "c000",
        "d00",
        "e00",
        "s00",
        "h00",
        "a00",
        "sd0",
        "j00",
        "f00",
        "h00",
        "h00",
        "a00",
        "h00",
        "h00",
        "h00",
        "gh00",
        "h00",
        "g00",
        "f00",
        "h000",
        "March, 2018",
        "DRC Test Data.xlsx"
      ],
      "line": 40,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5507378584,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Validate the text fields on e-filing declaration page.",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_03_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_03_1\" \"Validate the text fields\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User check value \"-10000\" \"-7000\" \"-5000\" \"-500\" \"-500\" \"-500\" \"-500\" \"-500\" \"-500\" for Operation Performed",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User check value \"-500\" \"-500\" \"-500\" \"-500\" \"-500\" \"-500\" \"-500\" \"-500\" for Tax Deductible On",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User check value \"-500\" \"-500\" \"500\" \"500\" for Adjustment",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User check value \"10000\" for Tax Calculation",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_03_1",
      "offset": 30
    },
    {
      "val": "Validate the text fields",
      "offset": 62
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 196637,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 287199200,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15104469156,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 20478122158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-10000",
      "offset": 18
    },
    {
      "val": "-7000",
      "offset": 27
    },
    {
      "val": "-5000",
      "offset": 35
    },
    {
      "val": "-500",
      "offset": 43
    },
    {
      "val": "-500",
      "offset": 50
    },
    {
      "val": "-500",
      "offset": 57
    },
    {
      "val": "-500",
      "offset": 64
    },
    {
      "val": "-500",
      "offset": 71
    },
    {
      "val": "-500",
      "offset": 78
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Operation_Performed(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13685005188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-500",
      "offset": 18
    },
    {
      "val": "-500",
      "offset": 25
    },
    {
      "val": "-500",
      "offset": 32
    },
    {
      "val": "-500",
      "offset": 39
    },
    {
      "val": "-500",
      "offset": 46
    },
    {
      "val": "-500",
      "offset": 53
    },
    {
      "val": "-500",
      "offset": 60
    },
    {
      "val": "-500",
      "offset": 67
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Tax_Deductible_On(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10926368628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-500",
      "offset": 18
    },
    {
      "val": "-500",
      "offset": 25
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Adjustment(String,String,String,String)"
});
formatter.result({
  "duration": 2454713826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 18
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Tax_Calculation(String)"
});
formatter.result({
  "duration": 423727567,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 764842589,
  "status": "passed"
});
formatter.before({
  "duration": 5512785526,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Validate the text fields on e-filing declaration page.",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-text-fields-on-e-filing-declaration-page.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@TC_03_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_03_2\" \"Validate the text fields\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User check value \"A0b00\" \"b000\" \"c000\" \"d00\" \"e00\" \"s00\" \"h00\" \"a00\" \"sd0\" for Operation Performed",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User check value \"j00\" \"f00\" \"h00\" \"h00\" \"a00\" \"h00\" \"h00\" \"h00\" for Tax Deductible On",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User check value \"gh00\" \"h00\" \"g00\" \"f00\" for Adjustment",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User check value \"h000\" for Tax Calculation",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_03_2",
      "offset": 30
    },
    {
      "val": "Validate the text fields",
      "offset": 62
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 314049,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 422776871,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15155826421,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 20763578130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A0b00",
      "offset": 18
    },
    {
      "val": "b000",
      "offset": 26
    },
    {
      "val": "c000",
      "offset": 33
    },
    {
      "val": "d00",
      "offset": 40
    },
    {
      "val": "e00",
      "offset": 46
    },
    {
      "val": "s00",
      "offset": 52
    },
    {
      "val": "h00",
      "offset": 58
    },
    {
      "val": "a00",
      "offset": 64
    },
    {
      "val": "sd0",
      "offset": 70
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Operation_Performed(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14078147750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j00",
      "offset": 18
    },
    {
      "val": "f00",
      "offset": 24
    },
    {
      "val": "h00",
      "offset": 30
    },
    {
      "val": "h00",
      "offset": 36
    },
    {
      "val": "a00",
      "offset": 42
    },
    {
      "val": "h00",
      "offset": 48
    },
    {
      "val": "h00",
      "offset": 54
    },
    {
      "val": "h00",
      "offset": 60
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Tax_Deductible_On(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10504546158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gh00",
      "offset": 18
    },
    {
      "val": "h00",
      "offset": 25
    },
    {
      "val": "g00",
      "offset": 31
    },
    {
      "val": "f00",
      "offset": 37
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Adjustment(String,String,String,String)"
});
formatter.result({
  "duration": 2281484762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "h000",
      "offset": 18
    }
  ],
  "location": "DV_2390_e_filing.user_check_value_for_Tax_Calculation(String)"
});
formatter.result({
  "duration": 399073299,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 787138070,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 42,
      "value": "#@TC_04_DV_2390_Declaration_with_verification"
    },
    {
      "line": 43,
      "value": "#Scenario Outline: Validate the Period field."
    },
    {
      "line": 44,
      "value": "# Given User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 45,
      "value": "# And User click on Dashboard"
    },
    {
      "line": 46,
      "value": "# And User click on Tab"
    },
    {
      "line": 47,
      "value": "#And User click on collpase icon for filing \"\u003cmonth\u003e\""
    },
    {
      "line": 48,
      "value": "#And User click on file button \"\u003cfile\u003e\" and navigate to e-declaration page"
    },
    {
      "line": 49,
      "value": "#And User verify period \"\u003cperiod\u003e\" for Tax Calculation"
    },
    {
      "line": 51,
      "value": "#    Examples:"
    },
    {
      "line": 52,
      "value": "#     | TestcaseID                  | Description               | month | file  | period         |"
    },
    {
      "line": 53,
      "value": "#     | Declaration_Verification_04 | Validate the Period field | eDec  | eDecC | December, 2018 |"
    }
  ],
  "line": 56,
  "name": "Validate the delivery of services field under Turnover realized column",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-delivery-of-services-field-under-turnover-realized-column",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@TC_05_06_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User entered value \"\u003c2\u003e\" \"\u003c2.1\u003e\" for Delivery of services",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User check entered value for Delivery of services",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User entered value \"\u003cA2\u003e\" \"\u003cA2.1\u003e\" for Delivery of services",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User see message \"\u003cmes\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-delivery-of-services-field-under-turnover-realized-column;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "2",
        "2.1",
        "A2",
        "A2.1",
        "mes"
      ],
      "line": 67,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-delivery-of-services-field-under-turnover-realized-column;;1"
    },
    {
      "cells": [
        "Declaration_Verification_05_06",
        "validate delivery of services field",
        "5000",
        "2000",
        "2000",
        "5000",
        "Turnover realized can not be less than taxable turnover"
      ],
      "line": 68,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-delivery-of-services-field-under-turnover-realized-column;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5514026903,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Validate the delivery of services field under Turnover realized column",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-delivery-of-services-field-under-turnover-realized-column;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@TC_05_06_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_05_06\" \"validate delivery of services field\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User entered value \"5000\" \"2000\" for Delivery of services",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User check entered value for Delivery of services",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User entered value \"2000\" \"5000\" for Delivery of services",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User see message \"Turnover realized can not be less than taxable turnover\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_05_06",
      "offset": 30
    },
    {
      "val": "validate delivery of services field",
      "offset": 63
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 302365,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 419510990,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15195606620,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 20807473739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 20
    },
    {
      "val": "2000",
      "offset": 27
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Delivery_of_services(String,String)"
});
formatter.result({
  "duration": 4776412814,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_check_entered_value_for_Delivery_of_services()"
});
formatter.result({
  "duration": 1072152891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 20
    },
    {
      "val": "5000",
      "offset": 27
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Delivery_of_services(String,String)"
});
formatter.result({
  "duration": 4618565310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Turnover realized can not be less than taxable turnover",
      "offset": 18
    }
  ],
  "location": "DV_2390_e_filing.user_see_message(String)"
});
formatter.result({
  "duration": 39544520,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 768407986,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "Validate the amounts under VAT collected column (16%) , Total FC taxble turnover , total vat collected (16%) , Net VAT to be paid ,VAT Credit,Amount to Pay,VAT credit carried forward,  Vat on externally financed public procurement",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amounts-under-vat-collected-column-(16%)-,-total-fc-taxble-turnover-,-total-vat-collected-(16%)-,-net-vat-to-be-paid-,vat-credit,amount-to-pay,vat-credit-carried-forward,--vat-on-externally-financed-public-procurement",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@TC_07_08_09_14_15_17_18_19_20_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Enter data in Operation Performed \"\u003cDG\u003e\",\"\u003cDS1\u003e\",\"\u003cDS2\u003e\" , \"\u003cDGI\u003e\",\"\u003cDSI\u003e\", \"\u003cFPP\u003e\" ,\"\u003cExport\u003e\", \"\u003cExempt\u003e\",\"\u003cNon-taxable\u003e\" for amount under vat collected",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Enter data in Deduction \"\u003cAssetsI\u003e\" ,\"\u003cAssetsL\u003e\", \"\u003cGoodsI\u003e\" ,\"\u003cGoodsL\u003e\",\"\u003cRaw MaterialI\u003e\",\"\u003cRaw MaterialL\u003e\" ,\"\u003cOthersI\u003e\" ,\"\u003cOthersL\u003e\" and validate total value for Amount of VAT Deductible",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment calculation",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "calculate tax calculations and enter \"\u003cVAT3Party\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amounts-under-vat-collected-column-(16%)-,-total-fc-taxble-turnover-,-total-vat-collected-(16%)-,-net-vat-to-be-paid-,vat-credit,amount-to-pay,vat-credit-carried-forward,--vat-on-externally-financed-public-procurement;",
  "rows": [
    {
      "cells": [
        "TestCase_Id",
        "Description",
        "DG",
        "DS1",
        "DS2",
        "DGI",
        "DSI",
        "FPP",
        "Export",
        "Exempt",
        "Non-taxable",
        "VAT3Party",
        "AssetsI",
        "AssetsL",
        "GoodsI",
        "GoodsL",
        "Raw MaterialI",
        "Raw MaterialL",
        "OthersI",
        "OthersL",
        "17",
        "18",
        "19",
        "20"
      ],
      "line": 82,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amounts-under-vat-collected-column-(16%)-,-total-fc-taxble-turnover-,-total-vat-collected-(16%)-,-net-vat-to-be-paid-,vat-credit,amount-to-pay,vat-credit-carried-forward,--vat-on-externally-financed-public-procurement;;1"
    },
    {
      "cells": [
        "Declaration_Verification_07_08_09_14_15_17_18_19_20",
        "Enter data in E-filling form",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10"
      ],
      "line": 83,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amounts-under-vat-collected-column-(16%)-,-total-fc-taxble-turnover-,-total-vat-collected-(16%)-,-net-vat-to-be-paid-,vat-credit,amount-to-pay,vat-credit-carried-forward,--vat-on-externally-financed-public-procurement;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511224685,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validate the amounts under VAT collected column (16%) , Total FC taxble turnover , total vat collected (16%) , Net VAT to be paid ,VAT Credit,Amount to Pay,VAT credit carried forward,  Vat on externally financed public procurement",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amounts-under-vat-collected-column-(16%)-,-total-fc-taxble-turnover-,-total-vat-collected-(16%)-,-net-vat-to-be-paid-,vat-credit,amount-to-pay,vat-credit-carried-forward,--vat-on-externally-financed-public-procurement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@TC_07_08_09_14_15_17_18_19_20_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"Enter data in E-filling form\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Enter data in Operation Performed \"500\",\"500\",\"500\" , \"500\",\"500\", \"500\" ,\"500\", \"500\",\"500\" for amount under vat collected",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Enter data in Deduction \"10\" ,\"10\", \"10\" ,\"10\",\"10\",\"10\" ,\"10\" ,\"10\" and validate total value for Amount of VAT Deductible",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User entered value \"10\" \"10\" \"10\" \"10\" for Adjustment calculation",
  "matchedColumns": [
    20,
    21,
    22,
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "calculate tax calculations and enter \"10\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cTestcaseID\u003e",
      "offset": 30
    },
    {
      "val": "Enter data in E-filling form",
      "offset": 45
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 204616,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 5337419105,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 20112956173,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 45501942857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 35
    },
    {
      "val": "500",
      "offset": 41
    },
    {
      "val": "500",
      "offset": 47
    },
    {
      "val": "500",
      "offset": 55
    },
    {
      "val": "500",
      "offset": 61
    },
    {
      "val": "500",
      "offset": 68
    },
    {
      "val": "500",
      "offset": 75
    },
    {
      "val": "500",
      "offset": 82
    },
    {
      "val": "500",
      "offset": 88
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Operation_Performed_for_amount_under_vat_collected(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6480229592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "10",
      "offset": 43
    },
    {
      "val": "10",
      "offset": 48
    },
    {
      "val": "10",
      "offset": 53
    },
    {
      "val": "10",
      "offset": 59
    },
    {
      "val": "10",
      "offset": 65
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Deduction_and_validate_total_value_for_Amount_of_VAT_Deductible(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 12866418334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Adjustment_calculation(String,String,String,String)"
});
formatter.result({
  "duration": 813617642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 38
    }
  ],
  "location": "DV_2390_e_filing.calculate_tax_calculations_and_enter(String)"
});
formatter.result({
  "duration": 310158686,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 783926336,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 85,
      "value": "# submit + and -"
    }
  ],
  "line": 87,
  "name": "Validate result of the formula  in Net VAT to be paid field under Tax Calculation section",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@TC_16_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Enter data in Operation Performed \"\u003cDG\u003e\",\"\u003cDS1\u003e\",\"\u003cDS2\u003e\" , \"\u003cDGI\u003e\",\"\u003cDSI\u003e\", \"\u003cFPP\u003e\" ,\"\u003cExport\u003e\", \"\u003cExempt\u003e\",\"\u003cNon-taxable\u003e\" for amount under vat collected",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Enter data in Deduction \"\u003cAssetsI\u003e\" ,\"\u003cAssetsL\u003e\", \"\u003cGoodsI\u003e\" ,\"\u003cGoodsL\u003e\",\"\u003cRaw MaterialI\u003e\",\"\u003cRaw MaterialL\u003e\" ,\"\u003cOthersI\u003e\" ,\"\u003cOthersL\u003e\" and validate total value for Amount of VAT Deductible",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment calculation",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "calculate tax calculations and enter \"\u003cVAT3Party\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 100,
      "value": "# need to add submit"
    }
  ],
  "line": 101,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "DG",
        "DS1",
        "DS2",
        "DGI",
        "DSI",
        "FPP",
        "Export",
        "Exempt",
        "Non-taxable",
        "VAT3Party",
        "AssetsI",
        "AssetsL",
        "GoodsI",
        "GoodsL",
        "Raw MaterialI",
        "Raw MaterialL",
        "OthersI",
        "OthersL",
        "17",
        "18",
        "19",
        "20"
      ],
      "line": 102,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section;;1"
    },
    {
      "cells": [
        "Declaration_Verification_16_1",
        "Enter data in E-filling form  Net VAT to be paid is Negative",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 103,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section;;2"
    },
    {
      "cells": [
        "Declaration_Verification_16_2",
        "Enter data in E-filling form Net VAT to be paid is Zero",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "0",
        "2000",
        "200",
        "2000",
        "200",
        "2000",
        "200",
        "2000",
        "200",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 104,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5510970197,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Validate result of the formula  in Net VAT to be paid field under Tax Calculation section",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@TC_16_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_16_1\" \"Enter data in E-filling form  Net VAT to be paid is Negative\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Enter data in Operation Performed \"0\",\"0\",\"0\" , \"0\",\"0\", \"0\" ,\"0\", \"0\",\"0\" for amount under vat collected",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Enter data in Deduction \"500\" ,\"500\", \"500\" ,\"500\",\"500\",\"500\" ,\"500\" ,\"500\" and validate total value for Amount of VAT Deductible",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User entered value \"0\" \"0\" \"0\" \"0\" for Adjustment calculation",
  "matchedColumns": [
    20,
    21,
    22,
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "calculate tax calculations and enter \"0\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_16_1",
      "offset": 30
    },
    {
      "val": "Enter data in E-filling form  Net VAT to be paid is Negative",
      "offset": 62
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 713592,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 362277135,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15123850993,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 20708312636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    },
    {
      "val": "0",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 53
    },
    {
      "val": "0",
      "offset": 58
    },
    {
      "val": "0",
      "offset": 63
    },
    {
      "val": "0",
      "offset": 68
    },
    {
      "val": "0",
      "offset": 72
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Operation_Performed_for_amount_under_vat_collected(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3646550150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 25
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 39
    },
    {
      "val": "500",
      "offset": 46
    },
    {
      "val": "500",
      "offset": 52
    },
    {
      "val": "500",
      "offset": 58
    },
    {
      "val": "500",
      "offset": 65
    },
    {
      "val": "500",
      "offset": 72
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Deduction_and_validate_total_value_for_Amount_of_VAT_Deductible(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13690831907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Adjustment_calculation(String,String,String,String)"
});
formatter.result({
  "duration": 202185119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 38
    }
  ],
  "location": "DV_2390_e_filing.calculate_tax_calculations_and_enter(String)"
});
formatter.result({
  "duration": 155551699,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5766802403,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9169595558,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "duration": 45045989364,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 608827796,
  "status": "passed"
});
formatter.before({
  "duration": 5519216405,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Validate result of the formula  in Net VAT to be paid field under Tax Calculation section",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-result-of-the-formula--in-net-vat-to-be-paid-field-under-tax-calculation-section;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 86,
      "name": "@TC_16_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_16_2\" \"Enter data in E-filling form Net VAT to be paid is Zero\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Enter data in Operation Performed \"500\",\"500\",\"500\" , \"500\",\"500\", \"500\" ,\"500\", \"500\",\"500\" for amount under vat collected",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Enter data in Deduction \"2000\" ,\"200\", \"2000\" ,\"200\",\"2000\",\"200\" ,\"2000\" ,\"200\" and validate total value for Amount of VAT Deductible",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User entered value \"0\" \"0\" \"0\" \"0\" for Adjustment calculation",
  "matchedColumns": [
    20,
    21,
    22,
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "calculate tax calculations and enter \"0\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_16_2",
      "offset": 30
    },
    {
      "val": "Enter data in E-filling form Net VAT to be paid is Zero",
      "offset": 62
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 271587,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 320025579,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15146013387,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 22443954087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 35
    },
    {
      "val": "500",
      "offset": 41
    },
    {
      "val": "500",
      "offset": 47
    },
    {
      "val": "500",
      "offset": 55
    },
    {
      "val": "500",
      "offset": 61
    },
    {
      "val": "500",
      "offset": 68
    },
    {
      "val": "500",
      "offset": 75
    },
    {
      "val": "500",
      "offset": 82
    },
    {
      "val": "500",
      "offset": 88
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Operation_Performed_for_amount_under_vat_collected(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6190447041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 25
    },
    {
      "val": "200",
      "offset": 33
    },
    {
      "val": "2000",
      "offset": 40
    },
    {
      "val": "200",
      "offset": 48
    },
    {
      "val": "2000",
      "offset": 54
    },
    {
      "val": "200",
      "offset": 61
    },
    {
      "val": "2000",
      "offset": 68
    },
    {
      "val": "200",
      "offset": 76
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Deduction_and_validate_total_value_for_Amount_of_VAT_Deductible(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13843798829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Adjustment_calculation(String,String,String,String)"
});
formatter.result({
  "duration": 189910707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 38
    }
  ],
  "location": "DV_2390_e_filing.calculate_tax_calculations_and_enter(String)"
});
formatter.result({
  "duration": 225550989,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5803806034,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9177985396,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "duration": 47460778790,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 602310283,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "Validate the amount in Total(FC) field of Assets,Goods,Raw Materials, and Other goods and services under Deductions",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amount-in-total(fc)-field-of-assets,goods,raw-materials,-and-other-goods-and-services-under-deductions",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@TC_10_11_13_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Enter data in Deduction \"\u003cAssetsI\u003e\" ,\"\u003cAssetsL\u003e\", \"\u003cGoodsI\u003e\" ,\"\u003cGoodsL\u003e\",\"\u003cRaw MaterialI\u003e\",\"\u003cRaw MaterialL\u003e\" ,\"\u003cOthersI\u003e\" ,\"\u003cOthersL\u003e\" and validate total value for Amount of VAT Deductible",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "User validate Amount of VAT Deductible",
  "keyword": "And "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amount-in-total(fc)-field-of-assets,goods,raw-materials,-and-other-goods-and-services-under-deductions;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "AssetsI",
        "AssetsL",
        "GoodsI",
        "GoodsL",
        "Raw MaterialI",
        "Raw MaterialL",
        "OthersI",
        "OthersL"
      ],
      "line": 116,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amount-in-total(fc)-field-of-assets,goods,raw-materials,-and-other-goods-and-services-under-deductions;;1"
    },
    {
      "cells": [
        "Declaration_Verification_10_11_13",
        "Enter data in E-filling form",
        "120",
        "200",
        "10",
        "10",
        "10",
        "10",
        "20",
        "20"
      ],
      "line": 117,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amount-in-total(fc)-field-of-assets,goods,raw-materials,-and-other-goods-and-services-under-deductions;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5522885249,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "Validate the amount in Total(FC) field of Assets,Goods,Raw Materials, and Other goods and services under Deductions",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-amount-in-total(fc)-field-of-assets,goods,raw-materials,-and-other-goods-and-services-under-deductions;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@TC_10_11_13_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_10_11_13\" \"Enter data in E-filling form\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Enter data in Deduction \"120\" ,\"200\", \"10\" ,\"10\",\"10\",\"10\" ,\"20\" ,\"20\" and validate total value for Amount of VAT Deductible",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "User validate Amount of VAT Deductible",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_10_11_13",
      "offset": 30
    },
    {
      "val": "Enter data in E-filling form",
      "offset": 66
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 190937,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 332556190,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15123957290,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 24091480011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 25
    },
    {
      "val": "200",
      "offset": 32
    },
    {
      "val": "10",
      "offset": 39
    },
    {
      "val": "10",
      "offset": 45
    },
    {
      "val": "10",
      "offset": 50
    },
    {
      "val": "10",
      "offset": 55
    },
    {
      "val": "20",
      "offset": 61
    },
    {
      "val": "20",
      "offset": 67
    }
  ],
  "location": "DV_2390_e_filing.enter_data_in_Deduction_and_validate_total_value_for_Amount_of_VAT_Deductible(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 13403632708,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_validate_Amount_of_VAT_Deductible()"
});
formatter.result({
  "duration": 71026646,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 709642642,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 120,
  "name": "Validate the e-filing schedule Upload functionality",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-e-filing-schedule-upload-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@TC_21_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User click on browse button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User select file format pdf \"\u003cpdf\u003e\" and see message \"\u003cMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User click on browse button",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User select file format image \"\u003cimj\u003e\" and see message \"\u003cMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User click on browse button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User select file format word \"\u003cword\u003e\" and see message \"\u003cMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click on browse button and upload file more than two mp \"\u003cmb\u003e\" and validate mess \"\u003cmbMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User click on browse button and upload file less than two mp \"\u003clessMB\u003e\" and user see file name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User click on cancel button and excel file gets removed and user see \"\u003cremoved\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 135,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-e-filing-schedule-upload-functionality;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Mess",
        "mbMess",
        "name",
        "removed",
        "pdf",
        "imj",
        "word",
        "mb",
        "lessMB"
      ],
      "line": 136,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-e-filing-schedule-upload-functionality;;1"
    },
    {
      "cells": [
        "Declaration_Verification_21",
        "validate Upload functionality",
        "Selected file format is not supported",
        "File size must be less than 2MB",
        "DRC Test Data.xlsx",
        "No file selected",
        "certificate.pdf",
        "test img.PNG",
        "test word.docx",
        "SampleXLSFile.xls",
        "DRC Test Data.xlsx"
      ],
      "line": 137,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-e-filing-schedule-upload-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511404223,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "Validate the e-filing schedule Upload functionality",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-e-filing-schedule-upload-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 119,
      "name": "@TC_21_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 121,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_21\" \"validate Upload functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User click on browse button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User select file format pdf \"certificate.pdf\" and see message \"Selected file format is not supported\"",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User click on browse button",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User select file format image \"test img.PNG\" and see message \"Selected file format is not supported\"",
  "matchedColumns": [
    2,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User click on browse button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User select file format word \"test word.docx\" and see message \"Selected file format is not supported\"",
  "matchedColumns": [
    2,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click on browse button and upload file more than two mp \"SampleXLSFile.xls\" and validate mess \"File size must be less than 2MB\"",
  "matchedColumns": [
    3,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User click on browse button and upload file less than two mp \"DRC Test Data.xlsx\" and user see file name \"DRC Test Data.xlsx\"",
  "matchedColumns": [
    4,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User click on cancel button and excel file gets removed and user see \"No file selected\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_21",
      "offset": 30
    },
    {
      "val": "validate Upload functionality",
      "offset": 60
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 1499000,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 414095782,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15186495210,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 24112668342,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_browse_button()"
});
formatter.result({
  "duration": 2163631762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "certificate.pdf",
      "offset": 29
    },
    {
      "val": "Selected file format is not supported",
      "offset": 63
    }
  ],
  "location": "DV_2390_e_filing.user_select_file_format_pdf_and_see_message(String,String)"
});
formatter.result({
  "duration": 6911947454,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Selected file format is not supported\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Selected file format is not supported\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_2390_e_filing.user_select_file_format_pdf_and_see_message(DV_2390_e_filing.java:649)\r\n\tat ✽.And User select file format pdf \"certificate.pdf\" and see message \"Selected file format is not supported\"(features/10_DV_2390_e_filing.feature:126)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_browse_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test img.PNG",
      "offset": 31
    },
    {
      "val": "Selected file format is not supported",
      "offset": 62
    }
  ],
  "location": "DV_2390_e_filing.user_select_file_format_image_and_see_message(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_browse_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test word.docx",
      "offset": 30
    },
    {
      "val": "Selected file format is not supported",
      "offset": 63
    }
  ],
  "location": "DV_2390_e_filing.user_select_file_format_word_and_see_message(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SampleXLSFile.xls",
      "offset": 62
    },
    {
      "val": "File size must be less than 2MB",
      "offset": 100
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_browse_button_and_upload_file_more_than_two_mp_and_validate_mess(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DRC Test Data.xlsx",
      "offset": 62
    },
    {
      "val": "DRC Test Data.xlsx",
      "offset": 106
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_browse_button_and_upload_file_less_than_two_mp_and_user_see_file_name(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No file selected",
      "offset": 70
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_cancel_button_and_excel_file_gets_removed_and_user_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 854860648,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 139,
      "value": "# submit file"
    }
  ],
  "line": 141,
  "name": "Validate the Save Draft button functionality.",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-save-draft-button-functionality.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 140,
      "name": "@TC_24_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 142,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User click on Save draft button and check message \"\u003csaveDraft\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click on Save draft button and check message \"\u003csaveDraft\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User entered value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User click on Save draft button and check message \"\u003csaveDraft\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User click on Save draft button and check message \"\u003csaveDraft\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User entered value \"\u003c26\u003e\" for Tax Calculation",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on Save draft button and check message \"\u003csaveDraft\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User click on browser and upload file \"\u003cuploadFile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User click on Save draft button and check message \"\u003csaveDraft\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 158,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-save-draft-button-functionality.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "saveDraft",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "10.1",
        "11",
        "11.1",
        "12",
        "12.1",
        "13",
        "13.1",
        "17",
        "18",
        "19",
        "20",
        "26",
        "uploadFile"
      ],
      "line": 159,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-save-draft-button-functionality.;;1"
    },
    {
      "cells": [
        "Declaration_Verification_24",
        "validate Save Draft  functionality",
        "e-Filing declaration drafted successfully",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "DRC Test Data.xlsx"
      ],
      "line": 160,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-save-draft-button-functionality.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513375722,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Validate the Save Draft button functionality.",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-save-draft-button-functionality.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 140,
      "name": "@TC_24_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 142,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_24\" \"validate Save Draft  functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User click on Save draft button and check message \"e-Filing declaration drafted successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User entered value \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" for Operation Performed",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click on Save draft button and check message \"e-Filing declaration drafted successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "User entered value \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" \"10\" for Tax Deductible On",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "User click on Save draft button and check message \"e-Filing declaration drafted successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User entered value \"10\" \"10\" \"10\" \"10\" for Adjustment",
  "matchedColumns": [
    20,
    21,
    22,
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "User click on Save draft button and check message \"e-Filing declaration drafted successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User entered value \"10\" for Tax Calculation",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on Save draft button and check message \"e-Filing declaration drafted successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User click on browser and upload file \"DRC Test Data.xlsx\"",
  "matchedColumns": [
    25
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User click on Save draft button and check message \"e-Filing declaration drafted successfully\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_24",
      "offset": 30
    },
    {
      "val": "validate Save Draft  functionality",
      "offset": 60
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 351666,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 438373877,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15199767627,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 24125788293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-Filing declaration drafted successfully",
      "offset": 51
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_Save_draft_button_and_check_message(String)"
});
formatter.result({
  "duration": 3244554941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 35
    },
    {
      "val": "10",
      "offset": 40
    },
    {
      "val": "10",
      "offset": 45
    },
    {
      "val": "10",
      "offset": 50
    },
    {
      "val": "10",
      "offset": 55
    },
    {
      "val": "10",
      "offset": 60
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Operation_Performed(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15214374323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-Filing declaration drafted successfully",
      "offset": 51
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_Save_draft_button_and_check_message(String)"
});
formatter.result({
  "duration": 8206857952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 35
    },
    {
      "val": "10",
      "offset": 40
    },
    {
      "val": "10",
      "offset": 45
    },
    {
      "val": "10",
      "offset": 50
    },
    {
      "val": "10",
      "offset": 55
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Tax_Deductible_On(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10731809882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-Filing declaration drafted successfully",
      "offset": 51
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_Save_draft_button_and_check_message(String)"
});
formatter.result({
  "duration": 8200525961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Adjustment(String,String,String,String)"
});
formatter.result({
  "duration": 700454573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-Filing declaration drafted successfully",
      "offset": 51
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_Save_draft_button_and_check_message(String)"
});
formatter.result({
  "duration": 3459013618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Tax_Calculation(String)"
});
formatter.result({
  "duration": 293298645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-Filing declaration drafted successfully",
      "offset": 51
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_Save_draft_button_and_check_message(String)"
});
formatter.result({
  "duration": 3164731789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRC Test Data.xlsx",
      "offset": 39
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_browser_and_upload_file(String)"
});
formatter.result({
  "duration": 9222655013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-Filing declaration drafted successfully",
      "offset": 51
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_Save_draft_button_and_check_message(String)"
});
formatter.result({
  "duration": 3171221374,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 759242429,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 163,
  "name": "Validate the check box functionality , authorized Signatory ,Previous button , Submit button functionality",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-check-box-functionality-,-authorized-signatory-,previous-button-,-submit-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 162,
      "name": "@TC_22_23_25_26_27_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 164,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "User click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User see Authorized Signatory field is activated",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User again click on checkbox and validate field is deactivated",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "User again click on checkbox and click on Authorized Signatory field",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "User see Authorized Signatory name",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "User validate submit button is disable",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "User click on Authorized Signatory",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "User validate submit button is activate",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "User click on previous button and navigate to Vat e-filing page",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User click on previous button",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User validate page is navigated to vat e-filing landing screen",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User entered value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User entered value \"\u003c26\u003e\" for Tax Calculation",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User validate Otp pop up window should appear",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User click on verify button and validate message \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User enter invalid data numbers \"\u003cnumeric\u003e\" and click on verify and see mess \"\u003cInvalidMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User enter invalid data special character \"\u003cspecial\u003e\" and click on verify and see mess \"\u003cInvalidMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "User enter Alpha numeric \"\u003cAlphanumeric\u003e\" and click on verify and see mess \"\u003cInvalidMess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User click on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User again click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User waits for more than two min and click on verify button and see message \"\u003cmess\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User click on close icon on pop up",
  "keyword": "And "
});
formatter.examples({
  "line": 198,
  "name": "",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-check-box-functionality-,-authorized-signatory-,previous-button-,-submit-button-functionality;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "10.1",
        "11",
        "11.1",
        "12",
        "12.1",
        "13",
        "13.1",
        "17",
        "18",
        "19",
        "20",
        "26",
        "mess",
        "InvalidMess",
        "numeric",
        "special",
        "Alphanumeric",
        "ExiMess"
      ],
      "line": 199,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-check-box-functionality-,-authorized-signatory-,previous-button-,-submit-button-functionality;;1"
    },
    {
      "cells": [
        "Declaration_Verification_22_23_25_26_27",
        "validate period field",
        "10000",
        "7000",
        "5000",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "10000",
        "Enter Verification Code",
        "Please enter valid OTP",
        "123456",
        "!@$@$3^",
        "asd1123",
        "Please enter valid OTP"
      ],
      "line": 200,
      "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-check-box-functionality-,-authorized-signatory-,previous-button-,-submit-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512743064,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "Validate the check box functionality , authorized Signatory ,Previous button , Submit button functionality",
  "description": "",
  "id": "e-filing--\u003e-filing--\u003e-declaration-with-verification-and-confirmation-of-e-declaration;validate-the-check-box-functionality-,-authorized-signatory-,previous-button-,-submit-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 162,
      "name": "@TC_22_23_25_26_27_DV_2390_Declaration_with_verification"
    }
  ]
});
formatter.step({
  "line": 164,
  "name": "User is on Vat e-Filing Page \"Declaration_Verification_22_23_25_26_27\" \"validate period field\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "User click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User see Authorized Signatory field is activated",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User again click on checkbox and validate field is deactivated",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "User again click on checkbox and click on Authorized Signatory field",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "User see Authorized Signatory name",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "User validate submit button is disable",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "User click on Authorized Signatory",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "User validate submit button is activate",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "User click on previous button and navigate to Vat e-filing page",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User click on previous button",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User validate page is navigated to vat e-filing landing screen",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User entered value \"10000\" \"7000\" \"5000\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Operation Performed",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Tax Deductible On",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" for Adjustment",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User entered value \"10000\" for Tax Calculation",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User validate Otp pop up window should appear",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User click on verify button and validate message \"Enter Verification Code\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User enter invalid data numbers \"123456\" and click on verify and see mess \"Please enter valid OTP\"",
  "matchedColumns": [
    25,
    26
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User enter invalid data special character \"!@$@$3^\" and click on verify and see mess \"Please enter valid OTP\"",
  "matchedColumns": [
    25,
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "User enter Alpha numeric \"asd1123\" and click on verify and see mess \"Please enter valid OTP\"",
  "matchedColumns": [
    25,
    28
  ],
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User click on close icon",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "User again click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User waits for more than two min and click on verify button and see message \"Enter Verification Code\"",
  "matchedColumns": [
    24
  ],
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User click on close icon on pop up",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Declaration_Verification_22_23_25_26_27",
      "offset": 30
    },
    {
      "val": "validate period field",
      "offset": 72
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 347106,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 417234848,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 15201653345,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 24190710363,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_checkbox()"
});
formatter.result({
  "duration": 216324162,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_see_Authorized_Signatory_field_is_activated()"
});
formatter.result({
  "duration": 1046350150,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_gain_click_on_checkbox_and_validate_field_is_deactivated()"
});
formatter.result({
  "duration": 2148093178,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_again_click_on_checkbox_and_click_on_Authorized_Signatory_field()"
});
formatter.result({
  "duration": 4540964723,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_see_Authorized_Signatory_name()"
});
formatter.result({
  "duration": 28143859,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_validate_submit_button_is_disable()"
});
formatter.result({
  "duration": 2202878478,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_Authorized_Signatory()"
});
formatter.result({
  "duration": 1158513221,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_validate_submit_button_is_activate()"
});
formatter.result({
  "duration": 1026105106,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_previous_button_and_navigate_to_Vat_e_filing_page()"
});
formatter.result({
  "duration": 9248659806,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 24182462730,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_previous_button()"
});
formatter.result({
  "duration": 235894941,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_validate_page_is_navigated_to_vat_e_filing_landing_screen()"
});
formatter.result({
  "duration": 42779624,
  "status": "passed"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "duration": 24195671881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 20
    },
    {
      "val": "7000",
      "offset": 28
    },
    {
      "val": "5000",
      "offset": 35
    },
    {
      "val": "500",
      "offset": 42
    },
    {
      "val": "500",
      "offset": 48
    },
    {
      "val": "500",
      "offset": 54
    },
    {
      "val": "500",
      "offset": 60
    },
    {
      "val": "500",
      "offset": 66
    },
    {
      "val": "500",
      "offset": 72
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Operation_Performed(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 16076592324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    },
    {
      "val": "500",
      "offset": 44
    },
    {
      "val": "500",
      "offset": 50
    },
    {
      "val": "500",
      "offset": 56
    },
    {
      "val": "500",
      "offset": 62
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Tax_Deductible_On(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 11674725072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Adjustment(String,String,String,String)"
});
formatter.result({
  "duration": 1300511227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 20
    }
  ],
  "location": "DV_2390_e_filing.user_entered_value_for_Tax_Calculation(String)"
});
formatter.result({
  "duration": 370547281,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "duration": 5759052918,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 9195014430,
  "status": "passed"
});
formatter.match({
  "location": "DV_2390_e_filing.user_validate_Otp_pop_up_window_should_appear()"
});
formatter.result({
  "duration": 7047685000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Verification Code",
      "offset": 50
    }
  ],
  "location": "DV_2390_e_filing.user_click_on_verify_button_and_validate_message(String)"
});
formatter.result({
  "duration": 5236727940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 33
    },
    {
      "val": "Please enter valid OTP",
      "offset": 75
    }
  ],
  "location": "DV_2390_e_filing.user_enter_invalid_data_numbers_and_click_on_verify_and_see_mess(String,String)"
});
formatter.result({
  "duration": 8233856188,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Please enter valid OTP\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Please enter valid OTP\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor27.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.drc.vat.StepDefinitions.DV_2390_e_filing.user_enter_invalid_data_numbers_and_click_on_verify_and_see_mess(DV_2390_e_filing.java:878)\r\n\tat ✽.And User enter invalid data numbers \"123456\" and click on verify and see mess \"Please enter valid OTP\"(features/10_DV_2390_e_filing.feature:189)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@$@$3^",
      "offset": 43
    },
    {
      "val": "Please enter valid OTP",
      "offset": 86
    }
  ],
  "location": "DV_2390_e_filing.user_enter_invalid_data_special_character_and_click_on_verify_and_see_mess(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "asd1123",
      "offset": 26
    },
    {
      "val": "Please enter valid OTP",
      "offset": 69
    }
  ],
  "location": "DV_2390_e_filing.user_enter_Alpha_numeric_and_click_on_verify_and_see_mess(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_close_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2390_e_filing.user_again_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Verification Code",
      "offset": 77
    }
  ],
  "location": "DV_2390_e_filing.user_waits_for_more_than_two_min_and_click_on_verify_button_and_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_close_icon_on_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 780559856,
  "status": "passed"
});
formatter.uri("features/11_DV_2391_eFile_Preview.feature");
formatter.feature({
  "line": 1,
  "name": "User is on e file landing screen and click on Preview button",
  "description": "",
  "id": "user-is-on-e-file-landing-screen-and-click-on-preview-button",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality",
  "description": "",
  "id": "user-is-on-e-file-landing-screen-and-click-on-preview-button;user-verify-operations-performed-section-,tax-deductible-,-adjustment-along-with-download,preview--functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_02_03_04_05_06_07_VAT_e-Filing_Preview"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed on preview",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User entered value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On preview",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment on preview",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User entered value \"\u003c26\u003e\" for Tax Calculation on preview",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on previous button and navigate to Vat e-filing page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Preview",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User validate Operations Performed Section",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User validate Tax Deductible On",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on download button and user validate file should get downloaded",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-is-on-e-file-landing-screen-and-click-on-preview-button;user-verify-operations-performed-section-,tax-deductible-,-adjustment-along-with-download,preview--functionality;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "10",
        "10.1",
        "11",
        "11.1",
        "12",
        "12.1",
        "13",
        "13.1",
        "17",
        "18",
        "19",
        "20",
        "26"
      ],
      "line": 26,
      "id": "user-is-on-e-file-landing-screen-and-click-on-preview-button;user-verify-operations-performed-section-,tax-deductible-,-adjustment-along-with-download,preview--functionality;;1"
    },
    {
      "cells": [
        "e-file_Preview_02_03_04_05_06_07",
        "user verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality",
        "100000",
        "7000",
        "5000",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "100000"
      ],
      "line": 27,
      "id": "user-is-on-e-file-landing-screen-and-click-on-preview-button;user-verify-operations-performed-section-,tax-deductible-,-adjustment-along-with-download,preview--functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5510370882,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality",
  "description": "",
  "id": "user-is-on-e-file-landing-screen-and-click-on-preview-button;user-verify-operations-performed-section-,tax-deductible-,-adjustment-along-with-download,preview--functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_02_03_04_05_06_07_VAT_e-Filing_Preview"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Vat e-Filing Page \"e-file_Preview_02_03_04_05_06_07\" \"user verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality\"",
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
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on e-filing to fill data",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User entered value \"100000\" \"7000\" \"5000\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Operation Performed on preview",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Tax Deductible On preview",
  "matchedColumns": [
    16,
    17,
    18,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User entered value \"500\" \"500\" \"500\" \"500\" for Adjustment on preview",
  "matchedColumns": [
    19,
    20,
    21,
    22
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User entered value \"100000\" for Tax Calculation on preview",
  "matchedColumns": [
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on previous button and navigate to Vat e-filing page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Preview",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User validate Operations Performed Section",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User validate Tax Deductible On",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User validate Adjustment",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on download button and user validate file should get downloaded",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "e-file_Preview_02_03_04_05_06_07",
      "offset": 30
    },
    {
      "val": "user verify Operations Performed Section ,Tax Deductible , Adjustment along with Download,preview  functionality",
      "offset": 65
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 316899,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 149182375,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv _ngcontent-c6\u003d\"\" class\u003d\"d-flex ng-tns-c6-2 ng-star-inserted\" ng-reflect-klass\u003d\"d-flex\" ng-reflect-ng-class\u003d\"[object Object]\" title\u003d\"Dashboard\"\u003e...\u003c/div\u003e is not clickable at point (135, 136). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:25)\r\n\tat ✽.And User click on Dashboard(features/11_DV_2391_eFile_Preview.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.clicks_on_e_filing_to_fill_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 20
    },
    {
      "val": "7000",
      "offset": 29
    },
    {
      "val": "5000",
      "offset": 36
    },
    {
      "val": "500",
      "offset": 43
    },
    {
      "val": "500",
      "offset": 49
    },
    {
      "val": "500",
      "offset": 55
    },
    {
      "val": "500",
      "offset": 61
    },
    {
      "val": "500",
      "offset": 67
    },
    {
      "val": "500",
      "offset": 73
    }
  ],
  "location": "DV_2391_eFile_Preview.user_entered_value_for_Operation_Performed_on_preview(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    },
    {
      "val": "500",
      "offset": 44
    },
    {
      "val": "500",
      "offset": 50
    },
    {
      "val": "500",
      "offset": 56
    },
    {
      "val": "500",
      "offset": 62
    }
  ],
  "location": "DV_2391_eFile_Preview.user_entered_value_for_Tax_Deductible_On_preview(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "500",
      "offset": 26
    },
    {
      "val": "500",
      "offset": 32
    },
    {
      "val": "500",
      "offset": 38
    }
  ],
  "location": "DV_2391_eFile_Preview.user_entered_value_for_Adjustment_on_preview(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 20
    }
  ],
  "location": "DV_2391_eFile_Preview.user_entered_value_for_Tax_Calculation_on_preview(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_is_navigate_to_Tax_Calculation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_previous_button_and_navigate_to_Vat_e_filing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.user_click_on_Preview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.user_validate_Operations_Performed_Section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.user_validate_Tax_Deductible_On()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.user_validate_Adjustment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.user_click_on_download_button_and_user_validate_file_should_get_downloaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 756100800,
  "status": "passed"
});
formatter.uri("features/12_1_DV_2394_Landing_Screen.feature");
formatter.feature({
  "line": 1,
  "name": "User is on e-filing landing screen",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate the Download templates button functionality",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-download-templates-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Download Template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verify download file",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-download-templates-button-functionality;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description"
      ],
      "line": 13,
      "id": "user-is-on-e-filing-landing-screen;validate-the-download-templates-button-functionality;;1"
    },
    {
      "cells": [
        "Landing_Screen_02",
        "download template"
      ],
      "line": 14,
      "id": "user-is-on-e-filing-landing-screen;validate-the-download-templates-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5507729110,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate the Download templates button functionality",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-download-templates-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Vat e-Filing Page \"Landing_Screen_02\" \"download template\"",
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
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Download Template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verify download file",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing_Screen_02",
      "offset": 30
    },
    {
      "val": "download template",
      "offset": 50
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 315474,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 89762716,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv _ngcontent-c6\u003d\"\" class\u003d\"d-flex ng-tns-c6-2 ng-star-inserted\" ng-reflect-klass\u003d\"d-flex\" ng-reflect-ng-class\u003d\"[object Object]\" title\u003d\"Dashboard\"\u003e...\u003c/div\u003e is not clickable at point (135, 136). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:25)\r\n\tat ✽.And User click on Dashboard(features/12_1_DV_2394_Landing_Screen.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Download_Template()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_verify_download_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 794100439,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#@TC_03 help"
    },
    {
      "line": 17,
      "value": "#Validate the Helpdesk (?) icon functionality."
    }
  ],
  "line": 19,
  "name": "Validate the Financial Year dropdown functionality.",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-financial-year-dropdown-functionality.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@TC_04_e-filing_landing_screen"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user see Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Finicial year dropdown \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User see all month record from that year \"\u003cjan\u003e\" to \"\u003cdec\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User see Total Liability is not changed",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 28,
      "value": "#  And User see important dates \"\u003cdate1\u003e\" \"\u003cdate2\u003e\" \"\u003cdate3\u003e\" \"\u003cdate4\u003e\" \"\u003cdate5\u003e\" \"\u003cdate6\u003e\""
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-financial-year-dropdown-functionality.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters",
        "jan",
        "dec"
      ],
      "line": 30,
      "id": "user-is-on-e-filing-landing-screen;validate-the-financial-year-dropdown-functionality.;;1"
    },
    {
      "cells": [
        "Landing_Screen_04",
        "Finicial year functionality",
        "drp_Year2019",
        "TextJan",
        "TextDec"
      ],
      "line": 31,
      "id": "user-is-on-e-filing-landing-screen;validate-the-financial-year-dropdown-functionality.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512363184,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate the Financial Year dropdown functionality.",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-financial-year-dropdown-functionality.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@TC_04_e-filing_landing_screen"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Vat e-Filing Page \"Landing_Screen_04\" \"Finicial year functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user see Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Finicial year dropdown \"drp_Year2019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User see all month record from that year \"TextJan\" to \"TextDec\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User see Total Liability is not changed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing_Screen_04",
      "offset": 30
    },
    {
      "val": "Finicial year functionality",
      "offset": 50
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 306070,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 157606411,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv _ngcontent-c6\u003d\"\" class\u003d\"d-flex ng-tns-c6-2 ng-star-inserted\" ng-reflect-klass\u003d\"d-flex\" ng-reflect-ng-class\u003d\"[object Object]\" title\u003d\"Dashboard\"\u003e...\u003c/div\u003e is not clickable at point (135, 136). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:25)\r\n\tat ✽.And User click on Dashboard(features/12_1_DV_2394_Landing_Screen.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_see_Total_Liability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Year2019",
      "offset": 38
    }
  ],
  "location": "DV_2394_landing_screen.user_click_on_Finicial_year_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TextJan",
      "offset": 42
    },
    {
      "val": "TextDec",
      "offset": 55
    }
  ],
  "location": "DV_2394_landing_screen.user_see_all_month_record_from_that_year_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_see_Total_Liability_is_not_changed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 758411995,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Validate the Status functionality whether the e-filing , payment and assessment are pending for that particular month",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-status-functionality-whether-the-e-filing-,-payment-and-assessment-are-pending-for-that-particular-month",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@TC_05_e-filing_landing_screen"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Finicial year dropdown \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clicks on e-filing to check",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-status-functionality-whether-the-e-filing-,-payment-and-assessment-are-pending-for-that-particular-month;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters"
      ],
      "line": 42,
      "id": "user-is-on-e-filing-landing-screen;validate-the-status-functionality-whether-the-e-filing-,-payment-and-assessment-are-pending-for-that-particular-month;;1"
    },
    {
      "cells": [
        "Landing_Screen_05",
        "validate status functionality",
        "drp_Year2019"
      ],
      "line": 43,
      "id": "user-is-on-e-filing-landing-screen;validate-the-status-functionality-whether-the-e-filing-,-payment-and-assessment-are-pending-for-that-particular-month;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5512480027,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate the Status functionality whether the e-filing , payment and assessment are pending for that particular month",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-status-functionality-whether-the-e-filing-,-payment-and-assessment-are-pending-for-that-particular-month;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@TC_05_e-filing_landing_screen"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on Vat e-Filing Page \"Landing_Screen_05\" \"validate status functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Finicial year dropdown \"drp_Year2019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "clicks on e-filing to check",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing_Screen_05",
      "offset": 30
    },
    {
      "val": "validate status functionality",
      "offset": 50
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 239954,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 90148295,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv _ngcontent-c6\u003d\"\" class\u003d\"d-flex ng-tns-c6-2 ng-star-inserted\" ng-reflect-klass\u003d\"d-flex\" ng-reflect-ng-class\u003d\"[object Object]\" title\u003d\"Dashboard\"\u003e...\u003c/div\u003e is not clickable at point (135, 136). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:25)\r\n\tat ✽.And User click on Dashboard(features/12_1_DV_2394_Landing_Screen.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Year2019",
      "offset": 38
    }
  ],
  "location": "DV_2394_landing_screen.user_click_on_Finicial_year_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.clicks_on_e_filing_to_check()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 735736920,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 48,
      "value": "#  @TC_06_07_e-filing_landing_screen"
    },
    {
      "line": 49,
      "value": "#  Scenario Outline: Validate the File button Functionality whether user can e-declare for the particular month and Preview button functionality"
    },
    {
      "line": 50,
      "value": "#    Given User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 51,
      "value": "#    And User click on Tab"
    },
    {
      "line": 52,
      "value": "#    And clicks on e-filing on landing screen"
    },
    {
      "line": 53,
      "value": "#    And User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed on preview"
    },
    {
      "line": 54,
      "value": "#    And User entered value \"\u003c10\u003e\" \"\u003c10.1\u003e\" \"\u003c11\u003e\" \"\u003c11.1\u003e\" \"\u003c12\u003e\" \"\u003c12.1\u003e\" \"\u003c13\u003e\" \"\u003c13.1\u003e\" for Tax Deductible On preview"
    },
    {
      "line": 55,
      "value": "#    And User entered value \"\u003c17\u003e\" \"\u003c18\u003e\" \"\u003c19\u003e\" \"\u003c20\u003e\" for Adjustment on preview"
    },
    {
      "line": 56,
      "value": "#    And User entered value \"\u003c26\u003e\" for Tax Calculation on preview"
    },
    {
      "line": 57,
      "value": "#    And User click on check box and click on submit button"
    },
    {
      "line": 58,
      "value": "#    And Enter OTP and click on verify button and click on Ok button"
    },
    {
      "line": 59,
      "value": "#    And User is navigate to Tax Calculation page"
    },
    {
      "line": 60,
      "value": "#    And User click on Proceed button and navigate to PAyment of tax page"
    },
    {
      "line": 61,
      "value": "#    And User click on cancel button on Payment of tax page and navaigate to e-filing page"
    },
    {
      "line": 62,
      "value": "#    And User click on Preview on landing screen"
    },
    {
      "line": 63,
      "value": "#    And User validate Operations Performed Section"
    },
    {
      "line": 64,
      "value": "#    And User validate Tax Deductible On"
    },
    {
      "line": 65,
      "value": "#    And User validate Adjustment"
    },
    {
      "line": 66,
      "value": "#    And User click on Previous button and user navigate back to e-declaraton Vate-Filing Page"
    },
    {
      "line": 68,
      "value": "#    Examples:"
    },
    {
      "line": 69,
      "value": "#      | TestcaseID           | Description                            |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |  17 |  18 |  19 |  20 |    26 |"
    },
    {
      "line": 70,
      "value": "#      | Landing_Screen_06_07 | file with preview button functionality | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 | 500 | 500 | 500 | 10000 |"
    },
    {
      "line": 73,
      "value": "# filezilla through payment only writes in xls"
    }
  ],
  "line": 76,
  "name": "Validate the PAY button functionality whether user can successfully pay the amount for that particular month",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-pay-button-functionality-whether-user-can-successfully-pay-the-amount-for-that-particular-month",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_08_e-filing_landing_screen"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "clicks on e-filing on landing screen",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User entered value \"\u003c1\u003e\" \"\u003c2\u003e\" \"\u003c2.1\u003e\" \"\u003c3\u003e\" \"\u003c4\u003e\" \"\u003c5\u003e\" \"\u003c6\u003e\" \"\u003c7\u003e\" \"\u003c8\u003e\" for Operation Performed on preview",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User click on previous button and navigate to Vat e-filing page",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User see Preview button is display and pay button gets enable and user click on pay button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User click on proceed button and navigate to Payment of tax page",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "cliccks on \"\u003cPayment Option\u003e\" and verify details",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Execute query for payment",
  "keyword": "And "
});
formatter.examples({
  "line": 92,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-pay-button-functionality-whether-user-can-successfully-pay-the-amount-for-that-particular-month;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "bankName",
        "1",
        "2",
        "2.1",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "Payment Option"
      ],
      "line": 93,
      "id": "user-is-on-e-filing-landing-screen;validate-the-pay-button-functionality-whether-user-can-successfully-pay-the-amount-for-that-particular-month;;1"
    },
    {
      "cells": [
        "Landing_Screen_08",
        "validate pay button functionality",
        "txt_BankName_Central",
        "10000",
        "7000",
        "5000",
        "500",
        "500",
        "500",
        "500",
        "500",
        "500",
        "Over the Counter"
      ],
      "line": 94,
      "id": "user-is-on-e-filing-landing-screen;validate-the-pay-button-functionality-whether-user-can-successfully-pay-the-amount-for-that-particular-month;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511325284,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "Validate the PAY button functionality whether user can successfully pay the amount for that particular month",
  "description": "",
  "id": "user-is-on-e-filing-landing-screen;validate-the-pay-button-functionality-whether-user-can-successfully-pay-the-amount-for-that-particular-month;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_08_e-filing_landing_screen"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User is on Vat e-Filing Page \"Landing_Screen_08\" \"validate pay button functionality\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "User click on Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "clicks on e-filing on landing screen",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User entered value \"10000\" \"7000\" \"5000\" \"500\" \"500\" \"500\" \"500\" \"500\" \"500\" for Operation Performed on preview",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User click on check box and click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on Yes button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Enter OTP and click on verify button and click on Ok button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User is navigate to Tax Calculation page",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User click on previous button and navigate to Vat e-filing page",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User see Preview button is display and pay button gets enable and user click on pay button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User click on proceed button and navigate to Payment of tax page",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "cliccks on \"Over the Counter\" and verify details",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Execute query for payment",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing_Screen_08",
      "offset": 30
    },
    {
      "val": "validate pay button functionality",
      "offset": 50
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 483043,
  "status": "passed"
});
formatter.match({
  "location": "DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard()"
});
formatter.result({
  "duration": 94985562,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv _ngcontent-c6\u003d\"\" class\u003d\"d-flex ng-tns-c6-2 ng-star-inserted\" ng-reflect-klass\u003d\"d-flex\" ng-reflect-ng-class\u003d\"[object Object]\" title\u003d\"Dashboard\"\u003e...\u003c/div\u003e is not clickable at point (135, 136). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2882_Manual_Assessed_LandingScreen.user_click_on_Dashboard(DV_2882_Manual_Assessed_LandingScreen.java:25)\r\n\tat ✽.And User click on Dashboard(features/12_1_DV_2394_Landing_Screen.feature:78)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.clicks_on_e_filing_on_landing_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 20
    },
    {
      "val": "7000",
      "offset": 28
    },
    {
      "val": "5000",
      "offset": 35
    },
    {
      "val": "500",
      "offset": 42
    },
    {
      "val": "500",
      "offset": 48
    },
    {
      "val": "500",
      "offset": 54
    },
    {
      "val": "500",
      "offset": 60
    },
    {
      "val": "500",
      "offset": 66
    },
    {
      "val": "500",
      "offset": 72
    }
  ],
  "location": "DV_2391_eFile_Preview.user_entered_value_for_Operation_Performed_on_preview(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_check_box_and_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Yes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2391_eFile_Preview.enter_OTP_and_click_on_verify_button_and_click_on_Ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_is_navigate_to_Tax_Calculation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2390_e_filing.user_click_on_previous_button_and_navigate_to_Vat_e_filing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_see_Preview_button_is_display_and_pay_button_gets_enable_and_user_click_on_pay_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_proceed_button_and_navigate_to_Payment_of_tax_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Over the Counter",
      "offset": 12
    }
  ],
  "location": "DV_2394_landing_screen.cliccks_on_and_verify_details(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.execute_query_for_payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 760239293,
  "status": "passed"
});
formatter.uri("features/13_3DV_2394_Total_Liability.feature");
formatter.feature({
  "line": 1,
  "name": "User is on e filing and see Total Liability",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate that if user changes the Financial year from drop down the total liability amount does not change.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.",
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
  "line": 5,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user see Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Finicial year dropdown \"\u003cFilters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see Total Liability is not changed",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters"
      ],
      "line": 12,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;;1"
    },
    {
      "cells": [
        "Total_Liability_02",
        "validate liability amount",
        "drp_Year2019"
      ],
      "line": 13,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511527620,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate that if user changes the Financial year from drop down the total liability amount does not change.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-that-if-user-changes-the-financial-year-from-drop-down-the-total-liability-amount-does-not-change.;;2",
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
  "line": 5,
  "name": "User is on Vat e-Filing Page \"Total_Liability_02\" \"validate liability amount\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user see Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Finicial year dropdown \"drp_Year2019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User see Total Liability is not changed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Total_Liability_02",
      "offset": 30
    },
    {
      "val": "validate liability amount",
      "offset": 51
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 248788,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 5146054425,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca _ngcontent-c6\u003d\"\" class\u003d\"icon-container ng-tns-c6-4 ng-star-inserted\" ng-reflect-router-link\u003d\"vat-e-filing\" href\u003d\"/vat-e-filing\"\u003e...\u003c/a\u003e is not clickable at point (135, 240). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2394_landing_screen.user_click_on_Tab(DV_2394_landing_screen.java:69)\r\n\tat ✽.And User click on Tab(features/13_3DV_2394_Total_Liability.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_see_Total_Liability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Year2019",
      "offset": 38
    }
  ],
  "location": "DV_2394_landing_screen.user_click_on_Finicial_year_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_see_Total_Liability_is_not_changed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 758158932,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "# @TC_04"
    },
    {
      "line": 16,
      "value": "#Scenario Outline: Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board."
    },
    {
      "line": 17,
      "value": "# Given User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\""
    },
    {
      "line": 18,
      "value": "#And User click on Tab"
    },
    {
      "line": 19,
      "value": "##  And User check current liability \"\u003cliability\u003e\""
    },
    {
      "line": 20,
      "value": "#And User click on Pay button on Total Liability"
    },
    {
      "line": 21,
      "value": "#And User click on over the counter on payment method"
    },
    {
      "line": 22,
      "value": "#And User see Tax Payment bill"
    },
    {
      "line": 23,
      "value": "#And User click on print button on over the counter page"
    },
    {
      "line": 24,
      "value": "#And User see pdf is open with print button"
    },
    {
      "line": 25,
      "value": "# And User click on radio button on particular bank"
    },
    {
      "line": 26,
      "value": "# And User click on Pay now buttton on payment of tax page"
    },
    {
      "line": 27,
      "value": "# And User navigate to selected bank page"
    },
    {
      "line": 28,
      "value": "# if payment done than amount will be zero"
    },
    {
      "line": 29,
      "value": "#Examples:"
    },
    {
      "line": 30,
      "value": "# | TestcaseID         | Description               | Filters  | liability |"
    },
    {
      "line": 31,
      "value": "#| Total_Liability_04 | validate liability amount | Year2018 | 4.963,2   |"
    }
  ],
  "line": 33,
  "name": "Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Vat e-Filing Page \"\u003cTestcaseID\u003e\" \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Pay button on Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on radio button on particular bank",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Pay now buttton on payment of tax page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User navigate to selected bank page",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 41,
      "value": "# if payment done than amount will be zero"
    }
  ],
  "line": 42,
  "name": "",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "Description",
        "Filters"
      ],
      "line": 43,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;;1"
    },
    {
      "cells": [
        "Total_Liability_03",
        "validate liability amount",
        "drp_Year2019"
      ],
      "line": 44,
      "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5513169395,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate whether Total Liability amount displayed is reflected Zero when user completes the payment process for outstanding amount which is displayed at Total liability section at dash board.",
  "description": "",
  "id": "user-is-on-e-filing-and-see-total-liability;validate-whether-total-liability-amount-displayed-is-reflected-zero-when-user-completes-the-payment-process-for-outstanding-amount-which-is-displayed-at-total-liability-section-at-dash-board.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Vat e-Filing Page \"Total_Liability_03\" \"validate liability amount\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on Tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Pay button on Total Liability",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on radio button on particular bank",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Pay now buttton on payment of tax page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User navigate to selected bank page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Total_Liability_03",
      "offset": 30
    },
    {
      "val": "validate liability amount",
      "offset": 51
    }
  ],
  "location": "DV_2394_landing_screen.user_is_on_Vat_e_Filing_Page(String,String)"
});
formatter.result({
  "duration": 330293,
  "status": "passed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Tab()"
});
formatter.result({
  "duration": 5088088739,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca _ngcontent-c6\u003d\"\" class\u003d\"icon-container ng-tns-c6-4 ng-star-inserted\" ng-reflect-router-link\u003d\"vat-e-filing\" href\u003d\"/vat-e-filing\"\u003e...\u003c/a\u003e is not clickable at point (135, 240). Other element would receive the click: \u003cmodal-container class\u003d\"modal fade show\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u00271R-22\u0027, ip: \u0027172.16.3.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SRIJO~1.VAL\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53599}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 249a2bc7f39b073d1611f742e2ca46f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.drc.vat.appmanager.HelperBase.clickOn(HelperBase.java:105)\r\n\tat org.drc.vat.StepDefinitions.DV_2394_landing_screen.user_click_on_Tab(DV_2394_landing_screen.java:69)\r\n\tat ✽.And User click on Tab(features/13_3DV_2394_Total_Liability.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Pay_button_on_Total_Liability()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_radio_button_on_particular_bank()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_click_on_Pay_now_buttton_on_payment_of_tax_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DV_2394_landing_screen.user_navigate_to_selected_bank_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 748623471,
  "status": "passed"
});
});