const storyService = require('../../services/stories/stories.service')

module.exports = {

    eddStory: (req, res) => {
        res.render('stories/add')
    },

    createStory: async (req, res) => {
        try {

            req.body.user = req.user.id;

            await storyService.create(req.body)

            res.redirect('/dashboard');
        } catch (e) {
            console.error(e);
            res.render('error/500')
        }
    },

    getStory: async (req, res) => {
        try {

            const stories = await storyService.find();

            res.render('stories/index', {
                stories
            });
        } catch (e) {
            console.error(e);
            res.render('error/500')
        }
    },

    getStoryById: async (req, res) => {
        try {

            let story = await storyService.findById(req.params.id)

            if (!story) {
                return res.render('error/404')
            }

            res.render('stories/show', {
                story
            })
        } catch (e) {
            console.error(e);
            res.render('error/404');
        }
    },

    editStory: async (req, res) => {
        try {
            const story = await storyService.findOne(req.params.id);

            if (!story) {
                return res.render('error/404');
            }

            if (story.user != req.user.id) {
                res.redirect('/stories')
            } else {
                res.render('stories/edit', {
                    story
                })
            }
        } catch (e) {
            console.error(e);
            res.render('error/500')
        }
    },

    editOneStory: async (req, res) => {
        try {
            let story = await storyService.findEditOneStory(req.params.id);

            if (!story) {
                return res.render('error/404')
            }

            if (story.user != req.user.id) {
                res.redirect('/stories')
            } else {
                story = await storyService.findOneAndUpdateStory(req.params.id, req.body);
                res.redirect('/dashboard');
            }
        } catch (e) {
            console.error(e);
            res.render('error/500')
        }
    },

    deleteStory: async (req, res) => {
        try {

            await storyService.delete(req.params.id);

            res.redirect('/dashboard')
        } catch (e) {
            console.error(e);
            res.render('error/500')
        }
    },

    getStoryByUser: async (req, res) => {
        try {

            const stories = await storyService.findStoryUser(req.params.userId);

            res.render('stories/index', {
                stories
            })
        } catch (e) {
            console.error(e);
            res.render('error/404')
        }
    }


}
