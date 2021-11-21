package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Utils extends BasePage{

    // Enter text
    public static void enterText(By by, String text) {
        driver.findElement(by).sendKeys(text);
    }

    // Click on element
    public static void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    //verification method
    public static void assertCurrentUrl(String url){
        Assert.assertTrue(driver.getCurrentUrl().equals(url));
    }

    //get text method
    public static String getTextFromElement(By by){
        return driver.findElement(by).getText();
    }
}
