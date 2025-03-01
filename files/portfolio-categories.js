document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is fully loaded.");

    // Loop through all portfolio items inside #gridThumbs and assign categories based on URL patterns
    document.querySelectorAll("#gridThumbs").forEach(item => {
        let link = item.querySelector("a"); // Find the first <a> tag inside the item

        if (link) {
            let url = link.href.toLowerCase(); // Get URL and convert to lowercase
            let categories = []; // Create an array to store multiple categories
            console.log("URL for item:", url); // Log the URL of the item

            // Assign categories based on URL patterns
            if (url.includes("the-local-guys-business-show")) { categories.push("podcast", "video"); }
            if (url.includes("/web-design")) { categories.push("web-design"); }
            if (url.includes("/branding")) { categories.push("branding"); }
            if (url.includes("/illustration")) { categories.push("illustration"); }
            if (url.includes("/graphic-design")) { categories.push("graphic-design"); }

            console.log("Assigned categories:", categories); // Log the assigned categories

            // Apply data-category to <a> tag if categories are found
            if (categories.length > 0) {
                // Join the categories array into a single string separated by commas
                link.setAttribute("data-category", categories.join(","));
                console.log(`Set data-category="${categories.join(",")}" on link:`, link); // Log when data-category is set
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
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.display = "block"; // Show all items
                console.log("Showing item:", item); // Log which item is shown
            });
        } else {
            // Filter items based on the hash value
            console.log(`Filtering items by category: ${hash}`);
            document.querySelectorAll(".grid-item").forEach(item => {
                let link = item.querySelector("a");
                let categories = link ? link.getAttribute("data-category") : "";
                console.log("Item categories:", categories); // Log categories of each item

                // Check if the category matches the hash and update display accordingly
                if (categories && categories.split(',').includes(hash)) {
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
