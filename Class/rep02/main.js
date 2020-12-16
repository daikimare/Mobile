function Clock() {
  // 時間の要素の取得
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth()+1;
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  // 時間をコンソール画面に出力
  const hoge = year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second;
  console.log(hoge);
}

setInterval(Clock, 2000);