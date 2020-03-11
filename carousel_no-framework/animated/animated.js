const images = document.querySelectorAll("img");
const carousel = document.getElementById("carousel");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

////// FOMULAS FOR MOVING ELEMENTS IN AN ARRAY /////
// shift items to the right
// arr.unshift(arr.pop());

// shift items to the left
// arr.push(arr[0]);
// arr = arr.slice(1);
///////////////////////////////////////////////////

// copying the images into an array to use array-specific methods
let imagesArr = [...images];

// this is the current width of a single image, used in computing animations
currentWidth = window.getComputedStyle(imagesArr[0]).width;

function moveLeft() {
    imagesArr.push(imagesArr[0]);
    imagesArr = imagesArr.slice(1);
    // imagesArr.forEach(
    //     image => (image.style.transform = `translateX(-${currentWidth})`)
    // );
    updateDOM();
}

function moveRight() {
    imagesArr.unshift(imagesArr.pop());
    // imagesArr.forEach(
    //     image => (image.style.transform = `translateX(${currentWidth})`)
    // );
    updateDOM();
}

function updateDOM() {
    carousel.innerHTML = "";
    imagesArr.forEach(image => {
        // remove focused state and move to new image
        if (image.classList.contains("focused")) {
            image.classList.remove("focused");
        }
    });
    imagesArr[Math.floor(imagesArr.length / 2)].classList.add("focused");
    imagesArr.forEach(image => {
        carousel.appendChild(image);
    });
}

function init() {
    images[Math.floor(images.length / 2)].classList.add("focused");
}

init();

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);
