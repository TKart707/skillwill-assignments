// Assignmnet 1
var validator = require('validator');

const email1 = 'test@test.com';
const email2 = 'abcDE123';
console.log(validator.isEmail(email1));
console.log(validator.isEmail(email2));
