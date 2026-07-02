window.FRESHLY_CONFIG = {
  VERSION: '3.8.7',

  /*
   * IMPORTANT:
   * Paste your CURRENT deployed Apps Script Web App URL here.
   * The old backend URL has been removed to prevent the mobile app from calling an outdated backend.
   *
   * Example:
   * BACKEND_URL: 'https://script.google.com/macros/s/AKfycbxxxx/exec',
   */
  BACKEND_URL: 'https://script.google.com/macros/s/AKfycbwH4VhFLBuq6Ylt_YHkYGz8DeLpS62qO9Y7nNG1owc7krkQssSYEUt2-xF5SZld3KfG/exec',

  /*
   * Optional quick override without editing files:
   * Open browser console and run:
   * localStorage.setItem('freshlyBackendUrl', 'YOUR_NEW_WEB_APP_URL');
   * location.reload();
   */
  BACKEND_URL_STORAGE_KEY: 'freshlyBackendUrl',

  // Live mode: do not silently show demo products when backend is missing or outdated.
  LIVE_MODE: true,
  PUBLIC_DATA_CACHE_SECONDS: 0,

  CURRENCY: '₹',
  DEFAULT_COUNTRY: 'India',
  DEMO_MODE_WHEN_BACKEND_EMPTY: false,
  DEFAULT_DISTRICT_ID: 'FLY-DST-000001',
  DEFAULT_PINCODE: '673571',

  // Use country code + number only. Do not use +, spaces, brackets or dashes here.
  WHATSAPP_NUMBER: '918921696649',
  WHATSAPP_DISPLAY_NUMBER: '+91 89216 96649',
  SUPPORT_PHONE: '+91 89216 96649'
};
