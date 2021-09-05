function validateForm(){
    let c = document.getElementById('clickable')
    let v = document.getElementById('email')
    let x= document.getElementById('email').value;
    let y = document.getElementById('reddot')
    let z = document.getElementById('redwords')
    if (x ===''){
        y.style.display ='block'
        z.style.display ='block'
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
        c.style.borderColor = 'red'
        c.style.borderWidth = '2px'
    
    
    } else if (x.includes('@') === false){
        y.style.display ='block'
        z.style.display ='block'
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
        c.style.borderColor = 'red'
        c.style.borderWidth = '2px'
    
    } else if(x.includes('@') === true && x.length<4){
        y.style.display ='block'
        z.style.display ='block'
        v.style.border = 'red'
        v.style.borderWidth = '1px'
        c.style.borderColor = 'red'
        c.style.borderWidth = '2px'
        
    }else if ( x.includes('@') === true){
       
        document.getElementById("myForm").submit();
     }
}

