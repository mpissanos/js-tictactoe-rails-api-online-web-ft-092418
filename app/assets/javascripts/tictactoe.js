const WINNING_COMBOS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turn = 0
let currentGame = 0

  $(document).ready(function () {
    buttonListeners()
  })

function buttonListeners() {
  $('td').on('click', function () {
      
  })
  
  $('#save').on('click', () => saveGame())
  $('#previous').on('click', () => showPrevious())
  $('#clear').on('click', () => resetBoard())
}

function saveGame() {
  
}
function showPrevious() {
  $('#games').empty();
  $.get('/games', (savedGames) => {
    if (savedGames.data.length) {
      savedGames.data.forEach(buttonizePreviousGame)
    }
  })
}

function buttonizePreviousGame(game) {
  $('#games').append(`<button id="game-id-${game.id}">${game.id}</button><br>`)
  $(`gameid-${game.id}`).on('click', () => reloadGame(game.id))
}

function reloadGame() {
  document.getElementById('#message').innerHTML = '';
  //TODO
}

function resetBoard() {

}
  
function player() {
  return (turn % 2 ? 'O' : 'X')
}