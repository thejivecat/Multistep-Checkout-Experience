use checkout

create table Info (
    id INT AUTO_INCREMENENT PRIMARY KEY,
    Name VARCHAR(20),
    Email VARCHAR(100),
    Password VARCHAR(100)
);

create table Shipping (
    id INT AUTO_INCREMENENT PRIMARY KEY,
    Line1 VARCHAR(100),
    Line2 VARCHAR(100),
    City VARCHAR(20),
    State VARCHAR(20),
    Zip INT(5);
);

create table Payment (
    id INT AUTO_INCREMENENT PRIMARY KEY,
    Number INT(20),
    Expiration VARCHAR(20),
    CVV INT(10),
    Zip INT(5)
);