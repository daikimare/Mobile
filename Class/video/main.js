window.onload = () => {
  const video = document.getElementById('video'),
        play = document.getElementById('play'),
        stop = document.getElementById('stop'),
        restart = document.getElementById('restart'),
        time = document.getElementById('time');
  
  video.addEventListener('timeupdate', function(){
    time.innerHTML = vide.currentTime.toFixed(1) + "/" + vide.duration.toFixed(1);
  })
}