import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma =new PrismaClient();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.get('/api/funcionarios',async (requestAnimationFrame,res)=>{
    const funcionarios = await prisma.funcionario.findMany();
    res.json(funcionarios);
});
app.post('/api/funcionarios',async (req,res)=>{
    try{
        const nuevoFuncionario = await prisma.funcionario.create({
            data: req.body
        });
        res.json(nuevoFuncionario);
    }catch(error){
        console.log(error);
        res.status(400).json({error: 'Error al guardar'});
    }
})
app.put('/api/funcionarios/:id', async (req, res) => {
  try {
    const idUrl = parseInt(req.params.id);
    const { id, ...datosParaActualizar } = req.body; 

    const actualizado = await prisma.funcionario.update({
      where: { id: idUrl },
      data: datosParaActualizar 
    });
    
    res.json(actualizado);
  } catch (error) {
    console.log("ERROR REAL AL EDITAR:", error); 
    res.status(400).json({ error: 'Error al actualizar.' });
  }
});
app.patch('/api/funcionarios/:id/estado', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { estado } = req.body;
    const actualizado = await prisma.funcionario.update({
      where: { id },
      data: { estado }
    });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al cambiar estado.' });
  }
});
app.listen(PORT, ()=>{
    console.log(`el servidor activo en http://localhost:${PORT}`);
})