
var record = document.querySelector('.record');
var stop = document.querySelector('.stop');
var pause = document.querySelector('.pause');
var resume = document.querySelector('.resume');
var clips = document.getElementById('clips');

var blob; var chunks=[];

var mainSection = document.querySelector('.main-controls');


stop.disabled = true;


if (navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');

      var constraints = { audio: true };
      chunks = [];

      var onSuccess = function(stream) {
      var mediaRecorder = new MediaRecorder(stream);

     record.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";

      stop.disabled = false;
      record.disabled = true;
    }

    stop.onclick = function() {
      mediaRecorder.stop();
    
      record.style.background = "";
      record.style.color = "";
      stop.disabled = true;
      record.disabled = false;
    }


    pause.onclick = function() {
      if(MediaRecorder.state === "recording") {
      mediaRecorder.pause();
      
     } else if(MediaRecorder.state === "paused") {
      mediaRecorder.resume();
      
    }
  }


   resume.onclick = function() {
    if(MediaRecorder.state === "recording") {
      mediaRecorder.pause();
      
    } else if(MediaRecorder.state === "paused") {
      mediaRecorder.resume();
      
    }
  }



    mediaRecorder.onstop = function(e) {
      var clipName=prompt('enter a name for clip');
      blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      var filename = clipName;
      var audioURL = URL.createObjectURL(blob);
      var audioElement = document.createElement("audio");
      audioElement.src=audioURL;
      clips.appendChild(audioElement);
      audioElement.controls = true;
       
      console.log("recorder stopped")


let upload = document.createElement('button');
                upload.innerHTML = "Upload";
                upload.addEventListener("click", function (event) {
                    let xhr = new XMLHttpRequest();
                    xhr.onload = function (e) {
                        if (this.readyState === 4) {
                            console.log("Server returned: ", e.target.responseText);
                        }
                    };
                    let fd = new FormData();
                    fd.append("audio_data", blob, filename);
                    xhr.open("POST", "save.php", true);
                    xhr.send(fd);
                      // to avoid presence of multiple upload butons
                    upload.parentNode.removeChild(upload);
                })
                mainSection.appendChild(upload);
               
              
    } 
    //  setTimeout(function(){ alert('write in search bar <localhost/task2/print.php> to view uploaded fanctions'); }, 3000);   
    
 
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
      
    }
  }

  var onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} 

