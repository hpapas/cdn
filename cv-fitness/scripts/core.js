function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}

callAll("https://cdn.jsdelivr.net/gh/willmyethewebsiteguy/beforeAfter@1/javascript.min.js");
callAll("https://cdn.jsdelivr.net/gh/willmyethewebsiteguy/tabs@4/tabs-javascript.min.js");
