/* script1.js */
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