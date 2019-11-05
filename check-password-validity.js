/**
 * @param {string} password the password to be tested
 * @param {number} minimumPasswordLength an integer being the minimum number of char the password must be (default is 8)
 * @param {number} minimumRulesMatching an integer being the minimum number of rules the password must matches to be valid (default is 3)
 * @returns {boolean}
 */
const checkPasswordValidity = (password, minimumPasswordLength, minimumRulesMatching) => {
  minimumPasswordLength = minimumPasswordLength || 8;
  minimumRulesMatching = minimumRulesMatching || 3;
  try {
    if (typeof password !== 'string') {
      throw new Error(`Password must be a string, ${typeof password} provided instead`)
    }
    if (!isNaN(minimumPasswordLength) && minimumPasswordLength !== parseInt(minimumPasswordLength, 10)) {
      throw new Error(`MinimumPasswordLength must be a integer, ${typeof minimumPasswordLength} provided instead`)
    }
    if (!isNaN(minimumRulesMatching) && minimumRulesMatching !== parseInt(minimumRulesMatching, 10)) {
      throw new Error(`MinimumRulesMatching must be a integer, ${typeof minimumRulesMatching} provided instead`)
    }
    const REGEX_PASSWORD_RULES = [
      /[0-9]+/, // valid if string containing at least 1 numeric char
      /[a-z]+/, // valid if string containing at least 1 lower alphabetic char
      /[A-Z]+/, // valid if string containing at least 1 upper alphabetic char
      /[\W_]+/ // valid if string containing at least 1 non alphanumeric char
    ];
    if (password.split('').length >= minimumPasswordLength) {
      return REGEX_PASSWORD_RULES.filter(regex => regex.test(password)).length >= minimumRulesMatching;
    }
    return false;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
return module.exports = checkPasswordValidity;