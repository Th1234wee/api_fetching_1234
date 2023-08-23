var username = document.getElementById("name");
var password = document.getElementById("pass");

document.getElementById("submit").addEventListener("click",()=>{
    let user = "Dara";
    let pass = 123;

    if(username.value != "" && password.value !=""){
        if(username.value == user && password.value == pass){
            // alert(123)
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            }).then((result)=>{
                window.location.href = "test12.html"
            }).catch((e)=>{
               if(e){
                swal({
                    title: "Failed",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "OK",
                })
               }
            })   
        }
        else{
            swal({
                title: "Failed",
                text: "You clicked the button!",
                icon: "error",
                button: "OK",
            })
        }
    }
})