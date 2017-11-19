
//Variables for the button location
var waterKirbyBtn = document.querySelector('#waterKirby');
var subKirbyBtn = document.querySelector('#submarineKirby');
var rKirbyBtn = document.querySelector('#rocketKirby');

//gallery location
var gallery = document.querySelector('#images');

//image arrays for the links to images
var images = [
              'images/rocket.png',            //ROCKET KIRBY IMAGE
              'images/submarine.png',       //Submarine KIRBY IMAGE
              'images/underwater.jpg'       //UNDERWATER KIRBY IMAGE
            ];


//if these buttons are active on the page activate the click event
if(waterKirbyBtn && subKirbyBtn && rKirbyBtn && gallery){


  waterKirbyBtn.addEventListener('click',function(){
    gallery.src=images[2];
    console.log('click');
  });

  subKirbyBtn.addEventListener('click',function(){
    gallery.src=images[1];
    console.log('click');
  });

  rKirbyBtn.addEventListener('click',function(){
    gallery.src=images[0];
    console.log('click');
  });






}
