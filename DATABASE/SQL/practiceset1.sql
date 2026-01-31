-- Practice Set 1

-- 1
CREATE DATABASE mlsu;

USE mlsu;

-- 2
CREATE TABLE teacher(
	id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    subject VARCHAR(20) NOT NULL,
    salary INT
);

-- 3
INSERT INTO teacher
VALUES 
(101, "Steve", "DBMS", 10000),
(102, "Will", "Javascript", 15000),
(103, "Mike", "React", 12000);

SELECT * FROM teacher;

-- 4 
SELECT * FROM teacher
WHERE salary > 10000;

-- 5
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

-- 6
UPDATE teacher
SET ctc = ctc + 0.25 * ctc;

-- 7
ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "udaipur";

-- 8
ALTER TABLE teacher
DROP COLUMN ctc;

