
// This script adds a polyfill for the process object in the browser environment
// Must be loaded before any Next.js code executes

(function() {
  if (typeof window !== 'undefined') {
    // Only create the process object if it doesn't exist
    if (!window.process) {
      window.process = {
        env: {
          NODE_ENV: 'development',
        }
      };
    } else if (!window.process.env) {
      // Ensure env exists
      window.process.env = { NODE_ENV: 'development' };
    } else if (!window.process.env.NODE_ENV) {
      // Ensure NODE_ENV exists
      window.process.env.NODE_ENV = 'development';
    }

    // Add browser flag to help Next.js detect browser environment
    window.process.browser = true;
    
    console.log('Process polyfill loaded with values:', window.process);
  }
})();
