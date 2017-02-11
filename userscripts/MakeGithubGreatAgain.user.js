// ==UserScript==
// @name         Make Github Great Again!
// @namespace    https://github.com/DennisSnijder/MakeGithubGreatAgain
// @version      0.1
// @description  Get your old Github back. Remove the new dark topbar! alt screenshot
// @author       DennisSnijder / cnBeining
// @match        https://github.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('.header-dark').classList.remove('header-dark');
})();
