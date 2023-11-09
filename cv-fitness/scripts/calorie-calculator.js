<script>
  // Function to calculate daily estimated calories
  function calculateCalories() {
    // Get values from the form
    var age = parseInt($('#age').val());
    var weight = parseFloat($('#weight').val());
    var height = parseFloat($('#height').val());
    var activityLevel = $('#activity').val();

    // Perform the calculation using Harris-Benedict Formula
    var calculatedCalories = calculateDailyCalories(age, weight, height, activityLevel);

    // Check if the result is a valid number
    if (!isNaN(calculatedCalories)) {
      // Display the calculated calories
      $('#result').text('Daily Estimated Calories: ' + calculatedCalories.toFixed(2) + ' kcal');
    } else {
      // Display a custom error message
      $('#result').text('Error: Please enter valid values for calculation.');
    }
  }

  // Function to calculate BMR using Harris-Benedict Formula
  function calculateDailyCalories(age, weight, height, activityLevel) {
    // Perform Harris-Benedict Formula calculation
    var baseCalories = 10 * weight + 6.25 * height - 5 * age;
    var activityMultiplier = getActivityMultiplier(activityLevel);
    var calculatedCalories = baseCalories * activityMultiplier;

    return calculatedCalories;
  }

  // Function to get the activity level multiplier
  function getActivityMultiplier(activityLevel) {
    // Replace with your actual logic to determine the activity multiplier
    switch (activityLevel) {
      case 'sedentary':
        return 1.2;
      case 'light':
        return 1.375;
      case 'moderate':
        return 1.55;
      case 'active':
        return 1.725;
      case 'veryActive':
        return 1.9;
      default:
        return 1.2; // Default to sedentary if activity level is not recognized
    }
  }
</script>
