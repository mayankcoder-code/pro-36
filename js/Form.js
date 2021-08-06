class Form{
    constructor(){
        this.input = createInput('name')
         this.button = createButton('sumbit')
         this.greeting = createElement('h3')
    }
 display(){
    
     this.input.position(200,200)
   
     this.button.position(250,250)
     this.button.mousePressed(
         ()=>{
             this.input.hide()
             this.button.hide()
             player.name = this.input.value()
             this.index = playerCount +1
             player.updateCount(this.index)
             player.updateName()
          
             this.greeting.html(" Hi " + player.name)
             this.greeting.position(270,270)
         }
     )
         
     }

 }


 