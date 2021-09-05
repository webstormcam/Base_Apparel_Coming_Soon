function validateForm(){
    let x= document.getElementById('email').value;
    let y = document.getElementById('reddot')
    let z = document.getElementById('redwords')
    if (x ===''){
        y.style.display ='block'
        z.style.display ='block'
    
    } else if (x.includes('@') === false){
        y.style.display ='block'
        z.style.display ='block'
    
    } else if(x.includes('@') === true && x.length<4){
        y.style.display ='block'
        z.style.display ='block'
        
    }else if ( x.includes('@') === true){
       
        document.getElementById("myForm").submit();
     }
}

