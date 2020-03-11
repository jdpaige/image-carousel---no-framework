const images = document.querySelectorAll("img");
const backBtn = document.getElementById("btn-back");
const forwardBtn = document.getElementById("btn-forward");
let imagesArr = [...images];

let arr = [1, 2, 3, 4, 5];

// shift items to the right
arr.unshift(arr.pop());
console.log(arr);

// shift items to the left
arr.push(arr[0]);
arr = arr.slice(1);
console.log(arr);

function moveLeft() {
    images.forEach(image => {
        if (image.style.order === "1") {
            image.style.order = `${images.length}`;
        } else {
            image.style.order--;
        }
    });
    imagesArr.push(imagesArr[0]);
    imagesArr = imagesArr.slice(1);

    updateFocus();
}

function moveRight() {
    images.forEach(image => {
        if (image.style.order === `${images.length}`) {
            image.style.order = "1";
        } else {
            image.style.order++;
        }
    });
    imagesArr.unshift(imagesArr.pop());
    updateFocus();
}

function updateFocus() {
    images.forEach(image => {
        if (image.classList.contains("focused")) {
            image.classList.remove("focused");
        }
    });
    imagesArr[Math.floor(imagesArr.length / 2)].classList.add("focused");
}

function init() {
    images[2].classList.add("focused");
}

init();

backBtn.addEventListener("click", moveLeft);
forwardBtn.addEventListener("click", moveRight);
