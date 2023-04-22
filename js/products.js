const sortDropDownBtn = document.querySelector(".Sort-btn");
const sortDropDown = document.querySelector(".sortDropDown");
const hideFilterbtn = document.querySelector(".filter-btn");
const filterBox = document.querySelector(".filterContainer");
function activeDropDown() {
  sortDropDown.classList.toggle("active");
}
//show-off filter-box-item
function toggleFilterBoxItem(e) {
  var item = document.querySelector("." + e + " .boxContent");
  item.classList.toggle("hidden");
  // console.log(item);
}
//show-off filter-box
function toggleFilterBox() {
  filterBox.classList.toggle("hidden");
}
