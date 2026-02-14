# ACT4DFS
Actividad 4 de la materia Desarrollo Full Stack, con el objetivo de usar búsqueda por nombre, filtro por rango de precio, paginación real usando LIMIT y OFFSET  y construcción segura de consultas SQL dinámicas.

En este caso me piqué con las reglas de validación y se agregaron 2 reglas de validación extras.

RECOMENDACIÓN: CONSULTAR EL ARCHIVO DE TEXTO "comandosterminal.txt" ya que ahí se incluyen los comandos que hay que usar en la temrinal para poder ejecutar el código correctamente.
Y un consejo que puedo dar es que si crean el repositorio en la página web de GitHub es que usen un fetch en la terminal de visual studio para hacer un merge con lo que puedan tener en el repositorio (como el archivo README).

Documentación de POSTMAN: https://documenter.getpostman.com/view/51906899/2sBXcBo2yn

Importante comentar que incluimos un ".gitignore" para ocultar el acceso a la base de datos, pero es posible que cada desarrollador lo haga por su cuenta usando supabase.

El proyecto consiste en una API robusta desarrollada en Node.js y Express para la gestión de un inventario de productos con PostgreSQL. La
utilidad principal del código es que en su arquitectura de capas se separan las rutas, la lógica de control, las reglas de negocio y el acceso a
datos mediante repositorios. El sistema implementa una búsqueda avanzada y dinámica que permite filtrar por nombre, rangos de precio y paginación real,
garantizando integridad de la base de datos mediante validaciones estrictas y la prevención de ataques de inyección SQL a través de consultas
parametrizadas.
