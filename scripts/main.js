let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Contact popup logic
const contactLink = document.getElementById("contact-link");
const popup = document.getElementById("contact-popup");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("contact-form");

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "flex"; // show popup
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none"; // close when "x" clicked
});

// Close popup if user clicks outside of the form
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Placeholder submit behavior
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default form reload
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
      alert("⚠Sorry, something went wrong. Please try again later.");
    }
  } catch (error) {
    alert("Network error. Please check your connection and try again.");
  }
});



