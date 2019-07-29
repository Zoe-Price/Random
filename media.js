var whoButton = $('.who-button');
var whatButton = $('.what-button');
var whereButton = $('.where-button');
var whenButton = $('.when-button');
var whyButton = $('.why-button');
var randomButton = $('.random-button');
var instructionButton = $('.instructions');

//HOW TO PLAY
// var answer = $('#answer');
// var instructText = "The Questions game is a fun game to play with a big group of people, you need to be standing in a circle and make sure you can see everyone. The first person to go points to a person and asks them a question, the person does not respond and either asks that person a question back or asks another person a question. This goes on until someone accidentally answers the question, someone hesitates or someone doesn't clearly point to the person they're asking the question to."
instructionButton.on("click", showInstructions);
var directions = $('.directions');

function showInstructions(){
  directions.toggleClass('hide')
  // console.log(instructText);
  // answer.text(instructText);
}

//WHO
var who = ["Who are you?", "Who is that?", "Who is your sister?", "Who is that behind you?", "Whose turn is it?"];
function generateRandomWho(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * who.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWho = who[roundedRandom];
  return randomWho;
}

var answer = $('.answer');
whoButton.on("click", randomWho);

function randomWho(){
  console.log(generateRandomWho())
  answer.text(generateRandomWho());
}

//WHAT
var what=["What is that?", "What do you like?", "WHAT?", "What is on your shirt?", "What is in your hair?", "What do you like to do at Kode With Klossy?", "What is your favorite song?", "What is a shirt?", "What is a question?", "What is a coat hanger?", "What is a plant?", "What are gold fish made out of?", "What is your biggest fear?", "What is this game?"];
function generateRandomWhat(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * what.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWhat = what[roundedRandom];
  return randomWhat;
}

var answer = $('.answer');
whatButton.on("click", randomWhat);

function randomWhat(){
  console.log(generateRandomWhat())
  answer.text(generateRandomWhat());
}

//WHEN
var when=["When do you wake up?","When is your birthday?", "When are you leaving?", "When is your dad coming?", "When do the elephants come?", "When is the water green?", "When is Karlie Kloss coming?", "When are the fish leaving the ocean?", "When are you here?", "When do you wear pink?", "When do you go to camp?", "When do you go to school?", "When is the soccer game?"];
function generateRandomWhen(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * when.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWhen = when[roundedRandom];
  return randomWhen;
}

var answer = $('.answer');
whenButton.on("click", randomWhen);

function randomWhen(){
  console.log(generateRandomWhen())
  answer.text(generateRandomWhen());
}

//WHERE
var where=["Where are we?", "Where is the window?", "Where is the door?", "Where is my giraffe?", "Where are the snacks?", "Where is the light?", "Where are you?", "Where is Karlie Kloss?", "Where is the moon?", "Where is your sister?", "Where is your mom?"];
function generateRandomWhere(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * where.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWhere = where[roundedRandom];
  return randomWhere;
}

var answer = $('.answer');
whereButton.on("click", randomWhere);

function randomWhere(){
  console.log(generateRandomWhere())
  answer.text(generateRandomWhere());
}

//WHEN
var when=["When are you leaving?","When is your dad coming?","When do the elephants come?","When is the water green?","When is Karlie Kloss coming?","When are the fish leaving the ocean?","When are you here?","When do you wear pink?","When do you go to camp?","When do you go to school?","When is the soccer game?"];
function generateRandomWhen(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * when.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWhen = when[roundedRandom];
  return randomWhen;
}

var answer = $('.answer');
whenButton.on("click", randomWhen);

function randomWhen(){
  console.log(generateRandomWhen())
  answer.text(generateRandomWhen());
}

//WHY
var why=["Why do you like that?","Why are you green?","Why is that there?","Why are you here?","Why do you have eyebrows?","Why do you have hair?","Why is your face a square?"];
function generateRandomWhy(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * why.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWhy = why[roundedRandom];
  return randomWhy;
}

var answer = $('.answer');
whyButton.on("click", randomWhyFunc);

function randomWhyFunc(){
  console.log(generateRandomWhy())
  answer.text(generateRandomWhy());
}

//MISC
var misc=["Do you like animals?", "Wait, who are you again?", "Wait, can we take a quick pause?", "Can I go get some water quickly?", "Do you like water?", "Do you like the color blue?", "Are you my sister?", "Can I go?", "Am I out?"];
function generateRandomMisc(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * misc.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomMisc = misc[roundedRandom];
  return randomMisc;
}

var answer = $('.answer');
randomButton.on("click", randomMisc);

function randomMisc(){
  console.log(generateRandomMisc())
  answer.text(generateRandomMisc());
}
