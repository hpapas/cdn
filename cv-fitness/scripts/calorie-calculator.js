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
    $('#goal').val('maintain'); // Set default goal
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
