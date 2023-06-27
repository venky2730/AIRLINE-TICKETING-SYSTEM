openhomePage = function(){
    if(document.getElementById('fname').value === 'vizag' && document.getElementById('tname').value === 'hyderabad'){
        document.date=document.getElementById('date').value
        window.open("flightsvizag.html")
        //document.getElementById('date').value=x
    }
    else if(document.getElementById('fname').value === 'hyderabad' && document.getElementById('tname').value === 'vizag' ){
        window.open("flightshyd.html")
    }
    else{
        alert("no Flights found !!!")
    }
    
}
