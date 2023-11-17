var year = new Date().getFullYear();

jQuery(document).ready(function() {

  $('#block-a96f5105d48ffeb6c8fb p').html($('#block-a96f5105d48ffeb6c8fb p').html() .replace('[Year]', year));

});
