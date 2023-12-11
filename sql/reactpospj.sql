-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2023 at 06:35 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactpospj`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_allusers`
--

CREATE TABLE `tbl_allusers` (
  `a_id` int(11) NOT NULL,
  `a_username` varchar(50) CHARACTER SET utf8 NOT NULL,
  `a_password` varchar(50) CHARACTER SET utf8 NOT NULL,
  `a_prefixname` varchar(10) CHARACTER SET utf8 NOT NULL,
  `a_firstname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `a_lastname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `a_img` varchar(200) CHARACTER SET utf8 NOT NULL,
  `a_address` varchar(150) CHARACTER SET utf8 NOT NULL,
  `a_email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `a_level` varchar(20) CHARACTER SET utf8 NOT NULL,
  `a_phone` varchar(10) CHARACTER SET utf8 NOT NULL,
  `a_data_save` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_allusers`
--

INSERT INTO `tbl_allusers` (`a_id`, `a_username`, `a_password`, `a_prefixname`, `a_firstname`, `a_lastname`, `a_img`, `a_address`, `a_email`, `a_level`, `a_phone`, `a_data_save`) VALUES
(3, 'admin', '1', '', '', '', '', '', '', 'admin', '', '2023-08-16 14:34:35'),
(5, 'm', '1', '', '', '', '', '', '', 'usermember', '', '2023-08-16 14:34:17'),
(6, 'a', '1', '', '', '', '', '', '', '', '', '2023-08-16 14:34:12'),
(7, 's', '1', '', '', '', '', '', '', 'staffsale', '', '2023-08-16 14:34:03'),
(8, 'mm', '1', 's', 's', 's', 's', 's', 's', 'USERMEMBER', '2', '2023-08-19 15:26:13');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_allusers`
--
ALTER TABLE `tbl_allusers`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_allusers`
--
ALTER TABLE `tbl_allusers`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
