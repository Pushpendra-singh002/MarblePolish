

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("reservation-form");
  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // page reload rokne ke liye

    var formData = {
      first_name: document.getElementById("user_name").value,
      company_name: document.getElementById("company_name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("mobile_code").value,

      // 👇 welcome text included
      message:
        "Welcome VARDHMAN SUPER ABRASIVES\n\n" +
        document.getElementById("message").value
    };

    emailjs
      .send("service_33imtoq", "template_zb3vzxx", formData)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        
        confirm("Message sent successfully!");
        form.reset();
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again!");
      });
  });

});




const faqItems = document.querySelectorAll(".faq-item");

function closeItem(item) {
  const button = item.querySelector(".faq-header");
  const body = item.querySelector(".faq-body");

  item.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
  body.style.maxHeight = 0;
}

function openItem(item) {
  const button = item.querySelector(".faq-header");
  const body = item.querySelector(".faq-body");

  item.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");
  body.style.maxHeight = body.scrollHeight + "px";
}

// Initialize open/closed state
faqItems.forEach((item) => {
  const body = item.querySelector(".faq-body");
  if (item.classList.contains("is-open")) {
    body.style.maxHeight = body.scrollHeight + "px";
  } else {
    body.style.maxHeight = 0;
  }
});

// Click behavior (only one open at a time)
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-header");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((faq) => closeItem(faq));

    if (!isOpen) {
      openItem(item);
    }
  });
});



