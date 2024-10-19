const topnavbar = document.querySelector(".topnavbar");

// Add click event listeners to the play and stop buttons
const stopButton = document.querySelector('[name="stop_button"]');
const playButton = document.querySelector('[name="play_button"]');
const checkBox = document.querySelector('#check');
const timeOutSecind = document.querySelector(".timeOut");
var speed = document.querySelector("#speed");
let audio;
let audioDuration;
var steps = document.querySelectorAll(".steps");
const counting = document.querySelector("#suchna2");
playButton.addEventListener('click', () => {

 var bs = new Audio(`prishthbhumi-dhvani/dhvani (22).mp3`);
  bs.loop = true;
  bs.volume = 0.5;
  bs.play();
steps[0].style.display = "block"
  setTimeout(()=>{
  let startIndex = selector1.value - 1;
  let lastIndex = selector2.value;
   const playNextKey = () => {
    if(audio){
      audio.pause();
      audio.currentTime = 0;
      keys.forEach(key => {
      key.classList.remove('active');
      });
    } 
    if (startIndex < lastIndex) {
      const key = keys[startIndex];
      
      audio = key.querySelector('audio');
      counting.value = 1;
      let playCount = 0;
      const playOnce = () => {
        if (playCount < 11) {
          counting.value = playCount+2;
          audio.volume  = .2;
          steps[0].style.display = "none"
         if(playCount==0){
          steps[1].style.display = "block"
         }else{
          steps[1].style.display = "none"
         }

         if(playCount==1){
          steps[2].style.display = "block"
         }else{
          steps[2].style.display = "none"
         }

         if(playCount==2){
          steps[3].style.display = "block"
         }else{
          steps[3].style.display = "none"
         }

         if(playCount==3){
          steps[4].style.display = "block"
         }else{
          steps[4].style.display = "none"
         } 
         if(playCount==4){
          steps[5].style.display = "block"
         }else{
          steps[5].style.display = "none"
         }
         if(playCount==5){
          steps[6].style.display = "block"
         }else{
          steps[6].style.display = "none"
         }
         if(playCount==6){
          steps[7].style.display = "block"
         }else{
          steps[7].style.display = "none"
         }

         if(playCount==7){
          steps[8].style.display = "block"
         } else{
          steps[8].style.display = "none"
         }

         if(playCount==8){
          steps[9].style.display = "block"
         } else{
          steps[9].style.display = "none"
         }

         if(playCount==9){
          steps[10].style.display = "block"
         }else{
          steps[10].style.display = "none"
         }

         if(playCount==10){
          steps[11].style.display = "block"
         }else{
          steps[11].style.display = "none"
         }
         
          setTimeout(() => {
          audioDuration = audio.duration;
          audio.playbackRate = speed.value;
          audio.play();
          playCount++;
          }, timeOutSecind.value*1000);
        } else {
          audio.removeEventListener('ended', playOnce);
          setTimeout(() => {
            key.classList.remove('active');
            playNextKey();
          }, timeOutSecind.value*1000);
        }
      };
      audioDuration = audio.duration;
      audio.currentTime = 0;
      audio.playbackRate = speed.value;
      audio.play();
      audio.addEventListener('ended', playOnce );
      audio.addEventListener('play', scrollActiveDiv );
      audio.addEventListener("play", playButtonStyleAdd);
      audio.addEventListener('ended', playButtonStyleRemove);
      audio.addEventListener("play", indexUpdate);
      audio.addEventListener("ended", timerOutput) 
      key.classList.add('active');
      startIndex++;
      // audio.removeEventListener("ended", timerOutput); 

      // chacking the Loopbutton is chacked or not checked 
        if(checkBox.checked && startIndex == lastIndex){
          // alert("Please");
          startIndex = selector1.value - 1;
      }
    }
  };
  
   playNextKey();
  },1000*5)
});

// Add click event listeners to the stop button
stopButton.addEventListener('click', () => {
  steps.forEach(step =>{
    step.style.display = "none";
  })
  // playButton.value = "play";
   window.scrollTo(0, 0);
  // hideSpeackerSymbol();
  playButton.style.backgroundColor = "";
  playButton.style.color = "";
  keys.forEach(key => {
    const audio = key.querySelector('audio');
    audio.pause();
    audio.currentTime = 0;
    key.classList.remove('active');
  });
  bgsound.pause();
});

