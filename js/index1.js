const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");
let currentIndex = 0;

function showFullImage(index) {
  fullImage.src = images[index].src;
  fullImageContainer.style.display = "block";
}

function closeFullImage() {
  fullImageContainer.style.display = "none";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex--;
    showFullImage(currentIndex);
  } else if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
    currentIndex++;
    showFullImage(currentIndex);
  } else if (event.key === "Escape") {
    closeFullImage();
  }
});

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    showFullImage(currentIndex);
  });
});

fullImageContainer.addEventListener("click", closeFullImage);