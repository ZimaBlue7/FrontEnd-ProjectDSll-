CREATE DATABASE prueba
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    descripcion VARCHAR(255) NOT NULL

);