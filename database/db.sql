CREATE DATABASE  IF NOT EXISTS `foodiedb3` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `foodiedb3`;
-- MySQL dump 10.13  Distrib 9.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: foodiedb3
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productQuantity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_10` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_11` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_12` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_13` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_14` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_15` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_16` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_17` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_18` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_20` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_21` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_22` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_23` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_24` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_25` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_26` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_27` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_28` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_29` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_30` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_4` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_6` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_8` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_9` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (20,1,'2025-03-05 11:58:52','2025-03-05 11:58:52',NULL,21),(28,1,'2025-03-05 23:44:33','2025-03-05 23:44:33',NULL,NULL);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) DEFAULT NULL,
  `categoryImage` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Rice','https://www.savoryexperiments.com/wp-content/uploads/2022/11/Fried-Rice-9.jpg','2025-01-21 18:17:52','2025-01-21 18:17:52'),(2,'Pizza','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s','2025-01-26 04:53:05','2025-01-26 04:53:05'),(3,'Burger','https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg','2025-01-26 04:54:05','2025-01-26 04:54:05'),(4,'Beverages','https://mns.sidechef.com/recipe/5742dc5d-656e-4bbf-984b-299c02c2a471.jpg','2025-01-26 04:56:55','2025-01-26 04:56:55'),(5,'Desserts','https://www.tasteofhome.com/wp-content/uploads/2018/01/Ice-Cream-Sandwich-Dessert_EXPS_FT22_27091_ST_09_07_1.jpg','2025-01-26 04:59:37','2025-01-26 04:59:37');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productQuantity` int DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `paymentId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `paymentId` (`paymentId`),
  KEY `productId` (`productId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_10` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_11` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_12` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_13` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_14` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_15` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_16` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_17` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_18` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_19` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_20` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_21` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_22` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_23` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_24` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_25` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_26` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_27` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_28` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_29` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_30` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_31` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_32` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_33` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_34` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_35` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_36` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_37` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_38` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_39` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_40` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_41` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_42` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_43` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_44` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_45` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_6` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_7` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_8` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_9` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (13,10,19.9,'dehiwala,mount lavenia','2025-03-06 00:15:22','2025-03-06 00:15:22',12,13,16),(19,1,6.49,'kandy','2025-03-06 02:01:21','2025-03-06 02:01:21',13,19,3),(22,1,9.99,'ee','2025-03-06 04:51:00','2025-03-06 04:51:00',18,22,4),(23,1,15.99,'maharagama','2025-03-06 08:23:08','2025-03-06 08:23:08',19,23,8);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paymentMode` varchar(255) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,'Card',6.49,'2025-02-28 14:14:14','2025-02-28 14:14:14'),(2,'Card',7.99,'2025-03-05 11:46:32','2025-03-05 11:46:32'),(3,'Cash on Delivery',14.99,'2025-03-05 11:47:47','2025-03-05 11:47:47'),(4,'Cash on Delivery',2.49,'2025-03-05 11:47:59','2025-03-05 11:47:59'),(5,'Card',39.95,'2025-03-05 11:48:12','2025-03-05 11:48:12'),(6,'Cash on Delivery',22.47,'2025-03-05 11:48:29','2025-03-05 11:48:29'),(7,'Card',5.99,'2025-03-05 11:58:12','2025-03-05 11:58:12'),(8,'Cash on Delivery',5.99,'2025-03-05 13:16:32','2025-03-05 13:16:32'),(9,'Card',15.99,'2025-03-06 00:04:04','2025-03-06 00:04:04'),(10,'Cash on Delivery',15.99,'2025-03-06 00:05:57','2025-03-06 00:05:57'),(11,'Cash on Delivery',52.45,'2025-03-06 00:07:03','2025-03-06 00:07:03'),(12,'Card',11.97,'2025-03-06 00:11:23','2025-03-06 00:11:23'),(13,'Card',19.9,'2025-03-06 00:15:22','2025-03-06 00:15:22'),(14,'Cash on Delivery',15.99,'2025-03-06 00:16:27','2025-03-06 00:16:27'),(15,'Card',7.49,'2025-03-06 01:48:38','2025-03-06 01:48:38'),(16,'Cash on Delivery',9.99,'2025-03-06 01:49:52','2025-03-06 01:49:52'),(17,'Card',6.49,'2025-03-06 01:59:34','2025-03-06 01:59:34'),(18,'Card',6.49,'2025-03-06 01:59:55','2025-03-06 01:59:55'),(19,'Card',6.49,'2025-03-06 02:01:21','2025-03-06 02:01:21'),(20,'Cash on Delivery',7.99,'2025-03-06 02:03:39','2025-03-06 02:03:39'),(21,'Cash on Delivery',6.49,'2025-03-06 02:05:36','2025-03-06 02:05:36'),(22,'Card',9.99,'2025-03-06 04:51:00','2025-03-06 04:51:00'),(23,'Cash on Delivery',15.99,'2025-03-06 08:23:08','2025-03-06 08:23:08'),(24,'Card',13.49,'2025-03-06 09:03:18','2025-03-06 09:03:18');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) DEFAULT NULL,
  `productPrice` float DEFAULT NULL,
  `productQuantity` varchar(255) DEFAULT NULL,
  `productImageURL` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_10` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_11` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_12` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_13` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_14` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_15` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_5` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_6` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_7` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_8` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_9` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Basmati Rice',8,'50','https://thechutneylife.com/wp-content/uploads/2021/03/Thaibasilfriedrice-reshoot-3-scaled.jpg','2025-02-28 19:20:30','2025-03-06 09:04:38',1),(2,'Jasmine Rice',7.99,'40','https://thechutneylife.com/wp-content/uploads/2021/03/VB-600x899.jpeg','2025-02-28 19:20:30','2025-02-28 13:56:49',1),(3,'Brown Rice',6.49,'30','https://thechutneylife.com/wp-content/uploads/2023/06/Tandoori-Fried-Rice-1-The-Chutney-Life-2-600x900.jpg','2025-02-28 19:20:30','2025-02-28 13:57:16',1),(4,'Sushi Rice',9.99,'25','https://thechutneylife.com/wp-content/uploads/2023/06/Broccoli-Edamame-Rice-The-Chutney-Life-4-1-600x900.jpg','2025-02-28 19:20:30','2025-02-28 13:58:18',1),(5,'Wild Rice',10.49,'20','https://thechutneylife.com/wp-content/uploads/2023/06/Veggie-Brown-Rice-The-Chutney-Life-5-1-600x400.jpg','2025-02-28 19:20:30','2025-02-28 13:58:01',1),(8,'BBQ Chicken Pizza',15.99,'18','https://adminsc.pizzahut.lk//images/mainmenu/209e7feb-7c0b-4fc4-8019-ab2a9e3406a9.jpg','2025-02-28 19:20:30','2025-02-28 14:03:10',2),(9,'Vegetarian Pizza',13.49,'12','https://adminsc.pizzahut.lk//images/mainmenu/bd42b87d-ab7c-42c2-a8af-b461efaad48d.jpg','2025-02-28 19:20:30','2025-02-28 14:03:30',2),(10,'Hawaiian Pizza',14.49,'17','https://adminsc.pizzahut.lk//images/mainmenu/c0df92e8-c6c1-43bb-8630-ac2631abf5ee.jpg','2025-02-28 19:20:30','2025-02-28 14:04:23',2),(11,'Cheeseburger',8.49,'30','https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_3426-005_DoubleQuarterPounderwithCheese_1564x1564-1:nutrition-calculator-tile','2025-02-28 19:20:30','2025-02-28 14:05:47',3),(12,'Chicken Burger',7.99,'25','https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0005-999_BigMac_1564x1564-1:nutrition-calculator-tile','2025-02-28 19:20:30','2025-02-28 14:06:04',3),(14,'Double Beef Burger',9.99,'15','https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0592-999_McDouble_Alt_1564x1564-1:nutrition-calculator-tile','2025-02-28 19:20:30','2025-02-28 14:07:00',3),(15,'Fish Burger',8.99,'18','https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg','2025-02-28 19:20:30','2025-03-05 11:37:11',3),(16,'Coca-Cola',1.99,'50','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSll2EBEgdMyATPaqvqlwa3hfMzVjEj0j8Q5j_pLusPFEXHHCy0uL7ZRskXbUQIR1Qpab3Gt2DnBRek1Wiu43bLCPj-QXlOGddTL9J8jxU','2025-02-28 19:20:30','2025-03-05 11:37:49',4),(17,'Orange Juice',3.49,'40','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayX_2LO37O_TH446RBHh_dDMQ7KqbvuFLWw&s','2025-02-28 19:20:30','2025-03-05 11:38:26',4),(19,'Iced Tea',2.49,'30','https://www.eatthis.com/wp-content/uploads/sites/4/2019/05/iced-tea.jpg?quality=82&strip=1','2025-02-28 19:20:30','2025-03-05 11:40:50',4),(20,'Espresso',3.99,'20','https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg','2025-02-28 19:20:30','2025-03-05 11:41:30',4),(21,'Chocolate Cake',6.99,'25','https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-01-chocolate-cake%2Fchocolate-cake-0632-edit-32','2025-02-28 19:20:30','2025-03-05 11:42:37',5),(22,'Ice Cream Sundae',5.99,'30','https://icecreamfromscratch.com/wp-content/uploads/2022/05/Ice-Cream-Sundae-1.2-720x405.jpg','2025-02-28 19:20:30','2025-03-05 11:43:03',5),(23,'Cheesecake',7.49,'20','https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319','2025-02-28 19:20:30','2025-03-05 11:43:31',5),(25,'Brownie',5.49,'22','https://recipesblob.oetker.in/assets/0e7149831748458c9502e361e889f726/964x526/brownie-with-vanilla-ice-cream.jpg','2025-02-28 19:20:30','2025-03-05 11:45:23',5),(28,'Kaha bath',3,NULL,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORJpemXgfptLgNHFdo3wY7HGyYQDXB8fpmA&s','2025-03-06 08:25:53','2025-03-06 08:25:53',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userroles`
