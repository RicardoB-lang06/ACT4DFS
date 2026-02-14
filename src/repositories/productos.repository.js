const { pool } = require('../db');

class ProductosRepository {
  // constructor() {
  //   this.productos = [];
  //   this.nextId = 1;
  // }el onstructor deja de ser necesario porque se hace desde la base de datos

  async getAll() {
    const result = await pool.query(
      'select * from "Productos"'
    );
    return result.rows;
  }

  async getById(id) {
    const result = await pool.query(
      'select id, nombre, precio from "Productos" where activo = true and id = $1', [id]
    );
    return result.rows[0];
  }
  async getAllActive(){
    const result = await pool.query(
      'select id, nombre, precio from "Productos" where activo = true'
    );
    return result.rows;
  }

  async create(nombre, precio) {
    const result = await pool.query(
      'insert into "Productos" (nombre, precio) values ($1,$2) returning id, nombre, precio;',[nombre, precio]
    );
    return result.rows[0];
    // const newProducto = { id: this.nextId++, nombre, precio };
    // this.productos.push(newProducto);
    // return newProducto;
  }

async buscar({ nombre, minPrecio, maxPrecio, page, limit }) {
  let query = 'select id, nombre, precio from "Productos" where activo = true';
  const values = [];
  let count = 1;

  if (nombre) {
    query += ` and nombre ilike $${count++}`;
    values.push(`%${nombre}%`);
  }

  if (minPrecio !== undefined) {
    query += ` and precio >= $${count++}`;
    values.push(minPrecio);
  }

  if (maxPrecio !== undefined) {
    query += ` and precio <= $${count++}`;
    values.push(maxPrecio);
  }

  query += ' order by id desc';

  const offset = (page - 1) * limit;
  
  query += ` limit $${count++} offset $${count++}`;
  values.push(limit, offset);

  const result = await pool.query(query, values);
  return result.rows;
}

  async update(id, data) {
    const result = await pool.query(
      'update "Productos" set nombre = coalesce($1, nombre), precio = coalesce($2, precio) where id = $3 returning id, nombre, precio',
      [data.nombre ?? null, data.precio ?? null, id]
    );
    return result.rows[0] || null;
    // const producto = await this.getById(id);
    // if (producto) {
    //   producto.nombre = data.nombre;
    //   producto.precio = data.precio;
    //   return producto;
    // }
    // return null;
  }

  async delete(id) {
    const result = await pool.query(
      'delete from "Productos" where id = $1 returning id',[id]
    )
    return result.rows[0] || null;
    // const index = this.productos.findIndex(producto => producto.id === id);
    // if (index !== -1) {
    //   return this.productos.splice(index, 1)[0];
    // }
    // return null;
  }
}


module.exports = { ProductosRepository }