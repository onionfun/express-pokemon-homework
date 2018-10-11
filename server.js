const express = require('express');
const app = express();
const Pokemon = require('./modals/pokemon');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));


app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {pokemon: Pokemon})
})

app.get('/pokemon/:id/show', (req, res)=>{
    res.render('show.ejs', {pokemon: Pokemon[req.params.id],
    id: req.params.id })
    
})

app.get('/pokemon/:id/edit', (req, res)=>{
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id],
      id: req.params.id 
    })
    
})

app.put('/pokemon/:id', (req, res)=>{
    Pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
})

app.post('/pokemon/new', (req, res)=>{
    res.render('new.ejs', { 
})
        pokemon.push(req.body); 
        res.redirect('/pokemon')
})































app.listen(3000, () => {
    console.log('listening on port 3000')
  })
  
  module.exports = app