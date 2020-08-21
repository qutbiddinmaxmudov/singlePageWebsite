const navBtn = document.querySelector('.header__nav-btn');
navBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if (navBtn.classList.contains('down')) {
        navBtn.classList.remove('down')
        document.querySelector('.header__list').classList.remove('hide')
    }else{
        navBtn.classList.add('down')
        document.querySelector('.header__list').classList.add('hide')
    }
})