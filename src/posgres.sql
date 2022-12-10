CREATE DATABASE ecommerce

CREATE TABLE cliente (
    cedula VARCHAR(100) PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    email VARCHAR(100),
    usuario VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE venderor (
    cedula VARCHAR(100) PRIMARY KEY NOT NULL,
    nombre VARCHAR(100)
);

CREATE TABLE producto (
    codigo SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    precio FLOAT(20),
    descripcion TEXT
);

CREATE TABLE inventario  (
    id SERIAL PRIMARY KEY NOT NULL,
    producto VARCHAR(100),
    cantidad INT,
    FOREIGN KEY(producto) REFERENCES producto(codigo)
);

CREATE TABLE factura(
    codigo SERIAL PRIMARY KEY NOT NOT,
    fecha DATE,
    cliente VARCHAR(100),
    producto INT,
    precio_unitario FLOAT,
    precio_total FLOAT,
    FOREIGN KEY(cliente) REFERENCES cliente(cedula)
    FOREIGN KEY(producto) REFERENCES producto(codigo)
);