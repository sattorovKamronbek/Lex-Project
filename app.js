(function () {
  const input = document.getElementById("nameInput");
  const submit = document.getElementById("submitBtn");
  if (!input || !submit) return;
  function toggle() {
    submit.style.display = input.value.trim() ? "" : "none";
  }
  input.addEventListener("input", toggle);
  toggle();
  submit.addEventListener("click", function () {
    console.log("Запрос на консультацию отправлен:", input.value.trim());
  });
})();
