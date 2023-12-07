const express = require("express"); //import express

const api = express(); //create express application in api variable

api.use(express.json()); //used the json file - javascript object notation

const port = 5679;
api.listen(port, () => console.log('Listening on port ' + port));

//give data to server
const customer = [
    { 1: 'Paras', id: 1 },
    { 2: 'Madara', id: 2 },
    { 3: 'Akaza', id: 3 },
    { 4: 'Tanjiro', id: 4 }
]

const web = [
    { 1: 'Raut', id: 1 },
    { 2: 'Uchiha', id: 2 },
    { 3: 'Boi', id: 3 },
]

const seminar = [
    { 1: 'Kapura', id: 1 },
    { 2: 'Lober', id: 2 },
]

//read the request
//display the message when the url consists of /

api.get('/welcome', (req, res) => {
    res.send('Welcome to my fisrt api server');
});

api.get('/customer', (req, res) => {
    res.send(customer);
});

api.get('/web', (req, res) => {
    res.send(web);
});

api.get('/seminar', (req, res) => {
    res.send(seminar);
});