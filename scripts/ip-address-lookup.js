  window.addEventListener('load', function() {
  	fetch('https://api.ipify.org?format=json')
  		.then(response => response.json())
  		.then(data => displayIPAddress(data))
  		.catch(error => {
  			console.error(error);
  			displayIPAddress('Error fetching IP address.');
  		});
  });

  function displayIPAddress(data) {
  	const resultDiv = document.getElementById('result');
  	if (typeof data === 'object') {
  		resultDiv.innerText = `Your IP address is: ${data.ip}`;
  	} else {
  		resultDiv.innerText = data; // Display error message
  	}
  }
