const express = require("express")
const app = express() 
const cors = require("cors") 
const mongoose = require("mongoose")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://satyasai:satyasai@cluster0.ltoadtj.mongodb.net/?appName=Cluster0", {
    useNewUrlParser : true , 
    useUnifiedTopology : true 
}).then(() => {
    console.log("Mango DB Connected") 
}).catch(err => console.log("Mango Db Error : " , err))

const userShema = new mongoose.Schema({
    name : String ,
    email : String ,
    age : Number 
})

const User = mongoose.model("User" , userShema)

app.post("/users" , async (req , res) => {
    try {
        const {name , email , age} = req.body 
        const user = new User({name , email , age})
        await user.save();
        res.send("Data Saved Success Fully")
    } catch(e) {
        res.send("error")
    }
})

app.get("/users" , async (req , res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch(e) {
        res.send("Error")
    }
})

app.put("/user/:id", async (req , res) => {
    try {
        const {id} = req.params 
        const {name} = req.body 
        await User.findByIdAndUpdate(id , {name }, {new : true})
        res.send("Updated User")
    } catch (e) {
        res.send("error")
    }
})

app.delete("/user/:name", async (req , res) => {
    try {
        const {name} = req.params ;
        await User.findOneAndDelete({name});
        res.send("User Deleted SuccessFully") 

    } catch (e) {
        res.send("User Not Found")
    }
})

app.get("/", (req , res) => {
    res.send("Hello , Sai")
})

app.listen(3000 , () => {
    console.log("Server is running")
})