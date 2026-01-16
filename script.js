document.getElementById("showBtn").onclick = function () {
  document.getElementById("message").classList.remove("hidden");
  this.style.display = "none";
};

document.getElementById("yesBtn").onclick = function () {
  document.getElementById("secondMessage").classList.remove("hidden");
  this.style.display = "none";
};
