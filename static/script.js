const thumbnail = document.querySelector(".thumbnail");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const fullImage = document.querySelector(".full-image");

thumbnail.addEventListener("click", function () {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // prevent scrolling
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"; // enable scrolling
});

overlay.addEventListener("click", function (e) {
  if (e.target !== fullImage) {
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // enable scrolling
  }
});
