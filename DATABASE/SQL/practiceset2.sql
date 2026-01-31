-- Practice Set - 2

CREATE TABLE student(
	roll_no INT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    city VARCHAR(40), 
    marks INT
);

INSERT INTO student
VALUES
(1, "adam", "Delhi", 76),
(2, "bob", "Mumbai", 65),
(3, "casey", "Pune", 94),
(4, "duke", "Pune", 80);

SELECT * FROM student;

-- 1
SELECT * FROM student
WHERE marks > 75;

-- 2
SELECT DISTINCT city FROM student;

SELECT city
FROM student
GROUP BY city;

-- 3
SELECT city, max(marks) 
FROM student 
GROUP BY city;

-- 4 
SELECT avg(marks) FROM student;

-- 5
ALTER TABLE student
ADD COLUMN grade VARCHAR(1);

UPDATE student
SET grade = "O"
WHERE marks > 80;

UPDATE student 
SET grade = "A"
WHERE marks >= 70 AND marks <= 80;

UPDATE student
SET grade = "B"
WHERE marks >= 60 AND marks < 70