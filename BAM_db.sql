DROP DATABASE IF EXISTS BAM_db;

CREATE DATABASE BAM_db;

USE BAM_db;

CREATE TABLE products (
	id INTEGER (11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER(11),
    stock_quantity INTEGER(11),
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Toilet Paper", "Home", 3, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pancake Mix", "Food", 4, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("White T-Shirt", "Clothing", 10, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Monster Energy", "Food", 2, 5000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("French Press", "Food", 25, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Picture Frame 10x14", "Home", 40, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("ASUS 15 inch Laptop", "Electronics", 1100, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Bose Wireless Headphones", "Electronics", 200, 50);

