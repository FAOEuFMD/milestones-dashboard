// Checks if app is running locally or on Render and uses correct url accordingly
 
export const API_URL = window.location.hostname === "localhost" && window.location.port === "5173"
    ? "http://localhost:5000/api" // When running in Vite dev server
    : "/api"; // When served by Flask       