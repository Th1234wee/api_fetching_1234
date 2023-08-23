const menu = [
    {
        name : "កម្សាន្ត",
        item : [
            {
                sub_menu : "ជាតិ",
            },
            {
                sub_menu : "អន្តរជាតិ"
            }
        ]
    },
    {
        name : "បច្ចេកវិទ្យា",
        item : [
            {
                sub_menu : "ជាតិ",
            },
            {
                sub_menu : "អន្តរជាតិ"
            }
        ]
    },
    {
        name : "ជីវិតនិងសង្គម",
        item : [
            {
                sub_menu : "News",
            },
            {
                sub_menu : "អន្តរជាតិ"
            }
        ]
    },
    {
        name : "កីឡា",
        item : [
            {
                sub_menu : "បាល់ទាត់",
            },
            {
                sub_menu : "បាល់ទះ"
            }
        ]
    },
    {
        name : "សុីហ្គេម​ 2023",
        item : [
            {
                sub_menu : "ជាតិ",
            },
            {
                sub_menu : "អន្តរជាតិ"
            }
        ]
    }
];
var text = "";
for(let i in menu){
    var submenu = "";
    // console.log(menu[i]["item"])
    for(obj of menu[i]["item"]){
        submenu += `
            <li><a href="#">${obj['sub_menu']}</a></li>     
        `;
    }
    submenu = `
        <div class="drop-menu">
            <ul>
                ${submenu}
            </ul>
        </div>
    `;
    text += `
        <li>
            <a href="#">${menu[i]['name']}</a>
            ${submenu}
        </li>
    `;
}
document.getElementsByClassName("container")[0].innerHTML = `<ul>${text}</ul>`