!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){idInterval=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(idInterval)}))}();
//# sourceMappingURL=01-color-switcher.e9e84eef.js.map
