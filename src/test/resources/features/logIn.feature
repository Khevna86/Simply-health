Feature: Log in functionality

  Background:
    Given User is on Home page

  @login

  Scenario Outline:As a customer, I want to log in to MoneySuperMarket website with valid credentials
    When User click on login
    And User type "<Email_Address>" and "<Password>"
    And Click on Keep me logged in and  click on login button
    Then User should be able to log in and User should get Welcome_Message

    Examples:
      | Email_Address         | Password   |
      |rachanakruti@gmail.com |Ontherun60$ |
