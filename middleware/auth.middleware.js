module.exports = {
    isAuth: function (req, res, next) {

        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/')
        }
    },
    isGuest: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/dashboard');
        }
    }
}
