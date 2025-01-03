import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async(req,res) =>{

    const {email,password,name,role,gender} = req.body
    try{
        let user = null

        if(role === 'patient'){
            user = await User.findOne({email})
        }
        else if(role === 'doctor'){
            user = await Doctor.findOne({email})
        }

        // check if user is already registered
        if(user){
            return res.status(400).json({message:'User already registered'})
        }

        // hash password
        const salt = await bcrypt.gensalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        if(role === 'patient'){
            user = new User({
                name,
                email,password:hashPassword,
                gender,role
            })
        }
        if(role === 'doctor'){
            user = new Doctor({
                name,
                email,password:hashPassword,
                gender,role
            })
        }

        await user.save()

        res.status(200).json({success:true, message:'User succesfully registered..'})

    }catch(err){
        res.status(500).json({success:false, message:'Internal server issue! Try again in some time..'})

    }
}
export const login = async(req,res) =>{
    try{
        
    }catch(err){

    }
}