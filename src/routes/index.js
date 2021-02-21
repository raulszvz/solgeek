const express = require('express');
const router = express.Router();
const Usuario = require('../model/usuario');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.render('index', {
    usuarios
  });
});

router.post('/crear', async (req, res, next) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.redirect('/');
});

router.get('/status/:id', async (req, res, next) => {
  let { id } = req.params;
  const usuario = await Usuario.findById(id);
  usuario.status = !usuario.status;
  await usuario.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const usuario = await Usuario.findById(req.params.id);
  console.log(usuario)
  res.render('edit', { usuario });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Usuario.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Usuario.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
