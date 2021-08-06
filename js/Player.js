class Player{
    constructor(){
   this.index  = null
   this.distance = 0
   this.name = null
    }
    readCount(){
    var countRef = database.ref('playerCount')
    countRef.on("value",(data)=>{
        playerCount = data.val()
    })
    }
    updateCount(count){
    database.ref('/').update({
       playerCount : count
    })
    }

    updateName(){
        var playerIndex = 'players/player'+ this.index
        database.ref(playerIndex).set({
           name : this.name,
           distance : this.distance
        })
        }
    getallPlayerinfo(){
      var allplayerref= database.ref('players')
      allplayerref.on("value",function(data){
          allPlayers = data.val
      })
    }    
}
    