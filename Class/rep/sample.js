const canvas = document.getElementById('canvas');
const message = document.getElementById('message');
// const button = document.getElementById('button');
const ctx = canvas.getContext('2d');

function drawClock() {
  ctx.clearRect(0,0,300,300);
  ctx.arc(150,150,145,0,2*Math.PI);
  ctx.strokeStlye = "black";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "LightGrey";
  ctx.fill();

  // ローカルの時間情報の取得と作成
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth()+1;
  const day = time.getDate();
  const hours = time.getHours() % 12,
  minutes = time.getMinutes(),
  seconds = time.getSeconds();
  const now = year + "/" + month + "/" + day;

  drawClockHands(hours / 12 * 360 + minutes / 60 * 30, 60, 8),
  drawClockHands(minutes / 60 * 360, 95, 6),
  drawClockHands(seconds / 60 * 360, 120, 2)

  // オリジナル
  // メッセージの送信
  const send = document.getElementById('send');
  // 入力された値を追加
  'use strict'
  send.addEventListener('click', ()=>{
    if (message.value != '') {
      const mlist = document.getElementById('mlist');

      const block = document.createElement('div');
      block.className = 'wrap';
      const blockone = document.createElement('div');

      mlist.appendChild(block);
      block.appendChild(blockone);

      const li = document.createElement('li');
      block.insertBefore(li, blockone);
      
      li.innerHTML = message.value + "<br />" + "コメントした日付は" + now;

      message.value = '';
    }
  })
}

// アナログ時計の針描画
function drawClockHands(angle, width, height) {
  ctx.save();
  ctx.translate(150, 150);
  angle -= 90;
  const radian = angle * Math.PI / 180;
  ctx.rotate(radian);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

// 関数の一斉スタートするための関数
function start() {
  setInterval(drawClock,500);
  drawClock();
}
start();
