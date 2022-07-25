import pkg from 'mongoose';
const { model, Schema } = pkg;

const cursoSchema = new Schema (
     {
     title: {type:String},
     content : {type:Array},
     price: {type: Number},
     category: {type:String},
     createdAt: {type:Date},
     updatedAt: {type:Date},
     user:{
          type: Schema.Types.ObjectId,
          ref: 'User'
     }
     }
)

cursoSchema.set('toJSON',{
     transform:(document, returnedObject) => {
          returnedObject.id = returnedObject._id;
          delete returnedObject._id;
          delete returnedObject.__v;
     }
})

const CursoModel = model('Curso', cursoSchema)

export default CursoModel;