const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../model');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id, done));

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    },
    (username, password, done) => {
        User.findOne({username}, (err, user) => {
            if (err) return done(err);
            if (user == null || ! user.validPassword(password)) {
                return done(null, false, {
                    message: 'Invalid login'
                })
            }
            return done(null, user);
        })
    }
));

module.exports = passport;