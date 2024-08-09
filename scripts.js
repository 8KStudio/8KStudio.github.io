document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new website
    function addWebsite(logo, name, description, url) {
        const container = document.getElementById('website-container');

        // Create the website card
        const websiteDiv = document.createElement('div');
        websiteDiv.className = 'project-item';

        const logoImg = document.createElement('img');
        logoImg.src = logo;
        logoImg.alt = `${name} Logo`;

        const websiteName = document.createElement('h3');
        websiteName.textContent = name;

        const websiteDescription = document.createElement('p');
        websiteDescription.textContent = description;

        const websiteButton = document.createElement('a');
        websiteButton.href = url;
        websiteButton.className = 'button';
        websiteButton.textContent = 'Visit Website';

        // Append the elements to the websiteDiv
        websiteDiv.appendChild(logoImg);
        websiteDiv.appendChild(websiteName);
        websiteDiv.appendChild(websiteDescription);
        websiteDiv.appendChild(websiteButton);

        // Append the websiteDiv to the container
        container.appendChild(websiteDiv);
    }

    // Function to add a new app
    function addApp(logo, name, description, downloadUrl) {
        const container = document.getElementById('app-container');

        // Create the app card
        const appDiv = document.createElement('div');
        appDiv.className = 'project-item';

        const logoImg = document.createElement('img');
        logoImg.src = logo;
        logoImg.alt = `${name} Logo`;

        const appName = document.createElement('h3');
        appName.textContent = name;

        const appDescription = document.createElement('p');
        appDescription.textContent = description;

        const downloadButton = document.createElement('a');
        downloadButton.href = downloadUrl;
        downloadButton.className = 'button';
        downloadButton.textContent = 'Download App';

        // Append the elements to the appDiv
        appDiv.appendChild(logoImg);
        appDiv.appendChild(appName);
        appDiv.appendChild(appDescription);
        appDiv.appendChild(downloadButton);

        // Append the appDiv to the container
        container.appendChild(appDiv);
    }

    // Function to add a new social media link
    function addSocialMedia(platform, url, logo) {
        const list = document.getElementById('social-media-list');

        // Create the social media item
        const socialMediaItem = document.createElement('div');
        socialMediaItem.className = 'social-media-item';

        const logoImg = document.createElement('img');
        logoImg.src = logo;
        logoImg.alt = `${platform} Logo`;

        const button = document.createElement('a');
        button.href = url;
        button.className = 'button';
        button.textContent = platform;

        // Append the logo and button to the socialMediaItem
        socialMediaItem.appendChild(logoImg);
        socialMediaItem.appendChild(button);

        // Append the socialMediaItem to the list
        list.appendChild(socialMediaItem);
    }

    // Example usage: Add websites
    addWebsite('fl.png', 'Flanime', 'Nonton Yuk', 'https://flanime8k.rf.gd');
    addWebsite('images (16).jpeg', 'IPST', 'Situs Official Organisasi Sekolahku...', 'https://ipstparabek.rf.gd');

    // Example usage: Add an app
    addApp('fl.png', 'Flanime Web App', 'Nonton Yuk', 'https://githubusercontent.com/flanime-web-app');

    // Example usage: Add social media links
    addSocialMedia('Facebook', 'https://www.facebook.com/profile.php?id=61557975616511&mibextid=ZbWKwL', 'Facebook.png');
    addSocialMedia('Instagram', 'https://www.instagram.com/8kstudio_?igsh=MWJvb3JzeDk5cWloYw==', 'instagram.png');
    addSocialMedia('Twitter', 'https://x.com/Rafiq8K?t=4UOv5TuRAYPLvygwekMI3Q&s=08', 'images.png');
    addSocialMedia('SoundCloud', 'https://soundcloud.com/rafiq-8k', 'SoundCloud.jpeg');
    addSocialMedia('TikTok', 'https://www.tiktok.com/@rafiq8kbest', 'Tiktok.png');
    addSocialMedia('YouTube', 'https://youtube.com/@rafiq8k?si=ZqC5jSwWxI6659-b', 'Youtube.png');
    addSocialMedia('Discord Server', 'https://discord.com/invite/MeXC3A27SV', 'discord.png');
    addSocialMedia('Blue Archive Community Club', 'https://discord.gg/baclub', 'discord.png');
});
