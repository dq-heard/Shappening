(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
})(jQuery);

// Get the container element & create an array of section names
const navbarCollapse = document.getElementById("navbarCollapse");
const sectionTitles = ["Home", "About", "Shop", "Connect", "E-Gifts", "Policies"];

// Select the child element of navbarCollapse
const nav = navbarCollapse.querySelector("nav");

// Loop over sections array & create a nav-link for each one
sectionTitles.forEach(section => {
  const a = document.createElement("a");
  a.textContent = section;

  if (section === "Home") {
    a.href = `#top`;
    a.classList.add("nav-link", "nav-item");
    nav.appendChild(a);

  } else {
    a.href = `#${section.toLowerCase()}`;
    a.classList.add("nav-link", "nav-item");
    nav.appendChild(a);
  }
});

// Get all nav-links & set "Home" as default active link
const links = nav.getElementsByClassName("nav-link");
let active = nav.getElementsByClassName("active");

if (active.length === 0) {
  links[0].classList.add("active");
  active = nav.getElementsByClassName("active");
}

// Loop through the links and add active class on click
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(e) {
    e.preventDefault();  
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";

    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Get sections & match current one with active nav-links
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let rect = section.getBoundingClientRect();
    if (rect.top <= 90 && rect.bottom >= (window.innerHeight)/5) {
      current = section.getAttribute("id");
    }
  });

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    if (links[i].getAttribute("href").substring(1) === current && links[i].innerHTML !== "More") {
      links[i].classList.add("active");
    } else if (links[i].innerHTML === "Home" || links[i].innerHTML === "Top") {
      links[i].classList.add("active");
    }
  }

  if (current !== "home") {
    links[0].classList.remove("active");
  }
});

/* HERO */
// Modal Video
let videoSrc;
const btnPlay = document.querySelectorAll(".btn-play");
const videoModal = document.getElementById("videoModal");
const video = document.getElementById("video");

const modalClose = videoModal.querySelector(".btn-close");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < btnPlay.length; i++) {
    btnPlay[i].addEventListener("click", function () {
      videoSrc = this.getAttribute("data-src");
    });
  }

  videoModal.addEventListener("shown.bs.modal", function (e) {
    video.setAttribute(
      "src",
      videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"
    );
  });

  videoModal.addEventListener("hidden.bs.modal", function (e) {
    video.setAttribute(
      "src",""
    );
  });
});

/* SHOP */
// Create an array of menu items
const menu = [
  {
    id: 1,
    title: "Earrings",
    price: 9.99,
    img: "./img/products/earrings-1.jpg",
    img_hover: "./img/products/earrings-2.jpg",
    desc: `Earrings are mostly sold at markets. 
    You can inquire on Instagram or email before purchasing to ensure that we have your preferred set.`,
  },
  {
    id: 2,
    title: "Leaves",
    category: "coasters",
    price: 35.99,
    img: "./img/products/leaves-1.jpg",
    img_hover: "./img/products/leaves-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 3,
    new: true,
    title: "His Name (Necklace)",
    price: 9.99,
    img: "./img/products/necklace-1.jpg",
    img_hover: "./img/products/necklace-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 4,
    title: "9 Miles Centerpiece",
    category: "trays",
    price: 19.99,
    img: "./img/products/mile9-1.jpg",
    img_hover: "./img/products/mile9-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 5,
    new: true,
    title: "Thankful",
    category: "coasters",
    price: 35.99,
    img: "./img/products/thankful-1.jpg",
    img_hover: "./img/products/thankful-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 6,
    title: "Seaside",
    category: "coasters",
    price: 35.99,
    img: "./img/products/seaside-1.jpg",
    img_hover: "./img/products/seaside-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 7,
    title: "Nature",
    category: "keychains",
    price: 9.99,
    img: "./img/products/nature-1.jpg",
    img_hover: "./img/products/nature-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 8,
    title: "Framed 7 Miles Beach",
    category: "trays",
    price: 19.99,
    img: "./img/products/framed7-1.jpg",
    img_hover: "./img/products/framed7-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 9,
    title: "Negril Crush",
    category: "keychains",
    price: 11.99,
    img: "./img/products/negril-1.jpg",
    img_hover: "./img/products/negril-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 10,
    best_seller: true,
    title: "9 Miles Beach",
    category: "trays",
    price: 24.99,
    img: "./img/products/9mile-1.jpg",
    img_hover: "./img/products/9mile-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 11,
    title: "Baby Girl (Initials)",
    category: "keychains",
    price: 11.99,
    img: "./img/products/babygirl-1.jpg",
    img_hover: "./img/products/babygirl-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 12,
    title: "First Crush",
    category: "keychains",
    price: 11.99,
    img: "./img/products/firstcrush-1.jpg",
    img_hover: "./img/products/firstcrush-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 13,
    best_seller: true,
    title: "Baby Girl",
    category: "keychains",
    price: 11.99,
    img: "./img/products/bbygirl-1.jpg",
    img_hover: "./img/products/bbygirl-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 14,
    title: "Reggae Medley",
    category: "keychains",
    price: 11.99,
    img: "./img/products/reggae-1.jpg",
    img_hover: "./img/products/reggae-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 15,
    title: "Garçon",
    category: "trays",
    price: 29.99,
    img: "./img/products/garcon-1.jpg",
    img_hover: "./img/products/garcon-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 16,
    title: "In Bloom",
    category: "coasters",
    price: 35.99,
    img: "./img/products/inbloom-1.jpg",
    img_hover: "./img/products/inbloom-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 17,
    title: "Glamorous",
    category: "keychains",
    price: 11.99,
    img: "./img/products/glamorous-1.jpg",
    img_hover: "./img/products/glamorous-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 18,
    title: "Blue Lagoon",
    category: "coasters",
    price: 35.99,
    img: "./img/products/bluelagoon-1.jpg",
    img_hover: "./img/products/bluelagoon-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 19,
    title: "Nurture (Bookmark)",
    price: 9.99,
    img: "./img/products/nurture-1.jpg",
    img_hover: "./img/products/nurture-2.jpg",
    desc: `Lorem Ipsum.`,
  },
  {
    id: 20,
    title: "Fancy Me",
    category: "keychains",
    price: 11.99,
    img: "./img/products/fancyme-1.jpg",
    desc: `Lorem Ipsum.`,
  },
];
 
