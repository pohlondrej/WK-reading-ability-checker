document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript( null, {file: 'main_script.js'}, null );
});