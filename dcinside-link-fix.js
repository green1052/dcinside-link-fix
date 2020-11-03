// ==UserScript==
// @name		dcinside link fix
// @namespace	https://github.com/green1052
// @version		1.0.0
// @homepageURL	https://github.com/green1052/dcinside-link-fix
// @downloadURL https://raw.githubusercontent.com/green1052/dcinside-link-fix/main/dcinside-link-fix.js
// @author		green1052
// @description	디시인사이드 본문 내용에 링크가 있을 경우 a href로 바꿔줍니다.
// @include     *.dcinside.com/*
// @run-at		document-end
// ==/UserScript==

(function () {
    "use strict";

    const regex = /(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?/;

    document.querySelectorAll(".writing_view_box > div > div").forEach(query => {
        const text = regex.exec(query.textContent)[0];
        query.innerHTML = query.innerHTML.replace(text, `<a href="${text}" target="_blank">${text}</a>`)
    });

    document.querySelectorAll(".writing_view_box > div > p").forEach(query => {
        const text = regex.exec(query.textContent)[0];
        query.innerHTML = query.innerHTML.replace(text, `<a href="${text}" target="_blank">${text}</a>`)
    });
})();
