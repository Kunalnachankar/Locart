$(function(){
    
    var btn = document.querySelector('.btn');
    
    btn.addEventListener("click", function() {
        btn.innerHTML = "Signing In";
        btn.classList.add('spinning');
        
      setTimeout( 
            function  (){  
                btn.classList.remove('spinning');
                btn.innerHTML = "Sign In";
                
            }, 6000);
    }, false);
    
});