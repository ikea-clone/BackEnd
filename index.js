const mysql = require('mysql');
const conn = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'mysql 워크벤치 설치할때 설정한 비밀번호',
    database: 'test'
};

let connection = mysql.createConnection(conn);
connection.connect(); 
 
let sql = "INSERT INTO `members` (`username`,`password`) VALUES ('test','test');";
 
connection.query(sql, function (err, results, fields) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
sql = "SELECT * FROM MEMBERS";
 
connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end();