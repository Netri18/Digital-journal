let currentPage = 1;

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const flipPage = document.getElementById("flipPage");

function loadPages() {
  leftPage.value = localStorage.getItem(`page${currentPage}`) || "";
  rightPage.value = localStorage.getItem(`page${currentPage + 1}`) || "";
}

leftPage.addEventListener("input", () => {
  localStorage.setItem(`page${currentPage}`, leftPage.value);
});

rightPage.addEventListener("input", () => {
  localStorage.setItem(`page${currentPage + 1}`, rightPage.value);
});

function nextPage() {
  flipPage.classList.add("flipped");

  setTimeout(() => {
    currentPage += 2;
    loadPages();
    flipPage.classList.remove("flipped");
  }, 800);
}

function prevPage() {
  if (currentPage > 1) {
    currentPage -= 2;
    loadPages();
  }
}

loadPages();
