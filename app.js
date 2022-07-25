import express from 'express';
import cors  from 'cors';
import db from './database/db.js';
import cursoRoutes from './routes/cursosRoutes.js';
import ordenRoutes from './routes/ordenRoutes.js';
import userRoutes from './routes/userRoutes.js';
import loginRoutes from './routes/loginRoutes.js'
import favicon from 'serve-favicon';

const app = express();
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(cors());
app.use(favicon('./favicon.ico'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res)=>{
     res.send('API REST CURSOS SUSHI DISTINTO')
})
app.use('/cursos', cursoRoutes);
app.use('/ordenes', ordenRoutes);
app.use('/usuarios', userRoutes);
app.use('/login', loginRoutes);


const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
     console.log(`Server UP running on port ${PORT}`)
})