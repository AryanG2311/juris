import express from "express";

const router = express.Router();

router.post("/signUp",async (req,res) => {
    try {
        const {username,email,password} = req.body();

        if(!username || !email || !password){
            return res.json({success:false,message:"Please provide all field"}).status(400);
        }

        const userExist = 
    } catch (error) {
        
    }
})