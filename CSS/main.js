// Navbar scroll color change
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider 2
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Link
let navbarline = document.getElementById("navbar-first");
navbarline?.addEventListener("click", () => {
  window.location = "sleep.html";
});

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   // pagination: {
//   //   el: ".swiper-pagination"
//   // },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar"
//   }
// });

let mainSection = document.getElementById("data-list-wrapper");

function fetchdata() {
  fetch("http://localhost:3000/productData")
    .then((res) => res.json())
    .then((data) => cardList(data))
    .catch((err) => console.log(err));
}
fetchdata();

function cardList(data) {
  let store = data.map((el) =>
    SingleCard(el.price, el.image, el.category)
  );
  mainSection.innerHTML = store.join("");
}

function SingleCard(price,image,category) {
  let card = `<a href="dis2.html?category=${category}&price=${price}&image=${image}">

  <div class="card col-12">
  <div class="card-img" >
    <img src=${image} alt=${category} style="width:340px; position-"relative";>
  </div>
  <div class="card-body" style="width:340px">
    <p class="card-price">${price}</p>
    <p class="card-product_name">${category}</p>
  </div>
</div>
  </a>`;
  return card;
}

{
  /* <div class="container-fluid  p-0" id="data-list-wrapper"style="display: grid;grid-template-columns: repeat(3,1fr);">
                        <div class="card-list">
                             <div class="cart-img" style="position: absolute;">
                                  <a href=""><img src="https://snowehome.com/cdn/shop/files/quick-add-icon_400x.jpg?v=16992969588348465457" alt=""></a>
                             </div>
                        </div>
                   </div>  */
}
