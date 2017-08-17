var app = require('express')()
var conn = require('./conn')
var model = require('./models')

const Player = model.Player
const Team = model.Team
const Coach = model.Coach
/*
app.listen(3000, ()=>{
   console.log('listening on port...')
   model.Player.sync()
    .then(()=> {
      console.log('we are synced')
    })
 })
*/

const myPromise = conn.sync({ force : true})
  .then(()=> {
    console.log('we are synced')
    app.listen(3000, ()=> {
      console.log('listening on port...')
    })
  })
  .then(()=> {
    return Team.create({
      name : "Fallbehinders",
      location : "FSA"
    })
  })
  .then(()=> {
    return Team.create({
      name : "Smartypants",
      location : "FSA"
    })
  })
  .then((row)=> {
    return Player.create({
      name : "Joseph",
      position : "forward",
      teamId : 1
    })
  })
  .then((row)=> {
    return Coach.create({
      name : "Anthony",
      salary : 200000,
      teamId : 1
    })
  })

module.exports = myPromise
  // select t.name, p.name from player
  // join team on team.id == player.teamId
  // where player.name = 'Joseph'
