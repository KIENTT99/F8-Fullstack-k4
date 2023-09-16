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