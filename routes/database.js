var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
//properties
    host:'den1.mysql2.gear.host',
    user:'stcdb2',
    password:'Xb9J!efr!hX6',
    database:'stcdb2'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('Connected');
    }
});
/*
connection.query("create table Bus (id int not null auto_increment  primary key,registry_no varchar(20) unique not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table station(id int not null auto_increment primary key, station varchar(20) not null unique)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table maintenance_type(id int not null auto_increment primary key, maintenance_type varchar(50) not null unique)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table parts(id int not null auto_increment primary key, parts varchar(50) not null unique, price float not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table maintenance(id int not null auto_increment primary key, registry_no varchar(20) not null," +
    "maintenance_type varchar(50) not null, station varchar(20) not null" +
    ",current_milleage varchar(20) , parts varchar(30),parts_quantity int," +
    "parts_total float,consumables varchar(30),consumables_quantity int," +
    "consumables_total float, extra_contract varchar(100), date date, total_cost float not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table Consumables(id int not null auto_increment primary key, consumables varchar(50) not null unique, price float not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});
*/