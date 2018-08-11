// JavaScript Document

/*creating click event for nav-bar*/
$(document).ready(function(){
  $('a#click-a').click(function(){
    $('.nav').toggleClass('nav-view');
  });
});

/*dropbox buttom*/
/*$(document).ready(function(){
  $('#dropbtn').click(function(){
    $('.drop-box').toggleClass('dropbox');
	$('.drop-box').toggleClass('dropbox:after');
  });
});*/


 /* $('#dropbtn').click(function(){
	  if(!dropbtn == true){
		$('#dropbtn').toggleClass('rightMenu button:active')
	  }else{
		  $('#dropbtn').toggleClass('rightMenu button')
	  }
  });*/



var mytrack = document.getElementById('myTrack');
var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

var minutes = pad(parseInt(mytrack.duraction/60));
var seconds = pad(parseInt(mytrack.duration%60));


var barSize = 200;
var bar = document.getElementById('defultBar');
var progressBar = document.getElementById('progressBar');


//Fullduraction time of audio track timer JS.
mytrack.addEventListener("loadedmetadata", function () {
    //you can display the duration now
    var minutes = pad(parseInt(mytrack.duration / 60));
    var seconds = pad(parseInt(mytrack.duration % 60));
    duration.innerHTML = minutes + ':' + seconds;
});﻿



playButton.addEventListener('click',playOrPause, false);
muteButton.addEventListener('click',muteOrUnmute, false);

//---for barclick to forward audio track--not working
//bar.addEventListener('click',clickedBar, false);


//play/pause btn with style
function playOrPause(){
	if(!mytrack.paused && !mytrack.ended){
		mytrack.pause();
		
		playButton.style.backgroundImage = 'url(icon/icons8-play-50.png)';
		playButton.style.backgroundColor ='#FFF';
		
		window.clearInterval(updateTime);//stop when pause
	}
	else{
		mytrack.play();
		
		playButton.style.backgroundImage = 'url(icon/icons8-pause-50.png)';
		playButton.style.backgroundColor ='#fff4f4';
		
		updateTime = setInterval(update,500); //update time each
	}
}

//Mute btn JS
function muteOrUnmute(){
	if(mytrack.muted == true){
		mytrack.muted = false;
		
		muteButton.style.backgroundImage = 'url(icon/icons8-voice-filled-15.png)';
		muteButton.style.backgroundColor ='#FFF';
	}
	else{
		mytrack.muted = true;
		
		muteButton.style.backgroundImage = 'url(icon/icons8-mute-filled-15.png)';
		muteButton.style.backgroundColor ='#fff4f4';
	}
}

//currentTime JS
function update(){
	if(!mytrack.ended){
		var playedMinutes = pad(parseInt(mytrack.currentTime/60));
		var playedSeconds = pad(parseInt(mytrack.currentTime%60));
		currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
		
		
		var size = parseInt(mytrack.currentTime*barSize/mytrack.duration);
		progressBar.style.width = size + "px";
	}
	else{
		currentTime.innerHTML = "0.00";
		
		//whenever audio ended play buttom replace at end
		playButton.style.backgroundImage = 'url(icon/icons8-play-50.png)';
		playButton.style.backgroundColor ='#FFF';
		
		progressBar.style.width = "0px";
		window.clearInterval(updateTime);
	}
}

//bar clickbar to forward audio -- not working
//function clickedBar(e){
	//if(!mytrack.ended){
		//var barSize = 200;
		//var mouseX = e.pageX - bar.offsetLeft;
		//var newtime = mouseX * mytrack.duration / barSize;
		
		//mytrack.currentTime = newtime;
		//progressBar.style.width = mouseX + "px";
	//}
//}

//display time at 00 formate by inserting pad() function on above
function pad(d){
	return (d<10) ? '0'+d.toString() : d.toString();
}


