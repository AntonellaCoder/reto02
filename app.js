const express = require('express');

const cursos = require('./controllers/cursos');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Reto 02</h1>');
});

app.get('/cursos/listar', (req, res) => {
  res.json(cursos.list());
});

// Create
app.post('/cursos/crear', (req, res) => {
  const cur = cursos.create(req.body);
  res.json(cur);
});

// Read
app.get('/cursos/mostrar/:detalle', (req, res) => {
  const detail = parseInt(req.params.detalle, 10);
  const output = cursos.read(detail, req.body);
  res.json(output);
});

// Update
app.put('/cursos/actualizar/:index', (req, res) => {
  const i = parseInt(req.params.index, 10);
  const foo = cursos.update(i, req.body);
  res.json(foo);
});

// Delete
app.delete('/cursos/eliminar/:idd', (req, res) => {
  const d = parseInt(req.params.idd, 10);
  const bar = cursos.delet(d, req.body);
  res.json(bar);
});

app.listen(3000, () => {
  console.log('Listening at 3000');
});
