# check-password-validity

A simple password validity checker.

A password will be tested against its length plus 4 rules :

- password contains at least 1 numeric char
- password contains at least 1 lower alphabetic char
- password contains at least 1 upper alphabetic char
- password contains at least 1 non alphanumeric char

What it takes as parameters :

```javascript
/**
 * @param {string} password the password to be tested
 * @param {number} minimumPasswordLength an integer being the minimum number of char the password must be (default is 8)
 * @param {number} minimumRulesMatching an integer being the minimum number of rules the password must matches to be valid (default is 3)
 * @returns {boolean}
 */
const checkPasswordValidity = (password, minimumPasswordLength, minimumRulesMatching) => {}
```

The function will return a boolean at the end of the operation or throw an error if unexpected type of argument is passed to it.

*example:*

```javascript
const checkPasswordValidity = require('check-password-validity');

const password = 'abcDEF123#';
const minimumPasswordLength = 8; // default value
const minimumRulesMatching = 3; // default value

if (checkPasswordValidity(password, minimumPasswordLength, minimumRulesMatching)) {
  console.log('the password is valid !');
} else {
  console.log('the password is not valid !');
}
```
