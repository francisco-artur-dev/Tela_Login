
var email= document.getElementById("email");
var senha= document.getElementById("senha");
var sms= document.getElementById("sms");
var botao=document.getElementById("botao");

botao.addEventListener("click",function(){
      
if(email.value== "" || senha.value=="" || email.value== null || senha.value==null){
     if (email.value=="") {

    email.setAttribute("style","border-color:red");

   } if (senha.value=="" || isNaN(senha)) {

    senha.setAttribute("style","border-color:red");
   }  
   
}else{
     senha.value="" ;
     email.value="" ;
     sms.innerText="Os seus dados foram enviados!";
     sms.setAttribute("style","color:black;");
     
    }
    setTimeout(() => {
        sms.innerText="";
    }, 2000);
});

 function validaCampos() {
  
    try {
       if (senha.value <= 7) {
        throw("senha deve ter no minimo 8 caracteres")
       // senha.setAttribute("style", "background-color:red;");
        
       } else {
        senha.setAttribute("style", "border-color:green;");
       }
        
    } catch (err) {
        var msg=document.getElementById("sms");
        msg.innerHTML="Erro:"+ err +".";
    }
 }
