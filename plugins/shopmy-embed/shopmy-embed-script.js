document.addEventListener("DOMContentLoaded", function() {
    var shopmyDivs = document.querySelectorAll('[data-hp-shopmy-collectionid]');
    
    shopmyDivs.forEach(function(shopmyDiv) {
        var collectionId = shopmyDiv.getAttribute('data-hp-shopmy-collectionid');
        var collectionTitle = shopmyDiv.getAttribute('data-hp-shopmy-title');
        
        var embedCode = '<iframe title="' + collectionTitle + '" src="https://shopmy.us/collections/embed/' + collectionId + '?" style="width: 100%; min-height: 340px; border: none;"></iframe>';

        // Replace the content of the div with the generated embed code
        shopmyDiv.innerHTML = embedCode;
    });
});
