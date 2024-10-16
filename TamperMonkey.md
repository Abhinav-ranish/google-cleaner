## How to Set Up

To use this on Google Chrome-based browsers, you can follow these steps:

### 1. Install a User Script Manager
To run the Google Cleaner script on your browser, you will need to install a user script manager. This type of extension allows you to run custom JavaScript on specific websites.

Popular options include:
- **Tampermonkey** (recommended): Available for Chrome, Firefox, Microsoft Edge, and Safari.
    - [Download Tampermonkey](https://www.tampermonkey.net/)
- **Greasemonkey**: Available for Firefox.

### 2. Create a New Script
After installing the user script manager:
- Open the Tampermonkey (or similar) dashboard in your browser.
- Click the "Create New Script" button.
- Replace the placeholder code with the Google Cleaner script provided below.

### 3. Google Cleaner Script

```javascript
// ==UserScript==
// @name         Google Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove sponsored ads from Google search results
// @author       YourName
// @match        *://*.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

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
})();
```

### 4. Save and Activate
Once you've pasted the script into your new user script file:
- Click **Save**.
- The script will now be active whenever you load a Google search page.

### 5. Refresh Google Search
Reload any Google search result page, and the sponsored ads will be removed automatically.

## Future Enhancements
- Customize the script to target more ad elements if needed.
- Expand functionality to other search engines.

Enjoy your cleaner Google search experience!
