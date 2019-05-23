console.log("running Carfentanyl.js")
/*
  This file will contain all the level data 
*/
var playerPosition = [0,400];       //  coords of player spawn 
var decorationPositions = [];   
var music = 'music/jack fax.mp3'  
//cord for buttons (x,y,type,function) 
var buttonPosition = [[1600, -1300, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}] ,[100, -1900, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}] ,[3200, -100, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}],[2000, -100, 'door', function(){window.location.href = "http://www.jackfacts.club/#tlevel-selector"}]]
   // cords for decorations (x,y,type)[0,100,'ground'],[0,100,'ground']
var singlePlatformPositions = [/*Floor*/[100,100,'ground'],[0,100,'ground'],[200,100,'ground'],[300,100,'ground'],[400,100,'ground'],[500,100,'ground'],[600,100,'ground'],[700,100,'ground'],[800,100,'ground'],[900,100,'ground'],[1000,100,'ground'],[1100,100,'ground'],[1200,100,'ground'],[1300,100,'ground'],[1400,100,'ground'],[1500,100,'ground'],[1600,100,'ground'],[1700,100,'ground'],[1800,100,'ground'],[1900,100,'ground'],[2000,100,'ground'],[2100,100,'ground'],[2200,100,'ground'],[2300,100,'ground'],[2400,100,'ground'],[2500,100,'ground'],[2600,100,'ground'],[2700,100,'ground'],[2800,100,'ground'],[2900,100,'ground'],[3000,100,'ground'],[3100,100,'ground'],[3200,100,'ground'],[3300,100,'ground'],/*Floor 2*/[0,-200,'ground'],[100,-200,'ground'],[200,-200,'ground'],[300,-200,'ground'],[400,-200,'ground'],[500,-200,'ground'],[600,-200,'ground'],[700,-200,'ground'],[700,-100,'ground'],[800,-100,'ground'],/*Wall Right*/[-100,100,'ground'],[-100,0,'ground'],[-100,-100,'ground'],[-100,-200,'ground'],[-100,-300,'ground'],[-100,-400,'ground'],[-100,-500,'ground'],[-100,-600,'ground'],[-100,-700,'ground'],[-100,-800,'ground'],[-100,-900,'ground'],[-100,-1000,'ground'],[-100,-1100,'ground'],[-100,-1200,'ground'],[-100,-1300,'ground'],[-100,-1400,'ground'],[-100,-1500,'ground'],[-100,-1600,'ground'],[-100,-1700,'ground'],[-100,-1800,'ground'],[-100,-1900,'ground'],[-100,-2000,'ground'],/*Floor 3*/[0,-800,'ground'],[100,-800,'ground'],[200,-800,'ground'],[300,-800,'ground'],[400,-800,'ground'],[500,-800,'ground'],[600,-800,'ground'],[700,-800,'ground'],[800,-800,'ground'],[900,-800,'ground'],[1000,-800,'ground'],[1100,-800,'ground'],[1200,-800,'ground'],[1300,-800,'ground'],[1400,-800,'ground'],[1500,-800,'ground'],[1600,-800,'ground'],[2100,-800,'ground'],[2200,-800,'ground'],[1900,-800,'ground'],[2000,-800,'ground'],[2500,-800,'ground'],[2600,-800,'ground'],[2700,-800,'ground'],[2800,-800,'ground'],/*Wall Left 3*/[1800,0,'ground'],[1800,-100,'ground'],[1800,-200,'ground'],[1800,-300,'ground'],[1800,-400,'ground'],[1800,-500,'ground'],[1800,-600,'ground'],[1800,-700,'ground'],[1800,-800,'ground'],/*P1*/[0,-400,'ground'],/*P2*/[300,-500,'ground'],/*P3*/[600,-500,'ground'],[700,-500,'ground'],/*P4*/[900,-600,'ground'],[1000,-600,'ground'],[1100,-600,'ground'],/*P5*/[1400,-400,'ground'],[1500,-400,'ground'],[1600,-400,'ground'],[1700,-400,'ground'],/*P6*/[1700,-600,'ground'],/*Floor 4*/[1900,-600,'ground'],[2000,-600,'ground'],[2100,-600,'ground'],[2200,-600,'ground'],[2300,-600,'ground'],[2400,-600,'ground'],[2500,-600,'ground'],[2600,-600,'ground'],/*P7*/[1900,-300,'ground'],[2000,-300,'ground'],[2100,-300,'ground'],[2200,-300,'ground'],/*P8*/[2400,-100,'ground'],/*P9*/[2600,-300,'ground'],/*P10*/[2800,-100,'ground'],/*Wall Left 2.5*/[2500,0,'ground'],[2500,-100,'ground'],[2500,-200,'ground'],[2500,-300,'ground'],/*Wall Left 2*/[2900,0,'ground'],[2900,-100,'ground'],[2900,-200,'ground'],[2900,-300,'ground'],[2900,-400,'ground'],[2900,-500,'ground'],[2900,-600,'ground'],[2900,-700,'ground'],[2900,-800,'ground'],[2900,-900,'ground'],[2900,-1000,'ground'],[2900,-1100,'ground'],[2900,-1200,'ground'],[2900,-1300,'ground'],[2900,-1400,'ground'],[2900,-1500,'ground'],[2900,-1600,'ground'],[2900,-1700,'ground'],/*P11*/[2800,-500,'ground'],/*Wall Left*/[3300,000,'ground'],[3300,-100,'ground'],[3300,-200,'ground'],[3300,-300,'ground'],[3300,-400,'ground'],[3300,-500,'ground'],[3300,-600,'ground'],[3300,-700,'ground'],[3300,-800,'ground'],[3300,-900,'ground'],[3300,-1000,'ground'],[3300,-1100,'ground'],[3300,-1200,'ground'],[3300,-1300,'ground'],[3300,-1400,'ground'],[3300,-1500,'ground'],[3300,-1600,'ground'],[3300,-1700,'ground'],[3300,-1800,'ground'],[3300,-1900,'ground'],[3300,-2000,'ground'],/*Top*/[-100,-2100,'ground'],[000,-2100,'ground'],[100,-2100,'ground'],[200,-2100,'ground'],[300,-2100,'ground'],[400,-2100,'ground'],[500,-2100,'ground'],[600,-2100,'ground'],[700,-2100,'ground'],[800,-2100,'ground'],[900,-2100,'ground'],[1000,-2100,'ground'],[1100,-2100,'ground'],[1200,-2100,'ground'],[1300,-2100,'ground'],[1400,-2100,'ground'],[1500,-2100,'ground'],[1600,-2100,'ground'],[1700,-2100,'ground'],[1800,-2100,'ground'],[1900,-2100,'ground'],[2000,-2100,'ground'],[2100,-2100,'ground'],[2200,-2100,'ground'],[2300,-2100,'ground'],[2400,-2100,'ground'],[2500,-2100,'ground'],[2600,-2100,'ground'],[2700,-2100,'ground'],[2800,-2100,'ground'],[2900,-2100,'ground'],[3000,-2100,'ground'],[3100,-2100,'ground'],[3200,-2100,'ground'],[3300,-2100,'ground'],/*P12*/[00,-1000,'ground'],[100,-1000,'ground'],[200,-1000,'ground'],[300,-1000,'ground'],[400,-1000,'ground'],/*P13*/[00,-1200,'ground'],[100,-1200,'ground'],[200,-1200,'ground'],/*P14*/[000,-1700,'ground'],[100,-1700,'ground'],[200,-1700,'ground'],[300,-1700,'ground'],/*P15*/[500,-1600,'ground'],/*P16*/[700,-1500,'ground'],/*P17*/[900,-1400,'ground'],/*P18*/[1100,-1300,'ground'],/*P19*/[1400,-1100,'ground'],[1500,-1100,'ground'],[1600,-1100,'ground'],[1700,-1100,'ground'],/*P20*/[1300,-1700,'ground'],[1400,-1700,'ground'],[1500,-1700,'ground'],[1600,-1700,'ground'],[1700,-1700,'ground'],/*Wall Right 2*/[1300,-1100,'ground'],[1300,-1200,'ground'],[1300,-1300,'ground'],[1300,-1400,'ground'],[1300,-1500,'ground'],[1300,-1600,'ground'],/*P21*/[900,-2000,'ground'],[900,-1900,'ground'],[1000,-1900,'ground'],[1100,-1900,'ground'],[1200,-1900,'ground'],[1300,-1900,'ground'],/*P22*/[1800,-1600,'ground'],/*P23*/[1900,-1300,'ground'],/*P24*/[2100,-1500,'ground'],/*P25*/[2400,-1200,'ground'],/*P26*/[2600,-1100,'ground'],/*P27*/[2800,-1000,'ground'],/*P28*/[2600,-1400,'ground'],/*P29*/[2400,-1600,'ground'],/*P30*/[2200,-1900,'ground'],/*P31*/[2500,-1800,'ground'],/*P32*/[2800,-1700,'ground'],/*P33*/[3000,-1000,'ground']];  //  corodinates of all the platforms

