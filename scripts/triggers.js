console.log("run triggers.js")
class Trigger{
   constructor(x,y,event,debug=false) {
    
    this.x = x;
    this.y = y;
    this.event = event;
    this.debug = debug;
    if(this.debug){
      this.debug = game.add.sprite(50, 50, 'trigger');
      console.log("triggerDebugCreated");
    }
    this.triggered = false;
    console.log("trigger created");

  }
  //  this function is called every upadte iteration
  triggerEvent(player){
    //  check to see if the player x and y are hitting the single
    //  point event trigger 
    var xLower = player.body.x;
    var yLower = player.body.y + player.body.height;
    var xUpper = player.body.x + player.body.width;
    var yUpper = player.body.y;
    if(!this.triggered){
      if(this.x < xUpper && this.x > xLower){ // check the x bounds 
        if(this.y < yLower && this.y > yUpper){ // check the y bounds 
          console.log("Event Triggered @ " +this.x.toString()+","+this.y.toString());
          
          this.event(); // trigger the event 
          if(this.debug){
            
          this.debug.destroy();
          }
          this.triggered = true;  // make sure it dosent get trigger again

        }
      }
    }
  }
  moveTrigger(x,y){
    this.x += x;
    this.y += y;
    if(this.debug){
      this.debug.x = this.x-15;
      this.debug.y = this.y-15;
    }
  }
}
//  simple list of the objects above to make the code cleaner 
class TriggerList{
  constructor(){
    this.triggerList = [];
  }
  addTrigger(x,y,event,debug){
    this.triggerList.push(new Trigger(x,y,event,debug));
  }
  moveTriggers(x,y){
    for(var i=0;i<this.triggerList.length;i++){
      this.triggerList[i].moveTrigger(x,y);
    }
  }
  checkTrigger(player){
    for(var i=0;i<this.triggerList.length;i++){
      this.triggerList[i].triggerEvent(player);
    }
  }
}

