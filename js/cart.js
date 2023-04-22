const addcartBtn = document.querySelectorAll(".cart-icon");
const mainTotalPrice = document.querySelector(".totalPriceCart span");
const cart = document.querySelector("tbody");
const tabCart = document.querySelector(".cart");
const toggleCart = document.querySelector(".shop-icon");
const bodyModal= document.querySelector(".modal-body");
const addModalBtn=document.querySelectorAll(".view-icon")
toggleCart.addEventListener("click", () => {
  tabCart.classList.toggle("active");
});
addModalBtn.forEach((item)=>{
    item.addEventListener("click",(e)=>{  
    var product = e.target.closest(".product-item");
    var imgProduct = product.querySelector(".product-img").src;
    var nameProduct = product.querySelector(".product-name").innerText;
    var priceSale = product.querySelector(".priceSale").innerText;
    var priceRaw = product.querySelector(".price").innerText;
    addToModal(imgProduct, nameProduct, priceSale, priceRaw);
    });
});
function addToModal(img, name, priceSale, priceRaw){
  var contentModal=`  <div class="newProduct">
                  <div class="newProductContainer">
                    <div class="newProductItem">
                      <div class="newProductBox">
                        <div class="productImg">
                          <div class="productImgContent">
                            <img src=${img} alt="" class="bigImg1" />
                          </div>
                        </div>
                        <div class="productContent">
                          <h3 class="productName">${name}</h3>
                          <div class="sizeBox">
                            <p>Size</p>
                            <div class="sizeBoxoption">
                              <div
                                class="sizeOption size37 active "
                                
                              >
                                37
                              </div>
                              <div class="sizeOption size38"  >
                                38
                              </div>
                              <div class="sizeOption size39"  >
                                39
                              </div>
                              <div class="sizeOption size40" >
                                40
                              </div>
                              <div class="sizeOption size41" >
                                41
                              </div>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dignissimos, repellendus magni alias, quibusdam rerum placeat
                            sit ipsa velit dolorum nostrum hic laudantium commodi at quod
                            voluptatem illum quae! Deserunt, optio!
                          </p>
                          <div class="price">
                            <div class="price">${priceSale} <span>${priceRaw}</span></div>
                            <button class="cartBtn">ADD TO CART</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`
         
          bodyModal.innerHTML=contentModal;          
          renewAddToCart(img,name,priceSale);
          // changeSize()
          
}
//chức năng đổi size trong Modal
function changeSize() {
  var listSizeOption = document.querySelectorAll(
    ".newProduct .sizeBoxoption .sizeOption"
  );
  listSizeOption.forEach((item)=>{
      item.addEventListener("click",(e)=>{
        listSizeOption.forEach((item)=>{
          item.classList.remove("active")
        })
        e.target.classList.toggle("active");
      })
    })  
}
function renewAddToCart(img, name, price){
  changeSize();
  var addbtn=document.querySelector(".cartBtn")
  addbtn.addEventListener("click",()=>{
    var check = 0;
  var listProduct = cart.querySelectorAll("tr");
  var productItem = document.createElement("tr");
  var size=document.querySelector(".sizeOption.active ").innerText;
  var productContent = ` 
    <tr class="cartItems">
        <td class="imgItems">
            <div class="">
                <img src=${img} alt="" />
            </div>
        </td>
        <td class="nameItems">
            <div class="">
                <p>${name}</p>
            </div>
        </td>
        <td class="priceItems">
            <div class="">${price}</div>
        </td>
        <td class="sizeItems">
            <div class="">${size}</div>
        </td>
        <td class="amountsItems">
            <div class="">
                <input type="number" value="1" min="1" />
            </div>
        </td>
        <td class="deleteProductOption">
            <div class="boxDeleteBtn">
                <div class="deleteBtn" >Delete all</div>
            </div>
        </td>
    </tr>`;
  productItem.innerHTML = productContent;
  if (listProduct.length > 0) {
    listProduct.forEach((item) => {
      var itemName = item.querySelector(".nameItems p").innerText;

      var itemimg = item.querySelector("img").src;
      var itemsize= item.querySelector(".sizeItems div").innerText;
      var amount = item.querySelector("input").value;
      if (img == itemimg && name == itemName && size==itemsize ) {
        item.querySelector("input").value = parseInt(amount) + 1;
        check = 1;
      }
    });
  } else {
    cart.append(productItem);
  }
  if (check == 0) {
    cart.append(productItem);
  }
  // var amountCartHeader=document.querySelector(".shop span")
  // amountCartHeader.innerText=listProduct.length;
  deleteCart();
  calculateTotalPrice();
  inputChange();
  })
}
function calculateTotalPrice() {
  var listProductItems = document.querySelectorAll("tbody tr");
  var totalPrice = 0;
  for (i = 0; i < listProductItems.length; i++) {
    var amount = listProductItems[i].querySelector("input").value;
    var priceString =
      listProductItems[i].querySelector(".priceItems div").innerHTML;
    var price = parseInt(priceString.slice(0, priceString.length - 3));
    totalPrice += price * amount * 1000;
  }
  mainTotalPrice.innerHTML = totalPrice.toLocaleString("de-DE");
}
function deleteCart() {
  var listProduct = cart.querySelectorAll("tr");
  listProduct.forEach((item) => {
    var deleteBtn = item.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      item.remove();
      calculateTotalPrice();
    });
  });
}
function inputChange() {
  var listProduct = cart.querySelectorAll("tr");
  listProduct.forEach((item) => {
    var inputAmount = item.querySelector("input");
    inputAmount.addEventListener("change", () => {
      calculateTotalPrice();
    });
  });
}
// chức năng open/close useroptions
function onOfUseroptions() {
  let useritem = document.querySelector(".user-dropdown");
  useritem.classList.toggle("active");
}
