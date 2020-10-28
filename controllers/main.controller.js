const mainService = require('../services/main.service');


module.exports = {
    login: (req, res) => {
        res.render('login', {
            layout: 'login'
        })
    },
    dashboard: async (req, res) => {
        try {
            const stories = await mainService.find(req.user.id );
            res.render('dashboard', {
                name: req.user.firstName,
                stories
            })
        } catch (e) {
            console.error(e);
            res.render('error/500')
        }


    }
}
