let count = 0;
let mainImg = document.getElementById("main_img");
var downImgs;
let Images = [
  "https://cdn.pixabay.com/photo/2024/01/28/10/47/lake-8537338_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
  "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/26/08/35/grand-ark-8533646_640.jpg",
  "https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448_640.jpg",
  "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_640.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
  "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg",
  "https://cdn.pixabay.com/photo/2015/10/12/15/46/animal-984573_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/28/10/47/lake-8537338_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
  "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/26/08/35/grand-ark-8533646_640.jpg",
  "https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448_640.jpg",
  "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_640.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
  "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg",
  "https://cdn.pixabay.com/photo/2015/10/12/15/46/animal-984573_640.jpg",
];
let bottomImages = document.querySelector(".section_2");
Images.map((value) => {
  let image = document.createElement("img");
  bottomImages.appendChild(image);
  image.setAttribute("src", value);
});
var left_btn = document.getElementById("left_btn");
var right_btn = document.getElementById("right_btn");

var scrollBar = document.querySelector(".section_2");
slideshow(count);
const styleBorder = (index) => {
  if (index >= 0 && index < downImgs.length) {
    for (let i = 0; i < downImgs.length; i++) {
      downImgs[i].style.border = "5px solid black";
      downImgs[i].style.opacity = "0.8";
    }

    downImgs[index].style.border = "2px solid black";
    downImgs[index].style.opacity = "1";
  }
};

for (let j = 0; j < downImgs.length; j++) {
  downImgs[j].dataset.index = j;
  downImgs[j].addEventListener("click", function (e) {
    if (count < e.target.dataset.index) {
      scrollBar.scrollLeft += e.target.dataset.index * 10;
    }
    if (count > e.target.dataset.index) {
      scrollBar.scrollLeft = e.target.dataset.index * 10;
    }
    count = e.target.dataset.index;
    console.log(count);
    styleBorder(count);
    slideshow(count);
  });
}

function nextImg() {
  if (count >= Images.length - 1) {
    count = 0;
    scrollBar.scrollLeft = 0;
  } else count++;

  slideshow(count);
  styleBorder(count);
  scrollBar.scrollLeft += Images.length * 5;
}
function prevImg() {
  if (count <= 0) {
    count = Images.length - 1;
    scrollBar.scrollLeft = 321;
  } else count--;
  slideshow(count);
  styleBorder(count);
  scrollBar.scrollLeft -= Images.length * 5;
  scrollBar.style.color = "red";
}
function slideshow(count) {
  downImgs = document.querySelectorAll(".section_2 img");

  downImgs[count].style.border = "2px solid black";

  mainImg.style.background = `url(${Images[count]})`;

  mainImg.style.position = "relative";
  mainImg.style.width = "100%";
  mainImg.style.height = "575px";
  mainImg.style.backgroundPosition = "center";
  mainImg.style.backgroundSize = "cover";
  mainImg.style.backgroundRepeat = "no-repeat";
  mainImg.style.filter = "drop-shadow(black 0px 0px 10px)";
  mainImg.style.zIndex = "5";

  if (count == Images.length - 1)
    right_btn.style.background = `url(${Images[0]})`;
  else {
    right_btn.style.background = `url(${Images[parseInt(count) + 1]})`;
  }

  right_btn.style.backgroundPosition = "center";
  right_btn.style.backgroundSize = "cover";
  right_btn.style.backgroundRepeat = "no-repeat";

  if (count == 0)
    left_btn.style.background = `url(${Images[Images.length - 1]})`;
  else left_btn.style.background = `url(${Images[count - 1]})`;

  left_btn.style.backgroundPosition = "center";
  left_btn.style.backgroundSize = "cover";
  left_btn.style.backgroundRepeat = "no-repeat";
}
