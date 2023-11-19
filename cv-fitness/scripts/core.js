var year = new Date().getFullYear();

jQuery(document).ready(function() {

  $('#block-yui_3_17_2_1_1697277071969_16680 p').html($('#block-yui_3_17_2_1_1697277071969_16680 p').html() .replace('[Year]', year));

});

var slideOut = {
    cartSide: "right", // Position, left or right
    animation: "slide", // Animation, slide or fade
    textCart: "Your Cart", // Custom Cart Text or HTML
    textButton: "Custom Checkout", // Custom Checkout Text
    showIfCartUpdated: true, // Show Cart when update true or false
    closeOutside: true, // Close cart on overlay click true or false
    textTop: "Top Text", // Custom Top Text
    textAboveButton: "Text above checkout", // Custom Bottom text
    emptyMessageText: "Custom empty message", // Empty Message text
    continueButtonText: "Custom Continue Button", // Continue Button text
};
