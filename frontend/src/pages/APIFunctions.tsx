// Checks if app is running locally or on Render and uses correct url accordingly
export const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://eufmd-targets.onrender.com/";
    