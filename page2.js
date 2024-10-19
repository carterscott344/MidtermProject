fetch('./data.json') 
    .then(response => response.json())
    .then(data => {
        const platformers = [];
        const partyGames = [];
        const racingGames = [];

        data.games.forEach(game => {
            if (game.title.toLowerCase().includes('mario kart')) {
                racingGames.push(game);
            } else if (game.title.toLowerCase().includes('party')) {
                partyGames.push(game);
            } else {
                platformers.push(game);
            }
        });

        const displayGames = (games, sectionId) => {
            const section = document.querySelector(sectionId);
            const container = section.querySelector('.games-container'); // Get the correct container
            games.forEach(game => {
                const div = document.createElement('div');
                const img = document.createElement('img');
                const title = document.createElement('p');

                img.src = game['USA-boxart'];
                img.alt = `${game.title} Box Art`;
                title.textContent = game.title;

                

                img.addEventListener('mouseover', function() {document.body.style.cursor = 'grab'});
                img.addEventListener('mouseleave', function() {document.body.style.cursor = 'default'});
                img.addEventListener('click', function() {showInfo(game, div, img)});

                div.appendChild(img);
                div.appendChild(title);
                container.appendChild(div); // Append to the correct container
            });
        };

        displayGames(platformers, '#platformers');
        displayGames(partyGames, '#party');
        displayGames(racingGames, '#race');d
    })
    .catch(error => console.error('Error loading JSON data:', error));

    let currentGame = "no";
    let region = "USA";

function showInfo(game, div, img) {

    if (currentGame != "no") {
        //document.getElementById("platform").remove();
        //document.getElementById("release").remove();
        //document.getElementById("change").remove();
        document.getElementById("boxart").src = currentGame['USA-boxart'];
        document.getElementById("boxart").id = 'none';
        document.getElementById("subdiv").remove();
        region = "USA";
    } 
    if (currentGame == game) {
        currentGame = "no";
    } else {

        region = "USA";

        const subdiv = document.createElement('div'); 
        subdiv.id = 'subdiv';

        const platform = document.createElement('p');
        platform.textContent = game.platforms;
        platform.id = 'platform';

        const release = document.createElement('p');
        release.textContent = game['USA-release-date'];
        release.id = 'release';

        const change = document.createElement('BUTTON');
        change.textContent = "Show Japan data";
        change.id = 'change';
        change.addEventListener('click', function() {switchRegion(game, div, img)});

        img.id = 'boxart';
        
    
        subdiv.appendChild(platform);
        subdiv.appendChild(release);
        subdiv.appendChild(change);

        div.appendChild(subdiv);
    
        currentGame = game;
    }
    

}

function switchRegion(game, div, img) {
    
    if (region == "USA") {
        console.log("help");
        img.src = game['Japan-boxart'];
        release.textContent = game['Japan-release-date'];
        change.textContent = "Show USA data";
        region = "Japan";
    } else {
        console.log("no");
        img.src = game['USA-boxart'];
        release.textContent = game['USA-release-date'];
        change.textContent = "Show Japan data";
        region = "USA";
    }
}