document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  loadData();
  numberEffect();
}

function loadData() {
  let summaryContainer = document.getElementById("js-summary-list");
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      summaryContainer.innerHTML = ""; // Clear existing content

      data.forEach((item) => {
        const summaryItem = document.createElement("li");
        summaryItem.setAttribute("data-icon", item.icon);

        const titleSpan = document.createElement("span");
        titleSpan.className = "summary__title";
        titleSpan.textContent = item.category;

        const scoreSpan = document.createElement("span");
        const strong = document.createElement("strong");
        strong.textContent = item.score;
        const percentageSpan = document.createElement("span");
        percentageSpan.className = "summary__percentage";
        percentageSpan.textContent = " / 100";

        scoreSpan.appendChild(strong);
        scoreSpan.appendChild(percentageSpan);

        summaryItem.appendChild(titleSpan);
        summaryItem.appendChild(scoreSpan);
        summaryContainer.appendChild(summaryItem);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
}

function numberEffect() {
  let cipherElement = document.getElementById("js-score-container");
  let number = cipherElement.dataset.count;

  let current = 0,
    range = 400 - 0,
    increment = 1000 > 400 ? 1 : -1,
    step = Math.abs(Math.floor(5000 / range)),
    timer = setInterval(() => {
      current += increment;
      cipherElement.textContent = current;
      if (current == number) {
        clearInterval(timer);
      }
    }, step);
}
