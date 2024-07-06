document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
            logo: "link_to_logo_image_1",
            name: "Game 1",
            description: "Deskripsi singkat tentang Game 1.",
            downloadUrl: "https://githubusercontent.com/username/game1/download"
        },
        {
            logo: "link_to_logo_image_2",
            name: "Game 2",
            description: "Deskripsi singkat tentang Game 2.",
            downloadUrl: "https://githubusercontent.com/username/game2/download"
        }
        // Tambahkan lebih banyak game sesuai kebutuhan
    ];
    
    const gameList = document.getElementById('game-list');
    
    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        
        const gameImage = document.createElement('img');
        gameImage.src = game.logo;
        gameItem.appendChild(gameImage);
        
        const gameName = document.createElement('h3');
        gameName.textContent = game.name;
        gameItem.appendChild(gameName);
        
        const gameDescription = document.createElement('p');
        gameDescription.textContent = game.description;
        gameItem.appendChild(gameDescription);
        
        const downloadButton = document.createElement('a');
        downloadButton.href = game.downloadUrl;
        downloadButton.textContent = 'Download';
        gameItem.appendChild(downloadButton);
        
        gameList.appendChild(gameItem);
    });
});
