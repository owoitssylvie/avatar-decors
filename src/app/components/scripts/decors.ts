// Define the image data for each artist
const decorData = {
  artist1: ["1.png", "1.png", "1.png", "1.png", "1.png", "1.png"],
  artist2: ["2.png", "2.png", "2.png", "2.png", "2.png", "2.png"],
  artist3: ["3.png", "3.png", "3.png", "3.png", "3.png", "3.png"],
  // Add more artists and images as needed
};

const artistData = {
  1: "artist1",
  2: "artist2",
  3: "artist3",
};

export function DecorData() {
  return decorData;
}

export function ArtistData() {
  return artistData;
}

/* 
  // Loop through the images for the selected artist
  if (decorData[artist]) {
    decorData[artist].forEach((image) => {
      // Create the download link
      const downloadLink = document.createElement("a");
      downloadLink.href = `images/${image}`;
      downloadLink.className = "download-link";
      downloadLink.textContent = "Download";
      downloadLink.download = image;
    });
  } else {
    console.log("No images found for artist:", artist); // Debugging line
  }
*/

// Left Over Code from script.js on original html/css/js implementation
