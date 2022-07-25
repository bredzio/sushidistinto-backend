import OrdenModel from "../models/OrdenModel.js";

//Mostrar todos los registros
export const getAllOrdenes = async (req, res) => {
     OrdenModel.find({})
     .then(ordenes =>{
          res.json(ordenes)
     })
}

//Mostrar un registro
export const gettOrden = async (req, res) => {
      try {
           const id = req.params.id
           const orden = await OrdenModel.findById({_id : id})
           .then((orden)=>{
               res.status(200).json(orden)
           })
      } catch (error) {
           res.json({message: error.message})
      }
 }

 //Crear un registro
 export const createOrden = async (req, res) => {
          const orden = req.body
          if(!orden){
               return res.status(400).json({
                    error: 'Request inválida'
               });
          }

          const nuevaOrden = new OrdenModel({
               comprador: orden.comprador,
               items: orden.items,
               total: orden.total
          })

          
          OrdenModel.create(nuevaOrden).then(ordenCreated=>{
               res.json(ordenCreated);
          });
 }