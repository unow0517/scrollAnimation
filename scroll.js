var canvas = document.getElementById('screen')
var ctx = canvas.getContext('2d');
var scrollYPos=0;
var img = new Image();

img.src = "lowQualityhalfResolution/KoreaToGermany_0.jpg"


canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

function windowResize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('resize', function(e){
  windowResize();
  scrollYPos = Math.round(window.scrollY/20);
  img.src = "lowQualityhalfResolution/KoreaToGermany_"+scrollYPos +".jpg"

});

window.addEventListener('scroll',function(e){
  scrollYPos = Math.round(window.scrollY/20);

  var sequenceOn = document.getElementById("img-sequence")
  console.log(window.scrollY)
  if(scrollYPos > 450) {
    scrollYPos == 450;
    sequenceOn.style.position = 'relative';
    sequenceOn.style.top = '9000px';
  } else {
    sequenceOn.style.position = 'fixed';
    sequenceOn.style.top = '0px';
    player(scrollYPos);
  }
  console.log(window.scrollY)
})

function player(num){
  img.src = "lowQualityhalfResolution/KoreaToGermany_"+num +".jpg"
}

//playSequence-> player -> new image LOAD -> addEventLister run
img.addEventListener('load', function(e){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
})

