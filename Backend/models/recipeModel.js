const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    title: String,
    type: String,
    image: String,
    category : String,
    discription: String,
    ingredients: {type: Array, default: []},
    user: {type : Types.ObjectId, ref: 'user'}
})
module.exports = model('recipies', myschema);

