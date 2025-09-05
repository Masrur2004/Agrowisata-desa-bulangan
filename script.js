// Ambil semua gambar dalam slider
const slides = document.querySelectorAll('.slides img');

// Indeks slide saat ini
let index = 0;

// Sembunyikan semua slide & tampilkan satu dengan efek fade
function showSlide(n) {
    slides.forEach((slide, i) => {
        if (i === n) {
            slide.style.opacity = "1";
            slide.style.zIndex = "1";
        } else {
            slide.style.opacity = "0";
            slide.style.zIndex = "0";
        }
        
    });
}

// Tampilkan slide pertama saat load
showSlide(index);

// Fungsi untuk slide berikutnya
function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}
// Ganti slide setiap 4 detik
setInterval(nextSlide, 4000);

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// Scroll Animation pakai IntersectionObserver
const scrollElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target); // biar gak terus-terusan diulang
    }
  });
}, { threshold: 0.2 });

scrollElements.forEach(el => observer.observe(el));

// ============ FITUR SEARCH ============
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const table = document.getElementById("panenTable");

  if (searchInput && table) {
    searchInput.addEventListener("keyup", function () {
      let input = this.value.toLowerCase();
      let rows = table.querySelectorAll("tbody tr");

      rows.forEach(row => {
        let komoditas = row.cells[1].textContent.toLowerCase(); // kolom komoditas
        if (komoditas.indexOf(input) > -1) {
          row.style.display = ""; // tampilkan
        } else {
          row.style.display = "none"; // sembunyikan
        }
      });
    });
  }
});