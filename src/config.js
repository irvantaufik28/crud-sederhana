const mysql = require ("mysql")

const connection =mysql.createConnection({
    host: '127.0.0.1',
    user:'root' ,
    password: '',
    database:'daftar_warga'
})

connection.connect((error)=>{
    if (error) throw error
    console.log('database connected!')
})