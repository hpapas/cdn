// Function to update units in the form
function updateUnits(selectedUnit) {
    var weightUnit = $('#weightUnit');
    var heightUnit = $('#heightUnit');

    // Reset the form when the unit is changed
    resetForm();

    if (selectedUnit === 'imperial') {
        weightUnit.text('lbs');
        heightUnit.text('in');
    } else {
        weightUnit.text('kg');
        heightUnit.text('cm');
    }
}

// Function to reset the form
function resetForm() {
    // Reset values in the form to their default or empty values
    $('#age').val('');
    $('#weight').val('');
    $('#height').val('');
    $('#goal').val('lose'); // Set default goal
    $('#activity').val('sedentary'); // Set default activity level
    $('#result').text(''); // Clear the result display
}

// Function to calculate daily estimated calories
function calculateCalories() {
    // Get values from the form
    var age = parseInt($('#age').val());
    var weight = parseFloat($('#weight').val());
    var height = parseFloat($('#height').val());
    var activityLevel = $('#activity').val();
    var units = $('input[name="units"]:checked').val(); // Get selected units
    var goal = $('#goal').val(); // Get selected goal

    // Check if the email is provided
    if (!email.trim()) {
        // Display an error message and do not proceed with the submission
        $('#result').text('Error: Please enter your email address.');
        return;
    }

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
        $('#result').text('Daily Estimated Calories: ' + calculatedCalories.toFixed(2) + ' cal');
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

// Wait for the document to be ready
$(document).ready(function () {
    // Attach a change event listener to the "units" radio buttons
    $('input[name="units"]').on('change', function () {
        // Get the selected unit value
        var selectedUnit = $(this).val();

        // Update units and reset the form
        updateUnits(selectedUnit);
    });

    // Attach a change event listener to the "gender" dropdown
    $('#gender').on('change', function () {
        // Reset the form when the gender is changed
        resetForm();
    });

    // Attach a click event listener to the "Calculate" button
    $('#calculate').on('click', function () {
        // Get the value of the first email field
        var value1 = $('#email').val();

        // Automatically fill the second email field with the value of the first one
        $('#email-yui_3_17_2_1_1699523189995_1516-field').val(value1);

        // Trigger the form submission for the Squarespace newsletter block
        $('#email-yui_3_17_2_1_1699523189995_1516-field').submit();
    });
});
