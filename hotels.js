openhotelPage = function(){
    if(document.getElementById('cname').value === 'vizag' ||document.getElementById('cname').value=== 'VIZAG'){
        window.open("hotelsvizag.html")
    }
    else if(document.getElementById('cname').value === 'HYDERABAD' ||document.getElementById('cname').value=== 'hyderabad'){
        window.open("hotelshyd.html")
    }
    else{
        alert("no Hotels  found !!!")
    }
    
}