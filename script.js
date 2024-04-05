console.log ("Hello");

const ACCESS_KEY = 'uGWAdh21k2dwrrqhKVSKflffc_DPgC4aua8lVUPNS6c';

document.getElementById('fetch-image-btn').addEventListener('click', fetchRandomPhoto);

function fetchRandomPhoto() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
        .then(response => response.json())
        .then(data => {
            // Process  
            console.log(data);
            // Display  
            displayImage(data.urls.regular, data.user.name, data.links.html);
        })
        .catch(error => console.error('Error:', error));
}

function displayImage(imageUrl, photographer, unsplashLink) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `
        <img src="${imageUrl}" alt="Random Unsplash Image">
        <p>Photo by <a href="${unsplashLink}?utm_source=api_lab&utm_medium=referral">${photographer}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a></p>
    `;
}

// Initial call to fetch an image
fetchRandomPhoto();
