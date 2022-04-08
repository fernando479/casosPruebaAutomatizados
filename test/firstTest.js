const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const assert = require("assert");

const service = new chrome.ServiceBuilder('./chromedriver');


async function example(){
    const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
    // let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://tent74.netlify.app/#/app/ventas/nueva");

   

    async function test(){
        let todoText = await driver.findElement(By.className("info")).getText().then(function(value){
            return value;
        });
        assert.strictEqual(todoText,"$0");
        await driver.quit();
    }

    async function click(){
        const button = await driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div/div[2]/button[2]/span[2]/span"));
        button.click();
        setTimeout(test,3000);  
       
    }
    async function FinalizaVenta(){
        const elem = await driver.findElement(By.xpath("//span[contains(text(),'Finalizar venta')]"));
        elem.click();
        setTimeout(click,3000);  
        
    }
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/main/div[1]/div[1]/div[1]/form/label")).sendKeys(12345678910,Key.RETURN);
    setTimeout(FinalizaVenta,3000);

   



  

    
};
example();  


