use CUThere;
drop Table eventDetails;
drop Table organizers;

CREATE TABLE IF NOT EXISTS `CUThere`.`organizers`(
    `organizerID` INT NOT NULL,
    `organizerName` VARCHAR(50) NOT NULL,
    `organizerPassword` VARCHAR(50) NOT NULL,
    `publicEmail` VARCHAR(100) NOT NULL,
    `publicPhone` VARCHAR(13) NOT NULL,
    PRIMARY KEY (`organizerID`)
)
ENGINE = InnoDB;

CREATE  TABLE IF NOT EXISTS `CUThere`.`eventDetails` (
  `eventID` INT NOT NULL,
  `organizerID` INT NOT NULL,
  `eventName` VARCHAR(50) NOT NULL ,
  `dateOfEvent` DATE NOT NULL,
  `timeStart` TIME NOT NULL,
  `timeEnd` TIME NOT NULL,
  `eventDescription` VARCHAR(500) NOT NULL,
  `address` VARCHAR(150) NOT NULL,
  `lat` INT NOT NULL,
  `lng` INT NOT NULL,
  PRIMARY KEY (`eventID`),
  FOREIGN KEY (`organizerID`) references organizers(organizerID) on delete cascade
  )
ENGINE = InnoDB;

use CUThere;
show tables;



