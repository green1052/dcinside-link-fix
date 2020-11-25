// ==UserScript==
// @name		dcinside link fix
// @namespace	https://github.com/green1052
// @version		1.0.0
// @homepageURL	https://github.com/green1052/dcinside-link-fix
// @downloadURL https://raw.githubusercontent.com/green1052/dcinside-link-fix/main/dcinside-link-fix.user.js
// @author		green1052
// @description	디시인사이드 본문 내용에 링크가 있을 경우 a href로 바꿔줍니다.
// @include     *.dcinside.com/*
// @run-at		document-end
// ==/UserScript==

(function () {
    "use strict";

    const regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    document.querySelectorAll(".writing_view_box p").forEach(query => {
        if (!query.textContent)
            return;

        for (const string of query.textContent.split(' ')) {
            const exec = regex.exec(string);

            if (!exec)
                return;

            const text = exec[0];

            query.innerHTML = query.innerHTML.replace(text, `<a class="__hoverBox_aLink" href="${text}">${text}</a>`);
        }
    });
})();