--

DROP TABLE IF EXISTS `userroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userroles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userroles`
--

LOCK TABLES `userroles` WRITE;
/*!40000 ALTER TABLE `userroles` DISABLE KEYS */;
INSERT INTO `userroles` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `userroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactNo` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_10` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_11` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_12` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_13` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_14` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_15` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_4` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_5` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_6` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_7` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_8` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_9` FOREIGN KEY (`roleId`) REFERENCES `userroles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'Pramith','Bhashitha','bhashitha1152@gmail.com','0710832385','bhashitha','$2b$10$RDW4OEm9BGStKTmnJDlyKuW.Y8.KrTF9GwtVaf25ug.3xG6rawrdu','no 26 gurugammana manikkwaththa','2025-03-06 00:00:08','2025-03-06 00:00:08',1),(12,'Prasad','peris','prasad@gmail.com','0763456730','prasad','$2b$10$cUsKO09C1S1GSrBPH71zEe6TdcfQok3dpuvg.yjOtp/N1f9LOhlgq','dehiwala','2025-03-06 00:14:38','2025-03-06 00:14:38',2),(13,'Nirodha','gamlath','nirodha@gmail.com','0719083456','nirodha','$2b$10$XKjg/JLVNAq08wy0scSe5OOmW5uTnrN62G.t41yd/PZ6RyY3T4lMy','kotahena','2025-03-06 01:42:14','2025-03-06 01:42:14',2),(14,'Richard','perera','richard@gmail.com','0773456777','richard','$2b$10$LURGzpDNmmJnX.uYWaetF.FdNvZBwR5TsfJbFDJ/w77vTjmgjk1.i','south whales','2025-03-06 01:58:58','2025-03-06 04:49:07',2),(15,'Kanaka','herath','kanaka@gmail.com','0783456793','kanaka','$2b$10$oE1gfJbIZ33UZfwEmBbLw.XoPWVuq0HSX.cTQGOwu3/yx0MCb8eAC','mahiyanganaya','2025-03-06 02:02:46','2025-03-06 02:02:46',2),(18,'jdjdjd','ddd','ja@gmail.com','45666','jd','$2b$10$HWkpocNBSLXTi7CinRlGOOe4ZibDf45MFpq.wHse.BajXgFLWrDyG','cccc','2025-03-06 04:50:35','2025-03-06 04:50:35',2),(19,'Mr.Prabath ','Buddhika','prabathb@gmail.com','0764565237','prabath','$2b$10$hLMpm0HVfjXQz3gTZDfjqetddn4cYMv29AcOR/XZYZrac7zibkeXi','kolonnawa','2025-03-06 08:22:01','2025-03-06 08:24:22',2),(20,'MR.paman','randika','pamanr@gmail.com','0710832385','paman','$2b$10$v829nL2VqncJ5kcwG7pRkuqlMCkOBJtz1V4sZujwEXXovbtMQXgFu','hokandara','2025-03-06 09:00:58','2025-03-06 09:00:58',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'foodiedb3'
--

--
-- Dumping routines for database 'foodiedb3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-07 14:40:30
