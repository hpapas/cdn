<!--- ANIMATED SCROLLING LOGO CAROUSEL --->
<script>
  document.addEventListener("DOMContentLoaded", function() {const scrollers = document.querySelectorAll('.user-items-list[data-space-below-section-title-value="92"]');scrollers.forEach((scroller) => {scroller.setAttribute("data-animated", true);if (scroller.querySelector('.list-item[data-is-card-enabled="true"]')) { scroller.closest('.content').classList.add('logo-gradient');}const scrollerInner = scroller.querySelector(".user-items-list-simple");const scrollerContent = Array.from(scrollerInner.children);scrollerContent.forEach((item) => {const duplicatedItem = item.cloneNode(true);duplicatedItem.setAttribute("aria-hidden", true);scrollerInner.appendChild(duplicatedItem);});const images = scroller.querySelectorAll('img');images.forEach((img)=>{const imgSrc=img.getAttribute('data-src');if(imgSrc){ img.parentElement.style.backgroundImage = `url('${imgSrc}')`;}});});});
</script>

<!--- HOME PORTFOLIO REDIRECT --->

<script>

  jQuery(document).ready(function() {
  
  if (window.location.href.indexOf("/home/web") > -1) {
      jQuery(location).attr('href','/web');
  }
  
  if (window.location.href.indexOf("/home/design") > -1) {
      jQuery(location).attr('href','/design');
  }
  
  if (window.location.href.indexOf("/home/media") > -1) {
      jQuery(location).attr('href','/media');
  }
  
  });
  
</script>
