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


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Get the container element & create an array of section names
const navbarCollapse = document.getElementById("navbarCollapse");
const sectionTitles = ["Home", "About", "Shop", "Origins", "More", "Contact"];

// Select the child element of navbarCollapse
const nav = navbarCollapse.querySelector("nav");

// Loop over sections array & create a nav-link for each one
sectionTitles.forEach(section => {
  const a = document.createElement("a");
  a.textContent = section;

  if (section === "Home") {
    a.href = `#top`;
  } else if (section === "More") {
    a.href = "#";
    a.classList.add("nav-link","dropdown-toggle");
    a.setAttribute("data-bs-toggle", "dropdown");
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown-menu", "m-0");
    

    const dropdownLinks = ["Service", "Gift Card"];

    dropdownLinks.forEach((link) => {
      const dropdownLink = document.createElement("a");
      dropdownLink.href = `#${link.toLowerCase()}`;
      dropdownLink.classList.add("dropdown-item");
      dropdownLink.textContent = link;
      dropdown.appendChild(dropdownLink);
    });

    const dropdownWrapper = document.createElement("div");
    dropdownWrapper.classList.add("nav-item", "dropdown");
    dropdownWrapper.appendChild(a);
    dropdownWrapper.appendChild(dropdown);

    nav.appendChild(dropdownWrapper);
  } else {
    a.href = `#${section.toLowerCase()}`;
  }

  a.classList.add("nav-link", "nav-item");
  nav.appendChild(a);
});

// Get all nav-links & set "Home" as default active link
const links = nav.getElementsByClassName("nav-link");
const active = nav.getElementsByClassName("active");

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

// Setup back-to-top link
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