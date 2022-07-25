import pkg from 'mongoose';
const { model, Schema } = pkg;

const userSchema = new Schema (
     {
     username: {type: String},
     name : {type: String},
     passwordHash:{type: String},
     timeStamp: {type:Date},
     cursos: [{
          type: Schema.Types.ObjectId,
          ref: 'Curso'
     }],
     ordenes: [{
          type: Schema.Types.ObjectId,
          ref: 'Orden'
     }],
     type: {type: String}
     }
)

userSchema.set('toJSON',{
     transform:(document, returnedObject) => {
          returnedObject.id = returnedObject._id;
          delete returnedObject._id;
          delete returnedObject.__v;

          delete returnedObject.passwordHash
     }
})

const UserModel = model('User', userSchema)

export default UserModel;