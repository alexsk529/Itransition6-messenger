import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    msgs: [{}]
});

export default mongoose.model('User', schema);