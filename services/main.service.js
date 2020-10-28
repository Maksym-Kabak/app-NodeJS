const Story = require('../models/Story');

module.exports = {
    find: (id) => {
        return Story.find({ user: id }).lean();
    }
}
