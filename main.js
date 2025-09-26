

function openTab(tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

function openModal() {
  document.getElementById("reservation-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("reservation-modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("reservation-modal");
  if (event.target === modal) {
    closeModal();
  }
};




const menuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});


