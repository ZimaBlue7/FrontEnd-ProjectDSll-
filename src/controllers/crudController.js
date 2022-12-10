const { Router } = require('express')
const pool = require('../db')
//=============================================================
 const arreglo = ["carlos",80,true,{nombre:"samir", edad:00}]
 const [, , , pos4] = arreglo;
 console.log(pos4) 
 //============================================================
const select = async (req, res) => {
    try {
        const usuarios = await pool.query('SELECT * FROM usuario')
    console.log(usuarios)
    res.send('lista de tareas');

    } catch (error) {
        console.log(error.message)
    }
}

const insert = async (req, res) => {
    try {

        const { nombre, apellido, description } = req.body
        res.send('insertar datos');

        const result = await pool.query('INSERT INTO usuario (nombre,apellido,descripcion) VALUES ($1,$2,$3)', [
            nombre,
            apellido,
            description
        ])

        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

const deleted = async (req, res) => {
    res.send('borrar datos');
}

const update = async (req, res) => {
    res.send('actualizar datos');
}


module.exports = {

    select,
    insert,
    deleted,
    update
}