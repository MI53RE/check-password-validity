# check-password-validity

A simple password validity checker.

A password will be tested against its length plus 4 rules :

- password contains at least 1 numeric char
- password contains at least 1 lower alphabetic char
- password contains at least 1 upper alphabetic char
- password contains at least 1 non alphanumeric char

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
