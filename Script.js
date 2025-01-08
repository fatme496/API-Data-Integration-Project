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
        <div><a href="${post.thumbnailUrl}"><img src="${post.url}"></a></div>
        <h2>${post.title}</h2>
      </div>
      </div>`;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

fetchesAndDisplay();
