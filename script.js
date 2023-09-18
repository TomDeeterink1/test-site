const button = document.querySelector(".profile-button");
button.addEventListener("mouseover", getmenu);

const hiddencontent = document.querySelector(".hidden");

function getmenu() {
    hiddencontent.classList.toggle('visible')
}
