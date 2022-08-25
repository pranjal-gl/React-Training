const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.exlrc9x.mongodb.net/?retryWrites=true&w=majority').then((res)=>{
    console.log("DB Connected");
}).catch((err) => {
    console.log(res);
});
const userModel = mongoose.model("Users", {
    fname: String,
    phone: Number,
    address: String
})

module.exports=userModel;