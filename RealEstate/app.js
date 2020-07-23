const playBtn = document.querySelector('.play-button');
const video = document.getElementById('video');

//function 
function toggleVideoStatus() {
    console.log(playBtn);
    if(video.paused) {
        playBtn.style.display = "none";
        video.play();
    } else if(video.play) {
        // playBtn.style.display = "block";
        video.pause();
    }
}

//Add Event Listiner
playBtn.addEventListener('click', toggleVideoStatus);