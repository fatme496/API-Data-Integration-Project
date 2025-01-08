const apIUrl = "https://jsonplaceholder.typicode.com/photos";

const fetchesAndDisplay = async () => {
  try {
    const response = await fetch(apIUrl);
    const posts = await response.json();

    const postsContainer = document.getElementById("grid-container");
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
      <div class="grid-container">
      <div class="grid-item">
        <div class="img-container"><a href="${post.thumbnailUrl}"><img src="${post.url}"></a></div>
        <h2>${post.title}</h2>
        <button onclick="window.location.href='Detailed-Information-Page.html?photoId=${post.id}';">See More Details</button>
      </div>
      </div>`;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

fetchesAndDisplay();

const apiUrl = "https://jsonplaceholder.typicode.com/photos";

const fetchAndDisplay = async () => {
  try {
    const response2 = await fetch(apiUrl);
    const photo = await response2.json();

    const Container = document.getElementById("photo-card");
    photo.forEach(ph => {
      const photoElement = document.createElement("div");
      photoElement.innerHTML = `
      <img src="${ph.url}" alt="Album Photo" class="photo">
      <h2 class="album-title">Album Title</h2>
      <h3>https://jsonplaceholder.typicode.com/albums/${ph.albumId}/title</h3>`;
      Container.appendChild(photoElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};