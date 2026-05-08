///////Login Validation/////////
function validateForm() {
    // 1. Select the ELEMENT, not the .value
    const emailInput = document.querySelector('.Email');
    const passwordInput = document.querySelector('.Password');
    const errorMsg = document.querySelector('.error-message'); // Added dot for class

    // Get the values for comparison
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue === "" || passwordValue === "") {
        // 2. Add the Bootstrap 'is-invalid' class to the elements
        emailInput.classList.add('is-invalid');
      passwordInput.classList.add('is-invalid');
        
        errorMsg.innerText = "عذراً، يرجى إدخال جميع الحقول المطلوبة.";
        errorMsg.style.display = "block";
    } else {
        // 3. Clean up: remove classes if the user fixed the error
        emailInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        passwordInput.classList.add('is-valid');
        
        errorMsg.style.display = "none";
    }
}
// initialize isotope library

var $products = $(".all-products").isotope({
  // options
  originLeft: false,
});

// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $products.isotope({ filter: filterValue });
});

/////////////////////////////////////////////
//initialize swiper library
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  responsive: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // Default parameters (Mobile)
  // slidesPerView: 1,
  // spaceBetween: 10,

  // Responsive breakpoints

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
