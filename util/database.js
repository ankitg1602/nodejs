const pg = require('pg');

const pool = {
    username: 'irt_test',
    password: '@owering@eople@rogress',
    host: '35.232.25.11',
    database: 'ankit',
    port: 5432
}

const client = new pg.Client(`postgres://${pool.username}:${pool.password}@${pool.host}:${pool.port}/${pool.database}`);

module.export = client.connect()