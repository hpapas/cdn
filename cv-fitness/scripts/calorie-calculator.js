// Function to update units in the form
function updateUnits(selectedUnit) {
    var weightUnit = $('#weightUnit');
    var heightUnit = $('#heightUnit');

    if (selectedUnit === 'imperial') {
        weightUnit.text('lbs');
        heightUnit.text('in');
    } else {
        weightUnit.text('kg');
        heightUnit.text('cm');
    }
}

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
        case 'lose':
            calculatedCalories -= 500; // Adjust for weight loss (example value)
            break;
        case 'maintain':
            // No adjustment for weight maintenance
            break;
        case 'gain':
            calculatedCalories += 300; // Adjust for weight gain (example value)
            break;
        // Add more cases for other goals if needed
    }

    return calculatedCalories;
}

// Wait for the document to be ready
$(document).ready(function () {
    // Attach a change event listener to the goal selector
    $('#units').on('change', function () {
        // Get the selected goal
        var selectedUnit = $(this).val();

        // Call the updateUnits function with the selected goal
        updateUnits(selectedUnit);
    });

    // Attach a click event listener to the "Calculate" button
    $('#calculate').on('click', function () {
        calculateCalories(); // Call the calculateCalories function
    });
});
