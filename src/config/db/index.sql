DROP DATABASE IF EXISTS ebrairie;
CREATE DATABASE IF NOT EXISTS ebrairie;

USE ebrairie;

 CREATE TABLE IF NOT EXISTS Author (
 `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `first_name` VARCHAR(255) NOT NULL,
 `last_name` VARCHAR(255) NOT NULL,
 `description` VARCHAR(255) NOT NULL
 );

 CREATE TABLE IF NOT EXISTS Ressource (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `title` VARCHAR(255) NOT NULL,
     `quantiy` INTEGER NOT NULL,
     `row` INTEGER NOT NULL,
     `column` INTEGER NOT NULL ,
     `category` VARCHAR(255) NOT NULL,
     `is_borrowed` BOOLEAN,
     `serie` VARCHAR(255),
     `tome_number` INTEGER,
     `genre` VARCHAR(255) NOT NULL,
     `id_author` INTEGER,
     FOREIGN KEY (id_author) REFERENCES Author(id)
 );

 CREATE TABLE IF NOT EXISTS Profile (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `id_account` INTEGER NOT NULL,
     `first_name` VARCHAR(255) NOT NULL,
     `last_name` VARCHAR(255) NOT NULL,
     `user_name` VARCHAR(255) NOT NULL,
     `address` VARCHAR(255) NOT NULL,
     `city` VARCHAR(255) NOT NULL,
     `zipcode` INTEGER NOT NULL,
     `is_warned` BOOLEAN
 );

 CREATE TABLE IF NOT EXISTS Account (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `id_profile` INTEGER NOT NULL,
     `email` VARCHAR(255) NOT NULL,
     `password` VARCHAR(255) NOT NULL,
     `is_admin` BOOLEAN,
     FOREIGN KEY (id_profile) REFERENCES Profile(id)
 );


 CREATE TABLE IF NOT EXISTS Borrow (
     `id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
     `id_profile` INTEGER NOT NULL,
     `id_ressource` INTEGER NOT NULL,
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
