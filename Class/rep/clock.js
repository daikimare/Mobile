function setlayer(obj,x,y,zIndex) {
  obj.style.left = x;
  obj.style.top = y;
  obj.style.zIndex = zIndex;
}

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const canvas2 = document.getElementById('canvas2');
  const ctx = canvas.getContext("2d");
  const ctx2 = canvas2.getContext("2d"); 
  const change = document.getElementById('change');
  const display = document.getElementById('hoge');
  
  const color = document.getElementById("color");
  console.log(color);

  setlayer(canvas,10,10,1);
  setlayer(canvas2,10,10,2);
  
  function piyo() {
    ctx.clearRect(0,0,300,300);
    ctx.arc(150,150,145,0,2*Math.PI);
    ctx.strokeStlye = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "LightGrey";
    ctx.fill();
  }
  piyo();

  function drawClock() {
    ctx2.clearRect(0,0,300,300);
    ctx2.arc(150,150,145,0,2*Math.PI);
    ctx2.strokeStlye = "black";
    ctx2.lineWidth = 5;
    ctx2.stroke();
    
    const time = new Date();
    const hour = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    
    drawClockHands(hour / 12 * 360 + minute / 60 * 30, 60, 8),
    drawClockHands(minute / 60 * 360, 95, 6),
    drawClockHands(second / 60 * 360, 120, 2)
  }

  // 時計の背景色の変化プログラム
  color.onclick = () => {
    // 選択可能背景色の作成
    const fuga = [
      "LightGrey","Blue","red","white","lightblue"
    ];
    // ランダムで背景色を配列から抽出
    const piyo = fuga[Math.floor(Math.random() * fuga.length)];
    console.log(piyo);
    // 背景色に反映させる
    ctx.fillStyle = piyo;
    // 描画する
    ctx.fill();
  }

  // デジタル時計
  function hoge() {
  
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const clock = hour+":"+minute+":"+second;

    display.removeChild(canvas);
    display.innerHTML = clock;
    alert("デジタル表記に変更します。");
    setInterval(hoge,1000);
  }
  change.onclick = hoge;

  // アナログ時計の針描画（リアルタイムで動く）
  function drawClockHands(angle, width, height) {
    ctx2.save();
    ctx2.translate(150, 150);
    angle -= 90;
    const radian = angle * Math.PI / 180;
    ctx2.rotate(radian);
    ctx2.fillStyle = "black";
    ctx2.fillRect(0, 0, width, height);
    ctx2.restore();
  }


    // アナログ時計の針を動かし続けるためのインターバル設定
    setInterval(drawClock, 500);
    drawClock();
}

// const change = document.getElementById('change');
// const display = document.getElementById('hoge');
// change.onclick = function hoge() {
  
//   const time = new Date();
//   const hour = time.getHours();
//   const minute = time.getMinutes();
//   const second = time.getSeconds();

//   const clock = hour+":"+minute+":"+second;

//   display.removeChild(canvas);
//   display.innerHTML = clock;
//   alert("デジタル表記に変更します。");
// }