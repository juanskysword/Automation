const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll( async () =>{
    driver.get('http://127.0.0.1:5500/movieList/index.html')

});

afterAll( async () =>{
    await driver.quit();
});


test('Delete notification', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    
    const searchTerm ='Bee Movie'
    await theInput.sendKeys(searchTerm)


    const theButton = await driver.findElement(By.css('button'))
    await theButton.click();
    await driver.sleep(4000)

    const remove = await driver.findElement(By.xpath('//li/button'))
    await remove.click();

    await driver.sleep(6000)

    const notifications = await driver.findElement(By.id("message"))
    // expect (notifications).toBeTruthy()
})

test('adding', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    
    const searchTerm ='Bee Movie'
    await theInput.sendKeys(searchTerm)


    const theButton = await driver.findElement(By.css('button'))
    await theButton.click();
    await driver.sleep(4000)

    const list = await driver.findElement(By.xpath('//ul/li'))
    expect (list).toBeTruthy()
})


test('Nothing showing', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    
    const searchTerm ='Bee Movie'
    await theInput.sendKeys(searchTerm)


    const theButton = await driver.findElement(By.css('button'))
    await theButton.click();
    await driver.sleep(4000)

    const remove = await driver.findElement(By.xpath('//li/button'))
    await remove.click();

    await driver.sleep(6000)

    const fieldArr = await driver.findElement(By.xpath('//ul/li'))
    expect (fieldArr).toBeFalsy
})

// test ('delete', async () => {
//     const notification = await driver.findElement(By.id("message"))
//     const x = await driver.findElement(By.id("e"))
//     const theInput = await driver.findElement(By.xpath('//input'))
//     await theInput.sendKeys(searchTerm)
//     const searchTerm ='Bee Movie'
//     const theButton = await driver.findElement(By.css('button'))
//     await theButton.click();



    

// }