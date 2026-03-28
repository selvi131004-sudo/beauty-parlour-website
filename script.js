/* =========================
   WHATSAPP FORM
========================= */
function sendToWhatsApp() {
  let name = document.getElementById("name")?.value || "";
  let phone = document.getElementById("phone")?.value || "";
  let message = document.getElementById("message")?.value || "";

  let url = "https://wa.me/8754948539?text="
    + "Name: " + encodeURIComponent(name) + "%0a"
    + "Phone: " + encodeURIComponent(phone) + "%0a"
    + "Message: " + encodeURIComponent(message);

  window.open(url, "_blank");
}

/* =========================
   SERVICE SWITCH
========================= */
function showService(type, event) {
  // Hide all sections
  let sections = document.getElementsByClassName("service-box");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Show selected
  let selected = document.getElementById(type);
  if (selected) selected.style.display = "flex";

  // Active button highlight
  let buttons = document.querySelectorAll(".tabs button");
  buttons.forEach(btn => btn.classList.remove("active"));
  if(event) event.target.classList.add("active");
}

/* =========================
   IMAGE POPUP (ZOOM)
========================= */
function openImage(src) {
  let popup = document.getElementById("popup");
  let img = document.getElementById("popup-img");
  if(popup && img){
    popup.style.display = "flex";
    img.src = src;
  }
}

function closePopup() {
  let popup = document.getElementById("popup");
  if(popup) popup.style.display = "none";
}

/* =========================
   MOBILE MENU (HAMBURGER)
========================= */
function toggleMenu() {
  let menu = document.getElementById("menu");
  if(menu) menu.classList.toggle("active");
}

/* =========================
   DEFAULT LOAD (SHOW SKIN)
========================= */
window.onload = function () {
  let first = document.getElementById("skin");
  if (first) first.style.display = "flex";
  // Set first tab active
  let firstBtn = document.querySelector(".tabs button");
  if(firstBtn) firstBtn.classList.add("active");
};

// Function to open gallery popup with clicked image
function openGalleryImage(src) {
  const popup = document.getElementById("gallery-popup");
  const img = document.getElementById("gallery-popup-img");
  img.src = src;          // Set clicked image
  popup.style.display = "flex"; // Show popup
}

// Function to close gallery popup
function closeGalleryPopup() {
  document.getElementById("gallery-popup").style.display = "none";
}

function closeGalleryPopup() {
  document.getElementById("gallery-popup").style.display = "none";
}