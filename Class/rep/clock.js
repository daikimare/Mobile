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
  
  // canvasの変更-時計の外形(針以外)
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

  // canvasの変更-時計の針の描画
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
      "LightGrey","Blue","red","white","lightblue","green","grey","lightgreen"
    ];
    console.log(fuga);
    // ランダムで背景色を配列から抽出
    const piyo = fuga[Math.floor(Math.random() * fuga.length)];
    console.log(piyo);
    if (confirm("色を"+piyo+"に変更しても良いですか？")) {
      // 背景色に反映させる
      ctx.fillStyle = piyo;
      // 描画する
      ctx.fill();
    } else {
      alert("色変更がキャンセルされました");
    }
  }

  // デジタル時計(ボタンを押した時の時間をデジタル表記に変更して画面に出力する)
  change.onclick = () => {
    const time = new Date();
    console.log(time);
    const month = time.getMonth()+1;
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const clock = month + "/" + date + " " + hour+":"+minute+":"+second; 
    const disp = document.getElementById('degital');

    // ロンドンも表示
    const jisa = time.setTime(time.getTime() - 1000*60*60*9);
    const lon = new Date(jisa);
    console.log(lon);
    const lMonth = lon.getMonth();
    const lDate = lon.getDate();
    const lHour = lon.getHours();
    const lMinute = lon.getMinutes();
    const lSecond = lon.getSeconds();
    const london = lMonth + "/" + lDate + " " + lHour + ":" + lMinute + ":" + lSecond;

    // 日付と時刻を表示するエレメントの作成
    const li = document.createElement('li');
    // 日本の要素
    li.innerHTML = "日本標準時" + " " + clock + "<br />" +
                   "世界標準時(UTC)" + " " + london;
    disp.appendChild(li);
  }
  
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