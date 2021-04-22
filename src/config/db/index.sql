DROP DATABASE IF EXISTS ebrairie;
CREATE DATABASE IF NOT EXISTS ebrairie;

USE ebrairie;

 CREATE TABLE IF NOT EXISTS Author (
 `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `first_name` VARCHAR(255) NOT NULL,
 `last_name` VARCHAR(255) NOT NULL,
 `description` VARCHAR(255)
 );

 CREATE TABLE IF NOT EXISTS Ressource (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `title` VARCHAR(255) NOT NULL,
     `quantity` INTEGER NOT NULL,
     `row` INTEGER,
     `column` INTEGER,
     `category` VARCHAR(255) NOT NULL,
     `is_borrowed` BOOLEAN DEFAULT false,
     `serie` VARCHAR(255),
     `tome_number` INTEGER,
     `genre` VARCHAR(255) NOT NULL,
     `id_author` INTEGER,
     FOREIGN KEY (id_author) REFERENCES Author(id)
 );

 CREATE TABLE IF NOT EXISTS Profile (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `id_account` INTEGER,
     `first_name` VARCHAR(255),
     `last_name` VARCHAR(255),
     `user_name` VARCHAR(255),
     `address` VARCHAR(255),
     `city` VARCHAR(255),
     `zipcode` INTEGER,
     `is_warned` BOOLEAN DEFAULT false
 );

 CREATE TABLE IF NOT EXISTS Account (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `id_profile` INTEGER,
     `email` VARCHAR(255) NOT NULL,
     `password` VARCHAR(255) NOT NULL,
     `is_admin` BOOLEAN,
     FOREIGN KEY (id_profile) REFERENCES Profile(id)
 );


 CREATE TABLE IF NOT EXISTS Borrow (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `id_profile` INTEGER,
     `id_ressource` INTEGER,
     `rent_date` DATE NOT NULL,
     `due_date` DATE NOT NULL,
     `is_back_to_library` BOOLEAN NOT NULL,
     `is_damaged` BOOLEAN NOT NULL,
     `is_past_due` BOOLEAN NOT NULL,
     FOREIGN KEY (id_profile) REFERENCES Profile(id),
     FOREIGN KEY (id_ressource) REFERENCES Ressource(id)
 );

 ALTER TABLE Profile
 ADD FOREIGN KEY (id_account) REFERENCES Account(id);

--  INSERT INTO Author (`id`, `first_name`, `last_name`, `description`) VALUES
--  (1, 'Victor', 'Hugo', 'Dans ce roman emblématique de la littérature française qui décrit la vie de pauvres gens dans Paris et la France provinciale du xixe siècle'),
--  (2, 'Anne', 'Frank', "Le Journal d'Anne Frank est le livre composé du journal intime tenu par Anne Frank, jeune fille juive allemande exilée aux Pays-Bas");

--  INSERT INTO Account (`id`, `email`, `password`, `is_admin`) VALUES
--  (1, 'toto@gmail.com', 'azerty', false),
--  (2, 'Anne@hotmail.fr', 'Frank123', true);
