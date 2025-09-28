const itemsPerPage = 5;
let currentPage = 1;

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

function renderPage() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = data.slice(start, end);

  document.getElementById("content").innerHTML = pageItems
    .map((item) => `<p>${item}</p>`)
    .join("");

  document.getElementById("page-number").textContent = `Page ${currentPage}`;
}

function changePage(direction) {
  const maxPage = Math.ceil(data.length / itemsPerPage);
  currentPage += direction;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > maxPage) currentPage = maxPage;

  renderPage();
}

renderPage();
