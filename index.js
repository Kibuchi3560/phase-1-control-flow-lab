function scuberGreetingForFeet(distanceCovered){
  // Write your code here!
  
  if(distanceCovered <= 400){
    return"This one is on me!";
 }
 else if(distanceCovered <= 2000){
  return"That will be twenty bucks."; 
 }
 else if(distanceCovered <= 2500){
  return"I will gladly take your thirty bucks.";
 }
 else {
  return"No can do.";
 }
}

function ternaryCheckCity(city){
  // Write your code here!
  city === "NYC" ? "Ok, sounds good." : "No go.";
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
    return"Thank you so much.";

  case "not as generous":
    return "Thank you.";

    default : 
    return"Bye.";
  }

}