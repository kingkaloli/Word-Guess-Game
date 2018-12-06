var imPsychic = ["i","m","p","s","y","c","h","i","c"];
   for ( var i = 0; i > imPsychic.length; i++) {

  }

  alert(
      "good luck!"
  )

  alert (
      "Read the instructions carefully"
  )
   var userguesses = "";
   
   console.log (imPsychic);

   var wins = 0;
   var losses = 0;
   var guesses = 20;

   
   var computerChoice = imPsychic[Math.floor(Math.random() * imPsychic.length)];
   console.log(computerChoice)

 
   document.onkeypress = function(event) {

    var userchoice = event.key;
    console.log(event.key)

    if ( guesses != 0 ) {
     
 
     
    if (userchoice === computerChoice) {
       wins++;
    if ( wins === 5)
       alert("you are a Psychic, $100,000 WINNER")

       computerChoice = imPsychic[Math.floor(Math.random() * imPsychic.length)];

       console.log(computerChoice)
       
     }else { 

       losses++;

       (userguesses = userchoice + userguesses)

   }if (userchoice != computerChoice) {
      
    guesses--;

    if( guesses === 0) {

        alert("you are not Psychic")
    }
    

   }
}
   

    document.getElementById('wins').innerHTML = "Wins " + wins;
    document.getElementById('losses').innerHTML = "losses " + losses;
    document.getElementById('guesses').innerHTML = "guesses " + guesses;
    document.getElementById('userguesses').innerHTML = "user guesses " + userguesses;

} 

  