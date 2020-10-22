window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = camvas.getContext("2d");

  function drawClock() {
    ctx.clearRect(0,0,300,300);
    ctx.arc(150,150,145,0,2*Math.PI);
    ctx.strokeStlye = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "LightGrey";
    ctx.fill();
    
    const time = newDate();
    const hour = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds(); 
    drawClockHands(hour / 12 * 360 + minute / 60 * 30)
  }
}