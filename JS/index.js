var text = '';
var list = ['Home','Categories','About','Blog','Contact'];

list.map(e =>{
    text +=`
        <li><a href="#">${e}</a></li>
    `;
    console.log(text);
    document.querySelector("ul").innerHTML = text;
})