function initTriggers(triggerList){
  console.log("Initalizing Triggers");
  /*
    Here is where we will create our triggers for the level,
    the tempalte is shown below copy it to make more 
  */
  
  //Introduction Trigger//
  triggerList.addTrigger(240,60,function(){
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

  //FACT #1//
  triggerList.addTrigger(40,-240,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "Did you know? People are naturally inclined to care more about the victim of fentanyl than the dealer that gave it to him in the first place. It's just science.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  //FACT #2//
  triggerList.addTrigger(240,-840,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "Addiction is seen as such a negative word but thats beside the point. No matter the subject addiction can never be killed and results in the largest ripple effect you've ever seen. JACK FACTS (Hint Edition)!";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  //FACT #3//
  triggerList.addTrigger(340,-1040,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "One of the most common assuptions out there is that overdose automatically means death. I don't think hospitals do their job that badly.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  //FACT #4//
  triggerList.addTrigger(1540,-1740,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "In Calgary, Fentanyl has a nickname among the opiods. They Call it the Grim Reaper.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  //FACT #5//
  triggerList.addTrigger(1140,-1940,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "My buddy tried fentanyl and he said he had to go to edmonton because the Calgary hospitals were full. He's fine now BTW.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);

  //FACT #6//
  triggerList.addTrigger(1940,-340,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "Silent killers often come in the smallest sizes. Just like the ebola virus which causes someone to die in only two weeks. Danger must be it's middle name.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);


  triggerList.addTrigger(2240,-1940,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you. ";
    var message1 = "Things that share the same part of their name (Grand Piano and Upright Piano, Indoor Soccer and Outdoor Soccer) tend to be very simmilar and harder to descern from eachother.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);


  triggerList.addTrigger(2840,60,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "Calgary, unlike other cities in Alberta, is very deceiving as it is not as clean as it seems.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);


  triggerList.addTrigger(3040,-1040,function(){
    //  put the code you want to execute when the trigger is triggered here
    //  here is an example of how to add tigger the message box 
    var message0 = "You have found one of my Jack Facts. For an award I shall give you one hint to help you.";
    var message1 = "Ha Just Kidding. Don't just trust some stranger who starts to randomly telling you facts and expect them to help you solve all your problems.";
    addMessageToQueue(message0, null);  //  just add null for now dont ask why 
    addMessageToQueue(message1, null);

    //  maybe after you want to do something like end the level, or change
    //  someone score for something and save it, get a collectable since
    //  it dosent have to be a message 
    
    console.log("test event triggered");
  },true);
}
