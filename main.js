// canvas configuration
const canvas = document.querySelector('.memeImage canvas');
const ctx = canvas.getContext('2d');

// initial font configuration
ctx.font = '30px Impact';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.strokeStyle = 'black';

const meme = {
    topText: '',
    bottomText: '',
    img: null
};

initialize();

function initialize() {

    // add default image on the canvas
    let image = new Image();
    image.src = 'yourText.png';
    image.addEventListener('load', function () {
        ctx.drawImage(image, 0, 0);
    });

    // attach text inputs to meme object
    let inputTop = document.getElementById('topText');
    inputTop.addEventListener('keyup', function () {
        meme.topText = this.value;
        reDrawMeme();
    });
    let inputBottom = document.getElementById('bottomText');
    inputBottom.addEventListener('keyup', function () {
        meme.bottomText = this.value;
        reDrawMeme();
    });

    // add event listener to file input
    const fileInput = document.querySelector('input[type=file]');
    fileInput.addEventListener('change', handleFileUpload);

    // save meme
    document.querySelector('.saveBtn').addEventListener('click', function () {
        console.log(this);
        saveMeme();
    });
}

function reDrawMeme() {
    let img = new Image();
    img.src = meme.img;
    img.crossOrigin = "anonymous";
    img.addEventListener('load', function () {
        ctx.drawImage(img, 0, 0);
        ctx.fillText(meme.topText, canvas.width / 2, 40);
        ctx.strokeText(meme.topText, canvas.width / 2, 40);
        ctx.fillText(meme.bottomText, canvas.width / 2, canvas.height - 40);
        ctx.strokeText(meme.bottomText, canvas.width / 2, canvas.height - 40);
    });

}

function handleFileUpload() {
    console.log(this.files[0]);
    // new file reader to read file uploaded
    let reader = new FileReader();
    if (this.files[0]) {
        reader.readAsDataURL(this.files[0]);
    }
    reader.addEventListener('load', function () {
        meme.img = reader.result;
        reDrawMeme();
    });
}

function saveMeme() {
    window.open(canvas.toDataURL());
}



