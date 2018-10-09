const express = require('express');
const app = express();
const Pokemon = require('./pokemon');

app.get('/pokemon/:id/edit', (req, res)=>{
    res.send('edit.ejs')
})

app.get('/pokemon/:id', (req, res)=>{
    res.send('show.ejs')
})

app.get('/pokemon', (req, res)=>{
    res.send('index.ejs', {pokemon: Pokemon})
})
































app.listen(3000, () => {
    console.log('listening on port 3000')
  })