drop table if exists `CUThere`.`eventDetails`;
drop table if exists `CUThere`.`organizers`;
drop table if exists `CUThere`.`locations`;
drop table if exists `CUThere`.`users`;

CREATE  TABLE IF NOT EXISTS `CUThere`.`eventDetails` (
  `eventID` INT NOT NULL	,
  `eventName` VARCHAR(50) NOT NULL ,
  `dateOfEvent` DATE NOT NULL,
  `timeStart` TIME NOT NULL,
  `timeEnd` TIME NOT NULL,
  `eventDescription` VARCHAR(500) NOT NULL,
  `organizerID` INT,
  `buildingID` INT NOT NULL,
  `roomNumber` VARCHAR(4) NOT NULL,
  `imageLink` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`eventID`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `CUThere`.`organizers`(
    `organizerID` INT NOT NULL,
    `organizerName` VARCHAR(50) NOT NULL,
    `organizerUserName` VARCHAR(50) NOT NULL,
    `organizerPassword` VARCHAR(50) NOT NULL,
    `publicEmail` VARCHAR(100),
    `publicPhone` VARCHAR(13),
    `pictureLink` VARCHAR(150),
    PRIMARY KEY (`organizerID`)
)
ENGINE = InnoDB;

INSERT INTO eventDetails (eventID, eventName, dateOfEvent, timeStart, timeEnd, eventDescription, organizerID, location, rsvp)
VALUES (12345, 'Meeting4', '2019-10-17', '18:00:00', '20:00:00', 'Meeting 4 of Murphys Law', 54321, 'ITLL', TRUE);

select * from eventDetails;

create table if not exists `CUThere`.`locations`(
		`buildingID` INT NOT NULL,
		`buildingName` VARCHAR(100) NOT NULL,
        `buildingNameAbbv` VARCHAR(4) NOT NULL,
        PRIMARY KEY (`buildingID`)
        )
        ENGINE = InnoDB;
        
	
INSERT INTO locations (buildingID, buildingName, roomNumber, buildingNameAbbv)
VALUES
(1, 'Center for Community', 100, 'C4C'),
(2, 'University Memorial Center', 100, 'UMC'),
(3, 'Engineering Center', 100, 'ECCR'),
(4, 'Koelbel Building', 100, 'KOBL'),
(5, 'Eaton Humanities', 100, 'HUMN'); -- Testing values

select * from locations;
