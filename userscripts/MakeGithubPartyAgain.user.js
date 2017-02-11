// ==UserScript==
// @name         Make Github Party Again!
// @namespace    https://github.com/DennisSnijder/MakeGithubGreatAgain
// @version      0.1
// @description  Get your old Github back. Remove the new dark topbar! Party hard!
// @author       DennisSnijder / cnBeining
// @match        https://github.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

var $header = $("div.header");
$(document).mousemove(function(e) {
  var $pageX = parseInt((e.pageX / $(document).width()) * 360, 10);
  var $pageY = parseInt((e.pageY / $(document).height()) * 100, 10);
  var $pageY = (25 + $pageY / 4);
  $header.css("background-color", "hsl(" + $pageX + ",100%," + $pageY + "%)");
  $("body").css("color", "hsl(" + $pageX + ",100%," + $pageY + "%)");
});
