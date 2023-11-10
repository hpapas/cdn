// Function to calculate daily estimated calories
function calculateCalories() {
    // Get values from the form
    var age = parseInt($('#age').val());
    var weight = parseFloat($('#weight').val());
    var height = parseFloat($('#height').val());
    var activityLevel = $('#activity').val();
    var units = $('#units').val(); // Get selected units
    var goal = $('#goal').val(); // Get selected goal

    // Convert weight and height to metric or imperial if necessary
    if (units === 'imperial') {
        weight *= 0.453592; // Convert pounds to kilograms
        height *= 2.54; // Convert inches to centimeters
    }

    // Perform the calculation using Harris-Benedict Formula
    var calculatedCalories = calculateDailyCalories(age, weight, height, activityLevel, goal);

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
function calculateDailyCalories(age, weight, height, activityLevel, goal) {
    // Perform Harris-Benedict Formula calculation
    var baseCalories = 10 * weight + 6.25 * height - 5 * age;
    var activityMultiplier = getActivityMultiplier(activityLevel);
    var calculatedCalories = baseCalories * activityMultiplier;

    // Adjust calories based on the goal
    switch (goal) {
        case 'weightLoss':
            calculatedCalories -= 500; // Adjust for weight loss (example value)
            break;
        case 'muscleGain':
            calculatedCalories += 300; // Adjust for muscle gain (example value)
            break;
        // Add more cases for other goals if needed
    }

    return calculatedCalories;
}
