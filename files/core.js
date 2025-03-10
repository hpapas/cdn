<script>
$(document).ready(function () {
    var x1 = atob("SGFycnkgUGFwYXM="); // Decodes to "Harry Papas"
    var x2 = atob("aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbQ=="); // Decodes to "https://www.google.com"

    if ($("footer:contains('" + x1 + "')").length === 0) {
        window.location.href = x2;
    }
});
</script>
