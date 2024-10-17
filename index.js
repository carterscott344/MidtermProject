fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const games = data.games; 
        const sortedGames = games.sort((a, b) => new Date(b['USA-release-date']) - new Date(a['USA-release-date']));
        const recentGames = sortedGames.slice(0, 3);
        
        const displayGames = (games, sectionId) => {
            const section = document.querySelector(sectionId);
            const container = section.querySelector('.games-container'); 
            container.innerHTML = ''; 
        
            games.forEach(game => {
                const div = document.createElement('div');
                div.classList.add('game-card');
        
                const img = document.createElement('img');
                const title = document.createElement('p');
                const releaseDate = document.createElement('p');
        
                img.src = game['USA-boxart'];
                img.alt = `${game.title} Box Art`;
                title.textContent = game.title;
                releaseDate.textContent = game['USA-release-date'];
        
                
                div.appendChild(img);
                div.appendChild(title);
                div.appendChild(releaseDate)
                
                container.appendChild(div);
            });
        };
        
        
        displayGames(recentGames, '.game'); 
    })
    .catch(error => {
        console.error('Error fetching the games data:', error); 
});
