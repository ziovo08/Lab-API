// Replace 'YOUR_ACCESS_KEY' with your actual access key
console.log('Test')

const ACCESS_KEY = 'uGWAdh21k2dwrrqhKVSKflffc_DPgC4aua8lVUPNS6c';

function fetchRandomPhoto() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data);
            // For example, display the image
            displayImage(data.urls.regular);
        })
        .catch(error => console.error('Error:', error));
}

function displayImage(imageUrl) {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.appendChild(imageElement);
}

// Example usage
fetchRandomPhoto();
