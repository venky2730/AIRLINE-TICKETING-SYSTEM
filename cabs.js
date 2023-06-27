openCabsPage = function(){
    if(document.getElementById('cname').value=== 'HYDERABAD' || document.getElementById('cname').value=== 'hyderabad'){
        window.open("cabshyd.html")
    }
    else if(document.getElementById('cname').value === 'vizag' ||document.getElementById('cname').value=== 'VIZAG'){
        window.open("cabsvizag.html")
    }
    else{
        alert("no cabs found !!!")
    }
    
}