// const mysql = require('mysql');
const mysql = require("mysql2")
const user = {
};

const connectionString = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdata',
    port: '3307'
}


user.FindUserByID = (id) => {
    return new Promise((resolve, reject) => {

        // connect database connections
        // get data from the database
        // return data

        const connection = mysql.createConnection(connectionString);

        // console.log('reached inside this function')
        const query = `select * from table1 where id = ${id}`;
        // console.log(query);
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                // console.log(JSON.stringify(results));
                resolve(results);
            }
        });
    });
}

user.SaveUser = (data) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionString);

        const query = `insert into table1 (firstname, lastname, age, isvalid, status, phonenumber) values ('${data.f_name}',' ${data.s_name}', ${data.age}, '0','1','${data.phn_no}')`;
        // console.log(query)
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            }
            else {

                resolve(results);
            }
        });

    });
}
user.DeleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionString);

        const query = `DELETE FROM testdata.table1 WHERE (id = '${id}')`
        // console.log(query)
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });

    });
}
user.UpdateUser = (id, data) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionString);
        const query = `UPDATE testdata.table1 SET phonenumber = '${data.phn_no}' WHERE id = '${id}'`;
        connection.query(query, (error, results) => {

            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }

        });

    })
}

user.ActiveUserlist = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(connectionString);

        const query = `SELECT * FROM testdata.table1 WHERE status = '1'`;
        connection.query(query, (error, results) => {

            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }

        });



    })
}

module.exports = user;