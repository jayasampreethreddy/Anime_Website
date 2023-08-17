let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-time");
  navbar.classList.toggle("active");
};

const body = document.body;
const header = document.querySelector("header");
const content = document.querySelector(".content");
const footer = document.querySelector("footer");

// Retrieve dark mode preference from Local Storage
const storedMode = localStorage.getItem("darkMode");
if (storedMode === "true") {
  body.classList.add("dark-mode");
  header.classList.add("dark-mode");
  content.classList.add("dark-mode");
  footer.classList.add("dark-mode");
}

function toggleDarkMode() {
  // Toggle dark mode styles
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  content.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  // Update mode preference in Local Storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle-mode-button");

  toggleButton.addEventListener("click", toggleDarkMode);

  
});



function searchAnime() {
  const searchInput = document.getElementById("search-input").value;
  const apiUrl = `http://localhost:3000/search?keyw=${searchInput}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((animelist) => {
      const searchResultsContainer = document.getElementById("search-results");
      searchResultsContainer.innerHTML = "";

      animelist.forEach((anime) => {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        const animeImage = document.createElement("img");
        animeImage.classList.add("anime-img");
        animeImage.src = anime.animeImg; // Check the property name in your data

        const animeTitle = document.createElement("p");
        animeTitle.classList.add("anime-title");
        animeTitle.textContent = anime.animeTitle;

        const animeStatus = document.createElement("p");
        animeStatus.classList.add("anime-status");
        animeStatus.textContent = anime.status;

        // Corrected the missing closing brace for this event listener
        animeCard.addEventListener("click", () => {
          const clickedAnimeId = anime.animeId;
          window.location.href = `def.html?animeId=${clickedAnimeId}`;
        }); // Closing brace for the event listener

        animeCard.appendChild(animeImage);
        animeCard.appendChild(animeTitle);
        animeCard.appendChild(animeStatus);

        searchResultsContainer.appendChild(animeCard);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}




