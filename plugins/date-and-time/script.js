<script>
  document.addEventListener("DOMContentLoaded", function() {
    function updateTime(timeZone) {
      const options = {
        timeZone: timeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const now = new Date();
      const formattedDate = now.toLocaleString('en-AU', options);
      // Append the time zone to the formatted date
      const timeZoneDisplay = timeZone.replace('_', ' '); // Replace underscores with spaces for better readability
      document.getElementById('current-time').innerText = `${formattedDate} (${timeZoneDisplay})`;
    }
    // Fetch the time zone from the CDN URL
    fetch('https://cdn.harrypapas.com/plugins/date-and-time/timezone.json')
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
      .then(data => {
      updateTime(data.timeZone); // Call updateTime with the fetched time zone
      setInterval(() => updateTime(data.timeZone), 1000); // Update time every second
    })
      .catch(error => console.error('Error fetching time zone:', error));
  });
</script>
