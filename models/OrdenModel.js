import pkg from 'mongoose';
const { model, Schema } = pkg;

const ordenSchema = new Schema (
     {
     comprador: {type:Object},
     items : {type: Array},
     timeStamp: {type:Date},
     total: {type:Number},
     user:{
          type: Schema.Types.ObjectId,
          ref: 'User'
     }
     }
)

ordenSchema.set('toJSON',{
     transform:(document, returnedObject) => {
          returnedObject.id = returnedObject._id;
          delete returnedObject._id;
          delete returnedObject.__v;
     }
})

const OrdenModel = model('Orden', ordenSchema)

export default OrdenModel;