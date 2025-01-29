// Import the playwright module
// Define an asynchronous function to perform the test
  // Launch a new Chromium browser in non-headless mode so you can see the browser UI
  // Create a new browser context. This is an incognito browser context
  // Create a new page in the browser context
  // Navigate to the specified URL

  const playwright = require('playwright');
  (async () => {
    const browser = await playwright.chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:3000/');
    
    // Check if page loaded successfully
    if (page.url() === 'http://localhost:3000/') {
      console.log('Page loaded successfully');
    } else {
      console.log('Failed to load page');
    }

    // Check if the title is correct
    const title = await page.title();
    if (title === 'Album Viewer') {
      console.log('Title is correct');
    } else {
      console.log('Title is incorrect');
    }

    // Check if the button exists
    const button = await page.$('button.ui.button[onclick="parent.open(\'https://aka.ms/containerapps-discord\')"]');
    if (button) {
      console.log('Button exists');
    } else {
      console.log('Button does not exist');
    }
    // Click the button and wait for load state
    try {
      await Promise.all([
        page.waitForLoadState('networkidle'),
        page.click('button.ui.button[onclick="parent.open(\'https://aka.ms/containerapps-discord\')"]'),
      ]);
      console.log('Button clicked');
    } catch (error) {
      console.log('Failed to click button:', error);
    }
    // Check if navigation was successful
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('button.ui.button[onclick="parent.open(\'https://aka.ms/containerapps-discord\')"]'),
    ]);

    // Wait for the popup to load
    await popup.waitForLoadState('networkidle');
    
    if (popup.url() !== 'http://localhost:3000/') {
      console.log('Navigation successful');
    } else {
      console.log('Failed to navigate');
    }
    await browser.close();
  })();
  