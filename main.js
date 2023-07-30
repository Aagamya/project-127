left_wrist_x=0;
right_wrist_x=0;
left_wrist_y=0;
right_wrist_y=0;
song="";

function preload(){
    song=loadSound("music.mp3")
}


function setup(){
 canvas=createCanvas(600,500)
 canvas.position(400,200)
 video=createCapture(VIDEO)
 video.hide()
 poseNet=ml5.poseNet(video,modelLoaded)
 poseNet.on("pose",gotPoses)
 
}

function draw(){
image(video,0,0,600,500)
}

function play(){
    song.play()
}

function stop(){
song.pause()
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(error,results){
  if(error){
    console.log(error)
  }
  else{
    console.log(results);
  }
}
