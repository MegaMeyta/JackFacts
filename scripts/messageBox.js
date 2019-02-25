console.log("running messagebox.js")
//  this file has the the text box that apreas
//variables for message box 
var messageBoxVisible = false;
var messageQueue = [];
var messageStringPosition = 0;
var messageBoxBackground;
var messageSpeaker;
var messageBoxWords;
var messageBoxX = 150;
var messageBoxY = 250;
var messageBoxWidth = 450;
var messageBoxHeight = 150;
var messageBeingWritten = false;
var framesInState = 0;
var flipAfterFrames = 20;

var textTemp = "";


//  add the message to the message queue but make it an array so that 
//  the text can be added sequentaly 
//  its up to YOU to split the text up into proper text boxes not mine for now,
//  maybe if you want to scale text size but thats for later 
function addMessageToQueue(message,speaker){
  messageQueue.push(message.split(" "));
  // see if there is a message box, if not then start it 
  console.log(message);
  if(!messageBoxVisible){
    showMessageBox();
    writeTextToMessageBox();
  }
}

function showMessageBox(){
  //  see if the message box is visible 
  if(!messageBoxVisible){

    // see if there are any message in the message queue 
    console.log("message box is not visible so we can added it ");
    if(messageQueue.length == 0){
      //  if there are no message then we just stop the function 
      //  since no need to display anything 
      console.log("no messages in queue");
      return;
    }
    // we are here so there is a message in the message queue

    messageBox = game.add.sprite( messageBoxX, messageBoxY, 'msgBox');
    messageBoxVisible = true;
    console.log("messagebox Created");
    //  now we need to make sure to write the first message to the
    //  text box 
  }else{
    console.log("the messagebox is already being shown");
  }
}
function writeTextToMessageBox(){
  //  first check to make sure no other message is being currently
  //  written 
  if(!messageBeingWritten){
    messageStringPosition = 0;
    var speakerObj = {
      name : "Jack",
      name_offset : 20,
      animation_src : "" 
    };
    //  make sure to set the flag of message being written
    messageBeingWritten = true;
    //  make sure to include the person speaking 
    messageSpeaker ={ 
      animation : game.add.sprite( messageBoxX + 10, messageBoxY + 12, 'speaker'),
      name :  game.add.bitmapText(messageBoxX + 10 + speakerObj.name_offset, messageBoxY + 120, 'gem', "JACK", 20)
      };
    messageStringPosition = 0 ; //  so we add the first word in the 
                                //  queue first 
    textTemp = "";              //  initalize the string holder 
    //  now set something that will get called every specified period 
    //  to add another word to the messagebox 
    messageBoxWords = game.add.bitmapText(messageBoxX + 100, messageBoxY + 15, 'gem', textTemp, 16);
    // bmpText = game.add.bitmapText(32, 32, 'gem', text, 32);

    //  Any one line in the bitmap text won't be longer than 400 pixels.
    //  The exception to this rule is if the text has no spaces.
    //  It line-wraps on spaces and word length.
    messageBoxWords.maxWidth = messageBoxWidth - 110;

    game.time.events.repeat(100, messageQueue[0].length + 1, addWordToMessageBox, null);
  }else{
    console.log("message already being wirtten to the text box ")
  }

  
}
function addWordToMessageBox(){
  //  since we dont know how many words we have already added 
  //  make sure we havent added them all already 
  if(messageStringPosition == messageQueue[0].length){
    //  if this condition is true then we have already added all 
    //  the words and should now do nothing 
    messageQueue.shift(); //  remove the first message from the queue 
    messageBeingWritten = false;
    console.log("Done The This message in the queue");
    console.log(messageBeingWritten);

  }else{
    //  we add the next word 
    var word =  messageQueue[0][messageStringPosition];
    textTemp += word;
    textTemp += " ";    //  to add the " " we spliced by 
    messageStringPosition ++; //  make sure we hit the next word next time 
    messageBoxWords.text = textTemp;
  }

}
function messageBoxNext(){
  //  if there is no message being written then we can clear the
  //  current message and start to write the next one, if there is 
  //  no next message then we can just remove the message box 
  //  text + background;
  if(messageQueue.length > 0){
    
  console.log("going to the next message ");
    //  there are more message to display so see if there is 
    //  a background object already there
    textTemp = "";
    messageBoxWords.destroy();
    messageSpeaker.animation.destroy();
    messageSpeaker.name.destroy();
    writeTextToMessageBox();

  }else{
    messageBox.destroy(); 
    messageBoxVisible = false;
    console.log("Removing Message box");
    messageSpeaker.animation.destroy();
    messageSpeaker.name.destroy();
    messageBoxWords.destroy();
  }


}

function hideTextBox(){
  //  this will just depawn the background of the textbox and the 
  //  text box bitmap text inside 
  messageBox.destroy(); 
}
var nextMessageIndicator = null;
function showNextIndication(){
  if(nextMessageIndicator == null){
nextMessageIndicator = game.add.bitmapText(messageBoxX + messageBoxWidth - 50, messageBoxY + 130, 'gem', "Space", 16);
  }else{
    nextMessageIndicator.destroy();
  nextMessageIndicator = null;
  }
}