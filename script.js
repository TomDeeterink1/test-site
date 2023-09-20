const button = document.querySelector(".profile-button");
button.addEventListener("click", getmenu);

const hiddencontent = document.querySelector(".hidden");

function getmenu(i) {
    if (i = getmenu){
        hiddencontent.classList.toggle('visible')
    }
    else{
        
    }

    
}

const articles = document.querySelectorAll(".header-series");
let currentIndex = 0;

const articleDisplay = document.querySelector(".content");
const nextButton = document.querySelector(".next");
const backButton = document.querySelector(".back");

nextButton.addEventListener("click", showNextArticle);
backButton.addEventListener("click", showPreviousArticle);

function showNextArticle() {
  articles[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % articles.length;
  articles[currentIndex].classList.add("active");
}

function showPreviousArticle() {
  articles[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + articles.length) % articles.length;
  articles[currentIndex].classList.add("active");
}

// Initialize the display with the first article
articles[currentIndex].classList.add("active");



