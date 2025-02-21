export const VALIDATION = {
  PHONE: {
    PATTERN: /^[\d\s\-+()]{10,}$/,
    MAX_LENGTH: 10
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MAX_LENGTH: 25
  },
  NAME: {
    MAX_LENGTH: 30
  },
  OTP: {
    LENGTH: 6,
    VALID_CODE: '123456'
  }
}; 