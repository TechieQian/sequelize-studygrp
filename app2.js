var myPromise = require('./app.js')
var model = require('./models')

const Player = model.Player
const Team = model.Team
const Coach = model.Coach


myPromise
  .then(()=> {
    return Team.findAll({
      where : { name : "Fallbehinders"},
      include : [{
        model : Player,
        required : true,
        attributes : ['name'],
      }, {
        model : Coach,
        required : true,
        attributes : ['name']
      }]
    })
  })
  .then((row)=> {
    console.log('number of results:', row.length)
    console.log(row)

    var myRow = row[0]
    console.log('my team name is ', myRow['name'])
    console.log('my player name is ', myRow['player']['name'])
    console.log('my coach name is ', myRow['coach']['name'])

  })
