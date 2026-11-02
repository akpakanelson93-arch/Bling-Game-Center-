const games = [
  {
    title: "Pixel Dash",
    category: "action",
    tags: ["Arcade", "Fast"],
    description: "Run, dodge, and survive colorful obstacles in this fast arcade game.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    playUrl: "https://example.com/play/pixel-dash",
    downloadUrl: "https://example.com/downloads/pixel-dash.zip"
  },
  {
    title: "Car Drift 3D",
    category: "racing",
    tags: ["Racing", "3D"],
    description: "Race through sharp corners and drift like a real champion.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    playUrl: "https://example.com/play/car-drift-3d",
    downloadUrl: "https://example.com/downloads/car-drift-3d.zip"
  },
  {
    title: "Block Puzzle",
    category: "puzzle",
    tags: ["Logic", "Brain"],
    description: "Arrange blocks and clear lines to beat each level.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    playUrl: "https://example.com/play/block-puzzle",
    downloadUrl: "https://example.com/downloads/block-puzzle.zip"
  },
  {
    title: "Football Rush",
    category: "sports",
    tags: ["Sports", "Arcade"],
    description: "Score goals, attack fast, and win every match.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    playUrl: "https://example.com/play/football-rush",
    downloadUrl: "https://example.com/downloads/football-rush.zip"
  }
];

const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";
let searchTerm = "";

function renderGames() {
  const filtered = games.filter((game) => {
    const matchesFilter = activeFilter === "all" || game.category === activeFilter;
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  gameList.innerHTML = "";

  filtered.forEach((game) => {
    const card = document.createElement("article");
    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <div class="game-content">
        <h2>${game.title}</h2>
        <div class="game-tags">
          ${game.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <p>${game.description}</p>
        <div class="game-actions">
          <a href="${game.playUrl}" target="_blank" class="play-btn">Play Now</a>
          <a href="${game.downloadUrl}" target="_blank" class="download-btn">Download</a>
        </div>
      </div>
    `;

    gameList.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim();
  renderGames();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderGames();
  });
});

renderGames();
