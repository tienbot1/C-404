var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let videoElement = document.getElementById('error-video');
let imgElement = document.getElementById('error-img');

let getVideo = function(){
    let numb = Math.floor(Math.random() * 9) + 1;
    videoElement.src = './videos/' + 9 + '.mp4';
    window.addEventListener('DOMContentLoaded', function() {
        videoElement.width = screenWidth;  
    })
};

let getImg = function(){
    let numb = Math.floor(Math.random() * 2) + 1;
    imgElement.src = './img/' + numb + '.jpg';
    window.addEventListener('DOMContentLoaded', function() {
        imgElement.width = screenWidth;  
    })
};


let ImgOrVideo = function(){
    let randomFormat = Math.floor(Math.random() * 2) + 1;
    if(randomFormat == 1){
        imgElement.style.display = "none";
        getVideo();
    } else {
        videoElement.style.display = "none";
        getImg();
    }
}
ImgOrVideo()