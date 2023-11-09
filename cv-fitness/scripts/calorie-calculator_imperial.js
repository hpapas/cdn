function calculateCalories() {
	var age = parseInt($('#age').val());
	var weight = parseFloat($('#weight').val());
	var height = parseFloat($('#height').val());
	var activityLevel = $('#activity').val();

	var calculatedCalories = calculateDailyCalories(age, weight, height, activityLevel);

	if (!isNaN(calculatedCalories)) {
		$('#result').text('Daily Estimated Calories: ' + calculatedCalories.toFixed(2) + ' kcal');
	} else {
		$('#result').text('Error: Please enter valid values for calculation.');
	}
}

function calculateDailyCalories(age, weight, height, activityLevel) {
	var baseCalories = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
	var activityMultiplier = getActivityMultiplier(activityLevel);
	var calculatedCalories = baseCalories * activityMultiplier;

	return calculatedCalories;
}

function getActivityMultiplier(activityLevel) {
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
			return 1.2;
	}
}

$(document).ready(function() {
	$('#calculate').on('click', function() {
		var value1 = $('#email').val();
		$('#email-yui_3_17_2_1_1699523189995_1516-field').val(value1);
		$('#email-yui_3_17_2_1_1699523189995_1516-field').submit();
	});
});
