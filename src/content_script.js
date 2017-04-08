var headerBar;

function initOnce () {
    // check if element exists yet
    headerBar = document.querySelector('body > div > .header');
    if (headerBar) {
        // element exists, remove the event listeners so we don't run this twice
        document.removeEventListener('DOMNodeInserted', initOnce);
        document.removeEventListener('DOMContentLoaded', initOnce);

        // send a message to the background script to enable the page action
        chrome.runtime.sendMessage('enable_page_action', function () {});
    }
    setClasses();
}

// event listeners
document.addEventListener('DOMNodeInserted', initOnce);
document.addEventListener('DOMContentLoaded', initOnce);

// listen for messages from the background script to toggle
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message === 'toggle_style') {
        setClasses();
    }
});

function clearClasses () {
    headerBar.classList.remove('great-header');
    headerBar.classList.add('header-dark');
    headerBar.classList.remove('short-header');
    document.querySelector('body').classList.remove('great-again');
}

function setClasses () {
    chrome.storage.sync.get({
        enabled: true,
        originalHeader: true,
        shortHeader: true,
        originalColors: true,
    }, function (items) {
        console.log("[content_script.js] (items.enabled):", (items.enabled));
        clearClasses();
        if (items.enabled) {
            console.log("[content_script.js] items.originalHeader:", items.originalHeader);
            console.log("[content_script.js] items.shortHeader:", items.shortHeader);
            console.log("[content_script.js] items.originalColors:", items.originalColors);
            if (items.originalHeader && headerBar) {
                headerBar.classList.remove('header-dark');
                headerBar.classList.add('great-header');
            }
            if (items.shortHeader && headerBar) {
                headerBar.classList.add('short-header');
            }
            if (items.originalColors) {
                document.querySelector('body').classList.add('great-again');
            }
        }
    });
}
