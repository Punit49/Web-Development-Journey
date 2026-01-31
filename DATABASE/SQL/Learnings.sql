-- =====================================================
-- SQL commands 
-- =====================================================


-- WHERE clause is used to filter records and return only those rows that satisfy a specified condition.
SELECT * FROM table_name WHERE condition;


-- Comparison operators are used to compare one value with another value in a SQL condition.
SELECT * FROM table_name WHERE column operator value;


-- Arithmetic operators are used to perform mathematical calculations on numeric values in SQL expressions.
SELECT * FROM table_name WHERE column1 + column2 operator value;


-- Logical operators are used to combine multiple conditions and return a result based on true or false logic.
SELECT * FROM table_name WHERE condition1 AND condition2;
SELECT * FROM table_name WHERE condition1 OR condition2;
SELECT * FROM table_name WHERE NOT condition;


-- Bitwise operators are used to perform operations on binary representations of numeric values.
SELECT * FROM table_name WHERE column & value;



-- GROUP BY clause is used to group rows that have the same values into summary rows.
SELECT column, AGG_FUNCTION(column)
FROM table_name
GROUP BY column;


-- HAVING clause is used to filter grouped data after the GROUP BY clause has been applied.
SELECT column, AGG_FUNCTION(column)
FROM table_name
GROUP BY column
HAVING condition;


-- ORDER BY clause is used to sort the result set in ascending or descending order.
SELECT * FROM table_name ORDER BY column;


-- LIMIT clause is used to specify the maximum number of records to return.
SELECT * FROM table_name LIMIT number;


-- BETWEEN operator is used to filter values within a specified range.
SELECT * FROM table_name WHERE column BETWEEN value1 AND value2;


-- IN operator is used to match a value against a list of specified values.
SELECT * FROM table_name WHERE column IN (value1, value2);


-- Aggregate functions perform calculations on multiple rows and return a single summarized value.
SELECT COUNT(column) FROM table_name;
SELECT SUM(column) FROM table_name;
SELECT AVG(column) FROM table_name;
SELECT MIN(column) FROM table_name;
SELECT MAX(column) FROM table_name;



-- UPDATE statement is used to modify existing records in a table.
UPDATE table_name SET column = value WHERE condition;


-- SQL execution order defines the sequence in which SQL clauses are logically processed by the database engine.
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT



-- ALTER TABLE statement is used to modify the structure of an existing table.
ALTER TABLE table_name action;


-- ADD clause is used to add a new column to an existing table.
ALTER TABLE table_name ADD column datatype;


-- DROP clause is used to remove an existing column from a table.
ALTER TABLE table_name DROP column;


-- RENAME TABLE statement is used to change the name of an existing table.
ALTER TABLE old_table_name RENAME TO new_table_name;


-- RENAME COLUMN statement is used to change the name of an existing column.
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;


-- MODIFY clause is used to change the data type or definition of an existing column.
ALTER TABLE table_name MODIFY column datatype;
