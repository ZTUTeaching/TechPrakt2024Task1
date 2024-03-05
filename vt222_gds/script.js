document.addEventListener("DOMContentLoaded", fetchNews);

function fetchNews() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      const newsContainer = document.getElementById("news-container");
      data.slice(0, 10).forEach(news => {
        // Slice the first 10 news items
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        const newsImg = document.createElement("img");
        newsImg.classList.add("news-img");
        newsImg.setAttribute(
          "src",
          `https://via.placeholder.com/600x400?text=${news.id}`
        ); // Placeholder images
        newsImg.setAttribute("alt", "News Image");

        const newsTitle = document.createElement("h2");
        newsTitle.classList.add("news-title");
        newsTitle.textContent = news.title;

        const newsDesc = document.createElement("p");
        newsDesc.classList.add("news-desc");
        newsDesc.textContent = news.body;

        newsItem.appendChild(newsImg);
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDesc);

        newsContainer.appendChild(newsItem);
      });
    })
    .catch(error => console.error("Error fetching news:", error));
}
