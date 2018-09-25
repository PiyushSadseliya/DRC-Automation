$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Module",
  "description": "",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;",
  "rows": [
    {
      "cells": [
        "TestcaseID",
        "email",
        "password",
        "message"
      ],
      "line": 73,
      "id": "login-module;drc-tax-portal-with-invalid-data;;1"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_01",
        "",
        "Franky07*",
        "Email is required."
      ],
      "line": 75,
      "id": "login-module;drc-tax-portal-with-invalid-data;;2"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_02",
        "Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 76,
      "id": "login-module;drc-tax-portal-with-invalid-data;;3"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_03",
        "Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 77,
      "id": "login-module;drc-tax-portal-with-invalid-data;;4"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_04",
        "ranky@storiqax.com",
        "Franky07*",
        "Email is not verified."
      ],
      "line": 78,
      "id": "login-module;drc-tax-portal-with-invalid-data;;5"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_05",
        "frankystoriqax",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 79,
      "id": "login-module;drc-tax-portal-with-invalid-data;;6"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_06",
        "#@%^%#$@#$@#.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 80,
      "id": "login-module;drc-tax-portal-with-invalid-data;;7"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_07",
        "@dstoriqax.com",
        "Franky07",
        "Email is not valid."
      ],
      "line": 81,
      "id": "login-module;drc-tax-portal-with-invalid-data;;8"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_08",
        "Franky Mehta\u003cfranky@storiqax.com\u003e",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 82,
      "id": "login-module;drc-tax-portal-with-invalid-data;;9"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_09",
        "franky.storiqax.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 83,
      "id": "login-module;drc-tax-portal-with-invalid-data;;10"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_10",
        "franky@storiqax@storiqax.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 84,
      "id": "login-module;drc-tax-portal-with-invalid-data;;11"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_11",
        ".franky@storiqax.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 85,
      "id": "login-module;drc-tax-portal-with-invalid-data;;12"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_12",
        "franky.@storiqax.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 86,
      "id": "login-module;drc-tax-portal-with-invalid-data;;13"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_13",
        "franky..@storiqax.com",
        "Franky07*",
        "Email is not verified."
      ],
      "line": 87,
      "id": "login-module;drc-tax-portal-with-invalid-data;;14"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_14",
        "franky@storiqax.com(Franky Mehta)",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 88,
      "id": "login-module;drc-tax-portal-with-invalid-data;;15"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_15",
        "franky@storiqax",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 89,
      "id": "login-module;drc-tax-portal-with-invalid-data;;16"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_16",
        "franky@-storiqax.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 90,
      "id": "login-module;drc-tax-portal-with-invalid-data;;17"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_17",
        "franky@-storiqax.web",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 91,
      "id": "login-module;drc-tax-portal-with-invalid-data;;18"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_18",
        "franky@111.222.333.4444",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 92,
      "id": "login-module;drc-tax-portal-with-invalid-data;;19"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_19",
        "franky@storiqax..com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 93,
      "id": "login-module;drc-tax-portal-with-invalid-data;;20"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_20",
        "Q@.in",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 94,
      "id": "login-module;drc-tax-portal-with-invalid-data;;21"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_21",
        "a@s.in",
        "Franky07*",
        "Email is not verified."
      ],
      "line": 95,
      "id": "login-module;drc-tax-portal-with-invalid-data;;22"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_22",
        "sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com",
        "Franky07*",
        "Email is not valid."
      ],
      "line": 96,
      "id": "login-module;drc-tax-portal-with-invalid-data;;23"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_23",
        "franky@sfamo.com",
        "",
        ""
      ],
      "line": 97,
      "id": "login-module;drc-tax-portal-with-invalid-data;;24"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_24",
        "franky@sfamo.com",
        "AsaartGovernmentanitiativtowardovernanceDRCgovernmenthasbroughtdigitaltransformationbusirocessetoasignificantxtenthroughthexortalrojecthichrovidesntegratedlatformconductariousaxroceedingselectronicallythrough",
        "Invalid login attempt."
      ],
      "line": 98,
      "id": "login-module;drc-tax-portal-with-invalid-data;;25"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_25",
        "franky@sfamo.com",
        "A sa art Go vernmentaniti ativtoward overna nceDRCg overnmen thasbroughtdi gitaltransfor mationb usirocesse toasig nific antxtenthroug hthexortal rojecthic hrovide snt eg",
        "Invalid login attempt."
      ],
      "line": 99,
      "id": "login-module;drc-tax-portal-with-invalid-data;;26"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_26",
        "franky@sfamo.com",
        "frankyqw",
        "Invalid login attempt."
      ],
      "line": 100,
      "id": "login-module;drc-tax-portal-with-invalid-data;;27"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_27",
        "franky@sfamo.com",
        "frankyq",
        "Invalid login attempt."
      ],
      "line": 101,
      "id": "login-module;drc-tax-portal-with-invalid-data;;28"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_28",
        "franky@sfamo.com",
        "franky12345678912345",
        "Invalid login attempt."
      ],
      "line": 102,
      "id": "login-module;drc-tax-portal-with-invalid-data;;29"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_29",
        "franky@sfamo.com",
        "franky12345678912345q",
        "Invalid login attempt."
      ],
      "line": 103,
      "id": "login-module;drc-tax-portal-with-invalid-data;;30"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_30",
        "franky@sfamo.com",
        "franky@07^!a",
        "Invalid login attempt."
      ],
      "line": 104,
      "id": "login-module;drc-tax-portal-with-invalid-data;;31"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_31",
        "franky@sfamo.com",
        "Franky78945812",
        "Invalid login attempt."
      ],
      "line": 105,
      "id": "login-module;drc-tax-portal-with-invalid-data;;32"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_32",
        "franky@sfamo.com",
        "FRANKY07",
        "Invalid login attempt."
      ],
      "line": 106,
      "id": "login-module;drc-tax-portal-with-invalid-data;;33"
    },
    {
      "cells": [
        "Invalid_DRC_ATC_LoginTaxPortal_33",
        "",
        "",
        ""
      ],
      "line": 107,
      "id": "login-module;drc-tax-portal-with-invalid-data;;34"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8736100995,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is required.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 311383463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 21
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 6184537293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is required.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5176070844,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1574104400,
  "status": "passed"
});
formatter.before({
  "duration": 1484506204,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 168645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 197
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 2822896269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5168244268,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1694842212,
  "status": "passed"
});
formatter.before({
  "duration": 2300152220,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 177932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 211
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 3636116246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5171622048,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1649971990,
  "status": "passed"
});
formatter.before({
  "duration": 1877778603,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"ranky@storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 143714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ranky@storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 39
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1554212645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not verified.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5992016021,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1804723712,
  "status": "passed"
});
formatter.before({
  "duration": 2059259273,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"frankystoriqax\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 153491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "frankystoriqax",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 35
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1131265636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5188268494,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1674786213,
  "status": "passed"
});
formatter.before({
  "duration": 1918586690,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"#@%^%#$@#$@#.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 203840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#@%^%#$@#$@#.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1475441434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5209149142,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1562901998,
  "status": "passed"
});
formatter.before({
  "duration": 1747685658,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"@dstoriqax.com\" \"Franky07\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 177443,
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
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1464336308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5147916481,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1523046631,
  "status": "passed"
});
formatter.before({
  "duration": 1785455209,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"Franky Mehta\u003cfranky@storiqax.com\u003e\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 148602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Franky Mehta\u003cfranky@storiqax.com\u003e",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 54
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 2201201336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5204685192,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1580126234,
  "status": "passed"
});
formatter.before({
  "duration": 1753728024,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky.storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 166200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky.storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 40
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1486445373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5147937012,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1533461536,
  "status": "passed"
});
formatter.before({
  "duration": 1817657531,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@storiqax@storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 155447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax@storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 49
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1577373171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5135847392,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1542770230,
  "status": "passed"
});
formatter.before({
  "duration": 1793251966,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \".franky@storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 148602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".franky@storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 41
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1410930713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5391337630,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 1659901981,
  "status": "passed"
});
formatter.before({
  "duration": 1547903381,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky.@storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 153491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky.@storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 41
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1551058746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5557710677,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 1609605802,
  "status": "passed"
});
formatter.before({
  "duration": 1760136519,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky..@storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 2750618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky..@storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 42
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1582426645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not verified.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5496337234,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 1648717665,
  "status": "passed"
});
formatter.before({
  "duration": 2161893454,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@storiqax.com(Franky Mehta)\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 138826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax.com(Franky Mehta)",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 54
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 2156598501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5160292063,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1592366411,
  "status": "passed"
});
formatter.before({
  "duration": 1839840408,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@storiqax\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 151047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 36
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1436584737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5130281631,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 1639786345,
  "status": "passed"
});
formatter.before({
  "duration": 1837750682,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@-storiqax.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 475138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@-storiqax.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 41
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1639388441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5575683304,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 1633586577,
  "status": "passed"
});
formatter.before({
  "duration": 1810236679,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@-storiqax.web\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 177444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@-storiqax.web",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 41
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1287710158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5525466315,
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 1609080315,
  "status": "passed"
});
formatter.before({
  "duration": 1763299706,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@111.222.333.4444\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 586101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@111.222.333.4444",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 44
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1393467440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5184602796,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 1533440516,
  "status": "passed"
});
formatter.before({
  "duration": 1739099447,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;20",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@storiqax..com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 372974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@storiqax..com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 41
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1553974098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5146044281,
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 1595257811,
  "status": "passed"
});
formatter.before({
  "duration": 2262324011,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;21",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"Q@.in\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 156424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q@.in",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 26
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1706278762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5188352572,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 1558538257,
  "status": "passed"
});
formatter.before({
  "duration": 1662011260,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;22",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"a@s.in\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not verified.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 136382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a@s.in",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 27
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1283255985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not verified.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5692637122,
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 1622483407,
  "status": "passed"
});
formatter.before({
  "duration": 1535953565,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;23",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com\" \"Franky07*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Email is not valid.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 175488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com",
      "offset": 18
    },
    {
      "val": "Franky07*",
      "offset": 181
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 2566574539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Email is not valid.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5191061151,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 1554521582,
  "status": "passed"
});
formatter.before({
  "duration": 1802491248,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;24",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 174022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1040028411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5159013786,
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 1560449563,
  "status": "passed"
});
formatter.before({
  "duration": 1566969510,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;25",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"AsaartGovernmentanitiativtowardovernanceDRCgovernmenthasbroughtdigitaltransformationbusirocessetoasignificantxtenthroughthexortalrojecthichrovidesntegratedlatformconductariousaxroceedingselectronicallythrough\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 168645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "AsaartGovernmentanitiativtowardovernanceDRCgovernmenthasbroughtdigitaltransformationbusirocessetoasignificantxtenthroughthexortalrojecthichrovidesntegratedlatformconductariousaxroceedingselectronicallythrough",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 3107339120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5552417190,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 1652598936,
  "status": "passed"
});
formatter.before({
  "duration": 1763595934,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;26",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"A sa art Go vernmentaniti ativtoward overna nceDRCg overnmen thasbroughtdi gitaltransfor mationb usirocesse toasig nific antxtenthroug hthexortal rojecthic hrovide snt eg\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 146158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "A sa art Go vernmentaniti ativtoward overna nceDRCg overnmen thasbroughtdi gitaltransfor mationb usirocesse toasig nific antxtenthroug hthexortal rojecthic hrovide snt eg",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 2698989403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5759188688,
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 1994112592,
  "status": "passed"
});
formatter.before({
  "duration": 1787874892,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;27",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"frankyqw\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 176955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "frankyqw",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1731536348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5532736609,
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 1742430790,
  "status": "passed"
});
formatter.before({
  "duration": 1846054352,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;28",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"frankyq\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 163267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "frankyq",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1891919332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5457994293,
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 1751462320,
  "status": "passed"
});
formatter.before({
  "duration": 1901626907,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;29",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"franky12345678912345\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 201885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "franky12345678912345",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1699342824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5888957541,
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 1705732255,
  "status": "passed"
});
formatter.before({
  "duration": 1491284739,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;30",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"franky12345678912345q\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 169133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "franky12345678912345q",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1459284791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5731785649,
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 1749007930,
  "status": "passed"
});
formatter.before({
  "duration": 1213526569,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;31",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"franky@07^!a\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 154469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "franky@07^!a",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1277119277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5512761265,
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 1685046160,
  "status": "passed"
});
formatter.before({
  "duration": 1930562902,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;32",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"Franky78945812\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 148114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "Franky78945812",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1829022712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5643457420,
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 1638134116,
  "status": "passed"
});
formatter.before({
  "duration": 1821219110,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;33",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"franky@sfamo.com\" \"FRANKY07\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"Invalid login attempt.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 137360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "franky@sfamo.com",
      "offset": 18
    },
    {
      "val": "FRANKY07",
      "offset": 37
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 1604234104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "Invalid login attempt.",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5537582330,
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 1648737708,
  "status": "passed"
});
formatter.before({
  "duration": 1780673034,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "DRC Tax Portal with InValid Data",
  "description": "",
  "id": "login-module;drc-tax-portal-with-invalid-data;;34",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@Run_InValid_Login"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "User is on DRC Tax Portal",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "User Enter Data: \"\" \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Clicks on \"SignIn\" and checks Validation message \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_is_on_DRC_Tax_Portal()"
});
formatter.result({
  "duration": 144203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "Login.i_Enter_Data(String,String)"
});
formatter.result({
  "duration": 907990920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    },
    {
      "val": "",
      "offset": 55
    }
  ],
  "location": "Login.user_Clicks_on_Validation_message(String,String)"
});
formatter.result({
  "duration": 5137787051,
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 1553206643,
  "status": "passed"
});
});