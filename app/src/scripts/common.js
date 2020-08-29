// Navbar

const headerNav = document.querySelector('.header__nav'),
    headerNavPosition = 30
headerNav.style.top = headerNavPosition + 'px'

const positions = [
        0,
        products.getBoundingClientRect().y,
        team.getBoundingClientRect().y,
        get.getBoundingClientRect().y
    ],

    links = [...document.querySelectorAll('.header__link')]

const activateLink = () => {
    positions.forEach((Y, i) => {
        if (scrollY >= Y) {
            links.forEach(el => el.classList.remove('active'))
            links[i].classList.add('active')
        }
    })
}

addEventListener('scroll', () => {
    if (headerNavPosition > scrollY) {
        headerNav.style.top = `${headerNavPosition - scrollY }px`
    } else {
        headerNav.style.top = '0px'
    }
    activateLink()
})


//Products Tab

const productsLinks = [...document.querySelectorAll('.products__link')],
    productItems = [...document.querySelectorAll('.products__item')],
    productsElements = document.querySelector('.products__elements')

productsLinks.forEach(item => item.onclick = function (e) {
    e.preventDefault()
    if (!this.classList.contains('active')) {

        let itemClass = this.getAttribute('data-class')

        productsLinks.forEach(el => el.classList.remove('active'))
        this.classList.add('active')

        productsElements.style.opacity = '0'
        setTimeout(() => {
            productsElements.innerHTML = ''

            productItems.forEach(el => {
                if (el.getAttribute('data-class') == itemClass || itemClass == 'all') {
                    productsElements.append(el)
                }
            })
        }, 1000);
        
        setTimeout(() => {
            productsElements.style.opacity = '1'
        }, 1000);
    }
})