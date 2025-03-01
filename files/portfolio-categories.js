document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is fully loaded.");

    // Loop through all items inside #gridThumbs and assign categories based on URL patterns
    document.querySelectorAll("#gridThumbs").forEach(item => {
        let link = item.querySelector("a"); // Find the first <a> tag inside the item

        if (link) {
            let url = link.href.toLowerCase(); // Get URL and convert to lowercase
            let category = "";
            console.log("URL for item:", url); // Log the URL of the item

            // Assign categories based on URL patterns
            if (url.includes("the-local-guys-business-show")) {
                category = "podcast";
            } else if (url.includes("/web-design")) {
                category = "web-design";
            } else if (url.includes("/branding")) {
                category = "branding";
            } else if (url.includes("/illustration")) {
                category = "illustration";
            } else if (url.includes("/graphic-design")) {
                category = "graphic-design";
            }

            console.log("Assigned category:", category); // Log the assigned category

            // Apply data-category to <a> tag if category is found
            if (category) {
                link.setAttribute("data-category", category);
                console.log(`Set data-category="${category}" on link:`, link); // Log when data-category is set
            }
        }
    });

    // Function to filter portfolio items based on hash in URL
    function filterPortfolio() {
        let hash = window.location.hash.substring(1); // Get the part of the URL after #
        console.log("Current hash:", hash); // Log the hash value
        
        // If there's no hash or hash is 'all', show all items
        if (!hash || hash === "all") {
            console.log("Showing all items.");
            document.querySelectorAll("#gridThumbs).forEach(item => {
                item.style.display = "block"; // Show all items
                console.log("Showing item:", item); // Log which item is shown
            });
        } else {
            // Filter items based on the hash value
            console.log(`Filtering items by category: ${hash}`);
            document.querySelectorAll("#gridThumbs").forEach(item => {
                let link = item.querySelector("a");
                let category = link ? link.getAttribute("data-category") : "";
                console.log("Item category:", category); // Log category of each item

                // Check if the category matches the hash and update display accordingly
                if (category && category === hash) {
                    item.style.display = "block"; // Show matching items
                    console.log("Showing item:", item); // Log which item is shown
                } else {
                    item.style.display = "none"; // Hide non-matching items
                    console.log("Hiding item:", item); // Log which item is hidden
                }
            });
        }
    }

    // Call filterPortfolio on page load based on the current URL hash
    filterPortfolio();

    // Listen for changes to the URL hash and update the portfolio display accordingly
    window.addEventListener("hashchange", function () {
        console.log("Hash changed. New hash:", window.location.hash); // Log when the hash changes
        filterPortfolio();
    });
});
