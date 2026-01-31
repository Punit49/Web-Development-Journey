CREATE DATABASE IF NOT EXISTS linkedin;

USE linkedin;
TRUNCATE user;
DROP TABLE user;
SELECT * FROM user;

CREATE TABLE user(
	id INT PRIMARY KEY,
	age INT, 
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE,
    followers INT DEFAULT 100,
    following INT DEFAULT 50,
    CONSTRAINT CHECK (age >= 13)
);

INSERT INTO user
VALUES 
(10, 14, "Loki", "loki9@gmail.com", 110, 90),
(11, 18, "Thor", "thor7@gmail.com", 200, 100),
(12, 16, "Doom", "doom18@gmail.com", 130, 10),
(13, 13, "Spiderman", "tom7@gmail.com", 65, 85);		

INSERT INTO user
VALUES 
(14, 20, "Ironman", "iron@gmail.com", 100, 45),
(15, 18, "steve", "steve@gmail.com", 210, 170),
(16, 19, "rocket", "rocket@gmail.com", 190, 92),
(17, 17, "thanos", "thanos@gmail.com", 133, 78);		

-- Where clause with operators
SELECT name, age, followers 
FROM user
WHERE age > 15 AND followers > 120;

SELECT name, age, followers 
FROM user
WHERE age >= 16 OR followers <= 100; 

SELECT name, age, followers 
FROM user
WHERE age BETWEEN 13 AND 16;

SELECT name, age, email 
FROM user 
WHERE age IN (17, 18);

SELECT name, age, email 
FROM user
WHERE age NOT IN (17, 18);

-- Distinct
SELECT DISTINCT age
FROM user;

-- Limit clause

SELECT name, age, email 
FROM user
LIMIT 3;

SELECT name, age 
FROM user
WHERE age >= 18
LIMIT 2;

-- Order By Clause

SELECT name, followers
FROM user
ORDER BY followers ASC;

SELECT name, followers
FROM user
ORDER BY followers DESC;

SELECT name, age
FROM user
ORDER BY age DESC;

-- Aggregate functions 
SELECT max(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age = 18;

SELECT min(name)
FROM user;

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;

-- Group By Clause

SELECT age, count(age) 
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;

-- Having Clause

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 150;

-- Same using where clause
SELECT age, max(followers)
FROM user
WHERE followers > 150
GROUP BY age;

SELECT age, max(followers) 
FROM user 
GROUP BY age
HAVING max(followers) > 150
ORDER BY age DESC;

-- Update Existing records
SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET following = 0
WHERE age >= 18;

UPDATE user 
SET age = 45
WHERE name = "Doom"; 

-- Delete Specific Record

DELETE FROM user
WHERE name = "thanos";

-- Alter Table
-- Add column

ALTER TABLE user
ADD COLUMN city VARCHAR(20) NOT NULL;

-- Delete column
ALTER TABLE user
DROP COLUMN city;

-- Rename Table and Columns 
ALTER TABLE user
RENAME TO linkedInUsers;

ALTER TABLE user
CHANGE COLUMN city country VARCHAR(30) NOT NULL;

-- Modify
ALTER TABLE user
MODIFY country VARCHAR(30) DEFAULT "New York";

DESCRIBE user;
SHOW CREATE TABLE user;

-- 
CREATE TABLE customer(
	cust_id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE orders(
	order_id INT PRIMARY KEY,
	customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(cust_id)
);

SELECT * FROM customer;
