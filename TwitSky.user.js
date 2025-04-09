// ==UserScript==
// @name         (TwitSky) Twitter/X to Bluesky Redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects all Twitter/X.com links to Bluesky
// @icon         https://aqfad.me/TwitSky.png
// @author       AqFad
// @match        *://x.com/*
// @match        *://*.x.com/*
// @match        *://twitter.com/*
// @match        *://*.twitter.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Check if the current URL is a Twitter/X URL
    if (window.location.hostname.includes('x.com') || window.location.hostname.includes('twitter.com')) {
        // Redirect to Bluesky homepage
        window.location.href = 'https://bsky.app';
    }
})();
