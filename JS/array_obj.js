const menu = [
    {
        name : "កម្សាន្ត"
    },
    {
        name : "បច្ចេកវិទ្យា"
    },
    {
        name : "ជីវិតនិងសង្គម"
    },
    {
        name : "កីឡា"
    },
    {
        name : "សុីហ្គេម 2023"
    }
];

var text = '';
for(let i in menu){
    text += `
        <li><a href="#">${menu[i]['name']}</a></li>   
    `;
}
document.getElementsByClassName('container')[0].innerHTML = `<ul>'+${text}+'</ul>`