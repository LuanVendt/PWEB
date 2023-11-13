var sql = require('mssql/msnodesqlv8');
module.exports = function () {

    const config = {
        user: 'BD2211009',
        password: '@998581128@Henrique',
        database: 'LP2', //Na FATEC, utilizar o database BD ou LP8
        server: 'APOLO',//Caso o nome tenha uma instância, colocar duas
        driver: 'msnodesqlv8',
    }
    return sql.connect(config);
} 
