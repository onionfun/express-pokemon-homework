const express = require('express');
const app = express();
const Pokemon = require('./modals/pokemon');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
// app.get('/pokemon/:id/edit', (req, res)=>{
//     res.send('edit.ejs')
// })
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {pokemon: Pokemon})
})

app.get('/pokemon/:id', (req, res)=>{
    res.render('show.ejs', {pokemon: Pokemon[req.params.id],
    id: req.params.id })
    
})

app.get('/pokemon/:id/edit', (req, res)=>{
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id],
      id: req.params.id 
    })
    
})

app.use('/pokemon/:id/edit', (req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.post('/pokemon', (req, res)=>{
    Pokemon[req.params.id] = req.body;
    pokemon.push(req.body);
    res.redirect('/pokemon');
})




































app.listen(3000, () => {
    console.log('listening on port 3000')
  })
  
  module.exports = app