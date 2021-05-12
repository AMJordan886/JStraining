/*
Structure Query Language
 
BUSCAR QUE ES:
CAMPO, REGISTRO, TABLA Y TIPOS DE DATOS(EJ: VARCHAR)


Una sentencia SQL es una linea de codigo para trabajar con nuestra BD

Existen 2 tipos de sentencias SQL:

1) Sentencias estructurales: Son las que nos permitirán crear, modificar o eliminar objetos, usuarios y propiedades de nuestra BD
2) Sentencias de datos: Son las que nos permitiran insertar, eliminar, modificar y buscar informacion en nuestra BD.

En MySQL existen 2 tipos de engine para tablas:
1) MyISAM - Tablas planas como si fuera Excel
2) InnoDB - Tablas Relacionales como si fuera Access


http://mysql.conclase.net/curso/index.php


no te olvides el WHERE en el noseque
 */




CREATE DATABASE mis_contactos;
USE mis_contactos;

CREATE TABLE contactos(
    email VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    sexo CHAR(1),
    nacimiento DATE,
    telefono VARCHAR(13),
    pais VARCHAR(50) NOT NULL,
    imagen VARCHAR(50),
    PRIMARY KEY(email),
    FULLTEXT KEY buscador(email,nombre,sexo,telefono,pais)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE pais(
    id_pais INT NOT NULL AUTO_INCREMENT,
    pais VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_pais)
)ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO pais (id_pais, pais) VALUES 
    (1, "México"),
    (2,"Colombia"),
    (3,"España"),
    (4,"Guatemala"),
    (5,"Brasil"),
    (6,"Uruguay"),
    (7,"Perú"),
    (8,"Argentina"),
    (9,"Chile"),
    (10,"Paraguay"),
    (11,"Honduras"),
    (12,"El Salvador"),
    (13,"Nicaragua"),
    (14,"Costa Rica"),
    (15,"Panamá"),
    (16,"Venezuela"),
    (17,"Ecuador"),
    (18,"Bolivia"),
    (19,"Canada"),
    (20,"Estados Unidos"),
    (21,"Groenlandia"),
    (22,"República Dominicana"),
    (23,"Haití"),
    (24,"Cuba"),
    (25,"Belice"),
    (26,"Reino Unido"),
    (27,"Francia"),
    (28,"Alemania"),
    (29,"Italia"),
    (30,"Japón"),
    (31,"China"),
    (32,"Egipto"),
    (33,"Sudafrica"),
    (34,"Australia"),
    (35,"Nueva Zelanda");












