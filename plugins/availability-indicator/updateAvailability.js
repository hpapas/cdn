<script>
  async function updateAvailability() {
    try {
      const response = await fetch('https://cdn.harrypapas.com/plugins/availability-indicator/availability.json');
      const data = await response.json();

      const availabilityIndicator = document.getElementById('availability-indicator');
      availabilityIndicator.setAttribute('data-availability', data.availability);

    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  }

  document.addEventListener("DOMContentLoaded", updateAvailability);
</script>
