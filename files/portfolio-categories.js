document.addEventListener("DOMContentLoaded", function () {
    // Assign categories based on the portfolio item URL
    document.querySelectorAll(".grid-item).forEach(item => {
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

            // Apply category to data-category attribute
            if (category) {
                item.setAttribute("data-category", category);
            }
        }
    });

    // Filtering Functionality
    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", function () {
            let filter = this.getAttribute("data-filter");

            document.querySelectorAll(".summary-item").forEach(item => {
                let category = item.getAttribute("data-category");

                if (filter === "all" || (category && category.includes(filter))) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
