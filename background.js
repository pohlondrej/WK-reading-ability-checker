chrome.browserAction.onClicked.addListener(function(tab) { chrome.tabs.executeScript( null, {file: 'main_script.js'}, null );});