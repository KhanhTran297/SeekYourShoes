// chuyen Tab
const profileOption=document.querySelector(".profileOption")
const cartOption=document.querySelector(".cartOption");
const profileTab=document.querySelector(".profileTab")
const cartTab=document.querySelector(".cartTab");
function activeProfileTab(){  
    profileTab.classList.add("active")
    cartTab.classList.remove("active")    
}
function activeCartTab(){  
    cartTab.classList.add("active")
    profileTab.classList.remove("active")  
}