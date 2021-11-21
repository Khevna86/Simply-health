package org.example;

import org.openqa.selenium.By;

public class LogInPage extends Utils{

     private By _email = By.id("msm-auth-email-0");
     private By _password = By.id("msm-auth-password-1");
     private By _keepMeLoggedIn = By.xpath("//div[text()=' Keep me logged in ']");
     private By _logInButton = By.xpath("//span[text()=' Log in ']");




    public void logInDetails(String Email_Address, String Password){

         //enter Email
         enterText(_email,Email_Address);

         //enter Password
         enterText(_password,Password);
     }

     public void logInButton(){

         //Click on keep me logged in
         clickOnElement(_keepMeLoggedIn);

         //click on log in button
         clickOnElement(_logInButton);
     }


}
