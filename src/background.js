chrome.pageAction.onClicked.addListener(function (tab) {
    // icon was clicked
    chrome.storage.sync.get(['enabled'], function (results) {
        // store new swapped setting
        chrome.storage.sync.set({'enabled': !results.enabled});

        // Chrome doesn't have an easy way to broadcast a message to all
        // content scripts, so just broadcast the message to every tab
        // and rely on Chrome's manifest permission to restrict
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(function (tab) {
                chrome.tabs.sendMessage(tab.id, 'toggle_style', function () {});
            });
        });
    })
});

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message === 'enable_page_action') {
        chrome.pageAction.show(sender.tab.id);
    }
});
