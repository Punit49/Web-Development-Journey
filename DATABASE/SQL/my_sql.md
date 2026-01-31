## 1️⃣ Database (DB) Commands

### 🔹 CREATE DATABASE
Used to create a new database.
```sql
CREATE DATABASE mydb;
```

### 🔹 CREATE DATABASE IF NOT EXISTS
Creates a database only if it does not already exist.
```sql
CREATE DATABASE IF NOT EXISTS mydb;
```

### 🔹 DROP DATABASE
Deletes a database permanently (data will be lost).
```sql
DROP DATABASE mydb;
```

### 🔹 DROP DATABASE IF EXISTS
Drops the database only if it exists.
```sql
DROP DATABASE IF EXISTS mydb;
```

### 🔹 SHOW DATABASES
Displays all databases in MySQL.
```sql
SHOW DATABASES;
```

### 🔹 SHOW TABLES
Shows all tables inside the selected database.
```sql
SHOW TABLES;
```

---

## 2️⃣ Table Commands

### 🔹 CREATE TABLE
Used to create a table inside a database.
```sql
CREATE TABLE students (
  id INT,
  name VARCHAR(50)
);
```

### 🔹 INSERT
Adds new records into a table.
```sql
INSERT INTO students VALUES (1, 'Rahul');
```

### 🔹 UPDATE
Modifies existing records.
```sql
UPDATE students SET name = 'Ravi' WHERE id = 1;
```

### 🔹 DELETE
Deletes specific rows from a table.
```sql
DELETE FROM students WHERE id = 1;
```

### 🔹 TRUNCATE
Removes all records from a table (cannot be rolled back).
```sql
TRUNCATE TABLE students;
```

### 🔹 ALTER
Used to modify table structure.
```sql
ALTER TABLE students ADD age INT;
```

---

## 3️⃣ Data Types (Signed & Unsigned)

### 🔹 Common Data Types
- `INT` – Integer values
- `VARCHAR(n)` – String with fixed max length
- `DATE` – Date values
- `FLOAT / DOUBLE` – Decimal numbers

### 🔹 SIGNED vs UNSIGNED
- **SIGNED**: Can store both negative and positive values
- **UNSIGNED**: Stores only positive values (0 and above)

```sql
age INT UNSIGNED;
```

---

## 4️⃣ Constraints

Constraints are rules applied to table columns to maintain data accuracy.

### 🔹 NOT NULL
Prevents NULL values.
```sql
name VARCHAR(50) NOT NULL;
```

### 🔹 UNIQUE
Ensures all values are unique.
```sql
email VARCHAR(100) UNIQUE;
```

### 🔹 CHECK
Restricts values based on condition.
```sql
age INT CHECK (age >= 18);
```

### 🔹 DEFAULT
Sets default value if none is provided.
```sql
status VARCHAR(20) DEFAULT 'active';
```

---

## 5️⃣ Primary Key & Foreign Key

### 🔹 PRIMARY KEY
- Uniquely identifies each record
- Cannot be NULL

```sql
id INT PRIMARY KEY;
```

### 🔹 FOREIGN KEY
- Creates relationship between tables
- Refers to primary key of another table

```sql
FOREIGN KEY (student_id) REFERENCES students(id);
```

---

## 6️⃣ SELECT & DISTINCT

### 🔹 SELECT
Used to fetch data from a table.
```sql
SELECT * FROM students;
```

### 🔹 SELECT Specific Columns
```sql
SELECT name, age FROM students;
```

### 🔹 DISTINCT
Removes duplicate values from result.
```sql
SELECT DISTINCT age FROM students;
```


