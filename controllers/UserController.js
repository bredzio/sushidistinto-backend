import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';

//Mostrar todos los registros
export const getAllUsers = async (req, res) => {
     UserModel.find({})
     .then(users =>{
          res.json(users)
     })
}

//Mostrar un registro
export const getUser = async (req, res) => {
      try {
           const id = req.params.id
           const user = await UserModel.findById({_id : id})
           .then((user)=>{
               res.status(200).json(user)
           })
      } catch (error) {
           res.json({message: error.message})
      }
 }

 //Crear un registro
 export const createUser = async (req, res) => {
          const user = req.body
          if(!user){
               return res.status(400).json({
                    error: 'Request inválida'
               });
          }

          const saltRounds = 10;
          const passwordHash = await bcrypt.hash(user.passwordHash, saltRounds);

          if(user.type === null){
               user.type = 'user'
          }

          const nuevoUser = new UserModel({
               username: user.username,
               name: user.name,
               passwordHash: passwordHash,
               cursos: [],
               ordenes: [],
               type: user.type
          })

          
          UserModel.create(nuevoUser).then(userCreated=>{
               res.json(userCreated);
          });
 }