const express = require('express')

const cors = require('cors')


const dataService=require('./services/dataService')

// const cors = require('cors')

const jwt=require('jsonwebtoken')

const app = express()

app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

const appMiddleware=(req,res,next)=>{
    console.log("Application specific middleware");
    next();
}
app.use(appMiddleware)

const jwtMiddleware=(req,res,next)=>{
    try{
        console.log("Router specific middleware");
    
        const token=req.headers['x-access-token']
        const data=jwt.verify(token,'superkey5037')
        console.log(data);
        next();
    }
    catch{
        res.status(422).json({
            statusCode:422,
            status:false,
            message:"please login first"
        })
    }
        
    }
    





//register rqst
app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.username,req.body.mail,req.body.number,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//login
app.post('/login',(req,res)=>{
    console.log(req.body);
    dataService.login(req.body.mail,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result)

    })
})

//registration
app.post('/registration',(req,res)=>{
    console.log(req.body);
    dataService.registration(req.body.username,req.body.mail,req.body.qualification,req.body.number,req.body.place,req.body.course,req.body.mode)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to get profile
app.get('/getprofile',(req,res)=>{
    dataService.getprofile(req.params.mail)
    .then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
