# Google Cleaner
### Google Search Sponsored Ad Remover

This project, **Google Cleaner**, removes sponsored ads from Google search results by identifying elements containing the word "Sponsored" and eliminating them from the page. This script works by scanning the page for any elements that display "Sponsored" and removing the entire ad container to give you a cleaner, ad-free search experience.

Check out this video for inspiration behind the project: [Why Google Search Sucks Nowadays](https://www.youtube.com/watch?v=uSGVk2KVokQ).

## How it Works
The script looks for the word "Sponsored" in Google search results and immediately deletes the surrounding ad container when the page loads. This results in a more streamlined search experience, free of intrusive advertisements.

# How to Set Up Google Cleaner Chrome Extension

Follow these steps to set up the **Google Cleaner** Chrome extension using the files provided (manifest.json, icon.png, and content.js).

## Steps to Set Up

### 1. Download the Files

You have two options to download the extension files:

- **Option 1: Download ZIP**
    - Go to the [Google Cleaner GitHub repository](#) and download the project as a ZIP file.
    - Once downloaded, unzip the folder on your local machine.

- **Option 2: Clone the Repository**
    - Open your terminal and use `git clone` to clone the repository:
      ```bash
      git clone https://github.com/Abhinav-ranish/google-cleaner
      ```

### 2. Open Chrome Extensions Page

- In your Chrome browser, type `chrome://extensions/` in the address bar and press **Enter**.
- This will open the **Extensions** page.

### 3. Enable Developer Mode

- In the top-right corner of the Extensions page, toggle **Developer Mode** to **on**.
- This will reveal additional buttons for managing extensions.

### 4. Load the Unpacked Extension

- Click on the **Load unpacked** button.
- In the file dialog that opens, navigate to the folder where you unzipped the files or cloned the repository (the folder containing `manifest.json`, `icon.png`, and `content.js`).
- Select the folder and click **Open** or **Select Folder**.

### 5. Verify and Test

- After selecting the folder, the Google Cleaner extension should now be loaded and visible in your list of extensions.
- Ensure the extension is **enabled** (toggle should be blue).
- Open a new Google search page to test if the sponsored ads are being removed.


## Features
- Scans Google search result pages for "Sponsored" ads.
- Removes the ads and their containers instantly upon page load.
- Provides a cleaner, ad-free search interface.



## License
This project is open-source and free to use. Contributions are welcome.

--- 

### Feel free to contact me for any further queries or updates!
