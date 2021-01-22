'use strict';

const {
  create,
  list,
  get
} = require('./crud');

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.post('/', async (req, res) => {

  try {
    var personaData = JSON.parse(req.body);
  } catch (e) {
    res.status(403).json({
      detalle: 'Formato de entrada inválido',
    });
  }


  try {
    const result = await create(personaData);
    res.json({
      detalle: `Persona creada correctamente: ${result.id}`,
    });
  } catch (error) {
    res.status(500).json({
      detalle: `Error al crear persona: ${error}`,
    });
  }

})



app.get('/', async (req, res) => {

  try {
    const result = await list();
    res.json({
      cantidad: result.Items.length,
      //TODO:IMPLEMENTAR ANTERIOR
      //TODO:IMPLEMENTAR SIGUIENTE
      resultados: result.Items,
    });
  } catch (error) {
    res.status(500).json({
      detalle: `Error al listar personas: ${error}`,
    });
  }

})



app.get('/:id', async (req, res) => {

  try {
    const result = await get(req.params.id);

    if(result && result.Item){
      res.json(
        result.Item
      );
    }else{
      res.status(404).json({
        detalle: `No encontrado`,
      });
    } 
    
  } catch (error) {
    res.status(500).json({
      detalle: `Error al obtener persona: ${error}`,
    });
  }

})


module.exports.main = serverless(app);


