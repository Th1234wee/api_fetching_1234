//navbar 
const menu = [
    {
        name : "About"
    },
    {
        name : "Men"
    },
    {
        name : "Women"
    },
    {
        name : "Children"
    },
    {
        name : "Contact Me"
    }
]
var navbar = '';
for(let i in menu){
    navbar +=`
            <li class="nav-item px-2">
                <a class="nav-link active fs-5" href="#">${menu[i]['name']}</a>
            </li>
    `;
    // console.log(menu[i]["name"])
    console.log(navbar);
}
const nav =  document.getElementsByClassName("navbar-nav")[0].innerHTML = navbar;
//logo
var logo = "";
const titles = [
    {
        title : "Light Shop"
    }
]
for(let j in titles){
    logo = `
        <img src="../images/logo.avif" alt="" style="width: 90px;">
        <p class="mt-3">${titles[j]["title"]}</p>
    `;
    // console.log(logo)
}
document.getElementById("logo").innerHTML = logo;
// carousel 1
var pica = "";
const picture1 = [
    {
        pic : "../images/pic1.avif",
        title : "Best Model for Women",
        desc: "Best Fashion For Good Lifestyle and Comfortable"
    }
]
for(let k in picture1){
    pica = `
            <img src="${picture1[k]["pic"]}" class="d-block" style="width:100%; height:400px; object-fit:cover;" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${picture1[k]["title"]}</h5>
                <p>${picture1[k]["desc"]}</p>
            </div>
    `;
}
document.getElementsByClassName("carousel-item")[0].innerHTML = pica;
//carousel 2
var picb = "";
const picture2 = [
    {
        pic : "../images/pic4.avif",
        title : "Best Model for Women",
        desc: "Best Fashion For Good Lifestyle , Comfortable and confidents"
    }
]
for(let k in picture2){
    picb = `
            <img src="${picture2[k]["pic"]}" class="d-block" style="width:100%; height:400px; object-fit:cover;" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${picture2[k]["title"]}</h5>
                <p>${picture2[k]["desc"]}</p>
            </div>
    `;
}
document.getElementsByClassName("carousel-item")[1].innerHTML = picb;
//carousel 3
var picc = "";
const picture3 = [
    {
        pic : "../images/pic5.avif",
        title : "Best Model for Women",
        desc: "Best Fashion For Good Lifestyle , Comfortable and confidents"
    }
]
for(let k in picture3){
    picc = `
            <img src="${picture3[k]["pic"]}" class="d-block" style="width:100%; height:400px; object-fit:cover;" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${picture3[k]["title"]}</h5>
                <p>${picture3[k]["desc"]}</p>
            </div>
    `;
}
document.getElementsByClassName("carousel-item")[2].innerHTML = picc;
//login form
var form = document.getElementById("form-box");
var log  = document.getElementById("form-login");
// form.style.display = "none";
document.getElementById("login").onclick = () =>{
    form.style.display = "flex";
    form.style.top = "0"
    form.style.justifyContent = "center";
}
document.getElementById("cancel").addEventListener("click",()=>{
    form.style.display = "none";
})
document.getElementById("logins").addEventListener("click",()=>{
    document.getElementsByClassName("box-1")[0].style.display = "none";

})






