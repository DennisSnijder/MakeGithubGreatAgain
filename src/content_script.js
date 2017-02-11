var element = document.getElementsByClassName("header-dark")[0];
if (element) {
    chrome.storage.sync.get(['enabled'], function (results) {
        if (results.enabled || results.enabled === null) {
            element.className = element.className.replace(/\header-dark\b/, '');
        }
    });
}
