function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}

callAll("https://cdn.jsdelivr.net/gh/willmyethewebsiteguy/overflowSlider@1/overflowSlider.min.js");
callAll("https://cdn.jsdelivr.net/gh/willmyethewebsiteguy/tabs@4/tabs-javascript.min.js");
callAll("https://cdn.jsdelivr.net/gh/willmyethewebsiteguy/splitSections@3/javascript.min.js");

  jQuery(document).ready(function() {
    if (window.location.href.indexOf("gallery") > -1) {
      jQuery(".header-nav-item--external").css({"display":"none"});
    }
  });
  
  jQuery(document).ready(function() {
    if (window.location.href.indexOf("terms-conditions") > -1) {
      jQuery(".header-nav-item--external").css({"display":"none"});
    }
  });
  
  jQuery(document).ready(function() {
    if (window.location.href.indexOf("book") > -1) {
      jQuery(".header-nav-item--external").css({"display":"none"});
    }
  });
