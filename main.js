
const canvas = document.querySelector('.memeImage canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'img1.jpg';

img.addEventListener('load', function() {
  if(ctx) {
  	ctx.drawImage(img, 0,0);
  }
}, false);