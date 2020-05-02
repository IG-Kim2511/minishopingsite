const header = document.querySelector(".header .img");

const blue_p = document.querySelector(".info .items_list .blue_p");
const info = document.querySelector(".info");
const nav_t = document.querySelector(".nav .nav_t");

// header클릭하면 다시 보이게
header.addEventListener("click", () => {
  info.style.display = "block";
});

//알고리즘: nav리스트 아이콘 클릭하면 , info 모두 지우고, 특정한 item_list불러옴

nav_t.addEventListener("click", () => {
  info.style.display = "none";

  document.querySelector(".info .items_list .t").style.display = "block";
});
