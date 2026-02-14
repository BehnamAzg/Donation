import confetti from "@hiseb/confetti";

const addressInput = document.getElementById("addressInput");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function(e) {
  navigator.clipboard.writeText(addressInput.value);
  copyBtn.textContent = "✔ Copied";
  confetti({
    position: { x: e.clientX, y: e.clientY },
    count: 100,
    size: 1.2,
    velocity: 150,
    fade: false,
  });

  setTimeout(() => {
    copyBtn.textContent = "Copy";
    copyBtn.blur();
  }, 1500);
});
