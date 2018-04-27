
// Selects a random number between 19 - 100 at the start of the game
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*81+19)

// Attaches random number to the randomNumber id in the HTML
  $('#randomNumber').text(Random);

// Setting up random numbers for each gem between 1 - 12
  var num1= Math.floor(Math.random()*10+1)
  var num2= Math.floor(Math.random()*10+1)
  var num3= Math.floor(Math.random()*10+1)
  var num4= Math.floor(Math.random()*10+1)

//  Variables for the scores
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

// Resets game
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

// Adds wins to the userTotal
function win(){
alert("Winner winner, chicken dinner!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

// Adds losses to the userTotal
function lose(){
alert ("Sometimes you lose. Nothing you can do but admit it!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

// Click function for gems
  $('#diamond').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  })  
  $('#gem').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $('#gem2').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $('#ruby').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }
  });   
}); 
