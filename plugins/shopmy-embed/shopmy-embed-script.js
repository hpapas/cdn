// document.addEventListener("DOMContentLoaded", function() {
//     var shopmyDivs = document.querySelectorAll('[data-hp-shopmy-collectionid]');
    
//     shopmyDivs.forEach(function(shopmyDiv) {
//         var collectionId = shopmyDiv.getAttribute('data-hp-shopmy-collectionid');
//         var collectionTitle = shopmyDiv.getAttribute('data-hp-shopmy-title');
        
//         var embedCode = '<iframe title="' + collectionTitle + '" src="https://shopmy.us/collections/embed/' + collectionId + '?" style="width: 100%; min-height: 360px; border: none;"></iframe>';

//         // Replace the content of the div with the generated embed code
//         shopmyDiv.innerHTML = embedCode;
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var shopmyDivs = document.querySelectorAll('[data-hp-shopmy-collectionid]');
    
    shopmyDivs.forEach(function(shopmyDiv) {
        var collectionId = shopmyDiv.getAttribute('data-hp-shopmy-collectionid');
        var collectionTitle = shopmyDiv.getAttribute('data-hp-shopmy-title');
        var embedType = shopmyDiv.getAttribute('data-hp-shopmy-embed') || 'carousel'; // Default to 'carousel' if not specified
        
        var src, style;

        if (embedType === 'full') {
            src = 'https://shopmy.us/collections/collection/' + collectionId + '?noHeader=true';
            style = 'width: 100%; min-height: 1200px; border: none;';
        } else {
            src = 'https://shopmy.us/collections/embed/' + collectionId + '?';
            style = 'width: 100%; min-height: 360px; border: none;';
        }

        var embedCode = '<iframe title="' + collectionTitle + '" src="' + src + '" style="' + style + '"></iframe>';
        
        // Replace the content of the div with the generated embed code
        shopmyDiv.innerHTML = embedCode;
    });
});

