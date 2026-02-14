function validarProducto({nombre, precio}){//esta entre {} porque es un objeto
    if (!nombre || typeof nombre !== 'string'){
        return {ok: false, error: 'Nombre inválido'}
    }
    const p = Number(precio);
    if(!Number.isFinite(p) || p <= 0){
        return {ok: false, error: 'Precio inválido'}
    }
    return {ok: true, data: {nombre, precio: p}}
}

function validarBusqueda(query) {
    const page = Number(query.page);
    const limit = Number(query.limit);
    const minPrecio = query.minPrecio ? Number(query.minPrecio) : undefined;
    const maxPrecio = query.maxPrecio ? Number(query.maxPrecio) : undefined;

    if (query.page && (isNaN(page) || page <= 0)) {
        return { ok: false, error: 'La página debe ser un número positivo' };
    }
    if (query.limit && (isNaN(limit) || limit <= 0)) {
        return { ok: false, error: 'El límite debe ser un número positivo' };
    }
    if (minPrecio !== undefined && isNaN(minPrecio)) {
        return { ok: false, error: 'El precio mínimo debe ser un número' };
    }
    if (maxPrecio !== undefined && isNaN(maxPrecio)) {
        return { ok: false, error: 'El precio máximo debe ser un número' };
    }

    return {
        ok: true,
        data: {
            nombre: query.nombre,
            minPrecio,
            maxPrecio,
            page: page || 1,
            limit: limit || 5
        }
    };
}

module.exports = { validarProducto, validarBusqueda };