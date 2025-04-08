// Floating animation
setInterval(() => {
  createFloatingElement("flowers");
  createFloatingElement("hearts");
}, 400);

function createFloatingElement(type) {
  const el = document.createElement("div");
  el.className = type;
  el.style.left = Math.random() * 100 + "vw";
  el.style.top = "100vh";
  el.style.backgroundImage =
    type === "flowers"
      ? "url('https://cdn-icons-png.flaticon.com/128/991/991939.png')"
      : "url('https://cdn-icons-png.flaticon.com/128/833/833472.png')";
  el.style.animationDuration = 3 + Math.random() * 2 + "s";
  el.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 5000);
}
/* script2.js */
const texts = [
  "Halo Atang!",
  "HBD Atang!" ,
  "Semoga kamu selalu baik-baik saja dan bahagia.",
  "Semoga hidupmu penuh bunga-bunga.",
  "semoga kamu bisa memaafkan semua yg perlu dimaafkan",
  "semoga banyak doa baik yang tersalurkan ke kamu",
  "kita gatau masa depan itu kek gimana",
  "tapi semoga masa depanmu lebih bahagia banget",
  "kalau misalnya kamu sekarang ada masalah",
  "aku harap masalahmu cepet selese dan gada masalah yang lebih susah lagi kedepannya",
  "kalau misalnya ada apa apa",
  "jangan sungkan buat chat aku ya",
  "maybe in next time, kalo aku dikasih kesempatan buat pilih temen",
  "aku bakal pilih kamu lagi",
  "semoga kita tetap berteman lama yaaa",
  "karena setiap orang punya hari spesial",
  "ku harap kamu juga bisa merasakan kebahagiaan itu",
  "jangan terlalu keras sama dirimu ya tang",
  "kalo capek istirahat aja bentar",
  "jangan lupa makan juga",
  "sebenernya aku udah gatau mau nulis apa lagi",
  "intinya aku ga lupa kok sama ultahmu",
  "selamat ulang tahun ataaaang"
];

const container = document.getElementById("container");
let index = 0;

function showNextLine() {
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = messages[index];
    textEl.style.opacity = 1;
    index++;
    if (index < messages.length) {
      setTimeout(showMessage, 4000); // ganti per 4 detik
    }
  }, 500);
}

document.addEventListener("DOMContentLoaded", showMessage);
