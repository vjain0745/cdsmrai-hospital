// create 
exports.create = async (model, body) => {
    return await model.create(body);
}

// find and filter
exports.find = async (model, filter = {}, projection = {}, pagination = {}, sort = {}) => {
    const promise1 = await model.find(filter, projection).sort(sort).skip(pagination.skip).limit(pagination.page_size).lean();
    const promise2 = await model.find(filter, projection).sort(sort).lean().count();
    return result = Promise.all([promise1, promise2])
}

exports.findOne = async (model, filter, projection = {}) => {
    return await model.findOne(filter, projection);
}

exports.countDocuments = async (model, filter) => {
    return await model.countDocuments(filter);
}

// updates
exports.findOneAndUpdate = async (model, filter, body) => {
    return await model.findOneAndUpdate(filter, body, { new: true });
}

exports.findOneAndUpsert = async (model, filter, body) => {
    return await model.findOneAndUpdate(filter, body, { new: true, upsert: true, runValidators: true, context: "query", setDefaultsOnInsert: true });
}

exports.updateMany = async (model, filter, body) => {
    return await model.updateMany(filter, body, { new: true });
}

// delete
exports.findOneAndDelete = async (model, filter) => {
    return await model.findOneAndDelete(filter);
}

exports.deleteMany = async (model, filter) => {
    return await model.deleteMany(filter)
}

// aggregation
exports.aggregate = async (model, query) => {
    return await model.aggregate(query)
}