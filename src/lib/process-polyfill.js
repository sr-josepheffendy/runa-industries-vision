
// This script adds a polyfill for the process object in the browser environment
if (typeof window !== 'undefined' && !window.process) {
  window.process = {
    env: {
      NODE_ENV: 'development',
    }
  };
}
