const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const joinForm = document.querySelector(".join__form");
const modal = document.getElementById("thankyouModal");
const closeBtn = modal.querySelector(".close-modal");

joinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  joinForm.querySelectorAll("input, select").forEach((field) => {
    if (field.value.trim() === "" || field.value === "") {
      field.classList.add("error");
      hasError = true;
    } else {
      field.classList.remove("error");
    }
  });

  if (hasError) return;

  modal.classList.add("show");

  joinForm.reset();
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
