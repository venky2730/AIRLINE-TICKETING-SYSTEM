openContactPage = function(){
    if(document.getElementById('cname').value=== 'HYDERABAD' ||document.getElementById('cname').value=== 'hyderabad'){
        window.open("hyderabadcontact.html")
    }
    else if(document.getElementById('cname').value === 'vizag' ||document.getElementById('cname').value=== 'VIZAG'){
        window.open("vizagcontact.html")
    }
    else{
        alert("no contacts found !!!")
    }
    
}