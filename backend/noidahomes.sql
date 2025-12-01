CREATE TABLE `properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `sector` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `beds` int(11) NOT NULL,
  `baths` int(11) NOT NULL,
  `sqft` int(11) NOT NULL,
  `badges` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `agent_name` varchar(255) NOT NULL,
  `agent_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;