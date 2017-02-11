function replaceHeader() {
    var element = document.getElementsByClassName("header-dark")[0];
    if (element) {
        // element exists, store it so we don't run this twice
        hasReplaced = true;

        // Default to always removing the border
        element.className = element.className.replace(/\header-dark\b/, '');
    }
}

// Dom event listeners
document.addEventListener('DOMNodeInserted', replaceHeader);
document.addEventListener("DOMContentLoaded", replaceHeader);
