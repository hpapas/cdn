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

            // Recalculate calories when units are changed
            calculateCalories();
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

            // Convert calories back to the original unit if necessary
            if ($('#units').val() === 'imperial') {
                calculatedCalories /= 4.184; // Convert calories to kilocalories for imperial units
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
