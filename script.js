const header = document.getElementById('header');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 650){
        header.style.backdropFilter = 'blur(10px)';
        header.style.backgroundColor = 'rgba(0,0,0,0.4)';
        header.style.paddingBlock = '10px'
    }else{
        header.style.backgroundColor = 'transparent'
         header.style.backdropFilter = 'blur(0px)';
    }
})