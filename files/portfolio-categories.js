document.addEventListener("DOMContentLoaded", function () {
    // Loop through all portfolio items (summary-item)
    document.querySelectorAll("#gridThumbs").forEach(item => {
        let link = item.querySelector("a"); // Find the first <a> tag inside the item

        if (link) {
            let url = link.href.toLowerCase(); // Get URL and convert to lowercase
            let category = "";

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

            // Apply data-category to <a> tag if category is found
            if (category) {
                link.setAttribute("data-category", category);
            }
        }
    });

});
