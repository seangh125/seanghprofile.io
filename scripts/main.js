function startSlideshow(slideSelector, captionSelector) {
  const slides = document.querySelectorAll(slideSelector);
  const captionBox = document.querySelector(captionSelector);
  if (slides.length === 0) {
    return;
  }

  let index = 0;

  function updateCaption() {
    const caption = slides[index].dataset.caption || "";
    if (captionBox) captionBox.textContent = caption;
  }

  function nextSlide() {
    slides.forEach(s => s.style.display = "none");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
    updateCaption();
    setTimeout(nextSlide, 3000);
  }

  // Show the first slide + caption
  slides[0].style.display = "block";
  updateCaption();
  setTimeout(nextSlide, 3000);
}

startSlideshow(".photo-slide", ".photography-caption");
startSlideshow(".game-slide", ".gaming-caption");
startSlideshow(".lego", ".lego-caption");

// Contact popup logic
const contactLink = document.getElementById("contact-link");
const popup = document.getElementById("contact-popup");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("contact-form");

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent successfully.");
      form.reset();
      popup.style.display = "none";
    } else {
      alert("Sorry, something went wrong. Please try again later.");
    }
  } catch (error) {
    alert("Network error. Please check your connection and try again.");
  }
});



