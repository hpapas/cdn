var year = new Date().getFullYear();

jQuery(document).ready(function() {

  $('#block-yui_3_17_2_1_1697277071969_16680 p').html($('#block-yui_3_17_2_1_1697277071969_16680 p').html() .replace('[Year]', year));

});

var slideOut = {
    cartSide: "right", // Position, left or right
    animation: "slide", // Animation, slide or fade
    textCart: "YOUR CART", // Custom Cart Text or HTML
    textButton: "CHECKOUT", // Custom Checkout Text
    showIfCartUpdated: true, // Show Cart when update true or false
    closeOutside: true, // Close cart on overlay click true or false
    textTop: "", // Custom Top Text
    textAboveButton: "", // Custom Bottom text
    emptyMessageText: "Your Cart Is Empty", // Empty Message text
    continueButtonText: "VISIT STORE", // Continue Button text
};

<div data-wm-plugin="subnav"
     data-position="top-center">
</div>
