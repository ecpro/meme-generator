// canvas configuration
const canvas = document.querySelector('.memeImage canvas');
const ctx = canvas.getContext('2d');
const height = canvas.height;
const width = canvas.width;

// initial font configuration 
ctx.font = '30px Impact';
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.textAlign = 'center';

window.onload = reDrawMeme;

function reDrawMeme(image, topLineText, bottomLineText, topX, topY, bottomX, bottomY) {
    topLineText = topLineText || 'Your Image Here';
    topX = topX || width / 2;
    topY = topY || height / 2;

    ctx.fillText(topLineText, topX, topY);
    ctx.strokeText(topLineText, topX, topY);
}

reDrawMeme();