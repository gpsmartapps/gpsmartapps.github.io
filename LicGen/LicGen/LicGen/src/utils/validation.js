// /src/utils/validation.js

export const isValidEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);  // Simple email regex

export const isValidPhone = (phone) =>
    /^[0-9]{11}$/.test(phone);  // Must be exactly 11 digits

export const isValidSystemId = (systemId) => !!systemId.trim();
