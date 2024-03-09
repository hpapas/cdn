var year = new Date().getFullYear();

jQuery(document).ready(function() {
  
  if (window.location.href.indexOf("gallery") > -1) {
    jQuery(".header-nav-item--external").css({"display":"none"});
  }
  
  if (window.location.href.indexOf("terms-conditions") > -1) {
    jQuery(".header-nav-item--external").css({"display":"none"});
  }
  
  if (window.location.href.indexOf("book") > -1) {
    jQuery(".header-nav-item--external").css({"display":"none"});
  }

  if (window.location.href.indexOf("submit") > -1) {
    jQuery(".header-nav-item--external").css({"display":"none"});
  }

  $('#block-a96f5105d48ffeb6c8fb p').html($('#block-a96f5105d48ffeb6c8fb p').html() .replace('[Year]', year));

});
