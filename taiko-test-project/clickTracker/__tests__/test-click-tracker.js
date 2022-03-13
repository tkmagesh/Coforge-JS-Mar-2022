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
    it('Should have [count] as the default counter value', async () => {
        await openBrowser()
        await goto('http://localhost:8080/clickTracker.html')
        const result = await text('[count]').exists();
        expect(result).toBeTruthy()
        await closeBrowser();
    })
})