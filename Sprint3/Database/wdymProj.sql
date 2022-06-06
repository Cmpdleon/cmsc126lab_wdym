-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: wdymProj
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `dict`
--

DROP TABLE IF EXISTS `dict`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dict` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `num` int DEFAULT NULL,
  `word` varchar(30) DEFAULT NULL,
  `def` varchar(125) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dict`
--

LOCK TABLES `dict` WRITE;
/*!40000 ALTER TABLE `dict` DISABLE KEYS */;
INSERT INTO `dict` VALUES (1,1,'all','the whole amount, quantity, or extent of'),(2,1,'all','as much as possible'),(3,2,'book','a set of written sheets of skin or paper or tablets of wood or ivory'),(4,2,'book','a set of written, printed, or blank sheets bound together between a front and back cover'),(5,3,'chair','a seat typically having four legs and a back for one person'),(6,3,'chair','an official seat or a seat of authority, state, or dignity'),(7,4,'door','a usually swinging or sliding barrier by which an entry is closed and opened'),(8,4,'door','a means of access or participation'),(9,5,'enough','in or to a degree or quantity that satisfies or that is sufficient or necessary for satisfaction'),(10,5,'enough','occurring in such quantity, quality, or scope as to fully meet demands, needs, or expectations'),(11,6,'friend','one attached to another by affection or esteem'),(12,6,'friend','one that is not hostile'),(13,7,'laugh','to show emotion (such as mirth, joy, or scorn) with a chuckle or explosive vocal sound'),(14,7,'laugh','to become amused or derisive'),(15,8,'noise','one that lacks an agreeable quality or is noticeably unpleasant or loud'),(16,8,'noise','any sound that is undesired or interferes with one\'s hearing of something'),(17,9,'speak','to utter words or articulate sounds with the ordinary voice'),(18,9,'speak','to express thoughts, opinions, or feelings orally'),(19,10,'zenith','the point of the celestial sphere that is directly opposite the nadir and vertically above the observer'),(21,10,'zenith','the highest point reached in the heavens by a celestial body');
/*!40000 ALTER TABLE `dict` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `score` int NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES (1,'user1',8,'2022-06-03 12:19:02'),(2,'user0',40,'2022-06-03 13:06:21'),(3,'user0',40,'2022-06-03 14:16:56'),(4,'user2',2,'2022-06-03 17:11:51'),(5,'user4',12,'2022-06-03 17:12:47'),(6,'user5',4,'2022-06-03 17:17:14'),(7,'itsame',16,'2022-06-05 07:58:57'),(8,'mario',10,'2022-06-05 08:01:39');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-05 16:12:34
