# ACT4DFS
Actividad 4 de la materia Desarrollo Full Stack, con el objetivo de usar búsqueda por nombre, filtro por rango de precio, paginación real usando LIMIT y OFFSET  y construcción segura de consultas SQL dinámicas.

RECOMENDACIÓN: CONSULTAR EL ARCHIVO DE TEXTO "comandosterminal.txt" ya que ahí se incluyen los comandos que hay que usar en la temrinal para poder ejecutar el código correctamente.
Y un consejo que puedo dar es que si crean el repositorio en la página web de GitHub es que usen un fetch en la terminal de visual studio para hacer un merge con lo que puedan tener en el repositorio (como el archivo README).

Documentación de POSTMAN: https://documenter.getpostman.com/view/51906899/2sBXcBo2yn

Importante comentar que incluimos un ".gitignore" para ocultar el acceso a la base de datos, pero es posible que cada desarrollador lo haga por su cuenta usando supabase.

El proyecto consiste en una API robusta desarrollada en Node.js y Express para la gestión de un inventario de productos con persistencia en PostgreSQL. La utilidad principal del código radica en su arquitectura de capas, que separa claramente las rutas, la lógica de control, las reglas de negocio y el acceso a datos mediante repositorios. El sistema implementa una búsqueda avanzada y dinámica que permite filtrar por nombre, rangos de precio y paginación real, garantizando la integridad de la base de datos mediante validaciones estrictas y la prevención de ataques de inyección SQL a través de consultas parametrizadas. Es una solución escalable diseñada para ofrecer respuestas estructuradas ideales para ser consumidas por aplicaciones frontend modernas.