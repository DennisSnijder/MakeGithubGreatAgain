chrome.browserAction.onClicked.addListener(function (tab) {
    // icon was clicked
    chrome.storage.sync.get(['enabled'], function (results) {

        // store new swapped setting
        chrome.storage.sync.set({'enabled': !results.enabled});

        // refresh current page
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
        });
    })
});