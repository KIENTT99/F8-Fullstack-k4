var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;
var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");

//Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth;//lấy kích thước chiều rộng của 1 element

//Tính tổng kích thước các item
var totalWidth = carouselItems.length * itemWidth;

//Cập nhập css
carouselInner.style.width = `${totalWidth}px`;
var position = 0;
//Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
    if (Math.abs(position) + itemWidth * 2 > totalWidth) {
        return;
    }
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
});

carouselPrevBtn.addEventListener("click", function () {
    if (Math.abs(position) < itemWidth) {
        return;
    }
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
});

//slide
var isDown = false;
var slide = (10 * itemWidth) / 100;
var starOff;
var move;

carouselInner.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDown = true;
    starOff = e.offsetX;
});

carouselInner.addEventListener("mousemove", function (e) {
    e.preventDefault();
    if (isDown) {
        move = e.offsetX - starOff;
        carouselInner.style.cursor = "move";
        if (move < 0) {
            if (
                Math.abs(move) > slide &&
                Math.abs(position) < totalWidth - itemWidth
            ) {
                position -= itemWidth;
                carouselInner.style.translate = `${position + move}px`;
                isDown = false;
                index++;
                activeDots();
            } else {
                carouselInner.style.translate = `${position + move}px`;
            }
        } else if (move > 0) {
            if (position < 0 && move > slide) {
                position += itemWidth;
                carouselInner.style.translate = `${position + move}px`;
                isDown = false;
                index--;
                activeDots();
            } else {
                carouselInner.style.translate = `${position + move}px`;
            }
        }
    }
});

carouselInner.addEventListener("mouseup", function (e) {
    e.preventDefault();
    isDown = false;
    carouselInner.style.cursor = "default";
    carouselInner.style.translate = `${position}px`;
    console.log(position);
});
