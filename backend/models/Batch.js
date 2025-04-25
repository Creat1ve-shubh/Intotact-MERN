const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    name: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Batch', batchSchema);
