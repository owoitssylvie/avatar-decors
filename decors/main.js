// Define the image data for each artist
const decorData = {
    artist1: ["1.png", "1.png", "1.png", "1.png", "1.png", "1.png", "1.png", "1.png", "1.png", "1.png", "1.png", "1.png",], // Add more images as needed
    artist2: ["2.png", "2.png", "2.png", "2.png", "2.png", "2.png", "2.png", "2.png", "2.png", "2.png", "2.png", "2.png",], // Add more images as needed
    artist3: ["3.png", "3.png", "3.png", "3.png", "3.png", "3.png", "3.png", "3.png", "3.png", "3.png", "3.png", "3.png",], // Add more images as needed
    // Add more artists and images as needed
};

// Get references to the dropdown, gallery, and title elements
const artistSelect = document.getElementById('artist-select');
const decorGallery = document.getElementById('decor-gallery');
const artistTitle = document.getElementById('artist-title');

// Function to update the gallery based on the selected artist
function updateGallery(artist) {
    decorGallery.innerHTML = ''; // Clear existing images
    artistTitle.textContent = `${artist.charAt(0).toUpperCase() + artist.slice(1)}'s Decors:`; // Update the title

    // Loop through the images for the selected artist
    decorData[artist].forEach(image => {
        // Create the grid item element
        const item = document.createElement('div');
        item.className = 'grid-item';

        // Create the image wrapper element
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';

        // Create the Discord logo image (the circular overlay)
        const discordImg = document.createElement('img');
        discordImg.src = `images/discordlogo.png`; // Use discordlogo.png for the overlay
        discordImg.alt = "Discord Logo";

        // Create the decor image element
        const frameImg = document.createElement('img');
        frameImg.src = `images/${image}`; // Use the selected artist's image
        frameImg.alt = image;

        // Append the Discord logo and decor image to the wrapper
        wrapper.appendChild(discordImg);  // This will be below the decor image
        wrapper.appendChild(frameImg);    // This will be on top of the Discord logo
        item.appendChild(wrapper);

        // Create the download link
        const downloadLink = document.createElement('a');
        downloadLink.href = `images/${image}`;
        downloadLink.className = 'download-link';
        downloadLink.textContent = 'Download';
        downloadLink.download = image;

        // Append the download link to the grid item
        item.appendChild(downloadLink);

        // Append the grid item to the gallery
        decorGallery.appendChild(item);
    });
}

// Event listener for artist selection change
artistSelect.addEventListener('change', (event) => {
    updateGallery(event.target.value);
});

// Initialize the gallery with the first artist's images
updateGallery('artist1');
