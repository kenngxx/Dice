//Player 1
const p1Dice = Math.floor(Math.random()*6 ) + 1
const p1DiceImg = 'images/dice' + p1Dice + '.png';
document.querySelectorAll('img')[0].setAttribute('src', p1DiceImg)

//Player 2
const p2Dice = Math.floor(Math.random()*6 ) + 1
const p2DiceImg = 'images/dice' + p2Dice + '.png';
document.querySelectorAll('img')[1].setAttribute('src', p2DiceImg)


//Result Logic
if (p1Dice > p2Dice){
  document.querySelector('h1').innerHTML = 'Player 1 Wins!'
  document.querySelectorAll('p')[0].innerHTML = '👑 Player 1 👑'
  document.querySelectorAll('p')[1].innerHTML = 'Player 2'
}else if (p1Dice < p2Dice) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!'
  document.querySelectorAll('p')[0].innerHTML = 'Player 1'
  document.querySelectorAll('p')[1].innerHTML = '👑 Player 2 👑'
}else{
  document.querySelector('h1').innerHTML = "It's a Draw!"
  document.querySelectorAll('p')[0].innerHTML = 'Player 1'
  document.querySelectorAll('p')[1].innerHTML = 'Player 2'
}
