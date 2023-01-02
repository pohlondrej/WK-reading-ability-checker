document.addEventListener('DOMContentLoaded', async function() {

const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
await chrome.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    files: ['main_script.js'],
});
});