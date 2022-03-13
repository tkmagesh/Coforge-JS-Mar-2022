const { openBrowser, closeBrowser, goto, write, click, into, $, text } = require("taiko")


describe('Calculator-0', () => {
    beforeAll(async () => {
        await openBrowser()
    })

    afterAll(async () => {
        await closeBrowser()
    })

    beforeEach(async () => {
        await goto('http://localhost:8080/calculator-0.html')
    })

    it("should display the result on addition", async() => {
        //arrange
        await write('100', into($('#txtNumber1')))        
        await write('200', into($('#txtNumber2')))

        //act
        await click('Add')

        //assert
        expect(text('300').exists()).toBeTruthy()
    })
})