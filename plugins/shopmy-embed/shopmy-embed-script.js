document.addEventListener("DOMContentLoaded", function() {
    var shopmyDivs = document.querySelectorAll('[data-hp-shopmy-collectionid]');
    
    shopmyDivs.forEach(function(shopmyDiv) {
        var collectionId = shopmyDiv.getAttribute('data-hp-shopmy-collectionid');
        var collectionTitle = shopmyDiv.getAttribute('data-hp-shopmy-title');
        var embedType = shopmyDiv.getAttribute('data-hp-shopmy-embed-type');
        
        // Debug output
        console.log("Processing DIV with collectionId:", collectionId);
        console.log("Embed Type:", embedType);

        if (!collectionId) {
            console.error("Missing collectionId attribute for:", shopmyDiv);
            return; // Skip this div
        }

        var src, style;

        if (embedType === 'collection') {
            src = 'https://shopmy.us/collections/public/' + collectionId + '?noHeader=true';
            style = 'width: 100%; min-height: 80vh; border: none;';
        } else if (embedType === 'carousel') {
            src = 'https://shopmy.us/collections/embed/' + collectionId + '?';
            style = 'width: 100%; min-height: 360px; border: none;';
        } else if (embedType) {
            console.warn("Unknown embed type");
            return; // Skip this div
        } else {
            console.warn("No embed type specified");
            return; // Skip this div
        }

        // Debug output
        console.log("Iframe SRC:", src);
        console.log("Iframe Style:", style);

        var embedCode = '<iframe title="' + collectionTitle + '" src="' + src + '" style="' + style + '"></iframe>';
        
        // Replace the content of the div with the generated embed code
        shopmyDiv.innerHTML = embedCode;
    });
});
