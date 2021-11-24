-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2021 a las 17:30:09
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectointegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(250) NOT NULL,
  `fecha_de_creacion` date NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `posteo_id` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`, `fecha_de_creacion`, `usuario_id`, `posteo_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Uff que lindo fierro', '2021-10-18', 2, 1, NULL, NULL),
(2, 'Que lindo color, esta divino', '2021-10-19', 3, 1, NULL, NULL),
(3, 'Mi viejo tenia uno igual!', '2021-10-20', 4, 1, NULL, NULL),
(4, 'Impecable!!', '2021-10-20', 5, 1, NULL, NULL),
(5, 'Que lindo auto', '2021-10-21', 1, 2, NULL, NULL),
(6, 'Que bien estas...', '2021-10-22', 4, 2, NULL, NULL),
(7, 'Nuevito nuevito lo tenes', '2021-10-23', 5, 2, NULL, NULL),
(8, 'Tremendo, felicitaciones!', '2021-10-23', 3, 2, NULL, NULL),
(9, 'Me alegro, disfruta mucho', '2021-10-21', 1, 3, NULL, NULL),
(10, 'Que buena experiencia', '2021-10-21', 2, 3, NULL, NULL),
(11, 'TREMENDOO!', '2021-10-22', 4, 3, NULL, NULL),
(12, 'Que bien se te ve, abrazo!', '2021-10-22', 5, 3, NULL, NULL),
(13, 'Esta increible!!', '2021-10-25', 2, 4, NULL, NULL),
(14, 'La vi el otro dia, un caño', '2021-10-26', 5, 4, NULL, NULL),
(15, 'Que buena foto!', '2021-10-26', 3, 4, NULL, NULL),
(16, 'Epicaa', '2021-10-27', 1, 4, NULL, NULL),
(18, 'Nuevo carro\r\n', '0000-00-00', 7, 9, NULL, NULL),
(19, 'Alta camioneta', '0000-00-00', 7, 5, '2021-11-22 20:15:57', '2021-11-22 20:15:57'),
(20, 'Muy lindo', '0000-00-00', 1, 5, '2021-11-22 20:16:22', '2021-11-22 20:16:22'),
(21, 'Que auto', '0000-00-00', 1, 4, '2021-11-22 20:30:19', '2021-11-22 20:30:19'),
(22, 'Buenisimo', '0000-00-00', 1, 9, '2021-11-23 14:53:21', '2021-11-23 14:53:21'),
(23, 'FUAAA', '0000-00-00', 1, 5, '2021-11-23 14:53:51', '2021-11-23 14:53:51'),
(24, 'Me encanta', '0000-00-00', 4, 5, '2021-11-23 15:15:20', '2021-11-23 15:15:20'),
(25, 'Lindaa\r\n', '0000-00-00', 4, 5, '2021-11-23 15:16:04', '2021-11-23 15:16:04'),
(26, 'wow\r\n', '0000-00-00', 1, 5, '2021-11-24 16:05:49', '2021-11-24 16:05:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `follow`
--

CREATE TABLE `follow` (
  `id` int(10) UNSIGNED NOT NULL,
  `follower_id` int(10) UNSIGNED DEFAULT NULL,
  `following_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `follow`
--

INSERT INTO `follow` (`id`, `follower_id`, `following_id`) VALUES
(2, 7, 4),
(4, 7, 1),
(5, 1, 5),
(6, 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `posteo_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `usuario_id`, `posteo_id`) VALUES
(4, 7, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posteos`
--

CREATE TABLE `posteos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(150) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posteos`
--

INSERT INTO `posteos` (`id`, `imagen`, `descripcion`, `usuario_id`, `createdAt`, `updatedAt`) VALUES
(1, '/images/fordFalcon.jpg', 'Ford Falcon, una nave, con caño de escape nuevo', 1, NULL, NULL),
(2, '/images/Peugeot208.jpg', 'Peugeot 208 nuevo recien salido del taller', 2, NULL, NULL),
(3, '/images/DiaDeCarrera.jpg', 'Disfrutando un dia de carrera con amigos', 3, NULL, NULL),
(4, '/images/ferrari.jpg', 'Ferrari en Libertador, Pepino', 4, NULL, NULL),
(5, '/images/toyotaHilux.jpg', 'Nueva camioneta Toyota Hilux 2021', 5, NULL, NULL),
(6, '/images/autoRojo.jpg', 'Sacando a pasear el nuevo auto!', 6, NULL, NULL),
(9, '/images/2d860f9fa178e4c68705baee8d00af8c', 'Nuevo auto\r\n', 7, NULL, '2021-11-22 20:02:50'),
(11, '/images/4fade27a29f50c6c4b5702959cf70423', 'Nuevo chiche', 1, '2021-11-23 14:39:43', '2021-11-23 14:39:43'),
(12, '/images/f2123d4776e44b8b22aa4f9aed0a9235', 'Paseando por el mundo', 4, '2021-11-23 15:39:09', '2021-11-23 15:39:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `fotoPerfil` varchar(150) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `cantPublicaciones` int(10) UNSIGNED DEFAULT 0,
  `seguidores` int(10) UNSIGNED DEFAULT 0,
  `seguidos` int(10) UNSIGNED DEFAULT 0,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `nombre`, `apellido`, `email`, `contrasenia`, `fotoPerfil`, `fechaNacimiento`, `cantPublicaciones`, `seguidores`, `seguidos`, `createdAt`, `updatedAt`) VALUES
(1, 'FranRodriguez', 'Francisco', 'Rodriguez', 'franciscorodriguez@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '/images/usuario1.jpg', '1999-03-04', 1, 50, 100, NULL, NULL),
(2, 'PabloGonzales', 'Pablo', 'Gonzales', 'pablogonzales@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '/images/usuario2.jpg', '1997-07-09', 1, 150, 200, NULL, NULL),
(3, 'CristianFabianni', 'Cristian', 'Fabianni', 'cristianfabianni@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '/images/usuario3.jpg', '2000-03-10', 1, 300, 500, NULL, NULL),
(4, 'CarlaDominguez', 'Carla', 'Dominguez', 'carladominguez@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '/images/usuario4.jpg', '1995-10-06', 1, 500, 300, NULL, NULL),
(5, 'FernandoMenendez', 'Fernando', 'Menendez', 'fernandomenendez@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '/images/usuario5.jpg', '1991-03-04', 1, 175, 250, NULL, NULL),
(6, 'MartínGutierrez', 'Martín', 'Gutierrez', 'martingutierrez@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '/images/usuario1.jpg', '1992-06-07', 1, 125, 90, NULL, NULL),
(7, 'JoacoRios', 'Joaquin', 'Rios', 'joacoirios20@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '', '0000-00-00', 1, 0, 0, NULL, NULL),
(8, 'Juan123', 'Juan', 'Centurión', 'juan@gmail.com', '$2a$10$dRs5xorTQx4ERiALcn1S1.YdewJ/rOKjbMLeZaSh4eSyTF6fM04s6', '', '0000-00-00', 0, 0, 0, NULL, NULL),
(17, 'Joaco Rios', 'Joaco', 'Rios', 'joacoirios20@gmail.com', '$2a$10$ftB1zKLjKoKECmi5Ts6r4uurnC2.Oe8/kVEny/uCOEOXQGTpzHNG2', '', '0000-00-00', 0, 0, 0, '2021-11-22 18:58:43', '2021-11-22 18:58:43'),
(18, 'Fer01', 'Fernando', 'Gonzalez', 'pepe@gmail.com', '$2a$10$VWGU9dY2sZRwRP9apgo3xOqD87C0lDx3pb7brFolFFKNX10uy3xae', '', '2002-02-11', 0, 0, 0, '2021-11-22 20:40:43', '2021-11-22 20:40:43'),
(19, 'aaa', 'aaa', 'asdjsdnc', 'franciscrodriguez@gmail.com', '$2a$10$/UQQWdYELUFFLGfxUdj1L.t007V62dFZtEosf/hh3bL.TU/Yglpc6', '', '1111-01-01', 0, 0, 0, '2021-11-24 14:13:40', '2021-11-24 14:13:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `posteo_id` (`posteo_id`);

--
-- Indices de la tabla `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `posteos`
--
ALTER TABLE `posteos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `posteos`
--
ALTER TABLE `posteos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`posteo_id`) REFERENCES `posteos` (`id`);

--
-- Filtros para la tabla `posteos`
--
ALTER TABLE `posteos`
  ADD CONSTRAINT `posteos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
