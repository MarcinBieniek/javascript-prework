{

const playGame = function(playerInput) {

    clearMessages();
    
    // getMoveName function
  
        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }
  
    // computer move
  
    let randomNumber = Math.floor(Math.random() * 3 + 1);
  
    let argComputerMove = getMoveName(randomNumber);
  
    printMessage('Mój ruch to: ' + argComputerMove);
  
    // player move
  
    let argPlayerMove = getMoveName(playerInput);
  
    printMessage('Twój ruch to: ' + argPlayerMove);
  
    // display result
  
    const displayResult = function(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      
        console.log('moves:', argComputerMove, argPlayerMove);
  
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){ 
            printMessage('Ty wygrywasz!');
            humanWins++;
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Wygrywa komputer');
            computerWins++;
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Wygrywa komputer');
            computerWins++;
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
            humanWins++;
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
            humanWins++;
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Wygrywa komputer');
            computerWins++;
        } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis');
        } else{printMessage('Wprowadz poprawne dane')}
    }
  
        displayResult(argComputerMove, argPlayerMove) 
        
        const pointsCount = function() {
            printMessage('Twoje punkty: ' + humanWins + ' Punkty komputera: ' + computerWins);
        }

        pointsCount()    
}
  
document.getElementById('play-rock').addEventListener('click', function(){playGame(1);});
  
document.getElementById('play-paper').addEventListener('click', function(){playGame(2);});
  
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);});

// points count
 
let humanWins = 0;
let computerWins = 0;

}