// Get parent elements for this section
const tabContent = document.querySelector(".tab-content");
const btnContainer = document.querySelector(".tab-class ul");
 
// Display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
 
// Create entries for each menu item
function displayMenuItems(menuItems) {
  // Toggle the visibility of the span elements based on the item properties
  function toggleSpans(menuItems) {
    menuItems.forEach((item) => {
      const newSpan = document.getElementById(item.id).querySelector(".new");
      const bestSellerSpan = document.getElementById(item.id).querySelector(".best-seller");

      newSpan.style.display = item.new ? "block" : "none";
      bestSellerSpan.style.display = item.best_seller ? "block" : "none";
    });
  }

  let displayMenu = menuItems.map(function (item) {
    return `<div class="col-md-6 col-lg-4 col-xl-3">
              <div id=${item.id} class="single-product">
                <div
                  class="part-1"
                  style="background: url(${item.img}) no-repeat center; background-size: cover;"
                >
                  <div
                    class="part-1-image-hover"
                    style="background-image: url(${item.img_hover})"
                  ></div>
                  <span class="best-seller">Best Seller</span>
                  <span class="new">New</span>
                  <div class="view-more">View More</div>
                </div>
                <div class="part-2">
                  <h3 class="product-title">${item.title}</h3>
                  <h4 class="product-price">$${item.price}</h4>
                </div>
              </div>
            </div>`;
  });

  displayMenu = displayMenu.join("");
  tabContent.innerHTML = displayMenu;
  toggleSpans(menuItems);
}

// Create categories and filter buttons based on item type
function displayMenuButtons(menuFiltered, currentCategory) {
  const categories = menu.reduce (
    function (values, item) {
      if (!values.includes(item.category) && item.category !== currentCategory) {
        values.push(item.category);
      }
      return values;
    },
    menuFiltered ? ["all"] : []
  );
  
  const categoryBtns = categories
    .map(function (category) {
      if (category === undefined) {
        return "";
      }
      return `<li class="nav-item">
                <a
                  class="nav-link text-white"
                  data-bs-toggle="pill"
                  href="#"
                  data-id=${category}
                  >${category}</a
                >
              </li>`;
    })
    .join("");
 
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".nav-link");
 
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
  
      if (category === "all") {
        displayMenuItems(menu);
        displayMenuButtons(false);
      } else {
        displayMenuItems(menuCategory);
        // update the filter buttons
        displayMenuButtons(true, category);
      }
    });
  });  
}

/* GIFT CARD */
const gift = document.getElementById("e-gifts");

// Select all the buttons in the .btn-group div
const buttons = gift.querySelectorAll(".amount input");

// Select the h1 element
const h1 = gift.querySelector("h1");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Insert the value of the clicked button into the h1 element
    h1.textContent = button.value;
  });
});

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the active class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add the active class to the clicked button
    button.classList.add("active");
  });
});

let quantity = 1;
const input = document.querySelector("input[placeholder='1']");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

minusButton.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    input.placeholder = quantity;
  }
});

plusButton.addEventListener("click", () => {
  quantity++;
  input.placeholder = quantity;
});

// Get the For Myself and For Someone Else button elements
const forMyselfButton = document.querySelector("input[value='For Myself']");
const forSomeoneElseButton = document.querySelector("input[value='For Someone Else']");

// Get the Date, Recipient e-Mail, Name, and Message fields
const dateField = document.getElementById("date");
const recipientEmailField = document.getElementById("email");
const recipientNameField = document.getElementById("name");
const messageField = document.getElementById("message");
const submitButton = document.getElementById("submit");

// Add a click event listener to the For Myself button
forMyselfButton.addEventListener("click", () => {
  // Hide the respective fields
  dateField.style.display = "none";
  recipientEmailField.style.display = "none";
  recipientNameField.style.display = "none";
  messageField.style.display = "none";

  // Remove the active class from the For Someone Else button
  forSomeoneElseButton.classList.remove("active");

  // Toggle the active class on the For Myself button
  forMyselfButton.classList.toggle("active");

  // Position change for Submit Button
  submitButton.style.marginTop = "-11rem";
});

// Add a click event listener to the For Someone Else button
forSomeoneElseButton.addEventListener("click", () => {
  // Show the respective fields
  dateField.style.display = "block";
  recipientEmailField.style.display = "block";
  recipientNameField.style.display = "block";
  messageField.style.display = "block";

  // Remove the active class from the For Myself button
  forMyselfButton.classList.remove("active");

  // Toggle the active class on the For Someone Else button
  forSomeoneElseButton.classList.toggle("active");

  // Position reset for Submit Button
  submitButton.style.marginTop = "0";
});

/* BACK TO TOP */
const topLink = document.querySelector(".back-to-top");

window.onscroll = () => {
  if (window.pageYOffset > 100) {
    topLink.style.display = "block";
  } else {
    topLink.style.display = "none";
  }
};

// // Active link reset for clicked top-link
topLink.addEventListener("click", function() {
  active[0].className = active[0].className.replace(" active", "");
  links[0].className += " active";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});