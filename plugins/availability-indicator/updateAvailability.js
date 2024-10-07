<script>
  // Function to fetch availability from the GitHub JSON file
  async function updateAvailability() {
    try {
      // URL of your JSON file hosted on GitHub
      const response = await fetch('https://raw.githubusercontent.com/your-username/repository-name/branch-name/availability.json');
      const data = await response.json();

      // Select the availability-indicator div
      const availabilityIndicator = document.getElementById('availability-indicator');

      // Update the data-availability attribute based on the fetched data
      availabilityIndicator.setAttribute('data-availability', data.availability);

    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  }

  // Call the function on page load
  document.addEventListener("DOMContentLoaded", updateAvailability);
</script>
