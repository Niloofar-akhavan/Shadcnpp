// Utility functions for Shadcn

/**
 * Get the current date and time in UTC formatted as YYYY-MM-DD HH:MM:SS
 */
function getCurrentDateTimeUTC() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * Generate a random string of specified length
 * @param {number} length - Length of the string to generate
 * @returns {string} - Random string
 */
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

/**
 * Format a date to YYYY-MM-DD
 * @param {Date} date - Date object to format
 * @returns {string} - Formatted date
 */
function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Export functions
export { getCurrentDateTimeUTC, generateRandomString, formatDateToYYYYMMDD };