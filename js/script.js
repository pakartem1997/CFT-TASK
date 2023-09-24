function clearSearchResult(cells, searchInfo) {
  cells.forEach((cell) => {
    cell.innerHTML = cell.textContent;
  })
  searchInfo.textContent = '';
}

function search() {
  const textToSearch = document.getElementById("searchInput").value.trim();
  const cellsSpecialPowers = document.querySelectorAll("[data-search='special-powers']");
  const searchInfo = document.getElementById("searchInfo");

  if (textToSearch.length < 1) {
    clearSearchResult(cellsSpecialPowers, searchInfo);
    return;
  }

  const searchPattern = new RegExp(`${textToSearch}`, "gi");
  let numberOfMatches = 0;

  cellsSpecialPowers.forEach((cell) => {
    cell.innerHTML = cell.textContent
      .replace(searchPattern, match => { numberOfMatches++; return `<mark class="matching-text">${match}</mark>` })
  })

  searchInfo.textContent = numberOfMatches ? `количество найденных совпадений ${numberOfMatches}` : "Ничего не найдено";
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  if (searchInput.value === "") {
    const cellsSpecialPowers = document.querySelectorAll("[data-search='special-powers']");
    const searchInfo = document.getElementById("searchInfo");
    clearSearchResult(cellsSpecialPowers, searchInfo);
  }
});

searchInput.addEventListener("keypress", function (event) {
  if (event.key === 'Enter') {
    search();
  }
});

window.addEventListener('load', function () {
  setTimeout(function () {
    const searchInput = document.getElementById('searchInput');
    searchInput.focus();
  }, 1000);
});