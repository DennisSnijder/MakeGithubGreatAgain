// Saves options to chrome.storage.sync.
function save_options() {
  var enabled = document.getElementById('enabled').checked;
  var originalHeader = document.getElementById('original-header').checked;
  var shortHeader = document.getElementById('short-header').checked;
  var originalColors = document.getElementById('original-colors').checked;
  chrome.storage.sync.set({
    enabled: enabled,
    originalHeader: originalHeader,
    shortHeader: shortHeader,
    originalColors: originalColors,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    // Ask tabs to reflect the changes
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
        chrome.tabs.sendMessage(tab.id, 'toggle_style', function () {});
      });
    });
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    enabled: true,
    originalHeader: true,
    shortHeader: true,
    originalColors: true,
  }, function(items) {
    document.getElementById('enabled').checked = items.enabled;
    document.getElementById('original-header').checked = items.originalHeader;
    document.getElementById('short-header').checked = items.shortHeader;
    document.getElementById('original-colors').checked = items.originalColors;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
