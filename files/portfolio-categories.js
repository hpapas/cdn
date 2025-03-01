document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is fully loaded.");

    // Loop through all portfolio items (grid-items)
    document.querySelectorAll("#gridThumbs .grid-item").forEach(item => {
        let link = item.querySelector("a"); // Find the first <a> tag inside the item

        if (link) {
            let url = link.href.toLowerCase(); // Get URL and convert to lowercase
            let category = "";
            console.log("URL for item:", url); // Log the URL of the item

            // Assign categories based on URL patterns
            if (url.includes("the-local-guys-business-show")) {
                category = "podcast";
            } else if (url.includes("/web-design")) {
                category = "web";
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

    // Function to filter portfolio items based on category
    function filterPortfolio(filterText) {
        console.log("Filtering for:", filterText);

        // Loop through each portfolio item and check its data-category
        document.querySelectorAll("#gridThumbs .grid-item").forEach(item => {
            let link = item.querySelector("a");
            let category = link ? link.getAttribute("data-category") : "";
            console.log("Item category:", category); // Log category of each item

            if (filterText === "all" || (category && category.includes(filterText))) {
                item.style.display = "block"; // Show matching items
                console.log("Showing item:", item);
            } else {
                item.style.display = "none"; // Hide non-matching items
                console.log("Hiding item:", item);
            }
        });
    }

    // Run the filterPortfolio function based on the URL hash
    function checkHash() {
        var hash = window.location.hash.substring(1); // Get the hash without the "#"
        if (hash) {
            filterPortfolio(hash); // Call the filtering function with the hash
        } else {
            filterPortfolio('all'); // Default filter is "all"
        }
    }

    // Run the checkHash function on page load
    checkHash();

    // Run on hashchange event (when the URL hash changes)
    window.addEventListener('hashchange', checkHash);
});
