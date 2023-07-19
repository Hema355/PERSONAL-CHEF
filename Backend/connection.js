const mongoose = require('mongoose');
const url=('mongodb+srv://Hema:rathour@cluster0.3ptbhma.mongodb.net/personalchef?retryWrites=true&w=majority')
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;