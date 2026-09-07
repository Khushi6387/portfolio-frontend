/**
 * Validate an email address format.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

/**
 * Smooth-scroll to a section by id.
 * @param {string} id - element id without '#'
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Truncate a string to maxLength and append '…'.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export const truncate = (str, maxLength = 120) => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + '…';
};

/**
 * Format a date range string.
 * @param {string} start
 * @param {string} end
 * @returns {string}
 */
export const formatDateRange = (start, end = 'Present') => {
  return `${start} – ${end}`;
};
