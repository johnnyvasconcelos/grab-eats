-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: db_restaurante
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `dados`
--

DROP TABLE IF EXISTS `dados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dados` (
  `nome_restaurante` varchar(25) DEFAULT NULL,
  `categoria` varchar(15) DEFAULT NULL,
  `abertura` varchar(5) DEFAULT NULL,
  `fechamento` varchar(5) DEFAULT NULL,
  `boas_vindas` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados`
--

LOCK TABLES `dados` WRITE;
/*!40000 ALTER TABLE `dados` DISABLE KEYS */;
INSERT INTO `dados` VALUES ('Restaurante Alvorada','Restaurante','18:00','23:00','Seja bem-vindo ao Restaurante Alvorada, onde você encontrará o melhor atendimento e sabor inigualável!');
/*!40000 ALTER TABLE `dados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `usuario` varchar(50) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) DEFAULT NULL,
  `em_preparo` tinyint(1) DEFAULT NULL,
  `preco` varchar(10) DEFAULT NULL,
  `mesa` int DEFAULT NULL,
  `para_levar` tinyint(1) DEFAULT NULL,
  `nome_cliente` varchar(80) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `foto` varchar(80) DEFAULT NULL,
  `nome_produto` varchar(80) DEFAULT NULL,
  `ingredientes` varchar(250) DEFAULT NULL,
  `preco` varchar(10) DEFAULT NULL,
  `categoria_produto` varchar(20) DEFAULT NULL,
  `descricao_produto` text,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'hamburguer.jpg','Sorvete de Leite de Burra','Carne bovina, queijo, alface, tomate, maionese','15.90','Lançamentos',NULL,'Feito com queijo ralado e com as sobras que o povo deixa na mesa'),(2,'pizza_margarita.jpg','Pizza Margarita','Molho de tomate, queijo mozzarella, manjericão','39.99','Principais',NULL,'Uma pizza clássica italiana com molho de tomate, queijo mozzarella e manjericão fresco, simples e saborosa.'),(3,'sorvete_chocolate.jpg','Sorvete de Chocolate','Chocolate, leite, açúcar','12.99','Sobremesas',NULL,'Sorvete cremoso com um sabor intenso de chocolate, ideal para a sobremesa após uma refeição deliciosa.'),(4,'suco_laranja.jpg','Suco de Laranja Natural','Laranja, água, açúcar','8.99','Bebidas',NULL,'Refrescante e natural, feito com laranjas frescas, perfeito para acompanhar qualquer refeição.'),(5,'bruschetta.jpg','Bruschetta de Tomate','Pão italiano, tomate, manjericão, azeite','19.99','Entradas',NULL,'Uma entrada leve e saborosa com pão italiano crocante, tomate fresco e um toque de azeite e manjericão.'),(6,'lançamento1.jpg','É um prato de comida','Ingrediente A, Ingrediente B','26.90','Lançamentos',NULL,'Eu não sei o que vai, mas deve ter sal se não for doce'),(7,'lançamento2.jpg','Macarrão Sertanejo','Ingrediente C, Ingrediente D','18.50','Lançamentos',NULL,'Descrição do produto Lançamento 2'),(8,'lançamento3.jpg','Lançamento 3','Ingrediente E, Ingrediente F','20.00','Lançamentos',NULL,'Descrição do produto Lançamento 3'),(9,'lançamento4.jpg','Lançamento 4','Ingrediente G, Ingrediente H','22.50','Lançamentos',NULL,'Descrição do produto Lançamento 4'),(10,'sobremesa1.jpg','Sobremesa 1','Chocolate, Baunilha','10.90','Sobremesas',NULL,'Descrição do produto Sobremesa 1'),(11,'sobremesa2.jpg','Sobremesa 2','Morango, Creme','12.50','Sobremesas',NULL,'Descrição do produto Sobremesa 2'),(12,'sobremesa3.jpg','Sobremesa 3','Coco, Doce de leite','14.00','Sobremesas',NULL,'Descrição do produto Sobremesa 3'),(13,'sobremesa4.jpg','Sobremesa 4','Framboesa, Creme','16.90','Sobremesas',NULL,'Descrição do produto Sobremesa 4'),(14,'bebida1.jpg','Bebida 1','Água, Gás','5.90','Bebidas',NULL,'Descrição do produto Bebida 1'),(15,'bebida2.jpg','Bebida 2','Suco de Laranja, Açúcar','8.00','Bebidas',NULL,'Descrição do produto Bebida 2'),(16,'bebida3.jpg','Bebida 3','Refrigerante, Gelo','6.50','Bebidas',NULL,'Descrição do produto Bebida 3'),(17,'bebida4.jpg','Bebida 4','Água de Coco, Gelo','7.90','Bebidas',NULL,'Descrição do produto Bebida 4'),(18,'entrada1.jpg','Entrada 1','Queijo, Presunto','9.50','Entradas',NULL,'Descrição do produto Entrada 1'),(19,'entrada2.jpg','Entrada 2','Tomate, Manjericão','11.00','Entradas',NULL,'Descrição do produto Entrada 2'),(20,'entrada3.jpg','Entrada 3','Salada, Molho','13.00','Entradas',NULL,'Descrição do produto Entrada 3'),(21,'entrada4.jpg','Entrada 4','Sopa, Creme','14.90','Entradas',NULL,'Descrição do produto Entrada 4'),(22,'principal1.jpg','Prato Principal 1','Frango, Arroz','25.00','Principais',NULL,'Descrição do produto Principal 1'),(23,'principal2.jpg','Prato Principal 2','Carne, Batata','28.50','Principais',NULL,'Descrição do produto Principal 2'),(24,'principal3.jpg','Prato Principal 3','Peixe, Legumes','30.00','Principais',NULL,'Descrição do produto Principal 3'),(25,'principal4.jpg','Prato Principal 4','Lasanha, Queijo','32.90','Principais',NULL,'Descrição do produto Principal 4');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-04 17:19:04
