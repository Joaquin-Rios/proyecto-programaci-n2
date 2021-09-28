CREATE SCHEMA proyectointegrador;

use proyectointegrador;

CREATE  TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(60) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    fotoPerfil VARCHAR(150) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    cantPublicaciones INT UNSIGNED DEFAULT 0
);

CREATE  TABLE posteos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen VARCHAR (150) NOT NULL,
    despcripcion VARCHAR (250) NOT NULL,
    fecha_de_creacion DATE NOT NULL,
    usuario_id INT UNSIGNED,
    FOREIGN KEY (usuario_id) REFERENCES users(id)
);

CREATE  TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    comentario VARCHAR (250) NOT NULL,
    fecha_de_creacion DATE NOT NULL,
    usuario_id INT UNSIGNED,
    FOREIGN KEY (usuario_id) REFERENCES users(id),
    posteo_id INT UNSIGNED,
    FOREIGN KEY (posteo_id) REFERENCES posteos(id)
);

INSERT INTO users (id, nombre, apellido, email, contraseña, fotoPerfil, fechaNacimiento, cantPublicaciones)
VALUES (DEFAULT,'Francisco','Rodriguez','franciscorodriguez@gmail.com','francisco123','/images/usuario1.jpg','1999-03-04', 1);
VALUES (DEFAULT,'Pablo','Gonzales','pablogonzales@gmail.com','pablogonzales123','/images/usuario2.jpg','1997-07-09', 1),
VALUES (DEFAULT,'Cristian','Fabianni','cristianfabianni@gmail.com','cristian123','/images/usuario3.jpg','2000-03-10', 1),
VALUES (DEFAULT,'Carla','Dominguez','carladominguez@gmail.com','carla1234','/images/usuario4.jpg','1995-10-06', 1),
VALUES (DEFAULT,'Fernando','Menendez','fernandomenendez@gmail.com','fernando123','/images/usuario5.jpg','1991-03-04', 1),
VALUES (DEFAULT,'Martín','Gutierrez','martingutierrez@gmail.com','martin123','/images/usuario1.jpg','1992-06-07', 1);



INSERT INTO posteos (id, imagen, descripcion, fecha_de_creacion, usuario_id)
VALUES (DEFAULT,'/images/fordFalcon.jpg','Ford Falcon, una nave, con caño de escape nuevo','2021-10-18',1);
VALUES (DEFAULT,'/images/Peugeot208.jpg','Peugeot 208 nuevo recien salido del taller','2021-10-19',2)
VALUES (DEFAULT,'/images/DiaDeCarrera.jpg','Disfrutando un dia de carrera con amigos','2021-10-21',3)
VALUES (DEFAULT,'/images/ferrari.jpg','Ferrari en Libertador, Pepino','2021-10-24',4)
VALUES (DEFAULT,'images/toyotaHilux.jpg','Nueva camioneta Toyota Hilux 2021','2021-10-26',5)
VALUES (DEFAULT,'/images/autoRojo.jpg','Sacando a pasear el nuevo auto!','2021-10-26',6)



INSERT INTO comentarios (id, comentario, fecha_de_creacion, usuario_id, posteo_id)
VALUES (DEFAULT,'Uff que lindo fierro','2021-10-18',2,1);
VALUES (DEFAULT,'Que lindo color, esta divino','2021-10-19',3,1)
VALUES (DEFAULT,'Mi viejo tenia uno igual!','2021-10-20',4,1)
VALUES (DEFAULT,'Impecable!!','2021-10-20',5,1),
VALUES (DEFAULT,'Que lindo auto','2021-10-21',1,2),
VALUES (DEFAULT,'Que bien estas...','2021-10-22',4,2),
VALUES (DEFAULT,'Nuevito nuevito lo tenes','2021-10-23',5,2),
VALUES (DEFAULT,'Tremendo, felicitaciones!','2021-10-23',3,2),
VALUES (DEFAULT,'Me alegro, disfruta mucho','2021-10-21',1,3),
VALUES (DEFAULT,'Que buena experiencia','2021-10-21',2,3),
VALUES (DEFAULT,'TREMENDOO!','2021-10-22',4,3),
VALUES (DEFAULT,'Que bien se te ve, abrazo!','2021-10-22',5,3),
VALUES (DEFAULT,'Esta increible!!','2021-10-25',2,4),
VALUES (DEFAULT,'La vi el otro dia, un caño','2021-10-26',5,4),
VALUES (DEFAULT,'Que buena foto!','2021-10-26',3,4),
VALUES (DEFAULT,'Epicaa','2021-10-27',1,4),