openEmbassyPage = function(){
    if(document.getElementById('cname').value === 'usa' ||document.getElementById('cname').value=== 'USA' ||document.getElementById('cname').value=== 'Usa'){
        window.open("https://in.usembassy.gov/")
    }
    else if(document.getElementById('cname').value === 'uk' ||document.getElementById('cname').value=== 'UK' ||document.getElementById('cname').value=== 'Uk'){
        window.open("https://www.gov.uk/world/organisations/british-high-commission-new-delhi")
    }
    else{
        alert("no embassy page found !!!")
    }
    
}