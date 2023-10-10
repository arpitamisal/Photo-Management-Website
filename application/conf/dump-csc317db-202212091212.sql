-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (arm64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `fk_authorId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2020-05-25 00:25:00',
  PRIMARY KEY (`id`),
  KEY `postauthor` (`fk_authorId`),
  CONSTRAINT `postauthor` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (18,'Australia','Beautiful View','public/images/uploads/uploadImage-1670611588318-616485765.jpeg','public/images/uploads/thumbnail-uploadImage-1670611588318-616485765.jpeg',7,'2020-05-25 00:25:00'),(19,'Croatia','Vacation','public/images/uploads/uploadImage-1670611619035-605964538.jpeg','public/images/uploads/thumbnail-uploadImage-1670611619035-605964538.jpeg',7,'2020-05-25 00:25:00'),(20,'France ','Bonjour!','public/images/uploads/uploadImage-1670611676074-127231212.jpeg','public/images/uploads/thumbnail-uploadImage-1670611676074-127231212.jpeg',7,'2020-05-25 00:25:00'),(21,'Indonesia','Trip~','public/images/uploads/uploadImage-1670611709506-971384340.jpeg','public/images/uploads/thumbnail-uploadImage-1670611709506-971384340.jpeg',7,'2020-05-25 00:25:00'),(22,'Japan','Beautiful!','public/images/uploads/uploadImage-1670611968984-576466544.jpeg','public/images/uploads/thumbnail-uploadImage-1670611968984-576466544.jpeg',6,'2020-05-25 00:25:00'),(23,'Austria','Lake','public/images/uploads/uploadImage-1670611991124-245924226.jpeg','public/images/uploads/thumbnail-uploadImage-1670611991124-245924226.jpeg',6,'2020-05-25 00:25:00'),(24,'India','Namaste!','public/images/uploads/uploadImage-1670612022918-192282976.jpeg','public/images/uploads/thumbnail-uploadImage-1670612022918-192282976.jpeg',6,'2020-05-25 00:25:00'),(25,'London','UK!!','public/images/uploads/uploadImage-1670612119226-201584906.jpeg','public/images/uploads/thumbnail-uploadImage-1670612119226-201584906.jpeg',6,'2020-05-25 00:25:00'),(26,'Madrid','madridd!!','public/images/uploads/uploadImage-1670612142223-14363496.jpeg','public/images/uploads/thumbnail-uploadImage-1670612142223-14363496.jpeg',6,'2020-05-25 00:25:00'),(30,'Thailand','Thailand!','public/images/uploads/uploadImage-1670615009045-402293023.jpeg','public/images/uploads/thumbnail-uploadImage-1670615009045-402293023.jpeg',10,'2020-05-25 00:25:00');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `fk_authorId` int NOT NULL,
  `fk_postId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2020-05-25 00:25:00',
  PRIMARY KEY (`id`),
  KEY `commentauthor` (`fk_authorId`),
  KEY `commentpost` (`fk_postId`),
  CONSTRAINT `commentauthor` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `commentpost` FOREIGN KEY (`fk_postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (44,'WooWW\n',7,18,'2020-05-25 00:25:00'),(45,'Beautiful!!',7,18,'2020-05-25 00:25:00'),(46,'Beautiful!!',7,18,'2020-05-25 00:25:00'),(47,'AMAZINGGG VIEW\n',7,18,'2020-05-25 00:25:00'),(48,'I wanna go on a trip tooo\n\n',7,18,'2020-05-25 00:25:00'),(49,'WOWWW\n',7,19,'2020-05-25 00:25:00'),(50,'PRETTYYYY!!!\n',7,19,'2020-05-25 00:25:00'),(51,'I wannna go tooo!!',7,19,'2020-05-25 00:25:00'),(52,'Bonjour to you too!!\n',7,20,'2020-05-25 00:25:00'),(53,'Hellooo',7,20,'2020-05-25 00:25:00'),(54,'Did you go there alone? lmao',7,20,'2020-05-25 00:25:00'),(55,'I wanna go trekking ',7,20,'2020-05-25 00:25:00'),(56,'Wowww',7,21,'2020-05-25 00:25:00'),(57,'the weather looks goodd',7,21,'2020-05-25 00:25:00'),(58,'seemss foggyy\n',7,21,'2020-05-25 00:25:00'),(59,'That bridge looks scaryyy',7,21,'2020-05-25 00:25:00'),(60,'Woww',10,30,'2020-05-25 00:25:00');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2020-05-25 00:25:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'samplebcryp','sample2@gmail.com','$2b$04$oC0O7r2krEoVPuAdn30cWuAgSjSpPCypB58mRXwfKXA1iB5xpjoke','2020-05-25 00:25:00'),(7,'MaryJane','maryjane@gmail.com','$2b$04$pfNo1jT4OzZsJ2Eud5r3duSx0OZalxGnUGpnDA6JnxuxTtsuwzr5i','2020-05-25 00:25:00'),(8,'Arpita','amisal@gmail.com','$2b$04$n0QNFqVpoNV/L4TnaMqCj.C8ncszEZyVfhTX3PIiveloDcRAQ82DG','2020-05-25 00:25:00'),(9,'SAM','sam@mail.com','$2b$04$YsXaBEYQZMi5BcF.ZS/WN.33OwRb3TSAhgQmRCP7md6VhI9ixgtRi','2020-05-25 00:25:00'),(10,'Pam','pam@mail.com','$2b$04$kH/slCQQlOeGPdmVcWtq2.kj.ScdMCsQR.JT/fDejcK0sDcd/HHv.','2020-05-25 00:25:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-09 12:12:24
