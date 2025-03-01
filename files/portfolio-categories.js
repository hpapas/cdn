document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is fully loaded.");

    // Loop through all portfolio items (summary-item)
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

    // Filtering Functionality
    document.querySelectorAll(".portfolio-filter span").forEach(button => {
        button.addEventListener("click", function () {
            let filter = this.getAttribute("data-filter");
            console.log("Clicked filter:", filter); // Log which filter is clicked

            document.querySelectorAll("#gridThumbs").forEach(item => {
                let link = item.querySelector("a");
                let category = link ? link.getAttribute("data-category") : "";
                console.log("Item category:", category); // Log category of each item

                if (filter === "all" || (category && category.includes(filter))) {
                    item.style.display = "block";
                    console.log("Showing item:", item); // Log which item is shown
                } else {
                    item.style.display = "none";
                    console.log("Hiding item:", item); // Log which item is hidden
                }
            });
        });
    });
});
