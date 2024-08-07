import {chromium, firefox, test} from "@playwright/test";
test ('Test to launch the browser', async () => {
   
    //Create a browser instance
    const browser=await chromium.launch({headless: false, channel: "msedge"});

    //Create the browser context
    const browsercontext = await browser.newContext();

    //Create a new page
    const page = await browsercontext.newPage();

    //Load the new URL

    await page.goto("https://testleaf-2d-dev-ed.develop.my.salesforce.com/"); 
    //get the url of the page
    const url = page.url();
    console.log(`The Url of the page is ${url}`);

    await page.waitForTimeout(5000);

    //Get the title of the page
    const title = await page.title();

    //console.log('The title of the page is ${await page.title()}');
    console.log(`The Title of the page is ${title}`);

     //Enter username
     await page.locator("#username").fill("PriyankaSiva@TestLeaf.com");
    
     //Enter password
     await page.locator("#password").fill("Priya@1993");
 
     
     //Click Login
     await page.click("#Login"); 
    
     await page.waitForTimeout(5000);
    //graceelyfully clearimg the resource
   await page.close();

    //close the browser context
    await browsercontext.close();

})
