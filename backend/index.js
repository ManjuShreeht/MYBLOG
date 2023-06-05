const express=require('express')
const dotenv=require('dotenv').config()
const cors=require('cors')
const morgan=require('morgan')
const connectDb=require('./db/db.js')
const authRoute=require('./controller/authController.js')
const blogRoute=require('./controller/blogController.js')
const multer = require('multer')

connectDb()
const app=express();
app.use(cors())
app.use('/images', express.static('public/images'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))


app.use('/api/user',authRoute)
app.use('/api/blog',blogRoute)


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
})

const port=process.env.PORT ||7788;

app.listen(port,()=>{
    console.log('sever running on port '+port)
})
