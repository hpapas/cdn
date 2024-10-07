<script>
    function updateTime() {
        const options = {
            timeZone: 'Australia/Adelaide', // Change this to your time zone
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };

        const now = new Date();
        const formattedDate = now.toLocaleString('en-AU', options);
        document.getElementById('current-time').innerText = formattedDate;
    }

    updateTime(); // Initial call to display time immediately
    setInterval(updateTime, 1000); // Update time every second
</script>
