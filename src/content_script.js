var hasReplaced = false;

function replaceHeader() {
    // check if we already replaced the header class
    if (hasReplaced === false) {

        // check if element exists yet
        var element = document.getElementsByClassName("header-dark")[0];
        if (element) {
            // element exists, store it so we don't run this twice
            hasReplaced = true;

            // Default to always removing the border
            element.className = element.className.replace(/\bheader-dark\b/, '');

            // check storage if we want it back
            chrome.storage.sync.get(['enabled'], function (results) {
                if (results.enabled || results.enabled === undefined) {
                    element.className += " header-dark";
                }
            });
        }
    }
}

// Dom event listeners
document.addEventListener('DOMNodeInserted', replaceHeader);
document.addEventListener("DOMContentLoaded", replaceHeader);
