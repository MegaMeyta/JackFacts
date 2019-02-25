
function initTriggers(triggerList){
  console.log("Initalizing Triggers");
  /*
    Here is where we will create our triggers for the level,
    the tempalte is shown below copy it to make more 
  */
  triggerList.addTrigger(100,-280,function(){
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

  triggerList.addTrigger(200,80,function(){
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