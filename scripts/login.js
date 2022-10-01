let user_data  = JSON.parse(localStorage.getItem("user_data")) || [];

let submit = document.getElementById("submit");
submit.addEventListener("click",()=>{



        if(user_data.length==0){
            alert("no user till now");
            return;
        }
        
        let email=document.querySelector("#email").value;
        let password=document.querySelector("#password").value;
        let userobj={emailaddress:email,pass:password};
        isSignedin=false;
        user_data.forEach(function(ele){
           if(userobj.emailaddress =="" || userobj.pass ==""){
            alert("field is empty !");
            return; 
           }


            if(ele.email==userobj.emailaddress && ele.password==userobj.pass){
                isSignedin=true;
                localStorage.setItem("login",JSON.stringify(ele));
                alert("You are successfully Logged in");
               // window.location.href="index.html";
            }
         })
        if(isSignedin==false){
        alert("user does not exist");
    }
})