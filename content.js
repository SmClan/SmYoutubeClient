var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(script);

// Get the logo icon element
var logoIcon = document.getElementById('logo-icon');

// Replace the logo icon with custom text logo
if (logoIcon) {
  logoIcon.innerHTML = '<span class="logo-text">Sm Clan</span>';
}

// Add CSS to style the logo text
var style = document.createElement('style');
style.innerHTML = `
  .logo-text {
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #ff0000;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
document.head.appendChild(style);


// Select the element
const elementToHide = document.querySelector('ytd-rich-item-renderer ytd-ad-slot-renderer');

// Check if the element exists
if (elementToHide) {
  // Hide the element
  elementToHide.style.display = 'none';
  // Add text to confirm the element is hidden
  const confirmationText = document.createElement('p');
  confirmationText.textContent = 'تم اخفاء الاعلان بنجاح';
  confirmationText.style.cssText = 'color: green; font-size: 16px; font-weight: bold; margin-top: 10px;';
  elementToHide.parentElement.appendChild(confirmationText);
}


const adOverlaySlot = document.querySelector('.ytp-ad-overlay-slot');
if (adOverlaySlot) {
  adOverlaySlot.style.display = 'none';
}
