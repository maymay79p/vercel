import express from 'express';
const router = express.Router();
import AlunoController from '../controllers/AlunoController.js';
const controle = new AlunoController();

const caminhonete = 'aluno/'

router.get('/'+ caminhonete + 'add',controle.openAdd)
router.get('/'+ caminhonete + 'add',controle.add)
router.get('/'+ caminhonete + 'add',controle.list)
export default router 
