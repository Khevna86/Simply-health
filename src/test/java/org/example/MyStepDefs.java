package org.example;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {

    //Declaration of Object
    LogInPage logInPage = new LogInPage();
    HomePage homePage = new HomePage();
    MyDashboardPage myDashboardPage = new MyDashboardPage();

    @Given("^User is on Home page$")
    public void userIsOnHomePage() {
        //verification of URL
        homePage.verifyCurrentUrl();
        homePage.clickOnAcceptAllButton();
    }


    @When("^User click on login$")
    public void user_click_on_login()  {
        //method to click on login button on homepage
        homePage.ClickOnLogInHomePage();
    }

    @When("^User type \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_type_and(String Email_Address , String Password)  {
        //Method to send login credentials
        logInPage.logInDetails(Email_Address, Password);

    }

    @And("^Click on Keep me logged in and  click on login button$")
    public void clickOnKeepMeLoggedInAndClickOnLoginButton() {
        //method to click on login button on login page
        logInPage.logInButton();
    }


    @Then("^User should be able to log in and User should get Welcome_Message$")
    public void userShouldBeAbleToLogInAndUserShouldGetWelcome_Message() {
        // method to verify welcome message
        myDashboardPage.verifyWelcomeMessage();

    }
}
