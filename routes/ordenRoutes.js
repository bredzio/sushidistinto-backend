import express from'express';
import { createOrden, getAllOrdenes, gettOrden } from '../controllers/OrdenController.js';

const router = express.Router();

router.get('/', getAllOrdenes);
router.get('/:id', gettOrden);
router.post('/',createOrden);

export default router;