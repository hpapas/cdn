document.addEventListener("DOMContentLoaded", function () {
    //console.log("Document is fully loaded.");

    // Loop through all <a> elements inside #gridThumbs and assign categories based on URL patterns
    document.querySelectorAll("#gridThumbs a.grid-item").forEach(item => {
        let url = item.href.toLowerCase(); // Get URL and convert to lowercase
        let categories = []; // Create an array to store multiple categories
        //console.log("URL for item:", url); // Log the URL of the item

        // Assign categories based on URL patterns
        
        if (url.includes("the-local-guys-2025-product-review-awards-campaign")) { categories.push("video"); }
        
        if (url.includes("the-local-guys-business-show")) { categories.push("podcast", "video"); }
        if (url.includes("flambouro-philanthropic-society-squarespace-rebuild")) { categories.push("web"); }
        if (url.includes("studio-omnia")) { categories.push("web"); }
        if (url.includes("hair-by-rosy-logo-stationery")) { categories.push("design"); }
        
        if (url.includes("ortc-clothing-co-email-facebook-ad-design-concept")) { categories.push("design"); }
        if (url.includes("goldpatch-collection-logo")) { categories.push("design"); }
        if (url.includes("amazon-prime-video-tv-app-concept")) { categories.push("design"); }
        if (url.includes("smart-kettle-app-concept")) { categories.push("design"); }
        
        if (url.includes("logo-agency-portfolio")) { categories.push("design"); }
        if (url.includes("web-agency-portfolio")) { categories.push("web"); }
        if (url.includes("flambouro-philanthropic-society") && !url.includes("squarespace-rebuild")) { categories.push("web"); }
        if (url.includes("disability-recreation-sports-sa-wordpress-rebuild")) { categories.push("web"); }
        
        if (url.includes("foxden-bb")) { categories.push("web"); }
        if (url.includes("drssa-bill-buster-lottery-flyer-poster")) { categories.push("design"); }
        if (url.includes("drssa-wheelchair-footy-promo-video")) { categories.push("video"); }
        if (url.includes("drssa-donation-emails")) { categories.push("design"); }

        //console.log("Assigned categories:", categories); // Log the assigned categories

        // Apply data-category to <a> tag if categories are found
        if (categories.length > 0) {
            // Join the categories array into a single string separated by commas
            item.setAttribute("data-category", categories.join(","));
            //console.log(`Set data-category="${categories.join(",")}" on link:`, item); // Log when data-category is set
        }
    });
    
    // Check if any item is missing the data-category attribut
    document.querySelectorAll("#gridThumbs a.grid-item").forEach(item => {
        if (!item.hasAttribute("data-category")) {
            //console.log("Item without data-category:", item);
        }
    });

    // Function to filter portfolio items based on hash in URL
    function filterPortfolio() {
        let hash = window.location.hash.substring(1); // Get the part of the URL after #
        //console.log("Current hash:", hash); // Log the hash value
        
        // If there's no hash or hash is 'all', show all items
        if (!hash || hash === "all") {
            //console.log("Showing all items.");
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.display = "block"; // Show all items
                //console.log("Showing item:", item); // Log which item is shown
            });
        } else {
            // Filter items based on the hash value
            //console.log(`Filtering items by category: ${hash}`);
            document.querySelectorAll(".grid-item").forEach(item => {
                let categories = item.getAttribute("data-category");
                //console.log("Item categories:", categories); // Log categories of each item

                // Check if the category matches the hash and update display accordingly
                if (categories && categories.split(',').includes(hash)) {
                    item.style.display = "block"; // Show matching items
                    //console.log("Showing item:", item); // Log which item is shown
                } else {
                    item.style.display = "none"; // Hide non-matching items
                    //console.log("Hiding item:", item); // Log which item is hidden
                }
            });
        }
    }

    // Call filterPortfolio on page load based on the current URL hash
    filterPortfolio();

    // Listen for changes to the URL hash and update the portfolio display accordingly
    window.addEventListener("hashchange", function () {
        //console.log("Hash changed. New hash:", window.location.hash); // Log when the hash changes
        filterPortfolio();
    });
});
