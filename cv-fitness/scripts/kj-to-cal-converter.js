<script>
    $( document ).ready(function() {
    function convert(source) {
      const kJInput = document.getElementById('kJ');
      const calInput = document.getElementById('cal');
      const resultDiv = document.getElementById('result');

      const kJValue = parseFloat(kJInput.value);
      const calValue = parseFloat(calInput.value);

      if (source === 'kJ' && !isNaN(kJValue)) {
        // Convert kJ to cal (1 kJ ≈ 0.239 kcal)
        const convertedValue = kJValue * 0.239;
        calInput.value = convertedValue.toFixed(2);
        resultDiv.innerHTML = '';
      } else if (source === 'cal' && !isNaN(calValue)) {
        // Convert cal to kJ (1 kcal ≈ 4.184 kJ)
        const convertedValue = calValue / 4.184;
        kJInput.value = convertedValue.toFixed(2);
        resultDiv.innerHTML = '';
      } else {
        // Handle invalid input
        resultDiv.innerHTML = 'Please enter a valid number.';
      }
    }
        });
  </script>
