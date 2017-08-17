var conn = require('./conn')

const Player = conn.define('player',{
  name : conn.Sequelize.STRING,
  position : conn.Sequelize.STRING
})

const Team = conn.define('team',{
  name : conn.Sequelize.STRING,
  location : conn.Sequelize.STRING
})

const Coach = conn.define('coach',{
  name : conn.Sequelize.STRING,
  salary : conn.Sequelize.INTEGER
})

Player.belongsTo(Team)
Coach.belongsTo(Team)
Team.hasOne(Player)
Team.hasOne(Coach)


//Player.belongsTo(Team)

module.exports = {
  Player,
  Team,
  Coach
}
/*
conn.define('team',{

})
*/
