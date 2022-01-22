import { App } from "./components/app.js";
if (!("scrollBehavior" in document.documentElement.style)) {
    import("./polyfill/smooth-scroll.js");
}
ReactDOM.render(React.createElement(App), document.querySelector(".app-container"), () => {
    document.querySelector(".page-loading").remove();
    if (navigator.standalone || window.matchMedia("(display-mode: standalone)").matches) {
        document.addEventListener("click", (ev) => {
            const href = ev.target.getAttribute("href");
            if (href === null || href === void 0 ? void 0 : href.startsWith("#")) {
                ev.preventDefault();
                location.replace(href);
            }
        });
    }
    window.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    });
    window.addEventListener("drop", (ev) => {
        ev.preventDefault();
    });
});
//# sourceMappingURL=index.js.map