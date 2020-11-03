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

(function() {
    "use strict";

    const regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    for (const query of document.querySelectorAll(".writing_view_box div")) {
        const children = query.children;

        for (let i = 0; i < children.length; i++) {
            const children2 = children[i].children;

            for (let j = 0; j < children2.length; j++) {
                if (children2[j].tagName === "A")
                    continue;

                const textSplit = children2[j].textContent.split(' ');

                for (const string of textSplit) {
                    const exec = regex.exec(string);

                    if (!exec)
                        continue;

                    const text = exec[0];

                    children2[j].innerHTML = children2[j].innerHTML.replace(text, `<a class="__hoverBox_aLink" href="${string}">${string}</a>`);
                }
            }
        }
    }
})();
