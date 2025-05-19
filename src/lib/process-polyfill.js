
// This script adds a polyfill for the process object in the browser environment
if (typeof window !== 'undefined') {
  // Only create the process object if it doesn't exist
  if (!window.process) {
    window.process = {
      env: {
        NODE_ENV: 'development',
      }
    };
  }
  // Ensure NODE_ENV exists even if window.process was already defined
  else if (!window.process.env) {
    window.process.env = { NODE_ENV: 'development' };
  }
  else if (!window.process.env.NODE_ENV) {
    window.process.env.NODE_ENV = 'development';
  }

  console.log('Process polyfill loaded:', window.process);
}
