window.onload = () => {
  const status = document.getElementById('input');
  const status2 = document.getElementById('input2');
  const display = document.getElementById('display');
  const display2 = document.getElementById('display2');

  status.onclick = Create;
  status2.onclick = Create2;
}

function Create() {
  'Click'
  const hoge = prompt("学籍番号を入力してください");

  console.log(hoge);
  display.innerHTML = hoge;
}

function Create2(){
  const fuga = prompt("氏名を入力してください");
  
  console.log(fuga);
  display2.innerHTML = fuga;
  document.body.appendChild(fuga);
}