// document.addEventListener("DOMContentLoaded", function() {
//   var availability = "false"; // Change this to "false" as needed
//   var indicator = document.getElementById("availability-indicator");
    
//   indicator.setAttribute("data-availability", availability);
// });

document.addEventListener('DOMContentLoaded', () => {
  const indicator = document.getElementById('availability-indicator');
  
  // Update the availability based on your logic
  const isAvailable = true; // or false based on your condition
  indicator.setAttribute('data-availability', isAvailable ? 'true' : 'false');
});
