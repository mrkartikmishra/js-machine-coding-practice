const accordianHeaders = document.querySelectorAll(".accordian-header");
const accordianBodys = document.querySelectorAll(".accordian-body");

accordianHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordianItem = header.parentElement;
    const accordianBody = accordianItem.querySelector(".accordian-body");

    accordianBodys.forEach((body) => {
      if (body !== accordianBody) {
        body.classList.remove("active");
        body.style.maxHeight = "0";
      }
    });

    accordianBody.classList.toggle("active");

    if (accordianBody.classList.contains("active")) {
      accordianBody.style.maxHeight = accordianBody.scrollHeight + "px";
    } else {
      accordianBody.style.maxHeight = "0";
    }
  });
});
