<script>


<script>
  $(document).ready(function() {
    console.log('Document is ready');
    async function updateAvailability() {
      try {
        console.log('Fetching availability data...');
        const response = await fetch('https://cdn.hpapas.au/plugins/availability-indicator/availability.json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        
        const availability = data.availability;
        console.log('Availability:', availability);

        const indicator = $('#availability-indicator');
        if (availability === 'true') {
          console.log('Setting to Available Now');
          indicator.addClass('available').removeClass('unavailable');
        } else {
          console.log('Setting to Not Available');
          indicator.addClass('unavailable').removeClass('available');
        }
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    }

    updateAvailability();
  });
</script>


</script>
