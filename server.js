const express = require('express');
const app = express();
const Pokemon = require('./modals/pokemon');

// app.get('/pokemon/:id/edit', (req, res)=>{
//     res.send('edit.ejs')
// })
app.get('/pokemon/index', (req, res)=>{
    res.render('index.ejs', {pokemon: Pokemon})
})

app.get('/pokemon', (req, res)=>{
    res.send(Pokemon)
})

app.get('/pokemon/:id', (req, res)=>{
    res.render('show.ejs', {pokemon: Pokemon[req.params.id]})
})




































app.listen(3000, () => {
    console.log('listening on port 3000')
  })