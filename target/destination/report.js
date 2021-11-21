$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/logIn.feature");
formatter.feature({
  "line": 1,
  "name": "Log in functionality",
  "description": "",
  "id": "log-in-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "As a customer, I want to log in to MoneySuperMarket website with valid credentials",
  "description": "",
  "id": "log-in-functionality;as-a-customer,-i-want-to-log-in-to-moneysupermarket-website-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User type \"\u003cEmail_Address\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Keep me logged in and  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to log in and User should get Welcome_Message",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "log-in-functionality;as-a-customer,-i-want-to-log-in-to-moneysupermarket-website-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Email_Address",
        "Password"
      ],
      "line": 15,
      "id": "log-in-functionality;as-a-customer,-i-want-to-log-in-to-moneysupermarket-website-with-valid-credentials;;1"
    },
    {
      "cells": [
        "rachanakruti@gmail.com",
        "Ontherun60$"
      ],
      "line": 16,
      "id": "log-in-functionality;as-a-customer,-i-want-to-log-in-to-moneysupermarket-website-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15400490100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 670167600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a customer, I want to log in to MoneySuperMarket website with valid credentials",
  "description": "",
  "id": "log-in-functionality;as-a-customer,-i-want-to-log-in-to-moneysupermarket-website-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User type \"rachanakruti@gmail.com\" and \"Ontherun60$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Keep me logged in and  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to log in and User should get Welcome_Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login()"
});
formatter.result({
  "duration": 1917634200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rachanakruti@gmail.com",
      "offset": 11
    },
    {
      "val": "Ontherun60$",
      "offset": 40
    }
  ],
  "location": "MyStepDefs.user_type_and(String,String)"
});
formatter.result({
  "duration": 783377900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.clickOnKeepMeLoggedInAndClickOnLoginButton()"
});
formatter.result({
  "duration": 424594400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userShouldBeAbleToLogInAndUserShouldGetWelcome_Message()"
});
formatter.result({
  "duration": 6434977300,
  "status": "passed"
});
formatter.after({
  "duration": 8089835800,
  "status": "passed"
});
});