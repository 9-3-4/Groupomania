-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `t_avis`
--

DROP TABLE IF EXISTS `t_avis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_avis` (
  `id_post` int NOT NULL AUTO_INCREMENT,
  `auteur` varchar(45) DEFAULT NULL,
  `avis` int DEFAULT NULL,
  `t_user_id` int NOT NULL,
  `t_post_id` int NOT NULL,
  PRIMARY KEY (`id_post`),
  UNIQUE KEY `ID_post_UNIQUE` (`id_post`),
  KEY `fk_T_avis_T_User1_idx` (`t_user_id`),
  KEY `fk_T_avis_T_Post1_idx` (`t_post_id`),
  CONSTRAINT `fk_T_avis_T_Post1` FOREIGN KEY (`t_post_id`) REFERENCES `t_post` (`id`),
  CONSTRAINT `fk_T_avis_T_User1` FOREIGN KEY (`t_user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_avis`
--

LOCK TABLES `t_avis` WRITE;
/*!40000 ALTER TABLE `t_avis` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_avis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_commentaire`
--

DROP TABLE IF EXISTS `t_commentaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_commentaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `auteur_post` varchar(45) DEFAULT NULL,
  `commentaire` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `t_post_id` int NOT NULL,
  `t_user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ID_UNIQUE` (`id`),
  UNIQUE KEY `date_UNIQUE` (`date`),
  KEY `fk_T_commentaire_T_Post_idx` (`t_post_id`),
  KEY `fk_T_commentaire_T_User1_idx` (`t_user_id`),
  CONSTRAINT `fk_T_commentaire_T_Post` FOREIGN KEY (`t_post_id`) REFERENCES `t_post` (`id`),
  CONSTRAINT `fk_T_commentaire_T_User1` FOREIGN KEY (`t_user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_commentaire`
--

LOCK TABLES `t_commentaire` WRITE;
/*!40000 ALTER TABLE `t_commentaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_commentaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_post`
--

DROP TABLE IF EXISTS `t_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) DEFAULT NULL,
  `contenu` varchar(160) DEFAULT NULL,
  `auteur` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `t_user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ID_UNIQUE` (`id`),
  KEY `fk_T_Post_T_User1_idx` (`t_user_id`),
  CONSTRAINT `fk_T_Post_T_User1` FOREIGN KEY (`t_user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_post`
--

LOCK TABLES `t_post` WRITE;
/*!40000 ALTER TABLE `t_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_status`
--

DROP TABLE IF EXISTS `t_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_status` (
  `id_status` int NOT NULL,
  `administrateur` int DEFAULT NULL,
  `moderateur` int DEFAULT NULL,
  `utilisateur` int DEFAULT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_status`
--

LOCK TABLES `t_status` WRITE;
/*!40000 ALTER TABLE `t_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(16) DEFAULT NULL,
  `prenom` varchar(16) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `service` varchar(45) DEFAULT NULL,
  `motdepasse` varchar(255) DEFAULT NULL,
  `statut` varchar(20) DEFAULT NULL,
  `t_status_id_status` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Email_UNIQUE` (`email`),
  UNIQUE KEY `MDP_UNIQUE` (`motdepasse`),
  KEY `fk_T_User_T_Status1_idx` (`t_status_id_status`),
  CONSTRAINT `fk_T_User_T_Status1` FOREIGN KEY (`t_status_id_status`) REFERENCES `t_status` (`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (17,'sam',NULL,'sam@gmail.fr',NULL,'$2b$10$Ur5LjknhT3fTxwh0L1EJ.OJbhVsaB3zXdCbliLFay5iT7w6729oqC',NULL,NULL),(20,'yann',NULL,'yann@gmail.fr',NULL,'$2b$10$wUd3DyXNKVBhQp.AnwONm.QV4mL2XG1q90yatC0k5Zy4RIZe1POgG',NULL,NULL),(21,'arthur',NULL,'arthur@gmail.fr',NULL,'$2b$10$lMWYtrFEul31pJCm9M5NI.inkc4mf1JIlSPlWoLJjf8nErqlPu8si',NULL,NULL),(22,'sky',NULL,'sky@gmail.fr',NULL,'$2b$10$Yv.4In.iWOHuEad8f274JenA7Rv4ziiDOFbdLYgZm7su9JXxBIeRy',NULL,NULL);
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'groupomania'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-30 18:19:32
