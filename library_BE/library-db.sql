-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2021 at 06:03 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add buku', 7, 'add_buku'),
(26, 'Can change buku', 7, 'change_buku'),
(27, 'Can delete buku', 7, 'delete_buku'),
(28, 'Can view buku', 7, 'view_buku'),
(29, 'Can add kategori buku', 8, 'add_kategori'),
(30, 'Can change kategori buku', 8, 'change_kategori'),
(31, 'Can delete kategori buku', 8, 'delete_kategori'),
(32, 'Can view kategori buku', 8, 'view_kategori'),
(33, 'Can add pelanggan', 9, 'add_pelanggan'),
(34, 'Can change pelanggan', 9, 'change_pelanggan'),
(35, 'Can delete pelanggan', 9, 'delete_pelanggan'),
(36, 'Can view pelanggan', 9, 'view_pelanggan'),
(37, 'Can add transaksi buku', 10, 'add_transaksi'),
(38, 'Can change transaksi buku', 10, 'change_transaksi'),
(39, 'Can delete transaksi buku', 10, 'delete_transaksi'),
(40, 'Can view transaksi buku', 10, 'view_transaksi');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$216000$Pc8iTujnVVAj$SuuJ/gZilMMjo745YkRXUTa48cn/d3swPr7pdh9dvdU=', '2021-05-02 12:51:00.337232', 1, 'admin', '', '', 'admin@sunson.xyz', 1, 1, '2021-04-30 10:37:08.645921');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `isbn_code` varchar(20) NOT NULL,
  `author` varchar(25) NOT NULL,
  `publisher` varchar(30) NOT NULL,
  `year_publish` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id`, `title`, `isbn_code`, `author`, `publisher`, `year_publish`) VALUES
(16, 'Filosofi Teras', 'ISBN-19029191-2021', 'Henry Manampiring', 'Kompas Gramedia', '2021'),
(17, 'Seni Hidup Minimalis', 'ISBN-19029200-2021', 'Francine Jay', 'Kompas Gramedia', '2021'),
(18, 'Berkisar Merah', 'ISBN-19029800-2021', 'Ahmad Tauhari', 'Kompas Gramedia', '2021'),
(19, 'Sebuah Seni Untuk Bersikap Bodo Amat', 'ISBN-19029101-2021', 'Mark Manson', 'Kompas Gramedia', '2021');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL
) ;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2021-05-01 07:46:12.833192', '1', 'Buku object (1)', 1, '[{\"added\": {}}]', 7, 1),
(2, '2021-05-01 07:52:50.293797', '2', 'Buku object (2)', 1, '[{\"added\": {}}]', 7, 1),
(3, '2021-05-01 07:59:21.838884', '4', 'Buku object (4)', 3, '', 7, 1),
(4, '2021-05-02 05:42:58.951727', '16', 'Buku object (16)', 1, '[{\"added\": {}}]', 7, 1),
(5, '2021-05-02 05:43:16.441519', '16', 'Buku object (16)', 2, '[]', 7, 1),
(6, '2021-05-02 05:43:47.561042', '17', 'Buku object (17)', 1, '[{\"added\": {}}]', 7, 1),
(7, '2021-05-02 05:44:15.037122', '18', 'Buku object (18)', 1, '[{\"added\": {}}]', 7, 1),
(8, '2021-05-02 05:45:06.216166', '19', 'Buku object (19)', 1, '[{\"added\": {}}]', 7, 1),
(9, '2021-05-02 05:46:54.121171', '1', 'Kategori object (1)', 1, '[{\"added\": {}}]', 8, 1),
(10, '2021-05-02 05:47:13.394820', '2', 'Kategori object (2)', 1, '[{\"added\": {}}]', 8, 1),
(11, '2021-05-02 05:47:34.989935', '3', 'Kategori object (3)', 1, '[{\"added\": {}}]', 8, 1),
(12, '2021-05-02 05:48:04.559642', '4', 'Kategori object (4)', 1, '[{\"added\": {}}]', 8, 1),
(13, '2021-05-02 05:49:24.501848', '1', 'Pelanggan object (1)', 1, '[{\"added\": {}}]', 9, 1),
(14, '2021-05-02 05:50:10.468995', '2', 'Pelanggan object (2)', 1, '[{\"added\": {}}]', 9, 1),
(15, '2021-05-02 05:51:07.583013', '3', 'Pelanggan object (3)', 1, '[{\"added\": {}}]', 9, 1),
(16, '2021-05-02 05:51:56.228025', '1', 'Transaksi object (1)', 1, '[{\"added\": {}}]', 10, 1),
(17, '2021-05-02 05:52:16.322553', '2', 'Transaksi object (2)', 1, '[{\"added\": {}}]', 10, 1),
(18, '2021-05-02 05:52:37.747258', '3', 'Transaksi object (3)', 1, '[{\"added\": {}}]', 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(7, 'api', 'buku'),
(8, 'api', 'kategori'),
(9, 'api', 'pelanggan'),
(10, 'api', 'transaksi'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2021-04-30 10:27:08.269137'),
(2, 'auth', '0001_initial', '2021-04-30 10:27:08.869120'),
(3, 'admin', '0001_initial', '2021-04-30 10:27:10.053390'),
(4, 'admin', '0002_logentry_remove_auto_add', '2021-04-30 10:27:10.293396'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2021-04-30 10:27:10.333378'),
(6, 'contenttypes', '0002_remove_content_type_name', '2021-04-30 10:27:10.509376'),
(7, 'auth', '0002_alter_permission_name_max_length', '2021-04-30 10:27:10.605381'),
(8, 'auth', '0003_alter_user_email_max_length', '2021-04-30 10:27:10.661387'),
(9, 'auth', '0004_alter_user_username_opts', '2021-04-30 10:27:10.741411'),
(10, 'auth', '0005_alter_user_last_login_null', '2021-04-30 10:27:10.893391'),
(11, 'auth', '0006_require_contenttypes_0002', '2021-04-30 10:27:10.901383'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2021-04-30 10:27:10.933413'),
(13, 'auth', '0008_alter_user_username_max_length', '2021-04-30 10:27:11.037376'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2021-04-30 10:27:11.173384'),
(15, 'auth', '0010_alter_group_name_max_length', '2021-04-30 10:27:11.277395'),
(16, 'auth', '0011_update_proxy_permissions', '2021-04-30 10:27:11.309395'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2021-04-30 10:27:11.373400'),
(18, 'sessions', '0001_initial', '2021-04-30 10:27:11.485387'),
(19, 'api', '0001_create_new_table', '2021-05-01 07:10:44.806358');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('f8kdxs0f6gbhf2ys0gnqe6pd0xyhfwjo', '.eJxVjEEOwiAQRe_C2pBCKTO6dN8zkGEYpGpoUtqV8e7apAvd_vfef6lA21rC1mQJU1IXZdTpd4vED6k7SHeqt1nzXNdlinpX9EGbHuckz-vh_h0UauVbQ9dJD2fXxyF5SZhQPHvnMxOgE0QeKBsAY9CjBesYvQC5nB1bjqjeH9lGN8o:1lcmnp:ypLJlrpTGuZO6b9lPtGHi59wj7pPyVxM6cP9lPFD8ek', '2021-05-15 10:24:49.491175');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `isbn_code` varchar(20) NOT NULL,
  `title` varchar(30) NOT NULL,
  `name_category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `isbn_code`, `title`, `name_category`) VALUES
