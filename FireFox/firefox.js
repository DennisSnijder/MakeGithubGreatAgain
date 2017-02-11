function replaceHeader() {
    var element = document.querySelector('.header-dark');
    if (element) element.classList.remove('header-dark');
}

// Dom event listeners
document.addEventListener('DOMNodeInserted', replaceHeader);
document.addEventListener('DOMContentLoaded', replaceHeader);
