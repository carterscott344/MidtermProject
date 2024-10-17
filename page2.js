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

                div.appendChild(img);
                div.appendChild(title);
                container.appendChild(div); // Append to the correct container
            });
        };

        displayGames(platformers, '#platformers');
        displayGames(partyGames, '#party');
        displayGames(racingGames, '#race');
    })
    .catch(error => console.error('Error loading JSON data:', error));
