 // Highlight nav-bar links when clicked
 document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-bar a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animate buttons on hover
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Scroll to sections smoothly
document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Auto repair services
document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const servicesContainer = document.getElementById("servicesContainer");
  const totalCards = document.querySelectorAll(".service-card").length;
  let currentIndex = 0;

  // Function to move to the previous set of cards
  const movePrev = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalCards / 2 - 1; // Loop back to the last set of cards
    }
    updateCarouselPosition();
  };

  // Function to move to the next set of cards
  const moveNext = () => {
    if (currentIndex < totalCards / 2 - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first set of cards
    }
    updateCarouselPosition();
  };

  // Update the carousel position based on the current index
  const updateCarouselPosition = () => {
    const cardWidth = document.querySelector(".service-card").offsetWidth;
    servicesContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  // Event listeners for the buttons
  prevBtn.addEventListener("click", movePrev);
  nextBtn.addEventListener("click", moveNext);

  // Smooth Scroll for "See More" Button (if scrolling to a section on the same page)
  const seeMoreButton = document.querySelector(".see-more-button");
  
  // Check if it's a link to another page or a section within the same page
  seeMoreButton.addEventListener("click", (event) => {
    const target = seeMoreButton.getAttribute("href");

    if (target.startsWith("#")) {
      // If the target is a section within the same page, prevent default and scroll smoothly
      event.preventDefault();
      const targetSection = document.querySelector(target);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

function showImageModal(imageSrc) {
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("imageModal").style.display = "flex";
}
function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}
