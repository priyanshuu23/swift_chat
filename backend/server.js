const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');




dotenv.config();


const app = express();

app.get('/', (req, res) => {   
    res.send('API is running...');
});                                                                  // route of the server


app.get('/api/dummy', (req, res) => {  
    res.send(chats);           
 });



app.get('/api/dummy/:id', (req, res) => {
    // console.log(req.params.id);
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server is running on port ${PORT}`));


