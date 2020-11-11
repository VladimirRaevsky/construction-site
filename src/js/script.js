window.addEventListener('DOMContentLoaded',() => {
    const Link  = document.querySelectorAll('.nav__link'),
          Parent = document.querySelector('.header_nav');
          
          
    function hideLink(){
        Link.forEach(item => {
            item.classList.remove('nav__link-active');
        });
    }
    
    function showLink(i = 0){
        Link[i].classList.add('nav__link-active');
    }
    
    hideLink();
    showLink();

    Parent.addEventListener('click', (event)=> {
        const target = event.target;

        if(target && target.classList.contains('nav__link')) {
            Link.forEach((item, i)=> {
                if(target == item) {
                    
                    hideLink();
                    showLink(i);
                }
            });
        }
    });
});