(1, 'ISBN-19029191-2021', 'Filosofi Teras', 'Self Improvement'),
(2, 'ISBN-19029200-2021', 'Seni Hidup Minimalis', 'Self Improvement'),
(3, 'ISBN-19029800-2021', 'Berkisar Merah', 'Novel'),
(4, 'ISBN-19029101-2021', 'Sebuah Seni Untuk Bersikap Bod', 'Self Improvement');

-- --------------------------------------------------------

--
-- Table structure for table `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `handphone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `join_date` varchar(25) NOT NULL,
  `end_date` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pelanggan`
--

INSERT INTO `pelanggan` (`id`, `first_name`, `last_name`, `address`, `handphone`, `email`, `join_date`, `end_date`) VALUES
(1, 'Mamat', 'Sauri', 'Jln Bengawan No 17, Jakarta.', '08129381293', 'mamat@sauri.com', '1 Januari 2021', '1 Desember 2021'),
(2, 'Jajang', 'Karpidin', 'Jln Lengkong No.90, Bandung', '08123791900', 'Jajang@mail.com', '1 Januari 2021', '1 Desember 2021'),
(4, 'Riki', 'Subagja', 'Jln. Kaptain Tendean No.80, Jakarta', '08123989119', 'riki@subagja.com', '1 May 2021', '30 Desember 2021'),
(5, 'Amar', 'Nanda', 'Jln. Kaptain Tendean No.80, Bandung', '08122343434', 'amar@amarnanda.com', '1 May 2021', '30 Desember 2021'),
(6, 'Koreng', 'Nandana', 'Jln. Kaptain Tendean No.81, Bandung', '0812234343423', 'koreng@nandana.com', '1 May 2021', '30 Desember 2021');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `start_date_borrow` varchar(25) NOT NULL,
  `end_date_borrow` varchar(25) NOT NULL,
  `date_return` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `start_date_borrow`, `end_date_borrow`, `date_return`) VALUES
(4, '1 May 2021', '14 May 2021', '15 May 2021'),
(5, '20 May 2021', '24 May 2021', '25 May 2021'),
(6, '19 May 2021', '20 May 2021', '21 May 2021'),
(7, '20 May 2021', '22 May 2021', '23 May 2021'),
(8, '15 May 2021', '17 May 2021', '18 May 2021'),
(9, '23 May 2021', '25 May 2021', '26 May 2021');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pelanggan`
--
ALTER TABLE `pelanggan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
