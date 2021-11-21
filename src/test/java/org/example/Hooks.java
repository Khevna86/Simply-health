package org.example;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utils{

    //create object for browser selector class
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void OpenBrowser() {
        //open browser
        browserSelector.open_Browser();
        //open URL
        driver.get("https://www.moneysupermarket.com/");
    }

    @After
    public void closeBrowser() {
        //close browser
        driver.quit();
    }
}
