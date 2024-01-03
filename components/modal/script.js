const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const handleOpenModal = () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  openModalBtn.classList.add("hidden");
};

openModalBtn.addEventListener("click", handleOpenModal);

const handleCloseModal = () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  openModalBtn.classList.remove("hidden");
};

closeModalBtn.addEventListener("click", handleCloseModal);

overlay.addEventListener("click", handleCloseModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    handleCloseModal();
  }
});
