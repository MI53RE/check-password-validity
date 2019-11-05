const checkPasswordValidity = require('./check-password-validity');
const tests = [
  {
    description: 'Password which is not a string should produce an error',
    passwords: [
      [/abCD#123/, 'error'],
      [['abCD#123'], 'error'],
      [{}, 'error'],
      [null, 'error'],
      [true, 'error'],
      [false, 'error'],
      [12345678, 'error']
    ],
    minimumPasswordLength: 8,
    minimumRulesMatching: 4
  },
  {
    description: 'Password is 8 char long and should matches all 4 rules',
    passwords: [
      ["abCD#123", true],
      ["abCD0123", false],
      ["abcd0123", false],
      ["abcdefgh", false],
      ["aC#1", false]
    ],
    minimumPasswordLength: 8,
    minimumRulesMatching: 4
  },
  {
    description: 'Password is 8 char long and should matches at least 3 rules',
    passwords: [
      ["abCD#123", true],
      ["abCD0123", true],
      ["abcd0123", false],
      ["abcdefgh", false],
      ["aC#1", false]
    ],
    minimumPasswordLength: 8,
    minimumRulesMatching: 3
  },
  {
    description: 'Password is 8 char long and should matches at least 2 rules',
    passwords: [
      ["abCD#123", true],
      ["abCD0123", true],
      ["abcd0123", true],
      ["abcdefgh", false],
      ["aC#1", false]
    ],
    minimumPasswordLength: 8,
    minimumRulesMatching: 2
  },
  {
    description: 'Password is 8 char long and should matches at least 1 rules',
    passwords: [
      ["abCD#123", true],
      ["abCD0123", true],
      ["abcd0123", true],
      ["abcdefgh", true],
      ["aC#1", false]
    ],
    minimumPasswordLength: 8,
    minimumRulesMatching: 1
  }
];


const executeTests = (tests) => {
  const fgRed = '\x1b[31m%s';
  const fgGreen = '\x1b[32m%s';
  const fgBlue = '\x1b[34m%s';
  const fgCyan = '\x1b[36m%s';
  const reset = '\x1b[0m';
  const testsLength = tests.length;
  const result = {
    success: 0,
    fail: 0
  }
  for (let i = 0; i < testsLength; i++) {
    const currentTest = tests[i];
    console.log(`${fgCyan}${reset}`, currentTest.description);
    const passwordsLength = currentTest.passwords.length;
    for (let j = 0; j < passwordsLength; j++) {
      const currentPassword = currentTest.passwords[j];
      try {
        const isValid = checkPasswordValidity(currentPassword[0], currentTest.minimumPasswordLength, currentTest.minimumRulesMatching);
        const hasSucceed = isValid === currentPassword[1];
        console.log(
          `${fgCyan} ${fgBlue} ${fgCyan} ${fgBlue} ${fgCyan} ${hasSucceed ? fgGreen : fgRed} ${reset}`,
          `Is`, currentPassword[0], `valid ?`, isValid, `expected :`, currentPassword[1]
        );
        if (hasSucceed) {
          result.success++;
        } else {
          result.fail++;
        }
      } catch (error) {
        const hasSucceed = currentPassword[1] === 'error';
        console.log(
          `${fgCyan} ${fgBlue} ${fgCyan} ${hasSucceed ? fgGreen : fgRed} ${reset}`,
          `Is error expected for`, Array.isArray(currentPassword[0]) ?
            `[${currentPassword[0].toString()}]` : currentPassword[0], `?`,
          hasSucceed
        );
        if (hasSucceed) {
          result.success++;
        } else {
          result.fail++;
        }
      }
    }
  }
  return { result };
}

console.log(executeTests(tests));