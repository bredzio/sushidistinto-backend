import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from "../models/UserModel.js";

export const login = async (req, res) => {
     const {body} = req
     const {username, password} = body
     try{
          const user = await UserModel.findOne({username})
          const passwordCorrect = user === null 
               ? false
               : await bcrypt.compare(password, user.passwordHash)
          if (!(user &&passwordCorrect)){
               res.status(401).json({
                    error: 'Usuario o contraseña inválido'
               })
          }            
          const userForToken = {
               id: user._id,
               username: user.username
          }

          const token = jwt.sign(userForToken, '123')
          
          res.send({
               name: user.name,
               username: user.username,
               token
          })
     }catch(error){
          res.json({message: error.message})
     }

}