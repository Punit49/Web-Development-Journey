# 📚 Databases – Basics

## 🔹 What is a Database?
A database is a **structured collection of organized data**, stored in a system for easy **data retrieval and manipulation**.  
It acts as a **centralized repository**.

---

## 🔹 What is DBMS?
**DBMS (Database Management System)** is software used to interact with and perform database operations like **querying, updating, and manipulating data** within a database.

It acts as an **interface between the Database and the User**, without requiring users to know physical storage details.

---

## 🔹 Schema
A **schema** is a **structural blueprint** that defines how data is organized, such as:
- Tables  
- Fields  
- Key-value pairs, etc.

---

## 🔹 Queries
**Queries** are instructions used to perform database operations.

---

## 🔹 Types of Databases

### 1️⃣ Relational Database
- Stores data in the form of **tables**
- Tables consist of:
  - Rows (**records**)
  - Columns (**fields**)
- Uses **schemas** to organize data

---

### 2️⃣ NoSQL Database
- NoSQL stands for **Not Only SQL**
- Designed to store **unstructured or semi-structured data**
- Data formats include:
  - Documents
  - Key-value pairs
  - Graphs, etc.

---

## 🔹 SQL vs MySQL

### 🟦 SQL
- Stands for **Structured Query Language**
- A **programming language** used to interact with relational databases

### 🟩 MySQL
- An **open-source relational database management system**
- Uses **SQL** to interact with databases

### Note
- When using aggregate functions, every selected column that is not aggregated must be included in the GROUP BY clause.

- Flow of Excecution - 
    FROM
    WHERE
    GROUP BY
    HAVING
    SELECT
    DISTINCT
    ORDER BY
    LIMIT