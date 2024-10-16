# How to Load Unpacked Extensions in Google Chrome

If you have developed or downloaded an unpacked extension (like **Google Cleaner**), you can load it into Google Chrome or other Chromium-based browsers manually. This guide explains how to load unpacked extensions into Chrome, which is especially useful for testing or running custom scripts.

### Steps to Load Unpacked Extensions

1. **Prepare the Extension Files**
   - Make sure your extension is in a folder that contains all the necessary files, such as:
     - `manifest.json` file
     - The script and any other resources (HTML, CSS, JS, etc.).

   Example folder structure:
   ```
   google-cleaner/
   ├── manifest.json
   ├── content.js
   └── (any other required files)
   ```

2. **Open Chrome Extensions Page**
   - Open Chrome, and in the address bar, type `chrome://extensions/` and press **Enter**.
   
   This will open the **Extensions** page, where you can manage all your installed and unpacked extensions.

3. **Enable Developer Mode**
   - In the top-right corner of the Extensions page, toggle on **Developer Mode**.
   
   Once enabled, you’ll see additional options like **Load unpacked**, **Pack extension**, and **Update**.

4. **Load the Unpacked Extension**
   - Click on the **Load unpacked** button.
   
   This will open a file picker dialog.

5. **Select the Extension Folder**
   - In the file picker, navigate to the folder where your unpacked extension (e.g., **Google Cleaner**) is stored.
   - Select the folder and click **Open** or **Select Folder**.

6. **Verify Extension is Loaded**
   - After selecting the folder, the extension should appear in the list of extensions, and you’ll see a confirmation that it has been loaded successfully.
   - Ensure that the extension is enabled (toggle should be blue).

7. **Test the Extension**
   - Open a new Google search page to see the changes made by the extension (e.g., ad removal).
   - You can return to the Extensions page to disable or remove the extension at any time.

### Removing the Extension
To remove the extension, go back to `chrome://extensions/`, find your unpacked extension, and click the **Remove** button.

