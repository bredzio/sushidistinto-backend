import express from'express';
import { createCurso, deleteCurso, getAllCursos, getCursosByCategoria, gettCurso, updateCurso } from '../controllers/CursoController.js';
const router = express.Router();

router.get('/', getAllCursos);
router.get('/:id', gettCurso);
router.post('/',createCurso);
router.put('/:id',updateCurso);
router.delete('/:id', deleteCurso);

export default router;