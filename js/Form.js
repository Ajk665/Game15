class Form {

  constructor() {
    this.input = createInput("").attribute("placeHolder","ENTER NAME");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.title.style("color","blue");
    this.title.style("font-size","35px");

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    
    this.reset.position(displayWidth-1500,10);

    this.button.style("background-color","red");
    this.reset.style("background-color","red");

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

    });

    this.reset.mousePressed(()=>{

      game.update(0);
      player.updateCount(0);
      database.ref('/').update({

        players: null

      })
      window.location.reload();
      console.log("this.reset.mousePressed()")


    })

    
  }
}
