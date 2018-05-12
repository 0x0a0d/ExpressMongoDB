module.exports = (req, res) => {
    res.locals.messages = req.flash();
    res.render('login/register');
};