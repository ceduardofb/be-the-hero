const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 *  Rota /  Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no bakc-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  * 
  */

  /**
   * tipos de parâmetros:
   * 
   * Query params: parâmetros nomeados enviados na rota após ? (filtros , paginação)
   * Route params: parâmetros utilizados para identificar recursos
   * Requests Body: corpo da requisição, utilizado para criar ou alterarr recursos
   * 
   */

   /**
    * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    * 
    */

    /**
     * Consultas pelo:
     * 
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * 
     */






