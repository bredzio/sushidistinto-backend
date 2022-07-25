import CursoModel from "../models/CursoModel.js";

//Mostrar todos los registros
export const getAllCursos = async (req, res) => {
     const category = req.query.category
     if(category){
          CursoModel.find({category : category})
          .then(cursos =>{
               res.json(cursos)
          })
     }else{
          CursoModel.find({})
          .then(cursos =>{
               res.json(cursos)
          })
     }
}

//Mostrar un registro
export const gettCurso = async (req, res) => {
      try {
           const id = req.params.id
           const curso = await CursoModel.findById({_id : id})
           .then((curso)=>{
               res.status(200).json(curso)
           })
      } catch (error) {
           res.json({message: error.message})
      }
 }

 //Mostrar cursos por categoria
export const getCursosByCategoria = async (req, res) => {
     try {
          const category = req.query.category
          console.log(category);
          CursoModel.find({category : category})
          .then(cursos =>{
               res.json(cursos)
          })

     } catch (error) {
          res.json({message: error.message})
     }
}

 //Crear un registro
 export const createCurso = async (req, res) => {
      try {
          if(!req){
               return res.status(400).json('Request inválida');
          }
          console.log("REQ BODY", req.body);
          delete req.body.id;
          const fechaHoy = new Date();
          const nuevoCurso = {...req.body, ...{createdAt: fechaHoy, updatedAt: fechaHoy}}
           await CursoModel.create(nuevoCurso);
           res.status(200).json('Registro creado exitosamente')
      } catch (error) {
           res.json({message: error.message})
      }
 }

 //Actualizar un registro
 export const updateCurso = async (req, res) => {
      try {
          const id = req.params.id
          const fechaHoy = new Date();
          const cursoEditado = {...req.body, ...{updatedAt: fechaHoy}}
          await CursoModel.updateOne({_id:id}, cursoEditado)
          res.status(200).json({
               "message":'Registro actualizado exitosamente'
          })
      } catch (error) {
           res.json({message: error.message})
      }
 }

 //Eliminar un registro
 export const deleteCurso = async (req, res) => {
      try {
          const id = req.params.id
           await CursoModel.deleteOne({_id:id})
           res.status(200).json('Registro eliminado exitosamente')
      } catch (error) {
           res.json({message: error.message})
      }
}