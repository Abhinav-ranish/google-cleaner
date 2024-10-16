// Find all elements that contain the word "Sponsored"
const sponsoredElements = document.querySelectorAll('span');

// Loop through each element and check if it contains "Sponsored"
sponsoredElements.forEach(sponsored => {
    if (sponsored.textContent.includes("Sponsored")) {
        // Find the closest parent div with the class 'cu-container' or remove the next div
        const containerDiv = sponsored.closest('div.cu-container') || sponsored.closest('div');
        if (containerDiv) {
            containerDiv.remove();  // Completely removes the parent div
        }
    }
});
