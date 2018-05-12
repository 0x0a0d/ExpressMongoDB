const {User} = require('../../../model');

const createNewUser = async (req, res, next) => {
    const {username, password, re_password} = req.body;
    if (password !== re_password) {
        const e = new Error(`Password mismatch`);
        e.code = 400;
        return next(e);
    }
    else {
        try {
            await new User({username, password}).save();
        }
        catch (e) {
            if (e.code === 11000) {
                const _e = new Error(`User had registered before`);
                _e.code = 400;
                return next(_e);
            }
            else {
                return next(e);
            }
        }

        res.json({
            success: true,
            redirect: '/login',
            message: 'User created'
        });
    }
}

module.exports = [
    createNewUser
];

