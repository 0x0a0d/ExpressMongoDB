const passport = require('../../middleware/passport');
let passportMiddleware = passport.authenticate('local', {
    successRedirect: '/user',
    // failureRedirect: '/login',
    failureFlash: true,
});

module.exports = [
    passportMiddleware
];