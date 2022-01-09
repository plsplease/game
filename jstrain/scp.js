window.onload = function(){
    var img = document.getElementById("ii");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("tuturu_1.mp3");
    
    img.addEventListener('mousedown',function(){
        increaseScroe();
        img.src = 'iii.jpg';
        audio.play();
    });
    img.addEventListener('mouseup',function(){
        img.src = 'ii.jpg';
        audio.play();
    });

    function increaseScroe(){
        score++;
        count.innerHTML = score;
    }
}