const { ProductosRepository } = require('../repositories/productos.repository');

const { validarProducto, validarBusqueda, validarUpdate } = require('../domain/productos.rules');
const { json } = require('express');

const repo = new ProductosRepository();

async function getAll(req, res) {
  const productos = await repo.getAll();
  console.log(productos)
  return res.json(productos)
}

async function getAllVisible(req, res) {
  const productos = await repo.getAllActive()
  return res.json(productos)
}

async function getById(req, res) {
  const id = Number(req.params.id);
  const producto = await repo.getById(id);

  if (!producto) { 
      return res.status(404).json({error: 'Producto no encontrado'});
  }

  return res.json(producto);
}


async function search(req, res) {
  const validation = validarBusqueda(req.query);

  if (!validation.ok) {
    return res.status(400).json({ error: validation.error });
  }

  const { nombre, minPrecio, maxPrecio, page, limit } = validation.data;

  const resultados = await repo.buscar({ 
    nombre, 
    minPrecio, 
    maxPrecio, 
    page, 
    limit 
  });

  if (!resultados || resultados.length === 0) {
    return res.status(404).json({
      error: 'No se encontraron productos',
      data: [],
      page,
      limit,
      total: 0
    });
  }

  return res.json({
    data: resultados,
    page,
    limit,
    total: resultados.length 
  });
}

async function create(req, res) {
  // const { nombre, precio } = req.body;

  // if (!nombre || typeof nombre !== 'string') {
  //   return res.status(400).json({error: 'Nombre inválido'})
  // }

  // const precioNumber = Number(precio);
  // if (precio <= 0) {
  //   return res.status(400).json({error: 'Precio inválido'})
  // }
  const { nombre, precio } = req.body;

  const v = validarProducto({ nombre, precio });

  if (!v.ok) {
    return res.status(400).json({ error: v.error });
  }

  const nuevo = await repo.create(v.data.nombre, v.data.precio);
  return res.status(201).json(nuevo);
}

async function update(req, res) {
  const id = Number(req.params.id);
  
  const validation = validarUpdate(req.body);

  if (!validation.ok) {
    return res.status(400).json({ error: validation.error });
  }

  if (Object.keys(validation.data).length === 0) {
    return res.status(400).json({ error: 'No hay datos para actualizar' });
  }

  const actualizado = await repo.update(id, validation.data);

  if (!actualizado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  return res.json(actualizado);
}

async function remove(req, res) {
  const id = Number(req.params.id);
  
  const ok = await repo.delete(id)

  if (!ok) {
    return res.status(404).json({error: 'No encontrado'})
  }

  return res.status(204).send()
}

module.exports = { getAll, getAllVisible, getById, search, create, update, remove }