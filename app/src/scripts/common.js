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

//Team navigation

const workersBigImage = document.querySelector('.team__workers-big'),
    workersBigName = document.querySelector('.team__workers-name'),
    teamWorkers = [...document.querySelectorAll('.team__worker')]
let teamIndicator = 1;
teamWorkers.forEach(worker => worker.onclick = () => {
    if (teamIndicator) {
        teamIndicator = 0;
        workersBigImage.style.opacity = '0'
        workersBigName.style.opacity = '0'
        worker.style.opacity = '0'
        worker.style.transition = '1s'
        const name = worker.querySelector('.team__worker-name').innerHTML,
            img = worker.querySelector('.team__worker-image').getAttribute('src')
        setTimeout(() => {
            worker.querySelector('.team__worker-name').innerHTML = workersBigName.innerHTML
            worker.querySelector('.team__worker-image').setAttribute('src', workersBigImage.getAttribute('src'))
            workersBigImage.setAttribute('src', img)
            workersBigName.innerHTML = name
        }, 1000);
        setTimeout(() => {
            workersBigImage.style.opacity = '1'
            workersBigName.style.opacity = '1'
            worker.style.opacity = '1'
            teamIndicator = 1;
        }, 1000);
    }
})