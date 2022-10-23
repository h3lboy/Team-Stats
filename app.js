const team = {
    _players: [{firstName: 'Pete', lastName: 'Wheeler', age: 54},
    {firstName: 'Juan', lastName: 'Henrandez', age: 54},
    {firstName: 'Pete', lastName: 'sake', age: 44}  
    ],
    _games: [{oppnet: 'zack', teamPoints: 0, opponentPoints: 1},
    
    {oppnet: 'ek', teamPoints: 4, opponentPoints: 3},
    {oppnet: 'lakers', teamPoints: 50, opponentPoints: 12}
    ],
  
    get players(){
      return this._player
    },
    get games(){
      return this._game
    },
    addPlayer(newFirstName,newLastName,newAge){
  
        const player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
        }
  
        this._players.push(player)
    },
  
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
  
      const  game = {
        oppnet:newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
  
      this._games.push(game)
  
    }

  }
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame('Titans', 100, 98)
  
  //console.log(team._players)
  console.log(team._games)