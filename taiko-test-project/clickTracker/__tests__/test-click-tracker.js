const { openBrowser, goto, text, click, below, closeBrowser } = require('taiko');

/* 
(async () => {
    try {
        await openBrowser();
        await goto('http://localhost:8080/clickTracker.html');
        await text('Click Tracker').exists();
        await text('[count]').exists();
        await click('Track');
        await text('1', below('Track')).exists();
    } catch (error) {
        console.log(error);
    } finally {
        await closeBrowser();
    }
})(); 
*/
describe('Click Tracker', () => {
    //beforeEach - will execute the given function BEFORE executing each of the 'it' functions
    beforeEach(async () => {
        await openBrowser()
        await goto('http://localhost:8080/clickTracker.html')
    })

    //afterEach - will execute the given function AFTER executing each of the 'it' functions
    afterEach(async () => {
        await closeBrowser()
    })

    it('Should have [count] as the default counter value', async () => {
        const result = await text('[count]').exists();
        expect(result).toBeTruthy()
    })

    it('Should display 1 after "Track" button click', async () => {
        await click('Track');
        const result = text('1', below('Track')).exists()
        expect(result).toBeTruthy()
    })
})