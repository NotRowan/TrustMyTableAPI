-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2025 at 08:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trustmytable`
--

-- --------------------------------------------------------

--
-- Table structure for table `allergies`
--

CREATE TABLE `allergies` (
  `AllergyAllergyID` int(11) NOT NULL,
  `AllergyName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allergies`
--

INSERT INTO `allergies` (`AllergyAllergyID`, `AllergyName`) VALUES
(1, 'Celery'),
(2, 'Gluten'),
(3, 'Crustaceans'),
(4, 'Eggs'),
(5, 'Fish'),
(6, 'Dairy'),
(8, 'Peanuts'),
(9, 'Tree Nuts'),
(10, 'Molluscs'),
(11, 'Mustard'),
(12, 'Sesame'),
(13, 'Soya'),
(14, 'Sulphur dioxide'),
(15, 'Lupin');

-- --------------------------------------------------------

--
-- Table structure for table `allergyprofiles`
--

CREATE TABLE `allergyprofiles` (
  `AllergyAllergyID` int(11) NOT NULL,
  `UserUserID` int(11) NOT NULL,
  `severity` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allergyprofiles`
--

INSERT INTO `allergyprofiles` (`AllergyAllergyID`, `UserUserID`, `severity`) VALUES
(9, 13, NULL),
(10, 13, NULL),
(13, 1, NULL),
(14, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `allergyreviews`
--

CREATE TABLE `allergyreviews` (
  `AllergyReviewID` int(11) NOT NULL,
  `UserReviewID` int(11) NOT NULL,
  `AllergyID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `RestaurantRestaurantID` int(11) NOT NULL,
  `RestaurantName` varchar(255) NOT NULL,
  `RestaurantPhone` varchar(18) DEFAULT NULL,
  `RestaurantLong` float NOT NULL,
  `RestaurantLat` float NOT NULL,
  `RestaurantWebsite` varchar(255) DEFAULT NULL,
  `RestaurantAllergenMenu` varchar(255) DEFAULT NULL,
  `RestaurantRestaurantImage` varchar(255) NOT NULL,
  `RestaurantRestaurantAddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`RestaurantRestaurantID`, `RestaurantName`, `RestaurantPhone`, `RestaurantLong`, `RestaurantLat`, `RestaurantWebsite`, `RestaurantAllergenMenu`, `RestaurantRestaurantImage`, `RestaurantRestaurantAddress`) VALUES
(1, 'Green Garden Café', '123-456-7890', -0.1276, 51.5074, 'https://www.greengarden.com', '', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/2b/dd/71/ab/green-garden-restaurant.jpg', '389 Church Street, ENFIELD, EN29 2YA'),
(2, 'No Frills Eatery', '123-456-7890', -73.9352, 40.7306, NULL, NULL, '', '389 Church Street, ENFIELD, EN29 2YA'),
(3, 'Dishoom Covent Garden', '+442074203330', -0.126236, 51.5128, 'https://www.dishoom.com/covent-garden/', NULL, 'dishoom.jpg', '12 Upper St Martin\'s Ln, London WC2H 9FB'),
(4, 'Flat Iron Soho', '+442030192858', -0.135669, 51.5147, 'https://flatironsteak.co.uk/', NULL, 'flatiron.jpg', '17 Beak St, London W1F 9RW'),
(5, 'Franco Manca Borough Market', '+442073783036', -0.091555, 51.506, 'https://www.francomanca.co.uk/restaurants/borough-market/', NULL, 'francomanca.jpg', '4 Market Porter Building, 9 Stoney St, London SE1 9AA'),
(6, 'Padella', '+442077390089', -0.091377, 51.5061, 'https://www.padella.co/', NULL, 'padella.jpg', '6 Southwark St, London SE1 1TQ'),
(7, 'Homeslice Neal’s Yard', '+442074034304', -0.125183, 51.5145, 'https://homeslicepizza.co.uk/', NULL, 'homeslice.jpg', '13 Neal\'s Yard, London WC2H 9DP'),
(8, 'Sketch Lecture Room & Library', '+442076593500', -0.142422, 51.5119, 'https://sketch.london/', NULL, 'sketch.jpg', '9 Conduit St, London W1S 2XG'),
(9, 'Bao Soho', '+442030191220', -0.13229, 51.5139, 'https://baolondon.com/', NULL, 'bao.jpg', '53 Lexington St, London W1F 9AS'),
(10, 'The Ledbury', '+442073792090', -0.200389, 51.5141, 'https://www.theledbury.com/', NULL, 'ledbury.jpg', '127 Ledbury Rd, London W11 2AQ'),
(11, 'Gordon Ramsay Bar & Grill', '+442075909363', -0.158076, 51.5113, 'https://gordonramsayrestaurants.com/bar-and-grill/', NULL, 'gordonramsay.jpg', '10-13 Grosvenor Square, London W1K 6JP'),
(12, 'Poppies Fish & Chips Soho', '+442077345035', -0.13311, 51.5147, 'https://poppiesfishandchips.co.uk/', NULL, 'poppies.jpg', '55-59 Old Compton St, London W1D 6HW');

-- --------------------------------------------------------

--
-- Table structure for table `userconnections`
--

CREATE TABLE `userconnections` (
  `UserConnectionID` int(11) NOT NULL,
  `UserConnectionUserID` int(11) NOT NULL,
  `UserConnectionContactID` int(11) NOT NULL,
  `UserConnectionStatus` varchar(255) NOT NULL,
  `UserConnectionDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userfavourites`
--

CREATE TABLE `userfavourites` (
  `UserFavouriteID` int(11) NOT NULL,
  `UserUserID` int(11) NOT NULL,
  `RestaurantRestaurantID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userfavourites`
--

INSERT INTO `userfavourites` (`UserFavouriteID`, `UserUserID`, `RestaurantRestaurantID`) VALUES
(1, 13, 1),
(4, 13, 7),
(6, 14, 1),
(8, 14, 4),
(5, 14, 12);

-- --------------------------------------------------------

--
-- Table structure for table `userreviews`
--

CREATE TABLE `userreviews` (
  `UserReviewID` int(11) NOT NULL,
  `UserUserID` int(11) NOT NULL,
  `RestaurantRestaurantID` int(11) NOT NULL,
  `UserReviewRating` decimal(2,0) NOT NULL,
  `UserReviewContent` varchar(255) DEFAULT NULL,
  `UserReviewDatePosted` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userreviews`
--

INSERT INTO `userreviews` (`UserReviewID`, `UserUserID`, `RestaurantRestaurantID`, `UserReviewRating`, `UserReviewContent`, `UserReviewDatePosted`) VALUES
(1, 12, 1, 5, 'Excellent food! The staff was friendly and they handled my allergy needs with great care. Highly recommend.', '2025-04-27 10:00:00'),
(2, 12, 1, 4, 'Good experience. The restaurant was accommodating to my dietary restrictions, though the menu options were a bit limited.', '2025-04-27 10:15:00'),
(3, 12, 1, 3, 'The food was decent, but I had to double-check with the staff about my allergens. They were helpful but could improve their knowledge.', '2025-04-27 10:30:00'),
(4, 12, 1, 2, 'Not a great experience. They didn’t seem very familiar with managing food allergies, and I didn’t feel fully safe eating there.', '2025-04-27 10:45:00'),
(5, 12, 1, 5, 'Fantastic place! They offer a dedicated allergy-friendly menu, and the food was delicious and safe to eat. I’ll be back!', '2025-04-27 11:00:00'),
(6, 13, 10, 5, 'Very Very Tasty', '2025-04-27 21:38:40'),
(7, 13, 10, 5, 'Very Very Tasty', '2025-04-27 21:38:42'),
(8, 13, 10, 3, 'Yummy', '2025-04-27 21:39:39'),
(9, 13, 10, 1, 'Hate it', '2025-04-27 21:41:59'),
(10, 13, 10, 1, 'Hate it', '2025-04-27 21:42:00'),
(11, 13, 10, 5, 'dds', '2025-04-27 21:46:26'),
(12, 13, 10, 5, 'dds', '2025-04-27 21:49:31'),
(13, 13, 10, 5, 'dds', '2025-04-27 21:49:38'),
(14, 13, 10, 0, 'Testing', '2025-04-27 21:49:57'),
(15, 13, 10, 5, 'ds', '2025-04-27 21:58:06'),
(16, 13, 10, 5, 'ds', '2025-04-27 21:58:09'),
(17, 13, 10, 5, 'ds', '2025-04-27 21:58:09'),
(18, 13, 10, 5, 'ds', '2025-04-27 21:58:09'),
(19, 13, 10, 5, 'ds', '2025-04-27 21:58:10'),
(20, 13, 10, 5, 'ds', '2025-04-27 21:58:13'),
(21, 13, 10, 5, 'ds', '2025-04-27 21:58:13'),
(22, 13, 10, 5, 'ds', '2025-04-27 21:58:13'),
(23, 13, 10, 5, 'ds', '2025-04-27 22:01:00'),
(24, 13, 10, 4, 'sdsd', '2025-04-27 22:01:22'),
(25, 13, 10, 0, '', '2025-04-27 22:04:25'),
(26, 13, 10, 0, '', '2025-04-27 22:22:57'),
(27, 13, 10, 5, 'Loved it', '2025-04-27 22:23:08'),
(28, 14, 4, 4, 'The staff were helpful, but it took a while to get confirmation about their allergens. Loved the food!', '2025-04-28 01:10:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserUserID` int(11) NOT NULL,
  `UserFirstName` varchar(32) NOT NULL,
  `UserLastName` varchar(32) NOT NULL,
  `UserLat` float DEFAULT NULL,
  `UserLong` float DEFAULT NULL,
  `UserEmail` varchar(255) NOT NULL,
  `UserUserName` varchar(32) NOT NULL,
  `UserPassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserProfileImage` varchar(255) DEFAULT NULL,
  `UserUserType` varchar(255) DEFAULT NULL,
  `UserUserBio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserUserID`, `UserFirstName`, `UserLastName`, `UserLat`, `UserLong`, `UserEmail`, `UserUserName`, `UserPassword`, `UserProfileImage`, `UserUserType`, `UserUserBio`) VALUES
(3, 'Bubbles', 'Cobra', NULL, NULL, 'Lovely', 'BCobra123', 'password', NULL, NULL, ''),
(4, 'rowan', 'Brown', NULL, NULL, 'rowanbrookelea@gmail.com', 'RBrown113', 'Tuesday52', NULL, NULL, ''),
(11, 'Test', 'Brown', NULL, NULL, 'Testingemail@test.mail', 'testing123', 'Tuesday52', NULL, NULL, ''),
(12, 'testsgsgs', 'Dishes', NULL, NULL, 'Sherese’s', 'Gflflflddh', '$2b$10$a67Cm9eFNigmyWcX2Vzjf.0hQjE089q2oUO3uOv389ZI8poo.pvmm', NULL, NULL, ''),
(13, 'Buncha', 'Smith', NULL, NULL, 'Dishes', 'FunkyTown', '$2b$10$wL.gtHhkCXghnFHOep.ntesSDq32UFn38y0pyTUJtDTjApic1JDVW', 'https://images.generated.photos/ZYtOC5xwOtU17-GvKrEJWZpRunetrjzilvoc0rO-GLQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxOTY3LmpwZw.jpg', NULL, 'I have typed a bio'),
(14, 'Bob', 'Blue', NULL, NULL, 'Bob.blue@gmail.com', 'BobtheFoodie', '$2b$10$dG8UJfEQG8olStNKWvfKSORucmKjDsJL7nSgEFrtG2OMV2djLFXFK', NULL, NULL, 'I adore food');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allergies`
--
ALTER TABLE `allergies`
  ADD PRIMARY KEY (`AllergyAllergyID`);

--
-- Indexes for table `allergyprofiles`
--
ALTER TABLE `allergyprofiles`
  ADD PRIMARY KEY (`AllergyAllergyID`,`UserUserID`);

--
-- Indexes for table `allergyreviews`
--
ALTER TABLE `allergyreviews`
  ADD PRIMARY KEY (`AllergyReviewID`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`RestaurantRestaurantID`);

--
-- Indexes for table `userconnections`
--
ALTER TABLE `userconnections`
  ADD PRIMARY KEY (`UserConnectionID`);

--
-- Indexes for table `userfavourites`
--
ALTER TABLE `userfavourites`
  ADD PRIMARY KEY (`UserFavouriteID`),
  ADD UNIQUE KEY `unique_user_restaurant` (`UserUserID`,`RestaurantRestaurantID`);

--
-- Indexes for table `userreviews`
--
ALTER TABLE `userreviews`
  ADD PRIMARY KEY (`UserReviewID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserUserID`),
  ADD UNIQUE KEY `UserUserName` (`UserUserName`),
  ADD UNIQUE KEY `UserEmail` (`UserEmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allergies`
--
ALTER TABLE `allergies`
  MODIFY `AllergyAllergyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `allergyreviews`
--
ALTER TABLE `allergyreviews`
  MODIFY `AllergyReviewID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `RestaurantRestaurantID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `userconnections`
--
ALTER TABLE `userconnections`
  MODIFY `UserConnectionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userfavourites`
--
ALTER TABLE `userfavourites`
  MODIFY `UserFavouriteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `userreviews`
--
ALTER TABLE `userreviews`
  MODIFY `UserReviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserUserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
