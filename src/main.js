const addressInput = document.getElementById("addressInput");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(addressInput.value);
  copyBtn.textContent = "✔ Copied";
  
  setTimeout(() => {
    copyBtn.textContent = "Copy";
    copyBtn.blur();
  }, 1500);
});
