-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2022 at 09:45 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ppk_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(5) NOT NULL,
  `namaKegiatan` varchar(255) NOT NULL,
  `penyelenggaraKegiatan` varchar(255) NOT NULL,
  `kategoriKegiatan` varchar(255) NOT NULL,
  `statusKegiatan` varchar(255) NOT NULL,
  `tanggalKegiatan` varchar(255) NOT NULL,
  `waktuKegiatan` varchar(255) NOT NULL,
  `tempatKegiatan` varchar(255) NOT NULL,
  `deskripsiKegiatan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `namaKegiatan`, `penyelenggaraKegiatan`, `kategoriKegiatan`, `statusKegiatan`, `tanggalKegiatan`, `waktuKegiatan`, `tempatKegiatan`, `deskripsiKegiatan`) VALUES
(1, 'Kegiatan 1', 'Penyelenggara 1', 'Kategori 1', 'Status 1', 'Tanggal 1', 'Waktu 1', 'Tempat 1', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(2, 'Kegiatan 2', 'Penyelenggara 2', 'Kategori 2', 'Status 2', 'Tanggal 2', 'Waktu 2', 'Tempat 2', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(3, 'Kegiatan 3', 'Penyelenggara 3', 'Kategori 3', 'Status 3', 'Tanggal 3', 'Waktu 3', 'Tempat 3', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(4, 'Kegiatan 4', 'Penyelenggara 4', 'Kategori 4', 'Status 4', 'Tanggal 4', 'Waktu 4', 'Tempat 4', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(5, 'Kegiatan 5555', 'Penyelenggara 5', 'Kategori 5', 'Status 5', 'Tanggal 5', 'Waktu 5', 'Tempat 5', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(6, 'Kegiatan 6', 'Penyelenggara 6', 'Kategori 6', 'Status 6', 'Tanggal 6', 'Waktu 6', 'Tempat 6', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(7, 'Kegiatan 7', 'Penyelenggara 7', 'Kategori 7', 'Status 7', 'Tanggal 7', 'Waktu 7', 'Tempat 7', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reprehenderit voluptate asperiores voluptatem corrupti, dolore, autem, saepe facere provident sit odit dolor! Omnis harum adipisci sint! Cupiditate vel dicta amet!'),
(10, 'Test', 'test', 'test', 'test', 'test', 'test', 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `version` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `version`, `class`, `group`, `namespace`, `time`, `batch`) VALUES
(35, '2022-09-22-064607', 'App\\Database\\Migrations\\Event', 'default', 'App', 1671761175, 1),
(36, '2022-10-19-000903', 'App\\Database\\Migrations\\Users', 'default', 'App', 1671761175, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` int(5) DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `username`, `email`, `password`, `role`) VALUES
(1, 'Novannn', 'novan', 'novan@gmail.com', '$2y$10$GS0pfeFhG007nw3puKMYLebw4O7OR87lDLs9ayLZW9cs5POQMQBNm', 2),
(2, 'Pradana', 'pradana', 'pradana@gmail.com', '$2y$10$GS0pfeFhG007nw3puKMYLebw4O7OR87lDLs9ayLZW9cs5POQMQBNm', 2),
(3, 'Admin', 'admin', 'admin@gmail.com', '$2y$10$d3t4Evdr9k17YZLkYdbgzeFNa1/.T.l6uwfZdlcGqpNr3uzMiNJbC', 1),
(4, 'User', 'user', 'user@gmail.vom', '$2y$10$WXwPc1wLnHRAwGz.D1pfF./3GxqsC8U4GAaD8YysdTK21VmlbFmIy', 2),
(6, 'test 123', 'test', 'test@gmail.com', '$2y$10$GS0pfeFhG007nw3puKMYLebw4O7OR87lDLs9ayLZW9cs5POQMQBNm', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
