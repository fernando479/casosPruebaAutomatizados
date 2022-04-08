const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const assert = require("assert");

const service = new chrome.ServiceBuilder('./chromedriver');


async function example(){
    const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
    await driver.get("https://tent74.netlify.app/#/app/productos/new");

    async function test(){
        let todoText = await driver.findElement(By.xpath("//*[@id='q-notify']/div/div[6]/div/div/div/div")).getText().then(function(value){
            return value;
        });
        assert.strictEqual(todoText,"Producto agregado");
        await driver.quit();
    }

    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[1]/label/div/div[1]/div/input")).sendKeys("Ron Madero");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[2]/div[1]/label/div/div[1]/div[1]/input")).sendKeys("60");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[2]/div[2]/label/div/div[1]/div/input")).sendKeys("5");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[3]/div[1]/label/div/div[1]/div[1]/input")).sendKeys("3590");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[3]/div[2]/label/div/div[1]/div[1]/input")).sendKeys("5490");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[4]/div[1]/label/div/div[1]/div/input")).sendKeys("Alcohol");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[4]/div[2]/label/div/div[1]/div/input")).sendKeys("Botella");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[5]/label/div/div[1]/div/input")).sendKeys("Ron madero 750");
    await driver.findElement(By.xpath("//*[@id='app']/div[2]/div/div/div/div/div/div/div/div/div/div[2]/main/div/form/div/div[6]/label/div/div[1]/div/input")).sendKeys("10987654321012");
    
    const boton = await driver.findElement(By.xpath("//span[contains(text(),'Agregar')]"));
    boton.click();
   
    setTimeout(test,3000);

};
example();  

