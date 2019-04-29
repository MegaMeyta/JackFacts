/*
  This file will contain all the level data 
*/
var playerPosition = [0,400];       //  coords of player spawn 
var decorationPositions = [];   
var music = 'Music/Bad Boy.mp3'      // cords for decorations (x,y,type)[0,100,'ground'],[0,100,'ground']

var buttonPosition = [[400, 400, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}],[400, 1100, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}],[-100, 1800, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}]]
var singlePlatformPositions = [[200,100, 'ground'], [-200,100, 'ground4'], [200,-200,'ground'], [-200,-200,'ground4'],[-300,-100,'ground'],[300,-100,'ground2'],[-500,0,'ground2'],[500,0,'ground'],[-600,100,'ground'],[600,100,'ground'],[-700,200,'ground2'],[-400,200,'ground2'],[300,200,'ground'],[600,200,'ground2'],[-100,300,'ground'],[100,300,'ground'],[300,300,'ground2'],[800,300,'ground'],[-800,400,'ground2'],[-200,400,'ground2'],[100,400,'ground'],[500,400,'ground'],[800,400,'ground'],[-500,500,'ground4'],[200,500,'ground'],[500,500,'ground'],[700,500,'ground2'],[-700,600,'ground'],[0,600,'ground'],[300,600,'ground2'],[-700,700,'ground2'],[-100,700,'ground'],[100,700,'ground'],[700,700,'ground2'],[-500,800,'ground2'],[-200,800,'ground'],[300,800,'ground'],[500,800,'ground'],[700,800,'ground'],[-500,900,'ground'],[-200,900,'ground'],[0,900,'ground'],[200,900,'ground'],[400,1000,'ground'],[600,1000,'ground'],[-400,1100,'ground'],[-200,1100,'ground2'],[100,1100,'ground2'],[500,1100,'ground2'],[-400,1200,'ground'],[100,1200,'ground'],[500,1200,'ground'],[-400,1300,'ground2'],[400,1300,'ground2'],[-300,1400,'ground2'],[-100,1400,'ground'],[100,1400,'ground2'],[300,1400,'ground'],[-200,1500,'ground2'],[100,1500,'ground2'],[-100,1600,'ground'],[100,1600,'ground'],[0,2000,'ground']]

function initTriggers(triggerList){
  console.log("Initalizing Triggers");
  /*
    Here is where we will create our triggers for the level,
    the tempalte is shown below copy it to make more 
  */
  triggerList.addTrigger(40,860,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "Welcome to the world of JackFacts: Carfentanyl Edition. ";
    var message1 = "As the leader of your comunity you must tackle the problem that Carfentanyl poses in Calgary";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);  //  true at the end for debug, make it flase or leave it to hide the trigger sprite

  triggerList.addTrigger(-460,760,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "Welcome to the world of JackFacts: Carfentanyl Edition. ";
    var message1 = "As the leader of your comunity you must tackle the problem that Carfentanyl poses in Calgary";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);


  triggerList.addTrigger(40,-240,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "Welcome to the world of JackFacts: Carfentanyl Edition. ";
    var message1 = "As the leader of your comunity you must tackle the problem that Carfentanyl poses in Calgary";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);


  triggerList.addTrigger(840,260,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "Welcome to the world of JackFacts: Carfentanyl Edition. ";
    var message1 = "As the leader of your comunity you must tackle the problem that Carfentanyl poses in Calgary";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  triggerList.addTrigger(840,660,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "Welcome to the world of JackFacts: Carfentanyl Edition. ";
    var message1 = "As the leader of your comunity you must tackle the problem that Carfentanyl poses in Calgary";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  triggerList.addTrigger(-60,260,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "Welcome to the world of JackFacts: Carfentanyl Edition. ";
    var message1 = "As the leader of your comunity you must tackle the problem that Carfentanyl poses in Calgary";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);
}
