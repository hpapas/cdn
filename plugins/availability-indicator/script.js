<script>

async function updateAvailability() {
    const response = await fetch('https://raw.githubusercontent.com/your-username/your-repo/main/availability.json');
    const data = await response.json();
    const availability = data.availability;

    const indicator = document.getElementById('availability-indicator');

    if (availability === 'true') {
        indicator.classList.add('available');
        indicator.classList.remove('unavailable');
    } else {
        indicator.classList.add('unavailable');
        indicator.classList.remove('available');
    }
}

updateAvailability();
  
</script>
