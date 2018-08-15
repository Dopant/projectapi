var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
//properties
    host:'den1.mysql4.gear.host',
    user:'stcdb2',
    password:'Nm09fI-71-6X',
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
connection.query( "create table buslist (id int not null auto_increment  primary key,registry_no varchar(20) unique not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table stationlist(id int not null auto_increment primary key, station varchar(20) not null unique) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query(" create table maintenance_typelist(id int not null auto_increment primary key, maintenance_type varchar(50) not null unique) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query(" create table partslist(id int not null auto_increment primary key, parts varchar(50) not null unique, price float not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table consumableslist(id int not null auto_increment primary key, consumables varchar(50) not null unique, price float not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});


connection.query(" create table parts(id int not null auto_increment primary key, registry_no varchar(20) not null, parts varchar(50) not null,quantity float not null ,total_cost float not null,date date not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});


connection.query("create table consumables(id int not null auto_increment primary key,registry_no varchar(20) not null, consumables varchar(50) not null,quantity float not null ,total_cost float not null, date date not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});


connection.query("create table tyres(id int not null auto_increment primary key, registry_no varchar(20) not null, tyres varchar(50) not null,quantity float not null ,total_cost float not null,date date not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query(" create table batteries(id int not null auto_increment primary key, registry_no varchar(20) not null, batteries varchar(50) not null,quantity float not null ,total_cost float not null,date date not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table lubricants(id int not null auto_increment primary key, registry_no varchar(20) not null, lubricants varchar(50) not null,quantity float not null ,total_cost float not null,date date not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query("create table tyreslist(id int not null auto_increment primary key, tyres varchar(50) not null unique, price float not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query(" create table batterieslist(id int not null auto_increment primary key, batteries varchar(50) not null unique, price float not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});

connection.query(" create table lubricantslist(id int not null auto_increment primary key, lubricants varchar(50) not null unique, price float not null)",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});


connection.query("",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});



*/















