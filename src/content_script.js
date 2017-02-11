var element = document.getElementsByClassName("header-dark")[0];
if (element) {
    // Default to removing the border
    element.className = element.className.replace(/\header-dark\b/, '');

    // check storage if we want it back
    chrome.storage.sync.get(['enabled'], function (results) {
        if (results.enabled || results.enabled === undefined) {
            element.className += " header-dark";
        }
    });
}
