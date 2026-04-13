// ----- js form login -----
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
// ---- modal ----
const openBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  setTimeout(() => {
    modalBox.classList.add("active");
  }, 50);
});
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalBox.classList.remove("active");
    setTimeout(() => {
      modalOverlay.style.display = "none";
    }, 500);
  }
});
