window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  function drawClock() {
    ctx.clearRect(0,0,300,300);
    ctx.arc(150,150,145,0,2*Math.PI);
    ctx.strokeStlye = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "LightGrey";
    ctx.fill();
    
    const time = new Date();
    const hour = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds(); 
    drawClockHands(hour / 12 * 360 + minute / 60 * 30, 60, 8);
    drawClockHands(minute / 60 * 360, 95, 6);
    drawClockHands(second / 60 * 360, 120, 2);
  }

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

  setInterval(drawClock, 500);
}