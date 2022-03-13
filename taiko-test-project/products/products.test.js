const { openBrowser, closeBrowser, goto, write, click, into, $, text, textBox, listItem } = require("taiko")

describe("Products", () => {

    beforeAll(async () => {
        await openBrowser()
    })

    afterAll(async() => {
        await closeBrowser()
    })

    beforeEach(async () => {
        await goto('http://localhost:8080/products.html')
    })

    it("Should display the added item in the list", async () => {
        
        await write('Marker', textBox());

        await click('Add Product');

        expect(await listItem('Marker').exists()).toBeTruthy();
    })

    it("Should remove the first item in the list", async () => {
        await click('Remove First');
        const penExists = await listItem(/Pen$/).exists()
        expect(penExists).toBeFalsy()
    })
})