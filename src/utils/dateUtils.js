/**
 * Lightweight date utility functions to replace moment.js
 * Reduces bundle size significantly (moment.js is ~70KB, this is <1KB)
 */

/**
 * Parse date string in format "YYYY-MM-DD HH:mm:ss"
 * @param {string} dateString - Date string to parse
 * @returns {Date} - Parsed Date object
 */
export function parseDate(dateString) {
  const [datePart, timePart] = dateString.split(' ');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute, second] = timePart ? timePart.split(':').map(Number) : [0, 0, 0];
  
  return new Date(year, month - 1, day, hour, minute, second);
}

/**
 * Format date to "D" (day of month)
 * @param {Date} date - Date object
 * @returns {string} - Day of month (1-31)
 */
export function formatDay(date) {
  return date.getDate().toString();
}

/**
 * Format date to "MMM YYYY" (e.g., "Dec 2025")
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string
 */
export function formatMonthYear(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

/**
 * Check if date is before another date
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {boolean} - True if date1 is before date2
 */
export function isBefore(date1, date2) {
  return date1.getTime() < date2.getTime();
}

