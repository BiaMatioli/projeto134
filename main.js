video = "";
status = "";

function preload(){
    video = createCapture(480, 380);
    video.hide();
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function iniciar(){
    objectDetect = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("tagStatus").innerHTML = "Status: Detectando pessoas";

    if(objectDetect == "person"){
        document.getElementById("tagStatus").innerHTML = "Status: Pessoa detectada";
        music.pause();
    }
    else{
        document.getElementById("tagStatus").innerHTML = "Status: Nenhuma pessoa detectada";

        musica = loadSound("coldplay.mp3");
        music.play();
    }
}

function modelLoaded(){
    console.log("O modelo foi carregado");
    status = true;

    video.loop();
    video.speed(1);
    video.volume(0);
}