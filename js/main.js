// Minimal, dependency-free carousel controller.
// Works for both the reviews carousel (with dots) and the backlist carousel (arrows only).

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
});

function initCarousel(root) {
  const track = root.querySelector("[data-carousel-track]");
  const slides = Array.from(root.querySelectorAll("[data-carousel-slide]"));
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  const dotsWrap = root.querySelector("[data-carousel-dots]");

  if (!track || slides.length === 0) return;

  // Build dot indicators if a dots container exists (reviews carousel).
  let dots = [];
  if (dotsWrap) {
    dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.addEventListener("click", () => scrollToSlide(i));
      dotsWrap.appendChild(dot);
      return dot;
    });
  }

  function currentIndex() {
    const trackLeft = track.scrollLeft;
    let closest = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - trackLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return closest;
  }

  function updateDots() {
    if (!dots.length) return;
    const idx = currentIndex();
    dots.forEach((dot, i) => dot.setAttribute("aria-selected", i === idx ? "true" : "false"));
  }

  function scrollToSlide(i) {
    const slide = slides[Math.max(0, Math.min(i, slides.length - 1))];
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => scrollToSlide(currentIndex() - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => scrollToSlide(currentIndex() + 1));
  }

  track.addEventListener("scroll", () => {
    window.clearTimeout(track._scrollTimeout);
    track._scrollTimeout = window.setTimeout(updateDots, 80);
  });

  updateDots();
}

// Newsletter form placeholder handler.
// Replace this with a real submit to your email service (Mailchimp/ConvertKit/Beehiiv)
// before launch — right now it just confirms the email was typed correctly.
document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-newsletter-form]");
  if (!form) return;
  e.preventDefault();
  const input = form.querySelector("input[type='email']");
  if (input && input.value) {
    input.value = "";
    input.placeholder = "Thanks — you're on the list";
  }
});
