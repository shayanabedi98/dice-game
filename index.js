let playerOne = document.querySelector('.player1');
let playerTwo = document.querySelector('.player2');
let header = document.querySelector('h2');
let scoreP1 = 0;
let scoreP2 = 0;

function game(){
    let rng1 = Math.floor((Math.random() * 6) + 1);
    let rng2 = Math.floor((Math.random() * 6) + 1);
    if (rng1 > rng2){
        let green = header.innerHTML = 'Player one Wins! ' + rng1 + ' vs ' + rng2;
        header.style.color = 'green';
    } else if (rng1 < rng2){
        let red = header.innerHTML = 'Computer Wins! ' + rng1 + ' vs ' + rng2;
        header.style.color = 'red';
    } else if (rng1 === rng2){
        header.innerHTML = "It's a Tie! " + rng1 + ' vs ' + rng2;
        header.style.color = 'yellow'
    }

    if (rng1 === 1){
        playerOne.setAttribute('src', './images/dice1.png');
        } else if ( rng1 === 2){
            playerOne.setAttribute('src', './images/dice2.png');
        } else if ( rng1 === 3){
            playerOne.setAttribute('src', './images/dice3.png');
        } else if ( rng1 === 4){
            playerOne.setAttribute('src', './images/dice4.png');
        } else if ( rng1 === 5){
            playerOne.setAttribute('src', './images/dice5.png');
        } else if ( rng1 === 6){
            playerOne.setAttribute('src', './images/dice6.png');
        }
    
    if (rng2 === 1){
        playerTwo.setAttribute('src', './images/dice1.png');
        } else if ( rng2 === 2){
            playerTwo.setAttribute('src', './images/dice2.png');
        } else if ( rng2 === 3){
            playerTwo.setAttribute('src', './images/dice3.png');
        } else if ( rng2 === 4){
            playerTwo.setAttribute('src', './images/dice4.png');
        } else if ( rng2 === 5){
            playerTwo.setAttribute('src', './images/dice5.png');
        } else if ( rng2 === 6){
            playerTwo.setAttribute('src', './images/dice6.png');
        }
    if (rng1 > rng2){
        scoreP1++;
        document.querySelector('#p1').innerHTML = 'Player one: ' + scoreP1;
    } else if (rng1 < rng2){
        scoreP2++;
        document.querySelector('#p2').innerHTML = 'Player Two: ' + scoreP2;
    }
    if (scoreP1 === 10){
        window.location.replace('./p1-wins.html');
    } else if (scoreP2 === 10){
        window.location.replace('./p2-wins.html');
    }
}

function playAgain(){
        window.location.replace('./index.html');
}