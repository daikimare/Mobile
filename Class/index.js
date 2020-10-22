function fuga() {
  const test = "fuga"
  display.innerHTML = test;
}

window.onload = () => {
  const button = document.getElementById('status');
  const display = document.getElementById('display');
  button.onclick = fuga;
}