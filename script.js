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

// Ambil elemen
const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");
const overlay = document.getElementById("chatOverlay");

// Toggle buka/tutup chat
chatToggle.addEventListener("click", () => {
  const isOpen = chatbot.style.display === "flex";

  if (isOpen) {
    chatbot.style.display = "none";
    overlay.classList.remove("show"); // hilangkan blur
  } else {
    chatbot.style.display = "flex";
    overlay.classList.add("show"); // munculkan blur
  }
});

// Tombol X untuk menutup chat
closeChat.addEventListener("click", () => {
  chatbot.style.display = "none";
  overlay.classList.remove("show");
});

// Klik overlay (area luar chatbot) untuk menutup
overlay.addEventListener("click", () => {
  chatbot.style.display = "none";
  overlay.classList.remove("show");
});

// Fungsi kirim pesan
function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // Pesan user
  const userMsg = document.createElement("div");
  userMsg.classList.add("chat-message", "user");
  userMsg.textContent = "Anda: " + text;
  chatBody.appendChild(userMsg);

  // Balasan bot sederhana
  const botMsg = document.createElement("div");
  botMsg.classList.add("chat-message", "bot");

  if (text.toLowerCase().includes("hai")) {
    botMsg.textContent = "Bot: Baik, senang bertemu dengan mu, pakah ada yang bisa saya bantu";
    } else if (text.toLowerCase().includes("alamat")) {
    botMsg.textContent = "Bot: Lokasi agrowisata di Desa Bulangan, Kecamatan Dukun, Gresik.";
  } else if (text.toLowerCase().includes("kenapa website ini di buat")) {
    botMsg.textContent = "Bot: untuk edukasi agar di kenal wisatawan secara luas";
  } else if (text.toLowerCase().includes("siapa yang buat website ini")) {
    botMsg.textContent = "Bot: yang buat website ini adalah salah satu mahasiswa KKN dari Universitas Qomaruddin";
  } else if (text.toLowerCase().includes("ada buah apa aja")) {
    botMsg.textContent = "Bot: banyak misalnya: Buah naga, Buah Anggur, Buah Mangga, Buah Kelengkeng dan masih banyak lagi";
  } else if (text.toLowerCase().includes("jam buka")) {
    botMsg.textContent = "Bot: Agrowisata buka setiap hari pukul 08.00 - 17.00.";
  } else {
    botMsg.textContent = "Bot: Maaf, saya hanya bisa menjawab tentang alamat, jam buka, siapa yang buat website ini, kenapa website ini dibuat, dan ada buah apa aja.";
  }

  chatBody.appendChild(botMsg);

  // Scroll otomatis ke bawah
  chatBody.scrollTop = chatBody.scrollHeight;

  // Kosongkan input
  userInput.value = "";
}

// Klik tombol kirim
sendBtn.addEventListener("click", sendMessage);

// Tekan Enter untuk kirim
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
// Ambil elemen modal
const newsOverlay = document.getElementById("newsOverlay");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

// Semua item news
const newsItems = document.querySelectorAll(".news-item");

// Klik item → buka modal
newsItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    const title = item.querySelector("h3").innerText;
    const desc = item.querySelector("p").innerText;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    newsOverlay.style.display = "flex"; // tampilkan modal
  });
});

// Tutup modal
closeModal.addEventListener("click", () => {
  newsOverlay.style.display = "none";
});

// Klik luar modal → tutup
newsOverlay.addEventListener("click", (e) => {
  if (e.target === newsOverlay) {
    newsOverlay.style.display = "none";
  }
});
