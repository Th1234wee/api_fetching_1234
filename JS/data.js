const Product = [
    {
        "image":"../images/1.avif",
        "Category":"Shoes",
        "Price":"100$",
        "Year":"2023"
    },
    {
        "image":"../images/2.avif",
        "Category":"Shoes",
        "Price":"100$",
        "Year":"2023"
    },
    {
        "image":"../images/3.avif",
        "Category":"Shoes",
        "Price":"100$",
        "Year":"2023"
    },
    {
        "image":"../images/4.avif",
        "Category":"Shoes",
        "Price":"100$",
        "Year":"2023"
    },
]
var text = "";
Product.forEach((e) => {
    console.log(e)
    text += `
            <div class="box">
                <img src="${e.image}" alt="">
                <h3>Category:${e.Category}</h3>
                <p>Price:${e.Price}</p>
                <p>Year: ${e.Year}</p>
            </div>
    `;
    console.log(text)
    document.getElementById("content").innerHTML = text;
} )