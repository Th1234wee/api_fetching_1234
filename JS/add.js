var text = '';
document.getElementById('submit').addEventListener('click',()=>{
    var id     = document.getElementById('id').value;
    var Name   = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var phone  = document.getElementById('phone').value;

    text +=`
        <tr>
            <td>${id}</td>
            <td>${Name}</td>
            <td>${gender}</td>
            <td>${phone}</td>
        </tr>
    `;
    document.getElementById('display').innerHTML = text;
    // var display = document.getElementById('display');
    // display.append(text);
})
