-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Czas generowania: 06 Mar 2022, 12:34
-- Wersja serwera: 5.7.34
-- Wersja PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `megak_todo2`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Task`
--

CREATE TABLE `Task` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `taskTodo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `Task`
--

INSERT INTO `Task` (`id`, `taskTodo`) VALUES
('6ce810d6-9224-41f9-b3f4-ae9fea927383', 'kknkn````'),
('ff0944c4-a549-4e5a-bc89-d9c677ccf79e', 'mnmn'),
('0367f308-5fd1-4704-bea9-451858040544', 'xz`zxzsccs'),
('ec0a34f4-0582-4e18-a6b2-1cbceb4c8756', 'n n'),
('1f1a3697-4117-4cc4-9feb-06176a938686', 'asfasfa'),
('116d5b45-ee92-49ba-be1d-3138dccbd68c', 'sdcassc'),
('1379e55d-3ea0-44a4-904b-24a99be62c64', 'cacssca'),
('1bac143c-e7c1-458b-bc82-3e5915acb81c', 'vzxvzxvzv'),
('03bb32c1-85ea-46cf-86e7-4ef89d32f6b4', 'zxvzxvzxv'),
('2fa584e2-207d-4c82-a2eb-15ba21c6c130', 'xvzxvz'),
('1a843ca0-e533-4c30-9baf-46612f3a4221', 'zxvzxvzvz'),
('ce67ca81-d31c-4e33-aa97-fe6f6f9df254', 'zxvzxv'),
('519dec05-a16c-4896-9587-886d194a239a', 'zxvzxvzxv');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
