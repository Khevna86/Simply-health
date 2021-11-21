package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class MyDashboardPage extends Utils{

    private By _Message = By.className("user-message__main");

    public void verifyWelcomeMessage(){

        //expected message
        String ExpectedMessage = "Welcome back, Rach!";
        //actual message
        String ActualMessage = getTextFromElement(_Message);
        //verification of actual result and expected result
        Assert.assertEquals(ActualMessage,ExpectedMessage,"Welcome back");
        System.out.println("Welcome back, Rach!");


    }
}
