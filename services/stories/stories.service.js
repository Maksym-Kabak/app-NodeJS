const Story = require('../../models/Story');

module.exports = {
    create: (data) => {
        return Story.create(data);
    },
    find: () => {
        return Story.find({ status: 'public' })
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean();
    },
    findById: (paramsId) => {
        return Story.findById(paramsId)
            .populate('user')
            .lean();
    },
    findOne: (paramsId) => {
        return Story.findOne({
            _id: paramsId
        }).lean();

    },
    findEditOneStory: (paramsId) => {
        return Story.findById(paramsId).lean();
    },
    findOneAndUpdateStory: (paramsId, data) => {
        return Story.findOneAndUpdate({ _id: paramsId }, data, {
            new: true,
            runValidators: true
        })
    },
    delete: (paramsId) => {
        return Story.remove({ _id: paramsId });
    },
    findStoryUser: (paramsId) => {
        return Story.find({
            user: paramsId,
            status: 'public'
        })
            .populate('user')
            .lean();
    }
}
