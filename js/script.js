const { Dropdown } = require("bootstrap");

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");

  sidebar.classList.toggle("active");

  // Change icon on open/close
  if (sidebar.classList.contains("active")) {
    menuBtn.innerHTML = '<i class="fa fa-times"></i>'; // Close icon
  } else {
    menuBtn.innerHTML = '<i class="fa fa-bars"></i>'; // Menu icon
  }
}


 // ====================================================================
    

   const box = document.getElementById("box");
    const sliderbox = document.getElementById("sliderbox");
    const handle = document.getElementById("handle");
    const topImg = document.getElementById("top-img");

    let active = false;

    function moveSlider(x) {
      const rect = box.getBoundingClientRect();

      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

       sliderbox.style.left = x + "px";
      handle.style.left = x + "px";
      topImg.style.clipPath = `inset(0 ${rect.width - x}px 0 0)`;
    }

    function start() { active = true; }
    function stop() { active = false; }

    function move(e) {
      if (!active) return;
      let x = (e.touches ? e.touches[0].clientX : e.clientX) - box.getBoundingClientRect().left;
      moveSlider(x);
    }

    handle.addEventListener("mousedown", start);
    sliderbox.addEventListener("mousedown", start);
    window.addEventListener("mouseup", stop);
    window.addEventListener("mousemove", move);

    handle.addEventListener("touchstart", start);
    sliderbox.addEventListener("touchstart", start);
    window.addEventListener("touchend", stop);
    window.addEventListener("touchmove", move); 

    //  ========================about us page=========================


document.addEventListener("DOMContentLoaded", () => {

  const counterEl = document.getElementById("counter");
  const counterSection = counterEl.closest(".col-lg-3");

  if (!counterEl || !counterSection) return;

  const startYear = 2002;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;

  let interval = null;

  const startCounter = () => {
    let count = 0;
    counterEl.innerHTML = "0+";

    clearInterval(interval); // safety

    interval = setInterval(() => {
      if (count < experience) {
        count++;
        counterEl.innerHTML = count + "+";
      } else {
        clearInterval(interval);
      }
    }, 40);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter();   // 🔁 har baar start
        }
      });
    },
    {
      threshold: 0.6, // 60% visible hote hi
    }
  );

  observer.observe(counterSection);

});



let index = 0;
showSlide(index);

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    slides[index].style.display = "block";
    dots[index].classList.add("active");
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

function currentSlide(n) {
    index = n;
    showSlide(index);
}

/* Auto Slide */
setInterval(() => {
    nextSlide();
}, 3000);





// Dropdown =====================
  const dropdown = document.getElementById("productDropdown");
  const toggle = dropdown.querySelector(".dropdown-toggle");

  // Hover on PRODUCTS → open
  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("open");
  });

  // Click on PRODUCTS (mobile) → prevent redirect
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.add("open");
  });

  // Close ONLY when clicking a product link
  dropdown.querySelectorAll(".dropdown-menu a").forEach(link => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
    });
  });


  // conatct number section
  document.getElementById("mobile_code").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
});