package org.example;

import org.openqa.selenium.By;

public class HomePage extends Utils{

    private By _loginButton = By.xpath("//a[contains(@class,'cms-login cms-login--sign-in')]");
    private By _acceptAllButton = By.id("banner-accept");


    public void verifyCurrentUrl(){
        //expected url
        String url = "https://www.moneysupermarket.com/";
        //verify url
        assertCurrentUrl(url);
    }

    public void clickOnAcceptAllButton(){
        clickOnElement(_acceptAllButton);
    }


    public void ClickOnLogInHomePage(){

        //click on Login button
        clickOnElement(_loginButton);
    }
}