// Reset the current audio element
window.scrollTo({top:0, behavior: 'smooth'});
const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
// window.scrollTo({top:0, behavior: 'smooth'});
// setTimeout(() => {
location.reload();
// },1000);
});


  //buttons for loop 
  const loopbtn = document.querySelector(".loop");
  const checkbox = document.querySelector("#check");
  loopbtn.addEventListener("click",  ()=> {
  checkbox.checked = !checkBox.checked;
  if(checkBox.checked){
    loopbtn.style.backgroundColor = "rgb(40, 252, 29)";
    loopbtn.style.color = "#000";
    // document.querySelector(".From").disabled = false;
    // document.querySelector(".To").disabled = false;
    
  }else{
    loopbtn.style.backgroundColor = "";
    loopbtn.style.color = "";
    // document.querySelector(".From").disabled = true;
    // document.querySelector(".To").disabled = true;
    
  }
  });

//background sounds 1111111111111111111
  const selector = document.querySelector('#number');
  for(var i=0; i<50; i++) {
    var option = document.createElement('option');
    option.text =  (i);
    option.value = i;
    selector.appendChild(option); 
  }

  const firstOption = selector.querySelector("option:first-child");
  firstOption.textContent = "वाद्यम्"
  
  //background sounds 222222222222222222
let soundNumber = document.querySelector("#number");
soundNumber.style.outline = "none";
let bgsound;
selector.addEventListener("change", function backgroundMusic(){
  if (bgsound) {bgsound.pause();}
  bgsound = new Audio(`prishthbhumi-dhvani/dhvani (${soundNumber.value}).mp3`);
  bgsound.loop = true;
  bgsound.volume = 0.5;
  bgsound.play();
});

//scrolling to top of screen
function scrollActiveDiv() {
  const activeDiv = document.querySelector('.active');
  if (activeDiv) {
    const activeDivPosition = activeDiv.offsetTop;
    window.scrollTo({
      top: activeDivPosition - 150,
      behavior: 'smooth'
    });
  }
}


// function for indexUpdate 
const indexUpdating = document.querySelector("#suchna");

// indexUpdating.value = "0" + "/" + divLen;
function indexUpdate(){
const suchna = document.querySelector("#suchna");
let activeIndex = 1;
for (let i = 1; i < divLen; i++){
  if(keys[i].classList.contains("active")){
    activeIndex = i+1;
    break;
  }
}
suchna.value = activeIndex + "/" + counting.value;
// suchna.value = activeIndex +"/"+ divLen;
}



//function for Timer
const timeStamp = document.querySelector(".timeStamp");
function timerOutput(){
  let count = timeOutSecind.value;
  let timer = setInterval(function(){
    timeStamp.style.display = "none";
    
    count--;
    if(count < 10){
      timeStamp.innerHTML = "प्रतीक्षस्व"+ " " + "00" + ":0" + count;
    }else{
      timeStamp.innerHTML = "प्रतीक्षस्व"+ " " + "00" + ":" + count;
    }
     if(count<=0){
      clearInterval(timer);
      timeStamp.style.display = "none";
      
    }
  },1000);
  document.body.appendChild(timeStamp);  
}


// play Button Style 
function playButtonStyleAdd(){
  playButton.style.backgroundColor = "rgb(40, 252, 29)";
  playButton.style.color = "#000";
  }
  function playButtonStyleRemove(){
   playButton.style.backgroundColor = "";
   playButton.style.color = "";
   }
 

//function for index blinking
let n = 0;
function blinking() {
// const play_button = document.querySelector('[name="play_button]')
if(n==0 && playButton.style.backgroundColor === "rgb(40, 252, 29)"){
indexUpdating.style.animation = "indexblink 1s infinite";
n = 1;
}else{
  indexUpdating.style.animation = "";
n = 0;
}
}
setInterval(blinking,2000);

// setTimeout(windowUpdate,2000);
// window risize for time div
const clock = document.querySelector(".clock");
window.addEventListener("resize",windowUpdate);
window.addEventListener("load",windowUpdate);
function windowUpdate(){
const player = document.querySelector(".player");
const playerHeight = player.offsetHeight;
 timeStamp.style.top = playerHeight + "px";
 container.style.top =   playerHeight + "px";
 clock.style.top =   playerHeight + "px";
}


  
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
