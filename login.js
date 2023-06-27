openloginPage = function(){
    if(document.getElementById('uname').value === 'sidk' && document.getElementById('password').value=== 'sid'){
        window.open("loginpage2.html")
    }
    else if(document.getElementById('uname').value === 'venky' && document.getElementById('password').value=== 'venky'){
        window.open("loginpage3.html")
    }
    else{
        alert("Wrong Credentials !!!")
    }
    
}