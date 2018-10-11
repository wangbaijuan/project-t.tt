let login = document.querySelector('#login');
let unameBox = document.querySelector("form.login .username");
let unameInput = document.querySelector(".uname");
let upwdBox = document.querySelector("form.login .password");
let upwdInput = document.querySelector(".upwd");
//手机号或邮箱验证
let regTell = /^1\d{10}$/;
let regMail =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

$("form.login").on("keydown","div input:not(:checkbox)", function(e){
    if(e.keyCode===8){
        setTimeout( function(){
            console.log(unameInput.value);
            canLogin();
        } )
        
    }
   setTimeout( function(){
        if(regTell.test(unameInput.value)  || regMail.test(unameInput.value)  ){
            canLogin();
        }
    } )
    
})

unameInput.addEventListener("focus", function(){
    unameBox.classList.add("active");
})
unameInput.addEventListener("blur", function(){
    unameBox.classList.remove("active");
    var value = this.value;
    if(value){

        if( regTell.test(value) || regMail.test(value) ){
            unameInput.nextElementSibling.classList.add("d-none");
        }
        else {
            unameInput.nextElementSibling.classList.remove("d-none");
        }
    }
    
})
upwdInput.addEventListener("focus", function(){
    upwdBox.classList.add("active");
})
upwdInput.addEventListener("blur", function(){
    upwdBox.classList.remove("active");
})

function canLogin(){
    if(( regTell.test(unameInput.value)  || regMail.test(unameInput.value) ) && upwdInput.value ){
        login.style.opacity = 1;   
    }
    else {
        login.style.opacity = 0.618;
    }
}

login.addEventListener('click', function(e) {
    e.preventDefault();
    if(( regTell.test(unameInput.value)  || regMail.test(unameInput.value) ) && upwdInput.value ){
        window.open("index.html?login","_blank");
    }
  
});

