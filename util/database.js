const pg = require('pg');

const pool = {
    
}

const client = new pg.Client(`postgres://${pool.username}:${pool.password}@${pool.host}:${pool.port}/${pool.database}`);

module.export = client.connect()