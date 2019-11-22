create database if not exists CUThere;


CREATE  TABLE IF NOT EXISTS `CUThere`.`eventDetails` (
  `eventID` INT NOT NULL	,
  `eventName` VARCHAR(50) NOT NULL ,
  `dateOfEvent` DATE NOT NULL,
  `timeStart` TIME NOT NULL,
  `timeEnd` TIME NOT NULL,
  `eventDescription` VARCHAR(500) NOT NULL,
  `organizerID` INT,
  `location` VARCHAR(150),
  `rsvp` BOOL,  
  PRIMARY KEY (`eventID`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `CUThere`.`organizers`(
	`organizerID` INT NOT NULL,
    `organizeName` VARCHAR(50) NOT NULL,
    `publicEmail` VARCHAR(100),
    `publicPhone` VARCHAR(13),
    `pictureLink` VARCHAR(150),
    PRIMARY KEY (`organizerID`)
)
ENGINE = InnoDB;

create table if not exists `CUThere`.`locations`( -- locations table
    `buildingID` INT NOT NULL,
    `buildingName` VARCHAR(100) NOT NULL,
    `roomNumber` INT NOT NULL,
    `buildingNameAbbv` VARCHAR(4) NOT NULL,
    PRIMARY KEY (`buildingID`)
)
ENGINE = InnoDB;


create table if not exists `CUThere`.`users`(
    `userID` INT NOT NULL,
    `userName` VARCHAR(35) NOT NULL,
    `password` VARCHAR(16) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `DOB` DATE NOT NULL,
    `firstName` VARCHAR(10) NOT NULL,
    `lastName` VARCHAR(10) NOT NULL,
    PRIMARY KEy (`userID`)
)
ENGINE = InnoDB;

use CUThere;
INSERT INTO eventDetails (eventID, eventName, dateOfEvent, timeStart, timeEnd, eventDescription,organizerID, location, rsvp)
VALUES (12345, 'Meeting4', '2019-10-17', '18:00:00', '20:00:00', 'Meeting 4 of Murphys Law', 54321, 'ITLL', TRUE);

select * from eventDetails;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'