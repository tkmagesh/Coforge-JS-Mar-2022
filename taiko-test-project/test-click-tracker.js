const { openBrowser, goto, text, click, below, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('http://localhost:8080/clickTracker.html');
        await text('Click Tracker').exists();
        await text('[count]').exists();
        await click('Track');
        await text('1', below('Track')).exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();