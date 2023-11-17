var year = new Date().getFullYear();

jQuery(document).ready(function() {

  $('p').html($('p').html() .replace('[Y1ear]', year));

});
