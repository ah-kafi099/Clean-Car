




// const images = [
//     'image/a.jpg',
//     'image/b.jpg',
//     'image/d.jpg',
// ]

// const firstImage = 0;
// const lastImage = images.length - 1;
// let currentImg = 0;

// const nextBtn = document.getElementById('next');
// nextBtn.addEventListener("click", () => {
//     const imgTag = document.getElementById('main-img');
//     currentImg++;
//     if(currentImg >= lastImage) {

//         currentImg = 4;
//     }
//     imgTag.src = images[currentImg]
// })
// const prevBtn = document.getElementById('prev');
// prevBtn.addEventListener("click", () => {
//     const imgTag = document.getElementById('main-img');
//     currentImg--;
//     if(currentImg <= firstImage) {

//         currentImg = 0;
//     }
//     imgTag.src = images[currentImg]
// })



// let mainImg = document.getElementById("main-img");

// let images = [
//     'image/a.jpg',
//     'image/b.jpg',
//     'image/.ac.jpg',
// ];

// var x = 0;


// function prev() {
//     if (x <= 0) x = images.length;
//     x--;
//     return setImg();
// }

// function next() {
//     if(x >= images.length - 1) x = -1;
//     x++;
//     return setImg();
// }

// function setImg() {
//     return mainImg.setAttribute('src', 'images/' + images[x])
// }








    // ============================ //
        // HEADER SLIDER  JS //
    // ============================ //

    
    let allImg = [
        "image/a.jpg",
        "image/b.jpg",
        "image/c.jpg",
    ];
    
    let srcImg = document.getElementById("main-img");
    let count = 0;

    function next() {
        count++;
        if(count >= allImg.length) {
            count = 0;
            srcImg.src = allImg[count]
        } else {
            srcImg.src = allImg[count]
        }
    } 
    function prev() {
        count--;
        if(count < 0) {
            count = allImg.length - 1;
            srcImg.src = allImg[count]
        } else {
            srcImg.src = allImg[count]
        }
    } 
    

