fetch("./marioGames.json")
    .then(response => response.json)
    .then(games => loadGames(games))


function loadGames(games){
    const arrayGames = games;
    console.log(arrayGames)
}