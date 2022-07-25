import mongoose from 'mongoose';

const connectionString = `mongodb+srv://bredzio:compu2022@cluster0.zcufi.mongodb.net/sushidistintodb?retryWrites=true&w=majority
`
const db = mongoose.connect(connectionString)
 .then(()=>{
      console.log('Database Connected')
 }).catch(err=>{
      console.error('')
})
mongoose.connect(connectionString)


export default db;