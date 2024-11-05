
//creating table version 1
CREATE TABLE IF NOT EXISTS student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    major VARCHAR(20),
    PRIMARY KEY(student_id)
);

CREATE TABLE IF NOT EXISTS student (
student_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20),
major VARCHAR(20),
PRIMARY KEY(student_id)
);

CREATE TABLE student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    major VARCHAR(20) UNIQUE,
    PRIMARY KEY(student_id)
);

CREATE TABLE student (
    student_id INT AUTO_INCREMENT,
    name VARCHAR(20),
    major VARCHAR(20) DEFAULT 'undecided',
    PRIMARY KEY(student_id)
)

CREATE TABLE student (
    student_id INT AUTO_INCREMENT AUTO_INCREMENT,
    name VARCHAR(20),
    major VARCHAR(20) DEFAULT 'undecided',
    PRIMARY KEY(student_id)
)

// describe table
DESCRIBE TABLE student


// delete table
DROP TABLE student


// add new column to the table 
ALTER TABLE student ADD gpa DECIMAL;
ALTER TABLE student ADD gpa DECIMAL(3, 2);

// remove column
ALTER TABLE student DROP gpa;

//insert value into data table
INSERT INTO student VALUES(1, "JACK", "Biology");
INSERT INTO student VALUES(2, "KATE", "Sociology");
INSERT INTO student VALUES(4, 'Jack', 'Biology');
INSERT INTO student VALUES(4, 'Mike', 'Computer Science');

//select data from table
SELECT * FROM student;

//inserting value of some columns not all
INSERT INTO student(student_id, name) VALUES(3, 'Clear')

//update data in the table
UPDATE student 
   SET major = "Bio"
   WHERE major = "Biology"

UPDATE student
    SET major = "Com Sci"
    WHERE student_id = 4

UPDATE student
    SET major = "Bio Chemistry"
    WHERE major = 'Bio' OR major = 'undecided'

UPDATE student
    SET major = "undecided", name = 'Tom'
    WHERE student_id = 1

//delete the data from the table
DELETE FROM student WHERE student_id = 4

DELETE FROM student WHERE name = 'Tom' AND major = 'undecided'

DELETE FROM student //delete all the data in table

//select specific data from table
SELECT name, major FROM student

SELECT name, major FROM 
   student ORDER BY name //return the data with order by name

SELECT name, major FROM student 
   ORDER BY name 
   DESC //return the data with order by name descending

SELECT * FROM student 
  ORDER BY student_id
  DESC

SELECT * FROM student 
    ORDER BY major, 
    student_id

SELECT * FROM student 
    ORDER BY student_id DESC
    LIMIT 1

SELECT name, major FROM student 
    WHERE major = 'Biology' OR 
    major = 'Chemistry'

SELECT * FROM student WHERE student_id > 3

SELECT * FROM student WHERE student_id > 3 AND name = "Kate"

SELECT * FROM student WHERE name IN ('Kate', 'Jack', 'Davit') //name kate jack or Davit

SELECT * FROM student WHERE name IN ('Kate', 'Jack', 'Davit') AND student_id > 3 