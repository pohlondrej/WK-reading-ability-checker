chrome.action.onClicked.addListener(async function(tab) {
    await chrome.scripting.executeScript({
        target: {tabId: tab.id, allFrames: true},
        files: ['main_script.js'],
    });
});