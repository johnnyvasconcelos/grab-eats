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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) DEFAULT NULL,
  `cpf` varchar(16) DEFAULT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Elizandro Messias','952.423.040-10','2025-03-07 13:59:46'),(2,'Ribeirinho Neves','101.010.101-01','2025-03-07 13:59:46'),(3,'Anastácio L','473.518.930-40','2025-03-07 13:59:46'),(4,'Ostaquimastio Durvisky','564.564.564-56','2025-03-07 13:59:46');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `delete_old_clients` AFTER INSERT ON `clientes` FOR EACH ROW BEGIN
    DELETE FROM clientes WHERE data_criacao < NOW() - INTERVAL 180 DAY;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `boas_vindas` varchar(250) DEFAULT NULL,
  `dias_funcionamento` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados`
--

LOCK TABLES `dados` WRITE;
/*!40000 ALTER TABLE `dados` DISABLE KEYS */;
INSERT INTO `dados` VALUES ('Restaurante Alvorada','Restaurante','18:00','23:00','Seja bem-vindo ao Restaurante Alvorada, onde você encontrará o melhor atendimento e sabor inigualável!',NULL);
/*!40000 ALTER TABLE `dados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_pedidos`
--

DROP TABLE IF EXISTS `log_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log_pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(255) NOT NULL,
  `nome_cliente` varchar(255) NOT NULL,
  `cpf_cliente` varchar(14) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `pendente` enum('pendente','pago') NOT NULL DEFAULT 'pendente',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_pedidos`
--

LOCK TABLES `log_pedidos` WRITE;
/*!40000 ALTER TABLE `log_pedidos` DISABLE KEYS */;
INSERT INTO `log_pedidos` VALUES (1,'É um prato de comida','Anastácio L','473.518.930-40',26.90,'pendente','2025-03-06 23:10:18'),(2,'Sorvete de Leite de Burra','Anastácio L','473.518.930-40',143.10,'pendente','2025-03-06 23:11:20');
/*!40000 ALTER TABLE `log_pedidos` ENABLE KEYS */;
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
  `nome` varchar(150) DEFAULT NULL,
  `em_preparo` tinyint(1) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `mesa` varchar(80) DEFAULT NULL,
  `para_levar` tinyint(1) DEFAULT NULL,
  `nome_cliente` varchar(80) DEFAULT NULL,
  `cpf` varchar(16) DEFAULT NULL,
  `quantidade` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'Desconhecido',1,15.90,NULL,0,'Nome do Cliente','CPF do Cliente',1),(2,'Produto Desconhecido',0,15.90,NULL,0,'Jhonatan Vasconcelos','47576162361',1),(3,'Produto Desconhecido',0,22.50,NULL,0,'george washingtom','29312312312',1),(4,'Produto Desconhecido',1,20.00,NULL,0,'Donovam Mcmillan','29319231231',1),(5,'Sorvete de Leite de Burra',1,15.90,NULL,0,'suzam delaila','101.023.102-31',1),(6,'Lançamento 3',1,20.00,NULL,0,'Eleonora M','391.239.129-39',1),(7,'Lançamento 4',1,22.50,NULL,0,'Aligator Detox','234.232.234-44',1),(8,'Macarrão Sertanejo',1,18.50,NULL,0,'Naruto','293.919.231-92',1),(9,'Macarrão Sertanejo',1,18.50,NULL,1,'dowtwisk','192.919.231-23',1),(10,'Lançamento 4',1,22.50,NULL,1,'kakashi','429.034.023-42',1),(11,'Lançamento 4',1,22.50,NULL,1,'surinami','293.923.929-39',1),(12,'Lançamento 3',1,20.00,NULL,0,'whtiasndias','293.929.392-93',1),(13,'É um prato de comida',1,26.90,NULL,0,'Bernadete Queirino','477.337.737-37',1),(14,'Macarrão Sertanejo',1,18.50,NULL,1,'Geoshahsjaka','101.010.100-11',1),(15,'Macarrão Sertanejo',1,18.50,NULL,0,'Maria do Carmo','360.451.309-54',1),(16,'milkshake',1,30.00,NULL,0,'Sil adkasd','293.121.991-91',1),(17,'milkshake',1,30.00,NULL,0,'rich','291.919.911-91',1),(18,'Macarrão Sertanejo',1,18.50,NULL,1,'thasmda','323.423.423-42',1),(19,'É um prato de comida',1,26.90,NULL,1,'George Washingtom','202.020.020-20',1),(20,'É um prato de comida',1,26.90,NULL,1,'Bastião Misawa','293.912.939-12',1),(21,'É um prato de comida',1,26.90,NULL,1,'Bastião Misawa','293.912.939-12',1),(22,'É um prato de comida',1,26.90,NULL,1,'Bastião Misawa','293.912.939-12',1),(23,'É um prato de comida',1,26.90,NULL,1,'Bastião Misawa','293.912.939-12',1),(24,'Rocambole de Melancia com Suco de Caju Feito na Hora, Preço Unitário para Código de Barras, Favor Pedir na Entrada para Acompanhar o Açougue',1,140.49,NULL,1,'Dionísio Ferraz','138.131.231-33',1),(25,'É um prato de comida',1,26.90,NULL,0,'Add Page','183.182.318-23',1),(26,'É um prato de comida',1,26.90,NULL,0,'Add Bag','231.231.231-23',1),(27,'É um prato de comida',1,53.80,NULL,0,'Xirxo Detox','291.991.919-19',1),(28,'Sorvete de Leite de Burra',1,31.80,NULL,1,'Loyd','288.383.838-83',2),(29,'Lançamento 3',1,20.00,NULL,0,'George Washingtom','293.121.991-91',1),(30,'Lançamento 3',1,40.00,NULL,0,'Tacara Tanjuro','231.291.919-91',2),(31,'Lançamento 4',1,22.50,'Mesa não informada',1,'Site Rápido','299.292.929-92',1),(32,'É um prato de comida',1,26.90,'Mesa não informada',0,'Alorino Hermeneutico','219.191.919-91',1),(33,'Rocambole de Melancia com Suco de Caju Feito na Hora, Preço Unitário para Código de Barras, Favor Pedir na Entrada para Acompanhar o Açougue',1,140.49,'100',1,'Rubrico Dungerston','999.111.919-19',1),(34,'Lançamento 4',1,22.50,'25',1,'Albuquerque Ferraz','473.518.930-40',1),(35,'Macarrão Sertanejo',1,18.50,'28',1,'Albuquerque Ferraz','473.518.930-40',1),(36,'Sorvete de Leite de Burra',1,15.90,'54',0,'Elizandro Messias','952.423.040-10',1),(37,'Rocambole de Melancia com Suco de Caju Feito na Hora, Preço Unitário para Código de Barras, Favor Pedir na Entrada para Acompanhar o Açougue',1,280.98,'54',1,'Elizandro Messias','952.423.040-10',2),(38,'milkshake',1,30.00,'38',0,'Nome não informado','952.423.040-10',1),(39,'É um prato de comida',1,26.90,'68',1,'Nome não informado','952.423.040-10',1),(40,'Macarrão Sertanejo',1,18.50,'25',1,'Nome não informado','952.423.040-10',1),(41,'milkshake',1,30.00,'35',1,'Elizandro Messias','952.423.040-10',1),(42,'Sorvete de Leite de Burra',1,15.90,'25',1,'Djdjddjdjdjdjdjdj','080.077.770-00',1),(43,'É um prato de comida',1,26.90,'451',1,'Juarez Fernandes','080.077.770-00',1),(44,'Lançamento 4',1,22.50,'65',1,'Elizandro Messias','952.423.040-10',1),(45,'Lançamento 3',1,80.00,'500',1,'Elizandro Messias','952.423.040-10',4),(46,'É um prato de comida',1,26.90,'01',0,'Ribeirinho Neves','101.010.101-01',1),(47,'Sorvete de Leite de Burra',1,15.90,'123',1,'Ribeirinho Neves','101.010.101-01',1),(48,'Macarrão Sertanejo',1,18.50,'102',1,'Ribeirinho Neves','101.010.101-01',1),(49,'Rocambole de Melancia com Suco de Caju Feito na Hora, Preço Unitário para Código de Barras, Favor Pedir na Entrada para Acompanhar o Açougue',1,140.49,'45',1,'Ribeirinho Neves','101.010.101-01',1),(50,'Macarrão Sertanejo',1,18.50,'45',1,'Tancredo Teixeira','473.518.930-40',1),(51,'É um prato de comida',1,26.90,'211',0,'Anastácio L','473.518.930-40',1),(52,'É um prato de comida',1,26.90,'299',1,'Ostaquimastio Durvisky','564.564.564-56',1),(53,'É um prato de comida',1,26.90,'878',1,'Anastácio L','473.518.930-40',1),(54,'Sorvete de Leite de Burra',1,15.90,'423',0,'Anastácio L','473.518.930-40',1),(55,'É um prato de comida',1,26.90,'44',1,'Anastácio L','473.518.930-40',1),(56,'É um prato de comida',1,26.90,'433',1,'Anastácio L','473.518.930-40',1),(57,'Sorvete de Leite de Burra',1,143.10,'564',1,'Anastácio L','473.518.930-40',9);
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
  `nome_produto` varchar(150) DEFAULT NULL,
  `ingredientes` varchar(250) DEFAULT NULL,
  `preco` varchar(10) DEFAULT NULL,
  `categoria_produto` varchar(20) DEFAULT NULL,
  `descricao_produto` text,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'hamburguer.jpg','Sorvete de Leite de Burra','Carne bovina, queijo, alface, tomate, maionese','15.90','Lançamentos',NULL,'Feito com queijo ralado e com as sobras que o povo deixa na mesa'),(2,'pizza_margarita.jpg','Pizza Margarita','Molho de tomate, queijo mozzarella, manjericão','39.99','Principais',NULL,'Uma pizza clássica italiana com molho de tomate, queijo mozzarella e manjericão fresco, simples e saborosa.'),(3,'sorvete_chocolate.jpg','Sorvete de Chocolate','Chocolate, leite, açúcar','12.99','Sobremesas',NULL,'Sorvete cremoso com um sabor intenso de chocolate, ideal para a sobremesa após uma refeição deliciosa.'),(4,'suco_laranja.jpg','Suco de Laranja Natural','Laranja, água, açúcar','8.99','Bebidas',NULL,'Refrescante e natural, feito com laranjas frescas, perfeito para acompanhar qualquer refeição.'),(5,'bruschetta.jpg','Bruschetta de Tomate','Pão italiano, tomate, manjericão, azeite','19.99','Entradas',NULL,'Uma entrada leve e saborosa com pão italiano crocante, tomate fresco e um toque de azeite e manjericão.'),(6,'lançamento1.jpg','É um prato de comida','Ingrediente A, Ingrediente B','26.90','Lançamentos',NULL,'Eu não sei o que vai, mas deve ter sal se não for doce'),(7,'lançamento2.jpg','Macarrão Sertanejo','Ingrediente C, Ingrediente D','18.50','Lançamentos',NULL,'Descrição do produto Lançamento 2'),(8,'lançamento3.jpg','Lançamento 3','Ingrediente E, Ingrediente F','20.00','Lançamentos',NULL,'Descrição do produto Lançamento 3'),(9,'lançamento4.jpg','Lançamento 4','Ingrediente G, Ingrediente H','22.50','Lançamentos',NULL,'Descrição do produto Lançamento 4'),(10,'sobremesa1.jpg','Sobremesa 1','Chocolate, Baunilha','10.90','Sobremesas',NULL,'Descrição do produto Sobremesa 1'),(11,'sobremesa2.jpg','Sobremesa 2','Morango, Creme','12.50','Sobremesas',NULL,'Descrição do produto Sobremesa 2'),(12,'sobremesa3.jpg','Sobremesa 3','Coco, Doce de leite','14.00','Sobremesas',NULL,'Descrição do produto Sobremesa 3'),(13,'sobremesa4.jpg','Sobremesa 4','Framboesa, Creme','16.90','Sobremesas',NULL,'Descrição do produto Sobremesa 4'),(14,'bebida1.jpg','Bebida 1','Água, Gás','5.90','Bebidas',NULL,'Descrição do produto Bebida 1'),(15,'bebida2.jpg','Bebida 2','Suco de Laranja, Açúcar','8.00','Bebidas',NULL,'Descrição do produto Bebida 2'),(16,'bebida3.jpg','Bebida 3','Refrigerante, Gelo','6.50','Bebidas',NULL,'Descrição do produto Bebida 3'),(17,'bebida4.jpg','Bebida 4','Água de Coco, Gelo','7.90','Bebidas',NULL,'Descrição do produto Bebida 4'),(18,'entrada1.jpg','Entrada 1','Queijo, Presunto','9.50','Entradas',NULL,'Descrição do produto Entrada 1'),(19,'entrada2.jpg','Entrada 2','Tomate, Manjericão','11.00','Entradas',NULL,'Descrição do produto Entrada 2'),(20,'entrada3.jpg','Entrada 3','Salada, Molho','13.00','Entradas',NULL,'Descrição do produto Entrada 3'),(21,'entrada4.jpg','Entrada 4','Sopa, Creme','14.90','Entradas',NULL,'Descrição do produto Entrada 4'),(22,'principal1.jpg','Prato Principal 1','Frango, Arroz','25.00','Principais',NULL,'Descrição do produto Principal 1'),(23,'principal2.jpg','Prato Principal 2','Carne, Batata','28.50','Principais',NULL,'Descrição do produto Principal 2'),(24,'principal3.jpg','Prato Principal 3','Peixe, Legumes','30.00','Principais',NULL,'Descrição do produto Principal 3'),(25,'principal4.jpg','Prato Principal 4','Lasanha, Queijo','32.90','Principais',NULL,'Descrição do produto Principal 4'),(26,'milkshake.jpg','milkshake','Pena de Urubu, Limão com Caviar, Pepino Vermelho, Terra do Brejo, Caviar','30','Sobremesas',NULL,'Milkshake de verão com chocolate e nozes, baunilha ou chantily. A Silmara aprova.'),(27,'produto2.jpg','Rocambole de Melancia com Suco de Caju Feito na Hora, Preço Unitário para Código de Barras, Favor Pedir na Entrada para Acompanhar o Açougue','queijo, farofa, inhame, macarrão, dois ovos, cesta básica, salsicha, peito de peru','140.49','Lançamentos',NULL,'Produto Feito na Hora pelo Nosso Atendente Messias que Está Debaixo da Sacada com Duas Dozes de Produtos para Empanar, Cinco Caixas de Telha com Detritos Higiênicos e Sabonete de Groselha para Passar no Ouvido, Caixa de Unidade para Vender no Forum');
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

-- Dump completed on 2025-03-07 14:13:26
