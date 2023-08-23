var text = "";
navbar = ["Home","About","Blog","Contact"];

navbar.forEach(e => {
    text += `
            <li><a href="#">${e}</a></li>
    `
    document.getElementById("list").innerHTML = text;
});